/** Chunk was on 9536 **/
/** chunk id: 475013, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => I,
  _: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk749210 = require("./749210.js"),
  Chunk493773 = require("./493773.js"),
  Chunk345162 = require("./345162.js"),
  Chunk650774 = require("./650774.js"),
  Chunk823379 = require("./823379.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk84058 = require("./84058.js"),
  Chunk103576 = require("./103576.js"),
  Chunk130341 = require("./130341.js"),
  Chunk853813 = require("./853813.jsx"),
  Chunk163249 = require("./163249.jsx"),
  Chunk150689 = require("./150689.jsx"),
  Chunk203377 = require("./203377.js"),
  Chunk981631 = require("./981631.js");

function N(e) {
  m.Z.selectRole(e)
}
let E = () => {
  let {
    guild: e
  } = (0, s.cj)([b.Z], () => b.Z.getProps()), t = (0, s.e7)([h.Z], () => h.Z.formState), n = (0, s.e7)([h.Z], () => h.Z.errorMessage);
  return (0, r.jsx)(o.Z, {
    errorMessage: n,
    onSave: () => {
      if (null == e) return;
      let {
        id: t
      } = e, n = h.Z.editedRoleIds.map(e => h.Z.getRole(e)).filter(f.lm), r = h.Z.getSortDeltas(), i = null, l = null;
      h.Z.hasRoleConfigurationChanges && (l = h.Z.editedRoleIdsForConfigurations, i = h.Z.getEditedRoleConnectionConfigurationsMap()), (0, p.Gf)(t, n, r, l, i)
    },
    submitting: t === C.QZA.SUBMITTING,
    onReset: p.S1
  })
};

function I(e) {
  let {
    refToScroller: t
  } = e, {
    guild: n,
    roles: l
  } = (0, s.cj)([h.Z], () => ({
    guild: h.Z.guild,
    roles: h.Z.roles
  }), []);
  a()(null != n, "Guild cannot be null here");
  let o = i.useMemo(() => l.find(e => (0, u.fI)(e)), [l]);
  a()(null != o, "Guild must have an everyone role");
  let f = i.useMemo(() => l.filter(e => !(0, u.fI)(e)), [l]),
    m = (0, s.e7)([b.Z], () => b.Z.getSelectedRoleId()),
    [p, C] = i.useState(f.length > 0);
  i.useEffect(() => {
    C(p || f.length > 0)
  }, [p, f.length]), (0, d.ZP)(() => {
    let e = g.Z.getMemberCount(n.id);
    null != e && e <= x.cm && c.Z.requestMembers(n.id, "", 0, false)
  });
  let [E, I] = i.useState(y.ZI.DISPLAY);
  return (i.useEffect(() => {
    null == m && I(y.ZI.DISPLAY)
  }, [m]), null != m) ? (0, r.jsx)(j.Z, {
    editRoleId: m,
    setEditRoleId: N,
    selectedSection: E,
    setSelectedSection: I
  }) : p ? (0, r.jsx)(O.Z, {
    setEditRoleId: N,
    guild: n,
    everyoneRole: o,
    otherRoles: f,
    setSelectedSection: I,
    refToScroller: t
  }) : (0, r.jsx)(v.Z, {
    guild: n,
    everyoneRole: o,
    setEditRoleId: N
  })
}