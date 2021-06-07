import{g as e,R as r,h as s,i as a,j as t,k as n}from"./vendor.f6baed35.js";const o=e`
  query FZJ_LIST($first: Int, $cursor: String) {
    repository(name: "fzj", owner: "lencx") {
      discussions(first: $first, after: $cursor) {
        totalCount
        pageInfo {
          # startCursor
          # hasPreviousPage
          endCursor
          hasNextPage
        }
        edges {
          cursor
          node {
            title
            number
            bodyHTML
            author {
              login
              avatarUrl
              url
            }
            category {
              name
              emoji
            }
            labels(first: 10) {
              edges {
                node {
                  id
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  }
`,i=e`
  query FZJ_ITEM($number: Int!) {
    repository(name: "fzj", owner: "lencx") {
      discussion(number: $number) {
        id
        title
        bodyHTML
        comments(first: 10) {
          edges {
            node {
              id
              bodyHTML
              author {
                login
                avatarUrl
                url
              }
            }
          }
        }
      }
    }
  }
`;function l(e){var r,s,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(s=l(e[r]))&&(a&&(a+=" "),a+=s);else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function c(){for(var e,r,s=0,a="";s<arguments.length;)(e=arguments[s++])&&(r=l(e))&&(a&&(a+=" "),a+=r);return a}const m=({className:e,avatar:s,name:a,onClick:t})=>r.createElement("div",{className:c("fzj-avatar",e),onClick:()=>{t&&t()}},r.createElement("img",{src:s}),r.createElement("span",null,a));const u=({className:e})=>r.createElement("svg",{className:c("spinner",e),width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},r.createElement("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"}));const d=({visible:e})=>e?r.createElement("div",{className:"loading-box"},r.createElement(u,{key:"spin"})):null;d.defaultProps={visible:!0};const f=({visible:e})=>e?r.createElement("div",{className:"error-box"},r.createElement("img",{className:"error-icon",src:"/assets/error.045b384f.svg",alt:"Error :("})):null;f.defaultProps={visible:!0};const g=t({key:"FZJ_LIST",default:[]}),b=()=>s(g),p=t({key:"FZJ_ITEM",default:new Map}),v=n({key:"FZJ_ITEM_VALUE",get:({get:e})=>e(p)}),y=()=>s(p),E=()=>a(v);export{m as A,f as E,o as F,d as L,y as a,E as b,c,i as d,b as u};
