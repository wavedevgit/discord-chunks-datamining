/** Chunk was on web.js **/
/** chunk id: 33777, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => d
});
var Chunk195620 = require("./195620.js"),
  Chunk158821 = require("./158821.js"),
  Chunk880016 = require("./880016.js"),
  Chunk179549 = require("./179549.js"),
  Chunk473749 = require("./473749.js"),
  Chunk226098 = require("./226098.js"),
  Chunk497448 = require("./497448.js"),
  Chunk746367 = require("./746367.js");

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
  }), D = false;
  null != t.selectedValue ? t.selectedValue === d && (D = 0) : (t.lastFocusedValue === d || null == t.lastFocusedValue) && (D = 0), O && (D = true);
  let {
    name: w,
    form: L,
    descriptionId: x,
    errorMessageId: M,
    validationBehavior: j
  } = r.H.get(t);
  return (0, o.y)(n, t.defaultSelectedValue, t.setSelectedValue), (0, u.Q)({
    validationBehavior: j
  }, t, n), {
    labelProps: (0, i.d)(A, (0, s.useMemo)(() => ({
      onClick: e => e.preventDefault(),
      onMouseDown: e => e.preventDefault()
    }), [])),
    inputProps: (0, i.d)(P, {
      ...R,
      type: "radio",
      name: w,
      form: L,
      tabIndex: D,
      disabled: O,
      required: t.isRequired && "native" === j,
      checked: v,
      value: d,
      onChange: I,
      "aria-describedby": [e["aria-describedby"], t.isInvalid ? M : null, x].filter(Boolean).join(" ") || true
    }),
    isDisabled: O,
    isSelected: v,
    isPressed: S || C
  }
}