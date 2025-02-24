/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => a,
  q: () => s
});
var r = n(192379),
  i = n(812206),
  o = n(701488);

function a(e) {
  return r.useMemo(() => s(e), [e])
}

function s(e) {
  var t, n;
  return !(null != e && o.P9.includes(null != e ? e : "")) || (null === (n = i.Z.getApplication(e)) || void 0 === n ? void 0 : null === (t = n.embeddedActivityConfig) || void 0 === t ? void 0 : t.legacy_responsive_aspect_ratio)
}