/** Chunk was on 945 **/
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
  let [e, t] = Chunk473749.useState(null), [n, f] = Chunk473749.useState(0), [x, b] = Chunk473749.useState(1e3), [g, v] = Chunk473749.useState(0), j = (0, Chunk442837.e7)([Chunk115470.Z], () => {
    var t;
    return null === module ? null : null != (t = Chunk115470.Z.getFeedbackConfig(Chunk531578.nw[module])) ? exports : Chunk178635.R[Chunk531578.nw[module]]
  }), y = Object.entries(Chunk531578.nw), C = y.slice(y.length / 2).map(e => {
    let [t] = e;
    return {
      label: t,
      value: t
    }
  }), _ = Chunk473749.useMemo(() => null != module && g >= 0 && g <= 100 && require >= 0, [module, g, require]);
  return (0, Chunk54381.jsx)("div", {
    className: Chunk746234.container,
    children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
      gap: 32,
      children: [(0, Chunk54381.jsx)(Chunk199849.y6, {
        label: "Feedback Survey",
        options: C,
        value: module,
        onChange: e => {
          t(e)
        },
        popoutLayerContext: Chunk246992.O$,
        placeholder: "Select Feedback Survey"
      }), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
        label: "Override Survey Cooldown",
        children: [null != j && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/semibold",
            children: "Current cooldown"
          }), (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            children: "".concat(j.cooldown / 1e3, " second(s) or")
          }), (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            children: "".concat(j.cooldown / 6e4, " minute(s) or")
          }), (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            children: "".concat(j.cooldown / 36e5, " hour(s) or")
          }), (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            children: "".concat(j.cooldown / 864e5, " day(s)")
          })]
        }), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
          direction: "horizontal",
          align: "end",
          children: [(0, Chunk54381.jsx)(Chunk481060.oil, {
            label: "Override cooldown",
            min: 0,
            value: require.toString(),
            type: "number",
            placeholder: "Duration length",
            onChange: e => f(parseFloat(e))
          }), (0, Chunk54381.jsx)(Chunk199849.y6, {
            options: h,
            value: x,
            onChange: e => {
              b(e)
            },
            popoutLayerContext: Chunk246992.O$
          })]
        })]
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk481060.C3N, {
        label: "Override Survey Chance",
        children: (0, Chunk54381.jsx)(Chunk481060.oil, {
          label: "Override chance",
          description: null != j ? "Current chance: ".concat(100 * j.chance, "%") : true,
          helperText: "As a percentage",
          min: 0,
          max: 100,
          value: g.toString(),
          type: "number",
          onChange: e => v(parseFloat(e))
        })
      }), (0, Chunk54381.jsxs)(Chunk481060.ButtonGroup, {
        children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "critical-primary",
          text: "Clear Override",
          onClick: () => void(null != j && Chunk570140.Z.dispatch({
            type: "FEEDBACK_OVERRIDE_CLEAR",
            feedbackType: j.feedbackType
          })),
          disabled: !_
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: "Update",
          onClick: () => void(null != j && Chunk570140.Z.dispatch({
            type: "FEEDBACK_OVERRIDE_SET",
            feedbackType: j.feedbackType,
            cooldown: require * x,
            chance: g / 100
          })),
          disabled: !_
        })]
      }), null == module && (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-critical",
        children: "Error: need to select a survey"
      }), !(require >= 0) && (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-critical",
        children: "Error: cooldown needs to be a number greater than 0"
      }), !(g >= 0 && g <= 100) && (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-feedback-critical",
        children: "Error: chance needs to be a number between 0 and 100"
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        children: "Clear override resets a feedback survey to its default values"
      })]
    })
  })
}