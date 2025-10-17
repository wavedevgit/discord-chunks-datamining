/** Chunk was on 41619 **/
/** chunk id: 742458, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Nz: () => s,
  o9: () => o
}), require("./35282.js");
var n, s = ((n = {}).PHONE = "phone", n.EMAIL = "email", n);
let i = /^[-() \d]+$/;

function o(e, t) {
  return "phone" === e ? !t.startsWith("+") : "email" !== e && !(t.length < 3) && i.test(t)
}