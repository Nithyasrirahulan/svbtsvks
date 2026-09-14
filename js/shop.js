const brandFilter=document.getElementById("brandFilter"),categoryFilter=document.getElementById("categoryFilter"),searchInput=document.getElementById("searchInput"),sortFilter=document.getElementById("sortFilter"),grid=document.getElementById("productGrid");
brands().forEach(b=>brandFilter.insertAdjacentHTML("beforeend",`<option>${escapeHtml(b)}</option>`));
categories().forEach(c=>categoryFilter.insertAdjacentHTML("beforeend",`<option>${escapeHtml(c)}</option>`));
function renderShop(){
 let a=PRODUCTS.filter(p=>(!searchInput.value||`${p.name} ${p.brand} ${p.category} ${p.code}`.toLowerCase().includes(searchInput.value.toLowerCase()))&&(!brandFilter.value||p.brand===brandFilter.value)&&(!categoryFilter.value||p.category===categoryFilter.value));
 if(sortFilter.value==="priceAsc")a.sort((x,y)=>x.offerPrice-y.offerPrice);else if(sortFilter.value==="priceDesc")a.sort((x,y)=>y.offerPrice-x.offerPrice);else a.sort((x,y)=>x.name.localeCompare(y.name));
 document.getElementById("resultCount").textContent=`${a.length} products`;
 grid.innerHTML=a.map(productCard).join("")||`<div class="empty">No products found.</div>`;
}
[searchInput,brandFilter,categoryFilter,sortFilter].forEach(x=>x.addEventListener("input",renderShop));renderShop();

const urlCategory=new URLSearchParams(location.search).get("category"); if(urlCategory){categoryFilter.value=urlCategory;renderShop();}
