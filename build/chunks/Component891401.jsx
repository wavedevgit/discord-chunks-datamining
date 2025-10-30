/** Chunk was on 95017 **/
/** chunk id: 891401, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk605236 = require("./605236.js"),
  Chunk675478 = require("./675478.js"),
  Chunk715639 = require("./715639.js");

function u() {
  return (0, Chunk951288.jsx)(Chunk481060.Ttm, {
    className: Chunk715639.container,
    children: (0, Chunk951288.jsx)(m, {})
  })
}

function m() {
  let e = Chunk647438.useCallback(() => {
      (0, Chunk675478.Z1)(Chunk704215.z.NITRO_TENURE_BADGE_LEVEL_UP)
    }, []),
    {
      lastDismissedAtMs: t
    } = (0, Chunk605236.Fo)(Chunk704215.z.NITRO_TENURE_BADGE_LEVEL_UP),
    n = null != exports ? new Date(exports) : null;
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk793030.X6q, {
      className: Chunk715639.header,
      variant: "heading-lg/semibold",
      children: "Tenure Badges"
    }), (0, Chunk951288.jsxs)("p", {
      children: ["Level Up DC:\xa0", null != require && (0, Chunk951288.jsxs)("b", {
        children: ["Dismissed (", require.toLocaleDateString(), ")"]
      }), null == require && (0, Chunk951288.jsx)("b", {
        children: "Not Dismissed"
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk715639.tenureBadgeControls,
      children: (0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "primary",
        text: "Reset Level Up DC",
        onClick: module
      })
    })]
  })
}