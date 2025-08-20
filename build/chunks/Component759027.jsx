/** Chunk was on 93886 **/
/** chunk id: 759027, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
let j = {
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
  g = {
    [Chunk362786.Id.UNKNOWN]: "Unknown",
    [Chunk362786.Id.ADMIN]: "Admin",
    [Chunk362786.Id.USER]: "User",
    [Chunk362786.Id.FRACTIONAL_PREMIUM]: "Fractional Premium",
    [Chunk362786.Id.DEFERRED_START]: "Deferred Start"
  },
  _ = [{
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

function y(e) {
  var t, a, l, p, y, C, N;
  let {
    subscription: O,
    onUpdated: T
  } = e, [E, S] = r.useState(false), [P, w] = r.useState(false), [I, R] = r.useState(false), [k, Z] = r.useState(false), [A, D] = r.useState(null), L = e => (null == e && (e = O.status), e in j) ? j[e] : "Unknown status ".concat(e), M = e => {
    let t = new Date(e);
    return u.default.fromTimestamp(t.getTime())
  }, z = async e => {
    let {
      status: t = O.status,
      premiumStreakStart: a,
      endedAt: n
    } = e, r = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
          return Object.getOwnPropertyDescriptor(a, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = a[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({
      subscription_status: t
    }, null != a ? {
      premium_streak_started_at: M(a)
    } : null, null != n ? {
      ended_at: M(n)
    } : null);
    await s.tn.patch({
      url: "/debug/subscriptions/".concat(O.id),
      body: r,
      rejectWithError: false
    }), T()
  }, F = async () => {
    try {
      await s.tn.post({
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
      D(e.body.message)
    }
    T()
  }, B = (null == (t = v.GP[O.planIdFromItems]) ? true : t.premiumType) === v.p9.TIER_0, U = null == (a = O.metadata) ? true : a.ended_at, G = null != U ? new Date(U).toISOString().substring(0, 10) : "", V = O.hasActiveTrial, H = (null == (l = O.metadata) ? true : l.active_discount_id) != null;
  return (0, n.jsxs)("div", {
    className: i()(b.card, B ? b.gradientWrapperTier0 : b.gradientWrapperTier2),
    children: [V && (0, n.jsx)(o.P3F, {
      className: f.badge,
      children: (0, n.jsx)(o.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Has Trial"
      })
    }), H && (0, n.jsx)(o.P3F, {
      className: f.badge,
      children: (0, n.jsx)(o.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Has Active Discount"
      })
    }), (0, n.jsxs)("div", {
      className: f.subscriptionTextContainer,
      children: [(0, n.jsxs)(o.Text, {
        variant: "text-md/normal",
        children: ["Type: ", (() => {
          let e = O.planIdFromItems;
          return null == e ? "No plan id" : e in v.GP ? v.GP[e].name : "Unknown plan id ".concat(e)
        })(), " "]
      }), (0, n.jsxs)(o.Text, {
        variant: "text-md/normal",
        children: ["ID: ", O.id, " "]
      }), O.status !== h.O0b.ACTIVE && (0, n.jsxs)(o.Text, {
        variant: "text-md/normal",
        children: ["Dates: ", (0, d.vc)(O.createdAt, "LL"), " - ", (0, d.vc)(O.currentPeriodEnd, "LL")]
      }), (0, n.jsxs)(o.Text, {
        variant: "text-md/normal",
        children: ["Status: ", L()]
      }), O.status === h.O0b.PAUSED && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)(o.Text, {
          variant: "text-md/normal",
          children: ["Pause Reason: ", O.pauseReason in g ? g[O.pauseReason] : "Unknown pause reason ".concat(O.pauseReason)]
        }), null != O.pauseEndsAt && (0, n.jsxs)(o.Text, {
          variant: "text-md/normal",
          children: ["Pause Ends At: ", (0, d.vc)(O.pauseEndsAt, "LL")]
        })]
      })]
    }), V && (0, n.jsxs)("div", {
      className: f.collapsablePane,
      children: [(0, n.jsxs)(o.P3F, {
        onClick: () => {
          R(!I)
        },
        className: f.collapsablePaneHeader,
        children: [(0, n.jsx)("div", {
          children: (0, n.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "Trial Info"
          })
        }), (0, n.jsx)(c.Z, {
          direction: I ? c.Z.Directions.UP : c.Z.Directions.DOWN
        })]
      }), I && (0, n.jsxs)("ul", {
        className: f.collapsiblePaneList,
        children: [(0, n.jsxs)("li", {
          children: [(0, n.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "trial_id"
          }), (0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: O.trialId
          })]
        }), (0, n.jsxs)("li", {
          children: [(0, n.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "trial_ends_at"
          }), (0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: null != O.trialEndsAt ? (0, d.vc)(O.trialEndsAt, "LL") : "N/A"
          })]
        })]
      })]
    }), H && (0, n.jsxs)("div", {
      className: f.collapsablePane,
      children: [(0, n.jsxs)(o.P3F, {
        onClick: () => {
          Z(!k)
        },
        className: f.collapsablePaneHeader,
        children: [(0, n.jsx)("div", {
          children: (0, n.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "Active Discount Info"
          })
        }), (0, n.jsx)(c.Z, {
          direction: k ? c.Z.Directions.UP : c.Z.Directions.DOWN
        })]
      }), k && (0, n.jsxs)("ul", {
        className: f.collapsiblePaneList,
        children: [(0, n.jsxs)("li", {
          children: [(0, n.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "active_discount_id"
          }), (0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: null == (p = O.metadata) ? true : p.active_discount_id
          })]
        }), (0, n.jsxs)("li", {
          children: [(0, n.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "active_discount_expires_at"
          }), (0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: (null == (y = O.metadata) ? true : y.active_discount_expires_at) != null ? (0, d.vc)(new Date(null == (C = O.metadata) ? true : C.active_discount_expires_at), "LL") : "N/A"
          })]
        })]
      })]
    }), null != O.metadata && (0, n.jsxs)("div", {
      className: f.collapsablePane,
      children: [(0, n.jsxs)(o.P3F, {
        onClick: () => {
          S(!E)
        },
        className: f.collapsablePaneHeader,
        children: [(0, n.jsx)("div", {
          children: (0, n.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "Metadata"
          })
        }), (0, n.jsx)(c.Z, {
          direction: E ? c.Z.Directions.UP : c.Z.Directions.DOWN
        })]
      }), E && (0, n.jsx)("ul", {
        className: f.collapsiblePaneList,
        children: Object.entries(O.metadata).map(e => {
          let [t, a] = e;
          return (0, n.jsxs)("li", {
            children: [(0, n.jsx)(o.Text, {
              variant: "text-md/bold",
              children: t
            }), (0, n.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: a
            })]
          }, t)
        })
      })]
    }), (0, n.jsxs)("div", {
      className: f.collapsablePane,
      children: [(0, n.jsxs)(o.P3F, {
        onClick: () => {
          w(!P)
        },
        className: f.collapsablePaneHeader,
        children: [(0, n.jsx)("div", {
          children: (0, n.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "Modifications"
          })
        }), (0, n.jsx)(c.Z, {
          direction: P ? c.Z.Directions.UP : c.Z.Directions.DOWN
        })]
      }), P && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.hjN, {
          title: "Status",
          tag: o.RB0.H3,
          className: f.formSection,
          children: (0, n.jsx)(o.PhF, {
            serialize: e => L(e),
            isSelected: e => e === O.status,
            options: _,
            select: e => z({
              status: e
            }),
            popoutLayerContext: m.O$
          })
        }), (0, n.jsxs)(o.hjN, {
          title: "Renew",
          tag: o.RB0.H3,
          className: f.formSection,
          children: [(0, n.jsx)(o.zxk, {
            variant: "primary",
            size: "sm",
            text: "Renew Subscription",
            onClick: e => F()
          }), null !== A && (0, n.jsx)(o.kzN, {
            className: f.error,
            onDismiss: () => D(null),
            children: A
          })]
        }), (0, n.jsxs)(o.hjN, {
          title: "Premium Streak Start Date",
          tag: o.RB0.H3,
          className: f.formSection,
          children: [(0, n.jsx)("input", {
            type: "date",
            value: null == (N = O.premiumSince) ? true : N.toISOString().substring(0, 10),
            onChange: e => z({
              premiumStreakStart: e.target.value
            }),
            style: {
              marginBottom: "8px"
            }
          }), (0, n.jsx)(x.Z, {})]
        }), (0, n.jsx)(o.hjN, {
          title: "Metadata Ended At Date",
          tag: o.RB0.H3,
          className: f.formSection,
          children: (0, n.jsx)("input", {
            type: "date",
            value: G,
            onChange: e => z({
              endedAt: e.target.value
            })
          })
        })]
      })]
    })]
  })
}