/** Chunk was on web.js **/
/** chunk id: 842338, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => d
});
var Chunk46465 = require("./46465.js"),
  Chunk43341 = require("./43341.js"),
  Chunk735437 = require("./735437.js"),
  Chunk166435 = require("./166435.js"),
  Chunk647438 = require("./647438.js"),
  Chunk647199 = require("./647199.js"),
  Chunk752321 = require("./752321.js"),
  Chunk51386 = require("./51386.js");

function d(e, t, n) {
  let {
    value: d,
    children: f,
    "aria-label": _,
    "aria-labelledby": p,
    onPressStart: h,
    onPressEnd: m,
    onPressChange: g,
    onPress: E,
    onPressUp: b,
    onClick: y
  } = e, O = e.isDisabled || t.isDisabled, v = t.selectedValue === d, I = e => {
    e.stopPropagation(), t.setSelectedValue(d)
  }, {
    pressProps: T,
    isPressed: S
  } = (0, l.r)({
    onPressStart: h,
    onPressEnd: m,
    onPressChange: g,
    onPress: E,
    onPressUp: b,
    onClick: y,
    isDisabled: O
  }), {
    pressProps: A,
    isPressed: C
  } = (0, l.r)({
    onPressStart: h,
    onPressEnd: m,
    onPressChange: g,
    onPressUp: b,
    onClick: y,
    isDisabled: O,
    onPress(e) {
      var r;
      null == E || E(e), t.setSelectedValue(d), null == (r = n.current) || r.focus()
    }
  }), {
    focusableProps: N
  } = (0, c.kc)((0, i.d)(e, {
    onFocus: () => t.setLastFocusedValue(d)
  }), n), R = (0, i.d)(T, N), P = (0, a.z)(e, {
    labelable: true
  }), w = false;
  null != t.selectedValue ? t.selectedValue === d && (w = 0) : (t.lastFocusedValue === d || null == t.lastFocusedValue) && (w = 0), O && (w = true);
  let {
    name: D,
    form: x,
    descriptionId: L,
    errorMessageId: M,
    validationBehavior: k
  } = r.H.get(t);
  return (0, o.y)(n, t.defaultSelectedValue, t.setSelectedValue), (0, u.Q)({
    validationBehavior: k
  }, t, n), {
    labelProps: (0, i.d)(A, (0, s.useMemo)(() => ({
      onClick: e => e.preventDefault(),
      onMouseDown: e => e.preventDefault()
    }), [])),
    inputProps: (0, i.d)(P, {
      ...R,
      type: "radio",
      name: D,
      form: x,
      tabIndex: w,
      disabled: O,
      required: t.isRequired && "native" === k,
      checked: v,
      value: d,
      onChange: I,
      "aria-describedby": [e["aria-describedby"], t.isInvalid ? M : null, L].filter(Boolean).join(" ") || true
    }),
    isDisabled: O,
    isSelected: v,
    isPressed: S || C
  }
}