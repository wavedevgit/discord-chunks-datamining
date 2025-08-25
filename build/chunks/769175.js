/** Chunk was on web.js **/
/** chunk id: 769175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => s
});
var Chunk938264 = require("./938264.js"),
  Chunk827081 = require("./827081.js"),
  Chunk71734 = require("./71734.js"),
  Chunk647438 = require("./647438.js");

function s(e = {}) {
  let {
    autoFocus: t = false,
    isTextInput: n,
    within: l
  } = e, c = (0, a.useRef)({
    isFocused: false,
    isFocusVisible: t || (0, r.E)()
  }), [u, d] = (0, a.useState)(false), [f, _] = (0, a.useState)(() => c.current.isFocused && c.current.isFocusVisible), p = (0, a.useCallback)(() => _(c.current.isFocused && c.current.isFocusVisible), []), h = (0, a.useCallback)(e => {
    c.current.isFocused = e, d(e), p()
  }, [p]);
  (0, r.mG)(e => {
    c.current.isFocusVisible = e, p()
  }, [], {
    isTextInput: n
  });
  let {
    focusProps: m
  } = (0, i.K)({
    isDisabled: l,
    onFocusChange: h
  }), {
    focusWithinProps: g
  } = (0, o.L)({
    isDisabled: !l,
    onFocusWithinChange: h
  });
  return {
    isFocused: u,
    isFocusVisible: f,
    focusProps: l ? g : m
  }
}