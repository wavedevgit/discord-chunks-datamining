/** Chunk was on web.js **/
/** chunk id: 3861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk977997 = require("./977997.js");

function s(e) {
  var t;
  let {
    channelId: n,
    userId: s,
    activity: o
  } = e, l = i.A.getChannel(n), c = (null == o ? true : o.session_id) == null || null != l && (0, r.pQ)(l.type) ? n : null == (t = a.A.getVoiceStateForSession(s, null == o ? true : o.session_id)) ? true : t.channelId;
  return null != c ? c : true
}