/** Chunk was on 33622 **/
/** chunk id: 228865, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  Mt: () => F
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
  Chunk506699 = require("./506699.js"),
  Chunk735437 = require("./735437.js"),
  Chunk43341 = require("./43341.js"),
  Chunk647438 = require("./647438.js");
let x = (0, Chunk647438.createContext)(null),
  B = (0, Chunk647438.createContext)(null),
  E = [Chunk276820.E, Chunk188366.b, Chunk682199.n, Chunk594350.j],
  F = (0, Chunk647438.forwardRef)(function(e, a) {
    var t, F;
    [e, a] = (0, r.pE)(e, a, x);
    let {
      validationBehavior: w
    } = (0, r.jn)(s.q) || {}, $ = null != (F = null != (t = e.validationBehavior) ? t : w) ? F : "native", R = (0, p.N)({
      ...e,
      validationBehavior: $
    }), Z = (0, C.useRef)(null), [k, A] = (0, r.xc)(!e["aria-label"] && !e["aria-labelledby"]), {
      groupProps: P,
      labelProps: S,
      fieldProps: M,
      buttonProps: V,
      dialogProps: I,
      calendarProps: z,
      descriptionProps: O,
      errorMessageProps: j,
      ...T
    } = (0, f.k)({
      ...(0, r.vl)(e),
      label: A,
      validationBehavior: $
    }, R, Z), [N, U] = (0, C.useState)(null), K = (0, C.useCallback)(() => {
      Z.current && U(Z.current.offsetWidth + "px")
    }, []);
    (0, g.y)({
      ref: Z,
      onResize: K
    });
    let {
      focusProps: L,
      isFocused: J,
      isFocusVisible: W
    } = (0, y.F)({
      within: true
    }), H = (0, r.aX)({
      ...e,
      values: {
        state: R,
        isFocusWithin: J,
        isFocusVisible: W,
        isDisabled: e.isDisabled || false,
        isInvalid: R.isInvalid,
        isOpen: R.isOpen,
        isReadOnly: e.isReadOnly || false
      },
      defaultClassName: "react-aria-DatePicker"
    }), G = (0, v.z)(e, {
      global: true
    });
    return delete G.id, C.createElement(r.zt, {
      values: [
        [B, R],
        [d.E, {
          ...P,
          ref: Z,
          isInvalid: R.isInvalid
        }],
        [i.bd, M],
        [u.b, {
          ...V,
          isPressed: R.isOpen
        }],
        [m.n, {
          ...S,
          ref: k,
          elementType: "span"
        }],
        [n.Ah, z],
        [o.$H, R],
        [D.m, {
          trigger: "DatePicker",
          triggerRef: Z,
          placement: "bottom start",
          style: {
            "--trigger-width": N
          },
          clearContexts: E
        }],
        [o.MJ, I],
        [h.j, {
          slots: {
            description: O,
            errorMessage: j
          }
        }],
        [l.E, T]
      ]
    }, C.createElement("div", {
      ...(0, b.d)(G, H, L),
      ref: a,
      slot: e.slot || true,
      "data-focus-within": J || true,
      "data-invalid": R.isInvalid || true,
      "data-focus-visible": W || true,
      "data-disabled": e.isDisabled || true,
      "data-readonly": e.isReadOnly || true,
      "data-open": R.isOpen || true
    }), C.createElement(c.j, {
      autoComplete: e.autoComplete,
      name: e.name,
      isDisabled: e.isDisabled,
      state: R
    }))
  })