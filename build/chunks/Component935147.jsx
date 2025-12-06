/** Chunk was on web.js **/
/** chunk id: 935147, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk402567 = require("./402567.js"),
  Chunk629654 = require("./629654.jsx"),
  Chunk230916 = require("./230916.js"),
  Chunk53691 = require("./53691.jsx"),
  Chunk165583 = require("./165583.jsx"),
  Chunk267717 = require("./267717.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk350327 = require("./350327.js"),
  Chunk996073 = require("./996073.js"),
  Chunk25990 = require("./25990.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk296810 = require("./296810.jsx"),
  Chunk532432 = require("./532432.jsx"),
  Chunk235433 = require("./235433.jsx"),
  Chunk504983 = require("./504983.jsx"),
  Chunk134795 = require("./134795.jsx"),
  Chunk451392 = require("./451392.jsx"),
  Chunk490220 = require("./490220.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk553330 = require("./553330.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e) {
  var t, n;
  let {
    user: M,
    isVisible: U,
    shouldShow: Z
  } = e, B = S.ZP.isPremium(M), F = S.ZP.canUseAnimatedAvatar(M), {
    pendingAvatar: V,
    pendingThemeColors: H,
    tryItOutThemeColors: Y,
    tryItOutAvatar: W,
    tryItOutBanner: K
  } = (0, a.cj)([O.Z], () => {
    let e = O.Z.getAllPending(),
      t = O.Z.getErrors();
    return G(k({}, e, O.Z.getAllTryItOut()), {
      errors: t
    })
  }), {
    preset: z,
    onShuffle: q
  } = (0, f.Z)(), Q = i.useRef(null);
  (0, y.Z)(Q, x.Y_.TRY_IT_OUT);
  let {
    analyticsLocations: X,
    newestAnalyticsLocation: J,
    sourceAnalyticsLocations: $
  } = (0, c.ZP)(l.Z.USER_SETTINGS_TRY_OUT_PREMIUM), ee = e => {
    e && ((0, s.I5)(W), (0, b.z5)(Y), (0, b.ho)(K), v.default.track(w.rMx.TRY_IT_OUT_PRESET_SELECTED, {
      preset: z
    }))
  };
  i.useEffect(() => {
    U && v.default.track(w.rMx.PREMIUM_UPSELL_VIEWED, {
      type: D.cd.PREMIUM_PROFILE_TRY_IT_OUT,
      location: {
        page: w.ZY5.USER_SETTINGS
      },
      location_stack: $
    })
  }, [$, M, U]);
  let et = (null == (n = (0, d.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === D.Si.TIER_2,
    en = (0, u.N)(),
    er = (0, _.Wp)(en, D.Si.TIER_2),
    ei = () => B ? L.intl.string(L.t.AfRWI8) : er ? L.intl.formatToPlainString(L.t.bkQ4bH, {
      percent: null == en ? true : en.discount.amount
    }) : L.intl.string(L.t.pj0XBN);
  return Z ? (0, r.jsx)(c.Gt, {
    value: X,
    children: (0, r.jsxs)(C.Z, {
      ref: Q,
      className: j.tryItOutSection,
      type: C.Y.PREMIUM,
      isShown: true,
      hasBackground: true,
      children: [(0, r.jsx)(I.Z, {
        layoutClassName: j.tryItOutLayout,
        profilePreviewTitle: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.SrA, {
            size: "md",
            color: "currentColor",
            className: j.premiumIcon
          }), L.intl.string(L.t.gMlDNd)]
        }),
        profilePreview: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(p.Z, {
            preset: z,
            onShuffle: q
          }), (0, r.jsx)(R.Z, {
            user: M
          })]
        }),
        children: (0, r.jsxs)("div", {
          className: j.editor,
          children: [(0, r.jsxs)("div", {
            children: [(0, r.jsx)(o.Heading, {
              variant: "heading-xl/extrabold",
              children: L.intl.string(L.t["2zGdAW"])
            }), (0, r.jsx)(o.Text, {
              className: j.description,
              variant: "text-sm/normal",
              children: L.intl.string(L.t.xeEC20)
            })]
          }), (0, r.jsx)(P.Z, {
            className: j.customizationSection,
            user: M,
            pendingAvatarSrc: (0, E.SD)({
              userId: M.id,
              image: null != W ? W : V
            }),
            pendingColors: null != Y ? Y : H,
            onThemeColorsChange: b.rf,
            showPremiumIcon: false,
            preventDisabled: true
          }), (0, r.jsx)(N.Z, {
            className: j.customizationSection,
            isTryItOut: true,
            showRemoveBannerButton: null != K,
            onBannerChange: b.f4,
            showPremiumIcon: false
          }), !F && (0, r.jsx)(T.Z, {
            className: j.customizationSection,
            isTryItOut: true,
            onAvatarChange: b.c_,
            showRemoveAvatarButton: false,
            changeAvatarButtonText: L.intl.string(L.t["7z0D1c"]),
            sectionTitle: L.intl.string(L.t.vtFfPX)
          }), (0, r.jsx)(A.Z, {
            user: M,
            className: j.customizationSection
          }), !et && (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: L.intl.string(L.t["smo74/"])
          })]
        })
      }), !et && (0, r.jsx)(m.p, {
        onSubscribeModalClose: ee,
        className: j.floatingUpsell,
        showUpsell: true,
        text: L.intl.format(L.t.TmfgI2, {
          onClick: () => {
            (0, g.y)({
              analyticsSource: J,
              onSubscribeFinish: ee
            })
          }
        }),
        button: ei(),
        position: "inline",
        showShadow: false
      }), et && (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          className: j.premiumTier2Divider
        }), (0, r.jsx)(h.ZP, {
          type: D.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
          subscriptionTier: D.Si.TIER_2
        })]
      })]
    })
  }) : null
}