/** Chunk was on 92917 **/
/** chunk id: 282224, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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
let m = {
    [Chunk448761.l.REPORT_TO_MOD_BAN_USER]: () => d.default.komFTv,
    [Chunk448761.l.REPORT_TO_MOD_KICK_USER]: () => d.default.FAJmJV,
    [Chunk448761.l.REPORT_TO_MOD_TIMEOUT_USER]: () => d.default["90r/sR"]
  },
  f = {
    [Chunk448761.l.REPORT_TO_MOD_DELETED_MESSAGE]: () => d.default["4023i8"],
    [Chunk448761.l.REPORT_TO_MOD_CLOSED_REPORT]: () => d.default.UE81zV
  };

function g(e) {
  let {
    type: t
  } = e, n = null;
  switch (t) {
    case i.l.REPORT_TO_MOD_BAN_USER:
      n = a.wI0;
      break;
    case i.l.REPORT_TO_MOD_KICK_USER:
      n = a.Nxw;
      break;
    case i.l.REPORT_TO_MOD_TIMEOUT_USER:
      n = a.gQi;
      break;
    case i.l.REPORT_TO_MOD_DELETED_MESSAGE:
      n = a.ucK;
      break;
    case i.l.REPORT_TO_MOD_CLOSED_REPORT:
      n = a.Uzd
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
    compact: a
  } = e, {
    author: d,
    mentions: f,
    type: h
  } = n, _ = (0, s.Ay)(n), b = n.getChannelId(), A = (0, l.bG)([u.default], () => u.default.getUser(f[0]), [f]), y = (0, s.m2)(d, i), v = (0, o.P)({
    user: d,
    channelId: b,
    guildId: i.guild_id,
    messageId: n.id
  })(y), x = (0, s.d8)(A, i), O = (0, o.P)({
    user: A,
    channelId: b,
    guildId: i.guild_id,
    messageId: n.id
  })(x), E = null != (t = m[h]) ? t : null;
  if (null == E) return null;
  let j = p.intl.format(E(), {
    actorName: _.nick,
    actorHook: v,
    targetName: null == x ? true : x.nick,
    targetHook: O
  });
  return (0, r.jsx)(c.A, {
    iconNode: (0, r.jsx)(g, {
      type: h
    }),
    timestamp: n.timestamp,
    compact: a,
    children: j
  })
}

function _(e) {
  var t;
  let {
    message: n,
    channel: i,
    compact: l
  } = e, {
    author: a,
    type: u
  } = n, d = (0, s.Ay)(n), m = n.getChannelId(), h = (0, s.m2)(a, i), _ = (0, o.P)({
    user: a,
    channelId: m,
    guildId: i.guild_id,
    messageId: n.id
  })(h), b = null != (t = f[u]) ? t : null;
  if (null == b) return null;
  let A = p.intl.format(b(), {
    actorName: d.nick,
    actorHook: _
  });
  return (0, r.jsx)(c.A, {
    iconNode: (0, r.jsx)(g, {
      type: u
    }),
    timestamp: n.timestamp,
    compact: l,
    children: A
  })
}

function b(e) {
  let {
    message: t,
    channel: n,
    compact: l
  } = e, {
    type: a
  } = t;
  return a === i.l.REPORT_TO_MOD_BAN_USER || a === i.l.REPORT_TO_MOD_KICK_USER || a === i.l.REPORT_TO_MOD_TIMEOUT_USER ? (0, r.jsx)(h, {
    message: t,
    channel: n,
    compact: l
  }) : (0, r.jsx)(_, {
    message: t,
    channel: n,
    compact: l
  })
}