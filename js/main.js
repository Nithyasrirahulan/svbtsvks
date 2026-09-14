const CART_KEY = "sbt_cart_v1";
function money(n){ return "₹" + Number(n).toLocaleString("en-IN",{maximumFractionDigits:2}); }
function getCart(){ try{return JSON.parse(localStorage.getItem(CART_KEY)||"{}")}catch(e){return{}} }
function saveCart(c){localStorage.setItem(CART_KEY,JSON.stringify(c)); updateCartCount();}
function addToCart(id,qty=1){const c=getCart(); c[id]=(c[id]||0)+Number(qty); if(c[id]<1)delete c[id]; saveCart(c);}
function setCartQty(id,qty){const c=getCart(); if(Number(qty)>0)c[id]=Number(qty);else delete c[id];saveCart(c);}
function cartItems(){const c=getCart();return Object.entries(c).map(([id,qty])=>{const p=PRODUCTS.find(x=>x.id===id);return p?{...p,qty:Number(qty),amount:p.offerPrice*Number(qty)}:null}).filter(Boolean);}
function cartTotal(){return cartItems().reduce((s,x)=>s+x.amount,0);}
function updateCartCount(){const el=document.getElementById("cartCount");if(el)el.textContent=Object.values(getCart()).reduce((a,b)=>a+Number(b),0);}
document.addEventListener("DOMContentLoaded",()=>{updateCartCount();const b=document.getElementById("menuBtn"),n=document.getElementById("navLinks");if(b&&n)b.onclick=()=>n.classList.toggle("open");});
function productCard(p){
 return `<article class="product-card">
   <div class="product-image-wrap"><img class="product-image" src="${escapeHtml(p.image || 'images/products/default.png')}" alt="${escapeHtml(p.name)}" loading="lazy"></div><div class="product-info"><span class="pill">${escapeHtml(p.category)}</span>
   <h3>${escapeHtml(p.name)}</h3><p class="muted">${escapeHtml(p.brand)} · ${escapeHtml(p.pack)}</p>
   <div class="price">${money(p.offerPrice)}</div>
   <div class="product-actions"><div class="qty"><button onclick="addToCart('${p.id}',-1)">−</button><span id="q-${p.id}">1</span><button onclick="addToCart('${p.id}',1)">+</button></div><button class="btn small" onclick="addToCart('${p.id}',1);this.textContent='Added ✓';setTimeout(()=>this.textContent='Add to Cart',800)">Add to Cart</button></div>
   </div></article>`;
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function categories(){return [...new Set(PRODUCTS.map(p=>p.category))];}
function brands(){return [...new Set(PRODUCTS.map(p=>p.brand))];}

if(document.getElementById("categoryGrid")){
 const cg=document.getElementById("categoryGrid");
 cg.innerHTML=categories().slice(0,12).map(c=>`<a class="category-card" href="shop.html?category=${encodeURIComponent(c)}"><strong>${escapeHtml(c)}</strong><div>${PRODUCTS.filter(p=>p.category===c).length} products →</div></a>`).join("");
}
