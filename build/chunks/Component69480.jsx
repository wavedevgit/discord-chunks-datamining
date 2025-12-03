/** Chunk was on 90946 **/
/** chunk id: 69480, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => a
}), require("./49124.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js");

function a(e) {
  let {
    clip: t,
    onClose: i,
    transitionState: a
  } = e;
  return (0, l.jsx)(n.Modal, {
    transitionState: a,
    onClose: i,
    title: "Clip Debug",
    size: "md",
    actions: [{
      text: "Close",
      variant: "secondary",
      onClick: i
    }],
    children: (0, l.jsxs)(s.C3N, {
      label: "Decision",
      children: [null != t.decision && (0, l.jsxs)(l.Fragment, {
        children: [null != t.decision.reason ? (0, l.jsx)(s.gNt, {
          label: "Reason",
          children: (0, l.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: t.decision.reason
          })
        }) : null, (0, l.jsx)(s.gNt, {
          label: "Timestamp",
          layout: "horizontal",
          children: (0, l.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: new Date(t.decision.timestamp).toLocaleString()
          })
        })]
      }), t.timeline.length > 0 && (0, l.jsx)(s.C3N, {
        label: "Timeline",
        children: (0, l.jsx)("pre", {
          children: (0, l.jsx)(s.Text, {
            variant: "code",
            color: "text-subtle",
            children: JSON.stringify(t.timeline, null, 2)
          })
        })
      }), null == t.decision && 0 === t.timeline.length && (0, l.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: "No debug information available for this clip."
      })]
    })
  })
}