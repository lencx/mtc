var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,s=(e,s)=>{for(var n in s||(s={}))r.call(s,n)&&a(e,n,s[n]);if(t)for(var n of t(s))o.call(s,n)&&a(e,n,s[n]);return e};import{R as n,e as i,g as c,f as l,h as u,i as d,j as f,k as p,r as h}from"./vendor.5fed8572.js";function g(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=g(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function y(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=g(e))&&(o&&(o+=" "),o+=t);return o}const m=({className:e})=>n.createElement("svg",{className:y("spinner",e),width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},n.createElement("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"}));const E=({visible:e})=>e?n.createElement("div",{className:"loading-box"},n.createElement(m,{key:"spin"})):null;E.defaultProps={visible:!0};const A=({visible:e})=>e?n.createElement("div",{className:"error-box"},n.createElement("img",{className:"error-icon",src:"/assets/error.045b384f.svg",alt:"Error :("})):null;function O(e){const t=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),r=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;(window.innerHeight||Math.min(document.documentElement.clientHeight,document.body.clientHeight))+r>=t&&e()}function b(e){window.open(e)}function v(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}A.defaultProps={visible:!0};var I=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,U=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]","g"),z="object"==typeof i&&i&&i.Object===Object&&i,j="object"==typeof self&&self&&self.Object===Object&&self,w=z||j||Function("return this")();var T,x=(T={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==T?void 0:T[e]}),S=Object.prototype.toString,k=w.Symbol,Y=k?k.prototype:void 0,Z=Y?Y.toString:void 0;function $(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==S.call(e)}(e))return Z?Z.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}var L=function(e){var t;return(e=null==(t=e)?"":$(t))&&e.replace(I,x).replace(U,"")};const N=[["ß","ss"],["ẞ","Ss"],["ä","ae"],["Ä","Ae"],["ö","oe"],["Ö","Oe"],["ü","ue"],["Ü","Ue"],["À","A"],["Á","A"],["Â","A"],["Ã","A"],["Ä","Ae"],["Å","A"],["Æ","AE"],["Ç","C"],["È","E"],["É","E"],["Ê","E"],["Ë","E"],["Ì","I"],["Í","I"],["Î","I"],["Ï","I"],["Ð","D"],["Ñ","N"],["Ò","O"],["Ó","O"],["Ô","O"],["Õ","O"],["Ö","Oe"],["Ő","O"],["Ø","O"],["Ù","U"],["Ú","U"],["Û","U"],["Ü","Ue"],["Ű","U"],["Ý","Y"],["Þ","TH"],["ß","ss"],["à","a"],["á","a"],["â","a"],["ã","a"],["ä","ae"],["å","a"],["æ","ae"],["ç","c"],["è","e"],["é","e"],["ê","e"],["ë","e"],["ì","i"],["í","i"],["î","i"],["ï","i"],["ð","d"],["ñ","n"],["ò","o"],["ó","o"],["ô","o"],["õ","o"],["ö","oe"],["ő","o"],["ø","o"],["ù","u"],["ú","u"],["û","u"],["ü","ue"],["ű","u"],["ý","y"],["þ","th"],["ÿ","y"],["ẞ","SS"],["à","a"],["À","A"],["á","a"],["Á","A"],["â","a"],["Â","A"],["ã","a"],["Ã","A"],["è","e"],["È","E"],["é","e"],["É","E"],["ê","e"],["Ê","E"],["ì","i"],["Ì","I"],["í","i"],["Í","I"],["ò","o"],["Ò","O"],["ó","o"],["Ó","O"],["ô","o"],["Ô","O"],["õ","o"],["Õ","O"],["ù","u"],["Ù","U"],["ú","u"],["Ú","U"],["ý","y"],["Ý","Y"],["ă","a"],["Ă","A"],["Đ","D"],["đ","d"],["ĩ","i"],["Ĩ","I"],["ũ","u"],["Ũ","U"],["ơ","o"],["Ơ","O"],["ư","u"],["Ư","U"],["ạ","a"],["Ạ","A"],["ả","a"],["Ả","A"],["ấ","a"],["Ấ","A"],["ầ","a"],["Ầ","A"],["ẩ","a"],["Ẩ","A"],["ẫ","a"],["Ẫ","A"],["ậ","a"],["Ậ","A"],["ắ","a"],["Ắ","A"],["ằ","a"],["Ằ","A"],["ẳ","a"],["Ẳ","A"],["ẵ","a"],["Ẵ","A"],["ặ","a"],["Ặ","A"],["ẹ","e"],["Ẹ","E"],["ẻ","e"],["Ẻ","E"],["ẽ","e"],["Ẽ","E"],["ế","e"],["Ế","E"],["ề","e"],["Ề","E"],["ể","e"],["Ể","E"],["ễ","e"],["Ễ","E"],["ệ","e"],["Ệ","E"],["ỉ","i"],["Ỉ","I"],["ị","i"],["Ị","I"],["ọ","o"],["Ọ","O"],["ỏ","o"],["Ỏ","O"],["ố","o"],["Ố","O"],["ồ","o"],["Ồ","O"],["ổ","o"],["Ổ","O"],["ỗ","o"],["Ỗ","O"],["ộ","o"],["Ộ","O"],["ớ","o"],["Ớ","O"],["ờ","o"],["Ờ","O"],["ở","o"],["Ở","O"],["ỡ","o"],["Ỡ","O"],["ợ","o"],["Ợ","O"],["ụ","u"],["Ụ","U"],["ủ","u"],["Ủ","U"],["ứ","u"],["Ứ","U"],["ừ","u"],["Ừ","U"],["ử","u"],["Ử","U"],["ữ","u"],["Ữ","U"],["ự","u"],["Ự","U"],["ỳ","y"],["Ỳ","Y"],["ỵ","y"],["Ỵ","Y"],["ỷ","y"],["Ỷ","Y"],["ỹ","y"],["Ỹ","Y"],["ء","e"],["آ","a"],["أ","a"],["ؤ","w"],["إ","i"],["ئ","y"],["ا","a"],["ب","b"],["ة","t"],["ت","t"],["ث","th"],["ج","j"],["ح","h"],["خ","kh"],["د","d"],["ذ","dh"],["ر","r"],["ز","z"],["س","s"],["ش","sh"],["ص","s"],["ض","d"],["ط","t"],["ظ","z"],["ع","e"],["غ","gh"],["ـ","_"],["ف","f"],["ق","q"],["ك","k"],["ل","l"],["م","m"],["ن","n"],["ه","h"],["و","w"],["ى","a"],["ي","y"],["َ‎","a"],["ُ","u"],["ِ‎","i"],["٠","0"],["١","1"],["٢","2"],["٣","3"],["٤","4"],["٥","5"],["٦","6"],["٧","7"],["٨","8"],["٩","9"],["چ","ch"],["ک","k"],["گ","g"],["پ","p"],["ژ","zh"],["ی","y"],["۰","0"],["۱","1"],["۲","2"],["۳","3"],["۴","4"],["۵","5"],["۶","6"],["۷","7"],["۸","8"],["۹","9"],["ټ","p"],["ځ","z"],["څ","c"],["ډ","d"],["ﺫ","d"],["ﺭ","r"],["ړ","r"],["ﺯ","z"],["ږ","g"],["ښ","x"],["ګ","g"],["ڼ","n"],["ۀ","e"],["ې","e"],["ۍ","ai"],["ٹ","t"],["ڈ","d"],["ڑ","r"],["ں","n"],["ہ","h"],["ھ","h"],["ے","e"],["А","A"],["а","a"],["Б","B"],["б","b"],["В","V"],["в","v"],["Г","G"],["г","g"],["Д","D"],["д","d"],["ъе","ye"],["Ъе","Ye"],["ъЕ","yE"],["ЪЕ","YE"],["Е","E"],["е","e"],["Ё","Yo"],["ё","yo"],["Ж","Zh"],["ж","zh"],["З","Z"],["з","z"],["И","I"],["и","i"],["ый","iy"],["Ый","Iy"],["ЫЙ","IY"],["ыЙ","iY"],["Й","Y"],["й","y"],["К","K"],["к","k"],["Л","L"],["л","l"],["М","M"],["м","m"],["Н","N"],["н","n"],["О","O"],["о","o"],["П","P"],["п","p"],["Р","R"],["р","r"],["С","S"],["с","s"],["Т","T"],["т","t"],["У","U"],["у","u"],["Ф","F"],["ф","f"],["Х","Kh"],["х","kh"],["Ц","Ts"],["ц","ts"],["Ч","Ch"],["ч","ch"],["Ш","Sh"],["ш","sh"],["Щ","Sch"],["щ","sch"],["Ъ",""],["ъ",""],["Ы","Y"],["ы","y"],["Ь",""],["ь",""],["Э","E"],["э","e"],["Ю","Yu"],["ю","yu"],["Я","Ya"],["я","ya"],["ă","a"],["Ă","A"],["ș","s"],["Ș","S"],["ț","t"],["Ț","T"],["ţ","t"],["Ţ","T"],["ş","s"],["Ş","S"],["ç","c"],["Ç","C"],["ğ","g"],["Ğ","G"],["ı","i"],["İ","I"],["ա","a"],["Ա","A"],["բ","b"],["Բ","B"],["գ","g"],["Գ","G"],["դ","d"],["Դ","D"],["ե","ye"],["Ե","Ye"],["զ","z"],["Զ","Z"],["է","e"],["Է","E"],["ը","y"],["Ը","Y"],["թ","t"],["Թ","T"],["ժ","zh"],["Ժ","Zh"],["ի","i"],["Ի","I"],["լ","l"],["Լ","L"],["խ","kh"],["Խ","Kh"],["ծ","ts"],["Ծ","Ts"],["կ","k"],["Կ","K"],["հ","h"],["Հ","H"],["ձ","dz"],["Ձ","Dz"],["ղ","gh"],["Ղ","Gh"],["ճ","tch"],["Ճ","Tch"],["մ","m"],["Մ","M"],["յ","y"],["Յ","Y"],["ն","n"],["Ն","N"],["շ","sh"],["Շ","Sh"],["ո","vo"],["Ո","Vo"],["չ","ch"],["Չ","Ch"],["պ","p"],["Պ","P"],["ջ","j"],["Ջ","J"],["ռ","r"],["Ռ","R"],["ս","s"],["Ս","S"],["վ","v"],["Վ","V"],["տ","t"],["Տ","T"],["ր","r"],["Ր","R"],["ց","c"],["Ց","C"],["ու","u"],["ՈՒ","U"],["Ու","U"],["փ","p"],["Փ","P"],["ք","q"],["Ք","Q"],["օ","o"],["Օ","O"],["ֆ","f"],["Ֆ","F"],["և","yev"],["ა","a"],["ბ","b"],["გ","g"],["დ","d"],["ე","e"],["ვ","v"],["ზ","z"],["თ","t"],["ი","i"],["კ","k"],["ლ","l"],["მ","m"],["ნ","n"],["ო","o"],["პ","p"],["ჟ","zh"],["რ","r"],["ს","s"],["ტ","t"],["უ","u"],["ფ","ph"],["ქ","q"],["ღ","gh"],["ყ","k"],["შ","sh"],["ჩ","ch"],["ც","ts"],["ძ","dz"],["წ","ts"],["ჭ","tch"],["ხ","kh"],["ჯ","j"],["ჰ","h"],["č","c"],["ď","d"],["ě","e"],["ň","n"],["ř","r"],["š","s"],["ť","t"],["ů","u"],["ž","z"],["Č","C"],["Ď","D"],["Ě","E"],["Ň","N"],["Ř","R"],["Š","S"],["Ť","T"],["Ů","U"],["Ž","Z"],["ހ","h"],["ށ","sh"],["ނ","n"],["ރ","r"],["ބ","b"],["ޅ","lh"],["ކ","k"],["އ","a"],["ވ","v"],["މ","m"],["ފ","f"],["ދ","dh"],["ތ","th"],["ލ","l"],["ގ","g"],["ޏ","gn"],["ސ","s"],["ޑ","d"],["ޒ","z"],["ޓ","t"],["ޔ","y"],["ޕ","p"],["ޖ","j"],["ޗ","ch"],["ޘ","tt"],["ޙ","hh"],["ޚ","kh"],["ޛ","th"],["ޜ","z"],["ޝ","sh"],["ޞ","s"],["ޟ","d"],["ޠ","t"],["ޡ","z"],["ޢ","a"],["ޣ","gh"],["ޤ","q"],["ޥ","w"],["ަ","a"],["ާ","aa"],["ި","i"],["ީ","ee"],["ު","u"],["ޫ","oo"],["ެ","e"],["ޭ","ey"],["ޮ","o"],["ޯ","oa"],["ް",""],["α","a"],["β","v"],["γ","g"],["δ","d"],["ε","e"],["ζ","z"],["η","i"],["θ","th"],["ι","i"],["κ","k"],["λ","l"],["μ","m"],["ν","n"],["ξ","ks"],["ο","o"],["π","p"],["ρ","r"],["σ","s"],["τ","t"],["υ","y"],["φ","f"],["χ","x"],["ψ","ps"],["ω","o"],["ά","a"],["έ","e"],["ί","i"],["ό","o"],["ύ","y"],["ή","i"],["ώ","o"],["ς","s"],["ϊ","i"],["ΰ","y"],["ϋ","y"],["ΐ","i"],["Α","A"],["Β","B"],["Γ","G"],["Δ","D"],["Ε","E"],["Ζ","Z"],["Η","I"],["Θ","TH"],["Ι","I"],["Κ","K"],["Λ","L"],["Μ","M"],["Ν","N"],["Ξ","KS"],["Ο","O"],["Π","P"],["Ρ","R"],["Σ","S"],["Τ","T"],["Υ","Y"],["Φ","F"],["Χ","X"],["Ψ","PS"],["Ω","O"],["Ά","A"],["Έ","E"],["Ί","I"],["Ό","O"],["Ύ","Y"],["Ή","I"],["Ώ","O"],["Ϊ","I"],["Ϋ","Y"],["ā","a"],["ē","e"],["ģ","g"],["ī","i"],["ķ","k"],["ļ","l"],["ņ","n"],["ū","u"],["Ā","A"],["Ē","E"],["Ģ","G"],["Ī","I"],["Ķ","K"],["Ļ","L"],["Ņ","N"],["Ū","U"],["č","c"],["š","s"],["ž","z"],["Č","C"],["Š","S"],["Ž","Z"],["ą","a"],["č","c"],["ę","e"],["ė","e"],["į","i"],["š","s"],["ų","u"],["ū","u"],["ž","z"],["Ą","A"],["Č","C"],["Ę","E"],["Ė","E"],["Į","I"],["Š","S"],["Ų","U"],["Ū","U"],["Ќ","Kj"],["ќ","kj"],["Љ","Lj"],["љ","lj"],["Њ","Nj"],["њ","nj"],["Тс","Ts"],["тс","ts"],["ą","a"],["ć","c"],["ę","e"],["ł","l"],["ń","n"],["ś","s"],["ź","z"],["ż","z"],["Ą","A"],["Ć","C"],["Ę","E"],["Ł","L"],["Ń","N"],["Ś","S"],["Ź","Z"],["Ż","Z"],["Є","Ye"],["І","I"],["Ї","Yi"],["Ґ","G"],["є","ye"],["і","i"],["ї","yi"],["ґ","g"],["Ĳ","IJ"],["ĳ","ij"]];function C(e,t){if("string"!=typeof e)throw new TypeError(`Expected a string, got \`${typeof e}\``);t=s({customReplacements:[]},t);const r=new Map([...N,...t.customReplacements]);return e=((e,t)=>{for(const[r,o]of t)e=e.replace(new RegExp(v(r),"g"),o);return e})(e=e.normalize(),r),e=L(e)}const R=[["&"," and "],["🦄"," unicorn "],["♥"," love "]];function M(e,t){if("string"!=typeof e)throw new TypeError(`Expected a string, got \`${typeof e}\``);const r=(t=s({separator:"-",lowercase:!0,decamelize:!0,customReplacements:[],preserveLeadingUnderscore:!1,preserveTrailingDash:!1},t)).preserveLeadingUnderscore&&e.startsWith("_"),o=t.preserveTrailingDash&&e.endsWith("-");e=C(e,{customReplacements:new Map([...R,...t.customReplacements])}),t.decamelize&&(e=(e=>e.replace(/([A-Z]{2,})(\d+)/g,"$1 $2").replace(/([a-z\d]+)([A-Z]{2,})/g,"$1 $2").replace(/([a-z\d])([A-Z])/g,"$1 $2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1 $2"))(e));let a=/[^a-zA-Z\d]+/g;return t.lowercase&&(e=e.toLowerCase(),a=/[^a-z\d]+/g),e=(e=e.replace(a,t.separator)).replace(/\\/g,""),t.separator&&(e=((e,t)=>{const r=v(t);return e.replace(new RegExp(`${r}{2,}`,"g"),t).replace(new RegExp(`^${r}|${r}$`,"g"),"")})(e,t.separator)),r&&(e=`_${e}`),o&&(e=`${e}-`),e}const H=e=>`https://github.com/lencx/fzj/discussions/categories/${M(e)}`,G=e=>`https://github.com/lencx/fzj/discussions/${e}`,P=c`
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
            # bodyHTML
            author {
              login
              avatarUrl
              url
            }
            category {
              name
              emojiHTML
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
`,_=c`
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
`,D=c`
  query FZJ_TAGS {
    repository(name: "fzj", owner: "lencx") {
      discussionCategories(first: 20) {
        edges {
          node {
            id
            name
            emojiHTML
          }
        }
      }
      labels(first: 20) {
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
`,F=u({key:"FZJ_LIST",default:{pageInfo:{},list:[]}}),J=()=>[d(F),f(P,{variables:{first:8,cursor:null}})],K=u({key:"FZJ_ITEM",default:new Map}),q=p({key:"FZJ_ITEM_VALUE",get:({get:e})=>e(K)}),V=e=>{const[t,r]=d(K),o=f(_,{variables:{number:parseInt(e)}});return h.exports.useEffect((()=>{o[1].data&&r(t.set(e,o[1].data))}),[o[1].data]),o},B=()=>l(q),W=u({key:"FZJ_TAGS",default:{}}),Q=p({key:"FZJ_TAGS_VALUE",get:({get:e})=>e(W)}),X=()=>{const[e,a]=d(W),n=l(Q),[i,c]=f(D),u=c,{data:p}=u,g=((e,a)=>{var s={};for(var n in e)r.call(e,n)&&a.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&t)for(var n of t(e))a.indexOf(n)<0&&o.call(e,n)&&(s[n]=e[n]);return s})(u,["data"]);return h.exports.useEffect((()=>{Object.keys(n).length?a(n):i()}),[]),h.exports.useEffect((()=>{p&&a(p)}),[p]),s({data:e},g)};export{A as E,E as L,H as a,V as b,y as c,G as d,B as e,X as f,b as h,O as s,J as u};
