/** Chunk was on web.js **/
/** chunk id: 650682, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => h,
  k: () => _
});
var Chunk825913 = require("./825913.js"),
  Chunk646066 = require("./646066.js"),
  Chunk217512 = require("./217512.js"),
  Chunk284054 = require("./284054.js"),
  Chunk498430 = require("./498430.js"),
  Chunk967158 = require("./967158.js"),
  Chunk723906 = require("./723906.js"),
  Chunk803082 = require("./803082.js"),
  Chunk564004 = require("./564004.js"),
  Chunk290424 = require("./290424.js"),
  Chunk64700 = require("./64700.js");
let _ = (0, Chunk64700.createContext)({}),
  h = (0, Chunk564004.U7)(function(e, t) {
    [e, t] = (0, r.JT)(e, t, _);
    let n = e,
      {
        isPending: d
      } = n,
      {
        buttonProps: h,
        isPressed: g
      } = (0, s.s)(e, t);
    h = m(h, d);
    let {
      focusProps: E,
      isFocused: y,
      isFocusVisible: b
    } = (0, o.o)(e), {
      hoverProps: O,
      isHovered: v
    } = (0, l.M)({
      ...e,
      isDisabled: e.isDisabled || d
    }), A = {
      isHovered: v,
      isPressed: (n.isPressed || g) && !d,
      isFocused: y,
      isFocusVisible: b,
      isDisabled: e.isDisabled || false,
      isPending: null != d && d
    }, I = (0, r.Sl)({
      ...e,
      values: A,
      defaultClassName: "react-aria-Button"
    }), S = (0, c.Bi)(h.id), T = (0, c.Bi)(), C = h["aria-labelledby"];
    d && (C ? C = `${C} ${T}` : h["aria-label"] && (C = `${S} ${T}`));
    let N = (0, p.useRef)(d);
    (0, p.useEffect)(() => {
      let e = {
        "aria-labelledby": C || S
      };
      !N.current && y && d ? (0, a.iP)(e, "assertive") : N.current && y && !d && (0, a.iP)(e, "assertive"), N.current = d
    }, [d, y, C, S]);
    let w = (0, f.$)(e, {
      global: true
    });
    return delete w.onClick, p.createElement("button", {
      ...(0, u.v)(w, I, h, E, O),
      type: "submit" === h.type && d ? "button" : h.type,
      id: S,
      ref: t,
      "aria-labelledby": C,
      slot: e.slot || true,
      "aria-disabled": d ? "true" : h["aria-disabled"],
      "data-disabled": e.isDisabled || true,
      "data-pressed": A.isPressed || true,
      "data-hovered": v || true,
      "data-focused": y || true,
      "data-pending": d || true,
      "data-focus-visible": b || true
    }, p.createElement(i.K.Provider, {
      value: {
        id: T
      }
    }, I.children))
  });

function m(e, t) {
  if (t) {
    for (let t in e) t.startsWith("on") && !(t.includes("Focus") || t.includes("Blur")) && (e[t] = true);
    e.href = true, e.target = true
  }
  return e
}