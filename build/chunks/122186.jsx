/** Chunk was on 46746 **/
/** chunk id: 122186, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
  c: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk436774 = require("./436774.js"),
  Chunk639119 = require("./639119.js"),
  Chunk767714 = require("./767714.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk801268 = require("./801268.js");

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
        return null != (e = (0, h.fr)(l)) ? e : g.intl.string(g.t.Y2WKTk)
      }
      return g.intl.string(g.t.Y2WKTk)
    }, [l]);
  return <m.Z{...function(e) {
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
    subscriptionTier: x.Si.TIER_2,
    textOptions: {
      textOverride: o()
    },
    size: a.zx.Sizes.TINY,
    premiumModalAnalyticsLocation: t
  }, n)} />
}

function j() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
  return <div className={s()(Chunk801268.reverseTrialEducationBannerContainer, {
      [Chunk801268.reducedMotion]: module
    })}>{<Chunk481060.Fmz className={s()(Chunk801268.unlockAnimation, {
        [Chunk801268.reducedMotion]: module
      })} loop={false} shouldAnimate={!module} pauseAtFrame={module ? 149 : true} importData={() => require.e("21812").then(require.t.bind(require, 741855, 19))} />}{<Chunk481060.Text variant={"text-xs/medium"} className={Chunk801268.reverseTrialEducationText}>{Chunk388032.intl.format(Chunk388032.t.GimLpa, {})}</Chunk481060.Text>}</div>
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
  return <div className={s()(_.upsellBanner, _.enhancedBanner, {
      [_.gradientGlow]: l
    })}>{<div className={_.iconTextContainer}>{<c.SrA size={"md"} color={u.JX.PREMIUM_TIER_2} />}{<c.Text variant={"text-sm/medium"} className={s()(_.upsellText, _.enhancedUpsellText)}>{null != t ? t : g.intl.format(g.t["L/zCtr"], {
          onClick: () => i({
            analyticsLocation: o,
            onClose: n
          })
        })}</c.Text>}</div>}{<div className={_.enhancedCTAs}><v location={o} /></div>}</div>
}