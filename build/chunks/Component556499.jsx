/** Chunk was on 22477 **/
/** chunk id: 556499, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js"), require("./747238.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk158954 = require("./158954.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk405269 = require("./405269.js"),
  Chunk661191 = require("./661191.js"),
  Chunk666055 = require("./666055.jsx"),
  Chunk776935 = require("./776935.js"),
  Chunk652215 = require("./652215.js"),
  Chunk601107 = require("./601107.js"),
  Chunk788868 = require("./788868.js"),
  Chunk815907 = require("./815907.js"),
  Chunk935391 = require("./935391.js");

function _(e) {
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
let A = {
    [Chunk652215.Dmq.UNPAID]: "Unpaid",
    [Chunk652215.Dmq.ACTIVE]: "Active",
    [Chunk652215.Dmq.PAST_DUE]: "Past Due",
    [Chunk652215.Dmq.CANCELED]: "Canceled",
    [Chunk652215.Dmq.ENDED]: "Ended",
    [Chunk652215.Dmq.ACCOUNT_HOLD]: "Account Hold",
    [Chunk652215.Dmq.BILLING_RETRY]: "Billing Retry",
    [Chunk652215.Dmq.PAUSED]: "Paused",
    [Chunk652215.Dmq.PAUSE_PENDING]: "Pause Pending"
  },
  C = {
    [Chunk601107.qf.UNKNOWN]: "Unknown",
    [Chunk601107.qf.ADMIN]: "Admin",
    [Chunk601107.qf.USER]: "User",
    [Chunk601107.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
    [Chunk601107.qf.DEFERRED_START]: "Deferred Start",
    [Chunk601107.qf.USER_TEMPORARY_BAN]: "User Temp Ban"
  },
  S = [{
    id: "unpaid",
    label: "Unpaid",
    value: Chunk652215.Dmq.UNPAID
  }, {
    id: "active",
    label: "Active",
    value: Chunk652215.Dmq.ACTIVE
  }, {
    id: "pastDue",
    label: "Past Due",
    value: Chunk652215.Dmq.PAST_DUE
  }, {
    id: "canceled",
    label: "Canceled",
    value: Chunk652215.Dmq.CANCELED
  }, {
    id: "ended",
    label: "Ended",
    value: Chunk652215.Dmq.ENDED
  }, {
    id: "accountHold",
    label: "Account Hold",
    value: Chunk652215.Dmq.ACCOUNT_HOLD
  }, {
    id: "billingRetry",
    label: "Billing Retry",
    value: Chunk652215.Dmq.BILLING_RETRY
  }, {
    id: "paused",
    label: "Paused",
    value: Chunk652215.Dmq.PAUSED
  }, {
    id: "pausePending",
    label: "Pause Pending",
    value: Chunk652215.Dmq.PAUSE_PENDING
  }];

function O(e) {
  let {
    subscription: t,
    onClose: n,
    onUpdated: i,
    transitionState: r
  } = e, [s, d] = l.useState(o()()), [m, p] = l.useState(o()().format("HH:mm")), [h, f] = l.useState(false), [b, g] = l.useState(true), v = async () => {
    if (null == s) return void g("Please select a target date");
    let [e, a] = m.split(":").map(Number), l = s.clone().hours(e).minutes(a).seconds(0).milliseconds(0);
    f(true), g(true);
    try {
      await x.tB(t.id, x.H7.TIME_TRAVEL, {
        targetDate: l,
        paymentType: x.J7.DEFAULT,
        sendReminderEmail: false
      }), i(), n()
    } catch (e) {
      var r;
      g((null == (r = e.body) ? true : r.message) || e.message || "Failed to time travel")
    } finally {
      f(false)
    }
  };
  return (0, a.jsx)(c.Modal, {
    transitionState: r,
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
    children: (0, a.jsxs)(u.BJc, {
      gap: 16,
      children: [(0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations."
      }), (0, a.jsx)(u.J3s, {
        label: "Target Date",
        value: s,
        onSelect: d
      }), (0, a.jsx)(u.nVY, {
        label: "Target Time (HH:mm)",
        children: (0, a.jsx)("input", {
          type: "time",
          value: m,
          onChange: e => {
            p(e.target.value)
          },
          className: y.Qn
        })
      }), (0, a.jsxs)(u.BJc, {
        gap: 8,
        children: [(0, a.jsx)(u.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: "Current Period"
        }), (0, a.jsxs)(u.BJc, {
          gap: 4,
          children: [(0, a.jsxs)(u.Text, {
            variant: "text-xs/normal",
            className: y.JX,
            children: ["Start: ", o()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")]
          }), (0, a.jsxs)(u.Text, {
            variant: "text-xs/normal",
            className: y.JX,
            children: ["End: ", o()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")]
          })]
        })]
      }), null != b && (0, a.jsx)(u.wx6, {
        type: "critical",
        children: b
      })]
    })
  })
}

function E(e) {
  var t, n, i, s, c, g, E, N;
  let T, {
      subscription: I,
      onUpdated: w
    } = e,
    [k, P] = l.useState(false),
    [R, D] = l.useState(false),
    [M, L] = l.useState(false),
    [U, B] = l.useState(false),
    [G, F] = l.useState(null),
    [V, H] = l.useState(""),
    W = e => {
      let t = new Date(e);
      return h.default.fromTimestamp(t.getTime())
    },
    K = async e => {
      let {
        status: t = I.status,
        premiumStreakStart: n,
        endedAt: a
      } = e, l = _({
        subscription_status: t
      }, null != n ? {
        premium_streak_started_at: W(n)
      } : null, null != a ? {
        ended_at: W(a)
      } : null);
      await d.Bo.patch({
        url: "/debug/subscriptions/".concat(I.id),
        body: l,
        rejectWithError: false
      }), w()
    }, z = async () => {
      try {
        await x.tB(I.id, x.H7.RENEW, {
          targetDate: o()(new Date),
          paymentType: x.J7.DEFAULT,
          sendReminderEmail: false
        })
      } catch (t) {
        var e;
        F((null == (e = t.body) ? true : e.message) || t.message || "Failed to renew subscription")
      }
      w()
    }, q = async e => {
      let {
        accepted: t
      } = e;
      try {
        await d.Bo.post({
          url: "/debug/subscriptions/".concat(I.id, "/members/").concat(V),
          body: _({}, t ? {
            accepted: true
          } : {}),
          rejectWithError: false
        }), H("")
      } catch (e) {
        var n;
        F((null == (n = e.body) ? true : n.message) || e.message || "Failed to add user to group")
      }
    }, Q = async () => {
      try {
        await d.Bo.del({
          url: "/debug/subscriptions/".concat(I.id, "/members/").concat(V),
          rejectWithError: false
        }), H("")
      } catch (t) {
        var e;
        F((null == (e = t.body) ? true : e.message) || t.message || "Failed to remove user from group")
      }
    }, Y = (null == (t = v.hd[I.planIdFromItems]) ? true : t.premiumType) === v.PremiumTypes.TIER_0, J = null == (n = I.metadata) ? true : n.ended_at, X = null != J ? new Date(J).toISOString().substring(0, 10) : "", Z = [{
      id: "id",
      label: "ID: ".concat(I.id),
      isDisabled: false
    }, {
      id: "status",
      label: "Status: ".concat((null == N && (N = I.status), N in A) ? A[N] : "Unknown status ".concat(N)),
      isDisabled: false
    }], $ = I.hasActiveTrial, ee = (null == (i = I.metadata) ? true : i.active_discount_id) != null;
  return $ && Z.push({
    id: "trial",
    label: "Has Trial",
    isDisabled: false
  }), ee && Z.push({
    id: "active-discount",
    label: "Has Active Discount",
    isDisabled: false
  }), I.status !== b.Dmq.ACTIVE && Z.push({
    id: "dates",
    label: "Dates: ".concat((0, p.i$)(I.createdAt, "LL"), " - ").concat((0, p.i$)(I.currentPeriodEnd, "LL")),
    isDisabled: false
  }), I.status === b.Dmq.PAUSED && Z.push({
    id: "pause-reason",
    label: "Pause Reason: ".concat(I.pauseReason in C ? C[I.pauseReason] : "Unknown pause reason ".concat(I.pauseReason)),
    isDisabled: false
  }), (0, a.jsx)("div", {
    className: r()(j.Nr, Y ? j.Qf : j.C1),
    children: (0, a.jsxs)(u.nVY, {
      label: "Type: ".concat(null == (T = I.planIdFromItems) ? "No plan id" : T in v.hd ? v.hd[T].name : "Unknown plan id ".concat(T)),
      className: y.lI,
      children: [(0, a.jsx)(u.CR_, {
        items: Z,
        label: "Tags",
        selectionMode: "none",
        selectionBehavior: "replace",
        disabledKeys: new Set
      }), $ && (0, a.jsxs)("div", {
        className: y.VK,
        children: [(0, a.jsxs)(u.DUT, {
          onClick: () => {
            L(!M)
          },
          className: y.Eh,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              children: "Trial Info"
            })
          }), (0, a.jsx)(m.A, {
            direction: M ? m.A.Directions.UP : m.A.Directions.DOWN
          })]
        }), M && (0, a.jsxs)("ul", {
          className: y.j3,
          children: [(0, a.jsxs)("li", {
            children: [(0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              children: "trial_id"
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/normal",
              children: I.trialId
            })]
          }), (0, a.jsxs)("li", {
            children: [(0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              children: "trial_ends_at"
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/normal",
              children: null != I.trialEndsAt ? (0, p.i$)(I.trialEndsAt, "LL") : "N/A"
            })]
          })]
        })]
      }), ee && (0, a.jsxs)("div", {
        className: y.VK,
        children: [(0, a.jsxs)(u.DUT, {
          onClick: () => {
            B(!U)
          },
          className: y.Eh,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              children: "Active Discount Info"
            })
          }), (0, a.jsx)(m.A, {
            direction: U ? m.A.Directions.UP : m.A.Directions.DOWN
          })]
        }), U && (0, a.jsxs)("ul", {
          className: y.j3,
          children: [(0, a.jsxs)("li", {
            children: [(0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              children: "active_discount_id"
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/normal",
              children: null == (s = I.metadata) ? true : s.active_discount_id
            })]
          }), (0, a.jsxs)("li", {
            children: [(0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              children: "active_discount_expires_at"
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/normal",
              children: (null == (c = I.metadata) ? true : c.active_discount_expires_at) != null ? (0, p.i$)(new Date(null == (g = I.metadata) ? true : g.active_discount_expires_at), "LL") : "N/A"
            })]
          })]
        })]
      }), null != I.metadata && (0, a.jsxs)("div", {
        className: y.VK,
        children: [(0, a.jsxs)(u.DUT, {
          onClick: () => {
            P(!k)
          },
          className: y.Eh,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              children: "Metadata"
            })
          }), (0, a.jsx)(m.A, {
            direction: k ? m.A.Directions.UP : m.A.Directions.DOWN
          })]
        }), k && (0, a.jsx)("ul", {
          className: y.j3,
          children: Object.entries(I.metadata).map(e => {
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
        className: y.VK,
        children: [(0, a.jsxs)(u.DUT, {
          onClick: () => {
            D(!R)
          },
          className: y.Eh,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(u.Text, {
              variant: "text-md/bold",
              children: "Modifications"
            })
          }), (0, a.jsx)(m.A, {
            direction: R ? m.A.Directions.UP : m.A.Directions.DOWN
          })]
        }), R && (0, a.jsxs)(u.BJc, {
          gap: 24,
          children: [(0, a.jsx)(u.l6P, {
            label: "Status",
            value: I.status,
            options: S,
            onSelectionChange: e => {
              K({
                status: e
              })
            },
            selectionMode: "single",
            fullWidth: true
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsxs)(u.BJc, {
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
                  (0, u.mMO)(() => Promise.resolve(e => (0, a.jsx)(O, _({
                    subscription: I,
                    onUpdated: w
                  }, e))))
                }
              })]
            }), null !== G && (0, a.jsx)("div", {
              className: y.z3,
              children: (0, a.jsx)(u.wx6, {
                type: "critical",
                children: G
              })
            })]
          }), (0, a.jsxs)(u.BJc, {
            gap: 16,
            children: [(0, a.jsx)(u.J3s, {
              label: "Premium Streak Start Date",
              value: o()(null == (E = I.premiumSince) ? true : E.toISOString().substring(0, 10)),
              onSelect: e => K({
                premiumStreakStart: e.toISOString()
              })
            }), (0, a.jsx)(f.A, {})]
          }), (0, a.jsx)(u.J3s, {
            label: "Metadata Ended At Date",
            value: o()(X),
            onSelect: e => K({
              endedAt: e.toISOString()
            })
          }), (null == I ? true : I.planIdFromItems) === v.gD.PREMIUM_GROUP_MONTH && (0, a.jsxs)(u.BJc, {
            gap: 8,
            children: [(0, a.jsx)(u.ksK, {
              label: "Subscription Group Member User ID",
              value: V,
              onChange: H
            }), (0, a.jsxs)(u.BJc, {
              gap: 8,
              direction: "horizontal",
              children: [(0, a.jsx)(u.Button, {
                variant: "primary",
                size: "sm",
                text: "Add",
                onClick: () => q({
                  accepted: true
                }),
                disabled: "" === V
              }), (0, a.jsx)(u.Button, {
                variant: "secondary",
                size: "sm",
                text: "Remove",
                onClick: () => Q(),
                disabled: "" === V
              })]
            })]
          })]
        })]
      })]
    })
  })
}