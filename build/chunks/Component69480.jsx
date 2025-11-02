/** Chunk was on 90946 **/
/** chunk id: 69480, original params: e,n,i (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./49124.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js");

function o(e) {
  let {
    clip: n,
    onClose: i,
    transitionState: o
  } = e;
  return (0, t.jsx)(l.Modal, {
    transitionState: o,
    onClose: i,
    title: "Clip Debug",
    size: "md",
    actions: [{
      text: "Close",
      variant: "secondary",
      onClick: i
    }],
    children: (0, t.jsxs)(a.C3N, {
      label: "Decision",
      children: [null != n.decision && (0, t.jsxs)(t.Fragment, {
        children: [null != n.decision.reason ? (0, t.jsx)(a.gNt, {
          label: "Reason",
          children: (0, t.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: n.decision.reason
          })
        }) : null, (0, t.jsx)(a.gNt, {
          label: "Timestamp",
          layout: "horizontal",
          children: (0, t.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: new Date(n.decision.timestamp).toLocaleString()
          })
        })]
      }), n.timeline.length > 0 && (0, t.jsx)(a.C3N, {
        label: "Timeline",
        children: (0, t.jsx)("pre", {
          children: (0, t.jsx)(a.Text, {
            variant: "code",
            color: "text-secondary",
            children: JSON.stringify(n.timeline, null, 2)
          })
        })
      }), null == n.decision && 0 === n.timeline.length && (0, t.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: "No debug information available for this clip."
      })]
    })
  })
}