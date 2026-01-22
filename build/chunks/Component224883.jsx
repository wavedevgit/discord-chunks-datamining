/** Chunk was on 10000 **/
/** chunk id: 224883, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => a
}), require("./457529.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js");

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
    children: (0, l.jsxs)(s.nVY, {
      label: "Decision",
      children: [null != t.decision && (0, l.jsxs)(l.Fragment, {
        children: [null != t.decision.reason ? (0, l.jsx)(s.D0$, {
          label: "Reason",
          children: (0, l.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: t.decision.reason
          })
        }) : null, (0, l.jsx)(s.D0$, {
          label: "Timestamp",
          layout: "horizontal",
          children: (0, l.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: new Date(t.decision.timestamp).toLocaleString()
          })
        })]
      }), t.timeline.length > 0 && (0, l.jsx)(s.nVY, {
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