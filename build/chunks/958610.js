/** Chunk was on web.js **/
/** chunk id: 958610, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => h
});
var Chunk477831 = require("./477831.js"),
  Chunk469811 = require("./469811.js"),
  Chunk769175 = require("./769175.js"),
  Chunk1334 = require("./1334.js"),
  Chunk586235 = require("./586235.js"),
  Chunk500282 = require("./500282.js"),
  Chunk158573 = require("./158573.js"),
  Chunk981902 = require("./981902.js"),
  Chunk436773 = require("./436773.js"),
  Chunk647438 = require("./647438.js"),
  Chunk922462 = require("./922462.js");
let p = (0, Chunk647438.createContext)(null),
  h = (0, Chunk647438.forwardRef)(function(e, t) {
    let {
      inputRef: n = null,
      ...h
    } = e;
    [e, t] = (0, r.pE)(h, t, p);
    let m = (0, c.B)((0, u.l)(n, true !== e.inputRef ? e.inputRef : null)),
      g = (0, _.l)(e),
      {
        labelProps: E,
        inputProps: b,
        isSelected: y,
        isDisabled: O,
        isReadOnly: v,
        isPressed: I
      } = (0, i.h)({
        ...(0, r.vl)(e),
        children: "function" == typeof e.children || e.children
      }, g, m),
      {
        isFocused: T,
        isFocusVisible: S,
        focusProps: A
      } = (0, a.F)(),
      C = e.isDisabled || e.isReadOnly,
      {
        hoverProps: N,
        isHovered: R
      } = (0, o.X)({
        ...e,
        isDisabled: C
      }),
      P = (0, r.aX)({
        ...e,
        defaultClassName: "react-aria-Switch",
        values: {
          isSelected: y,
          isPressed: I,
          isHovered: R,
          isFocused: T,
          isFocusVisible: S,
          isDisabled: O,
          isReadOnly: v,
          state: g
        }
      }),
      w = (0, d.z)(e, {
        global: true
      });
    return delete w.id, delete w.onClick, f.createElement("label", {
      ...(0, s.d)(w, E, N, P),
      ref: t,
      slot: e.slot || true,
      "data-selected": y || true,
      "data-pressed": I || true,
      "data-hovered": R || true,
      "data-focused": T || true,
      "data-focus-visible": S || true,
      "data-disabled": O || true,
      "data-readonly": v || true
    }, f.createElement(l.T, {
      elementType: "span"
    }, f.createElement("input", {
      ...(0, s.d)(b, A),
      ref: m
    })), P.children)
  })