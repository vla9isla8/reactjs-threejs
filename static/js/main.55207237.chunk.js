(this["webpackJsonpreactjs-threejs"]=this["webpackJsonpreactjs-threejs"]||[]).push([[0],[,,,,,,function(e,n,t){e.exports=t(13)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),i=t(3),a=t.n(i),c=(t(11),t(12),t(0)),s=t(4),l=t(5);var d=function(e){var n=e.className,t=Object(r.useRef)(null);return Object(r.useLayoutEffect)((function(){var e,n=function(e){if(e){var n=new c.Z,t=new c.P(75,e.clientWidth/e.clientHeight,.1,1e3),r=document.createElement("canvas"),o=r.getContext("webgl2",{alpha:!1});if(o){var i=new c.nb({canvas:r,context:o});i.setSize(e.clientWidth,e.clientHeight);var a=new s.a(t,i.domElement);a.addEventListener("change",(function(){return i.render(n,t)})),a.minDistance=0,a.maxDistance=10,a.target.set(0,0,-.2),a.update();var l=new c.h(16777215,5);l.position.set(100,100,100).normalize(),n.add(l);var d=new c.h(16777215,5);d.position.set(-100,100,100).normalize(),n.add(d);var u=new c.h(16777215,5);u.position.set(100,-100,-100).normalize(),n.add(u);var f=new c.h(16777215,5);return f.position.set(-100,-100,-100).normalize(),n.add(f),e.appendChild(i.domElement),{scene:n,renderer:i,camera:t}}}}(t.current);if(n){var r=n.scene,o=n.camera,i=n.renderer;o.position.z=2;var a=new l.a,d=function(){i.render(r,o)};a.load("/reactjs-threejs/3d/DamagedHelmet.gltf",(function(e){r.add(e.scene),d()}),void 0,(function(e){console.error(e)})),e=function(){var e=t.current;e&&(o.aspect=e.clientWidth/e.clientHeight,o.updateProjectionMatrix(),i.setSize(e.clientWidth,e.clientHeight),d())},window.addEventListener("resize",e),d()}return function(){n&&n.scene.remove(),e&&window.removeEventListener("resize",e)}}),[]),o.a.createElement("div",{className:n,ref:t})};var u=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(d,{className:"viewer"})))},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reactjs-threejs",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/reactjs-threejs","/service-worker.js");f?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(n,e)}))}}()}],[[6,1,2]]]);
//# sourceMappingURL=main.55207237.chunk.js.map