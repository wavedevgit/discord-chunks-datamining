/** Chunk was on 9753 **/
/** chunk id: 654265, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js"), require("./492834.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk661191 = require("./661191.js"),
  Chunk624458 = require("./624458.js"),
  Chunk844944 = require("./844944.js"),
  Chunk212455 = require("./212455.js"),
  Chunk652215 = require("./652215.js");

function p(e) {
  let [t, n] = r.useState(false), [p, m] = r.useState(false), f = s.default.cast(e), {
    joinRequest: g,
    guild: _
  } = (0, i.cf)([c.A, u.A, l.A, a.A], () => {
    var e;
    let t = c.A.getRequest(f);
    if (null == t) return {
      joinRequest: null,
      isModmin: false,
      guild: null
    };
    let n = null != (e = l.A.getGuild(t.guildId)) ? e : u.A.getJoinRequestGuild(t.guildId);
    return {
      joinRequest: t,
      isModmin: null != n && a.A.can(d.xBc.KICK_MEMBERS, n),
      guild: n
    }
  });
  return r.useEffect(() => {
    null != _ || p || (m(true), o.A.fetchRequestToJoinGuilds())
  }, [_, p]), r.useEffect(() => {
    null == g && (n(true), o.A.fetchGuildJoinRequest(f).finally(() => {
      n(false)
    }))
  }, [g, f]), {
    loading: t,
    joinRequest: g,
    joinRequestGuild: _
  }
}