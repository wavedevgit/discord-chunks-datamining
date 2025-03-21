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
  p = n(4517),
  m = n(5192),
  h = n(228168),
  f = n(885833);

function b(e) {
  let {
    user: t,
    previewText: n,
    previewEmoji: b,
    previewStatus: j,
    placeHolderText: S,
    transitionState: g
  } = e, x = (0, o.ZP)(t.id);
  return (0, r.jsxs)(c.Z, {
    user: t,
    displayProfile: x,
    profileType: h.y0.BITE_SIZE,
    className: f.profilePreviewContainer,
    children: [(0, r.jsxs)("header", {
      children: [(0, r.jsx)(u.Z, {
        user: t,
        displayProfile: x,
        profileType: h.y0.BITE_SIZE
      }), (0, r.jsx)("div", {
        inert: "",
        children: (0, r.jsx)(l.Z, {
          user: t,
          displayProfile: x,
          profileType: h.y0.BITE_SIZE,
          previewStatus: j,
          className: f.avatar
        })
      }), (0, r.jsx)(p.Z, {
        location: "CustomStatusUserProfilePreview",
        user: t,
        profileType: h.y0.BITE_SIZE,
        previewText: n,
        previewEmoji: b,
        placeholderText: S,
        hasEntered: g === i.Dvm.ENTERED
      })]
    }), (null == x ? void 0 : x.profileEffectId) != null && (0, r.jsx)(a.Z, {
      profileEffectId: x.profileEffectId
    }), (0, r.jsx)("div", {
      className: f.usernameContainer,
      inert: "",
      children: (0, r.jsx)(d.Z, {
        user: t,
        profileType: h.y0.BITE_SIZE,
        nickname: m.ZP.getName(null, null, t),
        pronouns: null == x ? void 0 : x.pronouns,
        tags: (0, r.jsx)(s.Z, {
          displayProfile: x,
          profileType: h.y0.BITE_SIZE
        })
      })
    })]
  })
}