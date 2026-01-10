/** Chunk was on 81985 **/
/** chunk id: 145834, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => o
});
var Chunk70956 = require("./70956.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx");
let a = +Chunk70956.Z.Millis.DAY;

function o(e) {
  var t, n, r;
  if ((0, i.EO)(e.user)) return l.intl.string(l.t.VaCdhQ);
  let o = null == (t = e.member) ? true : t.joinedAt;
  return null == o ? l.intl.string(l.t.CQmzib) : null != e.member && e.member.roles.length > 0 ? null != (r = null == (n = e.role) ? true : n.name) ? r : l.intl.string(l.t["97/NdO"]) : new Date().getTime() - Date.parse(o) < a ? l.intl.string(l.t.IKE48n) : l.intl.string(l.t.u0gUWt)
}