/** Chunk was on web.js **/
/** chunk id: 284054, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => s
});
var Chunk803082 = require("./803082.js"),
  Chunk290424 = require("./290424.js"),
  Chunk8321 = require("./8321.js"),
  Chunk946020 = require("./946020.js");

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
    allowFocusWhenDisabled: h,
    onClick: m,
    href: g,
    target: E,
    rel: y,
    type: b = "button"
  } = e;
  n = "button" === s ? {
    type: b,
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
    type: "input" === s ? b : true,
    disabled: "input" === s ? l : true,
    "aria-disabled": l && "input" !== s ? l : true,
    rel: "a" === s ? y : true
  };
  let {
    pressProps: O,
    isPressed: v
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
    focusableProps: A
  } = (0, o.Wc)(e, t);
  h && (A.tabIndex = l ? false : A.tabIndex);
  let I = (0, r.v)(A, O, (0, i.$)(e, {
    labelable: true
  }));
  return {
    isPressed: v,
    buttonProps: (0, r.v)(n, I, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"],
      "aria-disabled": e["aria-disabled"]
    })
  }
}