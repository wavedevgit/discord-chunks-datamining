/** Chunk was on web.js **/
/** chunk id: 667936, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
let O = 6;

function v(e) {
  var t;
  let {
    guildId: n,
    member: i,
    className: s
  } = e, c = null != i.member ? (0, g.xT)(i.member) : null;
  return (0, r.jsx)(o.m, {
    __unsupportedReactNodeAsText: i.nick,
    position: "bottom",
    children: (0, r.jsx)(l.euF, {
      src: null != c ? c : i.user.getAvatarURL(n, 16),
      size: l._3J.SIZE_16,
      className: a()(s, b.wE),
      "aria-label": null != (t = i.nick) ? t : E.Ay.getName(i.user)
    })
  })
}

function A(e) {
  let {
    members: t,
    guildId: n
  } = e;
  return (0, r.jsx)(p.A, {
    className: b.S3,
    guildId: n,
    users: t,
    max: O,
    renderUser: (e, t, i) => (0, r.jsx)(v, {
      guildId: n,
      member: e,
      className: t
    }, i),
    renderMoreUsers: (e, t, n) => (0, r.jsx)("div", {
      className: a()(b.TO, t),
      children: e
    }, n)
  })
}
let I = e => {
  let {
    channel: t,
    presenceActivity: n,
    members: i,
    embeddedApp: a,
    onAction: o
  } = e, l = null != a, p = l ? Array.from(a.embeddedActivity.userIds) : [], g = (0, s.bG)([m.default, h.default], () => {
    if (l) return m.default.getUser(p[0]);
    if (null != i) {
      var e, t;
      return i.length <= 0 ? null : null != (e = null == (t = i.find(e => e.user.id !== h.default.getId())) ? true : t.user) ? e : i[0].user
    }
  });
  if (null == g) return null;
  let E = l || (0, u.A)(n),
    O = (0, _.gV)(t.type);
  return (0, r.jsxs)("div", {
    className: b.Eb,
    children: [(0, r.jsx)("div", {
      className: b.Il,
      children: E ? (0, r.jsx)(y.A, {
        activity: n,
        embeddedApp: a,
        user: g,
        channel: t,
        sortedVoiceStates: i,
        onOpenSpotifyTrack: O ? f.Mp : true,
        onOpenSpotifyArtist: O ? f.mN : true,
        onOpenSpotifyAlbum: O ? f.QX : true
      }) : (0, r.jsx)(c.A, {
        type: c.M.VOICE_CHANNEL,
        activity: n,
        user: g,
        guildId: t.getGuildId(),
        channelId: t.id,
        renderHeaderAccessory: null != i ? () => (0, r.jsx)(A, {
          guildId: t.guild_id,
          members: i
        }) : true
      })
    }), (0, r.jsx)("div", {
      className: b.M4,
      children: (0, r.jsx)(d.A, {
        type: c.M.VOICE_CHANNEL,
        activity: n,
        embeddedActivity: null == a ? true : a.embeddedActivity,
        user: g,
        guildId: t.getGuildId(),
        channelId: t.id,
        buttonVariant: "primary",
        onAction: o
      })
    })]
  })
}