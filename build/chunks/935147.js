/** Chunk was on 51724 **/
n.d(t, {
  Z: () => V
}), n(47120), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(809206),
  o = n(634894),
  c = n(100527),
  d = n(906732),
  u = n(335131),
  m = n(597688),
  p = n(1870),
  g = n(884697),
  h = n(175756),
  f = n(104494),
  x = n(639119),
  b = n(211712),
  N = n(629654),
  _ = n(53691),
  E = n(165583),
  C = n(267717),
  j = n(643879),
  O = n(350327),
  v = n(996073),
  S = n(25990),
  T = n(626135),
  I = n(74538),
  y = n(296810),
  A = n(433411),
  P = n(532432),
  R = n(504983),
  D = n(134795),
  Z = n(513901),
  w = n(451392),
  k = n(490220),
  W = n(981631),
  L = n(474936),
  B = n(526761),
  M = n(388032),
  U = n(76890);

function V(e) {
  var t, n;
  let {
    user: V,
    isVisible: G,
    shouldShow: F
  } = e, H = I.ZP.isPremium(V), {
    pendingAvatarV2: z,
    pendingThemeColors: Y,
    tryItOutThemeColors: K,
    tryItOutAvatarV2: q,
    tryItOutBanner: X,
    tryItOutProfileEffectId: J,
    tryItOutAvatarDecoration: Q
  } = (0, s.cj)([S.Z], () => {
    var e, t;
    let n = S.Z.getAllPending(),
      r = S.Z.getErrors();
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
    }({}, n, S.Z.getAllTryItOut()), t = t = {
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
  }), $ = (0, h.Z)(J), ee = i.useRef(null);
  (0, v.Z)(ee, B.Y_.TRY_IT_OUT);
  let {
    analyticsLocations: et,
    sourceAnalyticsLocations: en
  } = (0, d.ZP)(c.Z.USER_SETTINGS_TRY_OUT_PREMIUM), [er, ei] = i.useState(Math.floor(Math.random() * b.J2.length)), es = e => {
    if (e) {
      if ((0, l.Re)(q), (0, O.z5)(K), (0, O.ho)(X), null != Q) {
        let e = m.Z.getProduct(Q.skuId);
        null != e && (0, g.G1)(e) ? (0, u.fK)(e.skuId).then(() => (0, l.cV)(Q)) : null != p.Z.getPurchase(Q.skuId) && (0, l.cV)(Q)
      }
      T.default.track(W.rMx.TRY_IT_OUT_PRESET_SELECTED, {
        preset: b.J2[er].presetName
      })
    }
  };
  i.useEffect(() => {
    G && T.default.track(W.rMx.PREMIUM_UPSELL_VIEWED, {
      type: L.cd.PREMIUM_PROFILE_TRY_IT_OUT,
      location: {
        page: W.ZY5.USER_SETTINGS
      },
      location_stack: en
    })
  }, [en, V, G]);
  let ea = (null === (n = (0, x.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === L.Si.TIER_2,
    el = (0, f.Ng)(),
    eo = (0, f.Wp)(el, L.Si.TIER_2),
    ec = "TryOutPremiumSection";
  return ((0, o.j)({
    location: ec + " auto on",
    autoTrackExposure: !0
  }), (0, o.j)({
    location: ec + " auto off",
    autoTrackExposure: !1
  }), F) ? (0, r.jsx)(d.Gt, {
    value: et,
    children: (0, r.jsxs)(R.Z, {
      ref: ee,
      className: U.tryItOutSection,
      type: R.Y.PREMIUM,
      isShown: !0,
      hasBackground: !0,
      children: [(0, r.jsx)(y.Z, {
        layoutClassName: U.tryItOutLayout,
        previewTitle: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.SrA, {
            size: "md",
            color: "currentColor",
            className: U.premiumIcon
          }), M.NW.string(M.t.gMlDNT)]
        }),
        profilePreview: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(N.Z, {
            selectedIndex: er,
            setSelectedIndex: ei
          }), (0, r.jsx)(k.Z, {
            user: V
          })]
        }),
        children: (0, r.jsxs)("div", {
          className: U.editor,
          children: [(0, r.jsxs)("div", {
            children: [(0, r.jsx)(a.X6q, {
              variant: "heading-xl/extrabold",
              children: M.NW.string(M.t["2zGdAQ"])
            }), (0, r.jsx)(a.Text, {
              className: U.description,
              variant: "text-sm/normal",
              children: M.NW.string(M.t.xeEC29)
            })]
          }), (0, r.jsx)(w.Z, {
            className: U.customizationSection,
            user: V,
            pendingAvatarSrc: (0, j.SD)({
              userId: V.id,
              image: null != q ? q : z
            }),
            pendingColors: null != K ? K : Y,
            onThemeColorsChange: O.rf,
            showPremiumIcon: !1,
            preventDisabled: !0
          }), (0, r.jsx)(D.Z, {
            className: U.customizationSection,
            isTryItOutFlow: !0,
            showRemoveBannerButton: null != X,
            onBannerChange: O.f4,
            showPremiumIcon: !1
          }), (0, r.jsx)(P.Z, {
            className: U.customizationSection,
            isTryItOutFlow: !0,
            onAvatarChange: O.US,
            showRemoveAvatarButton: !1,
            changeAvatarButtonText: M.NW.string(M.t["7z0D1d"]),
            sectionTitle: M.NW.string(M.t.vtFfPT)
          }), (0, r.jsx)(A.Z, {
            isTryItOutFlow: !0,
            className: U.customizationSection,
            user: V,
            sectionTitle: M.NW.string(M.t["7v0T9P"])
          }, "decoration"), (0, r.jsx)(Z.Z, {
            className: U.customizationSection,
            isTryItOutFlow: !0,
            initialSelectedEffectId: $,
            user: V,
            sectionTitle: M.NW.string(M.t.wR5wOj)
          }, "effect"), !ea && (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: M.NW.string(M.t["smo74+"])
          })]
        })
      }), !ea && (0, r.jsx)(_.p, {
        onSubscribeModalClose: es,
        className: U.floatingUpsell,
        showUpsell: !0,
        text: M.NW.format(M.t.TmfgIy, {
          onClick: () => (0, C.y)(es)
        }),
        button: H ? M.NW.string(M.t.AfRWIy) : eo ? M.NW.formatToPlainString(M.t.bkQ4bG, {
          percent: null == el ? void 0 : el.discount.amount
        }) : M.NW.string(M.t.pj0XBA),
        position: "inline",
        showShadow: !1
      }), ea && (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          className: U.premiumTier2Divider
        }), (0, r.jsx)(E.ZP, {
          type: L.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
          subscriptionTier: L.Si.TIER_2
        })]
      })]
    })
  }) : null
}