/** Chunk was on 35282 **/
/** chunk id: 157429, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  e = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk935369 = require("./935369.js"),
  Chunk313201 = require("./313201.js"),
  Chunk53365 = require("./53365.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(t) {
  let {
    transitionState: i,
    guild: n,
    onClose: a
  } = t, h = (0, u.Dt)(), [x, {
    loading: g,
    error: m
  }] = (0, c.Z)(d.oL), E = async () => {
    e()(null != n, "no guild"), null != await x(n.id) && a()
  };
  return (0, l.jsx)(r.Modal, {
    transitionState: i,
    "aria-labelledby": h,
    actions: [{
      variant: "critical-primary",
      text: p.intl.string(p.t.R3BPHx),
      loading: g,
      onClick: E
    }],
    title: p.intl.string(p.t.rRpcEx),
    subtitle: p.intl.format(p.t["Oa5P6+"], {
      guildName: n.name,
      url: o.EYA.DEVELOPER_PORTAL_TEAMS
    }),
    onClose: a,
    children: null != m ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(s.M14, {
        type: "critical",
        children: m.message
      }), (0, l.jsx)(s.LZC, {
        size: 24
      })]
    }) : null
  })
}