/** Chunk was on web.js **/
/** chunk id: 660187, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => s
});
var Chunk506364 = require("./506364.js"),
  Chunk436242 = require("./436242.js"),
  Chunk459613 = require("./459613.js"),
  Chunk312238 = require("./312238.js");

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
    disabled: l
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
      onClick: e => {
        m && (m(e), console.warn("onClick is deprecated, please use onPress"))
      }
    })
  }
}