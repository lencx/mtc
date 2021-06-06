import{g as e,R as r}from"./vendor.c750f01c.js";const s=e`
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
          }
        }
      }
    }
  }
`,t=e`
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
`;function a(e){var r,s,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(s=a(e[r]))&&(t&&(t+=" "),t+=s);else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function n(){for(var e,r,s=0,t="";s<arguments.length;)(e=arguments[s++])&&(r=a(e))&&(t&&(t+=" "),t+=r);return t}const o=({className:e,avatar:s,name:t,url:a})=>r.createElement("a",{className:n("fzj-avatar",e),href:a},r.createElement("img",{src:s}),r.createElement("span",null,t));const i=({className:e})=>r.createElement("svg",{className:n("spinner",e),width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},r.createElement("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"}));const l=({visible:e})=>e?r.createElement("div",{className:"loading-box"},r.createElement(i,{key:"spin"})):null;l.defaultProps={visible:!0};const c=({visible:e})=>e?r.createElement("div",{className:"error-box"},r.createElement("img",{className:"error-icon",src:"/assets/error.045b384f.svg",alt:"Error :("})):null;c.defaultProps={visible:!0};export{o as A,c as E,s as F,l as L,t as a};
