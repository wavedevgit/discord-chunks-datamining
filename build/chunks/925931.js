/** Chunk was on 1113 **/
/** chunk id: 925931, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => a
});
var Chunk927813 = require("./927813.js"),
  Chunk427262 = require("./427262.js"),
  Chunk985018 = require("./985018.jsx");
let s = +Chunk927813.A.Millis.DAY;

function a(e) {
  var t, n, r;
  if ((0, l.mv)(e.user)) return i.intl.string(i.t.VaCdhQ);
  let a = null == (t = e.member) ? true : t.joinedAt;
  return null == a ? i.intl.string(i.t.CQmzib) : null != e.member && e.member.roles.length > 0 ? null != (n = null == (r = e.role) ? true : r.name) ? n : i.intl.string(i.t["97/NdO"]) : new Date().getTime() - Date.parse(a) < s ? i.intl.string(i.t.IKE48n) : i.intl.string(i.t.u0gUWt)
}