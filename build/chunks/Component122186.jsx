/** Chunk was on 46746 **/
/** chunk id: 122186, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
  c: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk476215 = require("./476215.js");

function v(e) {
  var {
    location: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["location"]);
  let l = (0, f.N)(),
    o = i.useCallback(() => {
      if (null != l) {
        var e;
        return null != (e = (0, h.fr)(l, g.Si.TIER_2)) ? e : x.intl.string(x.t.Y2WKTk)
      }
      return x.intl.string(x.t.Y2WKTk)
    }, [l]);
  return (0, r.jsx)(m.Z, function(e) {
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
  }({
    className: s()(_.enhancedCTA, _.ctaGradientBackground),
    iconClassName: _.premiumIcon,
    subscriptionTier: g.Si.TIER_2,
    textOptions: {
      textOverride: o()
    },
    size: a.zx.Sizes.TINY,
    premiumModalAnalyticsLocation: t
  }, n))
}

function j() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
  return (0, Chunk951288.jsxs)("div", {
    className: s()(Chunk476215.reverseTrialEducationBannerContainer, {
      [Chunk476215.reducedMotion]: module
    }),
    children: [(0, Chunk951288.jsx)(Chunk481060.Fmz, {
      className: s()(Chunk476215.unlockAnimation, {
        [Chunk476215.reducedMotion]: module
      }),
      loop: false,
      shouldAnimate: !module,
      pauseAtFrame: module ? 149 : true,
      importData: () => require.e("21812").then(require.t.bind(require, 741855, 19))
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/medium",
      className: Chunk476215.reverseTrialEducationText,
      children: Chunk388032.intl.format(Chunk388032.t.GimLpa, {})
    })]
  })
}

function b(e) {
  let {
    message: t,
    onClose: n,
    openStreamUpsellModal: i,
    glow: l = false
  } = e, o = {
    section: p.jXE.STREAM_SETTINGS,
    object: p.qAy.PREMIUM_UPSELL_BANNER,
    objectType: p.Qqv.BUY
  };
  return (0, r.jsxs)("div", {
    className: s()(_.upsellBanner, _.enhancedBanner, {
      [_.gradientGlow]: l
    }),
    children: [(0, r.jsxs)("div", {
      className: _.iconTextContainer,
      children: [(0, r.jsx)(c.SrA, {
        size: "md",
        color: u.JX.PREMIUM_TIER_2
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        className: s()(_.upsellText, _.enhancedUpsellText),
        children: null != t ? t : x.intl.format(x.t["L/zCtr"], {
          onClick: () => i({
            analyticsLocation: o,
            onClose: n
          })
        })
      })]
    }), (0, r.jsx)("div", {
      className: _.enhancedCTAs,
      children: (0, r.jsx)(v, {
        location: o
      })
    })]
  })
}