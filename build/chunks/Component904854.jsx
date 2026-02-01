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
  let {
    message: t,
    channel: n,
    compact: h
  } = e, b = (0, f.K)(t), y = (0, a.yK)([u.default], () => {
    var e;
    return (null == (e = t.call) ? true : e.participants) != null ? t.call.participants.map(e => u.default.getUser(e)).filter(e => null != e).filter(e => e.id !== t.author.id) : []
  }, [t.author.id, t.call]), A = (0, a.bG)([o.A], () => o.A.getUserAffinitiesMap(), []), v = i.useMemo(() => (0, c.L)(y, A, "VoiceSession - participants"), [y, A]), O = function(e, t, n, r, i) {
    let l = (0, p.P)({
        user: n,
        channelId: t.id,
        guildId: t.guild_id,
        messageId: e.id
      }),
      a = (0, p.P)({
        user: r[0],
        channelId: t.id,
        guildId: t.guild_id,
        messageId: e.id
      }),
      s = (0, p.P)({
        user: r[1],
        channelId: t.id,
        guildId: t.guild_id,
        messageId: e.id
      }),
      o = (0, d.Ay)(e),
      c = (0, d.d8)(r[0], t),
      u = (0, d.d8)(r[1], t);
    if (null == i) return g.intl.format(g.t["eX6e/3"], {
      username: o.nick,
      usernameHook: l(o)
    });
    switch (r.length) {
      case 0:
        return g.intl.format(g.t.r618nP, {
          username: o.nick,
          usernameHook: l(o),
          duration: i
        });
      case 1:
        return g.intl.format(g.t["bqK+jY"], {
          username: o.nick,
          usernameHook: l(o),
          username2: null == c ? true : c.nick,
          username2Hook: a(c),
          duration: i
        });
      case 2:
        return g.intl.format(g.t.kzbH4d, {
          username: o.nick,
          usernameHook: l(o),
          username2: null == c ? true : c.nick,
          username2Hook: a(c),
          username3: null == u ? true : u.nick,
          username3Hook: s(u),
          duration: i
        });
      default:
        return g.intl.format(g.t.HZzzH1, {
          username: o.nick,
          usernameHook: l(o),
          username2: null == c ? true : c.nick,
          username2Hook: a(c),
          userCount: r.length - 1,
          duration: i
        })
    }
  }(t, n, t.author, v, b);
  return (0, r.jsx)(m.A, {
    iconNode: (0, r.jsx)(l.HKD, {
      size: "md",
      color: s.LU0.colors.STATUS_POSITIVE
    }),
    iconContainerClassName: _.z,
    timestamp: t.timestamp,
    compact: h,
    children: O
  })
}