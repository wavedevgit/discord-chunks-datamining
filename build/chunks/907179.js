/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => s
});
var r = n(200651),
  i = n(481060),
  o = n(475413),
  a = n(388032);

function s(e) {
  let {
    isBlocked: t,
    onClick: n,
    size: s = i.PhG.SMALL
  } = e;
  return (0, r.jsx)(o.tG, {
    size: s,
    action: t ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
    text: a.NW.string(a.t["UJKH/v"]),
    autoFocus: !0,
    fullWidth: !1,
    onClick: n
  })
}