/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  r: () => u
}), n(301563), n(192379), n(399606);
var r = n(430824),
  i = n(358085),
  o = n(341653),
  a = n(981631);
let s = "13.2",
  l = [a.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];

function c(e, t) {
  let n = e.split(".").map(Number),
    r = t.split(".").map(Number),
    i = Math.max(n.length, r.length);
  for (let e = 0; e < i; e++) {
    var o, a;
    let t = null !== (o = n[e]) && void 0 !== o ? o : 0,
      i = null !== (a = r[e]) && void 0 !== a ? a : 0;
    if (t < i) return -1;
    if (t > i) return 1
  }
  return 0
}

function u(e) {
  if (!(0, i.isIOS)()) return !1;
  let t = (0, o.e)();
  if (null == t || -1 === c(t, s)) return !1;
  let n = r.Z.getGuild(e);
  return !!(null != n && l.every(e => n.hasFeature(e)))
}