/** Chunk was on web.js **/
/** chunk id: 494569, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => u
});
var Chunk344201 = require("./344201.js"),
  Chunk873505 = require("./873505.js"),
  Chunk473749 = require("./473749.js"),
  Chunk484948 = require("./484948.js"),
  Chunk920154 = require("./920154.js"),
  Chunk218769 = require("./218769.js");

function c(e) {
  return e && e.__esModule ? e.default : e
}

function u(e) {
  let t = (0, a.useRef)(true),
    {
      value: n,
      textValue: u,
      minValue: d,
      maxValue: f,
      isDisabled: p,
      isReadOnly: _,
      isRequired: m,
      onIncrement: h,
      onIncrementPage: g,
      onDecrement: E,
      onDecrementPage: b,
      onDecrementToMin: y,
      onIncrementToMax: O
    } = e,
    v = (0, l.q)(c(r.Z), "@react-aria/spinbutton"),
    S = () => clearTimeout(t.current);
  (0, a.useEffect)(() => () => S(), []);
  let I = e => {
      if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !_ && !e.nativeEvent.isComposing) switch (e.key) {
        case "PageUp":
          if (g) {
            e.preventDefault(), null == g || g();
            break
          }
        case "ArrowUp":
        case "Up":
          h && (e.preventDefault(), null == h || h());
          break;
        case "PageDown":
          if (b) {
            e.preventDefault(), null == b || b();
            break
          }
        case "ArrowDown":
        case "Down":
          E && (e.preventDefault(), null == E || E());
          break;
        case "Home":
          y && (e.preventDefault(), null == y || y());
          break;
        case "End":
          O && (e.preventDefault(), null == O || O())
      }
    },
    T = (0, a.useRef)(false),
    C = () => {
      T.current = true
    },
    A = () => {
      T.current = false
    },
    N = "" === u ? v.format("Empty") : (u || `${n}`).replace("-", "−");
  (0, a.useEffect)(() => {
    T.current && ((0, i.gb)("assertive"), (0, i.xQ)(N, "assertive"))
  }, [N]);
  let P = (0, o.i)(e => {
      S(), null == h || h(), t.current = window.setTimeout(() => {
        (true === f || isNaN(f) || true === n || isNaN(n) || n < f) && P(60)
      }, e)
    }),
    R = (0, o.i)(e => {
      S(), null == E || E(), t.current = window.setTimeout(() => {
        (true === d || isNaN(d) || true === n || isNaN(n) || n > d) && R(60)
      }, e)
    }),
    D = e => {
      e.preventDefault()
    },
    {
      addGlobalListener: w,
      removeAllGlobalListeners: x
    } = (0, s.x)();
  return {
    spinButtonProps: {
      role: "spinbutton",
      "aria-valuenow": true === n || isNaN(n) ? true : n,
      "aria-valuetext": N,
      "aria-valuemin": d,
      "aria-valuemax": f,
      "aria-disabled": p || true,
      "aria-readonly": _ || true,
      "aria-required": m || true,
      onKeyDown: I,
      onFocus: C,
      onBlur: A
    },
    incrementButtonProps: {
      onPressStart: () => {
        P(400), w(window, "contextmenu", D)
      },
      onPressEnd: () => {
        S(), x()
      },
      onFocus: C,
      onBlur: A
    },
    decrementButtonProps: {
      onPressStart: () => {
        R(400), w(window, "contextmenu", D)
      },
      onPressEnd: () => {
        S(), x()
      },
      onFocus: C,
      onBlur: A
    }
  }
}