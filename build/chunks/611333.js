/** Chunk was on web.js **/
/** chunk id: 611333, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => l
});
var Chunk586235 = require("./586235.js"),
  Chunk436773 = require("./436773.js"),
  Chunk408558 = require("./408558.js"),
  Chunk146810 = require("./146810.js"),
  Chunk600711 = require("./600711.js");

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