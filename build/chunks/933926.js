/** Chunk was on web.js **/
/** chunk id: 933926, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IZ: () => b,
  KX: () => g,
  Lh: () => m
});
var Chunk616868 = require("./616868.js"),
  Chunk669231 = require("./669231.js"),
  Chunk750528 = require("./750528.js"),
  Chunk682308 = require("./682308.js"),
  Chunk43341 = require("./43341.js"),
  Chunk166435 = require("./166435.js"),
  Chunk735437 = require("./735437.js"),
  Chunk647438 = require("./647438.js"),
  Chunk923108 = require("./923108.js"),
  Chunk576173 = require("./576173.js"),
  Chunk51386 = require("./51386.js"),
  Chunk970185 = require("./970185.js");

function h(e) {
  return e && e.__esModule ? e.default : e
}
let m = new WeakMap,
  g = "__role_" + Date.now(),
  E = "__focusManager_" + Date.now();

function b(e, t, n) {
  var b;
  let y, {
      isInvalid: O,
      validationErrors: v,
      validationDetails: I
    } = t.displayValidation,
    {
      labelProps: S,
      fieldProps: T,
      descriptionProps: A,
      errorMessageProps: C
    } = (0, d.U)({
      ...e,
      labelElementType: "span",
      isInvalid: O,
      errorMessage: e.errorMessage || v
    }),
    N = (0, u.useRef)(null),
    {
      focusWithinProps: R
    } = (0, f.L)({
      ...e,
      onFocusWithin(n) {
        var r;
        N.current = t.value, null == (r = e.onFocus) || r.call(e, n)
      },
      onBlurWithin: n => {
        var r;
        t.confirmPlaceholder(), t.value !== N.current && t.commitValidation(), null == (r = e.onBlur) || r.call(e, n)
      },
      onFocusWithinChange: e.onFocusChange
    }),
    P = (0, p.q)(h(r.Z), "@react-aria/datepicker"),
    w = "hour" === t.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription",
    D = "hour" === t.maxGranularity ? "time" : "date",
    L = t.value ? P.format(w, {
      [D]: t.formatValue({
        month: "long"
      })
    }) : "",
    x = (0, o.P)(L),
    M = "presentation" === e[g] ? T["aria-describedby"] : [x["aria-describedby"], T["aria-describedby"]].filter(Boolean).join(" ") || true,
    k = e[E],
    j = (0, u.useMemo)(() => k || (0, a.E7)(n), [k, n]),
    U = (0, i.H)(t, n, "presentation" === e[g]);
  m.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: [S.id, e["aria-labelledby"]].filter(Boolean).join(" ") || true,
    ariaDescribedBy: M,
    focusManager: j
  });
  let G = (0, u.useRef)(e.autoFocus);
  y = "presentation" === e[g] ? {
    role: "presentation"
  } : (0, s.d)(T, {
    role: "group",
    "aria-disabled": e.isDisabled || true,
    "aria-describedby": M
  }), (0, u.useEffect)(() => {
    G.current && j.focusFirst(), G.current = false
  }, [j]), (0, l.y)(e.inputRef, t.defaultValue, t.setValue), (0, _.Q)({
    ...e,
    focus() {
      j.focusFirst()
    }
  }, t, e.inputRef);
  let B = {
    type: "hidden",
    name: e.name,
    form: e.form,
    value: (null == (b = t.value) ? true : b.toString()) || "",
    disabled: e.isDisabled
  };
  "native" === e.validationBehavior && (B.type = "text", B.hidden = true, B.required = e.isRequired, B.onChange = () => {});
  let Z = (0, c.z)(e);
  return {
    labelProps: {
      ...S,
      onClick: () => {
        j.focusFirst()
      }
    },
    fieldProps: (0, s.d)(Z, y, U, R, {
      onKeyDown(t) {
        e.onKeyDown && e.onKeyDown(t)
      },
      onKeyUp(t) {
        e.onKeyUp && e.onKeyUp(t)
      },
      style: {
        unicodeBidi: "isolate"
      }
    }),
    inputProps: B,
    descriptionProps: A,
    errorMessageProps: C,
    isInvalid: O,
    validationErrors: v,
    validationDetails: I
  }
}