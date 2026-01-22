/** Chunk was on 80966 **/
/** chunk id: 573481, original params: e,l,a (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk812729 = require("./812729.js"),
  s = require.n(Chunk812729),
  Chunk311907 = require("./311907.js"),
  Chunk505527 = require("./505527.js"),
  Chunk956703 = require("./956703.js"),
  Chunk652215 = require("./652215.js");

function d(e) {
  var l, a;
  let {
    channelId: t,
    messageId: d,
    reaction: c
  } = e, u = (0, n.bG)([r.A], () => {
    var e;
    let l = r.A.getReactions(t, d, c.emoji, o.WxW, i.v.VOTE);
    return Array.from(null != (e = null == l ? true : l.values()) ? e : [])
  }, [t, d, c.emoji], s());
  return {
    reactors: u,
    hasMore: (null != (l = null == (a = c.count_details) ? true : a.vote) ? l : 0) > u.length
  }
}