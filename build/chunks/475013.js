/** Chunk was on 71567 **/
"use strict";
n.d(t, {
  Z: () => I,
  _: () => C
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(512722),
  a = n.n(s),
  l = n(442837),
  o = n(749210),
  c = n(852860),
  d = n(493773),
  u = n(605436),
  m = n(650774),
  p = n(823379),
  g = n(434404),
  h = n(764260),
  f = n(946724),
  b = n(999382),
  x = n(130341),
  j = n(853813),
  N = n(163249),
  v = n(150689),
  _ = n(203377),
  O = n(981631);

function y(e) {
  g.Z.selectRole(e)
}
let C = () => {
  let {
    guild: e
  } = (0, l.cj)([b.Z], () => b.Z.getProps()), t = (0, l.e7)([f.Z], () => f.Z.formState), n = (0, l.e7)([f.Z], () => f.Z.errorMessage);
  return (0, r.jsx)(c.Z, {
    errorMessage: n,
    onSave: () => {
      if (null == e) return;
      let {
        id: t
      } = e, n = f.Z.editedRoleIds.map(e => f.Z.getRole(e)).filter(p.lm), r = f.Z.getSortDeltas(), i = null, s = null;
      f.Z.hasRoleConfigurationChanges && (s = f.Z.editedRoleIdsForConfigurations, i = f.Z.getEditedRoleConnectionConfigurationsMap()), (0, h.Gf)(t, n, r, s, i)
    },
    submitting: t === O.QZA.SUBMITTING,
    onReset: h.S1
  })
};

function I(e) {
  let {
    refToScroller: t
  } = e, {
    guild: n,
    roles: s
  } = (0, l.cj)([f.Z], () => ({
    guild: f.Z.guild,
    roles: f.Z.roles
  }), []);
  a()(null != n, "Guild cannot be null here");
  let c = i.useMemo(() => s.find(e => (0, u.pM)(n.id, e.id)), [s, n]);
  a()(null != c, "Guild must have an everyone role");
  let p = i.useMemo(() => s.filter(e => !(0, u.pM)(n.id, e.id)), [s, n]),
    g = (0, l.e7)([b.Z], () => b.Z.getSelectedRoleId()),
    [h, O] = i.useState(p.length > 0);
  i.useEffect(() => {
    O(h || p.length > 0)
  }, [h, p.length]), (0, d.ZP)(() => {
    let e = m.Z.getMemberCount(n.id);
    null != e && e <= x.cm && o.Z.requestMembers(n.id, "", 0, !1)
  });
  let [C, I] = i.useState(_.ZI.DISPLAY);
  return (i.useEffect(() => {
    null == g && I(_.ZI.DISPLAY)
  }, [g]), null != g) ? (0, r.jsx)(j.Z, {
    editRoleId: g,
    setEditRoleId: y,
    selectedSection: C,
    setSelectedSection: I
  }) : h ? (0, r.jsx)(v.Z, {
    setEditRoleId: y,
    guild: n,
    everyoneRole: c,
    otherRoles: p,
    setSelectedSection: I,
    refToScroller: t
  }) : (0, r.jsx)(N.Z, {
    guild: n,
    everyoneRole: c,
    setEditRoleId: y
  })
}