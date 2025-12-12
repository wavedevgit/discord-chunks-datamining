/** Chunk was on web.js **/
/** chunk id: 342232, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => E
});
var Chunk925521 = require("./925521.js"),
  Chunk194784 = require("./194784.js"),
  Chunk380869 = require("./380869.js"),
  Chunk605294 = require("./605294.js"),
  Chunk752689 = require("./752689.js"),
  Chunk645537 = require("./645537.js"),
  Chunk880016 = require("./880016.js"),
  Chunk158821 = require("./158821.js"),
  Chunk134915 = require("./134915.js"),
  Chunk426902 = require("./426902.js"),
  Chunk921448 = require("./921448.js"),
  Chunk218769 = require("./218769.js"),
  Chunk227399 = require("./227399.js"),
  Chunk473749 = require("./473749.js");

function g(e) {
  return e && e.__esModule ? e.default : e
}

function E(e, t, n) {
  let E = (0, s.Me)(),
    b = (0, s.Me)(),
    y = (0, s.Me)(),
    O = (0, _.q)(g(r.Z), "@react-aria/datepicker"),
    {
      isInvalid: v,
      validationErrors: S,
      validationDetails: I
    } = t.displayValidation,
    {
      labelProps: T,
      fieldProps: C,
      descriptionProps: A,
      errorMessageProps: N
    } = (0, f.U)({
      ...e,
      labelElementType: "span",
      isInvalid: v,
      errorMessage: e.errorMessage || S
    }),
    P = (0, o.H)(t, n),
    R = C["aria-labelledby"] || C.id,
    {
      locale: w
    } = (0, m.j)(),
    D = t.formatValue(w, {
      month: "long"
    }),
    x = D ? O.format("selectedDateDescription", {
      date: D
    }) : "",
    L = (0, l.P)(x),
    j = [L["aria-describedby"], C["aria-describedby"]].filter(Boolean).join(" ") || true,
    M = (0, c.z)(e),
    k = (0, h.useMemo)(() => (0, a.E7)(n), [n]),
    U = (0, h.useRef)(false),
    {
      focusWithinProps: G
    } = (0, p.L)({
      ...e,
      isDisabled: t.isOpen,
      onBlurWithin: t => {
        let n = document.getElementById(b);
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
    groupProps: (0, u.d)(M, P, C, L, G, {
      role: "group",
      "aria-disabled": e.isDisabled || null,
      "aria-labelledby": R,
      "aria-describedby": j,
      onKeyDown(n) {
        !t.isOpen && e.onKeyDown && e.onKeyDown(n)
      },
      onKeyUp(n) {
        !t.isOpen && e.onKeyUp && e.onKeyUp(n)
      }
    }),
    labelProps: {
      ...T,
      onClick: () => {
        k.focusFirst()
      }
    },
    fieldProps: {
      ...C,
      id: y,
      [i.KX]: "presentation",
      "aria-describedby": j,
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
      [d.tL]: t,
      autoFocus: e.autoFocus,
      name: e.name,
      form: e.form
    },
    descriptionProps: A,
    errorMessageProps: N,
    buttonProps: {
      ...L,
      id: E,
      "aria-haspopup": "dialog",
      "aria-label": O.format("calendar"),
      "aria-labelledby": `${E} ${R}`,
      "aria-describedby": j,
      "aria-expanded": t.isOpen,
      isDisabled: e.isDisabled || e.isReadOnly,
      onPress: () => t.setOpen(true)
    },
    dialogProps: {
      id: b,
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
    validationErrors: S,
    validationDetails: I
  }
}