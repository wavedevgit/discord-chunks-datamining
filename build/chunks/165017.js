/** Chunk was on web.js **/
/** chunk id: 165017, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => f
});
var Chunk498607 = require("./498607.js"),
  i = require.n(Chunk498607),
  Chunk442837 = require("./442837.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk945577 = require("./945577.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  let {
    guildId: t,
    channelId: n
  } = e, r = (0, u.U)({
    location: "useDesktopSearchContext"
  }), f = a.rR.useSetting(), p = r && f;
  return (0, o.e7)([l.Z, s.Z, c.Z], () => {
    let e = l.Z.getGuild(t),
      r = s.Z.getChannel(n);
    return c.Z.getGuildId() === d.I_8 ? {
      type: d.aib.FAVORITES
    } : null != t && null != e ? {
      type: d.aib.GUILD,
      guildId: t
    } : null != n && null != r && r.isPrivate() ? p ? {
      type: d.aib.DMS
    } : {
      type: d.aib.CHANNEL,
      channelId: n
    } : null
  }, [n, t, p], i())
}