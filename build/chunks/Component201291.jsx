/** Chunk was on 43224 **/
/** chunk id: 201291, original params: t,i,l (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  e = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk608461 = require("./608461.js"),
  Chunk915089 = require("./915089.js"),
  Chunk493540 = require("./493540.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function h(t) {
  let {
    transitionState: i,
    guild: l,
    onClose: n
  } = t, h = (0, d.GV)(), [m, {
    loading: g,
    error: x
  }] = (0, c.A)(u.ms), b = async () => {
    e()(null != l, "no guild"), null != await m(l.id) && n()
  };
  return (0, a.jsx)(r.Modal, {
    transitionState: i,
    "aria-labelledby": h,
    actions: [{
      variant: "critical-primary",
      text: p.intl.string(p.t["R3BPH+"]),
      loading: g,
      onClick: b
    }],
    title: p.intl.string(p.t.rRpcE1),
    subtitle: p.intl.format(p.t.Oa5P6w, {
      guildName: l.name,
      url: o.X7G.DEVELOPER_PORTAL_TEAMS
    }),
    onClose: n,
    children: null != x ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(s.wx6, {
        type: "critical",
        children: x.message
      }), (0, a.jsx)(s.hKd, {
        size: 24
      })]
    }) : null
  })
}