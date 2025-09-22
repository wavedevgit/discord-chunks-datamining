/** Chunk was on web.js **/
/** chunk id: 611333, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => l
});
var Chunk506364 = require("./506364.js"),
  Chunk436242 = require("./436242.js"),
  Chunk571818 = require("./571818.js"),
  Chunk459613 = require("./459613.js"),
  Chunk312238 = require("./312238.js");

function l(e, t, n) {
  let {
    isDisabled: l = false,
    isReadOnly: c = false,
    value: u,
    name: d,
    children: f,
    "aria-label": _,
    "aria-labelledby": p,
    validationState: h = "valid",
    isInvalid: m
  } = e, g = e => {
    e.stopPropagation(), t.setSelected(e.target.checked)
  }, E = null != _ || null != p;
  null != f || E || console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let {
    pressProps: b,
    isPressed: y
  } = (0, o.r)({
    isDisabled: l
  }), {
    pressProps: O,
    isPressed: v
  } = (0, o.r)({
    onPress() {
      var e;
      t.toggle(), null == (e = n.current) || e.focus()
    },
    isDisabled: l || c
  }), {
    focusableProps: I
  } = (0, s.kc)(e, n), T = (0, r.d)(b, I), S = (0, i.z)(e, {
    labelable: true
  });
  return (0, a.y)(n, t.isSelected, t.setSelected), {
    labelProps: (0, r.d)(O, {
      onClick: e => e.preventDefault()
    }),
    inputProps: (0, r.d)(S, {
      "aria-invalid": m || "invalid" === h || true,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": c || true,
      onChange: g,
      disabled: l,
      ...null == u ? {} : {
        value: u
      },
      name: d,
      type: "checkbox",
      ...T
    }),
    isSelected: t.isSelected,
    isPressed: y || v,
    isDisabled: l,
    isReadOnly: c,
    isInvalid: m || "invalid" === h
  }
}