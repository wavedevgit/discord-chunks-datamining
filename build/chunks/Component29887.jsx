/** Chunk was on web.js **/
/** chunk id: 29887, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cn: () => h,
  R6: () => g,
  Ue: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk602606 = require("./602606.js"),
  Chunk388032 = require("./388032.jsx");
let p = (e, t) => {
  let {
    joinRequest: n,
    joinRequestGuild: r
  } = (0, f.Z)(t.id), s = (0, a.e7)([d.default], () => d.default.getUser(null == n ? true : n.userId)), _ = (0, o.l)({
    user: s,
    channelId: t.id,
    guildId: t.guild_id,
    messageId: e.id
  }), p = (0, a.e7)([u.ZP, c.default], () => u.ZP.isMember(null == r ? true : r.id, c.default.getId())), h = i.useCallback(() => {
    p && null != r && (0, l.XU)(r.id)
  }, [r, p]);
  return {
    guild: r,
    joinRequest: n,
    usernameHook: _,
    guildNameClick: h
  }
};

function h(e) {
  var t;
  let {
    message: i,
    channel: a,
    compact: o
  } = e, {
    guild: l,
    joinRequest: c,
    usernameHook: u,
    guildNameClick: d
  } = p(i, a), f = null == c || null == (t = c.user) ? true : t.username, h = null == l ? true : l.name;
  return (0, r.jsx)(s.Z, {
    icon: n(570111),
    timestamp: i.timestamp,
    compact: o,
    children: null != f && null != h ? _.intl.format(_.t["21R6Ch"], {
      username: f,
      usernameHook: u(),
      guildName: h,
      guildNameClick: d
    }) : _.intl.string(_.t["2VLV0d"])
  })
}

function m(e) {
  var t;
  let {
    message: i,
    channel: a,
    compact: o
  } = e, {
    guild: l,
    joinRequest: c,
    usernameHook: u,
    guildNameClick: d
  } = p(i, a), f = null == c || null == (t = c.user) ? true : t.username, h = null == l ? true : l.name;
  return (0, r.jsx)(s.Z, {
    icon: n(474019),
    timestamp: i.timestamp,
    compact: o,
    children: null != f && null != h ? _.intl.format(_.t["Bz/QC2"], {
      username: f,
      usernameHook: u(),
      guildName: h,
      guildNameClick: d
    }) : _.intl.string(_.t.FVF6qU)
  })
}

function g(e) {
  var t;
  let {
    message: i,
    channel: a,
    compact: o
  } = e, {
    guild: l,
    joinRequest: c,
    usernameHook: u,
    guildNameClick: d
  } = p(i, a), f = null == c || null == (t = c.user) ? true : t.username, h = null == l ? true : l.name;
  return (0, r.jsx)(s.Z, {
    icon: n(474019),
    timestamp: i.timestamp,
    compact: o,
    children: null != f && null != h ? _.intl.format(_.t.Kpkesg, {
      username: f,
      usernameHook: u(),
      guildName: h,
      guildNameClick: d
    }) : _.intl.string(_.t.BMlbE7)
  })
}