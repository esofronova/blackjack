(this["webpackJsonpreact-git"]=this["webpackJsonpreact-git"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(11),r=c.n(s),l=(c(16),c(17),c(2)),i=c(8),d=Object(i.a)(Array(11)).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return e+t}));d.splice(4,1),d.splice(0,1);var j=[{name:"spades",icon:"\u2660"},{name:"hearts",icon:"\u2665"},{name:"diamonds",icon:"\u2666"},{name:"clubs",icon:"\u2663"}],o=[];["black","red"].forEach((function(e){j.forEach((function(t){d.forEach((function(c){o.push({name:11===c?"ace":2===c?"jack":3===c?"queen":4===c?"king":c,value:c,suit:t.name,icon:t.icon,color:e})}))}))}));var b,u,h=["deal","hit","stand"],m=[5,25,50,100],x=["Cards 6-9 are worth face value. Jacks are worth 2, Queens - 3, Kings - 4, and Aces are worth 11.","The Player is dealt 2 cards.","The Dealer is dealt 2 cards, one face down.","Player may 'hit' to receive another card.","Player may keep hitting until they decide to stop, or 'stay'.","If player reaches a value of 21 they win automatically, if they go over 21 they lose.","Once players have gone the dealer will reveal cards and take its turn. The dealer will continue to hit until reaching a minimum value of 17."],O=(c(18),c(0));function v(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"h-100 d-flex flex-column justify-content-around py-3",children:[Object(O.jsx)("h2",{className:"mb-3",children:"Min bet is $25"}),Object(O.jsxs)("h2",{className:"mb-3",children:["Bet: ","$".concat(y)]}),Object(O.jsxs)("h2",{className:"mb-3",children:["Balance: ","$".concat(w)]}),Object(O.jsx)("div",{className:"d-flex justify-content-around gap-2 w-75 mx-auto",children:m.map((function(e,t){return Object(O.jsx)("button",{disabled:!!C,className:"btn rounded-circle p-1 text-white border border-dark chip "+(5===e?"btn-success":25===e?"btn-primary":50===e?"btn-warning":"btn-danger"),onClick:function(){w>=e&&(k(y+e),S(w-e))},children:e},t)}))})]})})}function f(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2);b=t[0],u=t[1];var c=-50;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"mb-5",children:[Object(O.jsx)("h5",{className:"text-white text-center mb-3",children:"Dealer: ".concat(b?F.length>0?F[0].value:0:J)}),Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("div",{className:"card me-3 position-static col-3",children:Object(O.jsx)("div",{className:"card-back"})}),Object(O.jsx)("div",{className:"d-flex cards col-9",children:F.map((function(e,t){return c+=50,void 0!==e?Object(O.jsx)("div",{className:"card "+("red"===e.color?"text-danger":"text-dark"),style:{left:c+"px"},children:0!==t&&b?Object(O.jsx)("div",{className:"card-back"}):Object(O.jsxs)("div",{className:"card-front",children:[Object(O.jsx)("div",{className:"align-self-start",children:e.name.length>1?e.name.slice(0,1):e.name}),Object(O.jsx)("div",{className:"align-self-center icon",children:e.icon}),Object(O.jsx)("div",{className:"align-self-end",children:e.name.length>1?e.name.slice(0,1):e.name})]})},t):null}))})]})]})})}function N(){var e=-50;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h5",{className:"text-white text-center mb-3",children:"You: ".concat(Y)}),Object(O.jsx)("div",{className:"d-flex cards",children:$.map((function(t,c){return e+=50,void 0!==t?Object(O.jsx)("div",{className:"card "+("red"===t.color?"text-danger":"text-dark"),style:{left:e+"px"},children:Object(O.jsxs)("div",{className:"card-front",children:[Object(O.jsx)("div",{className:"align-self-start",children:t.name.length>1?t.name.slice(0,1):t.name}),Object(O.jsx)("div",{className:"align-self-center icon",children:t.icon}),Object(O.jsx)("div",{className:"align-self-end",children:t.name.length>1?t.name.slice(0,1):t.name})]})},c):null}))})]})}function g(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"btns h-100 centered",children:h.map((function(e,t){return Object(O.jsx)("button",{disabled:!("deal"===e&&y>=25)&&!C,className:"btn w-100 mb-3 text-uppercase btn-"+("deal"===e?"primary":"hit"===e?"success":"danger")+" btn-".concat(e),style:{maxWidth:"300px"},onClick:function(){if("deal"===e&&(H("dealer"),H("dealer"),H("you"),H("you"),A(!0),document.querySelector(".btn-deal").setAttribute("disabled",!0)),"hit"===e&&H("you"),"stand"===e){document.querySelector(".btn-hit").setAttribute("disabled",!0),document.querySelector(".btn-stand").setAttribute("disabled",!0);var t=setInterval((function(){H("dealer"),J>=17&&clearInterval(t)}),1e3);u(!1)}},children:e},t)}))})})}function p(){return Object(O.jsx)("div",{className:"overlay position-fixed centered w-100 h-100",children:Object(O.jsxs)("div",{className:"fs-1 bg-white p-4 rounded",children:[Object(O.jsx)("h3",{className:"text-center w-75 mx-auto text-dark",children:B}),Object(O.jsx)("div",{className:"centered mt-3",children:Object(O.jsx)("button",{className:"btn btn-dark new-game",onClick:L,children:"New Game"})})]})})}var y,k,w,S,C,A,E,M,T,q,B,D,F,I,J,P,$,U,Y,G,K=c(22),Q=c(23),R=c(24);function W(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(O.jsxs)("div",{className:"rules",children:[Object(O.jsx)("button",{className:"btn position-fixed rules text-white fs-5",onClick:function(){return n(!0)},children:"Rules"}),Object(O.jsx)("div",{className:"position-fixed overlay blured centered w-100 h-100 "+(c?"":"d-none"),onClick:function(){return n(!1)},children:Object(O.jsx)("ul",{children:x.map((function(e,t){return Object(O.jsx)("li",{className:"text-start mb-3 fs-5",children:e},t)}))})})]})}var z=function(e){var t=0;return e.forEach((function(e){void 0!==e&&(t+=e.value)})),t},H=function(e){!function(){var t="".concat(e,"Card");t=function(){return Math.floor(Math.random()*(o.length+1))}(),"you"===e?($.push(o[t]),U(Object(i.a)($)),G(z($))):"dealer"===e&&(F.push(o[t]),I(Object(i.a)(F)),P(z(F)))}()},L=function(){"User"===T?S(w+2*y):"None"===T&&S(w+y),M(!1),k(0),P(0),G(0),I([]),U([]),A(!1),u(!0)};function V(){document.title="Blackjack";var e=Object(a.useState)(500),t=Object(l.a)(e,2);w=t[0],S=t[1];var c=Object(a.useState)(0),n=Object(l.a)(c,2);y=n[0],k=n[1];var s=Object(a.useState)(!1),r=Object(l.a)(s,2);C=r[0],A=r[1];var i=Object(a.useState)(!1),d=Object(l.a)(i,2);E=d[0],M=d[1];var j=Object(a.useState)(null),o=Object(l.a)(j,2);T=o[0],q=o[1];var b=Object(a.useState)(""),u=Object(l.a)(b,2);B=u[0],D=u[1];var h=Object(a.useState)([]),m=Object(l.a)(h,2);F=m[0],I=m[1];var x=Object(a.useState)([]),z=Object(l.a)(x,2);$=z[0],U=z[1];var H=Object(a.useState)(0),L=Object(l.a)(H,2);J=L[0],P=L[1];var V=Object(a.useState)(0),X=Object(l.a)(V,2);return Y=X[0],G=X[1],setTimeout((function(){21===Y||J>21||J>=17&&J<21&&Y>J?(M(!0),q("User"),D("Congratulations! You're lucky today! :)")):21===J||Y>21||J>=17&&J<21&&Y<J?(M(!0),q("Dealer"),D("Dealer is the winner! Maybe next time!..")):Y>17&&J>17&&Y===J&&(M(!0),q("None"),D("Tie! ;)"))}),200),Object(O.jsx)("div",{className:"blackjack py-3 py-lg-5 h-100 overflow-auto",children:Object(O.jsx)(K.a,{className:"h-100",children:Object(O.jsxs)(Q.a,{className:"text-white text-center h-100",children:[Object(O.jsx)(R.a,{xs:12,lg:4,className:"mb-5 mb-lg-0",children:Object(O.jsx)(v,{})}),Object(O.jsx)(R.a,{xs:12,lg:6,className:"mb-5 mb-lg-0",children:Object(O.jsxs)(Q.a,{children:[Object(O.jsx)(R.a,{xs:12,children:Object(O.jsx)(f,{})}),Object(O.jsx)(R.a,{xs:12,children:Object(O.jsx)(N,{})})]})}),Object(O.jsx)(R.a,{xs:12,lg:2,children:Object(O.jsx)(g,{})}),E?Object(O.jsx)(p,{}):null,Object(O.jsx)(W,{})]})})})}r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(V,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.21de2ffb.chunk.js.map