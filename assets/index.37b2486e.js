import{R as e}from"./vendor.4291e090.js";import{h as s,a,c as n}from"./fzj.15687861.js";const o=({name:n,emoji:o})=>e.createElement("span",{className:"fzj-category",onClick:e=>{e.stopPropagation(),s(a(n))}},e.createElement("span",{className:"fzj-emoji",dangerouslySetInnerHTML:{__html:o}}),n);const t=({className:a,name:o,color:t})=>{const c=`https://github.com/lencx/fzj/discussions?discussions_q=label%3A${o}`;return e.createElement("span",{style:{background:`#${t}`},className:n("fzj-label",a),onClick:e=>{e.stopPropagation(),s(c)}},e.createElement("span",null,o))};export{o as C,t as L};
