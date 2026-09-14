const itemsEl=document.getElementById("cartItems"), empty=document.getElementById("cartEmpty"), content=document.getElementById("cartContent");
function renderCart(){
 const items=cartItems(); empty.hidden=items.length>0;content.hidden=items.length===0;
 itemsEl.innerHTML=items.map(p=>`<div class="cart-row"><div><span class="pill">${escapeHtml(p.category)}</span><h3>${escapeHtml(p.name)}</h3><p class="muted">${escapeHtml(p.brand)} · ${escapeHtml(p.pack)}</p></div><div class="cart-price">${money(p.offerPrice)}</div><div class="qty"><button onclick="setCartQty('${p.id}',${p.qty-1});renderCart()">−</button><span>${p.qty}</span><button onclick="setCartQty('${p.id}',${p.qty+1});renderCart()">+</button></div><strong>${money(p.amount)}</strong><button class="icon-btn" onclick="setCartQty('${p.id}',0);renderCart()">✕</button></div>`).join("");
 document.getElementById("cartSubtotal").textContent=money(cartTotal());updateCartCount();
}
document.getElementById("clearCart").onclick=()=>{localStorage.removeItem(CART_KEY);renderCart();};renderCart();
