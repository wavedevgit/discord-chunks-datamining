/** Chunk was on web.js **/
/** chunk id: 340101, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Aw: () => l,
  C5: () => c,
  Tu: () => a,
  ZL: () => o,
  js: () => s,
  kL: () => i
});
var Chunk981631 = require("./981631.js"),
  i = function(e) {
    return e[e.GENERIC = 0] = "GENERIC", e[e.TEXT = 1] = "TEXT", e[e.INCOMING_CALL = 2] = "INCOMING_CALL", e[e.NUDGE = 3] = "NUDGE", e
  }({}),
  a = function(e) {
    return e[e.NORMAL = 0] = "NORMAL", e[e.HIGH = 1] = "HIGH", e[e.URGENT = 2] = "URGENT", e
  }({});

function o(e) {
  return (null == e ? true : e.type) === r.Odu.GO_LIVE
}

function s(e) {
  return e.type === r.Odu.VIDEO
}

function l(e) {
  return e.type === r.Odu.VOICE_V3
}
var c = function(e) {
  return e.HORIZONTAL = "horizontal", e.VERTICAL = "vertical", e
}({})