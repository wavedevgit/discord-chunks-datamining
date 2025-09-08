/** Chunk was on web.js **/
/** chunk id: 42650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XZ: () => E
});
var Chunk532033 = require("./532033.js"),
  Chunk477831 = require("./477831.js"),
  Chunk22811 = require("./22811.js"),
  Chunk604183 = require("./604183.js"),
  Chunk507378 = require("./507378.js"),
  Chunk127096 = require("./127096.js"),
  Chunk553357 = require("./553357.js"),
  Chunk506523 = require("./506523.js"),
  Chunk788555 = require("./788555.js"),
  Chunk133209 = require("./133209.js"),
  Chunk853400 = require("./853400.js"),
  Chunk62236 = require("./62236.js"),
  Chunk753125 = require("./753125.js"),
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
    } = (0, i.jn)(a.q) || {}, v = null != (E = null != (n = e.validationBehavior) ? n : O) ? E : "native", I = (0, m.useContext)(g), T = (0, _.B)((0, m.useMemo)(() => (0, p.l)(b, true !== e.inputRef ? e.inputRef : null), [b, e.inputRef])), {
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
    }), G = (0, h.z)(e, {
      global: true
    });
    return delete G.id, delete G.onClick, m.createElement("label", {
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