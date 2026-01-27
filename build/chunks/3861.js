/** Chunk was on web.js **/
/** chunk id: 3861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk977997 = require("./977997.js");

function o(e) {
  var t;
  let {
    channelId: n,
    userId: o,
    activity: s
  } = e, l = i.A.getChannel(n), c = (null == s ? true : s.session_id) == null || null != l && (0, r.pQ)(l.type) ? n : null == (t = a.A.getVoiceStateForSession(o, null == s ? true : s.session_id)) ? true : t.channelId;
  return null != c ? c : true
}