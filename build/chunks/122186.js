/** Chunk was on 46746 **/
n.d(t, {
  Z: () => j,
  c: () => v
});
var r = n(200651),
  l = n(192379),
  i = n(120356),
  s = n.n(i),
  o = n(442837),
  a = n(481060),
  c = n(607070),
  d = n(436774),
  u = n(639119),
  f = n(197115),
  m = n(74538),
  h = n(981631),
  x = n(474936),
  g = n(388032),
  p = n(756232);

function _(e) {
  var {
    location: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["location"]);
  let i = (0, u.N)(),
    o = l.useCallback(() => {
      if (null != i) {
        var e;
        return null !== (e = (0, m.fr)(i)) && void 0 !== e ? e : g.NW.string(g.t.Y2WKTk)
      }
      return g.NW.string(g.t.Y2WKTk)
    }, [i]);
  return (0, r.jsx)(f.Z, function(e) {
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
    className: s()(p.enhancedCTA, p.ctaGradientBackground),
    iconClassName: p.premiumIcon,
    subscriptionTier: x.Si.TIER_2,
    buttonText: o(),
    size: a.zxk.Sizes.TINY,
    premiumModalAnalyticsLocation: t
  }, n))
}

function v() {
  let e = (0, o.e7)([c.Z], () => c.Z.useReducedMotion);
  return (0, r.jsxs)("div", {
    className: s()(p.reverseTrialEducationBannerContainer, {
      [p.reducedMotion]: e
    }),
    children: [(0, r.jsx)(a.Fmz, {
      className: s()(p.unlockAnimation, {
        [p.reducedMotion]: e
      }),
      loop: !1,
      shouldAnimate: !e,
      pauseAtFrame: e ? 149 : void 0,
      importData: () => n.e("21812").then(n.t.bind(n, 741855, 19))
    }), (0, r.jsx)(a.Text, {
      variant: "text-xs/medium",
      className: p.reverseTrialEducationText,
      children: g.NW.format(g.t.GimLpa, {})
    })]
  })
}

function j(e) {
  let {
    message: t,
    onClose: n,
    openStreamUpsellModal: l,
    glow: i = !1
  } = e, o = {
    section: h.jXE.STREAM_SETTINGS,
    object: h.qAy.PREMIUM_UPSELL_BANNER,
    objectType: h.Qqv.BUY
  };
  return (0, r.jsxs)("div", {
    className: s()(p.upsellBanner, p.enhancedBanner, {
      [p.gradientGlow]: i
    }),
    children: [(0, r.jsxs)("div", {
      className: p.iconTextContainer,
      children: [(0, r.jsx)(a.SrA, {
        size: "md",
        color: d.JX.PREMIUM_TIER_2
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        className: s()(p.upsellText, p.enhancedUpsellText),
        children: null != t ? t : g.NW.format(g.t["L/zCtr"], {
          onClick: () => l({
            analyticsLocation: o,
            onClose: n
          })
        })
      })]
    }), (0, r.jsx)("div", {
      className: p.enhancedCTAs,
      children: (0, r.jsx)(_, {
        location: o
      })
    })]
  })
}