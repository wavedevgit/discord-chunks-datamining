/** Chunk was on 22979 **/
/** chunk id: 903502, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk178635 = require("./178635.js"),
  Chunk115470 = require("./115470.js"),
  Chunk531578 = require("./531578.js"),
  Chunk746234 = require("./746234.js");
let m = [{
  id: "seconds",
  label: "second(s)",
  value: 1e3
}, {
  id: "minutes",
  label: "minute(s)",
  value: 6e4
}, {
  id: "hours",
  label: "hour(s)",
  value: 36e5
}, {
  id: "days",
  label: "day(s)",
  value: 864e5
}];

function p() {
  let [e, t] = r.useState(null), [n, p] = r.useState(0), [h, f] = r.useState(1e3), [b, x] = r.useState(0), g = (0, i.e7)([c.Z], () => {
    var t;
    return null === e ? null : null != (t = c.Z.getFeedbackConfig(d.nw[e])) ? t : o.R[d.nw[e]]
  }), v = Object.entries(d.nw), j = v.slice(v.length / 2).map(e => {
    let [t] = e;
    return {
      id: t,
      label: t,
      value: t
    }
  }), y = r.useMemo(() => null != e && b >= 0 && b <= 100 && n >= 0, [e, b, n]);
  return (0, a.jsx)("div", {
    className: u.container,
    children: (0, a.jsxs)(l.Kqy, {
      gap: 32,
      children: [(0, a.jsx)(l.PhF, {
        label: "Feedback Survey",
        options: j,
        value: e,
        onSelectionChange: t,
        placeholder: "Select Feedback Survey",
        selectionMode: "single",
        fullWidth: true
      }), (0, a.jsxs)(l.C3N, {
        label: "Override Survey Cooldown",
        children: [null != g && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(l.Text, {
            variant: "text-sm/semibold",
            children: "Current cooldown"
          }), (0, a.jsx)(l.Text, {
            variant: "text-sm/normal",
            children: "".concat(g.cooldown / 1e3, " second(s) or")
          }), (0, a.jsx)(l.Text, {
            variant: "text-sm/normal",
            children: "".concat(g.cooldown / 6e4, " minute(s) or")
          }), (0, a.jsx)(l.Text, {
            variant: "text-sm/normal",
            children: "".concat(g.cooldown / 36e5, " hour(s) or")
          }), (0, a.jsx)(l.Text, {
            variant: "text-sm/normal",
            children: "".concat(g.cooldown / 864e5, " day(s)")
          })]
        }), (0, a.jsxs)(l.Kqy, {
          direction: "horizontal",
          align: "end",
          children: [(0, a.jsx)(l.oil, {
            label: "Override cooldown",
            min: 0,
            value: n.toString(),
            type: "number",
            placeholder: "Duration length",
            onChange: e => p(parseFloat(e))
          }), (0, a.jsx)(l.PhF, {
            label: "Override cooldown duration type",
            hideLabel: true,
            options: m,
            value: h,
            onSelectionChange: f,
            selectionMode: "single",
            fullWidth: true
          })]
        })]
      }), (0, a.jsx)(l.izJ, {}), (0, a.jsx)(l.C3N, {
        label: "Override Survey Chance",
        children: (0, a.jsx)(l.oil, {
          label: "Override chance",
          description: null != g ? "Current chance: ".concat(100 * g.chance, "%") : true,
          helperText: "As a percentage",
          min: 0,
          max: 100,
          value: b.toString(),
          type: "number",
          onChange: e => x(parseFloat(e))
        })
      }), (0, a.jsxs)(l.ButtonGroup, {
        children: [(0, a.jsx)(l.Button, {
          variant: "critical-primary",
          text: "Clear Override",
          onClick: () => void(null != g && s.Z.dispatch({
            type: "FEEDBACK_OVERRIDE_CLEAR",
            feedbackType: g.feedbackType
          })),
          disabled: !y
        }), (0, a.jsx)(l.Button, {
          variant: "primary",
          text: "Update",
          onClick: () => void(null != g && s.Z.dispatch({
            type: "FEEDBACK_OVERRIDE_SET",
            feedbackType: g.feedbackType,
            cooldown: n * h,
            chance: b / 100
          })),
          disabled: !y
        })]
      }), null == e && (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-critical",
        children: "Error: need to select a survey"
      }), !(n >= 0) && (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-critical",
        children: "Error: cooldown needs to be a number greater than 0"
      }), !(b >= 0 && b <= 100) && (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-critical",
        children: "Error: chance needs to be a number between 0 and 100"
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: "Clear override resets a feedback survey to its default values"
      })]
    })
  })
}