/** Chunk was on web.js **/
/** chunk id: 42650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XZ: () => S,
  cO: () => T
});
var Chunk532033 = require("./532033.js"),
  Chunk477831 = require("./477831.js"),
  Chunk627320 = require("./627320.js"),
  Chunk22811 = require("./22811.js"),
  Chunk499339 = require("./499339.js"),
  Chunk286468 = require("./286468.js"),
  Chunk318000 = require("./318000.js"),
  Chunk586235 = require("./586235.js"),
  Chunk316266 = require("./316266.js"),
  Chunk241879 = require("./241879.js"),
  Chunk769175 = require("./769175.js"),
  Chunk1334 = require("./1334.js"),
  Chunk500282 = require("./500282.js"),
  Chunk914054 = require("./914054.js"),
  Chunk922462 = require("./922462.js"),
  Chunk436773 = require("./436773.js"),
  Chunk158573 = require("./158573.js"),
  Chunk981902 = require("./981902.js"),
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