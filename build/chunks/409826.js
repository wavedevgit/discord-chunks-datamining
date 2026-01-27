/** Chunk was on web.js **/
/** chunk id: 409826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => l,
  z: () => s
});
var Chunk947320 = require("./947320.js"),
  Chunk205693 = require("./205693.js"),
  Chunk824744 = require("./824744.js"),
  Chunk355097 = require("./355097.js");

function s(e, t) {
  let n = t === i.x.STREAM ? r.i.STREAM : r.i.USER;
  return 1 > Math.abs((0, a.M)(n) - (0, a.M)(e)) ? n : e
}

function l(e) {
  switch (e) {
    case i.x.DEFAULT:
      return o.W.USER;
    case i.x.STREAM:
      return o.W.STREAM;
    default:
      return
  }
}