/** Chunk was on web.js **/
/** chunk id: 935147, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => W
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk443753 = require("./443753.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk402567 = require("./402567.js"),
  Chunk629654 = require("./629654.jsx"),
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
  Chunk433411 = require("./433411.jsx"),
  Chunk532432 = require("./532432.jsx"),
  Chunk235433 = require("./235433.jsx"),
  Chunk504983 = require("./504983.jsx"),
  Chunk134795 = require("./134795.jsx"),
  Chunk513901 = require("./513901.jsx"),
  Chunk451392 = require("./451392.jsx"),
  Chunk490220 = require("./490220.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk553330 = require("./553330.js");

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      F(e, t, n[t])
    })
  }
  return e
}

function H(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function W(e) {
  var t, n;
  let {
    user: F,
    isVisible: H,
    shouldShow: W
  } = e, K = C.ZP.isPremium(F), {
    pendingAvatar: z,
    pendingThemeColors: q,
    tryItOutThemeColors: X,
    tryItOutAvatar: Q,
    tryItOutBanner: J,
    tryItOutProfileEffect: $,
    tryItOutAvatarDecoration: ee
  } = (0, a.cj)([S.Z], () => {
    let e = S.Z.getAllPending(),
      t = S.Z.getErrors();
    return Y(V({}, e, S.Z.getAllTryItOut()), {
      errors: t
    })
  }), et = (0, p.Z)($), {
    preset: en,
    onShuffle: er
  } = (0, g.Z)(), ei = i.useRef(null);
  (0, T.Z)(ei, G.Y_.TRY_IT_OUT);
  let {
    analyticsLocations: ea,
    newestAnalyticsLocation: eo,
    sourceAnalyticsLocations: es
  } = (0, c.ZP)(l.Z.USER_SETTINGS_TRY_OUT_PREMIUM), el = e => {
    if (e) {
      if ((0, s.I5)(Q), (0, I.z5)(X), (0, I.ho)(J), null != ee) {
        let e = d.Z.getProduct(ee.skuId);
        null != e && (0, _.G1)(e) ? (0, u.fK)(e.skuId).then(() => (0, s.cV)(ee)) : null != f.Z.getPurchase(ee.skuId) && (0, s.cV)(ee)
      }
      A.default.track(j.rMx.TRY_IT_OUT_PRESET_SELECTED, {
        preset: en
      })
    }
  };
  i.useEffect(() => {
    H && A.default.track(j.rMx.PREMIUM_UPSELL_VIEWED, {
      type: U.cd.PREMIUM_PROFILE_TRY_IT_OUT,
      location: {
        page: j.ZY5.USER_SETTINGS
      },
      location_stack: es
    })
  }, [es, F, H]);
  let ec = (null == (n = (0, m.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === U.Si.TIER_2,
    eu = (0, h.Ng)(),
    ed = (0, h.Wp)(eu, U.Si.TIER_2),
    ef = () => K ? B.intl.string(B.t.AfRWI8) : ed ? B.intl.formatToPlainString(B.t.bkQ4bH, {
      percent: null == eu ? true : eu.discount.amount
    }) : B.intl.string(B.t.pj0XBN);
  return W ? (0, r.jsx)(c.Gt, {
    value: ea,
    children: (0, r.jsxs)(D.Z, {
      ref: ei,
      className: Z.tryItOutSection,
      type: D.Y.PREMIUM,
      isShown: true,
      hasBackground: true,
      children: [(0, r.jsx)(N.Z, {
        layoutClassName: Z.tryItOutLayout,
        profilePreviewTitle: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.SrA, {
            size: "md",
            color: "currentColor",
            className: Z.premiumIcon
          }), B.intl.string(B.t.gMlDNd)]
        }),
        profilePreview: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(E.Z, {
            preset: en,
            onShuffle: er
          }), (0, r.jsx)(k.Z, {
            user: F
          })]
        }),
        children: (0, r.jsxs)("div", {
          className: Z.editor,
          children: [(0, r.jsxs)("div", {
            children: [(0, r.jsx)(o.Heading, {
              variant: "heading-xl/extrabold",
              children: B.intl.string(B.t["2zGdAW"])
            }), (0, r.jsx)(o.Text, {
              className: Z.description,
              variant: "text-sm/normal",
              children: B.intl.string(B.t.xeEC20)
            })]
          }), (0, r.jsx)(M.Z, {
            className: Z.customizationSection,
            user: F,
            pendingAvatarSrc: (0, v.SD)({
              userId: F.id,
              image: null != Q ? Q : z
            }),
            pendingColors: null != X ? X : q,
            onThemeColorsChange: I.rf,
            showPremiumIcon: false,
            preventDisabled: true
          }), (0, r.jsx)(L.Z, {
            className: Z.customizationSection,
            isTryItOutFlow: true,
            showRemoveBannerButton: null != J,
            onBannerChange: I.f4,
            showPremiumIcon: false
          }), (0, r.jsx)(P.Z, {
            className: Z.customizationSection,
            isTryItOutFlow: true,
            onAvatarChange: I.c_,
            showRemoveAvatarButton: false,
            changeAvatarButtonText: B.intl.string(B.t["7z0D1c"]),
            sectionTitle: B.intl.string(B.t.vtFfPX)
          }), (0, r.jsx)(R.Z, {
            isTryItOutFlow: true,
            className: Z.customizationSection,
            user: F,
            sectionTitle: B.intl.string(B.t["7v0T9P"])
          }, "decoration"), (0, r.jsx)(w.Z, {
            user: F,
            className: Z.customizationSection
          }), (0, r.jsx)(x.Z, {
            className: Z.customizationSection,
            isTryItOutFlow: true,
            initialSelectedEffect: et,
            user: F,
            sectionTitle: B.intl.string(B.t.wR5wOo)
          }, "effect"), !ec && (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: B.intl.string(B.t["smo74/"])
          })]
        })
      }), !ec && (0, r.jsx)(b.p, {
        onSubscribeModalClose: el,
        className: Z.floatingUpsell,
        showUpsell: true,
        text: B.intl.format(B.t.TmfgI2, {
          onClick: () => {
            (0, O.y)({
              analyticsSource: eo,
              onSubscribeFinish: el
            })
          }
        }),
        button: ef(),
        position: "inline",
        showShadow: false
      }), ec && (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          className: Z.premiumTier2Divider
        }), (0, r.jsx)(y.ZP, {
          type: U.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
          subscriptionTier: U.Si.TIER_2
        })]
      })]
    })
  }) : null
}