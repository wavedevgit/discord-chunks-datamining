/** Chunk was on 31649 **/
n.d(t, {
  Z: () => b
});
var r = n(200651);
n(192379);
var i = n(481060),
  l = n(680295),
  o = n(687158),
  a = n(899007),
  s = n(648052),
  u = n(867176),
  c = n(502762),
  d = n(530),
  p = n(4517),
  m = n(5192),
  f = n(228168),
  h = n(552732);

function b(e) {
  let {
    user: t,
    previewText: n,
    previewEmoji: b,
    previewStatus: j,
    placeHolderText: x,
    transitionState: v
  } = e, S = (0, o.ZP)(t.id);
  return (0, r.jsxs)(c.Z, {
    user: t,
    displayProfile: S,
    profileType: f.y0.BITE_SIZE,
    className: h.profilePreviewContainer,
    children: [(0, r.jsxs)("header", {
      children: [(0, r.jsx)(u.Z, {
        user: t,
        displayProfile: S,
        profileType: f.y0.BITE_SIZE
      }), (0, r.jsx)("div", {
        inert: "",
        children: (0, r.jsx)(a.Z, {
          user: t,
          displayProfile: S,
          profileType: f.y0.BITE_SIZE,
          previewStatus: j,
          className: h.avatar
        })
      }), (0, r.jsx)(p.Z, {
        location: "CustomStatusUserProfilePreview",
        user: t,
        profileType: f.y0.BITE_SIZE,
        previewText: n,
        previewEmoji: b,
        placeholderText: x,
        hasEntered: v === i.Dvm.ENTERED
      })]
    }), (null == S ? void 0 : S.profileEffectId) != null && (0, r.jsx)(l.Z, {
      profileEffectId: S.profileEffectId
    }), (0, r.jsx)("div", {
      className: h.usernameContainer,
      inert: "",
      children: (0, r.jsx)(d.Z, {
        user: t,
        profileType: f.y0.BITE_SIZE,
        nickname: m.ZP.getName(null, null, t),
        pronouns: null == S ? void 0 : S.pronouns,
        tags: (0, r.jsx)(s.Z, {
          displayProfile: S,
          profileType: f.y0.BITE_SIZE
        })
      })
    })]
  })
}