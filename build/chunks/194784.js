/** Chunk was on web.js **/
/** chunk id: 194784, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IZ: () => b,
  KX: () => g,
  Lh: () => m
});
var Chunk925521 = require("./925521.js"),
  Chunk380869 = require("./380869.js"),
  Chunk605294 = require("./605294.js"),
  Chunk645537 = require("./645537.js"),
  Chunk158821 = require("./158821.js"),
  Chunk179549 = require("./179549.js"),
  Chunk880016 = require("./880016.js"),
  Chunk473749 = require("./473749.js"),
  Chunk426902 = require("./426902.js"),
  Chunk921448 = require("./921448.js"),
  Chunk746367 = require("./746367.js"),
  Chunk218769 = require("./218769.js");

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
      validationDetails: S
    } = t.displayValidation,
    {
      labelProps: I,
      fieldProps: T,
      descriptionProps: C,
      errorMessageProps: A
    } = (0, d.U)({
      ...e,
      labelElementType: "span",
      isInvalid: O,
      errorMessage: e.errorMessage || v
    }),
    N = (0, u.useRef)(null),
    {
      focusWithinProps: P
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
    w = (0, _.q)(h(r.Z), "@react-aria/datepicker"),
    R = "hour" === t.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription",
    D = "hour" === t.maxGranularity ? "time" : "date",
    x = t.value ? w.format(R, {
      [D]: t.formatValue({
        month: "long"
      })
    }) : "",
    L = (0, o.P)(x),
    j = "presentation" === e[g] ? T["aria-describedby"] : [L["aria-describedby"], T["aria-describedby"]].filter(Boolean).join(" ") || true,
    M = e[E],
    k = (0, u.useMemo)(() => M || (0, a.E7)(n), [M, n]),
    U = (0, i.H)(t, n, "presentation" === e[g]);
  m.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: [I.id, e["aria-labelledby"]].filter(Boolean).join(" ") || true,
    ariaDescribedBy: j,
    focusManager: k
  });
  let G = (0, u.useRef)(e.autoFocus);
  y = "presentation" === e[g] ? {
    role: "presentation"
  } : (0, s.d)(T, {
    role: "group",
    "aria-disabled": e.isDisabled || true,
    "aria-describedby": j
  }), (0, u.useEffect)(() => {
    G.current && k.focusFirst(), G.current = false
  }, [k]), (0, l.y)(e.inputRef, t.defaultValue, t.setValue), (0, p.Q)({
    ...e,
    focus() {
      k.focusFirst()
    }
  }, t, e.inputRef);
  let Z = {
    type: "hidden",
    name: e.name,
    form: e.form,
    value: (null == (b = t.value) ? true : b.toString()) || "",
    disabled: e.isDisabled
  };
  "native" === e.validationBehavior && (Z.type = "text", Z.hidden = true, Z.required = e.isRequired, Z.onChange = () => {});
  let F = (0, c.z)(e);
  return {
    labelProps: {
      ...I,
      onClick: () => {
        k.focusFirst()
      }
    },
    fieldProps: (0, s.d)(F, y, U, P, {
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
    inputProps: Z,
    descriptionProps: C,
    errorMessageProps: A,
    isInvalid: O,
    validationErrors: v,
    validationDetails: S
  }
}