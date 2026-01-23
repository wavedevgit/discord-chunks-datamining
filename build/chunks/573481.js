/** Chunk was on 80966 **/
/** chunk id: 573481, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk812729 = require("./812729.js"),
  s = require.n(Chunk812729),
  Chunk311907 = require("./311907.js"),
  Chunk505527 = require("./505527.js"),
  Chunk956703 = require("./956703.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  var l, t;
  let {
    channelId: n,
    messageId: c,
    reaction: d
  } = e, u = (0, a.bG)([r.A], () => {
    var e;
    let l = r.A.getReactions(n, c, d.emoji, o.WxW, i.v.VOTE);
    return Array.from(null != (e = null == l ? true : l.values()) ? e : [])
  }, [n, c, d.emoji], s());
  return {
    reactors: u,
    hasMore: (null != (l = null == (t = d.count_details) ? true : t.vote) ? l : 0) > u.length
  }
}