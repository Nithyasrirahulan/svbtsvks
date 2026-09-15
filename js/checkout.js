const form = document.getElementById("checkoutForm");
const msg = document.getElementById("checkoutMsg");

function renderCheckout() {
  const items = cartItems();

  if (!items.length) {
    location.href = "cart.html";
    return;
  }

  document.getElementById("checkoutItems").innerHTML =
    items.map(p =>
      `<div class="summary-item">
        <span>${escapeHtml(p.name)} × ${p.qty}</span>
        <strong>${money(p.amount)}</strong>
      </div>`
    ).join("");

  document.getElementById("checkoutTotal").textContent =
    money(cartTotal());
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const items = cartItems();

  if (!items.length) return;

  const btn = document.getElementById("placeOrder");

  btn.disabled = true;
  btn.textContent = "Submitting...";

  const f = new FormData(form);

  const payload = {
    customer: {
      name: f.get("name"),
      mobile: f.get("mobile"),
      email: f.get("email"),
      state: f.get("state"),
      address: f.get("address")
    },

    items: items.map(x => ({
      productId: x.id,
      quantity: x.qty
    }))
  };

  const API_URL =
    "https://svbtsvks-enus.vercel.app/api/orders";

  try {

    const response = await fetch(API_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(payload)
    });

    const text = await response.text();

    let data;

    try {
      data = JSON.parse(text);
    } catch {
      throw new Error(
        `Vercel returned ${response.status}: ${text.substring(0, 200)}`
      );
    }

    if (!response.ok) {
      throw new Error(
        data.error || "Order failed"
      );
    }

    localStorage.removeItem(CART_KEY);

    location.href =
      `success.html?orderId=${encodeURIComponent(data.orderId)}`;

  } catch (error) {

    console.error("Order error:", error);

    msg.innerHTML = `
      <div class="error">
        ${escapeHtml(error.message)}
      </div>
    `;

    btn.disabled = false;
    btn.textContent = "Place Order";
  }
});

renderCheckout();
