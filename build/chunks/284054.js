/** Chunk was on web.js **/
/** chunk id: 284054, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => o
});
var Chunk803082 = require("./803082.js"),
  Chunk290424 = require("./290424.js"),
  Chunk8321 = require("./8321.js"),
  Chunk946020 = require("./946020.js");

function o(e, t) {
  let n, {
    elementType: o = "button",
    isDisabled: l,
    onPress: c,
    onPressStart: u,
    onPressEnd: d,
    onPressUp: f,
    onPressChange: p,
    preventFocusOnPress: _,
    allowFocusWhenDisabled: h,
    onClick: m,
    href: g,
    target: E,
    rel: b,
    type: y = "button"
  } = e;
  n = "button" === o ? {
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
    href: "a" !== o || l ? true : g,
    target: "a" === o ? E : true,
    type: "input" === o ? y : true,
    disabled: "input" === o ? l : true,
    "aria-disabled": l && "input" !== o ? l : true,
    rel: "a" === o ? b : true
  };
  let {
    pressProps: O,
    isPressed: A
  } = (0, a.d)({
    onPressStart: u,
    onPressEnd: d,
    onPressChange: p,
    onPress: c,
    onPressUp: f,
    onClick: m,
    isDisabled: l,
    preventFocusOnPress: _,
    ref: t
  }), {
    focusableProps: v
  } = (0, s.Wc)(e, t);
  h && (v.tabIndex = l ? false : v.tabIndex);
  let S = (0, r.v)(v, O, (0, i.$)(e, {
    labelable: true
  }));
  return {
    isPressed: A,
    buttonProps: (0, r.v)(n, S, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"],
      "aria-disabled": e["aria-disabled"]
    })
  }
}