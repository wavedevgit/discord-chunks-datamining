/** Chunk was on 56710 **/
/** chunk id: 449932, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk717881 = require("./717881.jsx"),
  Chunk503438 = require("./503438.js"),
  Chunk850827 = require("./850827.jsx"),
  Chunk952164 = require("./952164.js"),
  Chunk237583 = require("./237583.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk314897 = require("./314897.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk51144 = require("./51144.js"),
  Chunk754231 = require("./754231.jsx"),
  Chunk342273 = require("./342273.js");

function v(e) {
  var t;
  let {
    guildId: n,
    member: i,
    className: o
  } = e, c = null != i.member ? (0, b.CA)(i.member) : null;
  return (0, r.jsx)(a.u, {
    __unsupportedReactNodeAsText: i.nick,
    position: "bottom",
    children: (0, r.jsx)(s.qEK, {
      src: null != c ? c : i.user.getAvatarURL(n, 16),
      size: s.EFr.SIZE_16,
      className: l()(o, O.partyAvatar),
      "aria-label": null != (t = i.nick) ? t : _.ZP.getName(i.user)
    })
  })
}

function j(e) {
  let {
    members: t,
    guildId: n
  } = e;
  return (0, r.jsx)(h.Z, {
    className: O.partyMembers,
    guildId: n,
    users: t,
    max: 6,
    renderUser: (e, t, i) => (0, r.jsx)(v, {
      guildId: n,
      member: e,
      className: t
    }, i),
    renderMoreUsers: (e, t, n) => (0, r.jsx)("div", {
      className: l()(O.morePartyMembers, t),
      children: e
    }, n)
  })
}
let C = e => {
  let {
    channel: t,
    presenceActivity: n,
    members: i,
    embeddedApp: l,
    onAction: a
  } = e, s = null != l, h = s ? Array.from(l.embeddedActivity.userIds) : [], b = (0, o.e7)([m.default, g.default], () => {
    if (s) return m.default.getUser(h[0]);
    if (null != i) {
      var e, t;
      return i.length <= 0 ? null : null != (t = null == (e = i.find(e => e.user.id !== g.default.getId())) ? true : e.user) ? t : i[0].user
    }
  });
  if (null == b) return null;
  let _ = s || (0, u.Z)(n),
    v = (0, f.vd)(t.type);
  return (0, r.jsxs)("div", {
    className: O.activity,
    children: [(0, r.jsx)("div", {
      className: O.channelActivityContainer,
      children: _ ? (0, r.jsx)(y.Z, {
        activity: n,
        embeddedApp: l,
        user: b,
        channel: t,
        sortedVoiceStates: i,
        onOpenSpotifyTrack: v ? p.aG : true,
        onOpenSpotifyArtist: v ? p.d$ : true,
        onOpenSpotifyAlbum: v ? p.Z5 : true
      }) : (0, r.jsx)(c.Z, {
        type: c.P.VOICE_CHANNEL,
        activity: n,
        user: b,
        guildId: t.getGuildId(),
        channelId: t.id,
        renderHeaderAccessory: null != i ? () => (0, r.jsx)(j, {
          guildId: t.guild_id,
          members: i
        }) : true
      })
    }), (0, r.jsx)("div", {
      className: O.activityActionsContainer,
      children: (0, r.jsx)(d.Z, {
        type: c.P.VOICE_CHANNEL,
        activity: n,
        embeddedActivity: null == l ? true : l.embeddedActivity,
        user: b,
        guildId: t.getGuildId(),
        channelId: t.id,
        buttonVariant: "primary",
        onAction: a
      })
    })]
  })
}