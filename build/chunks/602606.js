/** Chunk was on web.js **/
/** chunk id: 602606, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./457542.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk709054 = require("./709054.js"),
  Chunk693546 = require("./693546.js"),
  Chunk826581 = require("./826581.js"),
  Chunk937111 = require("./937111.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  let [t, n] = r.useState(false), [f, p] = r.useState(false), _ = s.default.cast(e), {
    joinRequest: m,
    guild: h
  } = (0, i.cj)([c.Z, u.Z, o.Z, a.Z], () => {
    var e;
    let t = c.Z.getRequest(_);
    if (null == t) return {
      joinRequest: null,
      isModmin: false,
      guild: null
    };
    let n = null != (e = o.Z.getGuild(t.guildId)) ? e : u.Z.getJoinRequestGuild(t.guildId);
    return {
      joinRequest: t,
      isModmin: null != n && a.Z.can(d.Plq.KICK_MEMBERS, n),
      guild: n
    }
  });
  return r.useEffect(() => {
    null != h || f || (p(true), l.Z.fetchRequestToJoinGuilds())
  }, [h, f]), r.useEffect(() => {
    null == m && (n(true), l.Z.fetchGuildJoinRequest(_).finally(() => {
      n(false)
    }))
  }, [m, _]), {
    loading: t,
    joinRequest: m,
    joinRequestGuild: h
  }
}