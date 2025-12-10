/** Chunk was on web.js **/
/** chunk id: 735048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XZ: () => T,
  cO: () => I
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
  S = (0, Chunk473749.createContext)(null),
  I = (0, Chunk473749.forwardRef)(function(e, t) {
    var n, r;
    [e, t] = (0, i.pE)(e, t, v);
    let {
      validationBehavior: d
    } = (0, i.jn)(o.q) || {}, f = null != (r = null != (n = e.validationBehavior) ? n : d) ? r : "native", p = (0, h.$)({
      ...e,
      validationBehavior: f
    }), [_, m] = (0, i.xc)(!e["aria-label"] && !e["aria-labelledby"]), {
      groupProps: g,
      labelProps: b,
      descriptionProps: y,
      errorMessageProps: I,
      ...T
    } = (0, c.u)({
      ...e,
      label: m,
      validationBehavior: f
    }, p), C = (0, i.aX)({
      ...e,
      values: {
        isDisabled: p.isDisabled,
        isReadOnly: p.isReadOnly,
        isRequired: e.isRequired || false,
        isInvalid: p.isInvalid,
        state: p
      },
      defaultClassName: "react-aria-CheckboxGroup"
    }), A = (0, E.z)(e, {
      global: true
    });
    return O.createElement("div", {
      ...(0, u.d)(A, C, g),
      ref: t,
      slot: e.slot || true,
      "data-readonly": p.isReadOnly || true,
      "data-required": e.isRequired || true,
      "data-invalid": p.isInvalid || true,
      "data-disabled": e.isDisabled || true
    }, O.createElement(i.zt, {
      values: [
        [S, p],
        [s.n, {
          ...b,
          ref: _,
          elementType: "span"
        }],
        [l.j, {
          slots: {
            description: y,
            errorMessage: I
          }
        }],
        [a.E, T]
      ]
    }, C.children))
  }),
  T = (0, Chunk473749.forwardRef)(function(e, t) {
    var n, a;
    let {
      inputRef: s = null,
      ...l
    } = e;
    [e, t] = (0, i.pE)(l, t, r.cP);
    let {
      validationBehavior: c
    } = (0, i.jn)(o.q) || {}, h = null != (a = null != (n = e.validationBehavior) ? n : c) ? a : "native", v = (0, O.useContext)(S), I = (0, b.B)((0, O.useMemo)(() => (0, y.l)(s, true !== e.inputRef ? e.inputRef : null), [s, e.inputRef])), {
      labelProps: T,
      inputProps: C,
      isSelected: A,
      isDisabled: N,
      isReadOnly: P,
      isPressed: R,
      isInvalid: D
    } = v ? (0, d.a)({
      ...(0, i.vl)(e),
      value: e.value,
      children: "function" == typeof e.children || e.children
    }, v, I) : (0, f.O)({
      ...(0, i.vl)(e),
      children: "function" == typeof e.children || e.children,
      validationBehavior: h
    }, (0, g.l)(e), I), {
      isFocused: w,
      isFocusVisible: x,
      focusProps: L
    } = (0, p.F)(), j = N || P, {
      hoverProps: M,
      isHovered: k
    } = (0, _.X)({
      ...e,
      isDisabled: j
    }), U = (0, i.aX)({
      ...e,
      defaultClassName: "react-aria-Checkbox",
      values: {
        isSelected: A,
        isIndeterminate: e.isIndeterminate || false,
        isPressed: R,
        isHovered: k,
        isFocused: w,
        isFocusVisible: x,
        isDisabled: N,
        isReadOnly: P,
        isInvalid: D,
        isRequired: e.isRequired || false
      }
    }), G = (0, E.z)(e, {
      global: true
    });
    return delete G.id, delete G.onClick, O.createElement("label", {
      ...(0, u.d)(G, T, M, U),
      ref: t,
      slot: e.slot || true,
      "data-selected": A || true,
      "data-indeterminate": e.isIndeterminate || true,
      "data-pressed": R || true,
      "data-hovered": k || true,
      "data-focused": w || true,
      "data-focus-visible": x || true,
      "data-disabled": N || true,
      "data-readonly": P || true,
      "data-invalid": D || true,
      "data-required": e.isRequired || true
    }, O.createElement(m.T, {
      elementType: "span"
    }, O.createElement("input", {
      ...(0, u.d)(C, L),
      ref: I
    })), U.children)
  })