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
      isDisabled: _,
      isReadOnly: p,
      isRequired: h,
      onIncrement: m,
      onIncrementPage: g,
      onDecrement: E,
      onDecrementPage: b,
      onDecrementToMin: y,
      onIncrementToMax: O
    } = e,
    v = (0, l.q)(c(r.Z), "@react-aria/spinbutton"),
    I = () => clearTimeout(t.current);
  (0, a.useEffect)(() => () => I(), []);
  let T = e => {
      if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !p && !e.nativeEvent.isComposing) switch (e.key) {
        case "PageUp":
          if (g) {
            e.preventDefault(), null == g || g();
            break
          }
        case "ArrowUp":
        case "Up":
          m && (e.preventDefault(), null == m || m());
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
    S = (0, a.useRef)(false),
    A = () => {
      S.current = true
    },
    C = () => {
      S.current = false
    },
    N = "" === u ? v.format("Empty") : (u || `${n}`).replace("-", "−");
  (0, a.useEffect)(() => {
    S.current && ((0, i.gb)("assertive"), (0, i.xQ)(N, "assertive"))
  }, [N]);
  let R = (0, o.i)(e => {
      I(), null == m || m(), t.current = window.setTimeout(() => {
        (true === f || isNaN(f) || true === n || isNaN(n) || n < f) && R(60)
      }, e)
    }),
    P = (0, o.i)(e => {
      I(), null == E || E(), t.current = window.setTimeout(() => {
        (true === d || isNaN(d) || true === n || isNaN(n) || n > d) && P(60)
      }, e)
    }),
    D = e => {
      e.preventDefault()
    },
    {
      addGlobalListener: w,
      removeAllGlobalListeners: L
    } = (0, s.x)();
  return {
    spinButtonProps: {
      role: "spinbutton",
      "aria-valuenow": true === n || isNaN(n) ? true : n,
      "aria-valuetext": N,
      "aria-valuemin": d,
      "aria-valuemax": f,
      "aria-disabled": _ || true,
      "aria-readonly": p || true,
      "aria-required": h || true,
      onKeyDown: T,
      onFocus: A,
      onBlur: C
    },
    incrementButtonProps: {
      onPressStart: () => {
        R(400), w(window, "contextmenu", D)
      },
      onPressEnd: () => {
        I(), L()
      },
      onFocus: A,
      onBlur: C
    },
    decrementButtonProps: {
      onPressStart: () => {
        P(400), w(window, "contextmenu", D)
      },
      onPressEnd: () => {
        I(), L()
      },
      onFocus: A,
      onBlur: C
    }
  }
}