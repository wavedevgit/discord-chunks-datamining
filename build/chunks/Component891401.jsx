/** Chunk was on 84249 **/
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
  Chunk963182 = require("./963182.js");

function u() {
  return (0, a.jsx)(s.Ttm, {
    className: d.container,
    children: (0, a.jsx)(m, {})
  })
}

function m() {
  let e = r.useCallback(() => {
      (0, c.Z1)(l.z.NITRO_TENURE_BADGE_LEVEL_UP)
    }, []),
    {
      lastDismissedAtMs: t
    } = (0, o.Fo)(l.z.NITRO_TENURE_BADGE_LEVEL_UP),
    n = null != t ? new Date(t) : null;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.X6q, {
      className: d.header,
      variant: "heading-lg/semibold",
      children: "Tenure Badges"
    }), (0, a.jsxs)("p", {
      children: ["Level Up DC:\xa0", null != n && (0, a.jsxs)("b", {
        children: ["Dismissed (", n.toLocaleDateString(), ")"]
      }), null == n && (0, a.jsx)("b", {
        children: "Not Dismissed"
      })]
    }), (0, a.jsx)("div", {
      className: d.tenureBadgeControls,
      children: (0, a.jsx)(s.Button, {
        variant: "primary",
        text: "Reset Level Up DC",
        onClick: e
      })
    })]
  })
}