/** Chunk was on web.js **/
/** chunk id: 73733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => u
});
var Chunk956817 = require("./956817.js"),
  Chunk217512 = require("./217512.js"),
  Chunk64700 = require("./64700.js"),
  Chunk959462 = require("./959462.js"),
  Chunk114099 = require("./114099.js"),
  Chunk47276 = require("./47276.js");

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
      isRequired: h,
      onIncrement: m,
      onIncrementPage: g,
      onDecrement: E,
      onDecrementPage: y,
      onDecrementToMin: b,
      onIncrementToMax: O
    } = e,
    v = (0, l.o)(c(r.A), "@react-aria/spinbutton"),
    A = () => clearTimeout(t.current);
  (0, a.useEffect)(() => () => A(), []);
  let I = e => {
      if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !_ && !e.nativeEvent.isComposing) switch (e.key) {
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
          if (y) {
            e.preventDefault(), null == y || y();
            break
          }
        case "ArrowDown":
        case "Down":
          E && (e.preventDefault(), null == E || E());
          break;
        case "Home":
          b && (e.preventDefault(), null == b || b());
          break;
        case "End":
          O && (e.preventDefault(), null == O || O())
      }
    },
    S = (0, a.useRef)(false),
    T = () => {
      S.current = true
    },
    C = () => {
      S.current = false
    },
    N = "" === u ? v.format("Empty") : (u || `${n}`).replace("-", "−");
  (0, a.useEffect)(() => {
    S.current && ((0, i.pA)("assertive"), (0, i.iP)(N, "assertive"))
  }, [N]);
  let R = (0, s.J)(e => {
      A(), null == m || m(), t.current = window.setTimeout(() => {
        (true === f || isNaN(f) || true === n || isNaN(n) || n < f) && R(60)
      }, e)
    }),
    w = (0, s.J)(e => {
      A(), null == E || E(), t.current = window.setTimeout(() => {
        (true === d || isNaN(d) || true === n || isNaN(n) || n > d) && w(60)
      }, e)
    }),
    P = e => {
      e.preventDefault()
    },
    {
      addGlobalListener: D,
      removeAllGlobalListeners: x
    } = (0, o.A)();
  return {
    spinButtonProps: {
      role: "spinbutton",
      "aria-valuenow": true === n || isNaN(n) ? true : n,
      "aria-valuetext": N,
      "aria-valuemin": d,
      "aria-valuemax": f,
      "aria-disabled": p || true,
      "aria-readonly": _ || true,
      "aria-required": h || true,
      onKeyDown: I,
      onFocus: T,
      onBlur: C
    },
    incrementButtonProps: {
      onPressStart: () => {
        R(400), D(window, "contextmenu", P)
      },
      onPressEnd: () => {
        A(), x()
      },
      onFocus: T,
      onBlur: C
    },
    decrementButtonProps: {
      onPressStart: () => {
        w(400), D(window, "contextmenu", P)
      },
      onPressEnd: () => {
        A(), x()
      },
      onFocus: T,
      onBlur: C
    }
  }
}