/** Chunk was on 67000 **/
/** chunk id: 449932, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk350922 = require("./350922.jsx"),
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
  Chunk590599 = require("./590599.js");

function j(e) {
  var t;
  let {
    guildId: n,
    member: i,
    className: a
  } = e, c = null != i.member ? (0, m.CA)(i.member) : null;
  return (0, r.jsx)(o.u, {
    __unsupportedReactNodeAsText: i.nick,
    position: "bottom",
    children: (0, r.jsx)(s.qEK, {
      src: null != c ? c : i.user.getAvatarURL(n, 16),
      size: s.EFr.SIZE_16,
      className: l()(a, v.partyAvatar),
      "aria-label": null != (t = i.nick) ? t : y.ZP.getName(i.user)
    })
  })
}

function C(e) {
  let {
    members: t,
    guildId: n
  } = e;
  return (0, r.jsx)(h.Z, {
    className: v.partyMembers,
    guildId: n,
    users: t,
    max: 6,
    renderUser: (e, t, i) => (0, r.jsx)(j, {
      guildId: n,
      member: e,
      className: t
    }, i),
    renderMoreUsers: (e, t, n) => (0, r.jsx)("div", {
      className: l()(v.morePartyMembers, t),
      children: e
    }, n)
  })
}
let x = e => {
  let {
    channel: t,
    presenceActivity: n,
    members: i,
    embeddedApp: l,
    onAction: o
  } = e, s = null != l, h = s ? Array.from(l.embeddedActivity.userIds) : [], m = (0, a.e7)([b.default, g.default], () => {
    if (s) return b.default.getUser(h[0]);
    if (null != i) {
      var e, t;
      return i.length <= 0 ? null : null != (t = null == (e = i.find(e => e.user.id !== g.default.getId())) ? true : e.user) ? t : i[0].user
    }
  });
  if (null == m) return null;
  let y = s || (0, u.Z)(n),
    j = (0, p.vd)(t.type);
  return (0, r.jsxs)("div", {
    className: v.activity,
    children: [(0, r.jsx)("div", {
      className: v.channelActivityContainer,
      children: y ? (0, r.jsx)(O.Z, {
        activity: n,
        embeddedApp: l,
        user: m,
        channel: t,
        sortedVoiceStates: i,
        onOpenSpotifyTrack: j ? f.aG : true,
        onOpenSpotifyArtist: j ? f.d$ : true,
        onOpenSpotifyAlbum: j ? f.Z5 : true
      }) : (0, r.jsx)(c.Z, {
        type: c.P.VOICE_CHANNEL,
        activity: n,
        user: m,
        guildId: t.getGuildId(),
        channelId: t.id,
        renderHeaderAccessory: null != i ? () => (0, r.jsx)(C, {
          guildId: t.guild_id,
          members: i
        }) : true
      })
    }), (0, r.jsx)("div", {
      className: v.activityActionsContainer,
      children: (0, r.jsx)(d.Z, {
        type: c.P.VOICE_CHANNEL,
        activity: n,
        embeddedActivity: null == l ? true : l.embeddedActivity,
        user: m,
        guildId: t.getGuildId(),
        channelId: t.id,
        buttonVariant: "primary",
        onAction: o
      })
    })]
  })
}