/** Chunk was on web.js **/
/** chunk id: 935147, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Y
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
  Chunk175756 = require("./175756.js"),
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

function Z(e, t, n) {
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
      Z(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function H(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Y(e) {
  var t, n;
  let {
    user: Z,
    isVisible: F,
    shouldShow: Y
  } = e, W = C.ZP.isPremium(Z), {
    pendingAvatar: K,
    pendingThemeColors: z,
    tryItOutThemeColors: q,
    tryItOutAvatar: X,
    tryItOutBanner: Q,
    tryItOutProfileEffectId: J,
    tryItOutAvatarDecoration: $
  } = (0, a.cj)([S.Z], () => {
    let e = S.Z.getAllPending(),
      t = S.Z.getErrors();
    return H(V({}, e, S.Z.getAllTryItOut()), {
      errors: t
    })
  }), ee = (0, p.Z)(J), {
    preset: et,
    onShuffle: en
  } = (0, g.Z)(), er = i.useRef(null);
  (0, T.Z)(er, U.Y_.TRY_IT_OUT);
  let {
    analyticsLocations: ei,
    newestAnalyticsLocation: ea,
    sourceAnalyticsLocations: eo
  } = (0, c.ZP)(l.Z.USER_SETTINGS_TRY_OUT_PREMIUM), es = e => {
    if (e) {
      if ((0, s.I5)(X), (0, I.z5)(q), (0, I.ho)(Q), null != $) {
        let e = d.Z.getProduct($.skuId);
        null != e && (0, _.G1)(e) ? (0, u.fK)(e.skuId).then(() => (0, s.cV)($)) : null != f.Z.getPurchase($.skuId) && (0, s.cV)($)
      }
      A.default.track(M.rMx.TRY_IT_OUT_PRESET_SELECTED, {
        preset: et
      })
    }
  };
  i.useEffect(() => {
    F && A.default.track(M.rMx.PREMIUM_UPSELL_VIEWED, {
      type: k.cd.PREMIUM_PROFILE_TRY_IT_OUT,
      location: {
        page: M.ZY5.USER_SETTINGS
      },
      location_stack: eo
    })
  }, [eo, Z, F]);
  let el = (null == (n = (0, m.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === k.Si.TIER_2,
    ec = (0, h.Ng)(),
    eu = (0, h.Wp)(ec, k.Si.TIER_2),
    ed = () => W ? G.intl.string(G.t.AfRWIy) : eu ? G.intl.formatToPlainString(G.t.bkQ4bG, {
      percent: null == ec ? true : ec.discount.amount
    }) : G.intl.string(G.t.pj0XBA);
  return Y ? (0, r.jsx)(c.Gt, {
    value: ei,
    children: (0, r.jsxs)(w.Z, {
      ref: er,
      className: B.tryItOutSection,
      type: w.Y.PREMIUM,
      isShown: true,
      hasBackground: true,
      children: [(0, r.jsx)(N.Z, {
        layoutClassName: B.tryItOutLayout,
        profilePreviewTitle: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.SrA, {
            size: "md",
            color: "currentColor",
            className: B.premiumIcon
          }), G.intl.string(G.t.gMlDNT)]
        }),
        profilePreview: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(E.Z, {
            preset: et,
            onShuffle: en
          }), (0, r.jsx)(j.Z, {
            user: Z
          })]
        }),
        children: (0, r.jsxs)("div", {
          className: B.editor,
          children: [(0, r.jsxs)("div", {
            children: [(0, r.jsx)(o.X6q, {
              variant: "heading-xl/extrabold",
              children: G.intl.string(G.t["2zGdAQ"])
            }), (0, r.jsx)(o.Text, {
              className: B.description,
              variant: "text-sm/normal",
              children: G.intl.string(G.t.xeEC29)
            })]
          }), (0, r.jsx)(L.Z, {
            className: B.customizationSection,
            user: Z,
            pendingAvatarSrc: (0, v.SD)({
              userId: Z.id,
              image: null != X ? X : K
            }),
            pendingColors: null != q ? q : z,
            onThemeColorsChange: I.rf,
            showPremiumIcon: false,
            preventDisabled: true
          }), (0, r.jsx)(D.Z, {
            className: B.customizationSection,
            isTryItOutFlow: true,
            showRemoveBannerButton: null != Q,
            onBannerChange: I.f4,
            showPremiumIcon: false
          }), (0, r.jsx)(P.Z, {
            className: B.customizationSection,
            isTryItOutFlow: true,
            onAvatarChange: I.c_,
            showRemoveAvatarButton: false,
            changeAvatarButtonText: G.intl.string(G.t["7z0D1d"]),
            sectionTitle: G.intl.string(G.t.vtFfPT)
          }), (0, r.jsx)(R.Z, {
            isTryItOutFlow: true,
            className: B.customizationSection,
            user: Z,
            sectionTitle: G.intl.string(G.t["7v0T9P"])
          }, "decoration"), (0, r.jsx)(x.Z, {
            className: B.customizationSection,
            isTryItOutFlow: true,
            initialSelectedEffectId: ee,
            user: Z,
            sectionTitle: G.intl.string(G.t.wR5wOj)
          }, "effect"), !el && (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: G.intl.string(G.t["smo74+"])
          })]
        })
      }), !el && (0, r.jsx)(b.p, {
        onSubscribeModalClose: es,
        className: B.floatingUpsell,
        showUpsell: true,
        text: G.intl.format(G.t.TmfgIy, {
          onClick: () => {
            (0, O.y)({
              analyticsSource: ea,
              onSubscribeFinish: es
            })
          }
        }),
        button: ed(),
        position: "inline",
        showShadow: false
      }), el && (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          className: B.premiumTier2Divider
        }), (0, r.jsx)(y.ZP, {
          type: k.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
          subscriptionTier: k.Si.TIER_2
        })]
      })]
    })
  }) : null
}