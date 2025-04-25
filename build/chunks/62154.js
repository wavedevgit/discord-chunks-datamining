/** Chunk was on 30514 **/
t.d(n, {
  Z: () => g
});
var i = t(200651);
t(192379);
var o = t(442837),
  l = t(320582),
  r = t(699516),
  s = t(5192),
  a = t(111361),
  c = t(648052),
  d = t(537006),
  u = t(681837),
  f = t(91433),
  p = t(944043),
  m = t(502762),
  h = t(530),
  I = t(740628),
  x = t(643518),
  _ = t(228168),
  b = t(981631),
  v = t(405666);

function g(e) {
  var n;
  let {
    user: t,
    currentUser: g,
    guildId: j,
    channelId: Z,
    displayProfile: y,
    initialSection: A,
    initialSubsection: N,
    friendToken: T,
    onClose: O
  } = e, {
    relationshipType: E,
    originApplicationId: P
  } = (0, o.cj)([r.Z], () => ({
    relationshipType: r.Z.getRelationshipType(t.id),
    originApplicationId: r.Z.getOriginApplicationId(t.id)
  })), C = (0, l.vh)(t.id), S = t.id === g.id, M = (0, a.I5)(g), L = s.ZP.useName(null == y ? void 0 : y.guildId, Z, t), w = (0, x.Z)({
    user: t,
    currentUser: g,
    guildId: j,
    initialSubsection: N
  });
  return (0, i.jsxs)("div", {
    className: v.body,
    children: [(0, i.jsx)(h.Z, {
      className: v.username,
      user: t,
      nickname: L,
      pronouns: null == y ? void 0 : y.pronouns,
      nicknameVariant: "heading-xl/bold",
      nicknameIcons: (0, i.jsx)(u.Z, {
        userId: t.id
      }),
      tags: (0, i.jsx)(c.Z, {
        displayProfile: y,
        themeType: _.lY.MODAL,
        onClose: O
      })
    }), E === b.OGo.PENDING_INCOMING && (0, i.jsx)(m.Z.Overlay, {
      className: v.bannerContainer,
      children: (0, i.jsx)(f.Z, {
        user: t,
        applicationId: P,
        guildId: null != (n = null == y ? void 0 : y.guildId) ? n : void 0,
        channelId: Z,
        friendToken: T,
        className: v.friendRequestBanner
      })
    }), C.map(e => (0, i.jsx)(m.Z.Overlay, {
      className: v.bannerContainer,
      children: (0, i.jsx)(f.Z, {
        user: t,
        channelId: Z,
        isGameRelationship: !0,
        applicationId: e.applicationId,
        className: v.friendRequestBanner
      })
    }, e.applicationId)), (0, i.jsx)(p.Z, {
      user: t,
      className: v.bannerContainer
    }), S && (0, i.jsx)(d.Z, {
      className: v.bannerContainer,
      isPremiumUser: M,
      onInteraction: O
    }), (0, i.jsx)(I.Z, {
      user: t,
      currentUser: g,
      displayProfile: y,
      guildId: j,
      items: w,
      initialSection: A,
      initialSubsection: N,
      onClose: O
    })]
  })
}