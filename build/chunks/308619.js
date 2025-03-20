/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => d
}), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(852860),
  l = n(699553),
  o = n(314852),
  A = n(434404),
  c = n(999382);

function d() {
  let e = (0, s.e7)([c.Z], () => c.Z.getGuild()),
    t = null == e ? void 0 : e.id,
    n = (0, s.e7)([c.Z], () => c.Z.getProfileError()),
    d = (0, s.e7)([c.Z], () => c.Z.getGuildProfile()),
    u = (0, s.e7)([o.Z], () => o.Z.getIsUpdating(t)),
    g = i.useMemo(() => null == n ? void 0 : n.getAnyErrorMessage(), [n]),
    f = i.useCallback(() => {
      if (null == e || null == d) return;
      let t = {
        name: d.name,
        description: d.description,
        icon: d.icon,
        brandColorPrimary: d.brandColorPrimary,
        traits: d.traits,
        visibility: d.visibility,
        gameApplicationIds: d.gameApplicationIds,
        customBanner: d.customBanner
      };
      (0, l.pV)(e.id, t)
    }, [e, d]),
    m = i.useCallback(() => {
      null != t && A.Z.init(t)
    }, [t]);
  return (0, r.jsx)(a.Z, {
    submitting: u,
    errorMessage: g,
    onSave: f,
    onReset: m
  })
}