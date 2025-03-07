/** Chunk was on 40247 **/
n.d(t, {
  Z: () => A
});
var r = n(200651),
  i = n(192379),
  l = n(793030),
  o = n(442837),
  a = n(481060),
  s = n(230711),
  c = n(2052),
  u = n(906732),
  E = n(963249),
  d = n(594174),
  _ = n(626135),
  N = n(74538),
  I = n(163684),
  O = n(748770),
  T = n(474936),
  S = n(981631),
  p = n(388032),
  P = n(240183);

function A() {
  let e = (0, o.e7)([d.default], () => N.ZP.isPremiumExactly(d.default.getCurrentUser(), T.p9.TIER_2)),
    {
      enabled: t,
      getNitroCTA: n
    } = I.g.useExperiment({
      location: "OutboundPromotionNotice"
    }, {
      autoTrackExposure: !1,
      disable: e
    }),
    {
      location: A
    } = (0, c.O)(),
    {
      analyticsLocations: R
    } = (0, u.ZP)(),
    C = i.useCallback(() => {
      var e, t;
      (0, E.Z)({
        subscriptionTier: N.ZP.getSkuIdForPremiumType(T.p9.TIER_2),
        analyticsLocations: R,
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
        }({}, A), t = t = {
          object: S.qAy.BUTTON_CTA,
          objectType: S.Qqv.TIER_2
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
    }, [R, A]),
    f = i.useCallback(() => {
      s.Z.open(S.oAB.INVENTORY), O.ZP.dismissOutboundPromotionNotice()
    }, []),
    m = i.useCallback(() => {
      _.default.track(S.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), n ? C() : f()
    }, [n, C, f]);
  return (0, r.jsxs)(a.qXd, {
    color: a.DM8.PREMIUM_TIER_2,
    children: [(0, r.jsx)(a.RyX, {
      noticeType: S.kVF.OUTBOUND_PROMOTION,
      onClick: () => {
        O.ZP.dismissOutboundPromotionNotice()
      }
    }), (0, r.jsx)(a.SrA, {
      size: "md",
      color: "currentColor",
      className: P.premiumIcon
    }), t ? n ? (0, r.jsxs)(l.xv, {
      variant: "text-sm/normal",
      className: P.text,
      children: [p.NW.string(p.t["5JMiOj"]), " ", p.NW.format(p.t.fjSvsL, {
        onClick: f
      })]
    }) : p.NW.string(p.t["B3a/cH"]) : p.NW.string(p.t["Pzh+Gx"]), (0, r.jsx)(a.NoS, {
      noticeType: S.kVF.OUTBOUND_PROMOTION,
      onClick: m,
      children: n ? p.NW.string(p.t.pj0XBA) : p.NW.string(p.t.jVcuVV)
    })]
  })
}