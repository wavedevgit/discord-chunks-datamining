/** Chunk was on web.js **/
/** chunk id: 340332, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => s,
  z: () => l
});
var Chunk51407 = require("./51407.js"),
  Chunk46973 = require("./46973.js"),
  Chunk36703 = require("./36703.js"),
  Chunk526761 = require("./526761.js");

function s(e, t) {
  let n = t === i.Yn.STREAM ? r.h.STREAM : r.h.USER;
  return 1 > Math.abs((0, a.P)(n) - (0, a.P)(e)) ? n : e
}

function l(e) {
  switch (e) {
    case i.Yn.DEFAULT:
      return o.u0.USER;
    case i.Yn.STREAM:
      return o.u0.STREAM;
    default:
      return
  }
}