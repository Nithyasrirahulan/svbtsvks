const qt=document.getElementById("quickTable"), qs=document.getElementById("quickSearch"), qc=document.getElementById("quickCategory");
categories().forEach(c=>qc.insertAdjacentHTML("beforeend",`<option>${escapeHtml(c)}</option>`));
let quickQty={};
function renderQuick(){
 const arr=PRODUCTS.filter(p=>(!qs.value||`${p.name} ${p.code} ${p.brand}`.toLowerCase().includes(qs.value.toLowerCase()))&&(!qc.value||p.category===qc.value));
 qt.innerHTML=arr.map(p=>{const q=quickQty[p.id]||0;return `<tr><td><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(p.pack)}</small></td><td>${escapeHtml(p.brand)}</td><td>${money(p.offerPrice)}</td><td><div class="qty"><button onclick="quickSet('${p.id}',${Math.max(0,q-1)})">−</button><span>${q}</span><button onclick="quickSet('${p.id}',${q+1})">+</button></div></td><td>${money(p.offerPrice*q)}</td></tr>`}).join("");
 document.getElementById("quickTotal").textContent=money(Object.entries(quickQty).reduce((s,[id,q])=>s+(PRODUCTS.find(p=>p.id===id)?.offerPrice||0)*q,0));
}
function quickSet(id,q){quickQty[id]=q;renderQuick();}
qs.addEventListener("input",renderQuick);qc.addEventListener("change",renderQuick);
document.getElementById("addSelected").onclick=()=>{Object.entries(quickQty).forEach(([id,q])=>{if(q>0)addToCart(id,q)});location.href="cart.html";};
renderQuick();
