/** Chunk was on web.js **/
/** chunk id: 757260, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => l
});
var Chunk803082 = require("./803082.js"),
  Chunk290424 = require("./290424.js"),
  Chunk702992 = require("./702992.js"),
  Chunk8321 = require("./8321.js"),
  Chunk946020 = require("./946020.js");

function l(e, t, n) {
  let {
    isDisabled: l = false,
    isReadOnly: c = false,
    value: u,
    name: d,
    form: f,
    children: p,
    "aria-label": _,
    "aria-labelledby": h,
    validationState: m = "valid",
    isInvalid: g,
    onPressStart: E,
    onPressEnd: y,
    onPressChange: b,
    onPress: O,
    onPressUp: v,
    onClick: A
  } = e, I = e => {
    e.stopPropagation(), t.setSelected(e.target.checked)
  }, {
    pressProps: S,
    isPressed: T
  } = (0, s.d)({
    onPressStart: E,
    onPressEnd: y,
    onPressChange: b,
    onPress: O,
    onPressUp: v,
    onClick: A,
    isDisabled: l
  }), {
    pressProps: C,
    isPressed: N
  } = (0, s.d)({
    onPressStart: E,
    onPressEnd: y,
    onPressChange: b,
    onPressUp: v,
    onClick: A,
    onPress(e) {
      var r;
      null == O || O(e), t.toggle(), null == (r = n.current) || r.focus()
    },
    isDisabled: l || c
  }), {
    focusableProps: w
  } = (0, o.Wc)(e, n), R = (0, r.v)(S, w), P = (0, i.$)(e, {
    labelable: true
  });
  return (0, a.F)(n, t.defaultSelected, t.setSelected), {
    labelProps: (0, r.v)(C, {
      onClick: e => e.preventDefault()
    }),
    inputProps: (0, r.v)(P, {
      "aria-invalid": g || "invalid" === m || true,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": c || true,
      onChange: I,
      disabled: l,
      ...null == u ? {} : {
        value: u
      },
      name: d,
      form: f,
      type: "checkbox",
      ...R
    }),
    isSelected: t.isSelected,
    isPressed: T || N,
    isDisabled: l,
    isReadOnly: c,
    isInvalid: g || "invalid" === m
  }
}