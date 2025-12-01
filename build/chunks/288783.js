/** Chunk was on web.js **/
/** chunk id: 288783, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => s
});
var Chunk158821 = require("./158821.js"),
  Chunk880016 = require("./880016.js"),
  Chunk226098 = require("./226098.js"),
  Chunk497448 = require("./497448.js");

function s(e, t) {
  let n, {
    elementType: s = "button",
    isDisabled: l,
    onPress: c,
    onPressStart: u,
    onPressEnd: d,
    onPressUp: f,
    onPressChange: p,
    preventFocusOnPress: _,
    allowFocusWhenDisabled: m,
    onClick: h,
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
    onPressChange: p,
    onPress: c,
    onPressUp: f,
    onClick: h,
    isDisabled: l,
    preventFocusOnPress: _,
    ref: t
  }), {
    focusableProps: S
  } = (0, o.kc)(e, t);
  m && (S.tabIndex = l ? false : S.tabIndex);
  let I = (0, r.d)(S, O, (0, i.z)(e, {
    labelable: true
  }));
  return {
    isPressed: v,
    buttonProps: (0, r.d)(n, I, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"],
      "aria-disabled": e["aria-disabled"]
    })
  }
}