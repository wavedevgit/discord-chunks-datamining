/** Chunk was on 6500 **/
/** chunk id: 667936, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
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

function v(e) {
  var t;
  let {
    guildId: n,
    member: i,
    className: a
  } = e, c = null != i.member ? (0, y.xT)(i.member) : null;
  return (0, r.jsx)(s.m, {
    __unsupportedReactNodeAsText: i.nick,
    position: "bottom",
    children: (0, r.jsx)(o.euF, {
      src: null != c ? c : i.user.getAvatarURL(n, 16),
      size: o._3J.SIZE_16,
      className: l()(a, h.wE),
      "aria-label": null != (t = i.nick) ? t : A.Ay.getName(i.user)
    })
  })
}

function O(e) {
  let {
    members: t,
    guildId: n
  } = e;
  return (0, r.jsx)(f.A, {
    className: h.S3,
    guildId: n,
    users: t,
    max: 6,
    renderUser: (e, t, i) => (0, r.jsx)(v, {
      guildId: n,
      member: e,
      className: t
    }, i),
    renderMoreUsers: (e, t, n) => (0, r.jsx)("div", {
      className: l()(h.TO, t),
      children: e
    }, n)
  })
}
let j = e => {
  let {
    channel: t,
    presenceActivity: n,
    members: i,
    embeddedApp: l,
    onAction: s
  } = e, o = null != l, f = o ? Array.from(l.embeddedActivity.userIds) : [], y = (0, a.bG)([_.default, g.default], () => {
    if (o) return _.default.getUser(f[0]);
    if (null != i) {
      var e, t;
      return i.length <= 0 ? null : null != (e = null == (t = i.find(e => e.user.id !== g.default.getId())) ? true : t.user) ? e : i[0].user
    }
  });
  if (null == y) return null;
  let A = o || (0, u.A)(n),
    v = (0, m.gV)(t.type);
  return (0, r.jsxs)("div", {
    className: h.Eb,
    children: [(0, r.jsx)("div", {
      className: h.Il,
      children: A ? (0, r.jsx)(b.A, {
        activity: n,
        embeddedApp: l,
        user: y,
        channel: t,
        sortedVoiceStates: i,
        onOpenSpotifyTrack: v ? p.Mp : true,
        onOpenSpotifyArtist: v ? p.mN : true,
        onOpenSpotifyAlbum: v ? p.QX : true
      }) : (0, r.jsx)(c.A, {
        type: c.M.VOICE_CHANNEL,
        activity: n,
        user: y,
        guildId: t.getGuildId(),
        channelId: t.id,
        renderHeaderAccessory: null != i ? () => (0, r.jsx)(O, {
          guildId: t.guild_id,
          members: i
        }) : true
      })
    }), (0, r.jsx)("div", {
      className: h.M4,
      children: (0, r.jsx)(d.A, {
        type: c.M.VOICE_CHANNEL,
        activity: n,
        embeddedActivity: null == l ? true : l.embeddedActivity,
        user: y,
        guildId: t.getGuildId(),
        channelId: t.id,
        buttonVariant: "primary",
        onAction: s
      })
    })]
  })
}