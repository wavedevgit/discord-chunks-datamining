/** Chunk was on 59256 **/
/** chunk id: 203377, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G7: () => a,
  LG: () => u,
  Pg: () => l,
  ZI: () => i,
  _0: () => s,
  mf: () => d
});
var r, Chunk388032 = require("./388032.jsx");
let l = 5,
  a = 10,
  s = 30;
var i = ((r = {})[r.DISPLAY = 0] = "DISPLAY", r[r.PERMISSIONS = 1] = "PERMISSIONS", r[r.MEMBERS = 2] = "MEMBERS", r[r.VERIFICATIONS = 3] = "VERIFICATIONS", r);
let c = {
  afk_channel_id: () => Chunk388032.intl.string(Chunk388032.t.KuYcnZ),
  public_updates_channel_id: () => Chunk388032.intl.string(Chunk388032.t.vAyDGR),
  safety_alerts_channel_id: () => Chunk388032.intl.string(Chunk388032.t.sMkYEx),
  system_channel_id: () => Chunk388032.intl.string(Chunk388032.t.NASFnp)
};

function u(e) {
  var t;
  if (0 === Object.keys(e).length) return null;
  let n = Object.keys(e)[0],
    r = null == (t = c[n]) ? true : t.call(c);
  return null != r ? "(".concat(r, ") ").concat(e[n]) : e[n]
}
let d = "https://discord.gg"