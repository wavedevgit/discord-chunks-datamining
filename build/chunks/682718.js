/** Chunk was on web.js **/
/** chunk id: 682718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk73153 = require("./73153.js"),
  Chunk31717 = require("./31717.js"),
  Chunk399263 = require("./399263.js");
let o = {
  cancel(e, t) {
    r.h.dispatch({
      type: "UPLOAD_CANCEL_REQUEST",
      channelId: e,
      file: t
    });
    let n = a.A.getMessageForFile(t.id);
    null == n || "" === i.A.getDraft(n.channel_id, i.C.ChannelMessage) && r.h.dispatch({
      type: "DRAFT_SAVE",
      channelId: n.channel_id,
      draft: n.content,
      draftType: i.C.ChannelMessage
    })
  }
}