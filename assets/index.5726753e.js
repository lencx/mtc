import{R as e}from"./vendor.5fed8572.js";import{f as a,E as t,L as r}from"./fzj.eaa2740e.js";import{C as s,L as o}from"./index.b04ba98c.js";function n(){const{data:n,loading:l,error:m}=a();if(m)return e.createElement(t,null);if(l||!n.repository)return e.createElement(r,null);const{discussionCategories:i,labels:c}=n.repository;return e.createElement("div",{className:"tags-view"},e.createElement("h2",null,"Categories & Labels"),e.createElement("div",{className:"tag-categories"},i.edges.map((({node:a})=>e.createElement(s,{key:a.id,name:a.name,emoji:a.emojiHTML})))),e.createElement("div",{className:"tag-labels"},c.edges.map((({node:a})=>e.createElement(o,{key:a.id,name:a.name,color:a.color})))))}export default n;