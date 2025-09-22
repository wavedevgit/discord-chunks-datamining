/** Chunk was on web.js **/
/** chunk id: 484437, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => h,
  z: () => m
});
var Chunk681897 = require("./681897.js"),
  Chunk108025 = require("./108025.js"),
  Chunk873505 = require("./873505.js"),
  Chunk660187 = require("./660187.js"),
  Chunk264195 = require("./264195.js"),
  Chunk731602 = require("./731602.js"),
  Chunk795074 = require("./795074.js"),
  Chunk506364 = require("./506364.js"),
  Chunk677137 = require("./677137.js"),
  Chunk436242 = require("./436242.js"),
  Chunk647438 = require("./647438.js");
let p = new Set(["form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "name", "value"]),
  h = (0, Chunk647438.createContext)({}),
  m = (0, Chunk677137.qW)(function(e, t) {
    [e, t] = (0, r.pE)(e, t, h);
    let n = e = g(e),
      {
        isPending: d
      } = n,
      {
        buttonProps: m,
        isPressed: E
      } = (0, o.U)(e, t),
      {
        focusProps: b,
        isFocused: y,
        isFocusVisible: O
      } = (0, s.F)(e),
      {
        hoverProps: v,
        isHovered: I
      } = (0, l.X)({
        ...e,
        isDisabled: e.isDisabled || d
      }),
      T = {
        isHovered: I,
        isPressed: (n.isPressed || E) && !d,
        isFocused: y,
        isFocusVisible: O,
        isDisabled: e.isDisabled || false,
        isPending: null != d && d
      },
      S = (0, r.aX)({
        ...e,
        values: T,
        defaultClassName: "react-aria-Button"
      }),
      A = (0, c.Me)(m.id),
      C = (0, c.Me)(),
      N = m["aria-labelledby"];
    d && (N ? N = `${N} ${C}` : m["aria-label"] && (N = `${A} ${C}`));
    let R = (0, _.useRef)(d);
    return (0, _.useEffect)(() => {
      let e = {
        "aria-labelledby": N || A
      };
      !R.current && y && d ? (0, a.xQ)(e, "assertive") : R.current && y && !d && (0, a.xQ)(e, "assertive"), R.current = d
    }, [d, y, N, A]), _.createElement("button", {
      ...(0, f.z)(e, {
        propNames: p
      }),
      ...(0, u.d)(m, b, v),
      ...S,
      type: "submit" === m.type && d ? "button" : m.type,
      id: A,
      ref: t,
      "aria-labelledby": N,
      slot: e.slot || true,
      "aria-disabled": d ? "true" : m["aria-disabled"],
      "data-disabled": e.isDisabled || true,
      "data-pressed": T.isPressed || true,
      "data-hovered": I || true,
      "data-focused": y || true,
      "data-pending": d || true,
      "data-focus-visible": O || true
    }, _.createElement(i.p.Provider, {
      value: {
        id: C
      }
    }, S.children))
  });

function g(e) {
  return e.isPending && (e.onPress = true, e.onPressStart = true, e.onPressEnd = true, e.onPressChange = true, e.onPressUp = true, e.onKeyDown = true, e.onKeyUp = true, e.onClick = true, e.href = true), e
}