/** Chunk was on 64935 **/
/** chunk id: 615179, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  QN: () => _,
  Z_: () => g,
  ez: () => h
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
let f = (e, t) => {
  let {
    joinRequest: n,
    joinRequestGuild: r
  } = (0, p.A)(t.id), s = (0, l.bG)([d.default], () => d.default.getUser(null == n ? true : n.userId)), m = (0, a.P)({
    user: s,
    channelId: t.id,
    guildId: t.guild_id,
    messageId: e.id
  }), f = (0, l.bG)([u.Ay, c.default], () => u.Ay.isMember(null == r ? true : r.id, c.default.getId())), g = i.useCallback(() => {
    f && null != r && (0, o.uh)(r.id)
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
    compact: a
  } = e, {
    guild: o,
    joinRequest: c,
    usernameHook: u,
    guildNameClick: d
  } = f(i, l), p = null == c || null == (t = c.user) ? true : t.username, g = null == o ? true : o.name;
  return (0, r.jsx)(s.A, {
    icon: n(394803),
    timestamp: i.timestamp,
    compact: a,
    children: null != p && null != g ? m.intl.format(m.t["21R6Ch"], {
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
    compact: a
  } = e, {
    guild: o,
    joinRequest: c,
    usernameHook: u,
    guildNameClick: d
  } = f(i, l), p = null == c || null == (t = c.user) ? true : t.username, g = null == o ? true : o.name;
  return (0, r.jsx)(s.A, {
    icon: n(884797),
    timestamp: i.timestamp,
    compact: a,
    children: null != p && null != g ? m.intl.format(m.t["Bz/QC2"], {
      username: p,
      usernameHook: u(),
      guildName: g,
      guildNameClick: d
    }) : m.intl.string(m.t.FVF6qU)
  })
}

function h(e) {
  var t;
  let {
    message: i,
    channel: l,
    compact: a
  } = e, {
    guild: o,
    joinRequest: c,
    usernameHook: u,
    guildNameClick: d
  } = f(i, l), p = null == c || null == (t = c.user) ? true : t.username, g = null == o ? true : o.name;
  return (0, r.jsx)(s.A, {
    icon: n(884797),
    timestamp: i.timestamp,
    compact: a,
    children: null != p && null != g ? m.intl.format(m.t.Kpkesg, {
      username: p,
      usernameHook: u(),
      guildName: g,
      guildNameClick: d
    }) : m.intl.string(m.t.BMlbE7)
  })
}