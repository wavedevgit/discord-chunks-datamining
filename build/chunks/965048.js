/** Chunk was on web.js **/
/** chunk id: 965048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c,
  c: () => l
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk458725 = require("./458725.js"),
  Chunk915525 = require("./915525.js"),
  Chunk65154 = require("./65154.js");

function l(e, t) {
  return (0, r.e7)([a.Z, i.default], () => {
    for (let n of i.default.getId() === t ? [...e === s.Yn.STREAM ? a.Z.getActiveErrorsOfType(o.u.SCREENSHARE_OS_ERROR) : [], ...a.Z.getActiveErrorsOfType(o.u.VIDEO_STREAM_SENDER_READY_TIMEOUT), ...a.Z.getActiveErrorsOfType(o.u.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM)] : [...a.Z.getActiveErrorsOfType(o.u.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), ...a.Z.getActiveErrorsOfType(o.u.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM)])
      if (n.mediaContext === e && n.userId === t) return n
  })
}

function c(e, t) {
  var n;
  return null == (n = l(e, t)) ? true : n.type
}