/** Chunk was on 32945 **/
/** chunk id: 604776, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => v,
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk314794 = require("./314794.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk55935 = require("./55935.js"),
  Chunk246992 = require("./246992.js"),
  Chunk232867 = require("./232867.js"),
  Chunk981631 = require("./981631.js"),
  Chunk696450 = require("./696450.js"),
  Chunk711322 = require("./711322.js"),
  Chunk451429 = require("./451429.js");
let g = {
    [Chunk981631.kNB.QUEST_REWARD]: "Quest Reward",
    [Chunk981631.kNB.DEVELOPER_GIFT]: "Developer Gift",
    [Chunk981631.kNB.INVOICE]: "Invoice",
    [Chunk981631.kNB.REVERSE_TRIAL]: "Reverse Trial",
    [Chunk981631.kNB.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
    [Chunk981631.kNB.SUBSCRIPTION]: "Subscription",
    [Chunk981631.kNB.SUBSCRIPTION_MEMBER]: "Subscription Member"
  },
  v = e => {
    var t;
    let {
      entitlement: n,
      active: r,
      onDelete: l
    } = e, o = e => null != e ? (0, u.vc)(e, "LLL") : "---";
    return (0, a.jsxs)("div", {
      className: i()(x.card, r ? f.gradientWrapperTier2 : ""),
      children: [(0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: ["ID: ", n.id, " "]
      }), !r && (0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: ["SKU: ", null == (t = j.find(e => e.value === n.skuId)) ? true : t.label]
      }), null != n.startsAt && null != n.endsAt && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(c.Text, {
          variant: "text-md/normal",
          children: ["Start: ", o(n.startsAt), " "]
        }), (0, a.jsxs)(c.Text, {
          variant: "text-md/normal",
          children: ["End: ", o(n.endsAt), " "]
        })]
      }), (0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: ["Entitlement source type: ", (() => {
          let e = n.sourceType;
          return null != e && e in g ? g[e] : "Unknown source type ".concat(e)
        })()]
      }), r && null != l && (0, a.jsx)(s.zx, {
        className: x.deleteEntitlementButton,
        size: s.zx.Sizes.TINY,
        color: s.zx.Colors.RED,
        look: s.zx.Looks.OUTLINED,
        onClick: l,
        children: "Delete"
      })]
    })
  },
  j = [{
    label: "1 hour",
    value: Chunk314794.a.PREMIUM_TIER_2_1_HOUR
  }, {
    label: "1 day",
    value: Chunk314794.a.PREMIUM_TIER_2_1_DAY
  }, {
    label: "3 days",
    value: Chunk314794.a.PREMIUM_TIER_2_3_DAY
  }];

function _() {
  let [e, t] = Chunk647438.useState(false), [n, l] = Chunk647438.useState(Chunk314794.a.PREMIUM_TIER_2_1_HOUR), [u, g] = Chunk647438.useState([]), [_, y] = Chunk647438.useState([]), {
    refreshEntitlementList: C,
    grantFractionalPremium: S,
    deleteFractionalPremium: E,
    triggerNextEntitlementFulfillment: T,
    entitlements: O,
    loading: N
  } = (0, Chunk232867.m)();
  return Chunk647438.useEffect(() => {
    C()
  }, [C]), Chunk647438.useEffect(() => {
    g(O.filter(e => null != e.endsAt && e.endsAt > new Date && e.type === h.qc2.FRACTIONAL_REDEMPTION)), y(O.filter(e => Object.values(o.a).includes(e.skuId) && null == e.startsAt))
  }, [O]), (0, Chunk951288.jsx)(Chunk481060.zJl, {
    className: Chunk451429.panel,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk711322.panelInner,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk711322.headerWrapper,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          style: {
            marginBottom: "8px"
          },
          variant: "text-lg/bold",
          children: "Manage Fractional Nitro"
        }), (0, Chunk951288.jsxs)(Chunk481060.P3F, {
          onClick: () => exports(!module),
          className: Chunk696450.clickableGroup,
          children: [(0, Chunk951288.jsx)("div", {
            children: (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-md/normal",
              children: "Info"
            })
          }), (0, Chunk951288.jsx)(Chunk259580.Z, {
            direction: module ? Chunk259580.Z.Directions.UP : Chunk259580.Z.Directions.DOWN
          })]
        })]
      }), module && (0, Chunk951288.jsxs)("div", {
        style: {
          margin: "8px 0"
        },
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          style: {
            fontStyle: "italic"
          },
          color: "text-muted",
          children: "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin."
        }), (0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          style: {
            fontStyle: "italic"
          },
          color: "text-muted",
          children: "Entitlement fulfillment tasks do not run automatically in local environments. This task is required to handle the scheduled unfulfillment of Fractional Nitro after it's time has elapsed."
        })]
      }), (0, Chunk951288.jsxs)("section", {
        style: {
          marginBottom: "8px"
        },
        className: i()([Chunk696450.section, Chunk711322.buttons]),
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: " Fractional Premium SKU "
        }), (0, Chunk951288.jsx)(Chunk481060.PhF, {
          serialize: e => e,
          isSelected: e => e === n,
          options: j,
          select: Chunk120356,
          popoutLayerContext: Chunk246992.O$
        }), (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: "Grant Fractional Nitro",
          onClick: () => S(require)
        })]
      }), (0, Chunk951288.jsxs)("section", {
        className: Chunk696450.section,
        children: [(0, Chunk951288.jsxs)("div", {
          style: {
            flexWrap: "wrap"
          },
          className: Chunk711322.headerWrapper,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            style: {
              marginBottom: "8px"
            },
            variant: "text-lg/semibold",
            children: "Entitlements"
          }), (0, Chunk951288.jsxs)("div", {
            className: Chunk696450.buttonGroup,
            children: [(0, Chunk951288.jsx)(Chunk755721.zx, {
              disabled: N,
              size: Chunk755721.zx.Sizes.TINY,
              color: Chunk755721.zx.Colors.PRIMARY,
              look: Chunk755721.zx.Looks.OUTLINED,
              onClick: () => T(),
              children: "Run fulfillment"
            }), (0, Chunk951288.jsx)(Chunk755721.zx, {
              disabled: N,
              size: Chunk755721.zx.Sizes.TINY,
              color: Chunk755721.zx.Colors.RED,
              look: Chunk755721.zx.Looks.OUTLINED,
              onClick: () => E(),
              children: "Delete all"
            }), (0, Chunk951288.jsx)(Chunk755721.zx, {
              disabled: N,
              look: Chunk755721.zx.Looks.BLANK,
              size: Chunk755721.zx.Sizes.ICON,
              onClick: C,
              children: (0, Chunk951288.jsx)("span", {
                title: "Refresh",
                children: (0, Chunk951288.jsx)(Chunk481060.DuK, {
                  size: "xs",
                  color: "currentColor"
                })
              })
            })]
          })]
        }), Chunk55935.length > 0 && (0, Chunk951288.jsxs)("div", {
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            style: {
              marginTop: "15px"
            },
            variant: "text-md/bold",
            children: "Active premium"
          }), (0, Chunk951288.jsx)("div", {
            children: Chunk55935.map(e => (0, a.jsx)(v, {
              entitlement: e,
              active: true,
              onDelete: () => E(e.id)
            }, e.id))
          })]
        }), _.length > 0 && (0, Chunk951288.jsxs)("div", {
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            style: {
              marginTop: "15px"
            },
            variant: "text-md/bold",
            children: "Unconsumed Fractional Premium"
          }), (0, Chunk951288.jsx)("div", {
            children: _.map(e => (0, a.jsx)(v, {
              entitlement: e
            }, e.id))
          })]
        })]
      })]
    })
  })
}