(this["webpackJsonpreactjs-threejs"]=this["webpackJsonpreactjs-threejs"]||[]).push([[0],[,,,,,,function(e,n,t){e.exports=t(13)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(3),o=t.n(i),c=(t(11),t(12),t(0)),s=t(4),d=t(5);var l=function(e){var n=e.className,t=Object(a.useRef)(null);return Object(a.useLayoutEffect)((function(){var e,n=function(e){if(e){var n=new c.Z,t=new c.P(75,e.clientWidth/e.clientHeight,.1,1e3),a=document.createElement("canvas"),r=a.getContext("webgl2",{alpha:!1});if(r){var i=new c.nb({canvas:a,context:r});i.setSize(e.clientWidth,e.clientHeight);var o=new s.a(t,i.domElement);o.addEventListener("change",(function(){return i.render(n,t)})),o.minDistance=0,o.maxDistance=10,o.target.set(0,0,-.2),o.update();var d=new c.h(16777215,5);d.position.set(100,100,100).normalize(),n.add(d);var l=new c.h(16777215,5);l.position.set(-100,100,100).normalize(),n.add(l);var m=new c.h(16777215,5);m.position.set(100,-100,-100).normalize(),n.add(m);var u=new c.h(16777215,5);return u.position.set(-100,-100,-100).normalize(),n.add(u),e.appendChild(i.domElement),{scene:n,renderer:i,camera:t}}}}(t.current);if(n){var a=n.scene,r=n.camera,i=n.renderer;r.position.z=2;var o=new d.a,l=function(){i.render(a,r)};o.load("/3d/DamagedHelmet.gltf",(function(e){a.add(e.scene),l()}),void 0,(function(e){console.error(e)})),e=function(){var e=t.current;e&&(r.aspect=e.clientWidth/e.clientHeight,r.updateProjectionMatrix(),i.setSize(e.clientWidth,e.clientHeight),l())},window.addEventListener("resize",e),l()}return function(){n&&n.scene.remove(),e&&window.removeEventListener("resize",e)}}),[]),r.a.createElement("div",{className:n,ref:t})};var m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(l,{className:"viewer"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.fdc8ab7c.chunk.js.map