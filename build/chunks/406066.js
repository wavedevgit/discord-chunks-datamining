/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  Z: () => p
}), n(653041), n(47120);
var r, i = n(348327),
  o = n.n(i),
  a = n(442837),
  s = n(570140);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = [n(742738).Z],
  u = [];

function d() {
  let e = [];
  for (let t of c) {
    let n = t.getActivity();
    null != n && e.push(n)
  }
  return !o()(e, u) && (u = e, !0)
}
class f extends(r = a.ZP.Store) {
  initialize() {
    this.syncWith(c, d)
  }
  getActivities() {
    return u
  }
}
l(f, "displayName", "FirstPartyRichPresenceStore");
let p = new f(s.Z)