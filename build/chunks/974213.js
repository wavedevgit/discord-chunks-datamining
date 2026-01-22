/** Chunk was on web.js **/
/** chunk id: 974213, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $Q: () => S,
  Sc: () => I
});
var Chunk257537 = require("./257537.js"),
  Chunk825913 = require("./825913.js"),
  Chunk162376 = require("./162376.js"),
  Chunk461212 = require("./461212.js"),
  Chunk129844 = require("./129844.js"),
  Chunk193523 = require("./193523.js"),
  Chunk376546 = require("./376546.js"),
  Chunk803082 = require("./803082.js"),
  Chunk476311 = require("./476311.js"),
  Chunk360881 = require("./360881.js"),
  Chunk498430 = require("./498430.js"),
  Chunk967158 = require("./967158.js"),
  Chunk126031 = require("./126031.js"),
  Chunk559077 = require("./559077.js"),
  Chunk823807 = require("./823807.js"),
  Chunk290424 = require("./290424.js"),
  Chunk533715 = require("./533715.js"),
  Chunk561514 = require("./561514.js"),
  Chunk64700 = require("./64700.js");
let A = (0, Chunk64700.createContext)(null),
  v = (0, Chunk64700.createContext)(null),
  S = (0, Chunk64700.forwardRef)(function(e, t) {
    var n, r;
    [e, t] = (0, i.JT)(e, t, A);
    let {
      validationBehavior: d
    } = (0, i.CC)(s.c) || {}, f = null != (r = null != (n = e.validationBehavior) ? n : d) ? r : "native", p = (0, m.h)({
      ...e,
      validationBehavior: f
    }), [_, h] = (0, i._E)(!e["aria-label"] && !e["aria-labelledby"]), {
      groupProps: g,
      labelProps: b,
      descriptionProps: y,
      errorMessageProps: S,
      ...I
    } = (0, c.M)({
      ...e,
      label: h,
      validationBehavior: f
    }, p), T = (0, i.Sl)({
      ...e,
      values: {
        isDisabled: p.isDisabled,
        isReadOnly: p.isReadOnly,
        isRequired: e.isRequired || false,
        isInvalid: p.isInvalid,
        state: p
      },
      defaultClassName: "react-aria-CheckboxGroup"
    }), C = (0, E.$)(e, {
      global: true
    });
    return O.createElement("div", {
      ...(0, u.v)(C, T, g),
      ref: t,
      slot: e.slot || true,
      "data-readonly": p.isReadOnly || true,
      "data-required": e.isRequired || true,
      "data-invalid": p.isInvalid || true,
      "data-disabled": e.isDisabled || true
    }, O.createElement(i.Kq, {
      values: [
        [v, p],
        [o.I, {
          ...b,
          ref: _,
          elementType: "span"
        }],
        [l.h, {
          slots: {
            description: y,
            errorMessage: S
          }
        }],
        [a.C, I]
      ]
    }, T.children))
  }),
  I = (0, Chunk64700.forwardRef)(function(e, t) {
    var n, a;
    let {
      inputRef: o = null,
      ...l
    } = e;
    [e, t] = (0, i.JT)(l, t, r.BP);
    let {
      validationBehavior: c
    } = (0, i.CC)(s.c) || {}, m = null != (a = null != (n = e.validationBehavior) ? n : c) ? a : "native", A = (0, O.useContext)(v), S = (0, b.U)((0, O.useMemo)(() => (0, y.P)(o, true !== e.inputRef ? e.inputRef : null), [o, e.inputRef])), {
      labelProps: I,
      inputProps: T,
      isSelected: C,
      isDisabled: N,
      isReadOnly: R,
      isPressed: w,
      isInvalid: P
    } = A ? (0, d.B)({
      ...(0, i.SK)(e),
      value: e.value,
      children: "function" == typeof e.children || e.children
    }, A, S) : (0, f.v)({
      ...(0, i.SK)(e),
      children: "function" == typeof e.children || e.children,
      validationBehavior: m
    }, (0, g.H)(e), S), {
      isFocused: D,
      isFocusVisible: x,
      focusProps: L
    } = (0, p.o)(), j = N || R, {
      hoverProps: M,
      isHovered: k
    } = (0, _.M)({
      ...e,
      isDisabled: j
    }), U = (0, i.Sl)({
      ...e,
      defaultClassName: "react-aria-Checkbox",
      values: {
        isSelected: C,
        isIndeterminate: e.isIndeterminate || false,
        isPressed: w,
        isHovered: k,
        isFocused: D,
        isFocusVisible: x,
        isDisabled: N,
        isReadOnly: R,
        isInvalid: P,
        isRequired: e.isRequired || false
      }
    }), G = (0, E.$)(e, {
      global: true
    });
    return delete G.id, delete G.onClick, O.createElement("label", {
      ...(0, u.v)(G, I, M, U),
      ref: t,
      slot: e.slot || true,
      "data-selected": C || true,
      "data-indeterminate": e.isIndeterminate || true,
      "data-pressed": w || true,
      "data-hovered": k || true,
      "data-focused": D || true,
      "data-focus-visible": x || true,
      "data-disabled": N || true,
      "data-readonly": R || true,
      "data-invalid": P || true,
      "data-required": e.isRequired || true
    }, O.createElement(h.s, {
      elementType: "span"
    }, O.createElement("input", {
      ...(0, u.v)(T, L),
      ref: S
    })), U.children)
  })