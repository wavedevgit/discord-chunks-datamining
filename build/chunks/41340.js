/** Chunk was on 93886 **/
n.d(t, {
  Z: () => g
}), n(47120);
var r = n(200651),
  a = n(192379),
  i = n(120356),
  l = n.n(i),
  o = n(544891),
  s = n(481060),
  c = n(259580),
  d = n(55935),
  u = n(709054),
  m = n(246992),
  h = n(981631),
  x = n(474936),
  f = n(315224),
  p = n(833154);
let b = {
    [h.O0b.UNPAID]: "Unpaid",
    [h.O0b.ACTIVE]: "Active",
    [h.O0b.PAST_DUE]: "Past Due",
    [h.O0b.CANCELED]: "Canceled",
    [h.O0b.ENDED]: "Ended",
    [h.O0b.ACCOUNT_HOLD]: "Account Hold",
    [h.O0b.BILLING_RETRY]: "Billing Retry",
    [h.O0b.PAUSED]: "Paused",
    [h.O0b.PAUSE_PENDING]: "Pause Pending"
  },
  _ = [{
    label: "Unpaid",
    value: h.O0b.UNPAID
  }, {
    label: "Active",
    value: h.O0b.ACTIVE
  }, {
    label: "Past Due",
    value: h.O0b.PAST_DUE
  }, {
    label: "Canceled",
    value: h.O0b.CANCELED
  }, {
    label: "Ended",
    value: h.O0b.ENDED
  }, {
    label: "Account Hold",
    value: h.O0b.ACCOUNT_HOLD
  }, {
    label: "Billing Retry",
    value: h.O0b.BILLING_RETRY
  }, {
    label: "Paused",
    value: h.O0b.PAUSED
  }, {
    label: "Pause Pending",
    value: h.O0b.PAUSE_PENDING
  }];

function g(e) {
  var t, n, i;
  let {
    subscription: g,
    onUpdated: v
  } = e, [j, y] = a.useState(!1), [C, N] = a.useState(!1), [T, O] = a.useState(null), E = e => (null == e && (e = g.status), e in b) ? b[e] : "Unknown status ".concat(e), S = e => {
    let t = new Date(e);
    return u.default.fromTimestamp(t.getTime())
  }, k = async e => {
    let {
      status: t = g.status,
      premiumStreakStart: n,
      endedAt: r
    } = e, a = function(e) {
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
      subscription_status: t
    }, null != n ? {
      premium_streak_started_at: S(n)
    } : null, null != r ? {
      ended_at: S(r)
    } : null);
    await o.tn.patch({
      url: "/debug/subscriptions/".concat(g.id),
      body: a,
      rejectWithError: !1
    }), v()
  }, I = async () => {
    try {
      await o.tn.post({
        url: "/debug/subscriptions/".concat(g.id, "/transition"),
        body: {
          target_datetime: new Date().toISOString(),
          payment_type: 0,
          transition: 2,
          send_reminder_email: !1
        },
        rejectWithError: !1
      })
    } catch (e) {
      O(e.body.message)
    }
    v()
  }, w = (null === (t = x.GP[g.planIdFromItems]) || void 0 === t ? void 0 : t.premiumType) === x.p9.TIER_0, Z = null === (n = g.metadata) || void 0 === n ? void 0 : n.ended_at, P = null != Z ? new Date(Z).toISOString().substring(0, 10) : "";
  return (0, r.jsxs)("div", {
    className: l()(p.card, w ? p.gradientWrapperTier0 : p.gradientWrapperTier2),
    children: [(0, r.jsxs)(s.Text, {
      variant: "text-md/normal",
      children: ["Type: ", (() => {
        let e = g.planIdFromItems;
        return null == e ? "No plan id" : e in x.GP ? x.GP[e].name : "Unknown plan id ".concat(e)
      })(), " "]
    }), (0, r.jsxs)(s.Text, {
      variant: "text-md/normal",
      children: ["ID: ", g.id, " "]
    }), g.status !== h.O0b.ACTIVE && (0, r.jsxs)(s.Text, {
      variant: "text-md/normal",
      children: ["Dates: ", (0, d.vc)(g.createdAt, "LL"), " - ", (0, d.vc)(g.currentPeriodEnd, "LL")]
    }), (0, r.jsxs)(s.Text, {
      style: {
        marginBottom: "15px"
      },
      variant: "text-md/normal",
      children: ["Status: ", E()]
    }), null != g.metadata && (0, r.jsxs)("div", {
      className: f.collapsablePane,
      children: [(0, r.jsxs)(s.P3F, {
        onClick: () => {
          y(!j)
        },
        className: f.collapsablePaneHeader,
        children: [(0, r.jsx)("div", {
          children: (0, r.jsx)(s.Text, {
            variant: "text-md/bold",
            children: "Metadata"
          })
        }), (0, r.jsx)(c.Z, {
          direction: j ? c.Z.Directions.UP : c.Z.Directions.DOWN
        })]
      }), j && (0, r.jsx)("ul", {
        style: {
          marginBottom: "15px"
        },
        children: Object.entries(g.metadata).map(e => {
          let [t, n] = e;
          return (0, r.jsxs)("li", {
            style: {
              margin: "8px 0"
            },
            children: [(0, r.jsx)(s.Text, {
              variant: "text-md/bold",
              children: t
            }), (0, r.jsx)(s.Text, {
              variant: "text-sm/normal",
              children: n
            })]
          }, t)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: f.collapsablePane,
      children: [(0, r.jsxs)(s.P3F, {
        onClick: () => {
          N(!C)
        },
        className: f.collapsablePaneHeader,
        children: [(0, r.jsx)("div", {
          children: (0, r.jsx)(s.Text, {
            variant: "text-md/bold",
            children: "Modifications"
          })
        }), (0, r.jsx)(c.Z, {
          direction: C ? c.Z.Directions.UP : c.Z.Directions.DOWN
        })]
      }), C && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.hjN, {
          title: "Status",
          tag: s.RB0.H3,
          className: f.formSection,
          children: (0, r.jsx)(s.PhF, {
            serialize: e => E(e),
            isSelected: e => e === g.status,
            options: _,
            select: e => k({
              status: e
            }),
            popoutLayerContext: m.O$
          })
        }), (0, r.jsxs)(s.hjN, {
          title: "Renew",
          tag: s.RB0.H3,
          className: f.formSection,
          children: [(0, r.jsx)(s.zxk, {
            size: s.zxk.Sizes.SMALL,
            onClick: e => I(),
            children: "Renew Subscription"
          }), null !== T && (0, r.jsx)(s.kzN, {
            className: f.error,
            onDismiss: () => O(null),
            children: T
          })]
        }), (0, r.jsx)(s.hjN, {
          title: "Override Premium Streak Start Date",
          tag: s.RB0.H3,
          className: f.formSection,
          children: (0, r.jsx)("input", {
            type: "date",
            value: null === (i = g.premiumSince) || void 0 === i ? void 0 : i.toISOString().substring(0, 10),
            onChange: e => k({
              premiumStreakStart: e.target.value
            })
          })
        }), (0, r.jsx)(s.hjN, {
          title: "Override Metadata Ended At Date",
          tag: s.RB0.H3,
          className: f.formSection,
          children: (0, r.jsx)("input", {
            type: "date",
            value: P,
            onChange: e => k({
              endedAt: e.target.value
            })
          })
        })]
      })]
    })]
  })
}