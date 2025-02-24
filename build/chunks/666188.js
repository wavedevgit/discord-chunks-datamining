/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
}), n(47120);
var r = n(284363),
  i = n(854218);
let o = new Set([r.Q.PARTNERED, r.Q.VERIFIED, r.Q.VERIFIED_AND_PARTNERED, r.Q.COMMUNITY, r.Q.DISCOVERABLE, r.Q.CLAN]);

function a(e) {
  if (null == e) return !1;
  let t = (0, i.XX)(e),
    n = (0, r.i)(t);
  return o.has(n)
}