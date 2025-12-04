/** Chunk was on 88282 **/
/** chunk id: 759027, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./35282.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk793030 = require("./793030.js"),
  Chunk544891 = require("./544891.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk55935 = require("./55935.js"),
  Chunk709054 = require("./709054.js"),
  Chunk246992 = require("./246992.js"),
  Chunk923576 = require("./923576.jsx"),
  Chunk257665 = require("./257665.js"),
  Chunk981631 = require("./981631.js"),
  Chunk362786 = require("./362786.js"),
  Chunk474936 = require("./474936.js"),
  Chunk711322 = require("./711322.js"),
  Chunk855091 = require("./855091.js");

function S(e) {
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
}
let E = {
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
  N = {
    [Chunk362786.Id.UNKNOWN]: "Unknown",
    [Chunk362786.Id.ADMIN]: "Admin",
    [Chunk362786.Id.USER]: "User",
    [Chunk362786.Id.FRACTIONAL_PREMIUM]: "Fractional Premium",
    [Chunk362786.Id.DEFERRED_START]: "Deferred Start",
    [Chunk362786.Id.USER_TEMPORARY_BAN]: "User Temp Ban"
  },
  O = [{
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

function T(e) {
  let {
    subscription: t,
    onClose: n,
    onUpdated: r,
    transitionState: i
  } = e, [s, d] = l.useState(o()()), [u, p] = l.useState(o()().format("HH:mm")), [h, x] = l.useState(false), [f, g] = l.useState(true), v = async () => {
    if (null == s) return void g("Please select a target date");
    let [e, a] = u.split(":").map(Number), l = s.clone().hours(e).minutes(a).seconds(0).milliseconds(0);
    x(true), g(true);
    try {
      await b.vc(t.id, b.cN.TIME_TRAVEL, {
        targetDate: l,
        paymentType: b.F0.DEFAULT,
        sendReminderEmail: false
      }), r(), n()
    } catch (e) {
      var i;
      g((null == (i = e.body) ? true : i.message) || e.message || "Failed to time travel")
    } finally {
      x(false)
    }
  };
  return (0, a.jsx)(c.Modal, {
    transitionState: i,
    onClose: () => (n(), Promise.resolve()),
    title: "Time Travel Subscription",
    size: "sm",
    actions: [{
      text: "Cancel",
      variant: "secondary",
      onClick: n
    }, {
      text: "Time Travel",
      variant: "primary",
      onClick: v,
      disabled: h || null == s
    }],
    children: (0, a.jsxs)(m.Kqy, {
      gap: 16,
      children: [(0, a.jsx)(m.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations."
      }), (0, a.jsx)(m.Wrb, {
        label: "Target Date",
        value: s,
        onSelect: d
      }), (0, a.jsx)(m.C3N, {
        label: "Target Time (HH:mm)",
        children: (0, a.jsx)("input", {
          type: "time",
          value: u,
          onChange: e => {
            p(e.target.value)
          },
          className: C.timeInput
        })
      }), (0, a.jsxs)(m.Kqy, {
        gap: 8,
        children: [(0, a.jsx)(m.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: "Current Period"
        }), (0, a.jsxs)(m.Kqy, {
          gap: 4,
          children: [(0, a.jsxs)(m.Text, {
            variant: "text-xs/normal",
            className: C.periodText,
            children: ["Start: ", o()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")]
          }), (0, a.jsxs)(m.Text, {
            variant: "text-xs/normal",
            className: C.periodText,
            children: ["End: ", o()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")]
          })]
        })]
      }), null != f && (0, a.jsx)(m.M14, {
        type: "critical",
        children: f
      })]
    })
  })
}

function P(e) {
  var t, n, r, s, c, j, P;
  let {
    subscription: I,
    onUpdated: w
  } = e, [k, R] = l.useState(false), [A, Z] = l.useState(false), [D, L] = l.useState(false), [M, U] = l.useState(false), [B, F] = l.useState(null), G = e => (null == e && (e = I.status), e in E) ? E[e] : "Unknown status ".concat(e), z = e => {
    let t = new Date(e);
    return x.default.fromTimestamp(t.getTime())
  }, V = async e => {
    let {
      status: t = I.status,
      premiumStreakStart: n,
      endedAt: a
    } = e, l = S({
      subscription_status: t
    }, null != n ? {
      premium_streak_started_at: z(n)
    } : null, null != a ? {
      ended_at: z(a)
    } : null);
    await d.tn.patch({
      url: "/debug/subscriptions/".concat(I.id),
      body: l,
      rejectWithError: false
    }), w()
  }, H = async () => {
    try {
      await b.vc(I.id, b.cN.RENEW, {
        targetDate: o()(new Date),
        paymentType: b.F0.DEFAULT,
        sendReminderEmail: false
      })
    } catch (t) {
      var e;
      F((null == (e = t.body) ? true : e.message) || t.message || "Failed to renew subscription")
    }
    w()
  }, W = (null == (t = _.GP[I.planIdFromItems]) ? true : t.premiumType) === _.PremiumTypes.TIER_0, K = null == (n = I.metadata) ? true : n.ended_at, q = null != K ? new Date(K).toISOString().substring(0, 10) : "", Y = [{
    id: "id",
    label: "ID: ".concat(I.id),
    isDisabled: false
  }, {
    id: "status",
    label: "Status: ".concat(G()),
    isDisabled: false
  }], J = I.hasActiveTrial, X = (null == (r = I.metadata) ? true : r.active_discount_id) != null;
  return J && Y.push({
    id: "trial",
    label: "Has Trial",
    isDisabled: false
  }), X && Y.push({
    id: "active-discount",
    label: "Has Active Discount",
    isDisabled: false
  }), I.status !== v.O0b.ACTIVE && Y.push({
    id: "dates",
    label: "Dates: ".concat((0, h.vc)(I.createdAt, "LL"), " - ").concat((0, h.vc)(I.currentPeriodEnd, "LL")),
    isDisabled: false
  }), I.status === v.O0b.PAUSED && Y.push({
    id: "pause-reason",
    label: "Pause Reason: ".concat(I.pauseReason in N ? N[I.pauseReason] : "Unknown pause reason ".concat(I.pauseReason)),
    isDisabled: false
  }), (0, a.jsx)("div", {
    className: i()(y.card, W ? y.gradientWrapperTier0 : y.gradientWrapperTier2),
    children: (0, a.jsxs)(m.C3N, {
      label: "Type: ".concat((() => {
        let e = I.planIdFromItems;
        return null == e ? "No plan id" : e in _.GP ? _.GP[e].name : "Unknown plan id ".concat(e)
      })()),
      className: C.fieldset,
      children: [(0, a.jsx)(m.QSK, {
        items: Y,
        label: "Tags",
        selectionMode: "none",
        selectionBehavior: "replace",
        disabledKeys: new Set
      }), J && (0, a.jsxs)("div", {
        className: C.collapsablePane,
        children: [(0, a.jsxs)(m.P3F, {
          onClick: () => {
            L(!D)
          },
          className: C.collapsablePaneHeader,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(m.Text, {
              variant: "text-md/bold",
              children: "Trial Info"
            })
          }), (0, a.jsx)(p.Z, {
            direction: D ? p.Z.Directions.UP : p.Z.Directions.DOWN
          })]
        }), D && (0, a.jsxs)("ul", {
          className: C.collapsiblePaneList,
          children: [(0, a.jsxs)("li", {
            children: [(0, a.jsx)(m.Text, {
              variant: "text-md/bold",
              children: "trial_id"
            }), (0, a.jsx)(m.Text, {
              variant: "text-sm/normal",
              children: I.trialId
            })]
          }), (0, a.jsxs)("li", {
            children: [(0, a.jsx)(m.Text, {
              variant: "text-md/bold",
              children: "trial_ends_at"
            }), (0, a.jsx)(m.Text, {
              variant: "text-sm/normal",
              children: null != I.trialEndsAt ? (0, h.vc)(I.trialEndsAt, "LL") : "N/A"
            })]
          })]
        })]
      }), X && (0, a.jsxs)("div", {
        className: C.collapsablePane,
        children: [(0, a.jsxs)(m.P3F, {
          onClick: () => {
            U(!M)
          },
          className: C.collapsablePaneHeader,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(m.Text, {
              variant: "text-md/bold",
              children: "Active Discount Info"
            })
          }), (0, a.jsx)(p.Z, {
            direction: M ? p.Z.Directions.UP : p.Z.Directions.DOWN
          })]
        }), M && (0, a.jsxs)("ul", {
          className: C.collapsiblePaneList,
          children: [(0, a.jsxs)("li", {
            children: [(0, a.jsx)(m.Text, {
              variant: "text-md/bold",
              children: "active_discount_id"
            }), (0, a.jsx)(m.Text, {
              variant: "text-sm/normal",
              children: null == (s = I.metadata) ? true : s.active_discount_id
            })]
          }), (0, a.jsxs)("li", {
            children: [(0, a.jsx)(m.Text, {
              variant: "text-md/bold",
              children: "active_discount_expires_at"
            }), (0, a.jsx)(m.Text, {
              variant: "text-sm/normal",
              children: (null == (c = I.metadata) ? true : c.active_discount_expires_at) != null ? (0, h.vc)(new Date(null == (j = I.metadata) ? true : j.active_discount_expires_at), "LL") : "N/A"
            })]
          })]
        })]
      }), null != I.metadata && (0, a.jsxs)("div", {
        className: C.collapsablePane,
        children: [(0, a.jsxs)(m.P3F, {
          onClick: () => {
            R(!k)
          },
          className: C.collapsablePaneHeader,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(m.Text, {
              variant: "text-md/bold",
              children: "Metadata"
            })
          }), (0, a.jsx)(p.Z, {
            direction: k ? p.Z.Directions.UP : p.Z.Directions.DOWN
          })]
        }), k && (0, a.jsx)("ul", {
          className: C.collapsiblePaneList,
          children: Object.entries(I.metadata).map(e => {
            let [t, n] = e;
            return (0, a.jsxs)("li", {
              children: [(0, a.jsx)(m.Text, {
                variant: "text-md/bold",
                children: t
              }), (0, a.jsx)(m.Text, {
                variant: "text-sm/normal",
                children: n
              })]
            }, t)
          })
        })]
      }), (0, a.jsxs)("div", {
        className: C.collapsablePane,
        children: [(0, a.jsxs)(m.P3F, {
          onClick: () => {
            Z(!A)
          },
          className: C.collapsablePaneHeader,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(m.Text, {
              variant: "text-md/bold",
              children: "Modifications"
            })
          }), (0, a.jsx)(p.Z, {
            direction: A ? p.Z.Directions.UP : p.Z.Directions.DOWN
          })]
        }), A && (0, a.jsxs)(m.Kqy, {
          gap: 24,
          children: [(0, a.jsx)(u.B6, {
            label: "Status",
            serialize: e => G(e),
            isSelected: e => e === I.status,
            options: O,
            select: e => V({
              status: e
            }),
            popoutLayerContext: f.O$
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsxs)(m.Kqy, {
              gap: 12,
              children: [(0, a.jsx)(m.Button, {
                variant: "primary",
                size: "sm",
                text: "Renew Subscription",
                onClick: e => H()
              }), (0, a.jsx)(m.Button, {
                variant: "secondary",
                size: "sm",
                text: "Time Travel",
                onClick: () => {
                  (0, m.ZDy)(() => Promise.resolve(e => (0, a.jsx)(T, S({
                    subscription: I,
                    onUpdated: w
                  }, e))))
                }
              })]
            }), null !== B && (0, a.jsx)("div", {
              className: C.error,
              children: (0, a.jsx)(m.M14, {
                type: "critical",
                children: B
              })
            })]
          }), (0, a.jsxs)(m.Kqy, {
            gap: 16,
            children: [(0, a.jsx)(m.Wrb, {
              label: "Premium Streak Start Date",
              value: o()(null == (P = I.premiumSince) ? true : P.toISOString().substring(0, 10)),
              onSelect: e => V({
                premiumStreakStart: e.toISOString()
              })
            }), (0, a.jsx)(g.Z, {})]
          }), (0, a.jsx)(m.Wrb, {
            label: "Metadata Ended At Date",
            value: o()(q),
            onSelect: e => V({
              endedAt: e.toISOString()
            })
          })]
        })]
      })]
    })
  })
}