/** Chunk was on 42926 **/
/** chunk id: 203377, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G7: () => l,
  LG: () => d,
  Pg: () => i,
  ZI: () => c,
  _0: () => a,
  mf: () => o
});
var r, Chunk388032 = require("./388032.jsx");
let i = 5,
  l = 10,
  a = 30;
var c = ((r = {})[r.DISPLAY = 0] = "DISPLAY", r[r.PERMISSIONS = 1] = "PERMISSIONS", r[r.MEMBERS = 2] = "MEMBERS", r[r.VERIFICATIONS = 3] = "VERIFICATIONS", r);
let u = {
  afk_channel_id: () => Chunk388032.intl.string(Chunk388032.t.KuYcnZ),
  public_updates_channel_id: () => Chunk388032.intl.string(Chunk388032.t.vAyDGR),
  safety_alerts_channel_id: () => Chunk388032.intl.string(Chunk388032.t.sMkYEx),
  system_channel_id: () => Chunk388032.intl.string(Chunk388032.t.NASFnp)
};

function d(e) {
  var t;
  if (0 === Object.keys(e).length) return null;
  let n = Object.keys(e)[0],
    r = null == (t = u[n]) ? true : t.call(u);
  return null != r ? "(".concat(r, ") ").concat(e[n]) : e[n]
}
let o = "https://discord.gg"