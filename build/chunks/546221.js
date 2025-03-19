/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => j
});
var r = n(200651);
n(192379);
var i = n(481060),
  s = n(825055),
  a = n(937615),
  l = n(730647),
  o = n(584825),
  c = n(723047),
  A = n(997519),
  d = n(146710),
  u = n(146610),
  g = n(67152),
  f = n(791382),
  m = n(277369),
  p = n(215124),
  h = n(981631),
  C = n(388032),
  b = n(89355);

function v(e) {
  let {
    payoutsByPeriod: t,
    team: n
  } = e, s = (0, c.mY)() ? null : C.NW.format(C.t.d1sCiY, {
    url: null != n ? h.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(n.id) : null
  });
  return 0 === t.length ? (0, r.jsxs)(i.R94, {
    type: i.R94.Types.DESCRIPTION,
    children: [C.NW.string(C.t.RrtXu7), " ", s]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(i.R94, {
      type: i.R94.Types.DESCRIPTION,
      children: [C.NW.string(C.t["9Ub4KS"]), " ", s]
    }), (0, r.jsx)(i.LZC, {
      size: 16
    }), (0, r.jsx)(g.ZP, {
      payoutsByPeriod: t
    })]
  })
}

function x(e) {
  let {
    guildId: t,
    totalPayoutsForPeriod: n
  } = e, i = (0, o.qi)(t, {
    includeSoftDeleted: !0
  });
  return null == n && 0 === i.length ? null : (0, r.jsx)(u.Z, {
    totalPayoutsForPeriod: n,
    guildId: t,
    className: b.currentMonthEarningsTable
  })
}
let N = e => {
  var t, n;
  let {
    guildId: l,
    application: o
  } = e, {
    loading: u,
    team: g,
    currentPeriod: N,
    allPeriods: j,
    metrics: E
  } = (0, A.Z)(l, o), I = (0, d.u)(l), O = (0, c.mY)();
  return u ? (0, r.jsx)(i.$jN, {}) : (0, r.jsxs)(r.Fragment, {
    children: [I && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.Z, {
        children: C.NW.format(C.t["2raBCQ"], {
          insightsURL: h.EYA.DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(l)
        })
      }), (0, r.jsx)(i.LZC, {
        size: 32
      })]
    }), (0, r.jsxs)(i.hjN, {
      title: C.NW.string(C.t.ofmOzc),
      className: b.formSection,
      children: [(0, r.jsx)(i.LZC, {
        size: 8
      }), (0, r.jsxs)("div", {
        className: b.metricsContainer,
        children: [(0, r.jsx)(f.Z, {
          label: C.NW.string(C.t.iY1jW1),
          value: (0, a.T4)(null !== (t = E.revenue) && void 0 !== t ? t : 0, h.pKx.USD),
          additionalContent: (0, r.jsx)(f.H, {
            value: E.revenuePctChange,
            isPercent: !0
          })
        }), (0, r.jsx)(f.Z, {
          label: C.NW.string(C.t.cXyw29),
          value: (0, r.jsxs)(r.Fragment, {
            children: [null !== (n = E.subscribers) && void 0 !== n ? n : "-", " ", (0, r.jsx)(i.tBG, {
              size: "md",
              color: "currentColor",
              className: b.totalMembersIcon,
              "aria-hidden": !0
            })]
          }),
          additionalContent: (0, r.jsx)(f.H, {
            value: E.subscriberChange
          })
        })]
      }), (0, r.jsx)(x, {
        guildId: l,
        totalPayoutsForPeriod: N
      })]
    }), (0, r.jsx)(i.hjN, {
      title: C.NW.string(C.t["+5Rmho"]),
      className: b.formSection,
      children: (0, r.jsx)(v, {
        payoutsByPeriod: j,
        team: g
      })
    }), (0, r.jsx)(i.hjN, {
      title: C.NW.string(C.t.O8cDAA),
      disabled: O,
      className: b.formSection,
      children: (0, r.jsx)(m.Z, {
        guildId: l,
        application: o
      })
    }), (0, r.jsx)(i.hjN, {
      title: C.NW.string(C.t["0n7R2d"]),
      className: b.formSection,
      children: (0, r.jsx)(p.Z, {
        guildId: l,
        allPeriods: j
      })
    })]
  })
};

function j(e) {
  return (0, r.jsx)(l.l, {
    guildId: e.guildId,
    children: (0, r.jsx)(N, function(e) {
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
    }({}, e))
  })
}