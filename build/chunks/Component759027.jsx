/** Chunk was on 99904 **/
/** chunk id: 759027, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk55935 = require("./55935.js"),
  Chunk709054 = require("./709054.js"),
  Chunk246992 = require("./246992.js"),
  Chunk923576 = require("./923576.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk362786 = require("./362786.js"),
  Chunk474936 = require("./474936.js"),
  Chunk711322 = require("./711322.js"),
  Chunk855091 = require("./855091.js");
let _ = {
    [Chunk981631.O0b.UNPAID]: "Unpaid",
    [Chunk981631.O0b.ACTIVE]: "Active",
    [Chunk981631.O0b.PAST_DUE]: "Past Due",
    [Chunk981631.O0b.CANCELED]: "Canceled",
    [Chunk981631.O0b.ENDED]: "Ended",
    [Chunk981631.O0b.ACCOUNT_HOLD]: "Account Hold",
    [Chunk981631.O0b.BILLING_RETRY]: "Billing Retry",
    [Chunk981631.O0b.PAUSED]: "Paused",
    [Chunk981631.O0b.PAUSE_PENDING]: "Pause Pending"
  },
  y = {
    [Chunk362786.Id.UNKNOWN]: "Unknown",
    [Chunk362786.Id.ADMIN]: "Admin",
    [Chunk362786.Id.USER]: "User",
    [Chunk362786.Id.FRACTIONAL_PREMIUM]: "Fractional Premium",
    [Chunk362786.Id.DEFERRED_START]: "Deferred Start",
    [Chunk362786.Id.USER_TEMPORARY_BAN]: "User Temp Ban"
  },
  C = [{
    label: "Unpaid",
    value: Chunk981631.O0b.UNPAID
  }, {
    label: "Active",
    value: Chunk981631.O0b.ACTIVE
  }, {
    label: "Past Due",
    value: Chunk981631.O0b.PAST_DUE
  }, {
    label: "Canceled",
    value: Chunk981631.O0b.CANCELED
  }, {
    label: "Ended",
    value: Chunk981631.O0b.ENDED
  }, {
    label: "Account Hold",
    value: Chunk981631.O0b.ACCOUNT_HOLD
  }, {
    label: "Billing Retry",
    value: Chunk981631.O0b.BILLING_RETRY
  }, {
    label: "Paused",
    value: Chunk981631.O0b.PAUSED
  }, {
    label: "Pause Pending",
    value: Chunk981631.O0b.PAUSE_PENDING
  }];

function S(e) {
  var t, n, i, s, f, S, E;
  let {
    subscription: O,
    onUpdated: T
  } = e, [N, P] = r.useState(false), [I, w] = r.useState(false), [k, R] = r.useState(false), [A, Z] = r.useState(false), [D, L] = r.useState(null), M = e => (null == e && (e = O.status), e in _) ? _[e] : "Unknown status ".concat(e), U = e => {
    let t = new Date(e);
    return p.default.fromTimestamp(t.getTime())
  }, F = async e => {
    let {
      status: t = O.status,
      premiumStreakStart: n,
      endedAt: a
    } = e, r = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
          var a;
          a = n[t], t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = a
        })
      }
      return e
    }({
      subscription_status: t
    }, null != n ? {
      premium_streak_started_at: U(n)
    } : null, null != a ? {
      ended_at: U(a)
    } : null);
    await c.tn.patch({
      url: "/debug/subscriptions/".concat(O.id),
      body: r,
      rejectWithError: false
    }), T()
  }, B = async () => {
    try {
      await c.tn.post({
        url: "/debug/subscriptions/".concat(O.id, "/transition"),
        body: {
          target_datetime: new Date().toISOString(),
          payment_type: 0,
          transition: 2,
          send_reminder_email: false
        },
        rejectWithError: false
      })
    } catch (e) {
      L(e.body.message)
    }
    T()
  }, G = (null == (t = b.GP[O.planIdFromItems]) ? true : t.premiumType) === b.PremiumTypes.TIER_0, z = null == (n = O.metadata) ? true : n.ended_at, V = null != z ? new Date(z).toISOString().substring(0, 10) : "", H = [{
    id: "id",
    label: "ID: ".concat(O.id)
  }, {
    id: "status",
    label: "Status: ".concat(M())
  }], W = O.hasActiveTrial, K = (null == (i = O.metadata) ? true : i.active_discount_id) != null;
  return W && H.push({
    id: "trial",
    label: "Has Trial"
  }), K && H.push({
    id: "active-discount",
    label: "Has Active Discount"
  }), O.status !== g.O0b.ACTIVE && H.push({
    id: "dates",
    label: "Dates: ".concat((0, m.vc)(O.createdAt, "LL"), " - ").concat((0, m.vc)(O.currentPeriodEnd, "LL"))
  }), O.status === g.O0b.PAUSED && H.push({
    id: "pause-reason",
    label: "Pause Reason: ".concat(O.pauseReason in y ? y[O.pauseReason] : "Unknown pause reason ".concat(O.pauseReason))
  }), (0, a.jsx)("div", {
    className: l()(v.card, G ? v.gradientWrapperTier0 : v.gradientWrapperTier2),
    children: (0, a.jsxs)(d.C3N, {
      label: "Type: ".concat((() => {
        let e = O.planIdFromItems;
        return null == e ? "No plan id" : e in b.GP ? b.GP[e].name : "Unknown plan id ".concat(e)
      })()),
      className: j.fieldset,
      children: [(0, a.jsx)(d.QSK, {
        items: H,
        label: "Tags"
      }), W && (0, a.jsxs)("div", {
        className: j.collapsablePane,
        children: [(0, a.jsxs)(d.P3F, {
          onClick: () => {
            R(!k)
          },
          className: j.collapsablePaneHeader,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(d.Text, {
              variant: "text-md/bold",
              children: "Trial Info"
            })
          }), (0, a.jsx)(u.Z, {
            direction: k ? u.Z.Directions.UP : u.Z.Directions.DOWN
          })]
        }), k && (0, a.jsxs)("ul", {
          className: j.collapsiblePaneList,
          children: [(0, a.jsxs)("li", {
            children: [(0, a.jsx)(d.Text, {
              variant: "text-md/bold",
              children: "trial_id"
            }), (0, a.jsx)(d.Text, {
              variant: "text-sm/normal",
              children: O.trialId
            })]
          }), (0, a.jsxs)("li", {
            children: [(0, a.jsx)(d.Text, {
              variant: "text-md/bold",
              children: "trial_ends_at"
            }), (0, a.jsx)(d.Text, {
              variant: "text-sm/normal",
              children: null != O.trialEndsAt ? (0, m.vc)(O.trialEndsAt, "LL") : "N/A"
            })]
          })]
        })]
      }), K && (0, a.jsxs)("div", {
        className: j.collapsablePane,
        children: [(0, a.jsxs)(d.P3F, {
          onClick: () => {
            Z(!A)
          },
          className: j.collapsablePaneHeader,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(d.Text, {
              variant: "text-md/bold",
              children: "Active Discount Info"
            })
          }), (0, a.jsx)(u.Z, {
            direction: A ? u.Z.Directions.UP : u.Z.Directions.DOWN
          })]
        }), A && (0, a.jsxs)("ul", {
          className: j.collapsiblePaneList,
          children: [(0, a.jsxs)("li", {
            children: [(0, a.jsx)(d.Text, {
              variant: "text-md/bold",
              children: "active_discount_id"
            }), (0, a.jsx)(d.Text, {
              variant: "text-sm/normal",
              children: null == (s = O.metadata) ? true : s.active_discount_id
            })]
          }), (0, a.jsxs)("li", {
            children: [(0, a.jsx)(d.Text, {
              variant: "text-md/bold",
              children: "active_discount_expires_at"
            }), (0, a.jsx)(d.Text, {
              variant: "text-sm/normal",
              children: (null == (f = O.metadata) ? true : f.active_discount_expires_at) != null ? (0, m.vc)(new Date(null == (S = O.metadata) ? true : S.active_discount_expires_at), "LL") : "N/A"
            })]
          })]
        })]
      }), null != O.metadata && (0, a.jsxs)("div", {
        className: j.collapsablePane,
        children: [(0, a.jsxs)(d.P3F, {
          onClick: () => {
            P(!N)
          },
          className: j.collapsablePaneHeader,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(d.Text, {
              variant: "text-md/bold",
              children: "Metadata"
            })
          }), (0, a.jsx)(u.Z, {
            direction: N ? u.Z.Directions.UP : u.Z.Directions.DOWN
          })]
        }), N && (0, a.jsx)("ul", {
          className: j.collapsiblePaneList,
          children: Object.entries(O.metadata).map(e => {
            let [t, n] = e;
            return (0, a.jsxs)("li", {
              children: [(0, a.jsx)(d.Text, {
                variant: "text-md/bold",
                children: t
              }), (0, a.jsx)(d.Text, {
                variant: "text-sm/normal",
                children: n
              })]
            }, t)
          })
        })]
      }), (0, a.jsxs)("div", {
        className: j.collapsablePane,
        children: [(0, a.jsxs)(d.P3F, {
          onClick: () => {
            w(!I)
          },
          className: j.collapsablePaneHeader,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(d.Text, {
              variant: "text-md/bold",
              children: "Modifications"
            })
          }), (0, a.jsx)(u.Z, {
            direction: I ? u.Z.Directions.UP : u.Z.Directions.DOWN
          })]
        }), I && (0, a.jsxs)(d.Kqy, {
          gap: 24,
          children: [(0, a.jsx)(d.PhF, {
            label: "Status",
            serialize: e => M(e),
            isSelected: e => e === O.status,
            options: C,
            select: e => F({
              status: e
            }),
            popoutLayerContext: h.O$
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(d.Button, {
              variant: "primary",
              size: "sm",
              text: "Renew Subscription",
              onClick: e => B()
            }), null !== D && (0, a.jsx)("div", {
              className: j.error,
              children: (0, a.jsx)(d.M14, {
                type: "critical",
                children: D
              })
            })]
          }), (0, a.jsxs)(d.Kqy, {
            gap: 16,
            children: [(0, a.jsx)(d.Wrb, {
              label: "Premium Streak Start Date",
              value: o()(null == (E = O.premiumSince) ? true : E.toISOString().substring(0, 10)),
              onSelect: e => F({
                premiumStreakStart: e.toISOString()
              })
            }), (0, a.jsx)(x.Z, {})]
          }), (0, a.jsx)(d.Wrb, {
            label: "Metadata Ended At Date",
            value: o()(V),
            onSelect: e => F({
              endedAt: e.toISOString()
            })
          })]
        })]
      })]
    })
  })
}