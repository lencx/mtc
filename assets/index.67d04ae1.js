import{g as e,r,u as t,R as s}from"./vendor.3dd78377.js";const n=e`
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
`,o={":unicorn:":"🦄",":question:":"❓",":bulb:":"💡",":crab:":"🦀",":vs:":"🆚",":computer:":"💻",":speech_balloon:":"💬",":desktop_computer:":"🖥️",":hammer_and_wrench:":"🛠️"};function a(){const[e,a]=r.exports.useState({first:5,last:null,prevCursor:null,nextCursor:null}),{loading:l,error:u,data:i}=t(n,{variables:e});if(l)return s.createElement("p",null,"Loading...");if(u)return s.createElement("p",null,"Error :(");const c=i.repository.discussions.edges,{startCursor:m,endCursor:d,hasPreviousPage:p,hasNextPage:f}=i.repository.discussions.pageInfo;return s.createElement("div",{className:"fzj-list"},c.map((({node:e,cursor:r})=>{const{category:t}=e;return s.createElement("div",{className:"fzj-item",key:r},s.createElement("span",{className:"category"},o[t.emoji]," ",t.name),s.createElement("span",{className:"title"},e.title),s.createElement("div",{dangerouslySetInnerHTML:{__html:e.bodyHTML}}))})),p&&s.createElement("button",{onClick:()=>{a({first:null,nextCursor:null,last:5,prevCursor:m})}},"prev"),f&&s.createElement("button",{onClick:()=>{a({last:null,prevCursor:null,first:5,nextCursor:d})}},"next"))}function l(){return s.createElement("div",{className:"home-view"},s.createElement(a,null))}export default l;
