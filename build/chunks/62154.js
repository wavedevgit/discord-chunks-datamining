/** Chunk was on 81818 **/
t.d(n, {
  Z: () => _
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
  b = t(944043),
  y = t(502762),
  v = t(530),
  m = t(740628),
  g = t(643518),
  I = t(228168),
  j = t(981631),
  h = t(835145);

function _(e) {
  var n;
  let {
    user: t,
    currentUser: _,
    guildId: x,
    channelId: O,
    displayProfile: Z,
    initialSection: P,
    initialSubsection: N,
    friendToken: E,
    onClose: S
  } = e, {
    relationshipType: T,
    originApplicationId: C
  } = (0, o.cj)([s.Z], () => ({
    relationshipType: s.Z.getRelationshipType(t.id),
    originApplicationId: s.Z.getOriginApplicationId(t.id)
  })), A = (0, l.vh)(t.id), w = (0, i.wn)({
    location: "UserProfileModalBody"
  }), L = t.id === _.id, R = (0, a.I5)(_), M = c.ZP.useName(null == Z ? void 0 : Z.guildId, O, t), B = (0, g.Z)({
    user: t,
    currentUser: _,
    guildId: x,
    initialSubsection: N
  });
  return (0, r.jsxs)("div", {
    className: h.body,
    children: [(0, r.jsx)(v.Z, {
      user: t,
      profileType: I.y0.FULL_SIZE,
      nickname: M,
      pronouns: null == Z ? void 0 : Z.pronouns,
      nicknameVariant: "heading-xl/bold",
      nicknameIcons: (0, r.jsx)(f.Z, {
        userId: t.id
      }),
      tags: (0, r.jsx)(d.Z, {
        displayProfile: Z,
        profileType: I.y0.FULL_SIZE,
        onClose: S
      })
    }), T === j.OGo.PENDING_INCOMING && (0, r.jsx)(y.Z.Overlay, {
      className: h.friendRequestBannerOverlay,
      children: (0, r.jsx)(p.Z, {
        user: t,
        applicationId: w ? C : void 0,
        guildId: null !== (n = null == Z ? void 0 : Z.guildId) && void 0 !== n ? n : void 0,
        channelId: O,
        friendToken: E,
        className: h.friendRequestBanner
      })
    }), w && A.map(e => (0, r.jsx)(y.Z.Overlay, {
      className: h.friendRequestBannerOverlay,
      children: (0, r.jsx)(p.Z, {
        user: t,
        channelId: O,
        isGameRelationship: !0,
        applicationId: e.applicationId,
        className: h.friendRequestBanner
      })
    }, e.applicationId)), (0, r.jsx)(b.Z, {
      user: t,
      source: b.t.MODAL
    }), L && (0, r.jsx)(u.Z, {
      isPremiumUser: R,
      onInteraction: S
    }), (0, r.jsx)(y.Z.Overlay, {
      className: h.overlay,
      children: (0, r.jsx)(m.Z, {
        user: t,
        currentUser: _,
        displayProfile: Z,
        guildId: x,
        items: B,
        initialSection: P,
        initialSubsection: N,
        onClose: S
      })
    })]
  })
}