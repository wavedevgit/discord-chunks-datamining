/** Chunk was on web.js **/
/** chunk id: 736045, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk979651 = require("./979651.js");

function o() {
  let e = a.Z.getVoiceStateForSession(r.default.getId(), r.default.getSessionId()),
    t = null == e ? true : e.channelId;
  return i.Z.getChannel(t)
}