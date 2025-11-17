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
  let [t, n] = r.useState(false), [f, _] = r.useState(false), p = s.default.cast(e), {
    joinRequest: h,
    guild: m
  } = (0, i.cj)([c.Z, u.Z, a.Z, o.Z], () => {
    var e;
    let t = c.Z.getRequest(p);
    if (null == t) return {
      joinRequest: null,
      isModmin: false,
      guild: null
    };
    let n = null != (e = a.Z.getGuild(t.guildId)) ? e : u.Z.getJoinRequestGuild(t.guildId);
    return {
      joinRequest: t,
      isModmin: null != n && o.Z.can(d.Plq.KICK_MEMBERS, n),
      guild: n
    }
  });
  return r.useEffect(() => {
    null != m || f || (_(true), l.Z.fetchRequestToJoinGuilds())
  }, [m, f]), r.useEffect(() => {
    null == h && (n(true), l.Z.fetchGuildJoinRequest(p).finally(() => {
      n(false)
    }))
  }, [h, p]), {
    loading: t,
    joinRequest: h,
    joinRequestGuild: m
  }
}