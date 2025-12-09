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
  let [e, t] = Chunk473749.useState(false), i = (0, Chunk915312.LL)(), {
    reporting: u
  } = Chunk481637.Z.useExperiment({
    location: "be7a1c_1"
  }, {
    autoTrackExposure: false
  });
  return (Chunk473749.useEffect(() => {
    if (u && module && null != require) return require.forEach(e => {
      e.elements.forEach(e => {
        e.setAttribute(a.OF, "")
      })
    }), () => {
      require.forEach(e => {
        e.elements.forEach(e => {
          e.removeAttribute(a.OF)
        })
      })
    }
  }, [require, u, module]), u && null != require && 0 !== require.length) ? (0, Chunk54381.jsxs)("div", {
    style: {
      backgroundColor: Chunk692547.Z.colors.BACKGROUND_FEEDBACK_CRITICAL.css,
      color: Chunk692547.Z.colors.TEXT_FEEDBACK_CRITICAL.css,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 12px"
    },
    children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/semibold",
      color: "text-feedback-critical",
      children: "Accessibility compliance issue(s) detected, check in-app DevTools"
    }), (0, Chunk54381.jsxs)(Chunk481060.ButtonGroup, {
      direction: "horizontal",
      size: "sm",
      children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
        text: "Open DevTools",
        onClick: Chunk31336.SO,
        variant: "critical-secondary"
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        onClick: () => exports(!module),
        text: "".concat(module ? "Hide" : "Show", " Overlays"),
        variant: "critical-primary"
      })]
    })]
  }) : null
}