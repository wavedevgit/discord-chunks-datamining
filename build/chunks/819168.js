/** Chunk was on web.js **/
/** chunk id: 819168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk306680 = require("./306680.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js");

function a(e) {
  if (null == e.threadMetadata) return 0;
  let t = e.threadMetadata.autoArchiveDuration * i.Z.Millis.MINUTE;
  return s(e) + t
}

function s(e) {
  var t;
  if (null == e.threadMetadata) return 0;
  let n = null != (t = r.ZP.lastMessageId(e.id)) ? t : e.id;
  return Math.max(o.default.extractTimestamp(n), null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0)
}