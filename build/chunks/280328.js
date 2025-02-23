/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  A: () => s
});
var r = n(192379),
  i = n(261376),
  o = n(68985),
  a = n(921944);

function s(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    s = !n && null != e && !i.O.has(e);
  r.useEffect(() => () => {
    s && o.Z.lastDCDismissed !== e && t(a.L.AUTO_DISMISS, !0)
  }, [s, t, e])
}