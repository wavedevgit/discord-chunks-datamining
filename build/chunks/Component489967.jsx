/** Chunk was on 65298 **/
/** chunk id: 489967, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk37962 = require("./37962.js"),
  Chunk881520 = require("./881520.js"),
  Chunk670455 = require("./670455.js"),
  Chunk901647 = require("./901647.js");
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
  let [e, t] = l.useState(null), [n, p] = l.useState(0), [h, x] = l.useState(1e3), [g, f] = l.useState(0), b = (0, r.bG)([c.A], () => {
    var t;
    return null === e ? null : null != (t = c.A.getFeedbackConfig(d.MW[e])) ? t : o.u[d.MW[e]]
  }), v = Object.entries(d.MW), j = v.slice(v.length / 2).map(e => {
    let [t] = e;
    return {
      id: t,
      label: t,
      value: t
    }
  }), _ = l.useMemo(() => null != e && g >= 0 && g <= 100 && n >= 0, [e, g, n]);
  return (0, a.jsx)("div", {
    className: u.kL,
    children: (0, a.jsxs)(i.BJc, {
      gap: 32,
      children: [(0, a.jsx)(i.l6P, {
        label: "Feedback Survey",
        options: j,
        value: e,
        onSelectionChange: t,
        placeholder: "Select Feedback Survey",
        selectionMode: "single",
        fullWidth: true
      }), (0, a.jsxs)(i.nVY, {
        label: "Override Survey Cooldown",
        children: [null != b && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(i.Text, {
            variant: "text-sm/semibold",
            children: "Current cooldown"
          }), (0, a.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: "".concat(b.cooldown / 1e3, " second(s) or")
          }), (0, a.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: "".concat(b.cooldown / 6e4, " minute(s) or")
          }), (0, a.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: "".concat(b.cooldown / 36e5, " hour(s) or")
          }), (0, a.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: "".concat(b.cooldown / 864e5, " day(s)")
          })]
        }), (0, a.jsxs)(i.BJc, {
          direction: "horizontal",
          align: "end",
          children: [(0, a.jsx)(i.ksK, {
            label: "Override cooldown",
            min: 0,
            value: n.toString(),
            type: "number",
            placeholder: "Duration length",
            onChange: e => p(parseFloat(e))
          }), (0, a.jsx)(i.l6P, {
            label: "Override cooldown duration type",
            hideLabel: true,
            options: m,
            value: h,
            onSelectionChange: x,
            selectionMode: "single",
            fullWidth: true
          })]
        })]
      }), (0, a.jsx)(i.cGx, {}), (0, a.jsx)(i.nVY, {
        label: "Override Survey Chance",
        children: (0, a.jsx)(i.ksK, {
          label: "Override chance",
          description: null != b ? "Current chance: ".concat(100 * b.chance, "%") : true,
          helperText: "As a percentage",
          min: 0,
          max: 100,
          value: g.toString(),
          type: "number",
          onChange: e => f(parseFloat(e))
        })
      }), (0, a.jsxs)(i.ButtonGroup, {
        children: [(0, a.jsx)(i.Button, {
          variant: "critical-primary",
          text: "Clear Override",
          onClick: () => void(null != b && s.h.dispatch({
            type: "FEEDBACK_OVERRIDE_CLEAR",
            feedbackType: b.feedbackType
          })),
          disabled: !_
        }), (0, a.jsx)(i.Button, {
          variant: "primary",
          text: "Update",
          onClick: () => void(null != b && s.h.dispatch({
            type: "FEEDBACK_OVERRIDE_SET",
            feedbackType: b.feedbackType,
            cooldown: n * h,
            chance: g / 100
          })),
          disabled: !_
        })]
      }), null == e && (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-critical",
        children: "Error: need to select a survey"
      }), !(n >= 0) && (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-critical",
        children: "Error: cooldown needs to be a number greater than 0"
      }), !(g >= 0 && g <= 100) && (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-critical",
        children: "Error: chance needs to be a number between 0 and 100"
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: "Clear override resets a feedback survey to its default values"
      })]
    })
  })
}