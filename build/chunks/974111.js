/** Chunk was on web.js **/
/** chunk id: 974111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OX: () => m,
  cJ: () => b,
  pK: () => g
});
var Chunk908909 = require("./908909.js"),
  Chunk185288 = require("./185288.js"),
  Chunk13163 = require("./13163.js"),
  Chunk807177 = require("./807177.js"),
  Chunk803082 = require("./803082.js"),
  Chunk702992 = require("./702992.js"),
  Chunk290424 = require("./290424.js"),
  Chunk64700 = require("./64700.js"),
  Chunk447432 = require("./447432.js"),
  Chunk744493 = require("./744493.js"),
  Chunk96441 = require("./96441.js"),
  Chunk47276 = require("./47276.js");

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
      validationErrors: A,
      validationDetails: v
    } = t.displayValidation,
    {
      labelProps: S,
      fieldProps: I,
      descriptionProps: T,
      errorMessageProps: C
    } = (0, d.M)({
      ...e,
      labelElementType: "span",
      isInvalid: O,
      errorMessage: e.errorMessage || A
    }),
    N = (0, u.useRef)(null),
    {
      focusWithinProps: R
    } = (0, f.R)({
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
    w = (0, _.o)(h(r.A), "@react-aria/datepicker"),
    P = "hour" === t.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription",
    D = "hour" === t.maxGranularity ? "time" : "date",
    x = t.value ? w.format(P, {
      [D]: t.formatValue({
        month: "long"
      })
    }) : "",
    L = (0, s.I)(x),
    j = "presentation" === e[g] ? I["aria-describedby"] : [L["aria-describedby"], I["aria-describedby"]].filter(Boolean).join(" ") || true,
    M = e[E],
    k = (0, u.useMemo)(() => M || (0, a.C7)(n), [M, n]),
    U = (0, i.P)(t, n, "presentation" === e[g]);
  m.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: [S.id, e["aria-labelledby"]].filter(Boolean).join(" ") || true,
    ariaDescribedBy: j,
    focusManager: k
  });
  let G = (0, u.useRef)(e.autoFocus);
  y = "presentation" === e[g] ? {
    role: "presentation"
  } : (0, o.v)(I, {
    role: "group",
    "aria-disabled": e.isDisabled || true,
    "aria-describedby": j
  }), (0, u.useEffect)(() => {
    G.current && k.focusFirst(), G.current = false
  }, [k]), (0, l.F)(e.inputRef, t.defaultValue, t.setValue), (0, p.X)({
    ...e,
    focus() {
      k.focusFirst()
    }
  }, t, e.inputRef);
  let V = {
    type: "hidden",
    name: e.name,
    form: e.form,
    value: (null == (b = t.value) ? true : b.toString()) || "",
    disabled: e.isDisabled
  };
  "native" === e.validationBehavior && (V.type = "text", V.hidden = true, V.required = e.isRequired, V.onChange = () => {});
  let F = (0, c.$)(e);
  return {
    labelProps: {
      ...S,
      onClick: () => {
        k.focusFirst()
      }
    },
    fieldProps: (0, o.v)(F, y, U, R, {
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
    inputProps: V,
    descriptionProps: T,
    errorMessageProps: C,
    isInvalid: O,
    validationErrors: A,
    validationDetails: v
  }
}