/** Chunk was on 41753 **/
/** chunk id: 449932, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk72796 = require("./72796.js");

function C(e) {
  let {
    guildId: t,
    member: n,
    className: i
  } = e, o = null != n.member ? (0, b.CA)(n.member) : null;
  return (0, r.jsx)(a.ua7, {
    text: n.nick,
    position: "bottom",
    children: e => {
      var s;
      return (0, r.jsx)(a.qEK, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        src: null != o ? o : n.user.getAvatarURL(t, 16),
        size: a.EFr.SIZE_16,
        className: l()(i, y.partyAvatar),
        "aria-label": null != (s = n.nick) ? s : O.ZP.getName(n.user)
      }, e))
    }
  })
}

function v(e) {
  let {
    members: t,
    guildId: n
  } = e;
  return (0, r.jsx)(p.Z, {
    className: y.partyMembers,
    guildId: n,
    users: t,
    max: 6,
    renderUser: (e, t, i) => (0, r.jsx)(C, {
      guildId: n,
      member: e,
      className: t
    }, i),
    renderMoreUsers: (e, t, n) => (0, r.jsx)("div", {
      className: l()(y.morePartyMembers, t),
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
    onAction: a
  } = e, p = null != l, b = p ? Array.from(l.embeddedActivity.userIds) : [], O = (0, o.e7)([m.default, g.default], () => {
    if (p) return m.default.getUser(b[0]);
    if (null != i) {
      var e, t;
      return i.length <= 0 ? null : null != (t = null == (e = i.find(e => e.user.id !== g.default.getId())) ? true : e.user) ? t : i[0].user
    }
  });
  if (null == O) return null;
  let C = p || (0, u.Z)(n),
    j = (0, f.vd)(t.type);
  return (0, r.jsxs)("div", {
    className: y.activity,
    children: [(0, r.jsx)("div", {
      className: y.channelActivityContainer,
      children: C ? (0, r.jsx)(_.Z, {
        activity: n,
        embeddedApp: l,
        user: O,
        channel: t,
        sortedVoiceStates: i,
        onOpenSpotifyTrack: j ? h.aG : true,
        onOpenSpotifyArtist: j ? h.d$ : true,
        onOpenSpotifyAlbum: j ? h.Z5 : true
      }) : (0, r.jsx)(c.Z, {
        type: c.P.VOICE_CHANNEL,
        activity: n,
        user: O,
        guildId: t.getGuildId(),
        channelId: t.id,
        renderHeaderAccessory: null != i ? () => (0, r.jsx)(v, {
          guildId: t.guild_id,
          members: i
        }) : true
      })
    }), (0, r.jsx)("div", {
      className: y.activityActionsContainer,
      children: (0, r.jsx)(d.Z, {
        type: c.P.VOICE_CHANNEL,
        activity: n,
        embeddedActivity: null == l ? true : l.embeddedActivity,
        user: O,
        guildId: t.getGuildId(),
        channelId: t.id,
        color: s.zx.Colors.PRIMARY,
        look: s.zx.Looks.FILLED,
        onAction: a
      })
    })]
  })
}