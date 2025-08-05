/** Chunk was on 59256 **/
n.d(t, {
  G7: () => s,
  LG: () => d,
  Pg: () => l,
  ZI: () => i,
  _0: () => a,
  mf: () => u
});
var r, o = n(388032);
let l = 5,
  s = 10,
  a = 30;
var i = ((r = {})[r.DISPLAY = 0] = "DISPLAY", r[r.PERMISSIONS = 1] = "PERMISSIONS", r[r.MEMBERS = 2] = "MEMBERS", r[r.VERIFICATIONS = 3] = "VERIFICATIONS", r);
let c = {
  afk_channel_id: () => o.intl.string(o.t.KuYcnZ),
  public_updates_channel_id: () => o.intl.string(o.t.vAyDGR),
  safety_alerts_channel_id: () => o.intl.string(o.t.sMkYEx),
  system_channel_id: () => o.intl.string(o.t.NASFnp)
};

function d(e) {
  var t;
  if (0 === Object.keys(e).length) return null;
  let n = Object.keys(e)[0],
    r = null == (t = c[n]) ? void 0 : t.call(c);
  return null != r ? "(".concat(r, ") ").concat(e[n]) : e[n]
}
let u = "https://discord.gg"