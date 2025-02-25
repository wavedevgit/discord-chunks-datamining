/** Chunk was on 79477 **/
n.d(t, {
  Z: () => S,
  c: () => j
});
var l = n(200651),
  r = n(192379),
  s = n(120356),
  i = n.n(s),
  a = n(442837),
  o = n(481060),
  c = n(607070),
  u = n(436774),
  d = n(639119),
  m = n(197115),
  g = n(74538),
  h = n(981631),
  x = n(474936),
  p = n(388032),
  v = n(929475);

function f(e) {
  var {
    location: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, l, r = function(e, t) {
      if (null == e) return {};
      var n, l, r = {},
        s = Object.keys(e);
      for (l = 0; l < s.length; l++) n = s[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (l = 0; l < s.length; l++) n = s[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["location"]);
  let s = (0, d.N)(),
    a = r.useCallback(() => {
      if (null != s) {
        var e;
        return null !== (e = (0, g.fr)(s)) && void 0 !== e ? e : p.NW.string(p.t.Y2WKTk)
      }
      return p.NW.string(p.t.Y2WKTk)
    }, [s]);
  return (0, l.jsx)(m.Z, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        l = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), l.forEach(function(t) {
        var l;
        l = n[t], t in e ? Object.defineProperty(e, t, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = l
      })
    }
    return e
  }({
    className: i()(v.enhancedCTA, v.ctaGradientBackground),
    iconClassName: v.premiumIcon,
    subscriptionTier: x.Si.TIER_2,
    buttonText: a(),
    size: o.zxk.Sizes.TINY,
    premiumModalAnalyticsLocation: t
  }, n))
}

function j() {
  let e = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
  return (0, l.jsxs)("div", {
    className: i()(v.reverseTrialEducationBannerContainer, {
      [v.reducedMotion]: e
    }),
    children: [(0, l.jsx)(o.Fmz, {
      className: i()(v.unlockAnimation, {
        [v.reducedMotion]: e
      }),
      loop: !1,
      shouldAnimate: !e,
      pauseAtFrame: e ? 149 : void 0,
      importData: () => n.e("21812").then(n.t.bind(n, 741855, 19))
    }), (0, l.jsx)(o.Text, {
      variant: "text-xs/medium",
      className: v.reverseTrialEducationText,
      children: p.NW.format(p.t.GimLpa, {})
    })]
  })
}

function S(e) {
  let {
    message: t,
    onClose: n,
    openStreamUpsellModal: r,
    glow: s = !1
  } = e, a = {
    section: h.jXE.STREAM_SETTINGS,
    object: h.qAy.PREMIUM_UPSELL_BANNER,
    objectType: h.Qqv.BUY
  };
  return (0, l.jsxs)("div", {
    className: i()(v.upsellBanner, v.enhancedBanner, {
      [v.gradientGlow]: s
    }),
    children: [(0, l.jsxs)("div", {
      className: v.iconTextContainer,
      children: [(0, l.jsx)(o.SrA, {
        size: "md",
        color: u.JX.PREMIUM_TIER_2
      }), (0, l.jsx)(o.Text, {
        variant: "text-sm/medium",
        className: i()(v.upsellText, v.enhancedUpsellText),
        children: null != t ? t : p.NW.format(p.t["L/zCtr"], {
          onClick: () => r({
            analyticsLocation: a,
            onClose: n
          })
        })
      })]
    }), (0, l.jsx)("div", {
      className: v.enhancedCTAs,
      children: (0, l.jsx)(f, {
        location: a
      })
    })]
  })
}