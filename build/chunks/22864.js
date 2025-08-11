/** Chunk was on 74590 **/
/** chunk id: 22864, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk348327 = require("./348327.js"),
  a = require.n(Chunk348327),
  Chunk442837 = require("./442837.js"),
  Chunk566006 = require("./566006.js"),
  Chunk542578 = require("./542578.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  var t, n;
  let {
    channelId: l,
    messageId: c,
    reaction: d
  } = e, u = (0, s.e7)([i.Z], () => {
    var e;
    let t = i.Z.getReactions(l, c, d.emoji, o.pTL, r.O.VOTE);
    return Array.from(null != (e = null == t ? true : t.values()) ? e : [])
  }, [l, c, d.emoji], a());
  return {
    reactors: u,
    hasMore: (null != (n = null == (t = d.count_details) ? true : t.vote) ? n : 0) > u.length
  }
}