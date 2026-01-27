/** Chunk was on web.js **/
/** chunk id: 525505, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c,
  u: () => l
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk487329 = require("./487329.js"),
  Chunk161518 = require("./161518.js"),
  Chunk731854 = require("./731854.js");

function l(e, t) {
  return (0, r.bG)([o.A, i.default], () => {
    for (let n of i.default.getId() === t ? [...e === s.x.STREAM ? o.A.getActiveErrorsOfType(a.iy.SCREENSHARE_OS_ERROR) : [], ...o.A.getActiveErrorsOfType(a.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT), ...o.A.getActiveErrorsOfType(a.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM)] : [...o.A.getActiveErrorsOfType(a.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), ...o.A.getActiveErrorsOfType(a.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM)])
      if (n.mediaContext === e && n.userId === t) return n
  })
}

function c(e, t) {
  var n;
  return null == (n = l(e, t)) ? true : n.type
}