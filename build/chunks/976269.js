/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => u
});
var r = n(200651),
  i = n(192379),
  s = n(399606),
  a = n(852860),
  l = n(999382),
  o = n(8426),
  c = n(969632),
  A = n(388032);

function d(e) {
  let {
    guildId: t
  } = e, n = (0, s.e7)([c.Z], () => c.Z.getSettings()), l = (0, s.e7)([c.Z], () => c.Z.getSubmitting()), d = i.useCallback(() => {
    try {
      (0, o.oo)(t, n)
    } catch (e) {}
  }, [t, n]);
  return (0, r.jsx)(a.Z, {
    onSave: d,
    onReset: o.bj,
    submitting: l,
    onSaveText: A.NW.string(A.t.R3BPHx)
  })
}
let u = function() {
  let e = (0, s.e7)([l.Z], () => l.Z.getGuild());
  return null == e ? null : (0, r.jsx)(d, {
    guildId: e.id
  })
}