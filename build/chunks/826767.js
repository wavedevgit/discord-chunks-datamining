/** Chunk was on web.js **/
/** chunk id: 826767, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk222823 = require("./222823.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js");

function s(e) {
  if (null == e.threadMetadata) return 0;
  let t = e.threadMetadata.autoArchiveDuration * i.A.Millis.MINUTE;
  return o(e) + t
}

function o(e) {
  var t;
  if (null == e.threadMetadata) return 0;
  let n = null != (t = r.Ay.lastMessageId(e.id)) ? t : e.id;
  return Math.max(a.default.extractTimestamp(n), null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0)
}