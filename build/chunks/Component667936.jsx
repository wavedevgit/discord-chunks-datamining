/** Chunk was on 97492 **/
/** chunk id: 667936, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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

function O(e) {
  var t;
  let {
    guildId: n,
    member: l,
    className: s
  } = e, c = null != l.member ? (0, b.xT)(l.member) : null;
  return (0, r.jsx)(a.m, {
    __unsupportedReactNodeAsText: l.nick,
    position: "bottom",
    children: (0, r.jsx)(o.euF, {
      src: null != c ? c : l.user.getAvatarURL(n, 16),
      size: o._3J.SIZE_16,
      className: i()(s, _.wE),
      "aria-label": null != (t = l.nick) ? t : A.Ay.getName(l.user)
    })
  })
}

function j(e) {
  let {
    members: t,
    guildId: n
  } = e;
  return (0, r.jsx)(h.A, {
    className: _.S3,
    guildId: n,
    users: t,
    max: 6,
    renderUser: (e, t, l) => (0, r.jsx)(O, {
      guildId: n,
      member: e,
      className: t
    }, l),
    renderMoreUsers: (e, t, n) => (0, r.jsx)("div", {
      className: i()(_.TO, t),
      children: e
    }, n)
  })
}
let v = e => {
  let {
    channel: t,
    presenceActivity: n,
    members: l,
    embeddedApp: i,
    onAction: a
  } = e, o = null != i, h = o ? Array.from(i.embeddedActivity.userIds) : [], b = (0, s.bG)([m.default, g.default], () => {
    if (o) return m.default.getUser(h[0]);
    if (null != l) {
      var e, t;
      return l.length <= 0 ? null : null != (e = null == (t = l.find(e => e.user.id !== g.default.getId())) ? true : t.user) ? e : l[0].user
    }
  });
  if (null == b) return null;
  let A = o || (0, u.A)(n),
    O = (0, f.gV)(t.type);
  return (0, r.jsxs)("div", {
    className: _.Eb,
    children: [(0, r.jsx)("div", {
      className: _.Il,
      children: A ? (0, r.jsx)(y.A, {
        activity: n,
        embeddedApp: i,
        user: b,
        channel: t,
        sortedVoiceStates: l,
        onOpenSpotifyTrack: O ? p.Mp : true,
        onOpenSpotifyArtist: O ? p.mN : true,
        onOpenSpotifyAlbum: O ? p.QX : true
      }) : (0, r.jsx)(c.A, {
        type: c.M.VOICE_CHANNEL,
        activity: n,
        user: b,
        guildId: t.getGuildId(),
        channelId: t.id,
        renderHeaderAccessory: null != l ? () => (0, r.jsx)(j, {
          guildId: t.guild_id,
          members: l
        }) : true
      })
    }), (0, r.jsx)("div", {
      className: _.M4,
      children: (0, r.jsx)(d.A, {
        type: c.M.VOICE_CHANNEL,
        activity: n,
        embeddedActivity: null == i ? true : i.embeddedActivity,
        user: b,
        guildId: t.getGuildId(),
        channelId: t.id,
        buttonVariant: "primary",
        onAction: a
      })
    })]
  })
}