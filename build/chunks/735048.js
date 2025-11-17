/** Chunk was on web.js **/
/** chunk id: 735048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XZ: () => S,
  cO: () => T
});
var Chunk900090 = require("./900090.js"),
  Chunk595707 = require("./595707.js"),
  Chunk576418 = require("./576418.js"),
  Chunk995827 = require("./995827.js"),
  Chunk937397 = require("./937397.js"),
  Chunk819851 = require("./819851.js"),
  Chunk937226 = require("./937226.js"),
  Chunk158821 = require("./158821.js"),
  Chunk805204 = require("./805204.js"),
  Chunk511746 = require("./511746.js"),
  Chunk984940 = require("./984940.js"),
  Chunk69771 = require("./69771.js"),
  Chunk485853 = require("./485853.js"),
  Chunk21701 = require("./21701.js"),
  Chunk698369 = require("./698369.js"),
  Chunk880016 = require("./880016.js"),
  Chunk413565 = require("./413565.js"),
  Chunk401522 = require("./401522.js"),
  Chunk473749 = require("./473749.js");
let v = (0, Chunk473749.createContext)(null),
  I = (0, Chunk473749.createContext)(null),
  T = (0, Chunk473749.forwardRef)(function(e, t) {
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
  S = (0, Chunk473749.forwardRef)(function(e, t) {
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
      isInvalid: D
    } = v ? (0, d.a)({
      ...(0, i.vl)(e),
      value: e.value,
      children: "function" == typeof e.children || e.children
    }, v, T) : (0, f.O)({
      ...(0, i.vl)(e),
      children: "function" == typeof e.children || e.children,
      validationBehavior: m
    }, (0, g.l)(e), T), {
      isFocused: w,
      isFocusVisible: x,
      focusProps: L
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
        isFocused: w,
        isFocusVisible: x,
        isDisabled: N,
        isReadOnly: R,
        isInvalid: D,
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
      "data-focused": w || true,
      "data-focus-visible": x || true,
      "data-disabled": N || true,
      "data-readonly": R || true,
      "data-invalid": D || true,
      "data-required": e.isRequired || true
    }, O.createElement(h.T, {
      elementType: "span"
    }, O.createElement("input", {
      ...(0, u.d)(A, L),
      ref: T
    })), U.children)
  })