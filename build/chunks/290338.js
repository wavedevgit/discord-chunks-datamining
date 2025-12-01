/** Chunk was on web.js **/
/** chunk id: 290338, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mt: () => T
});
var Chunk23893 = require("./23893.js"),
  Chunk971903 = require("./971903.js"),
  Chunk595707 = require("./595707.js"),
  Chunk480554 = require("./480554.js"),
  Chunk929887 = require("./929887.js"),
  Chunk576418 = require("./576418.js"),
  Chunk995827 = require("./995827.js"),
  Chunk540387 = require("./540387.js"),
  Chunk294381 = require("./294381.js"),
  Chunk937397 = require("./937397.js"),
  Chunk420004 = require("./420004.js"),
  Chunk819851 = require("./819851.js"),
  Chunk342232 = require("./342232.js"),
  Chunk984940 = require("./984940.js"),
  Chunk791864 = require("./791864.js"),
  Chunk472736 = require("./472736.js"),
  Chunk880016 = require("./880016.js"),
  Chunk158821 = require("./158821.js"),
  Chunk473749 = require("./473749.js");
let v = (0, Chunk473749.createContext)(null),
  S = (0, Chunk473749.createContext)(null),
  I = [Chunk540387.E, Chunk23893.b, Chunk937397.n, Chunk819851.j],
  T = (0, Chunk473749.forwardRef)(function(e, t) {
    var n, T;
    [e, t] = (0, a.pE)(e, t, v);
    let {
      validationBehavior: A
    } = (0, a.jn)(c.q) || {}, C = null != (T = null != (n = e.validationBehavior) ? n : A) ? T : "native", N = (0, g.N)({
      ...e,
      validationBehavior: C
    }), P = (0, O.useRef)(null), [R, w] = (0, a.xc)(!e["aria-label"] && !e["aria-labelledby"]), {
      groupProps: D,
      labelProps: x,
      fieldProps: L,
      buttonProps: j,
      dialogProps: M,
      calendarProps: k,
      descriptionProps: U,
      errorMessageProps: G,
      ...Z
    } = (0, m.k)({
      ...(0, a.vl)(e),
      label: w,
      validationBehavior: C
    }, N, P), [B, F] = (0, O.useState)(null), V = (0, O.useCallback)(() => {
      P.current && F(P.current.offsetWidth + "px")
    }, []);
    (0, E.y)({
      ref: P,
      onResize: V
    });
    let {
      focusProps: H,
      isFocused: Y,
      isFocusVisible: W
    } = (0, h.F)({
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
        [S, N],
        [u.E, {
          ...D,
          ref: P,
          isInvalid: N.isInvalid
        }],
        [o.bd, L],
        [r.b, {
          ...j,
          isPressed: N.isOpen
        }],
        [f.n, {
          ...x,
          ref: R,
          elementType: "span"
        }],
        [i.Ah, k],
        [s.$H, N],
        [p.m, {
          trigger: "DatePicker",
          triggerRef: P,
          placement: "bottom start",
          style: {
            "--trigger-width": B
          },
          clearContexts: I
        }],
        [s.MJ, M],
        [_.j, {
          slots: {
            description: U,
            errorMessage: G
          }
        }],
        [l.E, Z]
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