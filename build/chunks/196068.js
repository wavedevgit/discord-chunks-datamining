/** Chunk was on 27863 **/
n.d(t, {
  c: () => m
});
var r = n(255367),
  i = n(73800),
  l = n(793030),
  o = n(442837),
  a = n(704215),
  c = n(481060),
  s = n(230711),
  u = n(2052),
  E = n(906732),
  d = n(963249),
  _ = n(450839),
  I = n(163684),
  O = n(518638),
  T = n(748770),
  N = n(594174),
  S = n(626135),
  p = n(74538),
  R = n(243778),
  A = n(921944),
  P = n(981631),
  C = n(474936),
  f = n(388032),
  D = n(134772);
let m = e => {
  let {
    dismissibleContent: t
  } = e, n = (0, O.a0)(), m = (0, o.e7)([N.default], () => p.ZP.isPremiumExactly(N.default.getCurrentUser(), C.p9.TIER_2)), {
    enabled: g,
    getNitroCTA: y
  } = I.g.useExperiment({
    location: "OutboundPromotionNotice"
  }, {
    autoTrackExposure: !1,
    disable: m
  }), {
    enabled: h
  } = _.ru.useExperiment({
    location: "OutboundPromotionNotice"
  }, {
    autoTrackExposure: !1
  }), {
    location: U
  } = (0, u.O)(), {
    analyticsLocations: b
  } = (0, E.ZP)(), M = i.useCallback(() => {
    var e, t;
    (0, d.Z)({
      subscriptionTier: p.ZP.getSkuIdForPremiumType(C.p9.TIER_2),
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
      }({}, U), t = t = {
        object: P.qAy.BUTTON_CTA,
        objectType: P.Qqv.TIER_2
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
  }, [b, U]), k = i.useCallback(() => {
    s.Z.open(P.oAB.INVENTORY), T.ZP.dismissOutboundPromotionNotice()
  }, []), Z = i.useCallback(() => {
    S.default.track(P.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), y ? M() : k()
  }, [y, M, k]);
  if (null == n) return null;
  let v = e => (0, r.jsxs)(c.qXd, {
    color: c.DM8.PREMIUM_TIER_2,
    children: [(0, r.jsx)(c.RyX, {
      noticeType: P.kVF.OUTBOUND_PROMOTION,
      onClick: () => {
        T.ZP.dismissOutboundPromotionNotice(), null !== e && e(A.L.USER_DISMISS)
      }
    }), (0, r.jsx)(c.SrA, {
      size: "md",
      color: "currentColor",
      className: D.premiumIcon
    }), g ? y ? (0, r.jsxs)(l.xv, {
      variant: "text-sm/normal",
      className: D.text,
      children: [f.intl.string(f.t["5JMiOj"]), " ", f.intl.format(f.t.fjSvsL, {
        onClick: k
      })]
    }) : f.intl.string(f.t["5JMiOj"]) : f.intl.string(f.t["Pzh+Gx"]), (0, r.jsx)(c.NoS, {
      noticeType: P.kVF.OUTBOUND_PROMOTION,
      onClick: () => {
        Z(), null !== e && e(A.L.TAKE_ACTION)
      },
      children: y ? f.intl.string(f.t.pj0XBA) : f.intl.string(f.t.jVcuVV)
    })]
  });
  return h ? (0, r.jsx)(R.O1, {
    contentType: t,
    newSnowflakeId: n,
    timeRecurringConfig: {
      cooldownDurationMs: 0
    },
    groupName: A.R.NOTICE_BAR,
    bypassAutoDismiss: !0,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: n
      } = e;
      if (t === a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return v(n)
    }
  }) : v(null)
}