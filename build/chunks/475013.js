/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => O,
  _: () => I
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(512722),
  a = n.n(s),
  l = n(442837),
  o = n(749210),
  c = n(852860),
  A = n(493773),
  d = n(605436),
  u = n(650774),
  g = n(823379),
  f = n(434404),
  m = n(764260),
  p = n(946724),
  h = n(999382),
  C = n(130341),
  b = n(853813),
  v = n(163249),
  x = n(150689),
  N = n(203377),
  j = n(981631);

function E(e) {
  f.Z.selectRole(e)
}
let I = () => {
  let {
    guild: e
  } = (0, l.cj)([h.Z], () => h.Z.getProps()), t = (0, l.e7)([p.Z], () => p.Z.formState), n = (0, l.e7)([p.Z], () => p.Z.errorMessage);
  return (0, r.jsx)(c.Z, {
    errorMessage: n,
    onSave: () => {
      if (null == e) return;
      let {
        id: t
      } = e, n = p.Z.editedRoleIds.map(e => p.Z.getRole(e)).filter(g.lm), r = p.Z.getSortDeltas(), i = null, s = null;
      p.Z.hasRoleConfigurationChanges && (s = p.Z.editedRoleIdsForConfigurations, i = p.Z.getEditedRoleConnectionConfigurationsMap()), (0, m.Gf)(t, n, r, s, i)
    },
    submitting: t === j.QZA.SUBMITTING,
    onReset: m.S1
  })
};

function O(e) {
  let {
    refToScroller: t
  } = e, {
    guild: n,
    roles: s
  } = (0, l.cj)([p.Z], () => ({
    guild: p.Z.guild,
    roles: p.Z.roles
  }), []);
  a()(null != n, "Guild cannot be null here");
  let c = i.useMemo(() => s.find(e => (0, d.pM)(n.id, e.id)), [s, n]);
  a()(null != c, "Guild must have an everyone role");
  let g = i.useMemo(() => s.filter(e => !(0, d.pM)(n.id, e.id)), [s, n]),
    f = (0, l.e7)([h.Z], () => h.Z.getSelectedRoleId()),
    [m, j] = i.useState(g.length > 0);
  i.useEffect(() => {
    j(m || g.length > 0)
  }, [m, g.length]), (0, A.ZP)(() => {
    let e = u.Z.getMemberCount(n.id);
    null != e && e <= C.cm && o.Z.requestMembers(n.id, "", 0, !1)
  });
  let [I, O] = i.useState(N.ZI.DISPLAY);
  return (i.useEffect(() => {
    null == f && O(N.ZI.DISPLAY)
  }, [f]), null != f) ? (0, r.jsx)(b.Z, {
    editRoleId: f,
    setEditRoleId: E,
    selectedSection: I,
    setSelectedSection: O
  }) : m ? (0, r.jsx)(x.Z, {
    setEditRoleId: E,
    guild: n,
    everyoneRole: c,
    otherRoles: g,
    setSelectedSection: O,
    refToScroller: t
  }) : (0, r.jsx)(v.Z, {
    guild: n,
    everyoneRole: c,
    setEditRoleId: E
  })
}