/** Chunk was on 31649 **/
n.d(t, {
  Z: () => b
});
var r = n(200651);
n(192379);
var i = n(481060),
  a = n(680295),
  o = n(687158),
  l = n(899007),
  s = n(648052),
  u = n(867176),
  c = n(502762),
  d = n(530),
  m = n(4517),
  p = n(5192),
  h = n(228168),
  f = n(885833);

function b(e) {
  let {
    user: t,
    previewText: n,
    previewEmoji: b,
    previewStatus: j,
    placeHolderText: S,
    transitionState: x
  } = e, v = (0, o.ZP)(t.id);
  return (0, r.jsxs)(c.Z, {
    user: t,
    displayProfile: v,
    profileType: h.y0.BITE_SIZE,
    className: f.profilePreviewContainer,
    children: [(0, r.jsxs)("header", {
      children: [(0, r.jsx)(u.Z, {
        user: t,
        displayProfile: v,
        profileType: h.y0.BITE_SIZE
      }), (0, r.jsx)("div", {
        inert: "",
        children: (0, r.jsx)(l.Z, {
          user: t,
          displayProfile: v,
          profileType: h.y0.BITE_SIZE,
          previewStatus: j,
          className: f.avatar
        })
      }), (0, r.jsx)(m.Z, {
        location: "CustomStatusUserProfilePreview",
        user: t,
        profileType: h.y0.BITE_SIZE,
        previewText: n,
        previewEmoji: b,
        placeholderText: S,
        hasEntered: x === i.Dvm.ENTERED
      })]
    }), (null == v ? void 0 : v.profileEffectId) != null && (0, r.jsx)(a.Z, {
      profileEffectId: v.profileEffectId
    }), (0, r.jsx)("div", {
      className: f.usernameContainer,
      inert: "",
      children: (0, r.jsx)(d.Z, {
        user: t,
        profileType: h.y0.BITE_SIZE,
        nickname: p.ZP.getName(null, null, t),
        pronouns: null == v ? void 0 : v.pronouns,
        tags: (0, r.jsx)(s.Z, {
          displayProfile: v,
          profileType: h.y0.BITE_SIZE
        })
      })
    })]
  })
}