/** Chunk was on web.js **/
/** chunk id: 196291, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => V
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk631670 = require("./631670.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk10368 = require("./10368.js"),
  Chunk535646 = require("./535646.jsx"),
  Chunk511484 = require("./511484.js"),
  Chunk202639 = require("./202639.jsx"),
  Chunk811611 = require("./811611.jsx"),
  Chunk407217 = require("./407217.jsx"),
  Chunk101058 = require("./101058.js"),
  Chunk207803 = require("./207803.js"),
  Chunk193658 = require("./193658.js"),
  Chunk752319 = require("./752319.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk884546 = require("./884546.jsx"),
  Chunk230084 = require("./230084.jsx"),
  Chunk180020 = require("./180020.jsx"),
  Chunk212168 = require("./212168.jsx"),
  Chunk730588 = require("./730588.jsx"),
  Chunk63675 = require("./63675.jsx"),
  Chunk253604 = require("./253604.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk567567 = require("./567567.js");

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

function V(e) {
  var t, n;
  let {
    user: M,
    isVisible: U,
    shouldShow: V
  } = e, F = v.Ay.isPremium(M), B = v.Ay.canUseAnimatedAvatar(M), {
    pendingAvatar: H,
    pendingThemeColors: Y,
    tryItOutThemeColors: W,
    tryItOutAvatar: K,
    tryItOutBanner: z
  } = (0, a.cf)([O.A], () => {
    let e = O.A.getAllPending(),
      t = O.A.getErrors();
    return G(k({}, e, O.A.getAllTryItOut()), {
      errors: t
    })
  }), {
    preset: q,
    onShuffle: X
  } = (0, f.A)(), Z = i.useRef(null);
  (0, y.A)(Z, x._F.TRY_IT_OUT);
  let {
    analyticsLocations: Q,
    newestAnalyticsLocation: $,
    sourceAnalyticsLocations: J
  } = (0, c.Ay)(l.A.USER_SETTINGS_TRY_OUT_PREMIUM), ee = e => {
    e && ((0, o.zq)(K), (0, b.Zz)(W), (0, b.Dv)(z), A.default.track(P.HAw.TRY_IT_OUT_PRESET_SELECTED, {
      preset: q
    }))
  };
  i.useEffect(() => {
    U && A.default.track(P.HAw.PREMIUM_UPSELL_VIEWED, {
      type: D.e.PREMIUM_PROFILE_TRY_IT_OUT,
      location: {
        page: P.liQ.USER_SETTINGS
      },
      location_stack: J
    })
  }, [J, M, U]);
  let et = (null == (n = (0, d.V)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === D.pe.TIER_2,
    en = (0, u.O)(),
    er = (0, _.U9)(en, D.pe.TIER_2),
    ei = () => F ? L.intl.string(L.t.AfRWI8) : er ? L.intl.formatToPlainString(L.t.bkQ4bH, {
      percent: null == en ? true : en.discount.amount
    }) : L.intl.string(L.t.pj0XBN);
  return V ? (0, r.jsx)(c.f5, {
    value: Q,
    children: (0, r.jsxs)(C.A, {
      ref: Z,
      className: j.MT,
      type: C.i.PREMIUM,
      isShown: true,
      hasBackground: true,
      children: [(0, r.jsx)(S.A, {
        layoutClassName: j.th,
        profilePreviewTitle: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.tvc, {
            size: "md",
            color: "currentColor",
            className: j.PC
          }), L.intl.string(L.t.gMlDNd)]
        }),
        profilePreview: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(p.A, {
            preset: q,
            onShuffle: X
          }), (0, r.jsx)(w.A, {
            user: M
          })]
        }),
        children: (0, r.jsxs)("div", {
          className: j.EN,
          children: [(0, r.jsxs)("div", {
            children: [(0, r.jsx)(s.Heading, {
              variant: "heading-xl/extrabold",
              children: L.intl.string(L.t["2zGdAW"])
            }), (0, r.jsx)(s.Text, {
              className: j.h_,
              variant: "text-sm/normal",
              children: L.intl.string(L.t.xeEC20)
            })]
          }), (0, r.jsx)(R.A, {
            className: j.fz,
            user: M,
            pendingAvatarSrc: (0, E.V7)({
              userId: M.id,
              image: null != K ? K : H
            }),
            pendingColors: null != W ? W : Y,
            onThemeColorsChange: b.a,
            showPremiumIcon: false,
            preventDisabled: true
          }), (0, r.jsx)(N.A, {
            className: j.fz,
            isTryItOut: true,
            showRemoveBannerButton: null != z,
            onBannerChange: b.xe,
            showPremiumIcon: false
          }), !B && (0, r.jsx)(I.A, {
            className: j.fz,
            isTryItOut: true,
            onAvatarChange: b.e$,
            showRemoveAvatarButton: false,
            changeAvatarButtonText: L.intl.string(L.t["7z0D1c"]),
            sectionTitle: L.intl.string(L.t.vtFfPX)
          }), (0, r.jsx)(T.A, {
            user: M,
            className: j.fz
          }), !et && (0, r.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: L.intl.string(L.t["smo74/"])
          })]
        })
      }), !et && (0, r.jsx)(h.d, {
        onSubscribeModalClose: ee,
        className: j.Kv,
        showUpsell: true,
        text: L.intl.format(L.t.TmfgI2, {
          onClick: () => {
            (0, g.K)({
              analyticsSource: $,
              onSubscribeFinish: ee
            })
          }
        }),
        button: ei(),
        position: "inline"
      }), et && (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          className: j.BU
        }), (0, r.jsx)(m.Ay, {
          type: D.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
          subscriptionTier: D.pe.TIER_2
        })]
      })]
    })
  }) : null
}