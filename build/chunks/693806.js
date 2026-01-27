/** Chunk was on web.js **/
/** chunk id: 693806, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk977997 = require("./977997.js");

function o() {
  let e = a.A.getVoiceStateForSession(r.default.getId(), r.default.getSessionId()),
    t = null == e ? true : e.channelId;
  return i.A.getChannel(t)
}