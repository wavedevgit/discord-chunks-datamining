/** Chunk was on 52199 **/
/** chunk id: 775427, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  J: () => d
});
var Chunk33851 = require("./33851.js"),
  l = require.n(Chunk33851),
  Chunk311907 = require("./311907.js"),
  Chunk253932 = require("./253932.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk967198 = require("./967198.js"),
  Chunk652215 = require("./652215.js");

function d(e) {
  let {
    guildId: t,
    channelId: r
  } = e, n = a.Hu.useSetting();
  return (0, s.bG)([o.A, i.A, c.A], () => {
    let e = o.A.getGuild(t),
      l = i.A.getChannel(r);
    return c.A.getGuildId() === u.YYv ? {
      type: u.I4_.FAVORITES
    } : null != t && null != e ? {
      type: u.I4_.GUILD,
      guildId: t
    } : null != r && null != l && l.isPrivate() ? n ? {
      type: u.I4_.DMS
    } : {
      type: u.I4_.CHANNEL,
      channelId: r
    } : null
  }, [r, t, n], l())
}