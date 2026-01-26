/** Chunk was on 39048 **/
/** chunk id: 807165, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => N,
  W: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk686956 = require("./686956.js"),
  Chunk964486 = require("./964486.js"),
  Chunk34457 = require("./34457.js"),
  Chunk498642 = require("./498642.js"),
  Chunk403362 = require("./403362.js"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk636042 = require("./636042.js"),
  Chunk396816 = require("./396816.js"),
  Chunk856644 = require("./856644.js"),
  Chunk206774 = require("./206774.jsx"),
  Chunk763582 = require("./763582.jsx"),
  Chunk966851 = require("./966851.jsx"),
  Chunk927573 = require("./927573.js"),
  Chunk652215 = require("./652215.js");

function A(e) {
  p.A.selectRole(e)
}
let E = () => {
  let {
    guild: e
  } = (0, a.cf)([f.A], () => f.A.getProps()), t = (0, a.bG)([b.A], () => b.A.formState), n = (0, a.bG)([b.A], () => b.A.errorMessage);
  return (0, r.jsx)(o.A, {
    errorMessage: n,
    onSave: () => {
      if (null == e) return;
      let {
        id: t
      } = e, n = b.A.editedRoleIds.map(e => b.A.getRole(e)).filter(m.Vq), r = b.A.getSortDeltas(), i = null, l = null;
      b.A.hasRoleConfigurationChanges && (l = b.A.editedRoleIdsForConfigurations, i = b.A.getEditedRoleConnectionConfigurationsMap()), (0, h.JY)(t, n, r, l, i)
    },
    submitting: t === y.XlH.SUBMITTING,
    onReset: h.Ts
  })
};

function N(e) {
  let {
    refToScroller: t
  } = e, {
    guild: n,
    roles: l
  } = (0, a.cf)([b.A], () => ({
    guild: b.A.guild,
    roles: b.A.roles
  }), []);
  s()(null != n, "Guild cannot be null here");
  let o = i.useMemo(() => l.find(e => (0, u.Oy)(e)), [l]);
  s()(null != o, "Guild must have an everyone role");
  let m = i.useMemo(() => l.filter(e => !(0, u.Oy)(e)), [l]),
    p = (0, a.bG)([f.A], () => f.A.getSelectedRoleId()),
    [h, y] = i.useState(m.length > 0);
  i.useEffect(() => {
    y(h || m.length > 0)
  }, [h, m.length]), (0, d.Ay)(() => {
    let e = g.A.getMemberCount(n.id);
    null != e && e <= x.gz && c.A.requestMembers(n.id, "", 0, false)
  });
  let [E, N] = i.useState(v.T$.DISPLAY);
  return (i.useEffect(() => {
    null == p && N(v.T$.DISPLAY)
  }, [p]), null != p) ? (0, r.jsx)(j.A, {
    editRoleId: p,
    setEditRoleId: A,
    selectedSection: E,
    setSelectedSection: N
  }) : h ? (0, r.jsx)(O.A, {
    setEditRoleId: A,
    guild: n,
    everyoneRole: o,
    otherRoles: m,
    setSelectedSection: N,
    refToScroller: t
  }) : (0, r.jsx)(_.A, {
    guild: n,
    everyoneRole: o,
    setEditRoleId: A
  })
}