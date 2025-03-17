/** Chunk was on 53469 **/
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
  h = n(748770),
  m = n(474936),
  b = n(981631),
  O = n(388032),
  g = n(240183);

function N() {
  let e = (0, l.e7)([_.default], () => E.ZP.isPremiumExactly(_.default.getCurrentUser(), m.p9.TIER_2)),
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
    T = i.useCallback(() => {
      var e, t;
      (0, d.Z)({
        subscriptionTier: E.ZP.getSkuIdForPremiumType(m.p9.TIER_2),
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
    C = i.useCallback(() => {
      s.Z.open(b.oAB.INVENTORY), h.ZP.dismissOutboundPromotionNotice()
    }, []),
    S = i.useCallback(() => {
      p.default.track(b.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), n ? T() : C()
    }, [n, T, C]);
  return (0, r.jsxs)(a.qXd, {
    color: a.DM8.PREMIUM_TIER_2,
    children: [(0, r.jsx)(a.RyX, {
      noticeType: b.kVF.OUTBOUND_PROMOTION,
      onClick: () => {
        h.ZP.dismissOutboundPromotionNotice()
      }
    }), (0, r.jsx)(a.SrA, {
      size: "md",
      color: "currentColor",
      className: g.premiumIcon
    }), t ? n ? (0, r.jsxs)(o.xv, {
      variant: "text-sm/normal",
      className: g.text,
      children: [O.NW.string(O.t["5JMiOj"]), " ", O.NW.format(O.t.fjSvsL, {
        onClick: C
      })]
    }) : O.NW.string(O.t["B3a/cH"]) : O.NW.string(O.t["Pzh+Gx"]), (0, r.jsx)(a.NoS, {
      noticeType: b.kVF.OUTBOUND_PROMOTION,
      onClick: S,
      children: n ? O.NW.string(O.t.pj0XBA) : O.NW.string(O.t.jVcuVV)
    })]
  })
}