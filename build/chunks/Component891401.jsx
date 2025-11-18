/** Chunk was on 65347 **/
/** chunk id: 891401, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk605236 = require("./605236.js"),
  Chunk675478 = require("./675478.js"),
  Chunk436799 = require("./436799.js");

function u() {
  return (0, Chunk54381.jsx)(Chunk481060.Ttm, {
    className: Chunk436799.container,
    children: (0, Chunk54381.jsx)(m, {})
  })
}

function m() {
  let e = Chunk473749.useCallback(() => {
      (0, Chunk675478.Z1)(Chunk704215.z.NITRO_TENURE_BADGE_LEVEL_UP)
    }, []),
    {
      lastDismissedAtMs: t
    } = (0, Chunk605236.Fo)(Chunk704215.z.NITRO_TENURE_BADGE_LEVEL_UP),
    n = null != exports ? new Date(exports) : null;
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk793030.X6q, {
      className: Chunk436799.header,
      variant: "heading-lg/semibold",
      children: "Tenure Badges"
    }), (0, Chunk54381.jsxs)("p", {
      children: ["Level Up DC:\xa0", null != require && (0, Chunk54381.jsxs)("b", {
        children: ["Dismissed (", require.toLocaleDateString(), ")"]
      }), null == require && (0, Chunk54381.jsx)("b", {
        children: "Not Dismissed"
      })]
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk436799.tenureBadgeControls,
      children: (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        text: "Reset Level Up DC",
        onClick: module
      })
    })]
  })
}