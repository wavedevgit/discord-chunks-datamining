/** Chunk was on web.js **/
/** chunk id: 731359, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => d
});
var Chunk146968 = require("./146968.js"),
  Chunk803082 = require("./803082.js"),
  Chunk290424 = require("./290424.js"),
  Chunk702992 = require("./702992.js"),
  Chunk64700 = require("./64700.js"),
  Chunk8321 = require("./8321.js"),
  Chunk946020 = require("./946020.js"),
  Chunk96441 = require("./96441.js");

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
    onPressUp: y,
    onClick: b
  } = e, O = e.isDisabled || t.isDisabled, v = t.selectedValue === d, A = e => {
    e.stopPropagation(), t.setSelectedValue(d)
  }, {
    pressProps: I,
    isPressed: S
  } = (0, l.d)({
    onPressStart: h,
    onPressEnd: m,
    onPressChange: g,
    onPress: E,
    onPressUp: y,
    onClick: b,
    isDisabled: O
  }), {
    pressProps: T,
    isPressed: C
  } = (0, l.d)({
    onPressStart: h,
    onPressEnd: m,
    onPressChange: g,
    onPressUp: y,
    onClick: b,
    isDisabled: O,
    onPress(e) {
      var r;
      null == E || E(e), t.setSelectedValue(d), null == (r = n.current) || r.focus()
    }
  }), {
    focusableProps: N
  } = (0, c.Wc)((0, i.v)(e, {
    onFocus: () => t.setLastFocusedValue(d)
  }), n), w = (0, i.v)(I, N), R = (0, a.$)(e, {
    labelable: true
  }), P = false;
  null != t.selectedValue ? t.selectedValue === d && (P = 0) : (t.lastFocusedValue === d || null == t.lastFocusedValue) && (P = 0), O && (P = true);
  let {
    name: D,
    form: x,
    descriptionId: L,
    errorMessageId: j,
    validationBehavior: M
  } = r.V.get(t);
  return (0, s.F)(n, t.defaultSelectedValue, t.setSelectedValue), (0, u.X)({
    validationBehavior: M
  }, t, n), {
    labelProps: (0, i.v)(T, (0, o.useMemo)(() => ({
      onClick: e => e.preventDefault(),
      onMouseDown: e => e.preventDefault()
    }), [])),
    inputProps: (0, i.v)(R, {
      ...w,
      type: "radio",
      name: D,
      form: x,
      tabIndex: P,
      disabled: O,
      required: t.isRequired && "native" === M,
      checked: v,
      value: d,
      onChange: A,
      "aria-describedby": [e["aria-describedby"], t.isInvalid ? j : null, L].filter(Boolean).join(" ") || true
    }),
    isDisabled: O,
    isSelected: v,
    isPressed: S || C
  }
}