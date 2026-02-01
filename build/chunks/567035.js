/** Chunk was on 84018 **/
/** chunk id: 567035, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./114821.js"), require("./339614.js"), require("./896048.js"), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  r = require.n(Chunk735438),
  Chunk334738 = require("./334738.js"),
  Chunk591552 = require("./591552.js"),
  Chunk863005 = require("./863005.js"),
  Chunk808728 = require("./808728.js"),
  Chunk222823 = require("./222823.js"),
  Chunk954571 = require("./954571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js"),
  Chunk790782 = require("./790782.js");

function f(e, t, n) {
  let i = r().flatMap(e, e => {
    let t = a.Ay.getSelectableChannelIds(e),
      n = [...t, ...a.Ay.getVocalChannelIds(e)],
      i = o.A.getActiveJoinedThreadsForGuild(e);
    for (let e of t) {
      var r;
      let t = null != (r = i[e]) ? r : {};
      for (let e in t) n.push(e)
    }
    return n
  }).map(e => ({
    channelId: e,
    readStateType: p.P.CHANNEL,
    messageId: c.Ay.lastMessageId(e)
  }));
  return e.forEach(e => {
    i.push({
      channelId: u.default.cast(e),
      readStateType: p.P.GUILD_EVENT,
      messageId: c.Ay.lastMessageId(e, p.P.GUILD_EVENT)
    }), i.push({
      channelId: u.default.cast(e),
      readStateType: p.P.GUILD_ONBOARDING_QUESTION,
      messageId: l.A.ackIdForGuild(e)
    })
  }), d.default.track(h.HAw.MARK_AS_READ, {
    source: t,
    type: "guild"
  }), (0, s.Uq)(i, n)
}