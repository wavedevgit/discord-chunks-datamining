/** Chunk was on web.js **/
/** chunk id: 890532, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => s
});
let r = new Map,
  i = new Set;

function o() {
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
      let o = r.get(t.target);
      if (o && (o.delete(t.propertyName), 0 === o.size && (t.target.removeEventListener("transitioncancel", n), r.delete(t.target)), 0 === r.size)) {
        for (let e of i) e();
        i.clear()
      }
    };
  document.body.addEventListener("transitionrun", exports), document.body.addEventListener("transitionend", require)
}

function a() {
  for (let [e] of r) "isConnected" in module && !module.isConnected && r.delete(module)
}

function s(e) {
  requestAnimationFrame(() => {
    a(), 0 === r.size ? e() : i.add(e)
  })
}
"undefined" != typeof document && ("loading" !== document.readyState ? o() : document.addEventListener("DOMContentLoaded", o))