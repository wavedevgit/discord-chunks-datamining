/** Chunk was on 75393 **/
/** chunk id: 759027, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./35282.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  O = {
    [Chunk362786.Id.UNKNOWN]: "Unknown",
    [Chunk362786.Id.ADMIN]: "Admin",
    [Chunk362786.Id.USER]: "User",
    [Chunk362786.Id.FRACTIONAL_PREMIUM]: "Fractional Premium",
    [Chunk362786.Id.DEFERRED_START]: "Deferred Start",
    [Chunk362786.Id.USER_TEMPORARY_BAN]: "User Temp Ban"
  },
  T = [{
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

function N(e) {
  let {
    subscription: t,
    onClose: n,
    onUpdated: i,
    transitionState: l
  } = e, [s, d] = r.useState(o()()), [u, p] = r.useState(o()().format("HH:mm")), [h, x] = r.useState(false), [f, g] = r.useState(true), v = async () => {
    if (null == s) return void g("Please select a target date");
    let [e, a] = u.split(":").map(Number), r = s.clone().hours(e).minutes(a).seconds(0).milliseconds(0);
    x(true), g(true);
    try {
      await b.vc(t.id, b.cN.TIME_TRAVEL, {
        targetDate: r,
        paymentType: b.F0.DEFAULT,
        sendReminderEmail: false
      }), i(), n()
    } catch (e) {
      var l;
      g((null == (l = e.body) ? true : l.message) || e.message || "Failed to time travel")
    } finally {
      x(false)
    }
  };
  return (0, a.jsx)(c.Modal, {
    transitionState: l,
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
  var t, n, i, s, c, j, P;
  let {
    subscription: w,
    onUpdated: I
  } = e, [k, R] = r.useState(false), [A, D] = r.useState(false), [Z, L] = r.useState(false), [M, U] = r.useState(false), [B, F] = r.useState(null), G = e => (null == e && (e = w.status), e in E) ? E[e] : "Unknown status ".concat(e), V = e => {
    let t = new Date(e);
    return x.default.fromTimestamp(t.getTime())
  }, H = async e => {
    let {
      status: t = w.status,
      premiumStreakStart: n,
      endedAt: a
    } = e, r = S({
      subscription_status: t
    }, null != n ? {
      premium_streak_started_at: V(n)
    } : null, null != a ? {
      ended_at: V(a)
    } : null);
    await d.tn.patch({
      url: "/debug/subscriptions/".concat(w.id),
      body: r,
      rejectWithError: false
    }), I()
  }, W = async () => {
    try {
      await b.vc(w.id, b.cN.RENEW, {
        targetDate: o()(new Date),
        paymentType: b.F0.DEFAULT,
        sendReminderEmail: false
      })
    } catch (t) {
      var e;
      F((null == (e = t.body) ? true : e.message) || t.message || "Failed to renew subscription")
    }
    I()
  }, z = (null == (t = _.GP[w.planIdFromItems]) ? true : t.premiumType) === _.PremiumTypes.TIER_0, K = null == (n = w.metadata) ? true : n.ended_at, q = null != K ? new Date(K).toISOString().substring(0, 10) : "", Q = [{
    id: "id",
    label: "ID: ".concat(w.id),
    isDisabled: false
  }, {
    id: "status",
    label: "Status: ".concat(G()),
    isDisabled: false
  }], Y = w.hasActiveTrial, X = (null == (i = w.metadata) ? true : i.active_discount_id) != null;
  return Y && Q.push({
    id: "trial",
    label: "Has Trial",
    isDisabled: false
  }), X && Q.push({
    id: "active-discount",
    label: "Has Active Discount",
    isDisabled: false
  }), w.status !== v.O0b.ACTIVE && Q.push({
    id: "dates",
    label: "Dates: ".concat((0, h.vc)(w.createdAt, "LL"), " - ").concat((0, h.vc)(w.currentPeriodEnd, "LL")),
    isDisabled: false
  }), w.status === v.O0b.PAUSED && Q.push({
    id: "pause-reason",
    label: "Pause Reason: ".concat(w.pauseReason in O ? O[w.pauseReason] : "Unknown pause reason ".concat(w.pauseReason)),
    isDisabled: false
  }), (0, a.jsx)("div", {
    className: l()(y.card, z ? y.gradientWrapperTier0 : y.gradientWrapperTier2),
    children: (0, a.jsxs)(m.C3N, {
      label: "Type: ".concat((() => {
        let e = w.planIdFromItems;
        return null == e ? "No plan id" : e in _.GP ? _.GP[e].name : "Unknown plan id ".concat(e)
      })()),
      className: C.fieldset,
      children: [(0, a.jsx)(m.QSK, {
        items: Q,
        label: "Tags",
        selectionMode: "none",
        selectionBehavior: "replace",
        disabledKeys: new Set
      }), Y && (0, a.jsxs)("div", {
        className: C.collapsablePane,
        children: [(0, a.jsxs)(m.P3F, {
          onClick: () => {
            L(!Z)
          },
          className: C.collapsablePaneHeader,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(m.Text, {
              variant: "text-md/bold",
              children: "Trial Info"
            })
          }), (0, a.jsx)(p.Z, {
            direction: Z ? p.Z.Directions.UP : p.Z.Directions.DOWN
          })]
        }), Z && (0, a.jsxs)("ul", {
          className: C.collapsiblePaneList,
          children: [(0, a.jsxs)("li", {
            children: [(0, a.jsx)(m.Text, {
              variant: "text-md/bold",
              children: "trial_id"
            }), (0, a.jsx)(m.Text, {
              variant: "text-sm/normal",
              children: w.trialId
            })]
          }), (0, a.jsxs)("li", {
            children: [(0, a.jsx)(m.Text, {
              variant: "text-md/bold",
              children: "trial_ends_at"
            }), (0, a.jsx)(m.Text, {
              variant: "text-sm/normal",
              children: null != w.trialEndsAt ? (0, h.vc)(w.trialEndsAt, "LL") : "N/A"
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
              children: null == (s = w.metadata) ? true : s.active_discount_id
            })]
          }), (0, a.jsxs)("li", {
            children: [(0, a.jsx)(m.Text, {
              variant: "text-md/bold",
              children: "active_discount_expires_at"
            }), (0, a.jsx)(m.Text, {
              variant: "text-sm/normal",
              children: (null == (c = w.metadata) ? true : c.active_discount_expires_at) != null ? (0, h.vc)(new Date(null == (j = w.metadata) ? true : j.active_discount_expires_at), "LL") : "N/A"
            })]
          })]
        })]
      }), null != w.metadata && (0, a.jsxs)("div", {
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
          children: Object.entries(w.metadata).map(e => {
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
            D(!A)
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
            isSelected: e => e === w.status,
            options: T,
            select: e => H({
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
                onClick: e => W()
              }), (0, a.jsx)(m.Button, {
                variant: "secondary",
                size: "sm",
                text: "Time Travel",
                onClick: () => {
                  (0, m.ZDy)(() => Promise.resolve(e => (0, a.jsx)(N, S({
                    subscription: w,
                    onUpdated: I
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
              value: o()(null == (P = w.premiumSince) ? true : P.toISOString().substring(0, 10)),
              onSelect: e => H({
                premiumStreakStart: e.toISOString()
              })
            }), (0, a.jsx)(g.Z, {})]
          }), (0, a.jsx)(m.Wrb, {
            label: "Metadata Ended At Date",
            value: o()(q),
            onSelect: e => H({
              endedAt: e.toISOString()
            })
          })]
        })]
      })]
    })
  })
}