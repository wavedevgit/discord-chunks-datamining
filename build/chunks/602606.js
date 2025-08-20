/** Chunk was on 26434 **/
/** chunk id: 602606, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./457542.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk709054 = require("./709054.js"),
  Chunk693546 = require("./693546.js"),
  Chunk826581 = require("./826581.js"),
  Chunk937111 = require("./937111.js"),
  Chunk981631 = require("./981631.js");

function p(e) {
  let [t, n] = r.useState(false), [p, m] = r.useState(false), f = a.default.cast(e), {
    joinRequest: g,
    guild: _
  } = (0, i.cj)([c.Z, u.Z, l.Z, o.Z], () => {
    var e;
    let t = c.Z.getRequest(f);
    if (null == t) return {
      joinRequest: null,
      isModmin: false,
      guild: null
    };
    let n = null != (e = l.Z.getGuild(t.guildId)) ? e : u.Z.getJoinRequestGuild(t.guildId);
    return {
      joinRequest: t,
      isModmin: null != n && o.Z.can(d.Plq.KICK_MEMBERS, n),
      guild: n
    }
  });
  return r.useEffect(() => {
    null != _ || p || (m(true), s.Z.fetchRequestToJoinGuilds())
  }, [_, p]), r.useEffect(() => {
    null == g && (n(true), s.Z.fetchGuildJoinRequest(f).finally(() => {
      n(false)
    }))
  }, [g, f]), {
    loading: t,
    joinRequest: g,
    joinRequestGuild: _
  }
}