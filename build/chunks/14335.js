/** Chunk was on 84466 **/
n.d(t, {
  D: () => m
});
var r = n(200651),
  i = n(192379),
  l = n(793030),
  o = n(442837),
  a = n(704215),
  s = n(481060),
  c = n(230711),
  u = n(2052),
  E = n(906732),
  d = n(243778),
  _ = n(963249),
  N = n(594174),
  I = n(626135),
  T = n(74538),
  O = n(450839),
  S = n(163684),
  A = n(518638),
  P = n(748770),
  R = n(474936),
  p = n(981631),
  C = n(921944),
  D = n(388032),
  f = n(301307);
let m = () => {
  let e = (0, A.a0)(),
    t = (0, o.e7)([N.default], () => T.ZP.isPremiumExactly(N.default.getCurrentUser(), R.p9.TIER_2)),
    {
      enabled: n,
      getNitroCTA: m
    } = S.g.useExperiment({
      location: "OutboundPromotionNotice"
    }, {
      autoTrackExposure: !1,
      disable: t
    }),
    {
      enabled: g
    } = O.ru.useExperiment({
      location: "OutboundPromotionNotice"
    }, {
      autoTrackExposure: !1
    }),
    {
      location: h
    } = (0, u.O)(),
    {
      analyticsLocations: y
    } = (0, E.ZP)(),
    U = i.useCallback(() => {
      var e, t;
      (0, _.Z)({
        subscriptionTier: T.ZP.getSkuIdForPremiumType(R.p9.TIER_2),
        analyticsLocations: y,
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
        }({}, h), t = t = {
          object: p.qAy.BUTTON_CTA,
          objectType: p.Qqv.TIER_2
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
    }, [y, h]),
    k = i.useCallback(() => {
      c.Z.open(p.oAB.INVENTORY), P.ZP.dismissOutboundPromotionNotice()
    }, []),
    b = i.useCallback(() => {
      I.default.track(p.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), m ? U() : k()
    }, [m, U, k]);
  if (null == e) return null;
  let M = e => (0, r.jsxs)(s.qXd, {
    color: s.DM8.PREMIUM_TIER_2,
    children: [(0, r.jsx)(s.RyX, {
      noticeType: p.kVF.OUTBOUND_PROMOTION,
      onClick: () => {
        P.ZP.dismissOutboundPromotionNotice(), null !== e && e(C.L.USER_DISMISS)
      }
    }), (0, r.jsx)(s.SrA, {
      size: "md",
      color: "currentColor",
      className: f.premiumIcon
    }), n ? m ? (0, r.jsxs)(l.xv, {
      variant: "text-sm/normal",
      className: f.text,
      children: [D.NW.string(D.t["5JMiOj"]), " ", D.NW.format(D.t.fjSvsL, {
        onClick: k
      })]
    }) : D.NW.string(D.t["B3a/cH"]) : D.NW.string(D.t["Pzh+Gx"]), (0, r.jsx)(s.NoS, {
      noticeType: p.kVF.OUTBOUND_PROMOTION,
      onClick: () => {
        b(), null !== e && e(C.L.TAKE_ACTION)
      },
      children: m ? D.NW.string(D.t.pj0XBA) : D.NW.string(D.t.jVcuVV)
    })]
  });
  return g ? (0, r.jsx)(d.O1, {
    contentType: a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
    newSnowflakeId: e,
    timeRecurringConfig: {
      cooldownDurationMs: 0
    },
    groupName: C.R.NOTICE_BAR,
    bypassAutoDismiss: !0,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: n
      } = e;
      if (t === a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return M(n)
    }
  }) : M(null)
}