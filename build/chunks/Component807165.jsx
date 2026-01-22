/** Chunk was on 47841 **/
/** chunk id: 807165, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => _,
  W: () => N
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

function E(e) {
  b.A.selectRole(e)
}
let N = () => {
  let {
    guild: e
  } = (0, a.cf)([m.A], () => m.A.getProps()), t = (0, a.bG)([x.A], () => x.A.formState), n = (0, a.bG)([x.A], () => x.A.errorMessage);
  return (0, r.jsx)(c.A, {
    errorMessage: n,
    onSave: () => {
      if (null == e) return;
      let {
        id: t
      } = e, n = x.A.editedRoleIds.map(e => x.A.getRole(e)).filter(g.Vq), r = x.A.getSortDeltas(), i = null, l = null;
      x.A.hasRoleConfigurationChanges && (l = x.A.editedRoleIdsForConfigurations, i = x.A.getEditedRoleConnectionConfigurationsMap()), (0, p.JY)(t, n, r, l, i)
    },
    submitting: t === A.XlH.SUBMITTING,
    onReset: p.Ts
  })
};

function _(e) {
  let {
    refToScroller: t
  } = e, {
    guild: n,
    roles: l
  } = (0, a.cf)([x.A], () => ({
    guild: x.A.guild,
    roles: x.A.roles
  }), []);
  s()(null != n, "Guild cannot be null here");
  let c = i.useMemo(() => l.find(e => (0, u.Oy)(e)), [l]);
  s()(null != c, "Guild must have an everyone role");
  let g = i.useMemo(() => l.filter(e => !(0, u.Oy)(e)), [l]),
    b = (0, a.bG)([m.A], () => m.A.getSelectedRoleId()),
    [p, A] = i.useState(g.length > 0);
  i.useEffect(() => {
    A(p || g.length > 0)
  }, [p, g.length]), (0, d.Ay)(() => {
    let e = f.A.getMemberCount(n.id);
    null != e && e <= h.gz && o.A.requestMembers(n.id, "", 0, false)
  });
  let [N, _] = i.useState(v.T$.DISPLAY);
  return (i.useEffect(() => {
    null == b && _(v.T$.DISPLAY)
  }, [b]), null != b) ? (0, r.jsx)(j.A, {
    editRoleId: b,
    setEditRoleId: E,
    selectedSection: N,
    setSelectedSection: _
  }) : p ? (0, r.jsx)(y.A, {
    setEditRoleId: E,
    guild: n,
    everyoneRole: c,
    otherRoles: g,
    setSelectedSection: _,
    refToScroller: t
  }) : (0, r.jsx)(O.A, {
    guild: n,
    everyoneRole: c,
    setEditRoleId: E
  })
}