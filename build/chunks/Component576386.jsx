/** Chunk was on 10352 **/
/** chunk id: 576386, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk135483 = require("./135483.js"),
  Chunk171019 = require("./171019.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk539530 = require("./539530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk24391 = require("./24391.js");
let v = e => {
    var t;
    let {
      currentUser: r,
      nameplate: a,
      section: c,
      canUsePremiumCollectibles: p,
      isSelected: v,
      onClick: f
    } = e, b = (0, i.useRef)(null), g = (0, s.Z)(b);
    return (0, n.jsxs)(o.P3F, {
      innerRef: b,
      "aria-label": null != (t = a.label) ? t : m.intl.string(m.t.x5CoXV),
      className: h.nameplateItem,
      onClick: f,
      children: [(0, n.jsx)(u.Z, {
        nameplate: a,
        user: r,
        showPlaceholderUser: true,
        isHighlighted: g
      }), (0, n.jsx)("div", {
        className: l()(h.nameplateItemOverlay, {
          [h.selected]: v
        })
      }), (0, n.jsx)(d.Z, {
        isPurchaseSection: c === _.$0.PURCHASE,
        isPremiumSection: c === _.$0.PREMIUM_PURCHASE,
        canUsePremiumCollectibles: p,
        skuId: a.skuId
      })]
    })
  },
  f = e => {
    let {
      currentUser: t,
      selectedNameplate: r,
      guildId: i,
      onSelect: a,
      onOpenShop: s
    } = e, d = p.ZP.canUseCollectibles(t), u = (0, _.ZP)();
    return (0, n.jsx)(o.u2D, {
      className: h.inventory,
      children: u.map(e => (0, n.jsxs)("div", {
        children: [(0, n.jsx)(o.vwX, {
          children: e.header
        }), e.section === _.$0.PURCHASE && (0, n.jsxs)("div", {
          className: h.inventoryControls,
          children: [(0, n.jsxs)(o.P3F, {
            className: l()(h.inventoryControlsButton, {
              [h.selected]: null == r
            }),
            onClick: () => a(null),
            children: [(0, n.jsx)(o.t6m, {
              size: "md",
              color: "currentColor"
            }), (0, n.jsx)(o.Text, {
              variant: "text-xs/normal",
              children: null != i ? m.intl.string(m.t.CHf9iI) : m.intl.string(m.t.PoWNfX)
            })]
          }), (0, n.jsxs)(o.P3F, {
            className: h.inventoryControlsButton,
            onClick: s,
            children: [(0, n.jsx)(o.EOn, {
              size: "md",
              color: "currentColor"
            }), (0, n.jsx)(o.Text, {
              variant: "text-xs/normal",
              children: m.intl.string(m.t.pWG4zc)
            })]
          })]
        }), (0, n.jsx)("div", {
          className: h.list,
          children: e.items.filter(c.k).map(i => (0, n.jsx)(v, {
            currentUser: t,
            nameplate: i,
            section: e.section,
            canUsePremiumCollectibles: d,
            isSelected: (null == r ? true : r.skuId) === i.skuId,
            onClick: () => a(i)
          }, i.skuId))
        })]
      }, e.section))
    })
  }