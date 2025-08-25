/** Chunk was on 91488 **/
/** chunk id: 449932, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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

function _(e) {
  let {
    guildId: t,
    member: n,
    className: i
  } = e, o = null != n.member ? (0, m.CA)(n.member) : null;
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
        "aria-label": null != (s = n.nick) ? s : b.ZP.getName(n.user)
      }, e))
    }
  })
}

function j(e) {
  let {
    members: t,
    guildId: n
  } = e;
  return (0, r.jsx)(p.Z, {
    className: y.partyMembers,
    guildId: n,
    users: t,
    max: 6,
    renderUser: (e, t, i) => (0, r.jsx)(_, {
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
let v = e => {
  let {
    channel: t,
    presenceActivity: n,
    members: i,
    embeddedApp: l,
    onAction: a
  } = e, p = null != l, m = p ? Array.from(l.embeddedActivity.userIds) : [], b = (0, o.e7)([g.default, f.default], () => {
    if (p) return g.default.getUser(m[0]);
    if (null != i) {
      var e, t;
      return i.length <= 0 ? null : null != (t = null == (e = i.find(e => e.user.id !== f.default.getId())) ? true : e.user) ? t : i[0].user
    }
  });
  if (null == b) return null;
  let _ = p || (0, c.Z)(n),
    v = (0, h.vd)(t.type);
  return (0, r.jsxs)("div", {
    className: y.activity,
    children: [(0, r.jsx)("div", {
      className: y.channelActivityContainer,
      children: _ ? (0, r.jsx)(O.Z, {
        activity: n,
        embeddedApp: l,
        user: b,
        channel: t,
        sortedVoiceStates: i,
        onOpenSpotifyTrack: v ? d.aG : true,
        onOpenSpotifyArtist: v ? d.d$ : true,
        onOpenSpotifyAlbum: v ? d.Z5 : true
      }) : (0, r.jsx)(s.Z, {
        type: s.P.VOICE_CHANNEL,
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
      className: y.activityActionsContainer,
      children: (0, r.jsx)(u.Z, {
        type: s.P.VOICE_CHANNEL,
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