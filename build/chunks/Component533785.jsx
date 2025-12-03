/** Chunk was on 77033 **/
/** chunk id: 533785, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  t: () => d
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk590961 = require("./590961.jsx"),
  Chunk840724 = require("./840724.jsx"),
  Chunk661009 = require("./661009.js");

function d(e) {
  let {
    leaderboard: n,
    skuId: t,
    applicationId: d,
    guildId: c,
    analyticsLocations: u,
    analyticsSectionId: g
  } = e, p = i.useMemo(() => ({
    pageSection: g
  }), [g]);
  return null == n ? null : (0, l.jsx)(o.hL, {
    newValue: p,
    children: (0, l.jsxs)("div", {
      className: r.container,
      children: [(0, l.jsxs)("div", {
        className: r.textContainer,
        children: [(0, l.jsx)(a.Heading, {
          variant: "display-lg",
          color: "text-strong",
          children: n.title
        }), (0, l.jsx)(a.Text, {
          variant: "text-lg/semibold",
          color: "text-subtle",
          children: n.description
        })]
      }), null != t && (0, l.jsx)("div", {
        className: r.cardContainer,
        children: (0, l.jsx)(s.C, {
          positionInSection: 0,
          applicationId: d,
          skuId: t,
          variant: s.Z.MEDIUM,
          guildId: c,
          analyticsLocations: u
        })
      })]
    })
  })
}