/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => A
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(434404),
  o = n(999382),
  c = n(388032);

function A(e) {
  let {
    profile: t,
    canManageGuild: n
  } = e, A = t.id, d = (0, s.e7)([o.Z], () => o.Z.getError("name")), u = i.useCallback(e => {
    l.Z.updateGuild({
      name: e
    }), l.Z.updateGuildProfile(A, {
      name: e
    })
  }, [A]);
  return (0, r.jsx)(a.xJW, {
    title: c.NW.string(c.t.X56QcH),
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