/** Chunk was on 75473 **/
/** chunk id: 567035, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./114821.js"), require("./339614.js"), require("./896048.js"), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk334738 = require("./334738.js"),
  Chunk591552 = require("./591552.js"),
  Chunk863005 = require("./863005.js"),
  Chunk808728 = require("./808728.js"),
  Chunk222823 = require("./222823.js"),
  Chunk954571 = require("./954571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js"),
  Chunk790782 = require("./790782.js");

function p(e, t, n) {
  let r = o().flatMap(e, e => {
    let t = c.Ay.getSelectableChannelIds(e),
      n = [...t, ...c.Ay.getVocalChannelIds(e)],
      r = i.A.getActiveJoinedThreadsForGuild(e);
    for (let e of t) {
      var o;
      let t = null != (o = r[e]) ? o : {};
      for (let e in t) n.push(e)
    }
    return n
  }).map(e => ({
    channelId: e,
    readStateType: f.P.CHANNEL,
    messageId: s.Ay.lastMessageId(e)
  }));
  return e.forEach(e => {
    r.push({
      channelId: d.default.cast(e),
      readStateType: f.P.GUILD_EVENT,
      messageId: s.Ay.lastMessageId(e, f.P.GUILD_EVENT)
    }), r.push({
      channelId: d.default.cast(e),
      readStateType: f.P.GUILD_ONBOARDING_QUESTION,
      messageId: l.A.ackIdForGuild(e)
    })
  }), u.default.track(b.HAw.MARK_AS_READ, {
    source: t,
    type: "guild"
  }), (0, a.Uq)(r, n)
}