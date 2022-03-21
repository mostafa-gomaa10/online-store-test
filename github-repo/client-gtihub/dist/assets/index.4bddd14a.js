import{j as h,r as o,a as p,L as m,B as f,S as g,R as u,b,c as y}from"./vendor.56fbd9f0.js";const x=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function a(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=a(r);fetch(r.href,l)}};x();const e=h.exports.jsx,t=h.exports.jsxs,P=h.exports.Fragment;function q(){const[s,c]=o.exports.useState(null),[a,n]=o.exports.useState(""),[r,l]=o.exports.useState("");return t("div",{className:"container w-50 card p-4 mt-3",children:[e("h5",{className:"mb-4",children:"Create A Product"}),t("form",{onSubmit:v=>{const N=document.querySelector("#productForm");v.preventDefault(),p.post("https://online-store-vwn.herokuapp.com/products/add-product",new FormData(N)).then(i=>{console.log(i.data),c(i.data)}).then(()=>{l("uploaded successfully!!"),n("")}).catch(i=>{console.error(i.toJSON()),c(null),l(""),n(i.response.data.error)})},id:"productForm",method:"post",encType:"multipart/form-data",children:[t("div",{className:"row",children:[e("div",{className:"col-12 mt-3",children:e("input",{required:!0,type:"text",name:"name",className:"form-control",placeholder:"Product name"})}),e("div",{className:"col-12 mt-3",children:e("input",{required:!0,type:"number",name:"qty",className:"form-control",placeholder:"quantity"})}),e("div",{className:"col-12 mt-3",children:e("input",{required:!0,type:"number",name:"price",className:"form-control",placeholder:"price"})}),e("div",{className:"col-12 mt-3",children:e("textarea",{required:!0,type:"text",name:"desc",className:"form-control",placeholder:"description",style:{height:"100px",resize:"none"}})})]}),t("div",{className:"row mt-3",children:[e("div",{children:e("input",{required:!0,className:"form-control",type:"file",name:"image",id:"productImage"})}),e("div",{className:"mt-4",children:e("button",{type:"submit",className:"btn btn-primary",children:"Add Product"})})]})]}),e("div",{className:"mt-5"}),r&&e("div",{className:"alert alert-success",role:"alert",children:r}),a&&e("div",{className:"alert alert-danger",role:"alert",children:a}),e("div",{className:"mt-5",children:s?t(P,{children:[t("h5",{children:["name:",s.result.name]}),t("h5",{children:["qty:",s.result.qty]}),t("h5",{children:["price:$",s.result.price]}),t("h5",{children:["dec:",s.result.desc]}),e("div",{style:{height:"200px"},children:e("img",{className:"img-fluid ",src:s.result.image,style:{height:"100%"}})})]}):"Upload A New Product"})]})}function w({name:s,qty:c,price:a,image:n,desc:r}){return e("div",{className:"col-sm-6 col-md-4 col-lg-3 mb-3",children:t("div",{className:"card",children:[e("img",{className:"card-img-top img-fluid",src:n,alt:"Card image cap"}),t("div",{className:"card-body",children:[e("h5",{className:"card-title",children:s}),e("p",{className:"card-text",children:r})]}),t("ul",{className:"list-group list-group-flush",children:[t("li",{className:"list-group-item",children:["price/unit: $",a]}),t("li",{className:"list-group-item",children:["quantity: ",c," units"]})]})]})})}function S(){const[s,c]=o.exports.useState(null);return o.exports.useEffect(()=>{p.get("https://online-store-vwn.herokuapp.com/products/all-products").then(a=>{console.log(a.data.result),c(a.data.result)}).catch(a=>{console.log(a)})},[]),t("div",{className:"p-2",children:[e("h1",{className:"mb-4",children:"All Products"}),e("div",{className:"row",children:s?s.map((a,n)=>e(w,{name:a.name,price:a.price,qty:a.qty,image:a.image,desc:a.desc},n)):e("div",{children:e("h6",{children:"No Products...."})})})]})}function A(){return e("div",{children:e("h1",{className:"mt-5",children:"Home Home..."})})}var j="/assets/store-logo.80ebce89.gif";function F(){return e("div",{children:e("nav",{className:"navbar navbar-expand-md navbar-light bg-dark p-0",children:t("div",{className:"container",children:[e(m,{className:"navbar-brand p-0",to:"/",children:e("img",{src:j,alt:"logo",className:"w-50"})}),e("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:e("span",{className:"navbar-toggler-icon"})}),e("div",{className:"collapse navbar-collapse",id:"navbarNav",children:t("ul",{className:"navbar-nav",children:[e("li",{className:"nav-item",children:e(m,{className:"nav-link text-white fs-4",to:"/add-product",children:"Add Product"})}),e("li",{className:"nav-item",children:e(m,{className:"nav-link text-white fs-4",to:"/all-products",children:"All Products"})})]})})]})})})}function L(){return o.exports.useEffect(()=>{console.log("app jsx mounted")},[]),e(f,{children:t("div",{children:[e(F,{}),t(g,{children:[e(u,{path:"/add-product",children:e(q,{})}),e(u,{path:"/all-products",children:e(S,{})}),e(u,{path:"/",children:e(A,{})})]})]})})}b.render(e(y.StrictMode,{children:e(L,{})}),document.getElementById("root"));