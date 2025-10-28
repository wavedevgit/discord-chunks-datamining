/** Chunk was on web.js **/
/** chunk id: 228865, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mt: () => S
});
var Chunk188366 = require("./188366.js"),
  Chunk862371 = require("./862371.js"),
  Chunk922387 = require("./922387.js"),
  Chunk167111 = require("./167111.js"),
  Chunk989189 = require("./989189.js"),
  Chunk986636 = require("./986636.js"),
  Chunk210325 = require("./210325.js"),
  Chunk276820 = require("./276820.js"),
  Chunk831352 = require("./831352.js"),
  Chunk682199 = require("./682199.js"),
  Chunk860448 = require("./860448.js"),
  Chunk594350 = require("./594350.js"),
  Chunk716723 = require("./716723.js"),
  Chunk580470 = require("./580470.js"),
  Chunk620368 = require("./620368.js"),
  Chunk343447 = require("./343447.js"),
  Chunk735437 = require("./735437.js"),
  Chunk43341 = require("./43341.js"),
  Chunk647438 = require("./647438.js");
let v = (0, Chunk647438.createContext)(null),
  I = (0, Chunk647438.createContext)(null),
  T = [Chunk276820.E, Chunk188366.b, Chunk682199.n, Chunk594350.j],
  S = (0, Chunk647438.forwardRef)(function(e, t) {
    var n, S;
    [e, t] = (0, a.pE)(e, t, v);
    let {
      validationBehavior: A
    } = (0, a.jn)(c.q) || {}, C = null != (S = null != (n = e.validationBehavior) ? n : A) ? S : "native", N = (0, g.N)({
      ...e,
      validationBehavior: C
    }), R = (0, O.useRef)(null), [P, w] = (0, a.xc)(!e["aria-label"] && !e["aria-labelledby"]), {
      groupProps: D,
      labelProps: L,
      fieldProps: x,
      buttonProps: M,
      dialogProps: k,
      calendarProps: j,
      descriptionProps: U,
      errorMessageProps: G,
      ...B
    } = (0, h.k)({
      ...(0, a.vl)(e),
      label: w,
      validationBehavior: C
    }, N, R), [Z, F] = (0, O.useState)(null), V = (0, O.useCallback)(() => {
      R.current && F(R.current.offsetWidth + "px")
    }, []);
    (0, E.y)({
      ref: R,
      onResize: V
    });
    let {
      focusProps: H,
      isFocused: Y,
      isFocusVisible: W
    } = (0, m.F)({
      within: true
    }), K = (0, a.aX)({
      ...e,
      values: {
        state: N,
        isFocusWithin: Y,
        isFocusVisible: W,
        isDisabled: e.isDisabled || false,
        isInvalid: N.isInvalid,
        isOpen: N.isOpen,
        isReadOnly: e.isReadOnly || false
      },
      defaultClassName: "react-aria-DatePicker"
    }), z = (0, b.z)(e, {
      global: true
    });
    return delete z.id, O.createElement(a.zt, {
      values: [
        [I, N],
        [u.E, {
          ...D,
          ref: R,
          isInvalid: N.isInvalid
        }],
        [o.bd, x],
        [r.b, {
          ...M,
          isPressed: N.isOpen
        }],
        [f.n, {
          ...L,
          ref: P,
          elementType: "span"
        }],
        [i.Ah, j],
        [s.$H, N],
        [_.m, {
          trigger: "DatePicker",
          triggerRef: R,
          placement: "bottom start",
          style: {
            "--trigger-width": Z
          },
          clearContexts: T
        }],
        [s.MJ, k],
        [p.j, {
          slots: {
            description: U,
            errorMessage: G
          }
        }],
        [l.E, B]
      ]
    }, O.createElement("div", {
      ...(0, y.d)(z, K, H),
      ref: t,
      slot: e.slot || true,
      "data-focus-within": Y || true,
      "data-invalid": N.isInvalid || true,
      "data-focus-visible": W || true,
      "data-disabled": e.isDisabled || true,
      "data-readonly": e.isReadOnly || true,
      "data-open": N.isOpen || true
    }), O.createElement(d.j, {
      autoComplete: e.autoComplete,
      name: e.name,
      isDisabled: e.isDisabled,
      state: N
    }))
  })