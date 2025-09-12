/** Chunk was on 93886 **/
/** chunk id: 903502, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk178635 = require("./178635.js"),
  Chunk115470 = require("./115470.js"),
  Chunk511010 = require("./511010.jsx"),
  Chunk246992 = require("./246992.js"),
  Chunk531578 = require("./531578.js"),
  Chunk584314 = require("./584314.js");
let p = [{
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

function x() {
  let [e, t] = Chunk647438.useState(null), [n, x] = Chunk647438.useState(0), [b, f] = Chunk647438.useState(1e3), [g, v] = Chunk647438.useState(0), j = (0, Chunk442837.e7)([Chunk115470.Z], () => {
    var t;
    return null === module ? null : null != (t = Chunk115470.Z.getFeedbackConfig(Chunk531578.nw[module])) ? exports : Chunk178635.R[Chunk531578.nw[module]]
  }), _ = Object.entries(Chunk531578.nw), y = _.slice(_.length / 2).map(e => {
    let [t] = e;
    return {
      label: t,
      value: t
    }
  }), C = Chunk647438.useMemo(() => null != module && g >= 0 && g <= 100 && require >= 0, [module, g, require]);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk584314.container,
    children: [(0, Chunk951288.jsx)(Chunk481060.hjN, {
      title: "Feedback Survey",
      className: Chunk584314.formElement,
      tag: Chunk481060.RB0.H3,
      children: (0, Chunk951288.jsx)(Chunk481060.q4e, {
        options: y,
        value: module,
        onChange: e => {
          t(e)
        },
        popoutLayerContext: Chunk246992.O$,
        placeholder: "Select Feedback Survey"
      })
    }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: "Override Survey Cooldown",
      className: Chunk584314.formElement,
      tag: Chunk481060.RB0.H3,
      children: [null != j && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk511010.Z, {
          className: Chunk584314.formDividerTitle,
          children: (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/semibold",
            children: "Current cooldown"
          })
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          children: "".concat(j.cooldown / 1e3, " second(s) or")
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          children: "".concat(j.cooldown / 6e4, " minute(s) or")
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          children: "".concat(j.cooldown / 36e5, " hour(s) or")
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          children: "".concat(j.cooldown / 864e5, " day(s)")
        })]
      }), (0, Chunk951288.jsx)(Chunk511010.Z, {
        className: Chunk584314.formDividerTitle,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/semibold",
          children: "Override cooldown"
        })
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk584314.formRow,
        children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
          min: 0,
          value: require.toString(),
          type: "number",
          placeholder: "Duration length",
          onChange: e => x(parseFloat(e))
        }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
          options: p,
          value: b,
          onChange: e => {
            f(e)
          },
          popoutLayerContext: Chunk246992.O$
        })]
      })]
    }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: "Override Survey Chance",
      className: Chunk584314.formElement,
      tag: Chunk481060.RB0.H3,
      children: [null != j && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk511010.Z, {
          className: Chunk584314.formDividerTitle,
          children: (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/semibold",
            children: "Current chance"
          })
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          children: "".concat(100 * j.chance, "%")
        })]
      }), (0, Chunk951288.jsx)(Chunk511010.Z, {
        className: Chunk584314.formDividerTitle,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/semibold",
          children: "Override chance"
        })
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk584314.formRow,
        children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
          min: 0,
          max: 100,
          value: g.toString(),
          type: "number",
          onChange: e => v(parseFloat(e))
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: "%"
        })]
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk584314.formRow,
      children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Update",
        onClick: () => void(null != j && Chunk570140.Z.dispatch({
          type: "FEEDBACK_OVERRIDE_SET",
          feedbackType: j.feedbackType,
          cooldown: require * b,
          chance: g / 100
        })),
        disabled: !C
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Clear Override",
        onClick: () => void(null != j && Chunk570140.Z.dispatch({
          type: "FEEDBACK_OVERRIDE_CLEAR",
          feedbackType: j.feedbackType
        })),
        disabled: !C
      })]
    }), null == module && (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-danger",
      children: "Error: need to select a survey"
    }), !(require >= 0) && (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-danger",
      children: "Error: cooldown needs to be a number greater than 0"
    }), !(g >= 0 && g <= 100) && (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-danger",
      children: "Error: chance needs to be a number between 0 and 100"
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      children: "Clear override resets a feedback survey to its default values"
    })]
  })
}