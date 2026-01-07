/** Chunk was on 17185 **/
/** chunk id: 203377, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G7: () => o,
  LG: () => d,
  Pg: () => s,
  ZI: () => i,
  _0: () => l,
  mf: () => u
});
var r, Chunk388032 = require("./388032.jsx");
let s = 5,
  o = 10,
  l = 30;
var i = ((r = {})[r.DISPLAY = 0] = "DISPLAY", r[r.PERMISSIONS = 1] = "PERMISSIONS", r[r.MEMBERS = 2] = "MEMBERS", r[r.VERIFICATIONS = 3] = "VERIFICATIONS", r);
let c = {
  afk_channel_id: () => a.intl.string(a.t.KuYcnU),
  public_updates_channel_id: () => a.intl.string(a.t.vAyDGU),
  safety_alerts_channel_id: () => a.intl.string(a.t.sMkYE8),
  system_channel_id: () => a.intl.string(a.t.NASFnq)
};

function d(e) {
  var t;
  if (0 === Object.keys(e).length) return null;
  let n = Object.keys(e)[0],
    r = null == (t = c[n]) ? true : t.call(c);
  return null != r ? "(".concat(r, ") ").concat(e[n]) : e[n]
}
let u = "https://discord.gg"