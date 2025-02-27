/** Chunk was on 49750 **/
n.d(t, {
  Z: () => I
});
var r = n(200651),
  i = n(192379),
  l = n(793030),
  o = n(442837),
  s = n(481060),
  a = n(230711),
  c = n(2052),
  u = n(906732),
  d = n(963249),
  _ = n(594174),
  E = n(626135),
  p = n(74538),
  m = n(163684),
  h = n(748770),
  f = n(474936),
  g = n(981631),
  N = n(388032),
  O = n(240183);

function I() {
  let e = (0, o.e7)([_.default], () => p.ZP.isPremiumExactly(_.default.getCurrentUser(), f.p9.TIER_2)),
    {
      enabled: t,
      getNitroCTA: n
    } = m.g.useExperiment({
      location: "OutboundPromotionNotice"
    }, {
      autoTrackExposure: !1,
      disable: e
    }),
    {
      location: I
    } = (0, c.O)(),
    {
      analyticsLocations: b
    } = (0, u.ZP)(),
    T = i.useCallback(() => {
      var e, t;
      (0, d.Z)({
        subscriptionTier: p.ZP.getSkuIdForPremiumType(f.p9.TIER_2),
        analyticsLocations: b,
        analyticsObject: (e = function(e) {
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
        }({}, I), t = t = {
          object: g.qAy.BUTTON_CTA,
          objectType: g.Qqv.TIER_2
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e)
      })
    }, [b, I]),
    C = i.useCallback(() => {
      a.Z.open(g.oAB.INVENTORY), h.ZP.dismissOutboundPromotionNotice()
    }, []),
    S = i.useCallback(() => {
      E.default.track(g.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), n ? T() : C()
    }, [n, T, C]);
  return (0, r.jsxs)(s.qXd, {
    color: s.DM8.PREMIUM_TIER_2,
    children: [(0, r.jsx)(s.RyX, {
      noticeType: g.kVF.OUTBOUND_PROMOTION,
      onClick: () => {
        h.ZP.dismissOutboundPromotionNotice()
      }
    }), (0, r.jsx)(s.SrA, {
      size: "md",
      color: "currentColor",
      className: O.premiumIcon
    }), t ? n ? (0, r.jsxs)(l.xv, {
      variant: "text-sm/normal",
      className: O.text,
      children: [N.NW.string(N.t["5JMiOj"]), " ", N.NW.format(N.t.fjSvsL, {
        onClick: C
      })]
    }) : N.NW.string(N.t["B3a/cH"]) : N.NW.string(N.t["Pzh+Gx"]), (0, r.jsx)(s.NoS, {
      noticeType: g.kVF.OUTBOUND_PROMOTION,
      onClick: S,
      children: n ? N.NW.string(N.t.pj0XBA) : N.NW.string(N.t.jVcuVV)
    })]
  })
}