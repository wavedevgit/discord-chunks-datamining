/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = n(192379);

function i(e) {
  let t = null == e ? void 0 : e.getBoundingClientRect(),
    n = null == t ? void 0 : t.left,
    i = null == t ? void 0 : t.top;
  return (0, r.useMemo)(() => null != n && null != i ? {
    x: n,
    y: i
  } : null, [n, i])
}