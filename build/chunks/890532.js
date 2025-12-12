/** Chunk was on web.js **/
/** chunk id: 890532, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => s
});
let r = new Map,
  i = new Set;

function a() {
  if ("undefined" == typeof window) return;

  function e(e) {
    return "propertyName" in e
  }
  let t = t => {
      if (!e(t) || !t.target) return;
      let i = r.get(t.target);
      i || (i = new Set, r.set(t.target, i), t.target.addEventListener("transitioncancel", n, {
        once: true
      })), i.add(t.propertyName)
    },
    n = t => {
      if (!e(t) || !t.target) return;
      let a = r.get(t.target);
      if (a && (a.delete(t.propertyName), 0 === a.size && (t.target.removeEventListener("transitioncancel", n), r.delete(t.target)), 0 === r.size)) {
        for (let e of i) e();
        i.clear()
      }
    };
  document.body.addEventListener("transitionrun", exports), document.body.addEventListener("transitionend", require)
}

function o() {
  for (let [e] of r) "isConnected" in module && !module.isConnected && r.delete(module)
}

function s(e) {
  requestAnimationFrame(() => {
    o(), 0 === r.size ? e() : i.add(e)
  })
}
"undefined" != typeof document && ("loading" !== document.readyState ? a() : document.addEventListener("DOMContentLoaded", a))