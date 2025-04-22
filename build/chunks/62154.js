/** Chunk was on 54636 **/
t.d(n, {
  Z: () => y
});
var r = t(200651);
t(192379);
var o = t(442837),
  i = t(320582),
  l = t(699516),
  s = t(5192),
  c = t(111361),
  a = t(648052),
  d = t(537006),
  u = t(681837),
  f = t(91433),
  p = t(944043),
  m = t(502762),
  b = t(530),
  h = t(740628),
  g = t(643518),
  j = t(228168),
  v = t(981631),
  x = t(405666);

function y(e) {
  var n;
  let {
    user: t,
    currentUser: y,
    guildId: O,
    channelId: I,
    displayProfile: _,
    initialSection: Z,
    initialSubsection: P,
    friendToken: A,
    onClose: E
  } = e, {
    relationshipType: N,
    originApplicationId: T
  } = (0, o.cj)([l.Z], () => ({
    relationshipType: l.Z.getRelationshipType(t.id),
    originApplicationId: l.Z.getOriginApplicationId(t.id)
  })), C = (0, i.vh)(t.id), S = t.id === y.id, w = (0, c.I5)(y), M = s.ZP.useName(null == _ ? void 0 : _.guildId, I, t), R = (0, g.Z)({
    user: t,
    currentUser: y,
    guildId: O,
    initialSubsection: P
  });
  return (0, r.jsxs)("div", {
    className: x.body,
    children: [(0, r.jsx)(b.Z, {
      className: x.username,
      user: t,
      themeType: j.lY.MODAL,
      nickname: M,
      pronouns: null == _ ? void 0 : _.pronouns,
      nicknameVariant: "heading-xl/bold",
      nicknameIcons: (0, r.jsx)(u.Z, {
        userId: t.id
      }),
      tags: (0, r.jsx)(a.Z, {
        displayProfile: _,
        themeType: j.lY.MODAL,
        onClose: E
      })
    }), N === v.OGo.PENDING_INCOMING && (0, r.jsx)(m.Z.Overlay, {
      className: x.bannerContainer,
      children: (0, r.jsx)(f.Z, {
        user: t,
        applicationId: T,
        guildId: null != (n = null == _ ? void 0 : _.guildId) ? n : void 0,
        channelId: I,
        friendToken: A,
        className: x.friendRequestBanner
      })
    }), C.map(e => (0, r.jsx)(m.Z.Overlay, {
      className: x.bannerContainer,
      children: (0, r.jsx)(f.Z, {
        user: t,
        channelId: I,
        isGameRelationship: !0,
        applicationId: e.applicationId,
        className: x.friendRequestBanner
      })
    }, e.applicationId)), (0, r.jsx)(p.Z, {
      user: t,
      className: x.bannerContainer
    }), S && (0, r.jsx)(d.Z, {
      className: x.bannerContainer,
      isPremiumUser: w,
      onInteraction: E
    }), (0, r.jsx)(h.Z, {
      user: t,
      currentUser: y,
      displayProfile: _,
      guildId: O,
      items: R,
      initialSection: Z,
      initialSubsection: P,
      onClose: E
    })]
  })
}