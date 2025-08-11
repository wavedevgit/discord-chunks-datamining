/** Chunk was on web.js **/
/** chunk id: 966390, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk570140 = require("./570140.js"),
  Chunk703558 = require("./703558.js"),
  Chunk62817 = require("./62817.js");
let a = {
  cancel(e, t) {
    r.Z.dispatch({
      type: "UPLOAD_CANCEL_REQUEST",
      channelId: e,
      file: t
    });
    let n = o.Z.getMessageForFile(t.id);
    null != n && "" === i.Z.getDraft(n.channel_id, i.d.ChannelMessage) && r.Z.dispatch({
      type: "DRAFT_SAVE",
      channelId: n.channel_id,
      draft: n.content,
      draftType: i.d.ChannelMessage
    })
  }
}