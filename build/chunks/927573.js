/** Chunk was on 47841 **/
/** chunk id: 927573, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  $s: () => d,
  Qy: () => s,
  T$: () => o,
  Ug: () => a,
  _4: () => l,
  mu: () => u
});
var r, Chunk985018 = require("./985018.jsx");
let l = 5,
  s = 10,
  a = 30;
var o = ((r = {})[r.DISPLAY = 0] = "DISPLAY", r[r.PERMISSIONS = 1] = "PERMISSIONS", r[r.MEMBERS = 2] = "MEMBERS", r[r.VERIFICATIONS = 3] = "VERIFICATIONS", r);
let c = {
  afk_channel_id: () => i.intl.string(i.t.KuYcnU),
  public_updates_channel_id: () => i.intl.string(i.t.vAyDGU),
  safety_alerts_channel_id: () => i.intl.string(i.t.sMkYE8),
  system_channel_id: () => i.intl.string(i.t.NASFnq)
};

function d(e) {
  var t;
  if (0 === Object.keys(e).length) return null;
  let n = Object.keys(e)[0],
    r = null == (t = c[n]) ? true : t.call(c);
  return null != r ? "(".concat(r, ") ").concat(e[n]) : e[n]
}
let u = "https://discord.gg"