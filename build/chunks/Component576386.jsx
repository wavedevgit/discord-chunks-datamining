/** Chunk was on 86031 **/
/** chunk id: 576386, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
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
let h = e => {
    var t;
    let {
      nameplate: r,
      isPurchased: i = false,
      isSelected: h = false,
      onClick: f
    } = e, v = (0, o.e7)([d.default], () => d.default.getCurrentUser()), [m, _] = (0, a.useState)(false);
    return null == v ? null : (0, n.jsxs)(s.P3F, {
      "aria-label": null != (t = r.label) ? t : p.intl.string(p.t.x5CoXV),
      className: b.nameplateItem,
      onClick: f,
      onMouseEnter: () => _(true),
      onMouseLeave: () => _(false),
      children: [(0, n.jsx)(c.Z, {
        nameplate: r,
        user: v,
        showPlaceholderUser: true,
        isHighlighted: m
      }), (0, n.jsx)("div", {
        className: l()(b.nameplateItemOverlay, {
          [b.selected]: h
        })
      }), !i && (0, n.jsx)(s.G2e, {
        icon: () => (0, n.jsx)(s.mBM, {
          size: "xxs",
          color: "currentColor"
        }),
        color: u.Z.BACKGROUND_ACCENT,
        className: b.iconBadge
      })]
    })
  },
  f = e => {
    let {
      selected: t,
      onSelect: r,
      onOpenShop: a,
      available: i,
      purchased: c
    } = e;
    return null == (0, o.e7)([d.default], () => d.default.getCurrentUser()) ? null : (0, n.jsxs)(s.u2D, {
      className: b.inventory,
      children: [(0, n.jsxs)("div", {
        children: [(0, n.jsx)(s.vwX, {
          children: p.intl.string(p.t["WfGV5+"])
        }), (0, n.jsxs)("div", {
          className: b.inventoryControls,
          children: [(0, n.jsxs)(s.P3F, {
            className: l()(b.inventoryControlsButton, {
              [b.selected]: null == t
            }),
            onClick: () => r(null),
            children: [(0, n.jsx)(s.t6m, {
              size: "md",
              color: "currentColor"
            }), (0, n.jsx)(s.Text, {
              variant: "text-xs/normal",
              children: p.intl.string(p.t.PoWNfX)
            })]
          }), (0, n.jsxs)(s.P3F, {
            className: b.inventoryControlsButton,
            onClick: a,
            children: [(0, n.jsx)(s.EOn, {
              size: "md",
              color: "currentColor"
            }), (0, n.jsx)(s.Text, {
              variant: "text-xs/normal",
              children: p.intl.string(p.t.pWG4zc)
            })]
          })]
        }), 0 !== c.length ? (0, n.jsx)("div", {
          className: b.list,
          children: c.map(e => (0, n.jsx)(h, {
            nameplate: e,
            isPurchased: true,
            isSelected: (null == t ? true : t.id) === e.id,
            onClick: () => r(e, true)
          }, e.id))
        }) : null]
      }), 0 !== i.length ? (0, n.jsxs)("div", {
        children: [(0, n.jsx)(s.vwX, {
          children: p.intl.string(p.t["1vbbeX"])
        }), (0, n.jsx)("div", {
          className: b.list,
          children: i.map(e => (0, n.jsx)(h, {
            nameplate: e,
            isSelected: (null == t ? true : t.id) === e.id,
            onClick: () => r(e, false)
          }, e.id))
        })]
      }) : null]
    })
  }