const { Resend } = require("resend");
const products = require("../data/products.json");

const resend = new Resend(process.env.RESEND_API_KEY);

const ORDER_EMAIL =
  process.env.ORDER_EMAIL || "svbtsivakasi@gmail.com";

function cors(res) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    process.env.FRONTEND_ORIGIN || "*"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function createOrderId() {
  const date = new Date();
  const stamp = date.toISOString()
    .slice(0, 10)
    .replace(/-/g, "");

  const random = Math.random()
    .toString(36)
    .slice(2, 6)
    .toUpperCase();

  return `SBT-${stamp}-${random}`;
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validMobile(value) {
  return /^[0-9 +()\-]{10,15}$/.test(value);
}

module.exports = async (req, res) => {
  cors(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const body = req.body || {};
    const customer = body.customer || {};

    if (
      !customer.name ||
      !customer.mobile ||
      !customer.email ||
      !customer.state ||
      !customer.address
    ) {
      return res.status(400).json({
        error: "All customer fields are required."
      });
    }

    if (!validEmail(customer.email)) {
      return res.status(400).json({
        error: "Invalid email address."
      });
    }

    if (!validMobile(customer.mobile)) {
      return res.status(400).json({
        error: "Invalid mobile number."
      });
    }

    if (!Array.isArray(body.items) || body.items.length === 0) {
      return res.status(400).json({
        error: "Cart is empty."
      });
    }

    const lines = [];
    let total = 0;

    for (const item of body.items) {
      const product = products.find(
        (p) => p.id === item.productId
      );

      const quantity = Number(item.quantity);

      if (!product) {
        return res.status(400).json({
          error: `Invalid product: ${item.productId}`
        });
      }

      if (
        !Number.isInteger(quantity) ||
        quantity < 1 ||
        quantity > 999
      ) {
        return res.status(400).json({
          error: `Invalid quantity for ${product.name}`
        });
      }

      const amount = product.offerPrice * quantity;

      total += amount;

      lines.push({
        ...product,
        quantity,
        amount
      });
    }

    const id = createOrderId();

    const rows = lines.map((product) => `
      <tr>
        <td>${escapeHtml(product.code)}</td>
        <td>${escapeHtml(product.name)}</td>
        <td>${escapeHtml(product.brand)}</td>
        <td>${escapeHtml(product.pack)}</td>
        <td>₹${product.offerPrice.toLocaleString("en-IN")}</td>
        <td>${product.quantity}</td>
        <td>₹${product.amount.toLocaleString("en-IN")}</td>
      </tr>
    `).join("");

    const html = `
      <div style="font-family:Arial,sans-serif;color:#23140f">

        <h2>New Order - Srivari Balaji Traders</h2>

        <p>
          <b>Order ID:</b> ${escapeHtml(id)}
        </p>

        <h3>Customer Details</h3>

        <p>
          <b>Name:</b> ${escapeHtml(customer.name)}<br>
          <b>Mobile:</b> ${escapeHtml(customer.mobile)}<br>
          <b>Email:</b> ${escapeHtml(customer.email)}<br>
          <b>State:</b> ${escapeHtml(customer.state)}<br>
          <b>Address:</b> ${escapeHtml(customer.address)}
        </p>

        <h3>Order Items</h3>

        <table
          border="1"
          cellpadding="7"
          cellspacing="0"
          style="border-collapse:collapse"
        >
          <thead>
            <tr>
              <th>Code</th>
              <th>Product</th>
              <th>Brand</th>
              <th>Pack</th>
              <th>Offer Price</th>
              <th>Qty</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            ${rows}
          </tbody>
        </table>

        <h2>
          Total: ₹${total.toLocaleString("en-IN")}
        </h2>

        <p>
          Generated from the Srivari Balaji Traders website.
        </p>

      </div>
    `;

    const result = await resend.emails.send({
      from:
        process.env.FROM_EMAIL ||
        "Srivari Balaji Traders <onboarding@resend.dev>",

      to: [ORDER_EMAIL],

      reply_to: customer.email,

      subject:
        `New Order ${id} - Srivari Balaji Traders`,

      html
    });

    if (result.error) {
      console.error(result.error);

      return res.status(502).json({
        error: "Email could not be sent. Please try again."
      });
    }

    return res.status(200).json({
      ok: true,
      orderId: id,
      total
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Server error while placing order."
    });
  }
};
