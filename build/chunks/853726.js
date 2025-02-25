/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => p
});
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(648052),
  a = n(530),
  s = n(420654),
  l = n(116854),
  c = n(271383),
  u = n(246946),
  d = n(654904),
  f = n(228168),
  _ = n(913340);

function p(e) {
  var t;
  let {
    user: n,
    displayProfile: p,
    guild: h,
    pendingAvatar: g,
    pendingNickname: m,
    pendingGlobalName: E,
    pendingBio: v,
    pendingPronouns: b,
    isTryItOutFlow: y,
    hideBioSection: O
  } = e, S = (0, i.e7)([c.ZP], () => null == h ? null : c.ZP.getMember(h.id, n.id)), I = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation), T = null == p ? void 0 : null === (t = p.getPreviewBio(v)) || void 0 === t ? void 0 : t.value, N = null != b ? b : null == p ? void 0 : p.pronouns, A = (0, d.Ly)({
    pendingNickname: m,
    pendingGlobalName: E,
    user: n,
    guildMember: S
  }), C = () => {
    if (null != S && null !== g && (null != S.avatar || null != g)) return (0, r.jsx)(l.Z, {
      user: n,
      nickname: A
    })
  };
  return (0, r.jsxs)("div", {
    inert: "",
    className: _.body,
    children: [(0, r.jsx)(a.Z, {
      user: n,
      profileType: f.y0.BITE_SIZE,
      usernameIcon: C(),
      nickname: A,
      pronouns: N,
      isTryItOut: y,
      tags: (0, r.jsx)(o.Z, {
        displayProfile: p,
        profileType: f.y0.BITE_SIZE
      })
    }), !O && null != T && "" !== T && (0, r.jsx)(s.Z, {
      user: n,
      bio: T,
      hidePersonalInformation: I,
      viewFullBioDisabled: !0
    })]
  })
}