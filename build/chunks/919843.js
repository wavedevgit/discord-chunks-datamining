/** Chunk was on 71447 **/
/** chunk id: 919843, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => o
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk308528 = require("./308528.js"),
  Chunk95701 = require("./95701.js");
let a = new Set;
async function o(e) {
  if (!a.has(e)) {
    a.add(e);
    try {
      var t, n, o;
      let a = await r.A.fetchChannel(e),
        s = (0, l.UE)(a);
      i.h.dispatch({
        type: "CHANNEL_CREATE",
        channel: s
      });
      let u = null != (t = null != (n = null == (o = s.getGuildId) ? true : o.call(s)) ? n : s.guild_id) ? t : null;
      if (null != u) return void r.A.preload(u, s.id)
    } catch (e) {}
  }
}