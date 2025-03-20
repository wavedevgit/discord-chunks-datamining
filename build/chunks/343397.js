/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => c
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(434404),
  o = n(999382),
  A = n(388032);

function c(e) {
  let {
    profile: t,
    canManageGuild: n
  } = e, c = t.id, d = (0, s.e7)([o.Z], () => o.Z.getError("name")), u = i.useCallback(e => {
    l.Z.updateGuild({
      name: e
    }), l.Z.updateGuildProfile(c, {
      name: e
    })
  }, [c]);
  return (0, r.jsx)(a.xJW, {
    title: A.NW.string(A.t.X56QcH),
    children: (0, r.jsx)(a.oil, {
      type: "text",
      disabled: !n,
      value: t.name,
      maxLength: 100,
      onChange: u,
      error: d
    })
  })
}