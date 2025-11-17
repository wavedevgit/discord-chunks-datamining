/** Chunk was on 88146 **/
/** chunk id: 203377, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G7: () => s,
  LG: () => c,
  Pg: () => o,
  ZI: () => u,
  _0: () => i,
  mf: () => d
});
var r, Chunk388032 = require("./388032.jsx");
let o = 5,
  s = 10,
  i = 30;
var u = ((r = {})[r.DISPLAY = 0] = "DISPLAY", r[r.PERMISSIONS = 1] = "PERMISSIONS", r[r.MEMBERS = 2] = "MEMBERS", r[r.VERIFICATIONS = 3] = "VERIFICATIONS", r);
let a = {
  afk_channel_id: () => Chunk388032.intl.string(Chunk388032.t.KuYcnU),
  public_updates_channel_id: () => Chunk388032.intl.string(Chunk388032.t.vAyDGU),
  safety_alerts_channel_id: () => Chunk388032.intl.string(Chunk388032.t.sMkYE8),
  system_channel_id: () => Chunk388032.intl.string(Chunk388032.t.NASFnq)
};

function c(e) {
  var t;
  if (0 === Object.keys(e).length) return null;
  let n = Object.keys(e)[0],
    r = null == (t = a[n]) ? true : t.call(a);
  return null != r ? "(".concat(r, ") ").concat(e[n]) : e[n]
}
let d = "https://discord.gg"