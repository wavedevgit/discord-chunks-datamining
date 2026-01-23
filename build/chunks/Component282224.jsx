/** Chunk was on web.js **/
/** chunk id: 282224, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk448761 = require("./448761.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk763754 = require("./763754.js"),
  Chunk447215 = require("./447215.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk641131 = require("./641131.js"),
  Chunk985018 = require("./985018.jsx");
let p = {
    [Chunk448761.l.REPORT_TO_MOD_BAN_USER]: () => d.default.komFTv,
    [Chunk448761.l.REPORT_TO_MOD_KICK_USER]: () => d.default.FAJmJV,
    [Chunk448761.l.REPORT_TO_MOD_TIMEOUT_USER]: () => d.default["90r/sR"]
  },
  _ = {
    [Chunk448761.l.REPORT_TO_MOD_DELETED_MESSAGE]: () => d.default["4023i8"],
    [Chunk448761.l.REPORT_TO_MOD_CLOSED_REPORT]: () => d.default.UE81zV
  };

function h(e) {
  let {
    type: t
  } = e, n = null;
  switch (t) {
    case i.l.REPORT_TO_MOD_BAN_USER:
      n = s.wI0;
      break;
    case i.l.REPORT_TO_MOD_KICK_USER:
      n = s.Nxw;
      break;
    case i.l.REPORT_TO_MOD_TIMEOUT_USER:
      n = s.gQi;
      break;
    case i.l.REPORT_TO_MOD_DELETED_MESSAGE:
      n = s.ucK;
      break;
    case i.l.REPORT_TO_MOD_CLOSED_REPORT:
      n = s.Uzd
  }
  return null != n ? (0, r.jsx)(n, {
    size: "refresh_sm",
    color: "currentColor"
  }) : null
}

function m(e) {
  var t;
  let {
    message: n,
    channel: i,
    compact: s
  } = e, {
    author: d,
    mentions: _,
    type: m
  } = n, g = (0, o.Ay)(n), E = n.getChannelId(), y = (0, a.bG)([u.default], () => u.default.getUser(_[0]), [_]), b = (0, o.m2)(d, i), O = (0, l.P)({
    user: d,
    channelId: E,
    guildId: i.guild_id,
    messageId: n.id
  })(b), v = (0, o.d8)(y, i), A = (0, l.P)({
    user: y,
    channelId: E,
    guildId: i.guild_id,
    messageId: n.id
  })(v), I = null != (t = p[m]) ? t : null;
  if (null == I) return null;
  let S = f.intl.format(I(), {
    actorName: g.nick,
    actorHook: O,
    targetName: null == v ? true : v.nick,
    targetHook: A
  });
  return (0, r.jsx)(c.A, {
    iconNode: (0, r.jsx)(h, {
      type: m
    }),
    timestamp: n.timestamp,
    compact: s,
    children: S
  })
}

function g(e) {
  var t;
  let {
    message: n,
    channel: i,
    compact: a
  } = e, {
    author: s,
    type: u
  } = n, d = (0, o.Ay)(n), p = n.getChannelId(), m = (0, o.m2)(s, i), g = (0, l.P)({
    user: s,
    channelId: p,
    guildId: i.guild_id,
    messageId: n.id
  })(m), E = null != (t = _[u]) ? t : null;
  if (null == E) return null;
  let y = f.intl.format(E(), {
    actorName: d.nick,
    actorHook: g
  });
  return (0, r.jsx)(c.A, {
    iconNode: (0, r.jsx)(h, {
      type: u
    }),
    timestamp: n.timestamp,
    compact: a,
    children: y
  })
}

function E(e) {
  let {
    message: t,
    channel: n,
    compact: a
  } = e, {
    type: s
  } = t;
  return s === i.l.REPORT_TO_MOD_BAN_USER || s === i.l.REPORT_TO_MOD_KICK_USER || s === i.l.REPORT_TO_MOD_TIMEOUT_USER ? (0, r.jsx)(m, {
    message: t,
    channel: n,
    compact: a
  }) : (0, r.jsx)(g, {
    message: t,
    channel: n,
    compact: a
  })
}