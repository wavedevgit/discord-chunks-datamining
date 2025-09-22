/** Chunk was on web.js **/
/** chunk id: 264195, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => s
});
var Chunk998925 = require("./998925.js"),
  Chunk783849 = require("./783849.js"),
  Chunk764075 = require("./764075.js"),
  Chunk647438 = require("./647438.js");

function s(e = {}) {
  let {
    autoFocus: t = false,
    isTextInput: n,
    within: l
  } = e, c = (0, o.useRef)({
    isFocused: false,
    isFocusVisible: t || (0, r.E)()
  }), [u, d] = (0, o.useState)(false), [f, _] = (0, o.useState)(() => c.current.isFocused && c.current.isFocusVisible), p = (0, o.useCallback)(() => _(c.current.isFocused && c.current.isFocusVisible), []), h = (0, o.useCallback)(e => {
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
  } = (0, a.L)({
    isDisabled: !l,
    onFocusWithinChange: h
  });
  return {
    isFocused: u,
    isFocusVisible: f,
    focusProps: l ? g : m
  }
}