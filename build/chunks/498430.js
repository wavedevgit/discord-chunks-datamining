/** Chunk was on web.js **/
/** chunk id: 498430, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => s
});
var Chunk885714 = require("./885714.js"),
  Chunk628024 = require("./628024.js"),
  Chunk744493 = require("./744493.js"),
  Chunk64700 = require("./64700.js");

function s(e = {}) {
  let {
    autoFocus: t = false,
    isTextInput: n,
    within: l
  } = e, c = (0, o.useRef)({
    isFocused: false,
    isFocusVisible: t || (0, r.pP)()
  }), [u, d] = (0, o.useState)(false), [f, p] = (0, o.useState)(() => c.current.isFocused && c.current.isFocusVisible), _ = (0, o.useCallback)(() => p(c.current.isFocused && c.current.isFocusVisible), []), h = (0, o.useCallback)(e => {
    c.current.isFocused = e, d(e), _()
  }, [_]);
  (0, r.K7)(e => {
    c.current.isFocusVisible = e, _()
  }, [], {
    isTextInput: n
  });
  let {
    focusProps: m
  } = (0, i.i)({
    isDisabled: l,
    onFocusChange: h
  }), {
    focusWithinProps: g
  } = (0, a.R)({
    isDisabled: !l,
    onFocusWithinChange: h
  });
  return {
    isFocused: u,
    isFocusVisible: f,
    focusProps: l ? g : m
  }
}