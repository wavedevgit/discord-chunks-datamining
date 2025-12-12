/** Chunk was on web.js **/
/** chunk id: 452634, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk979651 = require("./979651.js");

function o(e) {
  var t;
  let {
    channelId: n,
    userId: o,
    activity: s
  } = e, l = i.Z.getChannel(n), c = (null == s ? true : s.session_id) == null || null != l && (0, r.Qm)(l.type) ? n : null == (t = a.Z.getVoiceStateForSession(o, null == s ? true : s.session_id)) ? true : t.channelId;
  return null != c ? c : true
}