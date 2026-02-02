/** Chunk was on 9753 **/
/** chunk id: 904854, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk21119 = require("./21119.js"),
  Chunk907459 = require("./907459.js"),
  Chunk287809 = require("./287809.js"),
  Chunk763754 = require("./763754.js"),
  Chunk447215 = require("./447215.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk502197 = require("./502197.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk443300 = require("./443300.js");

function h(e) {
  var t;
  let n, h, b, y, A, v, {
      message: O,
      channel: x,
      compact: E
    } = e,
    j = (0, f.K)(O),
    C = (0, a.yK)([u.default], () => {
      var e;
      return (null == (e = O.call) ? true : e.participants) != null ? O.call.participants.map(e => u.default.getUser(e)).filter(e => null != e).filter(e => e.id !== O.author.id) : []
    }, [O.author.id, O.call]),
    I = (0, a.bG)([o.A], () => o.A.getUserAffinitiesMap(), []),
    S = i.useMemo(() => (0, c.L)(C, I, "VoiceSession - participants"), [C, I]),
    T = (t = O.author, n = (0, p.P)({
      user: t,
      channelId: x.id,
      guildId: x.guild_id,
      messageId: O.id
    }), h = (0, p.P)({
      user: S[0],
      channelId: x.id,
      guildId: x.guild_id,
      messageId: O.id
    }), b = (0, p.P)({
      user: S[1],
      channelId: x.id,
      guildId: x.guild_id,
      messageId: O.id
    }), y = (0, d.Ay)(O), A = (0, d.d8)(S[0], x), v = (0, d.d8)(S[1], x), null == j ? g.intl.format(g.t["eX6e/3"], {
      username: y.nick,
      usernameHook: n(y)
    }) : g.intl.format(g.t.YUbgR8, {
      userCount: S.length + 1,
      username: y.nick,
      usernameHook: n(y),
      username2: A.nick,
      username2Hook: h(A),
      username3: v.nick,
      username3Hook: b(v),
      otherCount: S.length - 1,
      duration: j
    }));
  return (0, r.jsx)(m.A, {
    iconNode: (0, r.jsx)(l.HKD, {
      size: "md",
      color: s.LU0.colors.STATUS_POSITIVE
    }),
    iconContainerClassName: _.z,
    timestamp: O.timestamp,
    compact: E,
    children: T
  })
}