/** Chunk was on web.js **/
/** chunk id: 651609, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XZ: () => E
});
var Chunk492976 = require("./492976.js"),
  Chunk681897 = require("./681897.js"),
  Chunk89206 = require("./89206.js"),
  Chunk369908 = require("./369908.js"),
  Chunk75285 = require("./75285.js"),
  Chunk264195 = require("./264195.js"),
  Chunk731602 = require("./731602.js"),
  Chunk506364 = require("./506364.js"),
  Chunk871230 = require("./871230.js"),
  Chunk289395 = require("./289395.js"),
  Chunk422305 = require("./422305.js"),
  Chunk554997 = require("./554997.js"),
  Chunk436242 = require("./436242.js"),
  Chunk647438 = require("./647438.js");
let g = (0, Chunk647438.createContext)(null),
  E = (0, Chunk647438.forwardRef)(function(e, t) {
    var n, E;
    let {
      inputRef: b = null,
      ...y
    } = e;
    [e, t] = (0, i.pE)(y, t, r.cP);
    let {
      validationBehavior: O
    } = (0, i.jn)(a.q) || {}, v = null != (E = null != (n = e.validationBehavior) ? n : O) ? E : "native", I = (0, m.useContext)(g), T = (0, _.B)((0, p.l)(b, true !== e.inputRef ? e.inputRef : null)), {
      labelProps: S,
      inputProps: A,
      isSelected: C,
      isDisabled: N,
      isReadOnly: R,
      isPressed: P,
      isInvalid: w
    } = I ? (0, o.a)({
      ...(0, i.vl)(e),
      value: e.value,
      children: "function" == typeof e.children || e.children
    }, I, T) : (0, s.O)({
      ...(0, i.vl)(e),
      children: "function" == typeof e.children || e.children,
      validationBehavior: v
    }, (0, f.l)(e), T), {
      isFocused: D,
      isFocusVisible: x,
      focusProps: L
    } = (0, l.F)(), j = N || R, {
      hoverProps: M,
      isHovered: k
    } = (0, c.X)({
      ...e,
      isDisabled: j
    }), U = (0, i.aX)({
      ...e,
      defaultClassName: "react-aria-Checkbox",
      values: {
        isSelected: C,
        isIndeterminate: e.isIndeterminate || false,
        isPressed: P,
        isHovered: k,
        isFocused: D,
        isFocusVisible: x,
        isDisabled: N,
        isReadOnly: R,
        isInvalid: w,
        isRequired: e.isRequired || false
      }
    }), G = (0, h.z)(e);
    return delete G.id, m.createElement("label", {
      ...(0, u.d)(G, S, M, U),
      ref: t,
      slot: e.slot || true,
      "data-selected": C || true,
      "data-indeterminate": e.isIndeterminate || true,
      "data-pressed": P || true,
      "data-hovered": k || true,
      "data-focused": D || true,
      "data-focus-visible": x || true,
      "data-disabled": N || true,
      "data-readonly": R || true,
      "data-invalid": w || true,
      "data-required": e.isRequired || true
    }, m.createElement(d.T, {
      elementType: "span"
    }, m.createElement("input", {
      ...(0, u.d)(A, L),
      ref: T
    })), U.children)
  })