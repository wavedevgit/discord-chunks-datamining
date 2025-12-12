/** Chunk was on web.js **/
/** chunk id: 209613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk924826 = require("./924826.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js");

function o() {
  return Promise.resolve()
}

function s(e) {
  let t = document.querySelector(e);
  null != t && t.focus()
}

function l(e, t) {
  let n = (0, i.e7)([a.Z], () => a.Z.keyboardModeEnabled);
  return (0, r.ZP)({
    id: e,
    isEnabled: n,
    orientation: t,
    setFocus: s,
    scrollToStart: o,
    scrollToEnd: o
  })
}