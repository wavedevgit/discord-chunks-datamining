/** Chunk was on 22979 **/
/** chunk id: 759027, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./35282.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk793030 = require("./793030.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk55935 = require("./55935.js"),
  Chunk709054 = require("./709054.js"),
  Chunk923576 = require("./923576.jsx"),
  Chunk257665 = require("./257665.js"),
  Chunk981631 = require("./981631.js"),
  Chunk362786 = require("./362786.js"),
  Chunk474936 = require("./474936.js"),
  Chunk68428 = require("./68428.js"),
  Chunk329370 = require("./329370.js");

function C(e) {
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
  S = {
    [Chunk362786.Id.UNKNOWN]: "Unknown",
    [Chunk362786.Id.ADMIN]: "Admin",
    [Chunk362786.Id.USER]: "User",
    [Chunk362786.Id.FRACTIONAL_PREMIUM]: "Fractional Premium",
    [Chunk362786.Id.DEFERRED_START]: "Deferred Start",
    [Chunk362786.Id.USER_TEMPORARY_BAN]: "User Temp Ban"
  },
  E = [{
    id: "unpaid",
    label: "Unpaid",
    value: Chunk981631.O0b.UNPAID
  }, {
    id: "active",
    label: "Active",
    value: Chunk981631.O0b.ACTIVE
  }, {
    id: "pastDue",
    label: "Past Due",
    value: Chunk981631.O0b.PAST_DUE
  }, {
    id: "canceled",
    label: "Canceled",
    value: Chunk981631.O0b.CANCELED
  }, {
    id: "ended",
    label: "Ended",
    value: Chunk981631.O0b.ENDED
  }, {
    id: "accountHold",
    label: "Account Hold",
    value: Chunk981631.O0b.ACCOUNT_HOLD
  }, {
    id: "billingRetry",
    label: "Billing Retry",
    value: Chunk981631.O0b.BILLING_RETRY
  }, {
    id: "paused",
    label: "Paused",
    value: Chunk981631.O0b.PAUSED
  }, {
    id: "pausePending",
    label: "Pause Pending",
    value: Chunk981631.O0b.PAUSE_PENDING
  }];

function T(e) {
  let {
    subscription: t,
    onClose: n,
    onUpdated: i,
    transitionState: l
  } = e, [s, d] = r.useState(o()()), [m, p] = r.useState(o()().format("HH:mm")), [h, f] = r.useState(false), [x, g] = r.useState(true), v = async () => {
    if (null == s) return void g("Please select a target date");
    let [e, a] = m.split(":").map(Number), r = s.clone().hours(e).minutes(a).seconds(0).milliseconds(0);
    f(true), g(true);
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
      f(false)
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
    children: (0, a.jsxs)(u.Kqy, {
      gap: 16,
      children: [(0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations."
      }), (0, a.jsx)(u.Wrb, {
        label: "Target Date",
        value: s,
        onSelect: d
      }), (0, a.jsx)(u.C3N, {
        label: "Target Time (HH:mm)",
        children: (0, a.jsx)("input", {
          type: "time",
          value: m,
          onChange: e => {
            p(e.target.value)
          },
          className: y.timeInput
        })
      }), (0, a.jsxs)(u.Kqy, {
        gap: 8,
        children: [(0, a.jsx)(u.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: "Current Period"
        }), (0, a.jsxs)(u.Kqy, {
          gap: 4,
          children: [(0, a.jsxs)(u.Text, {
            variant: "text-xs/normal",
            className: y.periodText,
            children: ["Start: ", o()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")]
          }), (0, a.jsxs)(u.Text, {
            variant: "text-xs/normal",
            className: y.periodText,
            children: ["End: ", o()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")]
          })]
        })]
      }), null != x && (0, a.jsx)(u.M14, {
        type: "critical",
        children: x
      })]
    })
  })
}

function O(e) {
  var t, n, i, s, c, g, O, N;
  let {
    subscription: P,
    onUpdated: w
  } = e, [I, k] = r.useState(false), [R, A] = r.useState(false), [Z, D] = r.useState(false), [M, L] = r.useState(false), [U, B] = r.useState(null), [F, G] = r.useState(""), V = e => {
    let t = new Date(e);
    return h.default.fromTimestamp(t.getTime())
  }, W = async e => {
    let {
      status: t = P.status,
      premiumStreakStart: n,
      endedAt: a
    } = e, r = C({
      subscription_status: t
    }, null != n ? {
      premium_streak_started_at: V(n)
    } : null, null != a ? {
      ended_at: V(a)
    } : null);
    await d.tn.patch({
      url: "/debug/subscriptions/".concat(P.id),
      body: r,
      rejectWithError: false
    }), w()
  }, z = async () => {
    try {
      await b.vc(P.id, b.cN.RENEW, {
        targetDate: o()(new Date),
        paymentType: b.F0.DEFAULT,
        sendReminderEmail: false
      })
    } catch (t) {
      var e;
      B((null == (e = t.body) ? true : e.message) || t.message || "Failed to renew subscription")
    }
    w()
  }, H = async e => {
    let {
      accepted: t
    } = e;
    try {
      await d.tn.post({
        url: "/debug/subscriptions/".concat(P.id, "/members/").concat(F),
        body: C({}, t ? {
          accepted: true
        } : {}),
        rejectWithError: false
      }), G("")
    } catch (e) {
      var n;
      B((null == (n = e.body) ? true : n.message) || e.message || "Failed to add user to group")
    }
  }, q = async () => {
    try {
      await d.tn.del({
        url: "/debug/subscriptions/".concat(P.id, "/members/").concat(F),
        rejectWithError: false
      }), G("")
    } catch (t) {
      var e;
      B((null == (e = t.body) ? true : e.message) || t.message || "Failed to remove user from group")
    }
  }, K = (null == (t = v.GP[P.planIdFromItems]) ? true : t.premiumType) === v.PremiumTypes.TIER_0, Q = null == (n = P.metadata) ? true : n.ended_at, Y = null != Q ? new Date(Q).toISOString().substring(0, 10) : "", X = [{
    id: "id",
    label: "ID: ".concat(P.id),
    isDisabled: false
  }, {
    id: "status",
    label: "Status: ".concat((null == N && (N = P.status), N in _) ? _[N] : "Unknown status ".concat(N)),
    isDisabled: false
  }], J = P.hasActiveTrial, $ = (null == (i = P.metadata) ? true : i.active_discount_id) != null;
  return J && X.push({
    id: "trial",
    label: "Has Trial",
    isDisabled: false
  }), $ && X.push({
    id: "active-discount",
    label: "Has Active Discount",
    isDisabled: false
  }), P.status !== x.O0b.ACTIVE && X.push({
    id: "dates",
    label: "Dates: ".concat((0, p.vc)(P.createdAt, "LL"), " - ").concat((0, p.vc)(P.currentPeriodEnd, "LL")),
    isDisabled: false
  }), P.status === x.O0b.PAUSED && X.push({
    id: "pause-reason",
    label: "Pause Reason: ".concat(P.pauseReason in S ? S[P.pauseReason] : "Unknown pause reason ".concat(P.pauseReason)),
    isDisabled: false
  }), (0, a.jsx)("div", {
    className: l()(j.card, K ? j.gradientWrapperTier0 : j.gradientWrapperTier2),
    children: (0, a.jsxs)(u.C3N, {
      label: "Type: ".concat((() => {
        let e = P.planIdFromItems;
        return null == e ? "No plan id" : e in v.GP ? v.GP[e].name : "Unknown plan id ".concat(e)
      })()),
      className: y.fieldset,
      children: [(0, a.jsx)(u.QSK, {
        items: X,
        label: "Tags",
        selectionMode: "none",
        selectionBehavior: "replace",
        disabledKeys: new Set
      }), J && (0, a.jsxs)("div", {
        className: y.collapsablePane,
        children: [(0, a.jsxs)(u.P3F, {
          onClick: () => {
            D(!Z)
          },
          className: y.collapsablePaneHeader,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              children: "Trial Info"
            })
          }), (0, a.jsx)(m.Z, {
            direction: Z ? m.Z.Directions.UP : m.Z.Directions.DOWN
          })]
        }), Z && (0, a.jsxs)("ul", {
          className: y.collapsiblePaneList,
          children: [(0, a.jsxs)("li", {
            children: [(0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              children: "trial_id"
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/normal",
              children: P.trialId
            })]
          }), (0, a.jsxs)("li", {
            children: [(0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              children: "trial_ends_at"
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/normal",
              children: null != P.trialEndsAt ? (0, p.vc)(P.trialEndsAt, "LL") : "N/A"
            })]
          })]
        })]
      }), $ && (0, a.jsxs)("div", {
        className: y.collapsablePane,
        children: [(0, a.jsxs)(u.P3F, {
          onClick: () => {
            L(!M)
          },
          className: y.collapsablePaneHeader,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              children: "Active Discount Info"
            })
          }), (0, a.jsx)(m.Z, {
            direction: M ? m.Z.Directions.UP : m.Z.Directions.DOWN
          })]
        }), M && (0, a.jsxs)("ul", {
          className: y.collapsiblePaneList,
          children: [(0, a.jsxs)("li", {
            children: [(0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              children: "active_discount_id"
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/normal",
              children: null == (s = P.metadata) ? true : s.active_discount_id
            })]
          }), (0, a.jsxs)("li", {
            children: [(0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              children: "active_discount_expires_at"
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/normal",
              children: (null == (c = P.metadata) ? true : c.active_discount_expires_at) != null ? (0, p.vc)(new Date(null == (g = P.metadata) ? true : g.active_discount_expires_at), "LL") : "N/A"
            })]
          })]
        })]
      }), null != P.metadata && (0, a.jsxs)("div", {
        className: y.collapsablePane,
        children: [(0, a.jsxs)(u.P3F, {
          onClick: () => {
            k(!I)
          },
          className: y.collapsablePaneHeader,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              children: "Metadata"
            })
          }), (0, a.jsx)(m.Z, {
            direction: I ? m.Z.Directions.UP : m.Z.Directions.DOWN
          })]
        }), I && (0, a.jsx)("ul", {
          className: y.collapsiblePaneList,
          children: Object.entries(P.metadata).map(e => {
            let [t, n] = e;
            return (0, a.jsxs)("li", {
              children: [(0, a.jsx)(u.Text, {
                variant: "text-md/bold",
                children: t
              }), (0, a.jsx)(u.Text, {
                variant: "text-sm/normal",
                children: n
              })]
            }, t)
          })
        })]
      }), (0, a.jsxs)("div", {
        className: y.collapsablePane,
        children: [(0, a.jsxs)(u.P3F, {
          onClick: () => {
            A(!R)
          },
          className: y.collapsablePaneHeader,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              children: "Modifications"
            })
          }), (0, a.jsx)(m.Z, {
            direction: R ? m.Z.Directions.UP : m.Z.Directions.DOWN
          })]
        }), R && (0, a.jsxs)(u.Kqy, {
          gap: 24,
          children: [(0, a.jsx)(u.PhF, {
            label: "Status",
            value: P.status,
            options: E,
            onSelectionChange: e => {
              W({
                status: e
              })
            },
            selectionMode: "single",
            fullWidth: true
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsxs)(u.Kqy, {
              gap: 12,
              children: [(0, a.jsx)(u.Button, {
                variant: "primary",
                size: "sm",
                text: "Renew Subscription",
                onClick: e => z()
              }), (0, a.jsx)(u.Button, {
                variant: "secondary",
                size: "sm",
                text: "Time Travel",
                onClick: () => {
                  (0, u.ZDy)(() => Promise.resolve(e => (0, a.jsx)(T, C({
                    subscription: P,
                    onUpdated: w
                  }, e))))
                }
              })]
            }), null !== U && (0, a.jsx)("div", {
              className: y.error,
              children: (0, a.jsx)(u.M14, {
                type: "critical",
                children: U
              })
            })]
          }), (0, a.jsxs)(u.Kqy, {
            gap: 16,
            children: [(0, a.jsx)(u.Wrb, {
              label: "Premium Streak Start Date",
              value: o()(null == (O = P.premiumSince) ? true : O.toISOString().substring(0, 10)),
              onSelect: e => W({
                premiumStreakStart: e.toISOString()
              })
            }), (0, a.jsx)(f.Z, {})]
          }), (0, a.jsx)(u.Wrb, {
            label: "Metadata Ended At Date",
            value: o()(Y),
            onSelect: e => W({
              endedAt: e.toISOString()
            })
          }), (null == P ? true : P.planIdFromItems) === v.Xh.PREMIUM_GROUP_MONTH && (0, a.jsxs)(u.Kqy, {
            gap: 8,
            children: [(0, a.jsx)(u.oil, {
              label: "Subscription Group Member User ID",
              value: F,
              onChange: G
            }), (0, a.jsxs)(u.Kqy, {
              gap: 8,
              direction: "horizontal",
              children: [(0, a.jsx)(u.Button, {
                variant: "primary",
                size: "sm",
                text: "Add",
                onClick: () => H({
                  accepted: true
                }),
                disabled: "" === F
              }), (0, a.jsx)(u.Button, {
                variant: "secondary",
                size: "sm",
                text: "Remove",
                onClick: () => q(),
                disabled: "" === F
              })]
            })]
          })]
        })]
      })]
    })
  })
}