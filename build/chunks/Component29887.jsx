/** Chunk was on 26434 **/
/** chunk id: 29887, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Cn: () => g,
  R6: () => h,
  Ue: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk602606 = require("./602606.js"),
  Chunk388032 = require("./388032.jsx");
let f = (e, t) => {
  let {
    joinRequest: n,
    joinRequestGuild: r
  } = (0, p.Z)(t.id), a = (0, l.e7)([d.default], () => d.default.getUser(null == n ? true : n.userId)), m = (0, o.l)({
    user: a,
    channelId: t.id,
    guildId: t.guild_id,
    messageId: e.id
  }), f = (0, l.e7)([u.ZP, c.default], () => u.ZP.isMember(null == r ? true : r.id, c.default.getId())), g = i.useCallback(() => {
    f && null != r && (0, s.XU)(r.id)
  }, [r, f]);
  return {
    guild: r,
    joinRequest: n,
    usernameHook: m,
    guildNameClick: g
  }
};

function g(e) {
  var t;
  let {
    message: i,
    channel: l,
    compact: o
  } = e, {
    guild: s,
    joinRequest: c,
    usernameHook: u,
    guildNameClick: d
  } = f(i, l), p = null == c || null == (t = c.user) ? true : t.username, g = null == s ? true : s.name;
  return (0, r.jsx)(a.Z, {
    icon: n(570111),
    timestamp: i.timestamp,
    compact: o,
    children: null != p && null != g ? m.intl.format(m.t["21R6Cg"], {
      username: p,
      usernameHook: u(),
      guildName: g,
      guildNameClick: d
    }) : m.intl.string(m.t["2VLV0d"])
  })
}

function _(e) {
  var t;
  let {
    message: i,
    channel: l,
    compact: o
  } = e, {
    guild: s,
    joinRequest: c,
    usernameHook: u,
    guildNameClick: d
  } = f(i, l), p = null == c || null == (t = c.user) ? true : t.username, g = null == s ? true : s.name;
  return (0, r.jsx)(a.Z, {
    icon: n(474019),
    timestamp: i.timestamp,
    compact: o,
    children: null != p && null != g ? m.intl.format(m.t["Bz/QCw"], {
      username: p,
      usernameHook: u(),
      guildName: g,
      guildNameClick: d
    }) : m.intl.string(m.t.FVF6qa)
  })
}

function h(e) {
  var t;
  let {
    message: i,
    channel: l,
    compact: o
  } = e, {
    guild: s,
    joinRequest: c,
    usernameHook: u,
    guildNameClick: d
  } = f(i, l), p = null == c || null == (t = c.user) ? true : t.username, g = null == s ? true : s.name;
  return (0, r.jsx)(a.Z, {
    icon: n(474019),
    timestamp: i.timestamp,
    compact: o,
    children: null != p && null != g ? m.intl.format(m.t.Kpkesr, {
      username: p,
      usernameHook: u(),
      guildName: g,
      guildNameClick: d
    }) : m.intl.string(m.t.BMlbEx)
  })
}