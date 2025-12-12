/** Chunk was on web.js **/
/** chunk id: 181945, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./361932.js"), require("./187205.js"), require("./388685.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk45114 = require("./45114.js"),
  Chunk45966 = require("./45966.js"),
  Chunk601070 = require("./601070.js"),
  Chunk984933 = require("./984933.js"),
  Chunk306680 = require("./306680.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js");

function _(e, t, n) {
  let r = i().flatMap(e, e => {
    let t = l.ZP.getSelectableChannelIds(e),
      n = [...t, ...l.ZP.getVocalChannelIds(e)],
      r = s.Z.getActiveJoinedThreadsForGuild(e);
    for (let e of t) {
      var i;
      let t = null != (i = r[e]) ? i : {};
      for (let e in t) n.push(e)
    }
    return n
  }).map(e => ({
    channelId: e,
    readStateType: p.W.CHANNEL,
    messageId: c.ZP.lastMessageId(e)
  }));
  return e.forEach(e => {
    r.push({
      channelId: d.default.cast(e),
      readStateType: p.W.GUILD_EVENT,
      messageId: c.ZP.lastMessageId(e, p.W.GUILD_EVENT)
    }), r.push({
      channelId: d.default.cast(e),
      readStateType: p.W.GUILD_ONBOARDING_QUESTION,
      messageId: a.Z.ackIdForGuild(e)
    })
  }), u.default.track(f.rMx.MARK_AS_READ, {
    source: t,
    type: "guild"
  }), (0, o.y5)(r, n)
}