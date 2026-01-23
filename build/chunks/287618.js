/** Chunk was on 52786 **/
/** chunk id: 287618, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk31717 = require("./31717.js"),
  Chunk522602 = require("./522602.js"),
  Chunk256095 = require("./256095.js");

function c(e) {
  var t, n;
  let {
    channelId: c,
    localCreationAnswerId: s,
    image: u
  } = e, f = null == u ? true : u.emoji, d = (null == u || null == (t = u.mediaAttachmentState) ? true : t.status) === o.k.PREPARING, m = (0, l.bG)([i.A], () => i.A.getUpload(c, s, a.C.Poll)), [b, p] = r.useState(), [g, O] = r.useState("");
  return r.useEffect(() => {
    var e;
    if ((null == m || null == (e = m.item) ? true : e.file) == null) return;
    let t = URL.createObjectURL(m.item.file);
    return p(t), O(m.item.file.name), () => {
      URL.revokeObjectURL(t)
    }
  }, [null == m || null == (n = m.item) ? true : n.file]), {
    emoji: f,
    isLoadingMedia: d,
    hasUpload: null != m,
    upload: m,
    mediaUrl: b,
    mediaFilename: g
  }
}