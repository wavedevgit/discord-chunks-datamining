/** Chunk was on 14078 **/
/** chunk id: 748959, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  I: () => o
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk439303 = require("./439303.jsx"),
  Chunk183802 = require("./183802.jsx"),
  Chunk963879 = require("./963879.js");

function o(e) {
  let {
    leaderboard: l,
    skuId: t,
    applicationId: o,
    guildId: c,
    analyticsLocations: u,
    analyticsSectionId: g
  } = e, _ = s.useMemo(() => ({
    pageSection: g
  }), [g]);
  return null == l ? null : (0, n.jsx)(i.E9, {
    newValue: _,
    children: (0, n.jsxs)("div", {
      className: r.kL,
      children: [(0, n.jsxs)("div", {
        className: r.FS,
        children: [(0, n.jsx)(a.Heading, {
          variant: "display-lg",
          color: "text-strong",
          children: l.title
        }), (0, n.jsx)(a.Text, {
          variant: "text-lg/semibold",
          color: "text-subtle",
          children: l.description
        })]
      }), null != t && (0, n.jsx)("div", {
        className: r.Ui,
        children: (0, n.jsx)(d.A, {
          positionInSection: 0,
          applicationId: o,
          skuId: t,
          variant: d.s.MEDIUM,
          guildId: c,
          analyticsLocations: u
        })
      })]
    })
  })
}