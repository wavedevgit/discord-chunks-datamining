/** Chunk was on 74329 **/
n.d(t, {
  Z: () => N
});
var r = n(200651),
  i = n(192379),
  o = n(793030),
  l = n(442837),
  a = n(481060),
  s = n(230711),
  c = n(2052),
  u = n(906732),
  d = n(963249),
  _ = n(594174),
  p = n(626135),
  E = n(74538),
  f = n(163684),
  m = n(748770),
  h = n(474936),
  b = n(981631),
  g = n(388032),
  O = n(240183);

function N() {
  let e = (0, l.e7)([_.default], () => E.ZP.isPremiumExactly(_.default.getCurrentUser(), h.p9.TIER_2)),
    {
      enabled: t,
      getNitroCTA: n
    } = f.g.useExperiment({
      location: "OutboundPromotionNotice"
    }, {
      autoTrackExposure: !1,
      disable: e
    }),
    {
      location: N
    } = (0, c.O)(),
    {
      analyticsLocations: I
    } = (0, u.ZP)(),
    C = i.useCallback(() => {
      var e, t;
      (0, d.Z)({
        subscriptionTier: E.ZP.getSkuIdForPremiumType(h.p9.TIER_2),
        analyticsLocations: I,
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
        }({}, N), t = t = {
          object: b.qAy.BUTTON_CTA,
          objectType: b.Qqv.TIER_2
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
    }, [I, N]),
    T = i.useCallback(() => {
      s.Z.open(b.oAB.INVENTORY), m.ZP.dismissOutboundPromotionNotice()
    }, []),
    S = i.useCallback(() => {
      p.default.track(b.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), n ? C() : T()
    }, [n, C, T]);
  return (0, r.jsxs)(a.qXd, {
    color: a.DM8.PREMIUM_TIER_2,
    children: [(0, r.jsx)(a.RyX, {
      noticeType: b.kVF.OUTBOUND_PROMOTION,
      onClick: () => {
        m.ZP.dismissOutboundPromotionNotice()
      }
    }), (0, r.jsx)(a.SrA, {
      size: "md",
      color: "currentColor",
      className: O.premiumIcon
    }), t ? n ? (0, r.jsxs)(o.xv, {
      variant: "text-sm/normal",
      className: O.text,
      children: [g.NW.string(g.t["5JMiOj"]), " ", g.NW.format(g.t.fjSvsL, {
        onClick: T
      })]
    }) : g.NW.string(g.t["B3a/cH"]) : g.NW.string(g.t["Pzh+Gx"]), (0, r.jsx)(a.NoS, {
      noticeType: b.kVF.OUTBOUND_PROMOTION,
      onClick: S,
      children: n ? g.NW.string(g.t.pj0XBA) : g.NW.string(g.t.jVcuVV)
    })]
  })
}