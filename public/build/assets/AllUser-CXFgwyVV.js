import{r as p,_ as N,a as m,c as b,b as j,P as l,j as e}from"./index-CWCk8Mfu.js";import{f as w,p as T}from"./api-helnlucg.js";import{C as E}from"./CRow-D5FXM-Wo.js";import{C as U}from"./CCol-DELpJvbl.js";import{C as u,a as A}from"./CCardBody-CjD5VXLl.js";import{C as R}from"./CCardHeader-DfyZxt5z.js";import{C as z,a as F,b as v,c,d as S,e as d}from"./CTable-CUUuWsJ5.js";import{C as B}from"./CFormLabel-C5kMTk4Z.js";var h=p.forwardRef(function(a,n){var i,s=a.className,r=a.id,o=a.invalid,t=a.label,y=a.reverse,x=a.size,f=a.type,g=f===void 0?"checkbox":f,C=a.valid,k=N(a,["className","id","invalid","label","reverse","size","type","valid"]);return m.createElement("div",{className:b("form-check form-switch",(i={"form-check-reverse":y},i["form-switch-".concat(x)]=x,i["is-invalid"]=o,i["is-valid"]=C,i),s)},m.createElement("input",j({type:g,className:b("form-check-input",{"is-invalid":o,"is-valid":C}),id:r},k,{ref:n})),t&&m.createElement(B,j({customClassName:"form-check-label"},r&&{htmlFor:r}),t))});h.propTypes={className:l.string,id:l.string,invalid:l.bool,label:l.oneOfType([l.string,l.node]),reverse:l.bool,size:l.oneOf(["lg","xl"]),type:l.oneOf(["checkbox","radio"]),valid:l.bool};h.displayName="CFormSwitch";function $(){const[a,n]=p.useState([]);p.useEffect(()=>{(async()=>{try{const r=await w("/api/appUsers");n(r.data)}catch(r){console.error("Error fetching users:",r)}})()},[]);const i=async s=>{const r={...s,blocked:s.blocked===1?0:1};try{await T("/api/appUsers",r),n(o=>o.map(t=>t.id===s.id?r:t))}catch(o){console.error("Error updating user:",o)}};return e.jsx(E,{children:e.jsx(U,{xs:12,children:e.jsxs(u,{className:"mb-4",children:[e.jsx(R,{children:e.jsx("strong",{children:"All Users"})}),e.jsx(A,{children:e.jsx("div",{className:"table-responsive",children:e.jsxs(z,{children:[e.jsx(F,{children:e.jsxs(v,{children:[e.jsx(c,{scope:"col",children:"Id"}),e.jsx(c,{scope:"col",children:"Name"}),e.jsx(c,{scope:"col",children:"Email"}),e.jsx(c,{scope:"col",children:"Mobile"}),e.jsx(c,{scope:"col",children:"Type"}),e.jsx(c,{scope:"col",children:"Blocked"})]})}),e.jsx(S,{children:a.map((s,r)=>e.jsxs(v,{children:[e.jsx(c,{scope:"row",children:r+1}),e.jsx(d,{children:s.name}),e.jsx(d,{children:s.email}),e.jsx(d,{children:s.mobile}),e.jsx(d,{children:s.type}),e.jsx(d,{children:e.jsx(h,{id:`formSwitchCheckDefault${s.id}`,checked:s.blocked===1,onChange:()=>i(s)})})]},s.id))})]})})})]})})})}export{$ as default};
