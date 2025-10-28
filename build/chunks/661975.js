/** Chunk was on web.js **/
/** chunk id: 661975, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XZ: () => S,
  cO: () => T
});
var Chunk386843 = require("./386843.js"),
  Chunk922387 = require("./922387.js"),
  Chunk986636 = require("./986636.js"),
  Chunk210325 = require("./210325.js"),
  Chunk682199 = require("./682199.js"),
  Chunk594350 = require("./594350.js"),
  Chunk399598 = require("./399598.js"),
  Chunk43341 = require("./43341.js"),
  Chunk747339 = require("./747339.js"),
  Chunk933269 = require("./933269.js"),
  Chunk580470 = require("./580470.js"),
  Chunk437525 = require("./437525.js"),
  Chunk513351 = require("./513351.js"),
  Chunk134820 = require("./134820.js"),
  Chunk940131 = require("./940131.js"),
  Chunk735437 = require("./735437.js"),
  Chunk593277 = require("./593277.js"),
  Chunk483022 = require("./483022.js"),
  Chunk647438 = require("./647438.js");
let v = (0, Chunk647438.createContext)(null),
  I = (0, Chunk647438.createContext)(null),
  T = (0, Chunk647438.forwardRef)(function(e, t) {
    var n, r;
    [e, t] = (0, i.pE)(e, t, v);
    let {
      validationBehavior: d
    } = (0, i.jn)(o.q) || {}, f = null != (r = null != (n = e.validationBehavior) ? n : d) ? r : "native", _ = (0, m.$)({
      ...e,
      validationBehavior: f
    }), [p, h] = (0, i.xc)(!e["aria-label"] && !e["aria-labelledby"]), {
      groupProps: g,
      labelProps: b,
      descriptionProps: y,
      errorMessageProps: T,
      ...S
    } = (0, c.u)({
      ...e,
      label: h,
      validationBehavior: f
    }, _), A = (0, i.aX)({
      ...e,
      values: {
        isDisabled: _.isDisabled,
        isReadOnly: _.isReadOnly,
        isRequired: e.isRequired || false,
        isInvalid: _.isInvalid,
        state: _
      },
      defaultClassName: "react-aria-CheckboxGroup"
    }), C = (0, E.z)(e, {
      global: true
    });
    return O.createElement("div", {
      ...(0, u.d)(C, A, g),
      ref: t,
      slot: e.slot || true,
      "data-readonly": _.isReadOnly || true,
      "data-required": e.isRequired || true,
      "data-invalid": _.isInvalid || true,
      "data-disabled": e.isDisabled || true
    }, O.createElement(i.zt, {
      values: [
        [I, _],
        [s.n, {
          ...b,
          ref: p,
          elementType: "span"
        }],
        [l.j, {
          slots: {
            description: y,
            errorMessage: T
          }
        }],
        [a.E, S]
      ]
    }, A.children))
  }),
  S = (0, Chunk647438.forwardRef)(function(e, t) {
    var n, a;
    let {
      inputRef: s = null,
      ...l
    } = e;
    [e, t] = (0, i.pE)(l, t, r.cP);
    let {
      validationBehavior: c
    } = (0, i.jn)(o.q) || {}, m = null != (a = null != (n = e.validationBehavior) ? n : c) ? a : "native", v = (0, O.useContext)(I), T = (0, b.B)((0, O.useMemo)(() => (0, y.l)(s, true !== e.inputRef ? e.inputRef : null), [s, e.inputRef])), {
      labelProps: S,
      inputProps: A,
      isSelected: C,
      isDisabled: N,
      isReadOnly: R,
      isPressed: P,
      isInvalid: w
    } = v ? (0, d.a)({
      ...(0, i.vl)(e),
      value: e.value,
      children: "function" == typeof e.children || e.children
    }, v, T) : (0, f.O)({
      ...(0, i.vl)(e),
      children: "function" == typeof e.children || e.children,
      validationBehavior: m
    }, (0, g.l)(e), T), {
      isFocused: D,
      isFocusVisible: L,
      focusProps: x
    } = (0, _.F)(), M = N || R, {
      hoverProps: k,
      isHovered: j
    } = (0, p.X)({
      ...e,
      isDisabled: M
    }), U = (0, i.aX)({
      ...e,
      defaultClassName: "react-aria-Checkbox",
      values: {
        isSelected: C,
        isIndeterminate: e.isIndeterminate || false,
        isPressed: P,
        isHovered: j,
        isFocused: D,
        isFocusVisible: L,
        isDisabled: N,
        isReadOnly: R,
        isInvalid: w,
        isRequired: e.isRequired || false
      }
    }), G = (0, E.z)(e, {
      global: true
    });
    return delete G.id, delete G.onClick, O.createElement("label", {
      ...(0, u.d)(G, S, k, U),
      ref: t,
      slot: e.slot || true,
      "data-selected": C || true,
      "data-indeterminate": e.isIndeterminate || true,
      "data-pressed": P || true,
      "data-hovered": j || true,
      "data-focused": D || true,
      "data-focus-visible": L || true,
      "data-disabled": N || true,
      "data-readonly": R || true,
      "data-invalid": w || true,
      "data-required": e.isRequired || true
    }, O.createElement(h.T, {
      elementType: "span"
    }, O.createElement("input", {
      ...(0, u.d)(A, x),
      ref: T
    })), U.children)
  })