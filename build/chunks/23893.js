/** Chunk was on web.js **/
/** chunk id: 23893, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => _,
  z: () => m
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
let _ = (0, Chunk473749.createContext)({}),
  m = (0, Chunk176159.qW)(function(e, t) {
    [e, t] = (0, r.pE)(e, t, _);
    let n = e,
      {
        isPending: d
      } = n,
      {
        buttonProps: m,
        isPressed: g
      } = (0, o.U)(e, t);
    m = h(m, d);
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
    }), S = {
      isHovered: v,
      isPressed: (n.isPressed || g) && !d,
      isFocused: b,
      isFocusVisible: y,
      isDisabled: e.isDisabled || false,
      isPending: null != d && d
    }, I = (0, r.aX)({
      ...e,
      values: S,
      defaultClassName: "react-aria-Button"
    }), T = (0, c.Me)(m.id), C = (0, c.Me)(), A = m["aria-labelledby"];
    d && (A ? A = `${A} ${C}` : m["aria-label"] && (A = `${T} ${C}`));
    let N = (0, p.useRef)(d);
    (0, p.useEffect)(() => {
      let e = {
        "aria-labelledby": A || T
      };
      !N.current && b && d ? (0, a.xQ)(e, "assertive") : N.current && b && !d && (0, a.xQ)(e, "assertive"), N.current = d
    }, [d, b, A, T]);
    let P = (0, f.z)(e, {
      global: true
    });
    return delete P.onClick, p.createElement("button", {
      ...(0, u.d)(P, I, m, E, O),
      type: "submit" === m.type && d ? "button" : m.type,
      id: T,
      ref: t,
      "aria-labelledby": A,
      slot: e.slot || true,
      "aria-disabled": d ? "true" : m["aria-disabled"],
      "data-disabled": e.isDisabled || true,
      "data-pressed": S.isPressed || true,
      "data-hovered": v || true,
      "data-focused": b || true,
      "data-pending": d || true,
      "data-focus-visible": y || true
    }, p.createElement(i.p.Provider, {
      value: {
        id: C
      }
    }, I.children))
  });

function h(e, t) {
  if (t) {
    for (let t in e) t.startsWith("on") && !(t.includes("Focus") || t.includes("Blur")) && (e[t] = true);
    e.href = true, e.target = true
  }
  return e
}