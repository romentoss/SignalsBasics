import './polyfills.server.mjs';
import{F as _,a as c,b as a,c as d,d as t,e,f as l,g as o,h as s,i as m,j as f,q as g,r as u,s as C,u as v,v as b,w as h,z as x}from"./chunk-3KWFIGII.mjs";var k=(()=>{class n{constructor(){this.title="EjemploSignalsBasico",this.contador=d(0),this.dobleContador=g(()=>this.contador()*2),u(()=>{console.log(`Contador ha cambiado a: ${this.contador()}`)})}incrementar(){this.contador.update(p=>p+1)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=c({type:n,selectors:[["app-root"]],standalone:!0,features:[f],decls:8,vars:3,consts:[[3,"click"]],template:function(i,r){i&1&&(t(0,"h1"),o(1),e(),t(2,"button",0),l("click",function(){return r.incrementar()}),o(3,"Incrementar"),e(),t(4,"p"),o(5),e(),t(6,"p"),o(7),e()),i&2&&(a(),s(r.title),a(4),m("Contador: ",r.contador(),""),a(2),m("Doble del contador: ",r.dobleContador(),""))},dependencies:[v],styles:["h1[_ngcontent-%COMP%]{font-size:3rem;font-weight:700;background:linear-gradient(90deg,red,orange,#ff0,green,#00f,indigo,violet);background-size:401%;-webkit-text-fill-color:transparent;animation:_ngcontent-%COMP%_colorAnimation 5s linear infinite}@keyframes _ngcontent-%COMP%_colorAnimation{0%{background-position:0%}to{background-position:100%}}"]})}}return n})();var A=[];var S={providers:[_(A),h()]};var M={providers:[x()]},y=C(S,M);var E=()=>b(k,y),N=E;export{N as a};
