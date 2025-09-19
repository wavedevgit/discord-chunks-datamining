/** Chunk was on 85991 **/
/** chunk id: 759027, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
let v = {
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
  j = {
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
  var t, n, i, x, y, C, N;
  let {
    subscription: E,
    onUpdated: S
  } = e, [O, T] = r.useState(false), [k, P] = r.useState(false), [R, w] = r.useState(false), [I, Z] = r.useState(false), [A, D] = r.useState(null), L = e => (null == e && (e = E.status), e in v) ? v[e] : "Unknown status ".concat(e), M = e => {
    let t = new Date(e);
    return u.default.fromTimestamp(t.getTime())
  }, U = async e => {
    let {
      status: t = E.status,
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
      premium_streak_started_at: M(n)
    } : null, null != a ? {
      ended_at: M(a)
    } : null);
    await s.tn.patch({
      url: "/debug/subscriptions/".concat(E.id),
      body: r,
      rejectWithError: false
    }), S()
  }, F = async () => {
    try {
      await s.tn.post({
        url: "/debug/subscriptions/".concat(E.id, "/transition"),
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
    S()
  }, G = (null == (t = f.GP[E.planIdFromItems]) ? true : t.premiumType) === f.p9.TIER_0, z = null == (n = E.metadata) ? true : n.ended_at, B = null != z ? new Date(z).toISOString().substring(0, 10) : "", V = E.hasActiveTrial, H = (null == (i = E.metadata) ? true : i.active_discount_id) != null;
  return (0, a.jsxs)("div", {
    className: l()(b.card, G ? b.gradientWrapperTier0 : b.gradientWrapperTier2),
    children: [V && (0, a.jsx)(o.P3F, {
      className: g.badge,
      children: (0, a.jsx)(o.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Has Trial"
      })
    }), H && (0, a.jsx)(o.P3F, {
      className: g.badge,
      children: (0, a.jsx)(o.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Has Active Discount"
      })
    }), (0, a.jsxs)("div", {
      className: g.subscriptionTextContainer,
      children: [(0, a.jsxs)(o.Text, {
        variant: "text-md/normal",
        children: ["Type: ", (() => {
          let e = E.planIdFromItems;
          return null == e ? "No plan id" : e in f.GP ? f.GP[e].name : "Unknown plan id ".concat(e)
        })(), " "]
      }), (0, a.jsxs)(o.Text, {
        variant: "text-md/normal",
        children: ["ID: ", E.id, " "]
      }), E.status !== p.O0b.ACTIVE && (0, a.jsxs)(o.Text, {
        variant: "text-md/normal",
        children: ["Dates: ", (0, d.vc)(E.createdAt, "LL"), " - ", (0, d.vc)(E.currentPeriodEnd, "LL")]
      }), (0, a.jsxs)(o.Text, {
        variant: "text-md/normal",
        children: ["Status: ", L()]
      }), E.status === p.O0b.PAUSED && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(o.Text, {
          variant: "text-md/normal",
          children: ["Pause Reason: ", E.pauseReason in j ? j[E.pauseReason] : "Unknown pause reason ".concat(E.pauseReason)]
        }), null != E.pauseEndsAt && (0, a.jsxs)(o.Text, {
          variant: "text-md/normal",
          children: ["Pause Ends At: ", (0, d.vc)(E.pauseEndsAt, "LL")]
        })]
      })]
    }), V && (0, a.jsxs)("div", {
      className: g.collapsablePane,
      children: [(0, a.jsxs)(o.P3F, {
        onClick: () => {
          w(!R)
        },
        className: g.collapsablePaneHeader,
        children: [(0, a.jsx)("div", {
          children: (0, a.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "Trial Info"
          })
        }), (0, a.jsx)(c.Z, {
          direction: R ? c.Z.Directions.UP : c.Z.Directions.DOWN
        })]
      }), R && (0, a.jsxs)("ul", {
        className: g.collapsiblePaneList,
        children: [(0, a.jsxs)("li", {
          children: [(0, a.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "trial_id"
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: E.trialId
          })]
        }), (0, a.jsxs)("li", {
          children: [(0, a.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "trial_ends_at"
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: null != E.trialEndsAt ? (0, d.vc)(E.trialEndsAt, "LL") : "N/A"
          })]
        })]
      })]
    }), H && (0, a.jsxs)("div", {
      className: g.collapsablePane,
      children: [(0, a.jsxs)(o.P3F, {
        onClick: () => {
          Z(!I)
        },
        className: g.collapsablePaneHeader,
        children: [(0, a.jsx)("div", {
          children: (0, a.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "Active Discount Info"
          })
        }), (0, a.jsx)(c.Z, {
          direction: I ? c.Z.Directions.UP : c.Z.Directions.DOWN
        })]
      }), I && (0, a.jsxs)("ul", {
        className: g.collapsiblePaneList,
        children: [(0, a.jsxs)("li", {
          children: [(0, a.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "active_discount_id"
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: null == (x = E.metadata) ? true : x.active_discount_id
          })]
        }), (0, a.jsxs)("li", {
          children: [(0, a.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "active_discount_expires_at"
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: (null == (y = E.metadata) ? true : y.active_discount_expires_at) != null ? (0, d.vc)(new Date(null == (C = E.metadata) ? true : C.active_discount_expires_at), "LL") : "N/A"
          })]
        })]
      })]
    }), null != E.metadata && (0, a.jsxs)("div", {
      className: g.collapsablePane,
      children: [(0, a.jsxs)(o.P3F, {
        onClick: () => {
          T(!O)
        },
        className: g.collapsablePaneHeader,
        children: [(0, a.jsx)("div", {
          children: (0, a.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "Metadata"
          })
        }), (0, a.jsx)(c.Z, {
          direction: O ? c.Z.Directions.UP : c.Z.Directions.DOWN
        })]
      }), O && (0, a.jsx)("ul", {
        className: g.collapsiblePaneList,
        children: Object.entries(E.metadata).map(e => {
          let [t, n] = e;
          return (0, a.jsxs)("li", {
            children: [(0, a.jsx)(o.Text, {
              variant: "text-md/bold",
              children: t
            }), (0, a.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: n
            })]
          }, t)
        })
      })]
    }), (0, a.jsxs)("div", {
      className: g.collapsablePane,
      children: [(0, a.jsxs)(o.P3F, {
        onClick: () => {
          P(!k)
        },
        className: g.collapsablePaneHeader,
        children: [(0, a.jsx)("div", {
          children: (0, a.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "Modifications"
          })
        }), (0, a.jsx)(c.Z, {
          direction: k ? c.Z.Directions.UP : c.Z.Directions.DOWN
        })]
      }), k && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.hjN, {
          title: "Status",
          tag: o.RB0.H3,
          className: g.formSection,
          children: (0, a.jsx)(o.PhF, {
            serialize: e => L(e),
            isSelected: e => e === E.status,
            options: _,
            select: e => U({
              status: e
            }),
            popoutLayerContext: m.O$
          })
        }), (0, a.jsxs)(o.hjN, {
          title: "Renew",
          tag: o.RB0.H3,
          className: g.formSection,
          children: [(0, a.jsx)(o.zxk, {
            variant: "primary",
            size: "sm",
            text: "Renew Subscription",
            onClick: e => F()
          }), null !== A && (0, a.jsx)(o.kzN, {
            className: g.error,
            onDismiss: () => D(null),
            children: A
          })]
        }), (0, a.jsxs)(o.hjN, {
          title: "Premium Streak Start Date",
          tag: o.RB0.H3,
          className: g.formSection,
          children: [(0, a.jsx)("input", {
            type: "date",
            value: null == (N = E.premiumSince) ? true : N.toISOString().substring(0, 10),
            onChange: e => U({
              premiumStreakStart: e.target.value
            }),
            style: {
              marginBottom: "8px"
            }
          }), (0, a.jsx)(h.Z, {})]
        }), (0, a.jsx)(o.hjN, {
          title: "Metadata Ended At Date",
          tag: o.RB0.H3,
          className: g.formSection,
          children: (0, a.jsx)("input", {
            type: "date",
            value: B,
            onChange: e => U({
              endedAt: e.target.value
            })
          })
        })]
      })]
    })]
  })
}