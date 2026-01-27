/** Chunk was on web.js **/
/** chunk id: 974111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OX: () => m,
  cJ: () => y,
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

function y(e, t, n) {
  var y;
  let b, {
      isInvalid: O,
      validationErrors: v,
      validationDetails: A
    } = t.displayValidation,
    {
      labelProps: I,
      fieldProps: S,
      descriptionProps: T,
      errorMessageProps: C
    } = (0, d.M)({
      ...e,
      labelElementType: "span",
      isInvalid: O,
      errorMessage: e.errorMessage || v
    }),
    N = (0, u.useRef)(null),
    {
      focusWithinProps: w
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
    R = (0, _.o)(h(r.A), "@react-aria/datepicker"),
    P = "hour" === t.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription",
    D = "hour" === t.maxGranularity ? "time" : "date",
    L = t.value ? R.format(P, {
      [D]: t.formatValue({
        month: "long"
      })
    }) : "",
    x = (0, o.I)(L),
    M = "presentation" === e[g] ? S["aria-describedby"] : [x["aria-describedby"], S["aria-describedby"]].filter(Boolean).join(" ") || true,
    j = e[E],
    k = (0, u.useMemo)(() => j || (0, a.C7)(n), [j, n]),
    U = (0, i.P)(t, n, "presentation" === e[g]);
  m.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: [I.id, e["aria-labelledby"]].filter(Boolean).join(" ") || true,
    ariaDescribedBy: M,
    focusManager: k
  });
  let G = (0, u.useRef)(e.autoFocus);
  b = "presentation" === e[g] ? {
    role: "presentation"
  } : (0, s.v)(S, {
    role: "group",
    "aria-disabled": e.isDisabled || true,
    "aria-describedby": M
  }), (0, u.useEffect)(() => {
    G.current && k.focusFirst(), G.current = false
  }, [k]), (0, l.F)(e.inputRef, t.defaultValue, t.setValue), (0, p.X)({
    ...e,
    focus() {
      k.focusFirst()
    }
  }, t, e.inputRef);
  let F = {
    type: "hidden",
    name: e.name,
    form: e.form,
    value: (null == (y = t.value) ? true : y.toString()) || "",
    disabled: e.isDisabled
  };
  "native" === e.validationBehavior && (F.type = "text", F.hidden = true, F.required = e.isRequired, F.onChange = () => {});
  let V = (0, c.$)(e);
  return {
    labelProps: {
      ...I,
      onClick: () => {
        k.focusFirst()
      }
    },
    fieldProps: (0, s.v)(V, b, U, w, {
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
    inputProps: F,
    descriptionProps: T,
    errorMessageProps: C,
    isInvalid: O,
    validationErrors: v,
    validationDetails: A
  }
}