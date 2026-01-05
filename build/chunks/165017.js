/** Chunk was on web.js **/
/** chunk id: 165017, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => d
});
var Chunk498607 = require("./498607.js"),
  i = require.n(Chunk498607),
  Chunk442837 = require("./442837.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  let {
    guildId: t,
    channelId: n
  } = e, r = o.rR.useSetting();
  return (0, a.e7)([l.Z, s.Z, c.Z], () => {
    let e = l.Z.getGuild(t),
      i = s.Z.getChannel(n);
    return c.Z.getGuildId() === u.I_8 ? {
      type: u.aib.FAVORITES
    } : null != t && null != e ? {
      type: u.aib.GUILD,
      guildId: t
    } : null != n && null != i && i.isPrivate() ? r ? {
      type: u.aib.DMS
    } : {
      type: u.aib.CHANNEL,
      channelId: n
    } : null
  }, [n, t, r], i())
}