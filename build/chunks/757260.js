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
    onPressEnd: b,
    onPressChange: y,
    onPress: O,
    onPressUp: A,
    onClick: v
  } = e, S = e => {
    e.stopPropagation(), t.setSelected(e.target.checked)
  }, {
    pressProps: I,
    isPressed: T
  } = (0, s.d)({
    onPressStart: E,
    onPressEnd: b,
    onPressChange: y,
    onPress: O,
    onPressUp: A,
    onClick: v,
    isDisabled: l
  }), {
    pressProps: C,
    isPressed: N
  } = (0, s.d)({
    onPressStart: E,
    onPressEnd: b,
    onPressChange: y,
    onPressUp: A,
    onClick: v,
    onPress(e) {
      var r;
      null == O || O(e), t.toggle(), null == (r = n.current) || r.focus()
    },
    isDisabled: l || c
  }), {
    focusableProps: R
  } = (0, o.Wc)(e, n), w = (0, r.v)(I, R), P = (0, i.$)(e, {
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
      onChange: S,
      disabled: l,
      ...null == u ? {} : {
        value: u
      },
      name: d,
      form: f,
      type: "checkbox",
      ...w
    }),
    isSelected: t.isSelected,
    isPressed: T || N,
    isDisabled: l,
    isReadOnly: c,
    isInvalid: g || "invalid" === m
  }
}