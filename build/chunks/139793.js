/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => s
}), n(47120);
var r = n(192379),
  i = n(442837),
  o = n(434650),
  a = n(353647);

function s(e) {
  let {
    userId: t,
    onAction: n
  } = e, [s, l] = (0, r.useState)(!1), c = (0, i.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t)), u = (0, r.useCallback)(e => {
    e && (n({
      action: "VIEW"
    }), l(!0))
  }, [n]);
  return (0, o.O)(u, void 0, !c && !s)
}