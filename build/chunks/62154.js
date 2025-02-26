/** Chunk was on 73049 **/
t.d(n, {
  Z: () => x
});
var r = t(200651);
t(192379);
var o = t(442837),
  i = t(372460),
  l = t(320582),
  s = t(699516),
  c = t(5192),
  a = t(111361),
  d = t(648052),
  u = t(537006),
  f = t(681837),
  p = t(91433),
  m = t(944043),
  b = t(502762),
  g = t(530),
  v = t(740628),
  y = t(643518),
  h = t(228168),
  I = t(981631),
  j = t(608685);

function x(e) {
  var n;
  let {
    user: t,
    currentUser: x,
    guildId: _,
    channelId: O,
    displayProfile: Z,
    initialSection: N,
    initialSubsection: P,
    friendToken: E,
    onClose: S
  } = e, {
    relationshipType: T,
    originApplicationId: C
  } = (0, o.cj)([s.Z], () => ({
    relationshipType: s.Z.getRelationshipType(t.id),
    originApplicationId: s.Z.getOriginApplicationId(t.id)
  })), L = (0, l.vh)(t.id), A = (0, i.wn)({
    location: "UserProfileModalBody"
  }), w = t.id === x.id, M = (0, a.I5)(x), U = c.ZP.useName(null == Z ? void 0 : Z.guildId, O, t), R = (0, y.Z)({
    user: t,
    currentUser: x,
    guildId: _,
    initialSubsection: P
  });
  return (0, r.jsxs)("div", {
    className: j.body,
    children: [(0, r.jsx)(g.Z, {
      user: t,
      profileType: h.y0.FULL_SIZE,
      nickname: U,
      pronouns: null == Z ? void 0 : Z.pronouns,
      nicknameVariant: "heading-xl/bold",
      nicknameIcons: (0, r.jsx)(f.Z, {
        userId: t.id
      }),
      tags: (0, r.jsx)(d.Z, {
        displayProfile: Z,
        profileType: h.y0.FULL_SIZE,
        onClose: S
      })
    }), T === I.OGo.PENDING_INCOMING && (0, r.jsx)(b.Z.Overlay, {
      className: j.friendRequestBannerOverlay,
      children: (0, r.jsx)(p.Z, {
        user: t,
        applicationId: A ? C : void 0,
        guildId: null !== (n = null == Z ? void 0 : Z.guildId) && void 0 !== n ? n : void 0,
        channelId: O,
        friendToken: E,
        className: j.friendRequestBanner
      })
    }), A && L.map(e => (0, r.jsx)(b.Z.Overlay, {
      className: j.friendRequestBannerOverlay,
      children: (0, r.jsx)(p.Z, {
        user: t,
        channelId: O,
        isGameRelationship: !0,
        applicationId: e.applicationId,
        className: j.friendRequestBanner
      })
    }, e.applicationId)), (0, r.jsx)(m.Z, {
      user: t,
      source: m.t.MODAL
    }), w && (0, r.jsx)(u.Z, {
      isPremiumUser: M,
      onInteraction: S
    }), (0, r.jsx)(b.Z.Overlay, {
      className: j.overlay,
      children: (0, r.jsx)(v.Z, {
        user: t,
        currentUser: x,
        displayProfile: Z,
        guildId: _,
        items: R,
        initialSection: N,
        initialSubsection: P,
        onClose: S
      })
    })]
  })
}