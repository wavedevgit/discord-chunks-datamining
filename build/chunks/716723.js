/** Chunk was on 33622 **/
/** chunk id: 716723, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  k: () => p
});
var Chunk616868 = require("./616868.js"),
  Chunk933926 = require("./933926.js"),
  Chunk669231 = require("./669231.js"),
  Chunk750528 = require("./750528.js"),
  Chunk677061 = require("./677061.js"),
  Chunk682308 = require("./682308.js"),
  Chunk735437 = require("./735437.js"),
  Chunk43341 = require("./43341.js"),
  Chunk819129 = require("./819129.js"),
  Chunk923108 = require("./923108.js"),
  Chunk576173 = require("./576173.js"),
  Chunk970185 = require("./970185.js"),
  Chunk594886 = require("./594886.js"),
  Chunk647438 = require("./647438.js");

function p(e, a, t) {
  var p;
  let g = (0, o.Me)(),
    v = (0, o.Me)(),
    b = (0, o.Me)(),
    C = (0, h.q)((p = u.Z) && p.__esModule ? p.default : p, "@react-aria/datepicker"),
    {
      isInvalid: x,
      validationErrors: B,
      validationDetails: E
    } = a.displayValidation,
    {
      labelProps: F,
      fieldProps: w,
      descriptionProps: $,
      errorMessageProps: R
    } = (0, m.U)({
      ...e,
      labelElementType: "span",
      isInvalid: x,
      errorMessage: e.errorMessage || B
    }),
    Z = (0, r.H)(a, t),
    k = w["aria-labelledby"] || w.id,
    {
      locale: A
    } = (0, f.j)(),
    P = a.formatValue(A, {
      month: "long"
    }),
    S = P ? C.format("selectedDateDescription", {
      date: P
    }) : "",
    M = (0, l.P)(S),
    V = [M["aria-describedby"], w["aria-describedby"]].filter(Boolean).join(" ") || true,
    I = (0, s.z)(e),
    z = (0, y.useMemo)(() => (0, i.E7)(t), [t]),
    O = (0, y.useRef)(false),
    {
      focusWithinProps: j
    } = (0, D.L)({
      ...e,
      isDisabled: a.isOpen,
      onBlurWithin: a => {
        let t = document.getElementById(v);
        if (!(null == t ? true : t.contains(a.relatedTarget))) {
          var u, n;
          O.current = false, null == (u = e.onBlur) || u.call(e, a), null == (n = e.onFocusChange) || n.call(e, false)
        }
      },
      onFocusWithin: a => {
        if (!O.current) {
          var t, u;
          O.current = true, null == (t = e.onFocus) || t.call(e, a), null == (u = e.onFocusChange) || u.call(e, true)
        }
      }
    });
  return {
    groupProps: (0, d.d)(I, Z, w, M, j, {
      role: "group",
      "aria-disabled": e.isDisabled || null,
      "aria-labelledby": k,
      "aria-describedby": V,
      onKeyDown(t) {
        !a.isOpen && e.onKeyDown && e.onKeyDown(t)
      },
      onKeyUp(t) {
        !a.isOpen && e.onKeyUp && e.onKeyUp(t)
      }
    }),
    labelProps: {
      ...F,
      onClick: () => {
        z.focusFirst()
      }
    },
    fieldProps: {
      ...w,
      id: b,
      [n.KX]: "presentation",
      "aria-describedby": V,
      value: a.value,
      defaultValue: a.defaultValue,
      onChange: a.setValue,
      placeholderValue: e.placeholderValue,
      hideTimeZone: e.hideTimeZone,
      hourCycle: e.hourCycle,
      shouldForceLeadingZeros: e.shouldForceLeadingZeros,
      granularity: e.granularity,
      isDisabled: e.isDisabled,
      isReadOnly: e.isReadOnly,
      isRequired: e.isRequired,
      validationBehavior: e.validationBehavior,
      [c.tL]: a,
      autoFocus: e.autoFocus,
      name: e.name,
      form: e.form
    },
    descriptionProps: $,
    errorMessageProps: R,
    buttonProps: {
      ...M,
      id: g,
      "aria-haspopup": "dialog",
      "aria-label": C.format("calendar"),
      "aria-labelledby": `${g} ${k}`,
      "aria-describedby": V,
      "aria-expanded": a.isOpen,
      isDisabled: e.isDisabled || e.isReadOnly,
      onPress: () => a.setOpen(true)
    },
    dialogProps: {
      id: v,
      "aria-labelledby": `${g} ${k}`
    },
    calendarProps: {
      autoFocus: true,
      value: a.dateValue,
      onChange: a.setDateValue,
      minValue: e.minValue,
      maxValue: e.maxValue,
      isDisabled: e.isDisabled,
      isReadOnly: e.isReadOnly,
      isDateUnavailable: e.isDateUnavailable,
      defaultFocusedValue: a.dateValue ? true : e.placeholderValue,
      isInvalid: a.isInvalid,
      errorMessage: "function" == typeof e.errorMessage ? e.errorMessage(a.displayValidation) : e.errorMessage || a.displayValidation.validationErrors.join(" "),
      firstDayOfWeek: e.firstDayOfWeek,
      pageBehavior: e.pageBehavior
    },
    isInvalid: x,
    validationErrors: B,
    validationDetails: E
  }
}