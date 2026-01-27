/** Chunk was on 94857 **/
/** chunk id: 387408, original params: e,s,t (module,exports,require) **/
require.d(exports, {
  A: () => l
}), require("./938796.js");
var Chunk427930 = require("./427930.js");

function l(e, s) {
  return null == (s = null != s ? s : (0, n.A)(e) ? e.messageSnapshots[0] : true) ? e : e.merge({
    content: s.message.content,
    attachments: s.message.attachments,
    embeds: s.message.embeds,
    flags: s.message.flags,
    components: s.message.components,
    editedTimestamp: null,
    timestamp: s.message.timestamp,
    codedLinks: s.message.codedLinks,
    reactions: [],
    messageSnapshots: [],
    stickers: s.message.stickers,
    stickerItems: s.message.stickerItems,
    customRenderedContent: null
  })
}