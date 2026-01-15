/** Chunk was on 22979 **/
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
  Chunk68428 = require("./68428.js"),
  Chunk329370 = require("./329370.js");

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
  T = {
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

function N(e) {
  let {
    subscription: t,
    onClose: n,
    onUpdated: i,
    transitionState: l
  } = e, [s, d] = r.useState(o()()), [u, p] = r.useState(o()().format("HH:mm")), [h, f] = r.useState(false), [x, b] = r.useState(true), v = async () => {
    if (null == s) return void b("Please select a target date");
    let [e, a] = u.split(":").map(Number), r = s.clone().hours(e).minutes(a).seconds(0).milliseconds(0);
    f(true), b(true);
    try {
      await g.vc(t.id, g.cN.TIME_TRAVEL, {
        targetDate: r,
        paymentType: g.F0.DEFAULT,
        sendReminderEmail: false
      }), i(), n()
    } catch (e) {
      var l;
      b((null == (l = e.body) ? true : l.message) || e.message || "Failed to time travel")
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
          className: _.timeInput
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
            className: _.periodText,
            children: ["Start: ", o()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")]
          }), (0, a.jsxs)(m.Text, {
            variant: "text-xs/normal",
            className: _.periodText,
            children: ["End: ", o()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")]
          })]
        })]
      }), null != x && (0, a.jsx)(m.M14, {
        type: "critical",
        children: x
      })]
    })
  })
}

function P(e) {
  var t, n, i, s, c, j, P;
  let {
    subscription: w,
    onUpdated: I
  } = e, [k, R] = r.useState(false), [A, D] = r.useState(false), [Z, L] = r.useState(false), [M, U] = r.useState(false), [B, F] = r.useState(null), [G, V] = r.useState(""), z = e => (null == e && (e = w.status), e in E) ? E[e] : "Unknown status ".concat(e), H = e => {
    let t = new Date(e);
    return f.default.fromTimestamp(t.getTime())
  }, W = async e => {
    let {
      status: t = w.status,
      premiumStreakStart: n,
      endedAt: a
    } = e, r = S({
      subscription_status: t
    }, null != n ? {
      premium_streak_started_at: H(n)
    } : null, null != a ? {
      ended_at: H(a)
    } : null);
    await d.tn.patch({
      url: "/debug/subscriptions/".concat(w.id),
      body: r,
      rejectWithError: false
    }), I()
  }, K = async () => {
    try {
      await g.vc(w.id, g.cN.RENEW, {
        targetDate: o()(new Date),
        paymentType: g.F0.DEFAULT,
        sendReminderEmail: false
      })
    } catch (t) {
      var e;
      F((null == (e = t.body) ? true : e.message) || t.message || "Failed to renew subscription")
    }
    I()
  }, q = async e => {
    let {
      accepted: t
    } = e;
    try {
      await d.tn.post({
        url: "/debug/subscriptions/".concat(w.id, "/members/").concat(G),
        body: S({}, t ? {
          accepted: true
        } : {}),
        rejectWithError: false
      }), V("")
    } catch (e) {
      var n;
      F((null == (n = e.body) ? true : n.message) || e.message || "Failed to add user to group")
    }
  }, Y = async () => {
    try {
      await d.tn.del({
        url: "/debug/subscriptions/".concat(w.id, "/members/").concat(G),
        rejectWithError: false
      }), V("")
    } catch (t) {
      var e;
      F((null == (e = t.body) ? true : e.message) || t.message || "Failed to remove user from group")
    }
  }, Q = (null == (t = y.GP[w.planIdFromItems]) ? true : t.premiumType) === y.PremiumTypes.TIER_0, X = null == (n = w.metadata) ? true : n.ended_at, J = null != X ? new Date(X).toISOString().substring(0, 10) : "", $ = [{
    id: "id",
    label: "ID: ".concat(w.id),
    isDisabled: false
  }, {
    id: "status",
    label: "Status: ".concat(z()),
    isDisabled: false
  }], ee = w.hasActiveTrial, et = (null == (i = w.metadata) ? true : i.active_discount_id) != null;
  return ee && $.push({
    id: "trial",
    label: "Has Trial",
    isDisabled: false
  }), et && $.push({
    id: "active-discount",
    label: "Has Active Discount",
    isDisabled: false
  }), w.status !== v.O0b.ACTIVE && $.push({
    id: "dates",
    label: "Dates: ".concat((0, h.vc)(w.createdAt, "LL"), " - ").concat((0, h.vc)(w.currentPeriodEnd, "LL")),
    isDisabled: false
  }), w.status === v.O0b.PAUSED && $.push({
    id: "pause-reason",
    label: "Pause Reason: ".concat(w.pauseReason in T ? T[w.pauseReason] : "Unknown pause reason ".concat(w.pauseReason)),
    isDisabled: false
  }), (0, a.jsx)("div", {
    className: l()(C.card, Q ? C.gradientWrapperTier0 : C.gradientWrapperTier2),
    children: (0, a.jsxs)(m.C3N, {
      label: "Type: ".concat((() => {
        let e = w.planIdFromItems;
        return null == e ? "No plan id" : e in y.GP ? y.GP[e].name : "Unknown plan id ".concat(e)
      })()),
      className: _.fieldset,
      children: [(0, a.jsx)(m.QSK, {
        items: $,
        label: "Tags",
        selectionMode: "none",
        selectionBehavior: "replace",
        disabledKeys: new Set
      }), ee && (0, a.jsxs)("div", {
        className: _.collapsablePane,
        children: [(0, a.jsxs)(m.P3F, {
          onClick: () => {
            L(!Z)
          },
          className: _.collapsablePaneHeader,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(m.Text, {
              variant: "text-md/bold",
              children: "Trial Info"
            })
          }), (0, a.jsx)(p.Z, {
            direction: Z ? p.Z.Directions.UP : p.Z.Directions.DOWN
          })]
        }), Z && (0, a.jsxs)("ul", {
          className: _.collapsiblePaneList,
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
      }), et && (0, a.jsxs)("div", {
        className: _.collapsablePane,
        children: [(0, a.jsxs)(m.P3F, {
          onClick: () => {
            U(!M)
          },
          className: _.collapsablePaneHeader,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(m.Text, {
              variant: "text-md/bold",
              children: "Active Discount Info"
            })
          }), (0, a.jsx)(p.Z, {
            direction: M ? p.Z.Directions.UP : p.Z.Directions.DOWN
          })]
        }), M && (0, a.jsxs)("ul", {
          className: _.collapsiblePaneList,
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
        className: _.collapsablePane,
        children: [(0, a.jsxs)(m.P3F, {
          onClick: () => {
            R(!k)
          },
          className: _.collapsablePaneHeader,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(m.Text, {
              variant: "text-md/bold",
              children: "Metadata"
            })
          }), (0, a.jsx)(p.Z, {
            direction: k ? p.Z.Directions.UP : p.Z.Directions.DOWN
          })]
        }), k && (0, a.jsx)("ul", {
          className: _.collapsiblePaneList,
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
        className: _.collapsablePane,
        children: [(0, a.jsxs)(m.P3F, {
          onClick: () => {
            D(!A)
          },
          className: _.collapsablePaneHeader,
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
            serialize: e => z(e),
            isSelected: e => e === w.status,
            options: O,
            select: e => W({
              status: e
            }),
            popoutLayerContext: x.O$
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsxs)(m.Kqy, {
              gap: 12,
              children: [(0, a.jsx)(m.Button, {
                variant: "primary",
                size: "sm",
                text: "Renew Subscription",
                onClick: e => K()
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
              className: _.error,
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
              onSelect: e => W({
                premiumStreakStart: e.toISOString()
              })
            }), (0, a.jsx)(b.Z, {})]
          }), (0, a.jsx)(m.Wrb, {
            label: "Metadata Ended At Date",
            value: o()(J),
            onSelect: e => W({
              endedAt: e.toISOString()
            })
          }), (null == w ? true : w.planIdFromItems) === y.Xh.PREMIUM_GROUP_MONTH && (0, a.jsxs)(m.Kqy, {
            gap: 8,
            children: [(0, a.jsx)(m.oil, {
              label: "Subscription Group Member User ID",
              value: G,
              onChange: V
            }), (0, a.jsxs)(m.Kqy, {
              gap: 8,
              direction: "horizontal",
              children: [(0, a.jsx)(m.Button, {
                variant: "primary",
                size: "sm",
                text: "Add",
                onClick: () => q({
                  accepted: true
                }),
                disabled: "" === G
              }), (0, a.jsx)(m.Button, {
                variant: "secondary",
                size: "sm",
                text: "Remove",
                onClick: () => Y(),
                disabled: "" === G
              })]
            })]
          })]
        })]
      })]
    })
  })
}