/** Chunk was on 56795 **/
/** chunk id: 961881, original params: e,t,s (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk538064 = require("./538064.js"),
  Chunk348639 = require("./348639.js"),
  Chunk972049 = require("./972049.js"),
  Chunk772958 = require("./772958.js");

function u() {
  let [e, t] = r.useState(false), s = (0, d.vX)(), {
    reporting: u
  } = c.A.useExperiment({
    location: "be7a1c_1"
  }, {
    autoTrackExposure: false
  });
  return (r.useEffect(() => {
    if (u && e && null != s) return s.forEach(e => {
      e.elements.forEach(e => {
        e.setAttribute(o.nY, "")
      })
    }), () => {
      s.forEach(e => {
        e.elements.forEach(e => {
          e.removeAttribute(o.nY)
        })
      })
    }
  }, [s, u, e]), u && null != s && 0 !== s.length) ? (0, i.jsxs)("div", {
    style: {
      backgroundColor: n.A.colors.BACKGROUND_FEEDBACK_CRITICAL.css,
      color: n.A.colors.TEXT_FEEDBACK_CRITICAL.css,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 12px"
    },
    children: [(0, i.jsx)(l.Text, {
      variant: "text-sm/semibold",
      color: "text-feedback-critical",
      children: "Accessibility compliance issue(s) detected, check in-app DevTools"
    }), (0, i.jsxs)(l.ButtonGroup, {
      direction: "horizontal",
      size: "sm",
      children: [(0, i.jsx)(l.Button, {
        text: "Open DevTools",
        onClick: a.pf,
        variant: "critical-secondary"
      }), (0, i.jsx)(l.Button, {
        onClick: () => t(!e),
        text: "".concat(e ? "Hide" : "Show", " Overlays"),
        variant: "critical-primary"
      })]
    })]
  }) : null
}