var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,a=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,o=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&a(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&a(e,n,t[n]);return e};import{I as s,A as i,R as A,u as m,r as p,a as u,S as E,b as d,H as b,c as h,d as g}from"./vendor.f6baed35.js";const B=new s({typePolicies:{Query:{fields:{repository:{keyArgs:[],merge:(e,t)=>t}}}}});var k=new i({uri:"https://api.github.com/graphql",headers:{Authorization:`token ${atob("Z2hwX3d6cVptU2liWUVaQTB3VVNxUktaU05BYmFXUGxHUjJQZ2oyTw==")}`},cache:B});function I(){return A.createElement("div",{className:"github-lencx-fzj"},A.createElement("a",{href:"https://github.com/lencx/fzj/discussions"},A.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII="})))}function w(){const e=m();return A.createElement("div",{className:"fzj-header"},A.createElement("div",{className:"logo-box",onClick:()=>e.push("/")},A.createElement("div",{className:"logo"}),A.createElement("div",{className:"desc"})),A.createElement(I,null))}function D(){return A.createElement("div",{className:"fzj-footer"},"© 2020 浮之静 💖 ",A.createElement("a",{href:"https://github.com/lencx"},"lencx"))}const j=e=>A.createElement(p.exports.Suspense,{fallback:e.fallback||null},A.createElement(u,{path:e.path,render:l=>{return e.component&&A.createElement(e.component,(r=o({},l),c={routes:e.routes},t(r,n(c))));var r,c}})),x=({routes:e})=>A.createElement(E,null,e.map((e=>A.createElement(j,o({key:e.path},e)))));let G;const M={},v=function(e,t){if(!t)return e();if(void 0===G){const e=document.createElement("link").relList;G=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in M)return;M[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const l=document.createElement("link");return l.rel=t?"stylesheet":G,t||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),t?new Promise(((e,t)=>{l.addEventListener("load",e),l.addEventListener("error",t)})):void 0}))).then((()=>e()))},J=[{path:"/",component:p.exports.lazy((()=>v((()=>import("./index.53d9283a.js")),["/assets/index.53d9283a.js","/assets/index.04e0f76c.css","/assets/vendor.f6baed35.js","/assets/fzj.e2c52c89.js","/assets/fzj.864e11a3.css"]))),exact:!0},{path:"/issues/:issues",component:p.exports.lazy((()=>v((()=>import("./index.01f8e43d.js")),["/assets/index.01f8e43d.js","/assets/index.a2f6af7f.css","/assets/vendor.f6baed35.js","/assets/fzj.e2c52c89.js","/assets/fzj.864e11a3.css"]))),exact:!0}];function Q(){return A.createElement(d,null,A.createElement(b,null,A.createElement(w,null),A.createElement(x,{routes:J}),A.createElement(D,null)))}h.render(A.createElement(A.StrictMode,null,A.createElement(g,{client:k},A.createElement(Q,null))),document.getElementById("root"));
