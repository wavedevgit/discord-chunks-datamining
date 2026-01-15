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
    "aria-label": p,
    "aria-labelledby": _,
    onPressStart: h,
    onPressEnd: m,
    onPressChange: g,
    onPress: E,
    onPressUp: b,
    onClick: y
  } = e, O = e.isDisabled || t.isDisabled, v = t.selectedValue === d, S = e => {
    e.stopPropagation(), t.setSelectedValue(d)
  }, {
    pressProps: I,
    isPressed: T
  } = (0, l.r)({
    onPressStart: h,
    onPressEnd: m,
    onPressChange: g,
    onPress: E,
    onPressUp: b,
    onClick: y,
    isDisabled: O
  }), {
    pressProps: C,
    isPressed: A
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
  }), n), P = (0, i.d)(I, N), w = (0, a.z)(e, {
    labelable: true
  }), R = false;
  null != t.selectedValue ? t.selectedValue === d && (R = 0) : (t.lastFocusedValue === d || null == t.lastFocusedValue) && (R = 0), O && (R = true);
  let {
    name: D,
    form: x,
    descriptionId: L,
    errorMessageId: j,
    validationBehavior: M
  } = r.H.get(t);
  return (0, o.y)(n, t.defaultSelectedValue, t.setSelectedValue), (0, u.Q)({
    validationBehavior: M
  }, t, n), {
    labelProps: (0, i.d)(C, (0, s.useMemo)(() => ({
      onClick: e => e.preventDefault(),
      onMouseDown: e => e.preventDefault()
    }), [])),
    inputProps: (0, i.d)(w, {
      ...P,
      type: "radio",
      name: D,
      form: x,
      tabIndex: R,
      disabled: O,
      required: t.isRequired && "native" === M,
      checked: v,
      value: d,
      onChange: S,
      "aria-describedby": [e["aria-describedby"], t.isInvalid ? j : null, L].filter(Boolean).join(" ") || true
    }),
    isDisabled: O,
    isSelected: v,
    isPressed: T || A
  }
}