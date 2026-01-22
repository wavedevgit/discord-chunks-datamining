/** Chunk was on 34078 **/
/** chunk id: 628387, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Pd: () => s,
  Vl: () => a
}), require("./747238.js");
var n, s = ((n = {}).PHONE = "phone", n.EMAIL = "email", n);
let i = /^[-() \d]+$/;

function a(e, t) {
  return "phone" === e ? !t.startsWith("+") : "email" !== e && !(t.length < 3) && i.test(t)
}