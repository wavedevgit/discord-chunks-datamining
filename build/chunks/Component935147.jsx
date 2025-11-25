/** Chunk was on web.js **/
/** chunk id: 935147, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => z
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk411137 = require("./411137.js"),
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
  Chunk150039 = require("./150039.js"),
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

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      H(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function K(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function z(e) {
  var t, n;
  let {
    user: H,
    isVisible: Y,
    shouldShow: z
  } = e, q = N.ZP.isPremium(H), X = N.ZP.canUseAnimatedAvatar(H), {
    pendingAvatar: Q,
    pendingThemeColors: J,
    tryItOutThemeColors: $,
    tryItOutAvatar: ee,
    tryItOutBanner: et,
    tryItOutAvatarDecoration: en,
    tryItOutProfileEffect: er
  } = (0, a.cj)([A.Z], () => {
    let e = A.Z.getAllPending(),
      t = A.Z.getErrors();
    return K(W({}, e, A.Z.getAllTryItOut()), {
      errors: t
    })
  }), {
    preset: ei,
    onShuffle: ea
  } = (0, g.Z)(), eo = i.useRef(null);
  (0, S.Z)(eo, Z.Y_.TRY_IT_OUT);
  let es = (0, p.p)("TryOutPremiumSection"),
    {
      analyticsLocations: el,
      newestAnalyticsLocation: ec,
      sourceAnalyticsLocations: eu
    } = (0, c.ZP)(l.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
    ed = e => {
      if (e) {
        if ((0, s.I5)(ee), (0, T.z5)($), (0, T.ho)(et), null != en) {
          let e = d.Z.getProduct(en.skuId);
          null != e && (0, _.G1)(e) ? (0, u.fK)(e.skuId).then(() => (0, R.PO)(en)) : null != f.Z.getPurchase(en.skuId) && (0, R.PO)(en)
        }
        if (null != er) {
          let e = d.Z.getProduct(er.skuId);
          null != e && (0, _.G1)(e) ? (0, u.fK)(e.skuId).then(() => (0, R.UK)(er)) : null != f.Z.getPurchase(er.skuId) && (0, R.UK)(er)
        }
        C.default.track(G.rMx.TRY_IT_OUT_PRESET_SELECTED, {
          preset: ei
        })
      }
    };
  i.useEffect(() => {
    Y && C.default.track(G.rMx.PREMIUM_UPSELL_VIEWED, {
      type: B.cd.PREMIUM_PROFILE_TRY_IT_OUT,
      location: {
        page: G.ZY5.USER_SETTINGS
      },
      location_stack: eu
    })
  }, [eu, H, Y]);
  let ef = (null == (n = (0, m.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === B.Si.TIER_2,
    e_ = (0, h.N)(),
    ep = (0, b.Wp)(e_, B.Si.TIER_2),
    eh = () => q ? F.intl.string(F.t.AfRWI8) : ep ? F.intl.formatToPlainString(F.t.bkQ4bH, {
      percent: null == e_ ? true : e_.discount.amount
    }) : F.intl.string(F.t.pj0XBN);
  return z ? (0, r.jsx)(c.Gt, {
    value: el,
    children: (0, r.jsxs)(x.Z, {
      ref: eo,
      className: V.tryItOutSection,
      type: x.Y.PREMIUM,
      isShown: true,
      hasBackground: true,
      children: [(0, r.jsx)(P.Z, {
        layoutClassName: V.tryItOutLayout,
        profilePreviewTitle: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.SrA, {
            size: "md",
            color: "currentColor",
            className: V.premiumIcon
          }), F.intl.string(F.t.gMlDNd)]
        }),
        profilePreview: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(E.Z, {
            preset: ei,
            onShuffle: ea
          }), (0, r.jsx)(U.Z, {
            user: H
          })]
        }),
        children: (0, r.jsxs)("div", {
          className: V.editor,
          children: [(0, r.jsxs)("div", {
            children: [(0, r.jsx)(o.Heading, {
              variant: "heading-xl/extrabold",
              children: F.intl.string(F.t["2zGdAW"])
            }), (0, r.jsx)(o.Text, {
              className: V.description,
              variant: "text-sm/normal",
              children: F.intl.string(F.t.xeEC20)
            })]
          }), (0, r.jsx)(j.Z, {
            className: V.customizationSection,
            user: H,
            pendingAvatarSrc: (0, I.SD)({
              userId: H.id,
              image: null != ee ? ee : Q
            }),
            pendingColors: null != $ ? $ : J,
            onThemeColorsChange: T.rf,
            showPremiumIcon: false,
            preventDisabled: true
          }), (0, r.jsx)(M.Z, {
            className: V.customizationSection,
            isTryItOut: true,
            showRemoveBannerButton: null != et,
            onBannerChange: T.f4,
            showPremiumIcon: false
          }), !X && (0, r.jsx)(w.Z, {
            className: V.customizationSection,
            isTryItOut: true,
            onAvatarChange: T.c_,
            showRemoveAvatarButton: false,
            changeAvatarButtonText: F.intl.string(F.t["7z0D1c"]),
            sectionTitle: F.intl.string(F.t.vtFfPX)
          }), !es && (0, r.jsx)(D.Z, {
            className: V.customizationSection,
            sectionTitle: F.intl.string(F.t["7v0T9P"]),
            user: H,
            isTryItOut: true
          }), (0, r.jsx)(L.Z, {
            user: H,
            className: V.customizationSection
          }), !es && (0, r.jsx)(k.Z, {
            className: V.customizationSection,
            sectionTitle: F.intl.string(F.t.wR5wOo),
            user: H,
            isTryItOut: true
          }), !ef && (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: F.intl.string(F.t["smo74/"])
          })]
        })
      }), !ef && (0, r.jsx)(y.p, {
        onSubscribeModalClose: ed,
        className: V.floatingUpsell,
        showUpsell: true,
        text: F.intl.format(F.t.TmfgI2, {
          onClick: () => {
            (0, v.y)({
              analyticsSource: ec,
              onSubscribeFinish: ed
            })
          }
        }),
        button: eh(),
        position: "inline",
        showShadow: false
      }), ef && (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          className: V.premiumTier2Divider
        }), (0, r.jsx)(O.ZP, {
          type: B.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
          subscriptionTier: B.Si.TIER_2
        })]
      })]
    })
  }) : null
}