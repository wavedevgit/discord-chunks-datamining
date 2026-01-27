/** Chunk was on web.js **/
/** chunk id: 974213, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $Q: () => I,
  Sc: () => S
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
let v = (0, Chunk64700.createContext)(null),
  A = (0, Chunk64700.createContext)(null),
  I = (0, Chunk64700.forwardRef)(function(e, t) {
    var n, r;
    [e, t] = (0, i.JT)(e, t, v);
    let {
      validationBehavior: d
    } = (0, i.CC)(o.c) || {}, f = null != (r = null != (n = e.validationBehavior) ? n : d) ? r : "native", p = (0, m.h)({
      ...e,
      validationBehavior: f
    }), [_, h] = (0, i._E)(!e["aria-label"] && !e["aria-labelledby"]), {
      groupProps: g,
      labelProps: y,
      descriptionProps: b,
      errorMessageProps: I,
      ...S
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
        [A, p],
        [s.I, {
          ...y,
          ref: _,
          elementType: "span"
        }],
        [l.h, {
          slots: {
            description: b,
            errorMessage: I
          }
        }],
        [a.C, S]
      ]
    }, T.children))
  }),
  S = (0, Chunk64700.forwardRef)(function(e, t) {
    var n, a;
    let {
      inputRef: s = null,
      ...l
    } = e;
    [e, t] = (0, i.JT)(l, t, r.BP);
    let {
      validationBehavior: c
    } = (0, i.CC)(o.c) || {}, m = null != (a = null != (n = e.validationBehavior) ? n : c) ? a : "native", v = (0, O.useContext)(A), I = (0, y.U)((0, O.useMemo)(() => (0, b.P)(s, true !== e.inputRef ? e.inputRef : null), [s, e.inputRef])), {
      labelProps: S,
      inputProps: T,
      isSelected: C,
      isDisabled: N,
      isReadOnly: w,
      isPressed: R,
      isInvalid: P
    } = v ? (0, d.B)({
      ...(0, i.SK)(e),
      value: e.value,
      children: "function" == typeof e.children || e.children
    }, v, I) : (0, f.v)({
      ...(0, i.SK)(e),
      children: "function" == typeof e.children || e.children,
      validationBehavior: m
    }, (0, g.H)(e), I), {
      isFocused: D,
      isFocusVisible: L,
      focusProps: x
    } = (0, p.o)(), M = N || w, {
      hoverProps: j,
      isHovered: k
    } = (0, _.M)({
      ...e,
      isDisabled: M
    }), U = (0, i.Sl)({
      ...e,
      defaultClassName: "react-aria-Checkbox",
      values: {
        isSelected: C,
        isIndeterminate: e.isIndeterminate || false,
        isPressed: R,
        isHovered: k,
        isFocused: D,
        isFocusVisible: L,
        isDisabled: N,
        isReadOnly: w,
        isInvalid: P,
        isRequired: e.isRequired || false
      }
    }), G = (0, E.$)(e, {
      global: true
    });
    return delete G.id, delete G.onClick, O.createElement("label", {
      ...(0, u.v)(G, S, j, U),
      ref: t,
      slot: e.slot || true,
      "data-selected": C || true,
      "data-indeterminate": e.isIndeterminate || true,
      "data-pressed": R || true,
      "data-hovered": k || true,
      "data-focused": D || true,
      "data-focus-visible": L || true,
      "data-disabled": N || true,
      "data-readonly": w || true,
      "data-invalid": P || true,
      "data-required": e.isRequired || true
    }, O.createElement(h.s, {
      elementType: "span"
    }, O.createElement("input", {
      ...(0, u.v)(T, x),
      ref: I
    })), U.children)
  })