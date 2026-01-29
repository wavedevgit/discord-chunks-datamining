/** Chunk was on 2827 **/
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
  Chunk836602 = require("./836602.js"),
  Chunk193658 = require("./193658.js"),
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
    isVisible: G,
    shouldShow: U
  } = e, k = x.Ay.isPremium(M), B = x.Ay.canUseAnimatedAvatar(M), {
    pendingAvatar: H,
    pendingThemeColors: V,
    tryItOutThemeColors: F,
    tryItOutAvatar: Y,
    tryItOutBanner: W
  } = (0, l.cf)([E.A], () => {
    var e, t;
    let n = E.A.getPendingChanges(),
      r = E.A.getErrors();
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
    }({}, n, E.A.getTryItOutChanges()), t = t = {
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
    preset: K,
    onShuffle: z
  } = (0, _.A)(), Z = i.useRef(null);
  (0, O.A)(Z, D._F.TRY_IT_OUT);
  let {
    analyticsLocations: X,
    newestAnalyticsLocation: q,
    sourceAnalyticsLocations: J
  } = (0, c.Ay)(o.A.USER_SETTINGS_TRY_OUT_PREMIUM), Q = e => {
    e && ((0, a.zq)(Y), (0, h.Zz)(F), (0, h.Dv)(W), C.default.track(P.HAw.TRY_IT_OUT_PRESET_SELECTED, {
      preset: K
    }))
  };
  i.useEffect(() => {
    G && C.default.track(P.HAw.PREMIUM_UPSELL_VIEWED, {
      type: R.e.PREMIUM_PROFILE_TRY_IT_OUT,
      location: {
        page: P.liQ.USER_SETTINGS
      },
      location_stack: J
    })
  }, [J, M, G]);
  let $ = (null == (n = (0, u.V)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === R.pe.TIER_2,
    ee = (0, d.O)(),
    et = (0, m.U9)(ee, R.pe.TIER_2);
  return U ? (0, r.jsx)(c.f5, {
    value: X,
    children: (0, r.jsxs)(y.A, {
      ref: Z,
      className: w.MT,
      type: y.i.PREMIUM,
      isShown: true,
      hasBackground: true,
      children: [(0, r.jsx)(S.A, {
        layoutClassName: w.th,
        profilePreviewTitle: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.tvc, {
            size: "md",
            color: "currentColor",
            className: w.PC
          }), L.intl.string(L.t.gMlDNd)]
        }),
        profilePreview: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(p.A, {
            preset: K,
            onShuffle: z
          }), (0, r.jsx)(v.A, {
            user: M
          })]
        }),
        children: (0, r.jsxs)("div", {
          className: w.EN,
          children: [(0, r.jsxs)("div", {
            children: [(0, r.jsx)(s.Heading, {
              variant: "heading-xl/extrabold",
              children: L.intl.string(L.t["2zGdAW"])
            }), (0, r.jsx)(s.Text, {
              className: w.h_,
              variant: "text-sm/normal",
              children: L.intl.string(L.t.xeEC20)
            })]
          }), (0, r.jsx)(j.A, {
            className: w.fz,
            user: M,
            pendingAvatarSrc: (0, b.V7)({
              userId: M.id,
              image: null != Y ? Y : H
            }),
            pendingColors: null != F ? F : V,
            onThemeColorsChange: h.a,
            showPremiumIcon: false,
            preventDisabled: true
          }), (0, r.jsx)(N.A, {
            className: w.fz,
            isTryItOut: true,
            showRemoveBannerButton: null != W,
            onBannerChange: h.xe,
            showPremiumIcon: false
          }), !B && (0, r.jsx)(T.A, {
            className: w.fz,
            isTryItOut: true,
            onAvatarChange: h.e$,
            showRemoveAvatarButton: false,
            changeAvatarButtonText: L.intl.string(L.t["7z0D1c"]),
            sectionTitle: L.intl.string(L.t.vtFfPX)
          }), (0, r.jsx)(I.A, {
            user: M,
            className: w.fz
          }), !$ && (0, r.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: L.intl.string(L.t["smo74/"])
          })]
        })
      }), !$ && (0, r.jsx)(g.d, {
        onSubscribeModalClose: Q,
        className: w.Kv,
        showUpsell: true,
        text: L.intl.format(L.t.TmfgI2, {
          onClick: () => {
            (0, f.K)({
              analyticsSource: q,
              onSubscribeFinish: Q
            })
          }
        }),
        button: k ? L.intl.string(L.t.AfRWI8) : et ? L.intl.formatToPlainString(L.t.bkQ4bH, {
          percent: null == ee ? true : ee.discount.amount
        }) : L.intl.string(L.t.pj0XBN),
        position: "inline"
      }), $ && (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          className: w.BU
        }), (0, r.jsx)(A.Ay, {
          type: R.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
          subscriptionTier: R.pe.TIER_2
        })]
      })]
    })
  }) : null
}