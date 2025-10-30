/** Chunk was on web.js **/
/** chunk id: 993341, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => s
});
var Chunk43341 = require("./43341.js"),
  Chunk735437 = require("./735437.js"),
  Chunk647199 = require("./647199.js"),
  Chunk752321 = require("./752321.js");

function s(e, t) {
  let n, {
    elementType: s = "button",
    isDisabled: l,
    onPress: c,
    onPressStart: u,
    onPressEnd: d,
    onPressUp: f,
    onPressChange: _,
    preventFocusOnPress: p,
    allowFocusWhenDisabled: h,
    onClick: m,
    href: g,
    target: E,
    rel: b,
    type: y = "button"
  } = e;
  n = "button" === s ? {
    type: y,
    disabled: l,
    form: e.form,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formMethod: e.formMethod,
    formNoValidate: e.formNoValidate,
    formTarget: e.formTarget,
    name: e.name,
    value: e.value
  } : {
    role: "button",
    href: "a" !== s || l ? true : g,
    target: "a" === s ? E : true,
    type: "input" === s ? y : true,
    disabled: "input" === s ? l : true,
    "aria-disabled": l && "input" !== s ? l : true,
    rel: "a" === s ? b : true
  };
  let {
    pressProps: O,
    isPressed: v
  } = (0, a.r)({
    onPressStart: u,
    onPressEnd: d,
    onPressChange: _,
    onPress: c,
    onPressUp: f,
    onClick: m,
    isDisabled: l,
    preventFocusOnPress: p,
    ref: t
  }), {
    focusableProps: I
  } = (0, o.kc)(e, t);
  h && (I.tabIndex = l ? false : I.tabIndex);
  let T = (0, r.d)(I, O, (0, i.z)(e, {
    labelable: true
  }));
  return {
    isPressed: v,
    buttonProps: (0, r.d)(n, T, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"],
      "aria-disabled": e["aria-disabled"]
    })
  }
}