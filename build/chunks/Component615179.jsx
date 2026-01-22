/** Chunk was on web.js **/
/** chunk id: 615179, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QN: () => m,
  Z_: () => h,
  ez: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk447215 = require("./447215.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk654265 = require("./654265.js"),
  Chunk985018 = require("./985018.jsx");
let _ = (e, t) => {
  let {
    joinRequest: n,
    joinRequestGuild: r
  } = (0, f.A)(t.id), o = (0, a.bG)([d.default], () => d.default.getUser(null == n ? true : n.userId)), p = (0, s.P)({
    user: o,
    channelId: t.id,
    guildId: t.guild_id,
    messageId: e.id
  }), _ = (0, a.bG)([u.Ay, c.default], () => u.Ay.isMember(null == r ? true : r.id, c.default.getId())), h = i.useCallback(() => {
    _ && null != r && (0, l.uh)(r.id)
  }, [r, _]);
  return {
    guild: r,
    joinRequest: n,
    usernameHook: p,
    guildNameClick: h
  }
};

function h(e) {
  var t;
  let {
    message: i,
    channel: a,
    compact: s
  } = e, {
    guild: l,
    joinRequest: c,
    usernameHook: u,
    guildNameClick: d
  } = _(i, a), f = null == c || null == (t = c.user) ? true : t.username, h = null == l ? true : l.name;
  return (0, r.jsx)(o.A, {
    icon: n(394803),
    timestamp: i.timestamp,
    compact: s,
    children: null != f && null != h ? p.intl.format(p.t["21R6Ch"], {
      username: f,
      usernameHook: u(),
      guildName: h,
      guildNameClick: d
    }) : p.intl.string(p.t["2VLV0d"])
  })
}

function m(e) {
  var t;
  let {
    message: i,
    channel: a,
    compact: s
  } = e, {
    guild: l,
    joinRequest: c,
    usernameHook: u,
    guildNameClick: d
  } = _(i, a), f = null == c || null == (t = c.user) ? true : t.username, h = null == l ? true : l.name;
  return (0, r.jsx)(o.A, {
    icon: n(884797),
    timestamp: i.timestamp,
    compact: s,
    children: null != f && null != h ? p.intl.format(p.t["Bz/QC2"], {
      username: f,
      usernameHook: u(),
      guildName: h,
      guildNameClick: d
    }) : p.intl.string(p.t.FVF6qU)
  })
}

function g(e) {
  var t;
  let {
    message: i,
    channel: a,
    compact: s
  } = e, {
    guild: l,
    joinRequest: c,
    usernameHook: u,
    guildNameClick: d
  } = _(i, a), f = null == c || null == (t = c.user) ? true : t.username, h = null == l ? true : l.name;
  return (0, r.jsx)(o.A, {
    icon: n(884797),
    timestamp: i.timestamp,
    compact: s,
    children: null != f && null != h ? p.intl.format(p.t.Kpkesg, {
      username: f,
      usernameHook: u(),
      guildName: h,
      guildNameClick: d
    }) : p.intl.string(p.t.BMlbE7)
  })
}