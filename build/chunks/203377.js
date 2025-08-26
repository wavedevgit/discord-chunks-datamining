/** Chunk was on 42926 **/
/** chunk id: 203377, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G7: () => l,
  LG: () => u,
  Pg: () => s,
  ZI: () => c,
  _0: () => a,
  mf: () => o
});
var i, Chunk388032 = require("./388032.jsx");
let s = 5,
  l = 10,
  a = 30;
var c = ((i = {})[i.DISPLAY = 0] = "DISPLAY", i[i.PERMISSIONS = 1] = "PERMISSIONS", i[i.MEMBERS = 2] = "MEMBERS", i[i.VERIFICATIONS = 3] = "VERIFICATIONS", i);
let d = {
  afk_channel_id: () => Chunk388032.intl.string(Chunk388032.t.KuYcnZ),
  public_updates_channel_id: () => Chunk388032.intl.string(Chunk388032.t.vAyDGR),
  safety_alerts_channel_id: () => Chunk388032.intl.string(Chunk388032.t.sMkYEx),
  system_channel_id: () => Chunk388032.intl.string(Chunk388032.t.NASFnp)
};

function u(e) {
  var t;
  if (0 === Object.keys(e).length) return null;
  let n = Object.keys(e)[0],
    i = null == (t = d[n]) ? true : t.call(d);
  return null != i ? "(".concat(i, ") ").concat(e[n]) : e[n]
}
let o = "https://discord.gg"