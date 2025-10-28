/** Chunk was on 33622 **/
/** chunk id: 500376, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  G: () => s
});
var Chunk297119 = require("./297119.js"),
  Chunk873505 = require("./873505.js"),
  Chunk647438 = require("./647438.js"),
  Chunk794760 = require("./794760.js"),
  Chunk803872 = require("./803872.js"),
  Chunk970185 = require("./970185.js");

function s(e) {
  var a;
  let t = (0, r.useRef)(true),
    {
      value: s,
      textValue: d,
      minValue: c,
      maxValue: m,
      isDisabled: D,
      isReadOnly: h,
      isRequired: f,
      onIncrement: y,
      onIncrementPage: p,
      onDecrement: g,
      onDecrementPage: v,
      onDecrementToMin: b,
      onIncrementToMax: C
    } = e,
    x = (0, l.q)((a = u.Z) && a.__esModule ? a.default : a, "@react-aria/spinbutton"),
    B = () => clearTimeout(t.current);
  (0, r.useEffect)(() => () => B(), []);
  let E = (0, r.useRef)(false),
    F = () => {
      E.current = true
    },
    w = () => {
      E.current = false
    },
    $ = "" === d ? x.format("Empty") : (d || `${s}`).replace("-", "−");
  (0, r.useEffect)(() => {
    E.current && ((0, n.gb)("assertive"), (0, n.xQ)($, "assertive"))
  }, [$]);
  let R = (0, i.i)(e => {
      B(), null == y || y(), t.current = window.setTimeout(() => {
        (true === m || isNaN(m) || true === s || isNaN(s) || s < m) && R(60)
      }, e)
    }),
    Z = (0, i.i)(e => {
      B(), null == g || g(), t.current = window.setTimeout(() => {
        (true === c || isNaN(c) || true === s || isNaN(s) || s > c) && Z(60)
      }, e)
    }),
    k = e => {
      e.preventDefault()
    },
    {
      addGlobalListener: A,
      removeAllGlobalListeners: P
    } = (0, o.x)();
  return {
    spinButtonProps: {
      role: "spinbutton",
      "aria-valuenow": true === s || isNaN(s) ? true : s,
      "aria-valuetext": $,
      "aria-valuemin": c,
      "aria-valuemax": m,
      "aria-disabled": D || true,
      "aria-readonly": h || true,
      "aria-required": f || true,
      onKeyDown: e => {
        if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !h && !e.nativeEvent.isComposing) switch (e.key) {
          case "PageUp":
            if (p) {
              e.preventDefault(), null == p || p();
              break
            }
          case "ArrowUp":
          case "Up":
            y && (e.preventDefault(), null == y || y());
            break;
          case "PageDown":
            if (v) {
              e.preventDefault(), null == v || v();
              break
            }
          case "ArrowDown":
          case "Down":
            g && (e.preventDefault(), null == g || g());
            break;
          case "Home":
            b && (e.preventDefault(), null == b || b());
            break;
          case "End":
            C && (e.preventDefault(), null == C || C())
        }
      },
      onFocus: F,
      onBlur: w
    },
    incrementButtonProps: {
      onPressStart: () => {
        R(400), A(window, "contextmenu", k)
      },
      onPressEnd: () => {
        B(), P()
      },
      onFocus: F,
      onBlur: w
    },
    decrementButtonProps: {
      onPressStart: () => {
        Z(400), A(window, "contextmenu", k)
      },
      onPressEnd: () => {
        B(), P()
      },
      onFocus: F,
      onBlur: w
    }
  }
}