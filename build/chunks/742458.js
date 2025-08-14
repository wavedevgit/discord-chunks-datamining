/** Chunk was on 25761 **/
/** chunk id: 742458, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Nz: () => s,
  o9: () => a
}), require("./35282.js");
var r, s = ((r = {}).PHONE = "phone", r.EMAIL = "email", r);
let i = /^[-() \d]+$/;

function a(e, t) {
  return "phone" === e ? !t.startsWith("+") : "email" !== e && !(t.length < 3) && i.test(t)
}