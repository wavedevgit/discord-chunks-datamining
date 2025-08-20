/** Chunk was on web.js **/
/** chunk id: 267603, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => p,
  z: () => h
});
var Chunk477831 = require("./477831.js"),
  Chunk920081 = require("./920081.js"),
  Chunk873505 = require("./873505.js"),
  Chunk168913 = require("./168913.js"),
  Chunk769175 = require("./769175.js"),
  Chunk1334 = require("./1334.js"),
  Chunk39807 = require("./39807.js"),
  Chunk933492 = require("./933492.js"),
  Chunk52759 = require("./52759.js"),
  Chunk436773 = require("./436773.js"),
  Chunk647438 = require("./647438.js");
let p = (0, Chunk647438.createContext)({}),
  h = (0, Chunk52759.qW)(function(e, t) {
    [e, t] = (0, r.pE)(e, t, p);
    let n = e = m(e),
      {
        isPending: d
      } = n,
      {
        buttonProps: h,
        isPressed: g
      } = (0, o.U)(e, t),
      {
        focusProps: E,
        isFocused: b,
        isFocusVisible: y
      } = (0, s.F)(e),
      {
        hoverProps: O,
        isHovered: v
      } = (0, l.X)({
        ...e,
        isDisabled: e.isDisabled || d
      }),
      I = {
        isHovered: v,
        isPressed: (n.isPressed || g) && !d,
        isFocused: b,
        isFocusVisible: y,
        isDisabled: e.isDisabled || false,
        isPending: null != d && d
      },
      T = (0, r.aX)({
        ...e,
        values: I,
        defaultClassName: "react-aria-Button"
      }),
      S = (0, c.Me)(h.id),
      A = (0, c.Me)(),
      C = h["aria-labelledby"];
    d && (C ? C = `${C} ${A}` : h["aria-label"] && (C = `${S} ${A}`));
    let N = (0, _.useRef)(d);
    (0, _.useEffect)(() => {
      let e = {
        "aria-labelledby": C || S
      };
      !N.current && b && d ? (0, a.xQ)(e, "assertive") : N.current && b && !d && (0, a.xQ)(e, "assertive"), N.current = d
    }, [d, b, C, S]);
    let R = (0, f.z)(e, {
      global: true
    });
    return delete R.onClick, _.createElement("button", {
      ...(0, u.d)(R, T, h, E, O),
      type: "submit" === h.type && d ? "button" : h.type,
      id: S,
      ref: t,
      "aria-labelledby": C,
      slot: e.slot || true,
      "aria-disabled": d ? "true" : h["aria-disabled"],
      "data-disabled": e.isDisabled || true,
      "data-pressed": I.isPressed || true,
      "data-hovered": v || true,
      "data-focused": b || true,
      "data-pending": d || true,
      "data-focus-visible": y || true
    }, _.createElement(i.p.Provider, {
      value: {
        id: A
      }
    }, T.children))
  });

function m(e) {
  return e.isPending && (e.onPress = true, e.onPressStart = true, e.onPressEnd = true, e.onPressChange = true, e.onPressUp = true, e.onKeyDown = true, e.onKeyUp = true, e.onClick = true, e.href = true), e
}