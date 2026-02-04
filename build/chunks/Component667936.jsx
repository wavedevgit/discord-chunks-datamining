/** Chunk was on 44669 **/
/** chunk id: 667936, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk302959 = require("./302959.jsx"),
  Chunk90644 = require("./90644.js"),
  Chunk592182 = require("./592182.jsx"),
  Chunk172710 = require("./172710.js"),
  Chunk636585 = require("./636585.jsx"),
  Chunk95701 = require("./95701.js"),
  Chunk961350 = require("./961350.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk427262 = require("./427262.js"),
  Chunk43950 = require("./43950.jsx"),
  Chunk185186 = require("./185186.js");

function _(e) {
  var t;
  let {
    guildId: n,
    member: l,
    className: i
  } = e, a = null != l.member ? (0, A.xT)(l.member) : null;
  return (0, r.jsx)(o.m, {
    __unsupportedReactNodeAsText: l.nick,
    position: "bottom",
    children: (0, r.jsx)(c.euF, {
      src: null != a ? a : l.user.getAvatarURL(n, 16),
      size: c._3J.SIZE_16,
      className: s()(i, j.wE),
      "aria-label": null != (t = l.nick) ? t : y.Ay.getName(l.user)
    })
  })
}

function x(e) {
  let {
    members: t,
    guildId: n
  } = e;
  return (0, r.jsx)(g.A, {
    className: j.S3,
    guildId: n,
    users: t,
    max: 6,
    renderUser: (e, t, l) => (0, r.jsx)(_, {
      guildId: n,
      member: e,
      className: t
    }, l),
    renderMoreUsers: (e, t, n) => (0, r.jsx)("div", {
      className: s()(j.TO, t),
      children: e
    }, n)
  })
}
let v = e => {
  let {
    channel: t,
    presenceActivity: n,
    members: i,
    embeddedApp: s,
    onAction: o,
    enableUserHoverActivities: c
  } = e, g = null != s, A = g ? Array.from(s.embeddedActivity.userIds) : [], y = (0, a.bG)([b.default, m.default], () => {
    if (g) return b.default.getUser(A[0]);
    if (null != i) {
      var e, t;
      return i.length <= 0 ? null : null != (e = null == (t = i.find(e => e.user.id !== m.default.getId())) ? true : t.user) ? e : i[0].user
    }
  }), _ = l.useCallback(() => {
    if (!c && null != i) return () => (0, r.jsx)(x, {
      guildId: t.guild_id,
      members: i
    })
  }, [c, i, t.guild_id])();
  if (null == y) return null;
  let v = g || (0, d.A)(n),
    E = (0, f.gV)(t.type);
  return (0, r.jsxs)("div", {
    className: j.Eb,
    children: [(0, r.jsx)("div", {
      className: j.Il,
      children: v ? (0, r.jsx)(O.A, {
        activity: n,
        embeddedApp: s,
        user: y,
        channel: t,
        sortedVoiceStates: i,
        onOpenSpotifyTrack: E ? h.Mp : true,
        onOpenSpotifyArtist: E ? h.mN : true,
        onOpenSpotifyAlbum: E ? h.QX : true
      }) : (0, r.jsx)(u.A, {
        type: u.M.VOICE_CHANNEL,
        activity: n,
        user: y,
        guildId: t.getGuildId(),
        channelId: t.id,
        renderHeaderAccessory: _,
        enableUserHoverActivities: c
      })
    }), (0, r.jsx)("div", {
      className: j.M4,
      children: (0, r.jsx)(p.A, {
        type: u.M.VOICE_CHANNEL,
        activity: n,
        embeddedActivity: null == s ? true : s.embeddedActivity,
        user: y,
        guildId: t.getGuildId(),
        channelId: t.id,
        buttonVariant: "primary",
        onAction: o
      })
    })]
  })
}