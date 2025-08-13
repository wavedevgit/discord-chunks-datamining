/** Chunk was on 25761 **/
/** chunk id: 742458, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Nz: () => s,
  o9: () => l
}), require("./35282.js");
var r, s = ((r = {}).PHONE = "phone", r.EMAIL = "email", r);
let i = /^[-() \d]+$/,
  a = e => e.startsWith("+");

function l(e, t) {
  return "phone" === e ? !a(t) : "email" !== e && !(t.length < 3) && i.test(t)
}