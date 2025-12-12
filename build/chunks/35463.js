/** Chunk was on 68784 **/
/** chunk id: 35463, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk703558 = require("./703558.js"),
  Chunk117530 = require("./117530.js"),
  Chunk524100 = require("./524100.js");

function c(e) {
  var t, n;
  let {
    channelId: c,
    localCreationAnswerId: s,
    image: u
  } = e, f = null == u ? true : u.emoji, d = (null == u || null == (t = u.mediaAttachmentState) ? true : t.status) === o._.PREPARING, m = (0, l.e7)([i.Z], () => i.Z.getUpload(c, s, a.d.Poll)), [p, b] = r.useState(), [g, j] = r.useState("");
  return r.useEffect(() => {
    var e;
    if ((null == m || null == (e = m.item) ? true : e.file) == null) return;
    let t = URL.createObjectURL(m.item.file);
    return b(t), j(m.item.file.name), () => {
      URL.revokeObjectURL(t)
    }
  }, [null == m || null == (n = m.item) ? true : n.file]), {
    emoji: f,
    isLoadingMedia: d,
    hasUpload: null != m,
    upload: m,
    mediaUrl: p,
    mediaFilename: g
  }
}