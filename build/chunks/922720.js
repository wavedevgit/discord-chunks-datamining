/** Chunk was on web.js **/
/** chunk id: 922720, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => u
});
var Chunk45821 = require("./45821.js"),
  Chunk586235 = require("./586235.js"),
  Chunk436773 = require("./436773.js"),
  Chunk408558 = require("./408558.js"),
  Chunk146810 = require("./146810.js"),
  Chunk600711 = require("./600711.js"),
  Chunk300319 = require("./300319.js");

function u(e, t, n) {
  let {
    value: u,
    children: d,
    "aria-label": f,
    "aria-labelledby": _,
    onPressStart: p,
    onPressEnd: h,
    onPressChange: m,
    onPress: g,
    onPressUp: E,
    onClick: b
  } = e, y = e.isDisabled || t.isDisabled, O = t.selectedValue === u, v = e => {
    e.stopPropagation(), t.setSelectedValue(u)
  }, {
    pressProps: I,
    isPressed: T
  } = (0, s.r)({
    onPressStart: p,
    onPressEnd: h,
    onPressChange: m,
    onPress: g,
    onPressUp: E,
    onClick: b,
    isDisabled: y
  }), {
    pressProps: S,
    isPressed: A
  } = (0, s.r)({
    onPressStart: p,
    onPressEnd: h,
    onPressChange: m,
    onPressUp: E,
    onClick: b,
    isDisabled: y,
    onPress(e) {
      var r;
      null == g || g(e), t.setSelectedValue(u), null == (r = n.current) || r.focus()
    }
  }), {
    focusableProps: C
  } = (0, l.kc)((0, i.d)(e, {
    onFocus: () => t.setLastFocusedValue(u)
  }), n), N = (0, i.d)(I, C), R = (0, a.z)(e, {
    labelable: true
  }), P = false;
  null != t.selectedValue ? t.selectedValue === u && (P = 0) : (t.lastFocusedValue === u || null == t.lastFocusedValue) && (P = 0), y && (P = true);
  let {
    name: w,
    form: D,
    descriptionId: x,
    errorMessageId: L,
    validationBehavior: M
  } = r.H.get(t);
  return (0, o.y)(n, t.defaultSelectedValue, t.setSelectedValue), (0, c.Q)({
    validationBehavior: M
  }, t, n), {
    labelProps: (0, i.d)(S, {
      onClick: e => e.preventDefault()
    }),
    inputProps: (0, i.d)(R, {
      ...N,
      type: "radio",
      name: w,
      form: D,
      tabIndex: P,
      disabled: y,
      required: t.isRequired && "native" === M,
      checked: O,
      value: u,
      onChange: v,
      "aria-describedby": [e["aria-describedby"], t.isInvalid ? L : null, x].filter(Boolean).join(" ") || true
    }),
    isDisabled: y,
    isSelected: O,
    isPressed: T || A
  }
}