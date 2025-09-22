/** Chunk was on 8106 **/
/** chunk id: 475013, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E,
  _: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk749210 = require("./749210.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk345162 = require("./345162.js"),
  Chunk650774 = require("./650774.js"),
  Chunk823379 = require("./823379.js"),
  Chunk434404 = require("./434404.js"),
  Chunk764260 = require("./764260.js"),
  Chunk946724 = require("./946724.js"),
  Chunk999382 = require("./999382.js"),
  Chunk130341 = require("./130341.js"),
  Chunk853813 = require("./853813.jsx"),
  Chunk163249 = require("./163249.jsx"),
  Chunk150689 = require("./150689.jsx"),
  Chunk203377 = require("./203377.js"),
  Chunk981631 = require("./981631.js");

function C(e) {
  p.Z.selectRole(e)
}
let N = () => {
  let {
    guild: e
  } = (0, Chunk442837.cj)([Chunk999382.Z], () => Chunk999382.Z.getProps()), t = (0, Chunk442837.e7)([Chunk946724.Z], () => Chunk946724.Z.formState), n = (0, Chunk442837.e7)([Chunk946724.Z], () => Chunk946724.Z.errorMessage);
  return (0, Chunk951288.jsx)(Chunk852860.Z, {
    errorMessage: require,
    onSave: () => {
      if (null == module) return;
      let {
        id: t
      } = module, n = Chunk946724.Z.editedRoleIds.map(e => h.Z.getRole(e)).filter(Chunk823379.lm), r = Chunk946724.Z.getSortDeltas(), i = null, l = null;
      Chunk946724.Z.hasRoleConfigurationChanges && (l = Chunk946724.Z.editedRoleIdsForConfigurations, i = Chunk946724.Z.getEditedRoleConnectionConfigurationsMap()), (0, Chunk764260.Gf)(exports, require, Chunk951288, Chunk512722, Chunk647438)
    },
    submitting: exports === Chunk981631.QZA.SUBMITTING,
    onReset: Chunk764260.S1
  })
};

function E(e) {
  let {
    refToScroller: t
  } = e, {
    guild: n,
    roles: l
  } = (0, a.cj)([h.Z], () => ({
    guild: h.Z.guild,
    roles: h.Z.roles
  }), []);
  s()(null != n, "Guild cannot be null here");
  let c = i.useMemo(() => l.find(e => (0, u.fI)(e)), [l]);
  s()(null != c, "Guild must have an everyone role");
  let g = i.useMemo(() => l.filter(e => !(0, u.fI)(e)), [l]),
    p = (0, a.e7)([b.Z], () => b.Z.getSelectedRoleId()),
    [f, y] = i.useState(g.length > 0);
  i.useEffect(() => {
    y(f || g.length > 0)
  }, [f, g.length]), (0, d.ZP)(() => {
    let e = m.Z.getMemberCount(n.id);
    null != e && e <= x.cm && o.Z.requestMembers(n.id, "", 0, false)
  });
  let [N, E] = i.useState(O.ZI.DISPLAY);
  return (i.useEffect(() => {
    null == p && E(O.ZI.DISPLAY)
  }, [p]), null != p) ? (0, r.jsx)(j.Z, {
    editRoleId: p,
    setEditRoleId: C,
    selectedSection: N,
    setSelectedSection: E
  }) : f ? (0, r.jsx)(_.Z, {
    setEditRoleId: C,
    guild: n,
    everyoneRole: c,
    otherRoles: g,
    setSelectedSection: E,
    refToScroller: t
  }) : (0, r.jsx)(v.Z, {
    guild: n,
    everyoneRole: c,
    setEditRoleId: C
  })
}