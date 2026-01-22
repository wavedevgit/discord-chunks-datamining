/** Chunk was on 52786 **/
/** chunk id: 57359, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk966974 = require("./966974.js"),
  Chunk58149 = require("./58149.js"),
  Chunk652215 = require("./652215.js");

function o(e, t) {
  return {
    trackPollCreationCancelled: r.useCallback(() => {
      let n = 0,
        r = 0,
        o = 0;
      e.forEach(e => {
        let t = e.image;
        null != t && (null != t.emoji ? r += 1 : null != t.stickerId ? o += 1 : null != t.mediaAttachmentState && (n += 1))
      }), a.Ay.trackWithMetadata(i.HAw.POLL_CREATION_CANCELLED, {
        answers_count: e.length,
        attachments_count: n,
        emojis_count: r,
        stickers_count: o,
        allow_multiselect: t,
        layout_type: l.Z.DEFAULT
      })
    }, [e, t])
  }
}