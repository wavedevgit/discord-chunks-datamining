/** Chunk was on 22477 **/
/** chunk id: 2915, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j,
  I: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk334279 = require("./334279.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk405269 = require("./405269.js"),
  Chunk367744 = require("./367744.js"),
  Chunk652215 = require("./652215.js"),
  Chunk753879 = require("./753879.js"),
  Chunk815907 = require("./815907.js"),
  Chunk661251 = require("./661251.js");
let b = {
    [Chunk652215.GD.QUEST_REWARD]: "Quest Reward",
    [Chunk652215.GD.DEVELOPER_GIFT]: "Developer Gift",
    [Chunk652215.GD.INVOICE]: "Invoice",
    [Chunk652215.GD.REVERSE_TRIAL]: "Reverse Trial",
    [Chunk652215.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
    [Chunk652215.GD.SUBSCRIPTION]: "Subscription",
    [Chunk652215.GD.SUBSCRIPTION_MEMBER]: "Subscription Member"
  },
  g = e => {
    var t;
    let n, {
        entitlement: l,
        active: i,
        onDelete: s
      } = e,
      d = e => null != e ? (0, u.i$)(e, "LLL") : "---";
    return (0, a.jsxs)("div", {
      className: r()(h.Nr, i ? f.C1 : ""),
      children: [(0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: ["ID: ", l.id, " "]
      }), !i && (0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: ["SKU: ", null == (t = v.find(e => e.value === l.skuId)) ? true : t.label]
      }), null != l.startsAt && null != l.endsAt && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(c.Text, {
          variant: "text-md/normal",
          children: ["Start: ", d(l.startsAt), " "]
        }), (0, a.jsxs)(c.Text, {
          variant: "text-md/normal",
          children: ["End: ", d(l.endsAt), " "]
        })]
      }), (0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: ["Entitlement source type: ", null != (n = l.sourceType) && n in b ? b[n] : "Unknown source type ".concat(n)]
      }), i && null != s && (0, a.jsx)(o.$n, {
        className: h.RW,
        size: o.$n.Sizes.TINY,
        color: o.$n.Colors.RED,
        look: o.$n.Looks.OUTLINED,
        onClick: s,
        children: "Delete"
      })]
    })
  },
  v = [{
    id: "1h",
    label: "1 hour",
    value: Chunk334279.j.PREMIUM_TIER_2_1_HOUR
  }, {
    id: "1d",
    label: "1 day",
    value: Chunk334279.j.PREMIUM_TIER_2_1_DAY
  }, {
    id: "3d",
    label: "3 days",
    value: Chunk334279.j.PREMIUM_TIER_2_3_DAY
  }];

function j() {
  let [e, t] = l.useState(false), [n, i] = l.useState(s.j.PREMIUM_TIER_2_1_HOUR), [u, b] = l.useState([]), [j, y] = l.useState([]), {
    refreshEntitlementList: _,
    grantFractionalPremium: A,
    deleteFractionalPremium: C,
    triggerNextEntitlementFulfillment: S,
    entitlements: O,
    loading: E
  } = (0, m.o)();
  return l.useEffect(() => {
    _()
  }, [_]), l.useEffect(() => {
    b(O.filter(e => null != e.endsAt && e.endsAt > new Date && e.type === p.zF_.FRACTIONAL_REDEMPTION)), y(O.filter(e => Object.values(s.j).includes(e.skuId) && null == e.startsAt))
  }, [O]), (0, a.jsx)(c.IpV, {
    className: x.nd,
    children: (0, a.jsxs)("div", {
      className: f.l$,
      children: [(0, a.jsxs)("div", {
        className: f.dL,
        children: [(0, a.jsx)(c.Text, {
          style: {
            marginBottom: "8px"
          },
          variant: "text-lg/bold",
          children: "Manage Fractional Nitro"
        }), (0, a.jsxs)(c.DUT, {
          onClick: () => t(!e),
          className: h.As,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(c.Text, {
              variant: "text-md/normal",
              children: "Info"
            })
          }), (0, a.jsx)(d.A, {
            direction: e ? d.A.Directions.UP : d.A.Directions.DOWN
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
        className: r()([h.uW, f.Uo]),
        children: [(0, a.jsx)(c.l6P, {
          label: "Fractional Premium SKU",
          value: n,
          options: v,
          onSelectionChange: i,
          selectionMode: "single",
          fullWidth: true
        }), (0, a.jsx)(c.Button, {
          variant: "primary",
          text: "Grant Fractional Nitro",
          onClick: () => A(n)
        })]
      }), (0, a.jsxs)("section", {
        className: h.uW,
        children: [(0, a.jsxs)("div", {
          style: {
            flexWrap: "wrap"
          },
          className: f.dL,
          children: [(0, a.jsx)(c.Text, {
            style: {
              marginBottom: "8px"
            },
            variant: "text-lg/semibold",
            children: "Entitlements"
          }), (0, a.jsxs)("div", {
            className: h.GC,
            children: [(0, a.jsx)(o.$n, {
              disabled: E,
              size: o.$n.Sizes.TINY,
              color: o.$n.Colors.PRIMARY,
              look: o.$n.Looks.OUTLINED,
              onClick: () => S(),
              children: "Run fulfillment"
            }), (0, a.jsx)(o.$n, {
              disabled: E,
              size: o.$n.Sizes.TINY,
              color: o.$n.Colors.RED,
              look: o.$n.Looks.OUTLINED,
              onClick: () => C(),
              children: "Delete all"
            }), (0, a.jsx)(o.$n, {
              disabled: E,
              look: o.$n.Looks.BLANK,
              size: o.$n.Sizes.ICON,
              onClick: _,
              children: (0, a.jsx)("span", {
                title: "Refresh",
                children: (0, a.jsx)(c.fNY, {
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
              onDelete: () => C(e.id)
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