/** Chunk was on 84249 **/
/** chunk id: 903502, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk178635 = require("./178635.js"),
  Chunk115470 = require("./115470.js"),
  Chunk246992 = require("./246992.js"),
  Chunk531578 = require("./531578.js"),
  Chunk746234 = require("./746234.js");
let h = [{
  label: "second(s)",
  value: 1e3
}, {
  label: "minute(s)",
  value: 6e4
}, {
  label: "hour(s)",
  value: 36e5
}, {
  label: "day(s)",
  value: 864e5
}];

function f() {
  let [e, t] = r.useState(null), [n, f] = r.useState(0), [x, b] = r.useState(1e3), [g, v] = r.useState(0), j = (0, i.e7)([d.Z], () => {
    var t;
    return null === e ? null : null != (t = d.Z.getFeedbackConfig(m.nw[e])) ? t : c.R[m.nw[e]]
  }), y = Object.entries(m.nw), C = y.slice(y.length / 2).map(e => {
    let [t] = e;
    return {
      label: t,
      value: t
    }
  }), _ = r.useMemo(() => null != e && g >= 0 && g <= 100 && n >= 0, [e, g, n]);
  return (0, a.jsx)("div", {
    className: p.container,
    children: (0, a.jsxs)(s.Kqy, {
      gap: 32,
      children: [(0, a.jsx)(l.y6, {
        label: "Feedback Survey",
        options: C,
        value: e,
        onChange: e => {
          t(e)
        },
        popoutLayerContext: u.O$,
        placeholder: "Select Feedback Survey"
      }), (0, a.jsxs)(s.C3N, {
        label: "Override Survey Cooldown",
        children: [null != j && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(s.Text, {
            variant: "text-sm/semibold",
            children: "Current cooldown"
          }), (0, a.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: "".concat(j.cooldown / 1e3, " second(s) or")
          }), (0, a.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: "".concat(j.cooldown / 6e4, " minute(s) or")
          }), (0, a.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: "".concat(j.cooldown / 36e5, " hour(s) or")
          }), (0, a.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: "".concat(j.cooldown / 864e5, " day(s)")
          })]
        }), (0, a.jsxs)(s.Kqy, {
          direction: "horizontal",
          align: "end",
          children: [(0, a.jsx)(s.oil, {
            label: "Override cooldown",
            min: 0,
            value: n.toString(),
            type: "number",
            placeholder: "Duration length",
            onChange: e => f(parseFloat(e))
          }), (0, a.jsx)(l.y6, {
            options: h,
            value: x,
            onChange: e => {
              b(e)
            },
            popoutLayerContext: u.O$
          })]
        })]
      }), (0, a.jsx)(s.izJ, {}), (0, a.jsx)(s.C3N, {
        label: "Override Survey Chance",
        children: (0, a.jsx)(s.oil, {
          label: "Override chance",
          description: null != j ? "Current chance: ".concat(100 * j.chance, "%") : true,
          helperText: "As a percentage",
          min: 0,
          max: 100,
          value: g.toString(),
          type: "number",
          onChange: e => v(parseFloat(e))
        })
      }), (0, a.jsxs)(s.ButtonGroup, {
        children: [(0, a.jsx)(s.Button, {
          variant: "critical-primary",
          text: "Clear Override",
          onClick: () => void(null != j && o.Z.dispatch({
            type: "FEEDBACK_OVERRIDE_CLEAR",
            feedbackType: j.feedbackType
          })),
          disabled: !_
        }), (0, a.jsx)(s.Button, {
          variant: "primary",
          text: "Update",
          onClick: () => void(null != j && o.Z.dispatch({
            type: "FEEDBACK_OVERRIDE_SET",
            feedbackType: j.feedbackType,
            cooldown: n * x,
            chance: g / 100
          })),
          disabled: !_
        })]
      }), null == e && (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-critical",
        children: "Error: need to select a survey"
      }), !(n >= 0) && (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-critical",
        children: "Error: cooldown needs to be a number greater than 0"
      }), !(g >= 0 && g <= 100) && (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-critical",
        children: "Error: chance needs to be a number between 0 and 100"
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: "Clear override resets a feedback survey to its default values"
      })]
    })
  })
}