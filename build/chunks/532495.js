/** Chunk was on 51724 **/
n.d(t, {
  Z: () => Z
});
var r = n(200651);
n(192379);
var i = n(512722),
  s = n.n(i),
  a = n(442837),
  l = n(809206),
  o = n(634894),
  c = n(891728),
  d = n(328783),
  u = n(295474),
  m = n(309351),
  p = n(150039),
  g = n(126631),
  h = n(433411),
  f = n(532432),
  x = n(349177),
  b = n(872736),
  N = n(818420),
  _ = n(134795),
  E = n(610966),
  C = n(513901),
  j = n(451392),
  O = n(906364),
  v = n(643879),
  S = n(350327),
  T = n(621853),
  I = n(687158),
  y = n(25990),
  A = n(594174),
  P = n(74538),
  R = n(388032),
  D = n(348698);

function Z() {
  var e, t, n, i, Z, w, k, W;
  let L = (0, a.e7)([A.default], () => {
      let e = A.default.getCurrentUser();
      return s()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
    }),
    B = (0, a.e7)([T.Z], () => T.Z.getUserProfile(L.id)),
    {
      pendingAvatarV2: M,
      pendingGlobalName: U,
      pendingBanner: V,
      pendingBio: G,
      pendingPronouns: F,
      pendingAccentColor: H,
      pendingThemeColors: z,
      errors: Y
    } = (0, a.cj)([y.Z], () => {
      var e, t;
      let n = y.Z.getAllPending(),
        r = y.Z.getErrors();
      return e = function(e) {
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
      }({}, n), t = t = {
        errors: r
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), e
    }),
    K = (0, v.SD)({
      userId: L.id,
      image: M
    }),
    q = (0, u.gS)(),
    X = P.ZP.canUsePremiumProfileCustomization(L),
    J = (0, p.GH)(M, L.avatar),
    Q = (0, p.f$)(V, null == B ? void 0 : B.banner),
    $ = "DefaultCustomizationSections";
  (0, o.j)({
    location: $ + " auto on",
    autoTrackExposure: !0
  }), (0, o.j)({
    location: $ + " auto off",
    autoTrackExposure: !1
  });
  let ee = (0, I.ZP)(L.id),
    et = null == ee ? void 0 : ee.getLegacyUsername(),
    en = (null !== (n = null === (e = Y.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) > 0 ? Y.global_name : null !== (i = null == q ? void 0 : q.nick) && void 0 !== i ? i : [],
    er = (null !== (Z = null === (t = Y.bio) || void 0 === t ? void 0 : t.length) && void 0 !== Z ? Z : 0) > 0 ? Y.bio : null !== (w = null == q ? void 0 : q.bio) && void 0 !== w ? w : [],
    ei = (0, c.V)(),
    es = (0, m.H)("DefaultCustomizationSections");
  return (0, r.jsxs)("div", {
    className: D.sectionsContainer,
    children: [(0, r.jsx)(x.Z, {
      placeholder: L.username,
      errors: en,
      currentGlobalName: L.globalName,
      pendingGlobalName: U,
      onGlobalNameChange: l.UZ
    }), (0, r.jsx)(O.Z, {
      sectionTitle: R.NW.string(R.t["+T3RIy"]),
      errors: Y.pronouns,
      onPronounsChange: S.ID,
      pendingPronouns: F,
      currentPronouns: null !== (k = null == B ? void 0 : B.pronouns) && void 0 !== k ? k : ""
    }, "pronouns"), (0, r.jsx)(f.Z, {
      onAvatarChange: l.Re,
      showRemoveAvatarButton: J,
      errors: Y.avatar,
      sectionTitle: R.NW.string(R.t.lqaIxM),
      forcedDivider: !0
    }, "avatar"), (0, r.jsx)(h.Z, {
      user: L,
      sectionTitle: R.NW.string(R.t["7v0T9P"])
    }, "decoration"), es && (0, r.jsx)(N.Z, {
      user: L
    }), (0, r.jsx)(C.Z, {
      user: L,
      sectionTitle: R.NW.string(R.t.wR5wOj)
    }, "effect"), X ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(_.Z, {
        showRemoveBannerButton: Q,
        errors: Y.banner,
        onBannerChange: S.g_,
        forcedDivider: !0
      }, "banner"), (0, r.jsx)(j.Z, {
        user: L,
        pendingAvatarSrc: K,
        pendingColors: z,
        onThemeColorsChange: S.z5,
        forcedDivider: !0
      })]
    }) : (0, r.jsx)(E.Z, {
      user: L,
      savedUserColor: null == B ? void 0 : B.accentColor,
      pendingColor: H,
      setPendingAccentColor: S.CM
    }, "color"), (0, r.jsx)(g.Z, {
      sectionTitle: R.NW.string(R.t.NepzEx),
      errors: er,
      onBioChange: e => (0, p.xQ)(e, null == B ? void 0 : B.bio),
      pendingBio: G,
      currentBio: null !== (W = null == B ? void 0 : B.bio) && void 0 !== W ? W : ""
    }, "bio"), ei.length > 0 && (0, r.jsx)(d.Z, {
      availableClans: ei
    }), null != et && (0, r.jsx)(b.Z, {
      legacyUsername: et
    }, "legacy_username")]
  })
}