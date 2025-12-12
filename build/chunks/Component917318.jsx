/** Chunk was on web.js **/
/** chunk id: 917318, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk275726 = require("./275726.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk739566 = require("./739566.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk792389 = require("./792389.js"),
  Chunk388032 = require("./388032.jsx");
let p = {
    [Chunk275726.u.REPORT_TO_MOD_BAN_USER]: () => Chunk792389.default.komFTv,
    [Chunk275726.u.REPORT_TO_MOD_KICK_USER]: () => Chunk792389.default.FAJmJV,
    [Chunk275726.u.REPORT_TO_MOD_TIMEOUT_USER]: () => Chunk792389.default["90r/sR"]
  },
  _ = {
    [Chunk275726.u.REPORT_TO_MOD_DELETED_MESSAGE]: () => Chunk792389.default["4023i8"],
    [Chunk275726.u.REPORT_TO_MOD_CLOSED_REPORT]: () => Chunk792389.default.UE81zV
  };

function m(e) {
  let {
    type: t
  } = e, n = null;
  switch (t) {
    case i.u.REPORT_TO_MOD_BAN_USER:
      n = o.pgN;
      break;
    case i.u.REPORT_TO_MOD_KICK_USER:
      n = o.I9k;
      break;
    case i.u.REPORT_TO_MOD_TIMEOUT_USER:
      n = o.YlB;
      break;
    case i.u.REPORT_TO_MOD_DELETED_MESSAGE:
      n = o.XHJ;
      break;
    case i.u.REPORT_TO_MOD_CLOSED_REPORT:
      n = o.kmB
  }
  return null != n ? (0, r.jsx)(n, {
    size: "refresh_sm",
    color: "currentColor"
  }) : null
}

function h(e) {
  var t;
  let {
    message: n,
    channel: i,
    compact: o
  } = e, {
    author: d,
    mentions: _,
    type: h
  } = n, g = (0, s.ZP)(n), E = n.getChannelId(), b = (0, a.e7)([u.default], () => u.default.getUser(_[0]), [_]), y = (0, s.JZ)(d, i), O = (0, l.l)({
    user: d,
    channelId: E,
    guildId: i.guild_id,
    messageId: n.id
  })(y), v = (0, s.Sw)(b, i), S = (0, l.l)({
    user: b,
    channelId: E,
    guildId: i.guild_id,
    messageId: n.id
  })(v), I = null != (t = p[h]) ? t : null;
  if (null == I) return null;
  let T = f.intl.format(I(), {
    actorName: g.nick,
    actorHook: O,
    targetName: null == v ? true : v.nick,
    targetHook: S
  });
  return (0, r.jsx)(c.Z, {
    iconNode: (0, r.jsx)(m, {
      type: h
    }),
    timestamp: n.timestamp,
    compact: o,
    children: T
  })
}

function g(e) {
  var t;
  let {
    message: n,
    channel: i,
    compact: a
  } = e, {
    author: o,
    type: u
  } = n, d = (0, s.ZP)(n), p = n.getChannelId(), h = (0, s.JZ)(o, i), g = (0, l.l)({
    user: o,
    channelId: p,
    guildId: i.guild_id,
    messageId: n.id
  })(h), E = null != (t = _[u]) ? t : null;
  if (null == E) return null;
  let b = f.intl.format(E(), {
    actorName: d.nick,
    actorHook: g
  });
  return (0, r.jsx)(c.Z, {
    iconNode: (0, r.jsx)(m, {
      type: u
    }),
    timestamp: n.timestamp,
    compact: a,
    children: b
  })
}

function E(e) {
  let {
    message: t,
    channel: n,
    compact: a
  } = e, {
    type: o
  } = t;
  return o === i.u.REPORT_TO_MOD_BAN_USER || o === i.u.REPORT_TO_MOD_KICK_USER || o === i.u.REPORT_TO_MOD_TIMEOUT_USER ? (0, r.jsx)(h, {
    message: t,
    channel: n,
    compact: a
  }) : (0, r.jsx)(g, {
    message: t,
    channel: n,
    compact: a
  })
}