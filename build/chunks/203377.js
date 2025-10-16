/** Chunk was on 30378 **/
/** chunk id: 203377, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G7: () => l,
  LG: () => o,
  Pg: () => s,
  ZI: () => c,
  _0: () => a,
  mf: () => u
});
var r, Chunk388032 = require("./388032.jsx");
let s = 5,
  l = 10,
  a = 30;
var c = ((r = {})[r.DISPLAY = 0] = "DISPLAY", r[r.PERMISSIONS = 1] = "PERMISSIONS", r[r.MEMBERS = 2] = "MEMBERS", r[r.VERIFICATIONS = 3] = "VERIFICATIONS", r);
let d = {
  afk_channel_id: () => Chunk388032.intl.string(Chunk388032.t.KuYcnZ),
  public_updates_channel_id: () => Chunk388032.intl.string(Chunk388032.t.vAyDGR),
  safety_alerts_channel_id: () => Chunk388032.intl.string(Chunk388032.t.sMkYEx),
  system_channel_id: () => Chunk388032.intl.string(Chunk388032.t.NASFnp)
};

function o(e) {
  var t;
  if (0 === Object.keys(e).length) return null;
  let n = Object.keys(e)[0],
    r = null == (t = d[n]) ? true : t.call(d);
  return null != r ? "(".concat(r, ") ").concat(e[n]) : e[n]
}
let u = "https://discord.gg"