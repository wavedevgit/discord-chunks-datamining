/** Chunk was on 2998 **/
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
  b = t(944043),
  m = t(502762),
  v = t(530),
  g = t(740628),
  y = t(643518),
  I = t(228168),
  h = t(981631),
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
  })), A = (0, l.vh)(t.id), w = (0, i.wn)({
    location: "UserProfileModalBody"
  }), L = t.id === x.id, R = (0, a.I5)(x), M = c.ZP.useName(null == Z ? void 0 : Z.guildId, O, t), U = (0, y.Z)({
    user: t,
    currentUser: x,
    guildId: _,
    initialSubsection: P
  });
  return (0, r.jsxs)("div", {
    className: j.body,
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
    }), T === h.OGo.PENDING_INCOMING && (0, r.jsx)(m.Z.Overlay, {
      className: j.friendRequestBannerOverlay,
      children: (0, r.jsx)(p.Z, {
        user: t,
        applicationId: w ? C : void 0,
        guildId: null !== (n = null == Z ? void 0 : Z.guildId) && void 0 !== n ? n : void 0,
        channelId: O,
        friendToken: E,
        className: j.friendRequestBanner
      })
    }), w && A.map(e => (0, r.jsx)(m.Z.Overlay, {
      className: j.friendRequestBannerOverlay,
      children: (0, r.jsx)(p.Z, {
        user: t,
        channelId: O,
        isGameRelationship: !0,
        applicationId: e.applicationId,
        className: j.friendRequestBanner
      })
    }, e.applicationId)), (0, r.jsx)(b.Z, {
      user: t,
      source: b.t.MODAL
    }), L && (0, r.jsx)(u.Z, {
      isPremiumUser: R,
      onInteraction: S
    }), (0, r.jsx)(m.Z.Overlay, {
      className: j.overlay,
      children: (0, r.jsx)(g.Z, {
        user: t,
        currentUser: x,
        displayProfile: Z,
        guildId: _,
        items: U,
        initialSection: N,
        initialSubsection: P,
        onClose: S
      })
    })]
  })
}