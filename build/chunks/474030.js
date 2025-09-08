/** Chunk was on web.js **/
/** chunk id: 474030, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => l
});
var Chunk506523 = require("./506523.js"),
  Chunk753125 = require("./753125.js"),
  Chunk381557 = require("./381557.js"),
  Chunk592158 = require("./592158.js"),
  Chunk357161 = require("./357161.js");

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
  } = (0, s.kc)(e, n), P = (0, r.d)(S, R), w = (0, i.z)(e, {
    labelable: true
  });
  return (0, a.y)(n, t.defaultSelected, t.setSelected), {
    labelProps: (0, r.d)(C, {
      onClick: e => e.preventDefault()
    }),
    inputProps: (0, r.d)(w, {
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