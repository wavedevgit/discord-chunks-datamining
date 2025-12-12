/** Chunk was on 68784 **/
/** chunk id: 485168, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk263568 = require("./263568.js"),
  Chunk367907 = require("./367907.js"),
  Chunk981631 = require("./981631.js");

function o(e, t) {
  return {
    trackPollCreationCancelled: r.useCallback(() => {
      let n = 0,
        r = 0,
        o = 0;
      e.forEach(e => {
        let t = e.image;
        null != t && (null != t.emoji ? r += 1 : null != t.stickerId ? o += 1 : null != t.mediaAttachmentState && (n += 1))
      }), a.ZP.trackWithMetadata(i.rMx.POLL_CREATION_CANCELLED, {
        answers_count: e.length,
        attachments_count: n,
        emojis_count: r,
        stickers_count: o,
        allow_multiselect: t,
        layout_type: l.C.DEFAULT
      })
    }, [e, t])
  }
}