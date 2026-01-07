/** Chunk was on 58493 **/
/** chunk id: 80753, original params: e,t,i (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk31336 = require("./31336.js"),
  Chunk481637 = require("./481637.js"),
  Chunk532810 = require("./532810.js"),
  Chunk915312 = require("./915312.js");

function u() {
  let [e, t] = r.useState(false), i = (0, d.LL)(), {
    reporting: u
  } = o.Z.useExperiment({
    location: "be7a1c_1"
  }, {
    autoTrackExposure: false
  });
  return (r.useEffect(() => {
    if (u && e && null != i) return i.forEach(e => {
      e.elements.forEach(e => {
        e.setAttribute(a.OF, "")
      })
    }), () => {
      i.forEach(e => {
        e.elements.forEach(e => {
          e.removeAttribute(a.OF)
        })
      })
    }
  }, [i, u, e]), u && null != i && 0 !== i.length) ? (0, n.jsxs)("div", {
    style: {
      backgroundColor: s.Z.colors.BACKGROUND_FEEDBACK_CRITICAL.css,
      color: s.Z.colors.TEXT_FEEDBACK_CRITICAL.css,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 12px"
    },
    children: [(0, n.jsx)(c.Text, {
      variant: "text-sm/semibold",
      color: "text-feedback-critical",
      children: "Accessibility compliance issue(s) detected, check in-app DevTools"
    }), (0, n.jsxs)(c.ButtonGroup, {
      direction: "horizontal",
      size: "sm",
      children: [(0, n.jsx)(c.Button, {
        text: "Open DevTools",
        onClick: l.SO,
        variant: "critical-secondary"
      }), (0, n.jsx)(c.Button, {
        onClick: () => t(!e),
        text: "".concat(e ? "Hide" : "Show", " Overlays"),
        variant: "critical-primary"
      })]
    })]
  }) : null
}