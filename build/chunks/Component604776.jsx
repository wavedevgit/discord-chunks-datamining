/** Chunk was on 22979 **/
/** chunk id: 604776, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => g,
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk314794 = require("./314794.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk55935 = require("./55935.js"),
  Chunk232867 = require("./232867.js"),
  Chunk981631 = require("./981631.js"),
  Chunk557919 = require("./557919.js"),
  Chunk68428 = require("./68428.js"),
  Chunk663618 = require("./663618.js");
let x = {
    [Chunk981631.kNB.QUEST_REWARD]: "Quest Reward",
    [Chunk981631.kNB.DEVELOPER_GIFT]: "Developer Gift",
    [Chunk981631.kNB.INVOICE]: "Invoice",
    [Chunk981631.kNB.REVERSE_TRIAL]: "Reverse Trial",
    [Chunk981631.kNB.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
    [Chunk981631.kNB.SUBSCRIPTION]: "Subscription",
    [Chunk981631.kNB.SUBSCRIPTION_MEMBER]: "Subscription Member"
  },
  g = e => {
    var t;
    let {
      entitlement: n,
      active: r,
      onDelete: i
    } = e, s = e => null != e ? (0, u.vc)(e, "LLL") : "---";
    return (0, a.jsxs)("div", {
      className: l()(h.card, r ? f.gradientWrapperTier2 : ""),
      children: [(0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: ["ID: ", n.id, " "]
      }), !r && (0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: ["SKU: ", null == (t = v.find(e => e.value === n.skuId)) ? true : t.label]
      }), null != n.startsAt && null != n.endsAt && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(c.Text, {
          variant: "text-md/normal",
          children: ["Start: ", s(n.startsAt), " "]
        }), (0, a.jsxs)(c.Text, {
          variant: "text-md/normal",
          children: ["End: ", s(n.endsAt), " "]
        })]
      }), (0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: ["Entitlement source type: ", (() => {
          let e = n.sourceType;
          return null != e && e in x ? x[e] : "Unknown source type ".concat(e)
        })()]
      }), r && null != i && (0, a.jsx)(o.zx, {
        className: h.deleteEntitlementButton,
        size: o.zx.Sizes.TINY,
        color: o.zx.Colors.RED,
        look: o.zx.Looks.OUTLINED,
        onClick: i,
        children: "Delete"
      })]
    })
  },
  v = [{
    id: "1h",
    label: "1 hour",
    value: Chunk314794.a.PREMIUM_TIER_2_1_HOUR
  }, {
    id: "1d",
    label: "1 day",
    value: Chunk314794.a.PREMIUM_TIER_2_1_DAY
  }, {
    id: "3d",
    label: "3 days",
    value: Chunk314794.a.PREMIUM_TIER_2_3_DAY
  }];

function j() {
  let [e, t] = r.useState(false), [n, i] = r.useState(s.a.PREMIUM_TIER_2_1_HOUR), [u, x] = r.useState([]), [j, y] = r.useState([]), {
    refreshEntitlementList: C,
    grantFractionalPremium: _,
    deleteFractionalPremium: S,
    triggerNextEntitlementFulfillment: E,
    entitlements: T,
    loading: O
  } = (0, m.m)();
  return r.useEffect(() => {
    C()
  }, [C]), r.useEffect(() => {
    x(T.filter(e => null != e.endsAt && e.endsAt > new Date && e.type === p.qc2.FRACTIONAL_REDEMPTION)), y(T.filter(e => Object.values(s.a).includes(e.skuId) && null == e.startsAt))
  }, [T]), (0, a.jsx)(c.zJl, {
    className: b.panel,
    children: (0, a.jsxs)("div", {
      className: f.panelInner,
      children: [(0, a.jsxs)("div", {
        className: f.headerWrapper,
        children: [(0, a.jsx)(c.Text, {
          style: {
            marginBottom: "8px"
          },
          variant: "text-lg/bold",
          children: "Manage Fractional Nitro"
        }), (0, a.jsxs)(c.P3F, {
          onClick: () => t(!e),
          className: h.clickableGroup,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(c.Text, {
              variant: "text-md/normal",
              children: "Info"
            })
          }), (0, a.jsx)(d.Z, {
            direction: e ? d.Z.Directions.UP : d.Z.Directions.DOWN
          })]
        })]
      }), e && (0, a.jsxs)("div", {
        style: {
          margin: "8px 0"
        },
        children: [(0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          style: {
            fontStyle: "italic"
          },
          color: "text-muted",
          children: "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin."
        }), (0, a.jsx)("br", {}), (0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          style: {
            fontStyle: "italic"
          },
          color: "text-muted",
          children: "Entitlement fulfillment tasks do not run automatically in local environments. This task is required to handle the scheduled unfulfillment of Fractional Nitro after it's time has elapsed."
        })]
      }), (0, a.jsxs)("section", {
        style: {
          marginBottom: "8px"
        },
        className: l()([h.section, f.buttons]),
        children: [(0, a.jsx)(c.PhF, {
          label: "Fractional Premium SKU",
          value: n,
          options: v,
          onSelectionChange: i,
          selectionMode: "single",
          fullWidth: true
        }), (0, a.jsx)(c.Button, {
          variant: "primary",
          text: "Grant Fractional Nitro",
          onClick: () => _(n)
        })]
      }), (0, a.jsxs)("section", {
        className: h.section,
        children: [(0, a.jsxs)("div", {
          style: {
            flexWrap: "wrap"
          },
          className: f.headerWrapper,
          children: [(0, a.jsx)(c.Text, {
            style: {
              marginBottom: "8px"
            },
            variant: "text-lg/semibold",
            children: "Entitlements"
          }), (0, a.jsxs)("div", {
            className: h.buttonGroup,
            children: [(0, a.jsx)(o.zx, {
              disabled: O,
              size: o.zx.Sizes.TINY,
              color: o.zx.Colors.PRIMARY,
              look: o.zx.Looks.OUTLINED,
              onClick: () => E(),
              children: "Run fulfillment"
            }), (0, a.jsx)(o.zx, {
              disabled: O,
              size: o.zx.Sizes.TINY,
              color: o.zx.Colors.RED,
              look: o.zx.Looks.OUTLINED,
              onClick: () => S(),
              children: "Delete all"
            }), (0, a.jsx)(o.zx, {
              disabled: O,
              look: o.zx.Looks.BLANK,
              size: o.zx.Sizes.ICON,
              onClick: C,
              children: (0, a.jsx)("span", {
                title: "Refresh",
                children: (0, a.jsx)(c.DuK, {
                  size: "xs",
                  color: "currentColor"
                })
              })
            })]
          })]
        }), u.length > 0 && (0, a.jsxs)("div", {
          children: [(0, a.jsx)(c.Text, {
            style: {
              marginTop: "15px"
            },
            variant: "text-md/bold",
            children: "Active premium"
          }), (0, a.jsx)("div", {
            children: u.map(e => (0, a.jsx)(g, {
              entitlement: e,
              active: true,
              onDelete: () => S(e.id)
            }, e.id))
          })]
        }), j.length > 0 && (0, a.jsxs)("div", {
          children: [(0, a.jsx)(c.Text, {
            style: {
              marginTop: "15px"
            },
            variant: "text-md/bold",
            children: "Unconsumed Fractional Premium"
          }), (0, a.jsx)("div", {
            children: j.map(e => (0, a.jsx)(g, {
              entitlement: e
            }, e.id))
          })]
        })]
      })]
    })
  })
}