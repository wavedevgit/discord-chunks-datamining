/** Chunk was on 32098 (809533fdbc51a5c1.js) **/
n.d(t, {
  Z: () => C
});
var r = n(200651);
n(192379);
var i = n(120356),
  l = n.n(i),
  o = n(442837),
  a = n(481060),
  s = n(717881),
  c = n(503438),
  u = n(850827),
  d = n(540059),
  p = n(952164),
  h = n(237583),
  f = n(131704),
  g = n(314897),
  m = n(594174),
  b = n(768581),
  v = n(51144),
  y = n(754231),
  _ = n(898218);

function O(e) {
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
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r
          })
        }
        return e
      }({
        src: null != o ? o : n.user.getAvatarURL(t, 16),
        size: a.EFr.SIZE_16,
        className: l()(i, _.partyAvatar),
        "aria-label": null !== (s = n.nick) && void 0 !== s ? s : v.ZP.getName(n.user)
      }, e))
    }
  })
}

function j(e) {
  let {
    members: t,
    guildId: n
  } = e;
  return (0, r.jsx)(h.Z, {
    className: _.partyMembers,
    guildId: n,
    users: t,
    max: 6,
    renderUser: (e, t, i) => (0, r.jsx)(O, {
      guildId: n,
      member: e,
      className: t
    }, i),
    renderMoreUsers: (e, t, n) => (0, r.jsx)("div", {
      className: l()(_.morePartyMembers, t),
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
    onAction: h
  } = e, b = (0, d.Q3)("ChannelActivityRow"), v = null != l, O = v ? Array.from(l.embeddedActivity.userIds) : [], C = (0, o.e7)([m.default, g.default], () => {
    if (v) return m.default.getUser(O[0]);
    if (null != i) {
      var e, t;
      return i.length <= 0 ? null : null !== (t = null === (e = i.find(e => e.user.id !== g.default.getId())) || void 0 === e ? void 0 : e.user) && void 0 !== t ? t : i[0].user
    }
  });
  if (null == C) return null;
  let x = v || (0, c.Z)(n),
    S = (0, f.vd)(t.type);
  return (0, r.jsxs)("div", {
    className: _.activity,
    children: [(0, r.jsx)("div", {
      className: _.channelActivityContainer,
      children: x ? (0, r.jsx)(y.Z, {
        activity: n,
        embeddedApp: l,
        user: C,
        channel: t,
        sortedVoiceStates: i,
        onOpenSpotifyTrack: S ? p.aG : void 0,
        onOpenSpotifyArtist: S ? p.d$ : void 0,
        onOpenSpotifyAlbum: S ? p.Z5 : void 0
      }) : (0, r.jsx)(s.Z, {
        type: s.P.VOICE_CHANNEL,
        activity: n,
        user: C,
        guildId: t.getGuildId(),
        channelId: t.id,
        renderHeaderAccessory: null != i ? () => (0, r.jsx)(j, {
          guildId: t.guild_id,
          members: i
        }) : void 0
      })
    }), (0, r.jsx)("div", {
      className: _.activityActionsContainer,
      children: (0, r.jsx)(u.Z, {
        type: s.P.VOICE_CHANNEL,
        activity: n,
        embeddedActivity: null == l ? void 0 : l.embeddedActivity,
        user: C,
        guildId: t.getGuildId(),
        channelId: t.id,
        color: b ? a.zxk.Colors.PRIMARY : _.button,
        look: b ? a.zxk.Looks.FILLED : void 0,
        onAction: h
      })
    })]
  })
}