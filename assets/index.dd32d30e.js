import{R as e,l as t,r as a}from"./vendor.5933ff1c.js";import{A as s,b as r,f as n,L as l,E as m}from"./fzj.60cfc818.js";const o=({data:t})=>{const{author:a}=t;return e.createElement("div",{className:"comment-item",key:t.id},e.createElement(s,{className:"comment-author",avatar:a.avatarUrl,name:a.login}),e.createElement("div",{className:"comment-body",dangerouslySetInnerHTML:{__html:t.bodyHTML}}))};function c(){const{issues:s}=t(),[c,{loading:i,error:d,data:u}]=r(s),f=n();if(a.exports.useEffect((()=>{f.has(s)||c()}),[]),i)return e.createElement(l,null);if(d)return e.createElement(m,null);const E=u||f.get(s);if(!E)return null;const{title:v,bodyHTML:y,comments:p}=E.repository.discussion;return e.createElement("div",{className:"issues-view view"},e.createElement("div",{className:"post"},e.createElement("h1",{className:"title"},v),e.createElement("div",{dangerouslySetInnerHTML:{__html:y}}),p.edges.map((({node:t})=>e.createElement(o,{key:t.id,data:t})))))}export default c;