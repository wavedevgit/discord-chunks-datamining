/** Chunk was on 4093 **/
/** chunk id: 122186, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => S,
  c: () => Z
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk639119 = require("./639119.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk23571 = require("./23571.js");

function f(e) {
  var {
    location: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, l, r = function(e, n) {
      if (null == e) return {};
      var t, l, r = {},
        i = Object.keys(e);
      for (l = 0; l < i.length; l++) t = i[l], n.indexOf(t) >= 0 || (r[t] = e[t]);
      return r
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (l = 0; l < i.length; l++) t = i[l], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
  }(e, ["location"]);
  let i = (0, m.N)(),
    a = r.useCallback(() => {
      if (null != i) {
        var e;
        return null != (e = (0, g.fr)(i, j.Si.TIER_2)) ? e : v.intl.string(v.t.Y2WKTl)
      }
      return v.intl.string(v.t.Y2WKTl)
    }, [i]);
  return (0, l.jsx)(x.Z, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        l = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), l.forEach(function(n) {
        var l;
        l = t[n], n in e ? Object.defineProperty(e, n, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = l
      })
    }
    return e
  }({
    className: s()(p.enhancedCTA, p.ctaGradientBackground),
    iconClassName: p.premiumIcon,
    subscriptionTier: j.Si.TIER_2,
    textOptions: {
      textOverride: a()
    },
    size: c.zx.Sizes.TINY,
    premiumModalAnalyticsLocation: n
  }, t))
}

function Z() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
  return (0, Chunk54381.jsxs)("div", {
    className: s()(Chunk23571.reverseTrialEducationBannerContainer, {
      [Chunk23571.reducedMotion]: module
    }),
    children: [(0, Chunk54381.jsx)(Chunk481060.Fmz, {
      className: s()(Chunk23571.unlockAnimation, {
        [Chunk23571.reducedMotion]: module
      }),
      loop: false,
      shouldAnimate: !module,
      pauseAtFrame: module ? 149 : true,
      importData: () => require.e("21812").then(require.t.bind(require, 741855, 19))
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-xs/medium",
      className: Chunk23571.reverseTrialEducationText,
      children: Chunk388032.intl.format(Chunk388032.t.GimLpS, {})
    })]
  })
}

function S(e) {
  let {
    message: n,
    onClose: t,
    openStreamUpsellModal: r,
    glow: i = false
  } = e, a = {
    section: h.jXE.STREAM_SETTINGS,
    object: h.qAy.PREMIUM_UPSELL_BANNER,
    objectType: h.AnalyticsObjectTypes.BUY
  };
  return (0, l.jsxs)("div", {
    className: s()(p.upsellBanner, p.enhancedBanner, {
      [p.gradientGlow]: i
    }),
    children: [(0, l.jsxs)("div", {
      className: p.iconTextContainer,
      children: [(0, l.jsx)(o.SrA, {
        size: "md",
        color: d.JX.PREMIUM_TIER_2
      }), (0, l.jsx)(o.Text, {
        variant: "text-sm/medium",
        className: s()(p.upsellText, p.enhancedUpsellText),
        children: null != n ? n : v.intl.format(v.t["L/zCto"], {
          onClick: () => r({
            analyticsLocation: a,
            onClose: t
          })
        })
      })]
    }), (0, l.jsx)("div", {
      className: p.enhancedCTAs,
      children: (0, l.jsx)(f, {
        location: a
      })
    })]
  })
}