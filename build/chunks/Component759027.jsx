/** Chunk was on 43374 **/
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
  var t, n, i, x, y, C, E;
  let {
    subscription: N,
    onUpdated: S
  } = e, [T, O] = r.useState(false), [P, I] = r.useState(false), [k, w] = r.useState(false), [R, A] = r.useState(false), [Z, D] = r.useState(null), L = e => (null == e && (e = N.status), e in v) ? v[e] : "Unknown status ".concat(e), M = e => {
    let t = new Date(e);
    return u.default.fromTimestamp(t.getTime())
  }, U = async e => {
    let {
      status: t = N.status,
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
      url: "/debug/subscriptions/".concat(N.id),
      body: r,
      rejectWithError: false
    }), S()
  }, F = async () => {
    try {
      await s.tn.post({
        url: "/debug/subscriptions/".concat(N.id, "/transition"),
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
  }, B = (null == (t = f.GP[N.planIdFromItems]) ? true : t.premiumType) === f.p9.TIER_0, G = null == (n = N.metadata) ? true : n.ended_at, z = null != G ? new Date(G).toISOString().substring(0, 10) : "", V = N.hasActiveTrial, H = (null == (i = N.metadata) ? true : i.active_discount_id) != null;
  return (0, a.jsxs)("div", {
    className: l()(b.card, B ? b.gradientWrapperTier0 : b.gradientWrapperTier2),
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
          let e = N.planIdFromItems;
          return null == e ? "No plan id" : e in f.GP ? f.GP[e].name : "Unknown plan id ".concat(e)
        })(), " "]
      }), (0, a.jsxs)(o.Text, {
        variant: "text-md/normal",
        children: ["ID: ", N.id, " "]
      }), N.status !== h.O0b.ACTIVE && (0, a.jsxs)(o.Text, {
        variant: "text-md/normal",
        children: ["Dates: ", (0, d.vc)(N.createdAt, "LL"), " - ", (0, d.vc)(N.currentPeriodEnd, "LL")]
      }), (0, a.jsxs)(o.Text, {
        variant: "text-md/normal",
        children: ["Status: ", L()]
      }), N.status === h.O0b.PAUSED && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(o.Text, {
          variant: "text-md/normal",
          children: ["Pause Reason: ", N.pauseReason in j ? j[N.pauseReason] : "Unknown pause reason ".concat(N.pauseReason)]
        }), null != N.pauseEndsAt && (0, a.jsxs)(o.Text, {
          variant: "text-md/normal",
          children: ["Pause Ends At: ", (0, d.vc)(N.pauseEndsAt, "LL")]
        })]
      })]
    }), V && (0, a.jsxs)("div", {
      className: g.collapsablePane,
      children: [(0, a.jsxs)(o.P3F, {
        onClick: () => {
          w(!k)
        },
        className: g.collapsablePaneHeader,
        children: [(0, a.jsx)("div", {
          children: (0, a.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "Trial Info"
          })
        }), (0, a.jsx)(c.Z, {
          direction: k ? c.Z.Directions.UP : c.Z.Directions.DOWN
        })]
      }), k && (0, a.jsxs)("ul", {
        className: g.collapsiblePaneList,
        children: [(0, a.jsxs)("li", {
          children: [(0, a.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "trial_id"
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: N.trialId
          })]
        }), (0, a.jsxs)("li", {
          children: [(0, a.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "trial_ends_at"
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: null != N.trialEndsAt ? (0, d.vc)(N.trialEndsAt, "LL") : "N/A"
          })]
        })]
      })]
    }), H && (0, a.jsxs)("div", {
      className: g.collapsablePane,
      children: [(0, a.jsxs)(o.P3F, {
        onClick: () => {
          A(!R)
        },
        className: g.collapsablePaneHeader,
        children: [(0, a.jsx)("div", {
          children: (0, a.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "Active Discount Info"
          })
        }), (0, a.jsx)(c.Z, {
          direction: R ? c.Z.Directions.UP : c.Z.Directions.DOWN
        })]
      }), R && (0, a.jsxs)("ul", {
        className: g.collapsiblePaneList,
        children: [(0, a.jsxs)("li", {
          children: [(0, a.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "active_discount_id"
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: null == (x = N.metadata) ? true : x.active_discount_id
          })]
        }), (0, a.jsxs)("li", {
          children: [(0, a.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "active_discount_expires_at"
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: (null == (y = N.metadata) ? true : y.active_discount_expires_at) != null ? (0, d.vc)(new Date(null == (C = N.metadata) ? true : C.active_discount_expires_at), "LL") : "N/A"
          })]
        })]
      })]
    }), null != N.metadata && (0, a.jsxs)("div", {
      className: g.collapsablePane,
      children: [(0, a.jsxs)(o.P3F, {
        onClick: () => {
          O(!T)
        },
        className: g.collapsablePaneHeader,
        children: [(0, a.jsx)("div", {
          children: (0, a.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "Metadata"
          })
        }), (0, a.jsx)(c.Z, {
          direction: T ? c.Z.Directions.UP : c.Z.Directions.DOWN
        })]
      }), T && (0, a.jsx)("ul", {
        className: g.collapsiblePaneList,
        children: Object.entries(N.metadata).map(e => {
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
          I(!P)
        },
        className: g.collapsablePaneHeader,
        children: [(0, a.jsx)("div", {
          children: (0, a.jsx)(o.Text, {
            variant: "text-md/bold",
            children: "Modifications"
          })
        }), (0, a.jsx)(c.Z, {
          direction: P ? c.Z.Directions.UP : c.Z.Directions.DOWN
        })]
      }), P && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.hjN, {
          title: "Status",
          tag: o.RB0.H3,
          className: g.formSection,
          children: (0, a.jsx)(o.PhF, {
            serialize: e => L(e),
            isSelected: e => e === N.status,
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
          }), null !== Z && (0, a.jsx)(o.kzN, {
            className: g.error,
            onDismiss: () => D(null),
            children: Z
          })]
        }), (0, a.jsxs)(o.hjN, {
          title: "Premium Streak Start Date",
          tag: o.RB0.H3,
          className: g.formSection,
          children: [(0, a.jsx)("input", {
            type: "date",
            value: null == (E = N.premiumSince) ? true : E.toISOString().substring(0, 10),
            onChange: e => U({
              premiumStreakStart: e.target.value
            }),
            style: {
              marginBottom: "8px"
            }
          }), (0, a.jsx)(p.Z, {})]
        }), (0, a.jsx)(o.hjN, {
          title: "Metadata Ended At Date",
          tag: o.RB0.H3,
          className: g.formSection,
          children: (0, a.jsx)("input", {
            type: "date",
            value: z,
            onChange: e => U({
              endedAt: e.target.value
            })
          })
        })]
      })]
    })]
  })
}