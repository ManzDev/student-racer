var fe=(g,t)=>()=>(t||g((t={exports:{}}).exports,t),t.exports);var Te=fe((Le,x)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))M(f);new MutationObserver(f=>{for(const v of f)if(v.type==="childList")for(const I of v.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&M(I)}).observe(document,{childList:!0,subtree:!0});function h(f){const v={};return f.integrity&&(v.integrity=f.integrity),f.referrerPolicy&&(v.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?v.credentials="include":f.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function M(f){if(f.ep)return;f.ep=!0;const v=h(f);fetch(f.href,v)}})();function he(){return Math.floor(Math.random()*10)}const S=[{name:"Agustina",color:"#00CED1",x:0,picture:"images/agustina.png"},{name:"Dave",color:"#50F6B2",x:0,picture:"images/dave.png"},{name:"Fany",color:"#CA2AF9",x:0,picture:"images/fany.jpg"},{name:"Isabel",color:"#000000",x:0,picture:"images/isabel.jpg"},{name:"Nahomi",color:"#B5FF33",x:0,picture:"images/nahomi.jpg"},{name:"Naomi",color:"#d4045b",x:0,picture:"images/naomi.jpg"},{name:"Pablo",color:"#99FF00",x:0,picture:"images/pablo.jpg"},{name:"Sara",color:"rgb(32, 203, 157)",x:0,picture:"images/sara.jpg"}],me=700;function ge(){const g=document.querySelectorAll(".player");for(let t=0;t<S.length;t++)if(S.at(t).x>=me)return g[t];return null}function z(){document.querySelectorAll(".player").forEach((t,h)=>{const M=S.at(h);t.style.setProperty("--x",`${M.x}px`)})}var x={};(function g(t,h,M,f){var v=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function I(){}function T(r){var e=h.exports.Promise,i=e!==void 0?e:t.Promise;return typeof i=="function"?new i(r):(r(I,I),null)}var P=function(){var r=Math.floor(16.666666666666668),e,i,n={},c=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(l){var a=Math.random();return n[a]=requestAnimationFrame(function o(d){c===d||c+r-1<d?(c=d,delete n[a],l()):n[a]=requestAnimationFrame(o)}),a},i=function(l){n[l]&&cancelAnimationFrame(n[l])}):(e=function(l){return setTimeout(l,r)},i=function(l){return clearTimeout(l)}),{frame:e,cancel:i}}(),U=function(){var r,e,i={};function n(c){function l(a,o){c.postMessage({options:a||{},callback:o})}c.init=function(o){var d=o.transferControlToOffscreen();c.postMessage({canvas:d},[d])},c.fire=function(o,d,b){if(e)return l(o,null),e;var s=Math.random().toString(36).slice(2);return e=T(function(p){function y(u){u.data.callback===s&&(delete i[s],c.removeEventListener("message",y),e=null,b(),p())}c.addEventListener("message",y),l(o,s),i[s]=y.bind(null,{data:{callback:s}})}),e},c.reset=function(){c.postMessage({reset:!0});for(var o in i)i[o](),delete i[o]}}return function(){if(r)return r;if(!M&&v){var c=["var CONFETTI, SIZE = {}, module = {};","("+g.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([c])))}catch(l){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",l),null}n(r)}return r}}(),V={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function Y(r,e){return e?e(r):r}function Z(r){return r!=null}function m(r,e,i){return Y(r&&Z(r[e])?r[e]:V[e],i)}function $(r){return r<0?0:Math.floor(r)}function H(r,e){return Math.floor(Math.random()*(e-r))+r}function L(r){return parseInt(r,16)}function X(r){return r.map(G)}function G(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:L(e.substring(0,2)),g:L(e.substring(2,4)),b:L(e.substring(4,6))}}function K(r){var e=m(r,"origin",Object);return e.x=m(e,"x",Number),e.y=m(e,"y",Number),e}function J(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function Q(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function ee(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function re(r,e,i,n,c,l,a,o,d){r.save(),r.translate(e,i),r.rotate(l),r.scale(n,c),r.arc(0,0,1,a,o,d),r.restore()}function te(r){var e=r.angle*(Math.PI/180),i=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*i-Math.random()*i),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar}}function ne(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var i=e.tick++/e.totalTicks,n=e.x+e.random*e.tiltCos,c=e.y+e.random*e.tiltSin,l=e.wobbleX+e.random*e.tiltCos,a=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-i)+")",r.beginPath(),e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(l-n)*e.ovalScalar,Math.abs(a-c)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):re(r,e.x,e.y,Math.abs(l-n)*e.ovalScalar,Math.abs(a-c)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var o=Math.PI/2*3,d=4*e.scalar,b=8*e.scalar,s=e.x,p=e.y,y=5,u=Math.PI/y;y--;)s=e.x+Math.cos(o)*b,p=e.y+Math.sin(o)*b,r.lineTo(s,p),o+=u,s=e.x+Math.cos(o)*d,p=e.y+Math.sin(o)*d,r.lineTo(s,p),o+=u;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(c)),r.lineTo(Math.floor(l),Math.floor(a)),r.lineTo(Math.floor(n),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function ae(r,e,i,n,c){var l=e.slice(),a=r.getContext("2d"),o,d,b=T(function(s){function p(){o=d=null,a.clearRect(0,0,n.width,n.height),c(),s()}function y(){M&&!(n.width===f.width&&n.height===f.height)&&(n.width=r.width=f.width,n.height=r.height=f.height),!n.width&&!n.height&&(i(r),n.width=r.width,n.height=r.height),a.clearRect(0,0,n.width,n.height),l=l.filter(function(u){return ne(a,u)}),l.length?o=P.frame(y):p()}o=P.frame(y),d=p});return{addFettis:function(s){return l=l.concat(s),b},canvas:r,promise:b,reset:function(){o&&P.cancel(o),d&&d()}}}function k(r,e){var i=!r,n=!!m(e||{},"resize"),c=m(e,"disableForReducedMotion",Boolean),l=v&&!!m(e||{},"useWorker"),a=l?U():null,o=i?J:Q,d=r&&a?!!r.__confetti_initialized:!1,b=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,s;function p(u,A,O){for(var C=m(u,"particleCount",$),E=m(u,"angle",Number),F=m(u,"spread",Number),w=m(u,"startVelocity",Number),oe=m(u,"decay",Number),ie=m(u,"gravity",Number),le=m(u,"drift",Number),B=m(u,"colors",X),ce=m(u,"ticks",Number),W=m(u,"shapes"),se=m(u,"scalar"),j=K(u),D=C,R=[],ue=r.width*j.x,de=r.height*j.y;D--;)R.push(te({x:ue,y:de,angle:E,spread:F,startVelocity:w,color:B[D%B.length],shape:W[H(0,W.length)],ticks:ce,decay:oe,gravity:ie,drift:le,scalar:se}));return s?s.addFettis(R):(s=ae(r,R,o,A,O),s.promise)}function y(u){var A=c||m(u,"disableForReducedMotion",Boolean),O=m(u,"zIndex",Number);if(A&&b)return T(function(w){w()});i&&s?r=s.canvas:i&&!r&&(r=ee(O),document.body.appendChild(r)),n&&!d&&o(r);var C={width:r.width,height:r.height};a&&!d&&a.init(r),d=!0,a&&(r.__confetti_initialized=!0);function E(){if(a){var w={getBoundingClientRect:function(){if(!i)return r.getBoundingClientRect()}};o(w),a.postMessage({resize:{width:w.width,height:w.height}});return}C.width=C.height=null}function F(){s=null,n&&t.removeEventListener("resize",E),i&&r&&(document.body.removeChild(r),r=null,d=!1)}return n&&t.addEventListener("resize",E,!1),a?a.fire(u,C,F):p(u,C,F)}return y.reset=function(){a&&a.reset(),s&&s.reset()},y}var N;function q(){return N||(N=k(null,{useWorker:!0,resize:!0})),N}h.exports=function(){return q().apply(this,arguments)},h.exports.reset=function(){q().reset()},h.exports.create=k})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),x,!1);const ve=x.exports;x.exports.create;const ye={particleCount:100,spread:70,origin:{y:.6}},pe=document.querySelector(".reset");function be(g){console.log("Ha ganado "+g.alt),g.classList.add("winner"),ve(ye),pe.toggleAttribute("disabled")}function _(){S.forEach(t=>{const h=he();t.x+=h}),z();const g=ge();g!==null?be(g):setTimeout(()=>_(),50)}const Me=document.querySelector(".start");function we(){console.log("Empieza el juego..."),Me.toggleAttribute("disabled"),_()}function Ie(){console.log("Preparando juego...");const g=document.querySelector(".track-race");S.forEach(t=>{const h=document.createElement("img");h.classList.add("player"),h.src=t.picture,h.alt=t.name,h.title=t.name,h.style.setProperty("--x",`${t.x}px`),h.style.setProperty("--color",t.color),g.appendChild(h)})}const Ce=document.querySelector(".start"),Se=document.querySelector(".reset");function xe(){S.forEach(t=>{t.x=0}),z(),Ce.toggleAttribute("disabled"),Se.toggleAttribute("disabled"),document.querySelectorAll(".winner").forEach(t=>t.classList.remove("winner"))}Ie();const Ee=document.querySelector(".start");Ee.addEventListener("click",()=>we());const Fe=document.querySelector(".reset");Fe.addEventListener("click",()=>xe())});export default Te();
