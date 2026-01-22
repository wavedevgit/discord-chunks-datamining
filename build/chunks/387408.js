/** Chunk was on web.js **/
/** chunk id: 387408, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
}), require("./938796.js");
var Chunk427930 = require("./427930.js");

function i(e, t) {
  return null == (t = null != t ? t : (0, r.A)(e) ? e.messageSnapshots[0] : true) ? e : e.merge({
    content: t.message.content,
    attachments: t.message.attachments,
    embeds: t.message.embeds,
    flags: t.message.flags,
    components: t.message.components,
    editedTimestamp: null,
    timestamp: t.message.timestamp,
    codedLinks: t.message.codedLinks,
    reactions: [],
    messageSnapshots: [],
    stickers: t.message.stickers,
    stickerItems: t.message.stickerItems,
    customRenderedContent: null
  })
}