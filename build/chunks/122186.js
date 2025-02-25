/** Chunk was on 79477 **/
n.d(t, {
  Z: () => S,
  c: () => j
});
var r = n(200651),
  l = n(192379),
  s = n(120356),
  i = n.n(s),
  a = n(442837),
  o = n(481060),
  c = n(607070),
  u = n(436774),
  d = n(639119),
  m = n(197115),
  p = n(74538),
  h = n(981631),
  g = n(474936),
  x = n(388032),
  f = n(929475);

function v(e) {
  var {
    location: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        s = Object.keys(e);
      for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["location"]);
  let s = (0, d.N)(),
    a = l.useCallback(() => {
      if (null != s) {
        var e;
        return null !== (e = (0, p.fr)(s)) && void 0 !== e ? e : x.NW.string(x.t.Y2WKTk)
      }
      return x.NW.string(x.t.Y2WKTk)
    }, [s]);
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
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r
      })
    }
    return e
  }({
    className: i()(f.enhancedCTA, f.ctaGradientBackground),
    iconClassName: f.premiumIcon,
    subscriptionTier: g.Si.TIER_2,
    buttonText: a(),
    size: o.zxk.Sizes.TINY,
    premiumModalAnalyticsLocation: t
  }, n))
}

function j() {
  let e = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
  return (0, r.jsxs)("div", {
    className: i()(f.reverseTrialEducationBannerContainer, {
      [f.reducedMotion]: e
    }),
    children: [(0, r.jsx)(o.Fmz, {
      className: i()(f.unlockAnimation, {
        [f.reducedMotion]: e
      }),
      loop: !1,
      shouldAnimate: !e,
      pauseAtFrame: e ? 149 : void 0,
      importData: () => n.e("21812").then(n.t.bind(n, 741855, 19))
    }), (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      className: f.reverseTrialEducationText,
      children: x.NW.format(x.t.GimLpa, {})
    })]
  })
}

function S(e) {
  let {
    message: t,
    onClose: n,
    openStreamUpsellModal: l,
    glow: s = !1
  } = e, a = {
    section: h.jXE.STREAM_SETTINGS,
    object: h.qAy.PREMIUM_UPSELL_BANNER,
    objectType: h.Qqv.BUY
  };
  return (0, r.jsxs)("div", {
    className: i()(f.upsellBanner, f.enhancedBanner, {
      [f.gradientGlow]: s
    }),
    children: [(0, r.jsxs)("div", {
      className: f.iconTextContainer,
      children: [(0, r.jsx)(o.SrA, {
        size: "md",
        color: u.JX.PREMIUM_TIER_2
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        className: i()(f.upsellText, f.enhancedUpsellText),
        children: null != t ? t : x.NW.format(x.t["L/zCtr"], {
          onClick: () => l({
            analyticsLocation: a,
            onClose: n
          })
        })
      })]
    }), (0, r.jsx)("div", {
      className: f.enhancedCTAs,
      children: (0, r.jsx)(v, {
        location: a
      })
    })]
  })
}