/** Chunk was on web.js **/
/** chunk id: 23893, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => p,
  z: () => h
});
var Chunk595707 = require("./595707.js"),
  Chunk582465 = require("./582465.js"),
  Chunk873505 = require("./873505.js"),
  Chunk288783 = require("./288783.js"),
  Chunk984940 = require("./984940.js"),
  Chunk69771 = require("./69771.js"),
  Chunk752689 = require("./752689.js"),
  Chunk158821 = require("./158821.js"),
  Chunk176159 = require("./176159.js"),
  Chunk880016 = require("./880016.js"),
  Chunk473749 = require("./473749.js");
let p = (0, Chunk473749.createContext)({}),
  h = (0, Chunk176159.qW)(function(e, t) {
    [e, t] = (0, r.pE)(e, t, p);
    let n = e,
      {
        isPending: d
      } = n,
      {
        buttonProps: h,
        isPressed: g
      } = (0, o.U)(e, t);
    h = m(h, d);
    let {
      focusProps: E,
      isFocused: b,
      isFocusVisible: y
    } = (0, s.F)(e), {
      hoverProps: O,
      isHovered: v
    } = (0, l.X)({
      ...e,
      isDisabled: e.isDisabled || d
    }), I = {
      isHovered: v,
      isPressed: (n.isPressed || g) && !d,
      isFocused: b,
      isFocusVisible: y,
      isDisabled: e.isDisabled || false,
      isPending: null != d && d
    }, T = (0, r.aX)({
      ...e,
      values: I,
      defaultClassName: "react-aria-Button"
    }), S = (0, c.Me)(h.id), A = (0, c.Me)(), C = h["aria-labelledby"];
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

function m(e, t) {
  if (t) {
    for (let t in e) t.startsWith("on") && !(t.includes("Focus") || t.includes("Blur")) && (e[t] = true);
    e.href = true, e.target = true
  }
  return e
}