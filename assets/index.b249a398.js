import{g as e,R as r,r as t,u as a}from"./vendor.3dd78377.js";const n=e`
  query FZJ_LIST(
    $first: Int
    $last: Int
    $prevCursor: String
    $nextCursor: String
  ) {
    repository(name: "fzj", owner: "lencx") {
      discussions(
        first: $first
        last: $last
        after: $nextCursor
        before: $prevCursor
      ) {
        totalCount
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
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
`,s={":unicorn:":"🦄",":question:":"❓",":bulb:":"💡",":crab:":"🦀",":vs:":"🆚",":computer:":"💻",":speech_balloon:":"💬",":desktop_computer:":"🖥️",":hammer_and_wrench:":"🛠️"};const o=({avatar:e,name:t})=>r.createElement("div",{className:"fzj-avatar"},r.createElement("img",{src:e}),r.createElement("span",null,t));function l(){const[e,l]=t.exports.useState({first:5,last:null,prevCursor:null,nextCursor:null}),{loading:u,error:i,data:c}=a(n,{variables:e});if(u)return r.createElement("p",null,"Loading...");if(i)return r.createElement("p",null,"Error :(");const m=c.repository.discussions.edges,{startCursor:d,endCursor:v,hasPreviousPage:p,hasNextPage:f}=c.repository.discussions.pageInfo;return r.createElement("div",{className:"fzj-list"},m.map((({node:e,cursor:t})=>{const{category:a,author:n}=e;return r.createElement("div",{className:"fzj-item",key:t},r.createElement("div",{className:"title"},e.title),r.createElement("div",{className:"info"},r.createElement("span",{className:"category"},s[a.emoji]," ",a.name),r.createElement(o,{avatar:n.avatarUrl,name:n.login})),r.createElement("div",{dangerouslySetInnerHTML:{__html:e.bodyHTML}}))})),p&&r.createElement("button",{onClick:()=>{l({first:null,nextCursor:null,last:5,prevCursor:d})}},"prev"),f&&r.createElement("button",{onClick:()=>{l({last:null,prevCursor:null,first:5,nextCursor:v})}},"next"))}function u(){return r.createElement("div",{className:"home-view"},r.createElement(l,null))}export default u;
