(this["webpackJsonpjohnleo-space"]=this["webpackJsonpjohnleo-space"]||[]).push([[0],{20:function(e,t,i){},25:function(e,t,i){"use strict";i.r(t);var n,o,r,c,s,a,l,h,d,b,g,j,x,p,m,u,O,f,v,w=i(2),y=i.n(w),z=i(11),M=i.n(z),Y=(i(20),i(5)),k=i(6),S=i(1),L=i(4),T=i(3),C=i(0),_=T.c.span(n||(n=Object(L.a)(["\n    font-weight: ",";\n    font-size: ","px;\n    line-height: ","px;\n    color: ",";\n    ",";\n    ",";\n    flex: ",";\n    font-family: ",";\n    ",";\n    ",";\n    ",";\n"])),(function(e){return e.weight}),(function(e){return e.size?e.size:15}),(function(e){return e.lh}),(function(e){return e.color}),(function(e){return e.margin}),(function(e){return e.padding}),(function(e){return e.flex}),(function(e){return e.ff}),(function(e){return e.to?"cursor: pointer;":null}),(function(e){return e.to?":hover { opacity: 0.85 }":null}),(function(e){return"none"===e.us?"user-select: none":null})),F=T.c.div(o||(o=Object(L.a)(["\n    display: flex;\n    align-items: ",";\n    justify-content: ",";\n    ",";\n    width: ",";\n    height: ",";\n    background-color: ",";\n    ",";\n    border-radius: ",";\n    flex: ",";\n    z-index: ",";\n    ",";\n    ",";\n    ",";\n    opacity: ",";\n    position: ",";\n"])),(function(e){return e.align}),(function(e){return e.justify}),(function(e){return e.margin}),(function(e){return e.size?e.size:e.width}),(function(e){return e.size?e.size:e.height}),(function(e){return e.bg}),(function(e){return e.padding}),(function(e){return e.circle?"50%":e.br}),(function(e){return e.flex}),(function(e){return e.zIndex}),(function(e){return e.to?"cursor: pointer;":null}),(function(e){return e.to?":hover { opacity: 0.85 }":null}),(function(e){return"none"===e.us?"user-select: none":null}),(function(e){return e.opacity}),(function(e){return e.position})),I=Object(T.c)(F)(r||(r=Object(L.a)(["\n    flex-direction: row;\n"]))),D=Object(T.c)(F)(c||(c=Object(L.a)(["\n    flex-direction: column;\n"]))),P=(T.c.div(s||(s=Object(L.a)(["\n    svg {\n        opacity: 0.85;\n        :hover {\n            opacity: 1;\n        };\n    };\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    z-index: ",";\n    justify-content: center;\n    ",";\n    flex: ",";\n"])),(function(e){return e.zIndex}),(function(e){return e.margin}),(function(e){return e.flex})),T.c.img(a||(a=Object(L.a)(["\n    object-fit: ",";\n    ",";\n    width: ",";\n    height: ",";\n    opacity: ",";\n"])),(function(e){return e.of}),(function(e){return e.margin}),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.opacity}))),R=(Object(T.c)(F)(l||(l=Object(L.a)(["\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    overflow: hidden;\n"]))),window.outerHeight),B=window.outerWidth,A=R,E=function(e,t,i){var n=window.outerWidth;return{width:n*e/100,height:n*e/100/t*i}}(10,1,1).width,X=Object(T.c)(F)(h||(h=Object(L.a)(["\n    position: absolute;\n    right: ","px;\n    top: ","px;\n    transition: right ","ms, top ","ms, opacity 1000ms;\n    opacity: ",";\n    :hover {\n        background-color: ",";\n        z-index: 10;\n        span {\n            font-size: 25px;\n            color: ",";\n            transition: all 300ms;\n        };\n    };\n"])),(function(e){return e.position.X}),(function(e){return e.position.Y}),(function(e){return e.speed}),(function(e){return e.speed}),(function(e){return e.opacity}),(function(e){return e.hovercolor?e.hovercolor:"black"}),(function(e){return e.hovertextcolor?e.hovertextcolor:"black"})),N=function(e){var t=e.hoverFunc,i=e.index,n=e.page,o=e.x,r=e.y,c=e.left,s=void 0===c||c,a=e.top,l=void 0===a||a,h=e.initX,d=e.initY,b=e.text,g=e.speed,j=void 0===g?"500":g,x=e.textsize,p=e.size,m=void 0===p?E:p,u=e.bg,O=void 0===u?"rgb(17,17,17)":u,f=e.weight,v=void 0===f?"500":f,y=e.textcolor,z=void 0===y?"white":y,M=e.hovercolor,k=e.hovertextcolor,S=Object(w.useState)({X:h||o-3*m,Y:d||r-3*m}),L=Object(Y.a)(S,2),T=L[0],F=L[1],I=Object(w.useState)(0),D=Object(Y.a)(I,2),P=D[0],R=D[1];return Object(w.useEffect)((function(){1===n&&(F({X:o,Y:r}),R(1),setTimeout((function(){F({X:o,Y:l?r+m/7:r-m/7})}),300),setTimeout((function(){F({X:s?o+m/8:o-m/8,Y:r})}),500),setTimeout((function(){F({X:o,Y:l?r-m/9:r+m/9})}),600),setTimeout((function(){F({X:s?o-m/10:o+m/10,Y:r})}),700),setTimeout((function(){F({X:o,Y:r})}),750))}),[m,s,l,o,r,n]),Object(C.jsx)(X,{onMouseOver:function(){return t&&t(i,!0)},onMouseOut:function(){return t&&t(i,!1)},position:T,opacity:P,speed:j,circle:!0,to:!0,bg:O,align:"center",justify:"center",size:m+"px",hovercolor:M,hovertextcolor:k,children:Object(C.jsx)(_,{size:x,style:{textAlign:"center"},weight:v,color:z,children:b})})},W=function(e){var t=e.page,i=e.width,n=void 0===i?"100%":i,o=e.height,r=e.bg,c=void 0===r?"rgba(0,0,0,0)":r,s=e.circles,a=e.initX,l=e.initY;return Object(C.jsx)(F,{position:"relative",width:n,height:o,bg:c,children:s.map((function(e,i){return Object(C.jsx)(N,{page:t,hoverFunc:e.hoverFunc,size:e.size,x:e.x,y:e.y,left:e.left,top:e.top,initX:a,index:i,initY:l,speed:e.speed,bg:e.bg,text:e.text,weight:e.weight,hovercolor:e.hovercolor,hovertextcolor:e.hovertextcolor,textsize:e.textsize,textcolor:e.textcolor},i)}))})},G=S.isMobile?B/2-90:B/2-115,J=S.isMobile?A/2-120:A/2-180,V=function(e){var t=e.hover,i=e.index,n=e.content,o=e.x,r=e.y;return Object(C.jsx)(F,{style:{opacity:t===i?1:0,transition:"all 300ms",position:"absolute",left:o,top:r},children:n})},H=function(e){var t=e.page,i=e.setPage,n=Object(w.useState)(A),o=Object(Y.a)(n,2),r=o[0],c=o[1],s=Object(w.useState)(1),a=Object(Y.a)(s,2),l=a[0],h=a[1],d=Object(w.useState)(!1),b=Object(Y.a)(d,2),g=b[0],j=b[1];Object(w.useEffect)((function(){1===t&&!g&&setTimeout((function(){j(!0)}),5e3)})),Object(w.useEffect)((function(){c(1===t?0:A)}),[t]);var x=function(e,t){h(t?e:null)},p=[{text:"Design & Develop",x:S.isMobile?G+80:G+310,y:S.isMobile?J+80:J+100,size:S.isMobile?180:230,left:!1,textsize:S.isMobile?15:20,textcolor:"white",hovertextcolor:"white",weight:"700",bg:"rgba(80,80,80,0.85)",hovercolor:"rgba(20,20,20,0.85)",hoverFunc:x},{text:"Artificial Intelligence",x:G+210,y:S.isMobile?J-50:J-70,size:S.isMobile?180:230,textsize:S.isMobile?15:20,textcolor:"white",hovertextcolor:"white",weight:"700",bg:"rgba(80,80,80,0.85)",hovercolor:"rgba(20,20,20,0.85)",hoverFunc:x},{text:"Blockchain",x:S.isMobile?G-80:G+110,y:S.isMobile?J+80:J+100,size:S.isMobile?180:230,top:!1,textsize:S.isMobile?15:20,textcolor:"white",hovertextcolor:"white",weight:"700",bg:"rgba(80,80,80,0.85)",hovercolor:"rgba(20,20,20,0.85)",hoverFunc:x}];return Object(C.jsxs)(F,{style:{width:"100vw",height:S.isMobileSafari?"80vh":"100vh",position:"fixed",overflow:"hidden",opacity:1===t?1:0,transition:"opacity 1s",top:r},children:[Object(C.jsx)(W,{page:t,circles:p,height:"100%"}),Object(C.jsx)(V,{hover:l,index:1,x:B/1.6,y:A/3.2,content:Object(C.jsxs)(D,{align:"center",children:[Object(C.jsx)(_,{weight:"700",size:"25",margin:"margin-bottom: 20px;",children:"Artificial Intelligence"}),Object(C.jsx)(_,{weight:"500",size:"18",margin:"margin-bottom: 10px;",children:"Deep Learning"}),Object(C.jsx)(_,{weight:"500",size:"18",margin:"margin-bottom: 10px;",children:"Reinforcement Learning"}),Object(C.jsx)(_,{weight:"500",size:"18",children:"Computer Vision with CNN"}),Object(C.jsx)(_,{weight:"700",size:"18",margin:"margin-top: 30px; margin-bottom: 10px;",children:"Mainly Stack to use"}),Object(C.jsx)(_,{weight:"500",size:"18",margin:"margin-bottom: 10px;",children:"TensorFlow, Pytorch, Open A.I"})]})}),Object(C.jsx)(V,{hover:l,index:0,x:B/1.6,y:A/3,content:Object(C.jsxs)(D,{align:"center",children:[Object(C.jsx)(_,{weight:"700",size:"25",margin:"margin-bottom: 20px;",children:"Service Design & Develop"}),Object(C.jsx)(_,{weight:"500",size:"18",children:"Web, iOS, Android (Cross Platform)"}),Object(C.jsx)(_,{weight:"700",size:"18",margin:"margin-top: 30px; margin-bottom: 10px;",children:"Mainly Stack to use"}),Object(C.jsxs)(_,{weight:"500",size:"18",margin:"margin-bottom: 10px;",children:[Object(C.jsx)(_,{weight:"700",size:"18",margin:"margin-right: 10px;",children:"FrontEnd"}),"React.js, React Native, JS"]}),Object(C.jsxs)(_,{weight:"500",size:"18",margin:"margin-bottom: 10px;",children:[Object(C.jsx)(_,{weight:"700",size:"18",margin:"margin-right: 10px;",children:"BackEnd"}),"Node.js, SQL, GraphQL"]})]})}),Object(C.jsx)(V,{hover:l,index:2,x:B/1.6,y:A/3,content:Object(C.jsxs)(D,{align:"center",children:[Object(C.jsx)(_,{weight:"700",size:"25",margin:"margin-bottom: 20px;",children:"Blockchain"}),Object(C.jsx)(_,{weight:"500",size:"18",margin:"margin-bottom: 5px;",children:"Mission to Create"}),Object(C.jsx)(_,{weight:"500",size:"18",children:'"Zero Marginal Cost Society"'}),Object(C.jsx)(_,{weight:"700",size:"18",margin:"margin-top: 30px; margin-bottom: 10px;",children:"Mainly Stack to use"}),Object(C.jsx)(_,{weight:"500",size:"18",margin:"margin-bottom: 10px;",children:"Ethereum Solidity"})]})}),Object(C.jsx)(F,{to:!0,style:{opacity:g?1:0,transition:"all 500ms",position:"absolute",bottom:38,right:38},children:Object(C.jsx)(_,{weight:"600",onClick:function(){return i(2)},children:"Next >"})})]})},Q=Object(T.c)(F)(d||(d=Object(L.a)(["\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    opacity: ",";\n    transition: right 1s ease-in-out, opacity 1s ease-in-out;\n    right: ","px;\n"])),(function(e){return e.sideOn===e.index?1:0}),(function(e){return t=e.sideOn,i=e.index,t<i?-B:t===i?0:t>i?B:void 0;var t,i})),U=Object(T.c)(D)(b||(b=Object(L.a)(["\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    align-items: center;\n    justify-content: center;\n    opacity: ",";\n    transition: bottom 1s ease-in-out, opacity 1.5s ease-in-out;\n    bottom: ","px;\n"])),(function(e){return e.on===e.index?1:0}),(function(e){return t=e.on,i=e.index,t<i?-A:t===i?0:t>i?A:void 0;var t,i})),Z=Object(T.c)(_)(g||(g=Object(L.a)(["\n    font-size: ","px;\n    line-height: ","px;\n    font-weight: 700;\n    color: white;\n    margin-bottom: ","px;\n    display: block;\n    align-items: center;\n    text-align: ",";\n"])),S.isMobile?35:55,S.isMobile?40:55,(function(e){return e.siderText?0:18}),(function(e){return e.service&&"center"})),q=Object(T.c)(_)(j||(j=Object(L.a)(["\n    font-size: ","px;\n    font-weight: 700;\n    color: white;\n    text-align: center;\n    line-height: ","px;\n"])),S.isMobile?25:45,S.isMobile?25:50),K=function(e){var t=e.on,i=e.siderOn,n=e.headerText,o=e.siderText,r=e.index;return Object(C.jsxs)(U,{on:t,index:r,children:[Object(C.jsx)(Z,{siderText:o,children:n}),Object(C.jsx)(Q,{sideOn:i,index:r,children:o})]})},$=function(e){var t=e.page,i=e.setPage,n=Object(w.useState)(0),o=Object(Y.a)(n,2),r=o[0],c=o[1],s=Object(w.useState)(0),a=Object(Y.a)(s,2),l=a[0],h=a[1],d=Object(w.useState)(0),b=Object(Y.a)(d,2),g=b[0],j=b[1];Object(w.useEffect)((function(){if(0!==t)return setTimeout((function(){j(A)}),1e3);j(0);0===r&&setTimeout((function(){c(1)}),300),1===r&&setTimeout((function(){c(2)}),3e3),2===r&&setTimeout((function(){h(3),c(3)}),3e3),3===r&&setTimeout((function(){h(4),c(4)}),3e3),4===r&&setTimeout((function(){h(5),c(5)}),3e3),5===r&&setTimeout((function(){return h(6),c(6),setTimeout((function(){i(1)}),3e3)}),3e3)}),[r,t,i]);var x=[{header:Object(C.jsxs)(Z,{mobile:S.isMobile,children:["Hello! ",S.isMobile&&Object(C.jsx)("br",{})," My name is John Leo"]})},{header:Object(C.jsxs)(Z,{children:["Welcome to ",S.isMobile&&Object(C.jsx)("br",{}),"John Leo's Space."]})},{header:Object(C.jsx)(Z,{children:"I'm interested In..."})},{header:Object(C.jsx)(Z,{children:"Artificial Intelligence"}),sider:Object(C.jsxs)(q,{children:["Deep Learning, ",S.isMobile&&Object(C.jsx)("br",{}),"Reinforcement Learning"]})},{header:Object(C.jsxs)(Z,{service:!0,children:["Service ",S.isMobile&&Object(C.jsx)("br",{})," Design & Develop"]}),sider:Object(C.jsx)(q,{children:"Full Stack Engineering"})},{header:Object(C.jsx)(Z,{children:"Blockchain"}),sider:Object(C.jsxs)(q,{children:['"Zero Marginal Cost Society"',Object(C.jsx)("br",{}),"Decentralized Protocal"]})}];return Object(C.jsx)(F,{width:"100%",height:S.isMobileSafari?"90vh":"100vh",align:"center",justify:"center",style:{position:"fixed",top:g,opacity:0===t?1:0,overflow:"hidden",transition:"opacity 1s"},children:x.map((function(e,t){return Object(C.jsx)(K,{on:r,siderOn:l,index:t+1,bottom:-A,headerText:e.header,siderText:e.sider},t)}))})},ee=function(e){var t=e.page,i=e.setPage;return Object(C.jsxs)("div",{style:{width:"100wh",height:"100vh",overflow:"hidden"},children:[Object(C.jsx)($,{page:t,setPage:i}),Object(C.jsx)(H,{page:t,setPage:i})]})},te=Object(T.c)(D)(x||(x=Object(L.a)(["\n    width: ",";\n    height: ",";\n    position: fixed;\n    background-color: rgba(244, 226, 198, 0.75);\n    background-color: rgb(23,23,23);\n    transition: left 300ms ease-in-out;\n    left: ",";\n    top: ","px;\n    padding: 30px;\n    z-index: 1000;\n    padding-top: 50px;\n    overflow: ",";\n"])),S.isMobile?"100vw":B/5.5+"px",S.isMobile?"100vh":A-180+"px",(function(e){return e.categoryOn?0:S.isMobile?"-100%":-B/5+"px"}),S.isMobile?0:110,S.isMobile?"hidden":"scroll"),ie=function(e){var t=e.categoryOn;e.setCategoryOn;return Object(C.jsxs)(te,{categoryOn:t,children:[Object(C.jsxs)(D,{margin:"margin-bottom: 20px;",children:[Object(C.jsx)(_,{size:"20",weight:"700",to:!0,margin:"margin-bottom: 10px;",children:"Lab"}),Object(C.jsx)(_,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Artificial Intelligence"}),Object(C.jsx)(_,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Service & Design"}),Object(C.jsx)(_,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Blockchain"})]}),Object(C.jsxs)(D,{margin:"margin-bottom: 20px;",children:[Object(C.jsx)(_,{size:"20",weight:"700",to:!0,margin:"margin-bottom: 10px;",children:"Physics"}),Object(C.jsx)(_,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Quantam Physics"}),Object(C.jsx)(_,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Relativity Theory"}),Object(C.jsx)(_,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Leo's Theory"})]}),Object(C.jsxs)(D,{margin:"margin-bottom: 20px;",children:[Object(C.jsx)(_,{size:"20",weight:"700",to:!0,margin:"margin-bottom: 10px;",children:"Buddhism"}),Object(C.jsx)(_,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Mindfulness"}),Object(C.jsx)(_,{size:"15",margin:"margin: 5px 10px;",weight:"500",lh:20,to:!0,children:"Physics with Buddhism"}),Object(C.jsx)(_,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Buddha's Saying"})]}),Object(C.jsxs)(D,{margin:"margin-bottom: 20px;",children:[Object(C.jsx)(_,{size:"20",weight:"700",to:!0,margin:"margin-bottom: 10px;",children:"Philosophy"}),Object(C.jsx)(_,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Life"}),Object(C.jsx)(_,{size:"15",margin:"margin: 5px 10px;",weight:"500",lh:20,to:!0,children:"Cross of Literature and Technology"}),Object(C.jsx)(_,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Design"})]}),Object(C.jsxs)(D,{margin:"margin-bottom: 20px;",children:[Object(C.jsx)(_,{size:"20",weight:"700",to:!0,margin:"margin-bottom: 10px;",children:"Daily Concern"}),Object(C.jsx)(_,{size:"15",margin:"margin: 5px 10px;",weight:"500",to:!0,children:"Daily Writes"})]}),Object(C.jsx)(_,{size:"15",weight:"700",to:!0,margin:"margin-bottom: 10px;",children:"Contact Me"})]})},ne=Object(T.c)(I)(p||(p=Object(L.a)(["\n    a {\n        border-right: solid 0.5px black;\n        span {\n            color: white;\n        }\n    };\n    margin-top: 15px;\n    padding-left: 32px;\n    height: 50px;\n    align-items: center;\n    background-color: rgba(75,75,75, 0.75);\n"]))),oe=function(e){var t=e.setCategoryOn,i=e.categoryOn;return Object(C.jsx)(F,{us:"none",to:!0,style:{position:"fixed",top:S.isMobile?15:17,zIndex:1e3,right:S.isMobile?30:20},onClick:function(){return t(!i)},children:Object(C.jsx)(ce,{})})},re=Object(T.c)(F)(m||(m=Object(L.a)(["\n    display: inline-block;\n    cursor: pointer;\n\n    .bar1, .bar2, .bar3 {\n        width: 24px;\n        height: 2px;\n        background-color: white;\n        margin: 6px 0;\n        transition: 0.4s;\n    }\n\n    /* Rotate first bar */\n    .bar1 {\n        ",";\n    }\n\n    /* Fade out the second bar */\n    .bar2 {\n        ",";\n    }\n\n    /* Rotate last bar */\n    .bar3 {\n        ","\n    }\n"])),(function(e){return e.press?"-webkit-transform: rotate(-45deg) translate(-7px, 6px) ;\n        transform: rotate(-45deg) translate(-7px, 6px) ;":null}),(function(e){return e.press?"opacity: 0":null}),(function(e){return e.press?"\n        -webkit-transform: rotate(45deg) translate(-5px, -5px) ;\n        transform: rotate(45deg) translate(-5px, -5px) ;":null})),ce=function(e){Object(k.a)(e);var t=Object(w.useState)(!1),i=Object(Y.a)(t,2),n=i[0],o=i[1];return Object(C.jsxs)(re,{class:"container",press:n,onClick:function(){return o(!n)},children:[Object(C.jsx)("div",{class:"bar1"}),Object(C.jsx)("div",{class:"bar2"}),Object(C.jsx)("div",{class:"bar3"})]})},se=function(e){e.categoryOn,e.setCategoryOn;var t=e.route,i=void 0===t?"Lab":t;return Object(C.jsxs)(D,{justify:"center",style:{position:"fixed",top:0,overflow:"hidden",width:"100vw",padding:20,paddingLeft:0,paddingRight:0,zIndex:100},bg:"black",zIndex:100,children:[Object(C.jsx)(I,{padding:"padding-left: ".concat(S.isMobile?20:30,"px"),justify:"space-between",align:"center",children:Object(C.jsx)("a",{href:"/",children:Object(C.jsx)(_,{us:"none",style:{fontFamily:"Geometos",color:"white",fontSize:25,fontWeight:"500"},children:"John Leo's Space"})})}),i&&Object(C.jsxs)(ne,{children:[Object(C.jsx)("a",{children:Object(C.jsx)(_,{margin:"margin-right: 20px;",weight:"500",size:"22",children:"Lab"})}),Object(C.jsx)("a",{children:Object(C.jsx)(_,{margin:"margin: 0px 20px;",weight:"500",size:"22",children:"A.I"})})]})]})},ae=B/2,le=A/10,he=function(e,t){return e?ae+1.5*t:le+1.5*t},de=function(e){var t=e.categoryOn,i=e.page,n=[{text:"#Blockchain",x:S.isMobile?he(!0,B/8):ae+B/5,y:S.isMobile?he(!1,A/20):le+A/20,size:180,left:!1,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"},{text:"#Ethereum",x:S.isMobile?he(!0,-B/8):ae+B/8,y:S.isMobile?he(!1,-A/8):le+A/8,size:150,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"},{text:"#Deep Learning",x:S.isMobile?he(!0,B/10):ae+B/10,y:S.isMobile?he(!1,-A/10):le-A/20,size:175,top:!1,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"},{text:"#CNN",x:S.isMobile?he(!0,-B/5):ae-B/8,y:S.isMobile?he(!1,A/9):le+A/9,size:180,top:!1,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"},{text:"#YOLO",x:S.isMobile?he(!0,-B/3):ae-B/5,y:S.isMobile?he(!1,A/20):le+A/8,size:130,top:!1,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"},{text:"#React.js",x:S.isMobile?he(!0,-B/2):ae-B/3,y:S.isMobile?he(!1,A/12):le+A/12,size:170,top:!1,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"},{text:"#RNN",x:S.isMobile?he(!0,-B/2):ae-B/3.8,y:S.isMobile?he(!1,-A/12):le-A/20,size:150,top:!1,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"},{text:"#Reinforcement Learning",x:S.isMobile?he(!0,0):ae,y:S.isMobile?he(!1,A/7):le+A/7,size:170,top:!1,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"},{text:"#Artificial Intelligence",x:S.isMobile?he(!0,-B/10):ae-B/20,y:S.isMobile?he(!1,-A/25):le-A/25,size:200,top:!1,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"},{text:"#GraphQL",x:S.isMobile?he(!0,-B/3):ae-B/7,y:S.isMobile?he(!1,-A/17):le-A/20,size:150,top:!1,textsize:20,weight:"700",hovertextcolor:"white",hovercolor:"rgb(20,20,20,0.75)",textcolor:"white",bg:"rgba(75,75,75,0.75)"}];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(S.BrowserView,{children:Object(C.jsxs)(D,{width:"100%",height:"450px",children:[Object(C.jsx)(_,{weight:"700",size:"30",style:{position:"relative",left:B/20},children:"Contribute Map"}),Object(C.jsxs)(I,{align:"center",style:{left:t?"15%":"10.8%",position:"relative",width:"100%",transform:t&&"scale(0.8)",transition:"all 300ms"},children:[Object(C.jsx)(W,{page:2===i?1:0,position:"absolute",circles:n,height:"100%"}),Object(C.jsx)(P,{style:{width:"25%",position:"relative",right:"15%",top:"25%"},src:"https://github-readme-stats.vercel.app/api/top-langs/?username=johnsteve108&theme=dark&langs_count=8)](https://github.com/johnsteve108/github-readme-stats)"})]})]})}),Object(C.jsxs)(S.MobileView,{children:[Object(C.jsx)(_,{weight:"700",size:"30",style:{position:"relative"},children:"Contribute Map"}),Object(C.jsxs)(D,{width:"100%",height:"700px",children:[Object(C.jsx)(F,{style:{padding:15,position:"relative",width:"100%",height:"55%",transform:"scale(0.6)"},children:Object(C.jsx)(W,{page:2===i?1:0,circles:n})}),Object(C.jsx)(P,{style:{width:"100%",position:"relative"},src:"https://github-readme-stats.vercel.app/api/top-langs/?username=johnsteve108&theme=dark&langs_count=8)](https://github.com/johnsteve108/github-readme-stats)"})]})]})]})},be=Object(T.c)(F)(u||(u=Object(L.a)(["\n    border-radius: 20px;\n    width: ",";\n    height: 180px;\n    background-color: rgb(23,23,23);\n    margin-right: 15px;\n    :hover {\n        cursor: pointer;\n        opacity: 0.85;\n    };\n    overflow: hidden;\n    position: relative;\n    margin-bottom: 20px;\n"])),S.isMobile?"100%":"300px"),ge=function(e){var t=e.title,i=e.description,n=e.imgsrc,o=e.date;return Object(C.jsxs)(be,{children:[Object(C.jsxs)(F,{padding:"padding: 10px;",style:{position:"absolute",width:"65%",right:0,top:0,height:"100%",flexDirection:"column"},bg:"rgba(23,23,23, 0.85)",children:[Object(C.jsx)(_,{lh:"25",weight:"700",size:"20",margin:"margin-bottom: 8px;",children:t}),Object(C.jsx)(_,{lh:"20",style:{maxHeight:80,overflow:"hidden"},weight:"400",children:i}),Object(C.jsx)(_,{weight:"300",color:"rgb(180,180,180)",margin:"margin-top: 8px;",children:o})]}),Object(C.jsx)(P,{src:n,width:"100%",height:"100%",of:"cover"})]})},je=function(e){return Object(k.a)(e),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(S.BrowserView,{children:Object(C.jsxs)(D,{padding:"padding: 0px 60px;",children:[Object(C.jsxs)(I,{align:"center",width:"100%",margin:"margin-bottom: 50px;",justify:"space-between",children:[Object(C.jsx)(_,{size:"30",weight:"700",children:"Recent Work"}),Object(C.jsx)(_,{size:"18",weight:"500",to:!0,us:"none",color:"rgb(180,180,180)",margin:"margin-right: 20px; padding-top: 10px;",children:"See All"})]}),Object(C.jsxs)(I,{align:"center",justify:"center",children:[Object(C.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(C.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(C.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(C.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"})]}),Object(C.jsxs)(I,{align:"center",justify:"center",children:[Object(C.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(C.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(C.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(C.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"})]}),Object(C.jsxs)(I,{align:"center",justify:"center",children:[Object(C.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(C.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(C.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(C.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"})]})]})}),Object(C.jsxs)(S.MobileView,{children:[Object(C.jsxs)(I,{align:"center",width:"100%",justify:"space-between",margin:"margin-bottom: 30px;",children:[Object(C.jsx)(_,{size:"30",weight:"700",children:"Recent Work"}),Object(C.jsx)(_,{size:"18",weight:"500",to:!0,us:"none",color:"rgb(180,180,180)",margin:"margin-right: 20px;",children:"See All"})]}),Object(C.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(C.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(C.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(C.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"}),Object(C.jsx)(ge,{title:"YOLOv3 implement",description:"Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced.",date:"2020-12-21",imgsrc:"https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg"})]})]})},xe=function(e){return Object(k.a)(e),Object(C.jsx)(C.Fragment,{})},pe=Object(T.c)(F)(O||(O=Object(L.a)(["\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n    overflow-y: scroll;\n"]))),me=function(e){var t=e.page,i=e.categoryOn,n=e.setCategoryOn;return Object(C.jsxs)(pe,{children:[Object(C.jsx)(se,{categoryOn:i,setCategoryOn:n}),Object(C.jsxs)(D,{padding:"padding: ".concat(S.isMobile?15:0,"px; padding-top: 50px;"),width:"100%",margin:"margin-top: 80px;",height:A+"px",children:[Object(C.jsx)(de,{categoryOn:i,page:t}),Object(C.jsx)(je,{}),Object(C.jsx)(xe,{})]})]})},ue=Object(T.c)(F)(f||(f=Object(L.a)(["\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    opacity: ",";\n    transition: opacity 800ms ease-in-out;\n"])),(function(e){return e.opacity})),Oe=function(e){var t=e.page,i=(e.setPage,Object(w.useState)(!1)),n=Object(Y.a)(i,2),o=n[0],r=n[1],c=Object(w.useState)(0),s=Object(Y.a)(c,2),a=s[0],l=s[1];return Object(w.useEffect)((function(){2===t&&setTimeout((function(){l(1)}),300)})),Object(C.jsxs)(ue,{oapcity:a,children:[Object(C.jsx)(me,{page:t,categoryOn:o,setCategoryOn:r}),Object(C.jsx)(ie,{categoryOn:o,setCategoryOn:r}),Object(C.jsx)(oe,{categoryOn:o,setCategoryOn:r})]})},fe=i(15),ve=Object(T.a)(v||(v=Object(L.a)(["\n    ",";\n    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');\n    * {\n        box-sizing: border-box;\n    }\n    @font-face {\n        font-family: 'Geometos';\n        font-style: normal;\n        font-weight: normal;\n        src: local('Geometos'), url('./Geometos.ttf') format('ttf');\n    }\n    body {\n        font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, 'telegrafico';\n        .mapboxgl-ctrl-bottom-left {\n            opacity: 0.7;\n        };\n        color: white;\n        background-color: black;\n    }\n    a {\n        text-decoration: none;\n        color: black;\n    }\n    input {\n        border: 0;\n    }\n    input:focus {\n        outline: none;\n    }\n    .mapboxgl-canvas {\n        outline: none;\n    }\n    ::-webkit-scrollbar {\n        width: 0px;\n    }\n    ::-webkit-scrollbar-track {\n        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); \n        border-radius: 10px;\n    }\n    ::-webkit-scrollbar-thumb {\n        border-radius: 10px;\n        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); \n    }\n"])),fe.a),we=function(e){Object(k.a)(e);var t=Object(w.useState)(0),i=Object(Y.a)(t,2),n=i[0],o=i[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(ve,{}),Object(C.jsxs)("div",{style:{width:"100vw",height:"100vh",overflow:"hidden",overflowY:"scroll"},children:[Object(C.jsx)(ee,{page:n,setPage:o}),2===n&&Object(C.jsx)(Oe,{page:n,setPage:o})]})]})};M.a.render(Object(C.jsx)(y.a.StrictMode,{children:Object(C.jsx)(we,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.e40aa78a.chunk.js.map