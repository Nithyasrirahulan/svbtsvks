const { Resend } = require("resend");
const products = require("../data/products.json");

const resend = new Resend(process.env.RESEND_API_KEY);

const ORDER_EMAIL =
  process.env.ORDER_EMAIL || "svbtsivakasi@gmail.com";


// ==========================================
// CORS
// ==========================================


 function cors(req, res) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
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

// ==========================================
// ESCAPE HTML
// ==========================================

function esc(value) {

  return String(value).replace(
    /[&<>"']/g,
    function (m) {

      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      }[m];

    }
  );
}


// ==========================================
// CREATE ORDER ID
// ==========================================

function orderId() {

  const d = new Date();

  const stamp =
    d.toISOString()
      .slice(0, 10)
      .replace(/-/g, "");

  const rand =
    Math.random()
      .toString(36)
      .slice(2, 6)
      .toUpperCase();

  return `SBT-${stamp}-${rand}`;
}


// ==========================================
// VALIDATE EMAIL
// ==========================================

function validEmail(value) {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    value
  );
}


// ==========================================
// VALIDATE MOBILE
// ==========================================

function validMobile(value) {

  return /^[0-9 +()\-]{10,15}$/.test(
    value
  );
}


// ==========================================
// MAIN API
// ==========================================

module.exports = async (req, res) => {

  // Apply CORS
  cors(req, res);


  // ========================================
  // HANDLE CORS PREFLIGHT
  // ========================================

  if (req.method === "OPTIONS") {

    return res.status(204).end();

  }


  // ========================================
  // ONLY POST REQUESTS ALLOWED
  // ========================================

  if (req.method !== "POST") {

    return res.status(405).json({
      error: "Method not allowed"
    });

  }


  try {

    // ======================================
    // GET REQUEST BODY
    // ======================================

    const body = req.body || {};

    const customer =
      body.customer || {};


    // ======================================
    // CUSTOMER VALIDATION
    // ======================================

    if (
      !customer.name ||
      !customer.mobile ||
      !customer.email ||
      !customer.state ||
      !customer.address
    ) {

      return res.status(400).json({
        error:
          "All customer fields are required."
      });

    }


    // ======================================
    // EMAIL VALIDATION
    // ======================================

    if (!validEmail(customer.email)) {

      return res.status(400).json({
        error:
          "Invalid email address."
      });

    }


    // ======================================
    // MOBILE VALIDATION
    // ======================================

    if (!validMobile(customer.mobile)) {

      return res.status(400).json({
        error:
          "Invalid mobile number."
      });

    }


    // ======================================
    // CART VALIDATION
    // ======================================

    if (
      !Array.isArray(body.items) ||
      body.items.length === 0
    ) {

      return res.status(400).json({
        error:
          "Cart is empty."
      });

    }


    // ======================================
    // PROCESS PRODUCTS
    // ======================================

    const lines = [];

    let total = 0;


    for (const item of body.items) {

      // Find product using product ID
      const product =
        products.find(
          p => p.id === item.productId
        );


      // Convert quantity to number
      const quantity =
        Number(item.quantity);


      // ====================================
      // PRODUCT VALIDATION
      // ====================================

      if (!product) {

        return res.status(400).json({
          error:
            `Invalid product: ${item.productId}`
        });

      }


      // ====================================
      // QUANTITY VALIDATION
      // ====================================

      if (
        !Number.isInteger(quantity) ||
        quantity < 1 ||
        quantity > 999
      ) {

        return res.status(400).json({
          error:
            `Invalid quantity for ${product.name}`
        });

      }


      // ====================================
      // CALCULATE AMOUNT
      // ====================================

      // IMPORTANT:
      // Price is taken ONLY from
      // data/products.json

      const amount =
        product.offerPrice * quantity;


      total += amount;


      // Add product to order
      lines.push({
        ...product,
        quantity: quantity,
        amount: amount
      });

    }


    // ==========================================
    // CREATE ORDER ID
    // ==========================================

    const id = orderId();


    // ==========================================
    // CREATE EMAIL TABLE ROWS
    // ==========================================

    const rows = lines
      .map(product => {

        return `
          <tr>

            <td>
              ${esc(product.code)}
            </td>

            <td>
              ${esc(product.name)}
            </td>

            <td>
              ${esc(product.brand)}
            </td>

            <td>
              ${esc(product.pack)}
            </td>

            <td>
              ₹${product.offerPrice.toLocaleString("en-IN")}
            </td>

            <td>
              ${product.quantity}
            </td>

            <td>
              ₹${product.amount.toLocaleString("en-IN")}
            </td>

          </tr>
        `;

      })
      .join("");


    // ==========================================
    // CREATE EMAIL
    // ==========================================

    const html = `

      <div
        style="
          font-family:Arial,sans-serif;
          color:#23140f;
          max-width:900px;
          margin:auto;
        "
      >

        <h2>
          New Order - Srivari Balaji Traders
        </h2>


        <p>
          <b>Order ID:</b>
          ${esc(id)}
        </p>


        <hr>


        <h3>
          Customer Details
        </h3>


        <p>

          <b>Name:</b>
          ${esc(customer.name)}

          <br>

          <b>Mobile:</b>
          ${esc(customer.mobile)}

          <br>

          <b>Email:</b>
          ${esc(customer.email)}

          <br>

          <b>State:</b>
          ${esc(customer.state)}

          <br>

          <b>Address:</b>
          ${esc(customer.address)}

        </p>


        <hr>


        <h3>
          Order Items
        </h3>


        <table
          border="1"
          cellpadding="7"
          cellspacing="0"
          style="
            border-collapse:collapse;
            width:100%;
          "
        >

          <thead>

            <tr>

              <th>
                Code
              </th>

              <th>
                Product
              </th>

              <th>
                Brand
              </th>

              <th>
                Pack
              </th>

              <th>
                Offer Price
              </th>

              <th>
                Qty
              </th>

              <th>
                Amount
              </th>

            </tr>

          </thead>


          <tbody>

            ${rows}

          </tbody>

        </table>


        <h2>
          Total:
          ₹${total.toLocaleString("en-IN")}
        </h2>


        <hr>


        <p>
          Generated from the
          Srivari Balaji Traders website.
        </p>

      </div>

    `;


    // ==========================================
    // SEND EMAIL THROUGH RESEND
    // ==========================================

    const result =
      await resend.emails.send({

        from:
          process.env.FROM_EMAIL ||
          "Srivari Balaji Traders <onboarding@resend.dev>",

        to: [
          ORDER_EMAIL
        ],

        reply_to:
          customer.email,

        subject:
          `New Order ${id} - Srivari Balaji Traders`,

        html:
          html

      });


    // ==========================================
    // RESEND ERROR
    // ==========================================

    if (result.error) {
  console.error("RESEND ERROR:", result.error);

  return res.status(502).json({
    error: result.error.message || "Resend email error"
  });
}

    // ==========================================
    // SUCCESS RESPONSE
    // ==========================================

    return res.status(200).json({

      ok: true,

      orderId: id,

      total: total

    });


  } catch (error) {

    // ==========================================
    // SERVER ERROR
    // ==========================================

    console.error(
      "Order API error:",
      error
    );

    return res.status(500).json({

      error:
        "Server error while placing order."

    });

  }

};
