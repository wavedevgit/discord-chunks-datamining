/** Chunk was on 8895 **/
/** chunk id: 576386, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk22267 = require("./22267.jsx"),
  Chunk377171 = require("./377171.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk801707 = require("./801707.js");
let m = e => {
    var l;
    let {
      nameplate: n,
      isPurchased: s = false,
      isSelected: m = false,
      onClick: v
    } = e, h = (0, r.e7)([u.default], () => u.default.getCurrentUser()), [j, g] = (0, i.useState)(false);
    return null == h ? null : (0, t.jsxs)(o.P3F, {
      "aria-label": null != (l = n.label) ? l : x.intl.string(x.t.x5CoXV),
      className: p.nameplateItem,
      onClick: v,
      onMouseEnter: () => g(true),
      onMouseLeave: () => g(false),
      children: [(0, t.jsx)(d.Z, {
        nameplate: n,
        user: h,
        showPlaceholderUser: true,
        isHighlighted: j
      }), (0, t.jsx)("div", {
        className: a()(p.nameplateItemOverlay, {
          [p.selected]: m
        })
      }), !s && (0, t.jsx)(o.G2e, {
        icon: () => (0, t.jsx)(o.mBM, {
          size: "xxs",
          color: "currentColor"
        }),
        color: c.Z.BACKGROUND_ACCENT,
        className: p.iconBadge
      })]
    })
  },
  v = e => {
    let {
      selected: l,
      onSelect: n,
      onOpenShop: i,
      available: s,
      purchased: d,
      isPerGuild: c
    } = e;
    return null == (0, r.e7)([u.default], () => u.default.getCurrentUser()) ? null : (0, t.jsxs)(o.u2D, {
      className: p.inventory,
      children: [(0, t.jsxs)("div", {
        children: [(0, t.jsx)(o.vwX, {
          children: x.intl.string(x.t["WfGV5+"])
        }), (0, t.jsxs)("div", {
          className: p.inventoryControls,
          children: [(0, t.jsxs)(o.P3F, {
            className: a()(p.inventoryControlsButton, {
              [p.selected]: null == l
            }),
            onClick: () => n(null),
            children: [(0, t.jsx)(o.t6m, {
              size: "md",
              color: "currentColor"
            }), (0, t.jsx)(o.Text, {
              variant: "text-xs/normal",
              children: c ? x.intl.string(x.t.CHf9iI) : x.intl.string(x.t.PoWNfX)
            })]
          }), (0, t.jsxs)(o.P3F, {
            className: p.inventoryControlsButton,
            onClick: i,
            children: [(0, t.jsx)(o.EOn, {
              size: "md",
              color: "currentColor"
            }), (0, t.jsx)(o.Text, {
              variant: "text-xs/normal",
              children: x.intl.string(x.t.pWG4zc)
            })]
          })]
        }), 0 !== d.length ? (0, t.jsx)("div", {
          className: p.list,
          children: d.map(e => (0, t.jsx)(m, {
            nameplate: e,
            isPurchased: true,
            isSelected: (null == l ? true : l.id) === e.id,
            onClick: () => n(e, true)
          }, e.id))
        }) : null]
      }), 0 !== s.length ? (0, t.jsxs)("div", {
        children: [(0, t.jsx)(o.vwX, {
          children: x.intl.string(x.t["1vbbeX"])
        }), (0, t.jsx)("div", {
          className: p.list,
          children: s.map(e => (0, t.jsx)(m, {
            nameplate: e,
            isSelected: (null == l ? true : l.id) === e.id,
            onClick: () => n(e, false)
          }, e.id))
        })]
      }) : null]
    })
  }