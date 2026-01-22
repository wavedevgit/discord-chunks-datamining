/** Chunk was on web.js **/
/** chunk id: 654265, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
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

function f(e) {
  let [t, n] = r.useState(false), [f, p] = r.useState(false), _ = o.default.cast(e), {
    joinRequest: h,
    guild: m
  } = (0, i.cf)([c.A, u.A, a.A, s.A], () => {
    var e;
    let t = c.A.getRequest(_);
    if (null == t) return {
      joinRequest: null,
      isModmin: false,
      guild: null
    };
    let n = null != (e = a.A.getGuild(t.guildId)) ? e : u.A.getJoinRequestGuild(t.guildId);
    return {
      joinRequest: t,
      isModmin: null != n && s.A.can(d.xBc.KICK_MEMBERS, n),
      guild: n
    }
  });
  return r.useEffect(() => {
    null != m || f || (p(true), l.A.fetchRequestToJoinGuilds())
  }, [m, f]), r.useEffect(() => {
    null == h && (n(true), l.A.fetchGuildJoinRequest(_).finally(() => {
      n(false)
    }))
  }, [h, _]), {
    loading: t,
    joinRequest: h,
    joinRequestGuild: m
  }
}