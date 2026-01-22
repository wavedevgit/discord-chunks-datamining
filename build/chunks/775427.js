/** Chunk was on web.js **/
/** chunk id: 775427, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => d
});
var Chunk33851 = require("./33851.js"),
  i = require.n(Chunk33851),
  Chunk311907 = require("./311907.js"),
  Chunk253932 = require("./253932.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk967198 = require("./967198.js"),
  Chunk652215 = require("./652215.js");

function d(e) {
  let {
    guildId: t,
    channelId: n
  } = e, r = s.Hu.useSetting();
  return (0, a.bG)([l.A, o.A, c.A], () => {
    let e = l.A.getGuild(t),
      i = o.A.getChannel(n);
    return c.A.getGuildId() === u.YYv ? {
      type: u.I4_.FAVORITES
    } : null != t && null != e ? {
      type: u.I4_.GUILD,
      guildId: t
    } : null != n && null != i && i.isPrivate() ? r ? {
      type: u.I4_.DMS
    } : {
      type: u.I4_.CHANNEL,
      channelId: n
    } : null
  }, [n, t, r], i())
}