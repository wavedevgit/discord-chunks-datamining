/** Chunk was on 29679 **/
/** chunk id: 475013, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => N,
  _: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk749210 = require("./749210.js"),
  Chunk852860 = require("./852860.jsx"),
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

function y(e) {
  p.Z.selectRole(e)
}
let E = () => {
  let {
    guild: e
  } = (0, Chunk442837.cj)([Chunk999382.Z], () => Chunk999382.Z.getProps()), t = (0, Chunk442837.e7)([Chunk103576.Z], () => Chunk103576.Z.formState), n = (0, Chunk442837.e7)([Chunk103576.Z], () => Chunk103576.Z.errorMessage);
  return (0, Chunk951288.jsx)(Chunk852860.Z, {
    errorMessage: require,
    onSave: () => {
      if (null == module) return;
      let {
        id: t
      } = module, n = Chunk103576.Z.editedRoleIds.map(e => b.Z.getRole(e)).filter(Chunk823379.lm), r = Chunk103576.Z.getSortDeltas(), i = null, l = null;
      Chunk103576.Z.hasRoleConfigurationChanges && (l = Chunk103576.Z.editedRoleIdsForConfigurations, i = Chunk103576.Z.getEditedRoleConnectionConfigurationsMap()), (0, Chunk84058.Gf)(exports, require, Chunk951288, Chunk512722, Chunk647438)
    },
    submitting: exports === Chunk981631.QZA.SUBMITTING,
    onReset: Chunk84058.S1
  })
};

function N(e) {
  let {
    refToScroller: t
  } = e, {
    guild: n,
    roles: l
  } = (0, s.cj)([b.Z], () => ({
    guild: b.Z.guild,
    roles: b.Z.roles
  }), []);
  a()(null != n, "Guild cannot be null here");
  let c = i.useMemo(() => l.find(e => (0, u.fI)(e)), [l]);
  a()(null != c, "Guild must have an everyone role");
  let m = i.useMemo(() => l.filter(e => !(0, u.fI)(e)), [l]),
    p = (0, s.e7)([f.Z], () => f.Z.getSelectedRoleId()),
    [h, O] = i.useState(m.length > 0);
  i.useEffect(() => {
    O(h || m.length > 0)
  }, [h, m.length]), (0, d.ZP)(() => {
    let e = g.Z.getMemberCount(n.id);
    null != e && e <= x.cm && o.Z.requestMembers(n.id, "", 0, false)
  });
  let [E, N] = i.useState(C.ZI.DISPLAY);
  return (i.useEffect(() => {
    null == p && N(C.ZI.DISPLAY)
  }, [p]), null != p) ? (0, r.jsx)(j.Z, {
    editRoleId: p,
    setEditRoleId: y,
    selectedSection: E,
    setSelectedSection: N
  }) : h ? (0, r.jsx)(_.Z, {
    setEditRoleId: y,
    guild: n,
    everyoneRole: c,
    otherRoles: m,
    setSelectedSection: N,
    refToScroller: t
  }) : (0, r.jsx)(v.Z, {
    guild: n,
    everyoneRole: c,
    setEditRoleId: y
  })
}