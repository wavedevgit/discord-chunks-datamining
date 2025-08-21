/** Chunk was on 13387 **/
/** chunk id: 576386, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk22267 = require("./22267.jsx"),
  Chunk377171 = require("./377171.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk24391 = require("./24391.js");
let f = e => {
    var t;
    let {
      nameplate: r,
      isPurchased: a = false,
      isSelected: f = false,
      onClick: b
    } = e, m = (0, o.e7)([d.default], () => d.default.getCurrentUser()), [g, h] = (0, i.useState)(false);
    return null == m ? null : (0, n.jsxs)(s.P3F, {
      "aria-label": null != (t = r.label) ? t : p.intl.string(p.t.x5CoXV),
      className: v.nameplateItem,
      onClick: b,
      onMouseEnter: () => h(true),
      onMouseLeave: () => h(false),
      children: [(0, n.jsx)(c.Z, {
        nameplate: r,
        user: m,
        showPlaceholderUser: true,
        isHighlighted: g
      }), (0, n.jsx)("div", {
        className: l()(v.nameplateItemOverlay, {
          [v.selected]: f
        })
      }), !a && (0, n.jsx)(s.G2e, {
        icon: () => (0, n.jsx)(s.mBM, {
          size: "xxs",
          color: "currentColor"
        }),
        color: u.Z.BACKGROUND_ACCENT,
        className: v.iconBadge
      })]
    })
  },
  b = e => {
    let {
      selected: t,
      onSelect: r,
      onOpenShop: i,
      available: a,
      purchased: c,
      isPerGuild: u
    } = e;
    return null == (0, o.e7)([d.default], () => d.default.getCurrentUser()) ? null : (0, n.jsxs)(s.u2D, {
      className: v.inventory,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)(s.vwX, {
          children: p.intl.string(p.t["WfGV5+"])
        }), (0, n.jsxs)("div", {
          className: v.inventoryControls,
          children: [(0, n.jsxs)(s.P3F, {
            className: l()(v.inventoryControlsButton, {
              [v.selected]: null == t
            }),
            onClick: () => r(null),
            children: [(0, n.jsx)(s.t6m, {
              size: "md",
              color: "currentColor"
            }), (0, n.jsx)(s.Text, {
              variant: "text-xs/normal",
              children: u ? p.intl.string(p.t.CHf9iI) : p.intl.string(p.t.PoWNfX)
            })]
          }), (0, n.jsxs)(s.P3F, {
            className: v.inventoryControlsButton,
            onClick: i,
            children: [(0, n.jsx)(s.EOn, {
              size: "md",
              color: "currentColor"
            }), (0, n.jsx)(s.Text, {
              variant: "text-xs/normal",
              children: p.intl.string(p.t.pWG4zc)
            })]
          })]
        }), 0 !== c.length ? (0, n.jsx)("div", {
          className: v.list,
          children: c.map(e => (0, n.jsx)(f, {
            nameplate: e,
            isPurchased: true,
            isSelected: (null == t ? true : t.id) === e.id,
            onClick: () => r(e, true)
          }, e.id))
        }) : null]
      }), 0 !== a.length ? (0, n.jsxs)("div", {
        children: [(0, n.jsx)(s.vwX, {
          children: p.intl.string(p.t["1vbbeX"])
        }), (0, n.jsx)("div", {
          className: v.list,
          children: a.map(e => (0, n.jsx)(f, {
            nameplate: e,
            isSelected: (null == t ? true : t.id) === e.id,
            onClick: () => r(e, false)
          }, e.id))
        })]
      }) : null]
    })
  }