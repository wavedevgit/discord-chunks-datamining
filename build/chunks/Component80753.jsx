/** Chunk was on 58493 **/
/** chunk id: 80753, original params: e,t,i (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk31336 = require("./31336.js"),
  Chunk481637 = require("./481637.js"),
  Chunk532810 = require("./532810.js"),
  Chunk915312 = require("./915312.js");

function p() {
  let [e, t] = Chunk647438.useState(false), i = (0, Chunk915312.LL)(), {
    reporting: p
  } = Chunk481637.Z.useExperiment({
    location: "be7a1c_1"
  }, {
    autoTrackExposure: false
  });
  return (Chunk647438.useEffect(() => {
    if (p && module && null != require) return require.forEach(e => {
      e.elements.forEach(e => {
        e.setAttribute(d.OF, "")
      })
    }), () => {
      require.forEach(e => {
        e.elements.forEach(e => {
          e.removeAttribute(d.OF)
        })
      })
    }
  }, [require, p, module]), p && null != require && 0 !== require.length) ? (0, Chunk951288.jsxs)("div", {
    style: {
      backgroundColor: Chunk377171.Z.BACKGROUND_FEEDBACK_CRITICAL,
      color: Chunk377171.Z.TEXT_FEEDBACK_CRITICAL,
      display: "flex",
      alignItems: "center",
      padding: "8px 12px"
    },
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/semibold",
      color: "text-feedback-critical",
      children: "Accessibility compliance issue(s) detected, check in-app DevTools"
    }), (0, Chunk951288.jsxs)("div", {
      style: {
        display: "grid",
        gridAutoFlow: "column",
        gap: 4,
        marginLeft: "auto"
      },
      children: [(0, Chunk951288.jsx)(Chunk755721.zx, {
        size: Chunk755721.zx.Sizes.TINY,
        color: Chunk755721.zx.Colors.RED,
        style: {
          marginLeft: "auto"
        },
        onClick: Chunk31336.SO,
        children: "Open DevTools"
      }), (0, Chunk951288.jsxs)(Chunk755721.zx, {
        size: Chunk755721.zx.Sizes.TINY,
        color: Chunk755721.zx.Colors.RED,
        style: {
          marginLeft: "auto"
        },
        onClick: () => exports(!module),
        children: [module ? "Hide" : "Show", " Overlays"]
      })]
    })]
  }) : null
}