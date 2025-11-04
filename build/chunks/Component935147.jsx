/** Chunk was on web.js **/
/** chunk id: 935147, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => K
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
  Chunk411137 = require("./411137.js"),
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

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
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

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function K(e) {
  var t, n;
  let {
    user: V,
    isVisible: Y,
    shouldShow: K
  } = e, z = N.ZP.isPremium(V), {
    pendingAvatar: q,
    pendingThemeColors: X,
    tryItOutThemeColors: Q,
    tryItOutAvatar: J,
    tryItOutBanner: $,
    tryItOutProfileEffect: ee,
    tryItOutAvatarDecoration: et
  } = (0, a.cj)([A.Z], () => {
    let e = A.Z.getAllPending(),
      t = A.Z.getErrors();
    return W(H({}, e, A.Z.getAllTryItOut()), {
      errors: t
    })
  }), en = (0, h.Z)(ee), {
    preset: er,
    onShuffle: ei
  } = (0, E.Z)(), ea = i.useRef(null);
  (0, S.Z)(ea, B.Y_.TRY_IT_OUT);
  let eo = (0, p.p)("TryOutPremiumSection"),
    {
      analyticsLocations: es,
      newestAnalyticsLocation: el,
      sourceAnalyticsLocations: ec
    } = (0, c.ZP)(l.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
    eu = e => {
      if (e) {
        if ((0, s.I5)(J), (0, T.z5)(Q), (0, T.ho)($), null != et) {
          let e = d.Z.getProduct(et.skuId);
          null != e && (0, _.G1)(e) ? (0, u.fK)(e.skuId).then(() => (0, s.cV)(et)) : null != f.Z.getPurchase(et.skuId) && (0, s.cV)(et)
        }
        C.default.track(U.rMx.TRY_IT_OUT_PRESET_SELECTED, {
          preset: er
        })
      }
    };
  i.useEffect(() => {
    Y && C.default.track(U.rMx.PREMIUM_UPSELL_VIEWED, {
      type: G.cd.PREMIUM_PROFILE_TRY_IT_OUT,
      location: {
        page: U.ZY5.USER_SETTINGS
      },
      location_stack: ec
    })
  }, [ec, V, Y]);
  let ed = (null == (n = (0, g.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === G.Si.TIER_2,
    ef = (0, m.Ng)(),
    e_ = (0, m.Wp)(ef, G.Si.TIER_2),
    ep = () => z ? Z.intl.string(Z.t.AfRWI8) : e_ ? Z.intl.formatToPlainString(Z.t.bkQ4bH, {
      percent: null == ef ? true : ef.discount.amount
    }) : Z.intl.string(Z.t.pj0XBN);
  return K ? (0, r.jsx)(c.Gt, {
    value: es,
    children: (0, r.jsxs)(x.Z, {
      ref: ea,
      className: F.tryItOutSection,
      type: x.Y.PREMIUM,
      isShown: true,
      hasBackground: true,
      children: [(0, r.jsx)(R.Z, {
        layoutClassName: F.tryItOutLayout,
        profilePreviewTitle: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.SrA, {
            size: "md",
            color: "currentColor",
            className: F.premiumIcon
          }), Z.intl.string(Z.t.gMlDNd)]
        }),
        profilePreview: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(b.Z, {
            preset: er,
            onShuffle: ei
          }), (0, r.jsx)(k.Z, {
            user: V
          })]
        }),
        children: (0, r.jsxs)("div", {
          className: F.editor,
          children: [(0, r.jsxs)("div", {
            children: [(0, r.jsx)(o.Heading, {
              variant: "heading-xl/extrabold",
              children: Z.intl.string(Z.t["2zGdAW"])
            }), (0, r.jsx)(o.Text, {
              className: F.description,
              variant: "text-sm/normal",
              children: Z.intl.string(Z.t.xeEC20)
            })]
          }), (0, r.jsx)(j.Z, {
            className: F.customizationSection,
            user: V,
            pendingAvatarSrc: (0, I.SD)({
              userId: V.id,
              image: null != J ? J : q
            }),
            pendingColors: null != Q ? Q : X,
            onThemeColorsChange: T.rf,
            showPremiumIcon: false,
            preventDisabled: true
          }), (0, r.jsx)(L.Z, {
            className: F.customizationSection,
            isTryItOutFlow: true,
            showRemoveBannerButton: null != $,
            onBannerChange: T.f4,
            showPremiumIcon: false
          }), (0, r.jsx)(w.Z, {
            className: F.customizationSection,
            isTryItOutFlow: true,
            onAvatarChange: T.c_,
            showRemoveAvatarButton: false,
            changeAvatarButtonText: Z.intl.string(Z.t["7z0D1c"]),
            sectionTitle: Z.intl.string(Z.t.vtFfPX)
          }), !eo && (0, r.jsx)(P.Z, {
            isTryItOutFlow: true,
            className: F.customizationSection,
            user: V,
            sectionTitle: Z.intl.string(Z.t["7v0T9P"])
          }, "decoration"), (0, r.jsx)(D.Z, {
            user: V,
            className: F.customizationSection
          }), !eo && (0, r.jsx)(M.Z, {
            className: F.customizationSection,
            isTryItOutFlow: true,
            initialSelectedEffect: en,
            user: V,
            sectionTitle: Z.intl.string(Z.t.wR5wOo)
          }, "effect"), !ed && (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: Z.intl.string(Z.t["smo74/"])
          })]
        })
      }), !ed && (0, r.jsx)(y.p, {
        onSubscribeModalClose: eu,
        className: F.floatingUpsell,
        showUpsell: true,
        text: Z.intl.format(Z.t.TmfgI2, {
          onClick: () => {
            (0, v.y)({
              analyticsSource: el,
              onSubscribeFinish: eu
            })
          }
        }),
        button: ep(),
        position: "inline",
        showShadow: false
      }), ed && (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          className: F.premiumTier2Divider
        }), (0, r.jsx)(O.ZP, {
          type: G.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
          subscriptionTier: G.Si.TIER_2
        })]
      })]
    })
  }) : null
}