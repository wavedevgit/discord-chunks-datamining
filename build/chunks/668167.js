/** Chunk was on web.js **/
/** chunk id: 668167, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => E
});
var Chunk908909 = require("./908909.js"),
  Chunk974111 = require("./974111.js"),
  Chunk185288 = require("./185288.js"),
  Chunk13163 = require("./13163.js"),
  Chunk723906 = require("./723906.js"),
  Chunk807177 = require("./807177.js"),
  Chunk290424 = require("./290424.js"),
  Chunk803082 = require("./803082.js"),
  Chunk339241 = require("./339241.js"),
  Chunk447432 = require("./447432.js"),
  Chunk744493 = require("./744493.js"),
  Chunk47276 = require("./47276.js"),
  Chunk853590 = require("./853590.js"),
  Chunk64700 = require("./64700.js");

function g(e) {
  return e && e.__esModule ? e.default : e
}

function E(e, t, n) {
  let E = (0, s.Bi)(),
    y = (0, s.Bi)(),
    b = (0, s.Bi)(),
    O = (0, _.o)(g(r.A), "@react-aria/datepicker"),
    {
      isInvalid: v,
      validationErrors: A,
      validationDetails: I
    } = t.displayValidation,
    {
      labelProps: S,
      fieldProps: T,
      descriptionProps: C,
      errorMessageProps: N
    } = (0, f.M)({
      ...e,
      labelElementType: "span",
      isInvalid: v,
      errorMessage: e.errorMessage || A
    }),
    w = (0, a.P)(t, n),
    R = T["aria-labelledby"] || T.id,
    {
      locale: P
    } = (0, h.Y)(),
    D = t.formatValue(P, {
      month: "long"
    }),
    L = D ? O.format("selectedDateDescription", {
      date: D
    }) : "",
    x = (0, l.I)(L),
    M = [x["aria-describedby"], T["aria-describedby"]].filter(Boolean).join(" ") || true,
    j = (0, c.$)(e),
    k = (0, m.useMemo)(() => (0, o.C7)(n), [n]),
    U = (0, m.useRef)(false),
    {
      focusWithinProps: G
    } = (0, p.R)({
      ...e,
      isDisabled: t.isOpen,
      onBlurWithin: t => {
        let n = document.getElementById(y);
        if (!(null == n ? true : n.contains(t.relatedTarget))) {
          var r, i;
          U.current = false, null == (r = e.onBlur) || r.call(e, t), null == (i = e.onFocusChange) || i.call(e, false)
        }
      },
      onFocusWithin: t => {
        if (!U.current) {
          var n, r;
          U.current = true, null == (n = e.onFocus) || n.call(e, t), null == (r = e.onFocusChange) || r.call(e, true)
        }
      }
    });
  return {
    groupProps: (0, u.v)(j, w, T, x, G, {
      role: "group",
      "aria-disabled": e.isDisabled || null,
      "aria-labelledby": R,
      "aria-describedby": M,
      onKeyDown(n) {
        !t.isOpen && e.onKeyDown && e.onKeyDown(n)
      },
      onKeyUp(n) {
        !t.isOpen && e.onKeyUp && e.onKeyUp(n)
      }
    }),
    labelProps: {
      ...S,
      onClick: () => {
        k.focusFirst()
      }
    },
    fieldProps: {
      ...T,
      id: b,
      [i.pK]: "presentation",
      "aria-describedby": M,
      value: t.value,
      defaultValue: t.defaultValue,
      onChange: t.setValue,
      placeholderValue: e.placeholderValue,
      hideTimeZone: e.hideTimeZone,
      hourCycle: e.hourCycle,
      shouldForceLeadingZeros: e.shouldForceLeadingZeros,
      granularity: e.granularity,
      isDisabled: e.isDisabled,
      isReadOnly: e.isReadOnly,
      isRequired: e.isRequired,
      validationBehavior: e.validationBehavior,
      [d.Lf]: t,
      autoFocus: e.autoFocus,
      name: e.name,
      form: e.form
    },
    descriptionProps: C,
    errorMessageProps: N,
    buttonProps: {
      ...x,
      id: E,
      "aria-haspopup": "dialog",
      "aria-label": O.format("calendar"),
      "aria-labelledby": `${E} ${R}`,
      "aria-describedby": M,
      "aria-expanded": t.isOpen,
      isDisabled: e.isDisabled || e.isReadOnly,
      onPress: () => t.setOpen(true)
    },
    dialogProps: {
      id: y,
      "aria-labelledby": `${E} ${R}`
    },
    calendarProps: {
      autoFocus: true,
      value: t.dateValue,
      onChange: t.setDateValue,
      minValue: e.minValue,
      maxValue: e.maxValue,
      isDisabled: e.isDisabled,
      isReadOnly: e.isReadOnly,
      isDateUnavailable: e.isDateUnavailable,
      defaultFocusedValue: t.dateValue ? true : e.placeholderValue,
      isInvalid: t.isInvalid,
      errorMessage: "function" == typeof e.errorMessage ? e.errorMessage(t.displayValidation) : e.errorMessage || t.displayValidation.validationErrors.join(" "),
      firstDayOfWeek: e.firstDayOfWeek,
      pageBehavior: e.pageBehavior
    },
    isInvalid: v,
    validationErrors: A,
    validationDetails: I
  }
}