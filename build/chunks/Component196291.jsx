/** Chunk was on 60667 **/
/** chunk id: 196291, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => M
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

function M(e) {
  var t, n;
  let {
    user: M,
    isVisible: U,
    shouldShow: G
  } = e, k = C.Ay.isPremium(M), V = C.Ay.canUseAnimatedAvatar(M), {
    pendingAvatar: H,
    pendingThemeColors: B,
    tryItOutThemeColors: F,
    tryItOutAvatar: Y,
    tryItOutBanner: W
  } = (0, l.cf)([x.A], () => {
    var e, t;
    let n = x.A.getAllPending(),
      r = x.A.getErrors();
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
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, n, x.A.getAllTryItOut()), t = t = {
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
  }), {
    preset: z,
    onShuffle: K
  } = (0, _.A)(), Z = i.useRef(null);
  (0, E.A)(Z, D._F.TRY_IT_OUT);
  let {
    analyticsLocations: X,
    newestAnalyticsLocation: q,
    sourceAnalyticsLocations: J
  } = (0, c.Ay)(o.A.USER_SETTINGS_TRY_OUT_PREMIUM), Q = e => {
    e && ((0, a.zq)(Y), (0, b.Zz)(F), (0, b.Dv)(W), O.default.track(P.HAw.TRY_IT_OUT_PRESET_SELECTED, {
      preset: z
    }))
  };
  i.useEffect(() => {
    U && O.default.track(P.HAw.PREMIUM_UPSELL_VIEWED, {
      type: R.e.PREMIUM_PROFILE_TRY_IT_OUT,
      location: {
        page: P.liQ.USER_SETTINGS
      },
      location_stack: J
    })
  }, [J, M, U]);
  let $ = (null == (n = (0, u.V)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === R.pe.TIER_2,
    ee = (0, d.O)(),
    et = (0, m.U9)(ee, R.pe.TIER_2);
  return G ? (0, r.jsx)(c.f5, {
    value: X,
    children: (0, r.jsxs)(j.A, {
      ref: Z,
      className: L.MT,
      type: j.i.PREMIUM,
      isShown: true,
      hasBackground: true,
      children: [(0, r.jsx)(I.A, {
        layoutClassName: L.th,
        profilePreviewTitle: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.tvc, {
            size: "md",
            color: "currentColor",
            className: L.PC
          }), w.intl.string(w.t.gMlDNd)]
        }),
        profilePreview: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(p.A, {
            preset: z,
            onShuffle: K
          }), (0, r.jsx)(y.A, {
            user: M
          })]
        }),
        children: (0, r.jsxs)("div", {
          className: L.EN,
          children: [(0, r.jsxs)("div", {
            children: [(0, r.jsx)(s.Heading, {
              variant: "heading-xl/extrabold",
              children: w.intl.string(w.t["2zGdAW"])
            }), (0, r.jsx)(s.Text, {
              className: L.h_,
              variant: "text-sm/normal",
              children: w.intl.string(w.t.xeEC20)
            })]
          }), (0, r.jsx)(N.A, {
            className: L.fz,
            user: M,
            pendingAvatarSrc: (0, h.V7)({
              userId: M.id,
              image: null != Y ? Y : H
            }),
            pendingColors: null != F ? F : B,
            onThemeColorsChange: b.a,
            showPremiumIcon: false,
            preventDisabled: true
          }), (0, r.jsx)(v.A, {
            className: L.fz,
            isTryItOut: true,
            showRemoveBannerButton: null != W,
            onBannerChange: b.xe,
            showPremiumIcon: false
          }), !V && (0, r.jsx)(T.A, {
            className: L.fz,
            isTryItOut: true,
            onAvatarChange: b.e$,
            showRemoveAvatarButton: false,
            changeAvatarButtonText: w.intl.string(w.t["7z0D1c"]),
            sectionTitle: w.intl.string(w.t.vtFfPX)
          }), (0, r.jsx)(S.A, {
            user: M,
            className: L.fz
          }), !$ && (0, r.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: w.intl.string(w.t["smo74/"])
          })]
        })
      }), !$ && (0, r.jsx)(g.d, {
        onSubscribeModalClose: Q,
        className: L.Kv,
        showUpsell: true,
        text: w.intl.format(w.t.TmfgI2, {
          onClick: () => {
            (0, f.K)({
              analyticsSource: q,
              onSubscribeFinish: Q
            })
          }
        }),
        button: k ? w.intl.string(w.t.AfRWI8) : et ? w.intl.formatToPlainString(w.t.bkQ4bH, {
          percent: null == ee ? true : ee.discount.amount
        }) : w.intl.string(w.t.pj0XBN),
        position: "inline"
      }), $ && (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          className: L.BU
        }), (0, r.jsx)(A.Ay, {
          type: R.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
          subscriptionTier: R.pe.TIER_2
        })]
      })]
    })
  }) : null
}