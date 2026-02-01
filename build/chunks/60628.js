/** Chunk was on web.js **/
/** chunk id: 60628, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  lr: () => S
});
var Chunk650682 = require("./650682.js"),
  Chunk968172 = require("./968172.js"),
  Chunk825913 = require("./825913.js"),
  Chunk450902 = require("./450902.js"),
  Chunk248062 = require("./248062.js"),
  Chunk162376 = require("./162376.js"),
  Chunk461212 = require("./461212.js"),
  Chunk521767 = require("./521767.js"),
  Chunk360970 = require("./360970.js"),
  Chunk129844 = require("./129844.js"),
  Chunk134009 = require("./134009.js"),
  Chunk193523 = require("./193523.js"),
  Chunk668167 = require("./668167.js"),
  Chunk498430 = require("./498430.js"),
  Chunk308722 = require("./308722.js"),
  Chunk752579 = require("./752579.js"),
  Chunk290424 = require("./290424.js"),
  Chunk803082 = require("./803082.js"),
  Chunk64700 = require("./64700.js");
let v = (0, Chunk64700.createContext)(null),
  A = (0, Chunk64700.createContext)(null),
  I = [Chunk521767.t, Chunk650682.k, Chunk129844.I, Chunk193523.h],
  S = (0, Chunk64700.forwardRef)(function(e, t) {
    var n, S;
    [e, t] = (0, a.JT)(e, t, v);
    let {
      validationBehavior: T
    } = (0, a.CC)(c.c) || {}, C = null != (S = null != (n = e.validationBehavior) ? n : T) ? S : "native", N = (0, g.j)({
      ...e,
      validationBehavior: C
    }), w = (0, O.useRef)(null), [R, P] = (0, a._E)(!e["aria-label"] && !e["aria-labelledby"]), {
      groupProps: D,
      labelProps: L,
      fieldProps: x,
      buttonProps: M,
      dialogProps: j,
      calendarProps: k,
      descriptionProps: U,
      errorMessageProps: G,
      ...V
    } = (0, h.Q)({
      ...(0, a.SK)(e),
      label: P,
      validationBehavior: C
    }, N, w), [F, B] = (0, O.useState)(null), H = (0, O.useCallback)(() => {
      w.current && B(w.current.offsetWidth + "px")
    }, []);
    (0, E.w)({
      ref: w,
      onResize: H
    });
    let {
      focusProps: Y,
      isFocused: W,
      isFocusVisible: K
    } = (0, m.o)({
      within: true
    }), z = (0, a.Sl)({
      ...e,
      values: {
        state: N,
        isFocusWithin: W,
        isFocusVisible: K,
        isDisabled: e.isDisabled || false,
        isInvalid: N.isInvalid,
        isOpen: N.isOpen,
        isReadOnly: e.isReadOnly || false
      },
      defaultClassName: "react-aria-DatePicker"
    }), q = (0, y.$)(e, {
      global: true
    });
    return delete q.id, O.createElement(a.Kq, {
      values: [
        [A, N],
        [u.t, {
          ...D,
          ref: w,
          isInvalid: N.isInvalid
        }],
        [o.cQ, x],
        [r.k, {
          ...M,
          isPressed: N.isOpen
        }],
        [f.I, {
          ...L,
          ref: R,
          elementType: "span"
        }],
        [i.Yi, k],
        [s.RG, N],
        [p.n, {
          trigger: "DatePicker",
          triggerRef: w,
          placement: "bottom start",
          style: {
            "--trigger-width": F
          },
          clearContexts: I
        }],
        [s.MV, j],
        [_.h, {
          slots: {
            description: U,
            errorMessage: G
          }
        }],
        [l.C, V]
      ]
    }, O.createElement("div", {
      ...(0, b.v)(q, z, Y),
      ref: t,
      slot: e.slot || true,
      "data-focus-within": W || true,
      "data-invalid": N.isInvalid || true,
      "data-focus-visible": K || true,
      "data-disabled": e.isDisabled || true,
      "data-readonly": e.isReadOnly || true,
      "data-open": N.isOpen || true
    }), O.createElement(d.N, {
      autoComplete: e.autoComplete,
      name: e.name,
      isDisabled: e.isDisabled,
      state: N
    }))
  })