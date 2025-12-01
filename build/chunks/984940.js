/** Chunk was on web.js **/
/** chunk id: 984940, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => s
});
var Chunk981166 = require("./981166.js"),
  Chunk114206 = require("./114206.js"),
  Chunk921448 = require("./921448.js"),
  Chunk473749 = require("./473749.js");

function s(e = {}) {
  let {
    autoFocus: t = false,
    isTextInput: n,
    within: l
  } = e, c = (0, o.useRef)({
    isFocused: false,
    isFocusVisible: t || (0, r.E)()
  }), [u, d] = (0, o.useState)(false), [f, p] = (0, o.useState)(() => c.current.isFocused && c.current.isFocusVisible), _ = (0, o.useCallback)(() => p(c.current.isFocused && c.current.isFocusVisible), []), m = (0, o.useCallback)(e => {
    c.current.isFocused = e, d(e), _()
  }, [_]);
  (0, r.mG)(e => {
    c.current.isFocusVisible = e, _()
  }, [], {
    isTextInput: n
  });
  let {
    focusProps: h
  } = (0, i.K)({
    isDisabled: l,
    onFocusChange: m
  }), {
    focusWithinProps: g
  } = (0, a.L)({
    isDisabled: !l,
    onFocusWithinChange: m
  });
  return {
    isFocused: u,
    isFocusVisible: f,
    focusProps: l ? g : h
  }
}