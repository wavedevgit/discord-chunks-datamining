/** Chunk was on web.js **/
/** chunk id: 975898, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => l
});
var Chunk158821 = require("./158821.js"),
  Chunk880016 = require("./880016.js"),
  Chunk179549 = require("./179549.js"),
  Chunk226098 = require("./226098.js"),
  Chunk497448 = require("./497448.js");

function l(e, t, n) {
  let {
    isDisabled: l = false,
    isReadOnly: c = false,
    value: u,
    name: d,
    form: f,
    children: _,
    "aria-label": p,
    "aria-labelledby": h,
    validationState: m = "valid",
    isInvalid: g,
    onPressStart: E,
    onPressEnd: b,
    onPressChange: y,
    onPress: O,
    onPressUp: v,
    onClick: I
  } = e, T = e => {
    e.stopPropagation(), t.setSelected(e.target.checked)
  }, {
    pressProps: S,
    isPressed: A
  } = (0, o.r)({
    onPressStart: E,
    onPressEnd: b,
    onPressChange: y,
    onPress: O,
    onPressUp: v,
    onClick: I,
    isDisabled: l
  }), {
    pressProps: C,
    isPressed: N
  } = (0, o.r)({
    onPressStart: E,
    onPressEnd: b,
    onPressChange: y,
    onPressUp: v,
    onClick: I,
    onPress(e) {
      var r;
      null == O || O(e), t.toggle(), null == (r = n.current) || r.focus()
    },
    isDisabled: l || c
  }), {
    focusableProps: R
  } = (0, s.kc)(e, n), P = (0, r.d)(S, R), D = (0, i.z)(e, {
    labelable: true
  });
  return (0, a.y)(n, t.defaultSelected, t.setSelected), {
    labelProps: (0, r.d)(C, {
      onClick: e => e.preventDefault()
    }),
    inputProps: (0, r.d)(D, {
      "aria-invalid": g || "invalid" === m || true,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": c || true,
      onChange: T,
      disabled: l,
      ...null == u ? {} : {
        value: u
      },
      name: d,
      form: f,
      type: "checkbox",
      ...P
    }),
    isSelected: t.isSelected,
    isPressed: A || N,
    isDisabled: l,
    isReadOnly: c,
    isInvalid: g || "invalid" === m
  }
}