/** Chunk was on web.js **/
/** chunk id: 260762, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk884362 = require("./884362.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js");

function o() {
  return Promise.resolve()
}

function s(e) {
  let t = document.querySelector(e);
  null != t && t.focus()
}

function l(e, t) {
  let n = (0, i.bG)([a.A], () => a.A.keyboardModeEnabled);
  return (0, r.Ay)({
    id: e,
    isEnabled: n,
    orientation: t,
    setFocus: s,
    scrollToStart: o,
    scrollToEnd: o
  })
}