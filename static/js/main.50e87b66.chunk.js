(this["webpackJsonpreact-git"]=this["webpackJsonpreact-git"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(11),r=c.n(s),l=(c(16),c(17),c(2)),i=c(8),d=Object(i.a)(Array(10)).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return e+t}));d.splice(4,1);var j=[{name:"spades",icon:"\u2660"},{name:"hearts",icon:"\u2665"},{name:"diamonds",icon:"\u2666"},{name:"clubs",icon:"\u2663"}],b=[];["black","red"].forEach((function(e){j.forEach((function(t){d.forEach((function(c){b.push({name:1===c?"ace":2===c?"jack":3===c?"queen":4===c?"king":c,value:c,suit:t.name,icon:t.icon,color:e})}))}))}));var o,u,m=["deal","hit","stand"],h=[5,25,50,100],x=(c(18),c(0));function O(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"h-100 d-flex flex-column justify-content-around py-3",children:[Object(x.jsx)("h2",{className:"mb-3",children:"Min bet is $25"}),Object(x.jsxs)("h2",{className:"mb-3",children:["Bet: ","$".concat(p)]}),Object(x.jsxs)("h2",{className:"mb-3",children:["Balance: ","$".concat(k)]}),Object(x.jsx)("div",{className:"d-flex justify-content-around gap-2 w-75 mx-auto",children:h.map((function(e,t){return Object(x.jsx)("button",{disabled:!!S,className:"btn rounded-circle p-1 text-white border border-dark chip "+(5===e?"btn-success":25===e?"btn-primary":50===e?"btn-warning":"btn-danger"),onClick:function(){k>=e&&(y(p+e),w(k-e))},children:e},t)}))})]})})}function v(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2);o=t[0],u=t[1];var c=-50;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"mb-5",children:[Object(x.jsx)("h5",{className:"text-white text-center mb-3",children:"Dealer: ".concat(o?D.length>0?D[0].value:0:J)}),Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)("div",{className:"card me-3 position-static col-3",children:Object(x.jsx)("div",{className:"card-back"})}),Object(x.jsx)("div",{className:"d-flex cards col-9",children:D.map((function(e,t){return c+=50,Object(x.jsx)("div",{className:"card "+(void 0!==e?"red"===e.color?"text-danger":"text-dark":""),style:{left:c+"px"},children:0!==t&&o?Object(x.jsx)("div",{className:"card-back"}):Object(x.jsxs)("div",{className:"card-front",children:[Object(x.jsx)("div",{className:"align-self-start",children:e.name.length>1?e.name.slice(0,1):e.name}),Object(x.jsx)("div",{className:"align-self-center icon",children:e.icon}),Object(x.jsx)("div",{className:"align-self-end",children:e.name.length>1?e.name.slice(0,1):e.name})]})},t)}))})]})]})})}function f(){var e=-50;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h5",{className:"text-white text-center mb-3",children:"You: ".concat(I)}),Object(x.jsx)("div",{className:"d-flex cards",children:Y.map((function(t,c){return e+=50,Object(x.jsx)("div",{className:"card "+(void 0!==t?"red"===t.color?"text-danger":"text-dark":""),style:{left:e+"px"},children:Object(x.jsxs)("div",{className:"card-front",children:[Object(x.jsx)("div",{className:"align-self-start",children:t.name.length>1?t.name.slice(0,1):t.name}),Object(x.jsx)("div",{className:"align-self-center icon",children:t.icon}),Object(x.jsx)("div",{className:"align-self-end",children:t.name.length>1?t.name.slice(0,1):t.name})]})},c)}))})]})}function N(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"btns h-100 centered",children:m.map((function(e,t){return Object(x.jsx)("button",{disabled:!("deal"===e&&p>=25)&&!S,className:"btn w-100 mb-3 text-uppercase btn-"+("deal"===e?"primary":"hit"===e?"success":"danger")+" btn-".concat(e),style:{maxWidth:"300px"},onClick:function(){"deal"===e&&(L("dealer"),L("dealer"),L("you"),L("you"),C(!0),document.querySelector(".btn-deal").setAttribute("disabled",!0)),"hit"===e&&L("you"),"stand"===e&&(document.querySelector(".btn-hit").setAttribute("disabled",!0),L("dealer"),u(!1))},children:e},t)}))})})}function g(){return Object(x.jsx)("div",{className:"overlay position-fixed centered w-100 h-100",children:Object(x.jsxs)("div",{className:"fs-1 bg-white p-4 rounded",children:[Object(x.jsx)("h3",{className:"text-center w-75 mx-auto text-dark",children:q}),Object(x.jsx)("div",{className:"centered mt-3",children:Object(x.jsx)("button",{className:"btn btn-dark",onClick:P,children:"New Game"})})]})})}var p,y,k,w,S,C,E,M,B,F,q,A,D,$,J,U,Y,G,I,T,W=c(22),z=c(23),H=c(24),K=function(e){var t=0;return e.forEach((function(e){void 0!==e&&(t+=e.value)})),t},L=function(e){!function(){var t="".concat(e,"Card");t=function(){return Math.floor(Math.random()*(b.length+1))}(),"you"===e?(Y.push(b[t]),G(Object(i.a)(Y)),T(K(Y))):"dealer"===e&&(D.push(b[t]),$(Object(i.a)(D)),U(K(D)))}()},P=function(){"User"===B&&w(k+2*p),M(!1),y(0),U(0),T(0),$([]),G([]),C(!1)};function Q(){document.title="Blackjack";var e=Object(a.useState)(500),t=Object(l.a)(e,2);k=t[0],w=t[1];var c=Object(a.useState)(0),n=Object(l.a)(c,2);p=n[0],y=n[1];var s=Object(a.useState)(!1),r=Object(l.a)(s,2);S=r[0],C=r[1];var i=Object(a.useState)(!1),d=Object(l.a)(i,2);E=d[0],M=d[1];var j=Object(a.useState)(null),b=Object(l.a)(j,2);B=b[0],F=b[1];var o=Object(a.useState)(""),u=Object(l.a)(o,2);q=u[0],A=u[1];var m=Object(a.useState)([]),h=Object(l.a)(m,2);D=h[0],$=h[1];var K=Object(a.useState)([]),L=Object(l.a)(K,2);Y=L[0],G=L[1];var P=Object(a.useState)(0),Q=Object(l.a)(P,2);J=Q[0],U=Q[1];var R=Object(a.useState)(0),V=Object(l.a)(R,2);return I=V[0],T=V[1],setTimeout((function(){21===I||J>21?(M(!0),F("User"),A("Congratulations! You're lucky today! :)")):(21===J||I>21)&&(M(!0),F("Dealer"),A("Dealer is the winner! Maybe next time!.."))}),200),Object(x.jsx)("div",{className:"blackjack py-3 py-lg-5 h-100 overflow-auto",children:Object(x.jsx)(W.a,{className:"h-100",children:Object(x.jsxs)(z.a,{className:"text-white text-center h-100",children:[Object(x.jsx)(H.a,{xs:12,lg:4,className:"mb-5 mb-lg-0",children:Object(x.jsx)(O,{})}),Object(x.jsx)(H.a,{xs:12,lg:6,className:"mb-5 mb-lg-0",children:Object(x.jsxs)(z.a,{children:[Object(x.jsx)(H.a,{xs:12,children:Object(x.jsx)(v,{})}),Object(x.jsx)(H.a,{xs:12,children:Object(x.jsx)(f,{})})]})}),Object(x.jsx)(H.a,{xs:12,lg:2,children:Object(x.jsx)(N,{})}),E?Object(x.jsx)(g,{}):null]})})})}r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(Q,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.50e87b66.chunk.js.map