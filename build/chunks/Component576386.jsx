/** Chunk was on 36288 **/
/** chunk id: 576386, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
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
  Chunk801707 = require("./801707.js");
let v = e => {
    var t;
    let {
      currentUser: n,
      nameplate: a,
      section: c,
      canUsePremiumCollectibles: p,
      isSelected: v,
      onClick: g
    } = e, b = (0, i.useRef)(null), f = (0, s.Z)(b);
    return (0, r.jsxs)(o.P3F, {
      innerRef: b,
      "aria-label": null != (t = a.label) ? t : m.intl.string(m.t.x5CoXV),
      className: h.nameplateItem,
      onClick: g,
      children: [(0, r.jsx)(u.Z, {
        nameplate: a,
        user: n,
        showPlaceholderUser: true,
        isHighlighted: f
      }), (0, r.jsx)("div", {
        className: l()(h.nameplateItemOverlay, {
          [h.selected]: v
        })
      }), (0, r.jsx)(d.Z, {
        isPurchaseSection: c === _.$0.PURCHASE,
        isPremiumSection: c === _.$0.PREMIUM_PURCHASE,
        canUsePremiumCollectibles: p,
        skuId: a.skuId
      })]
    })
  },
  g = e => {
    let {
      currentUser: t,
      selectedNameplate: n,
      guildId: i,
      onSelect: a,
      onOpenShop: s
    } = e, d = p.ZP.canUseCollectibles(t), u = (0, _.ZP)();
    return (0, r.jsx)(o.u2D, {
      className: h.inventory,
      children: u.map(e => (0, r.jsxs)("div", {
        children: [(0, r.jsx)(o.vwX, {
          children: e.header
        }), e.section === _.$0.PURCHASE && (0, r.jsxs)("div", {
          className: h.inventoryControls,
          children: [(0, r.jsxs)(o.P3F, {
            className: l()(h.inventoryControlsButton, {
              [h.selected]: null == n
            }),
            onClick: () => a(null),
            children: [(0, r.jsx)(o.t6m, {
              size: "md",
              color: "currentColor"
            }), (0, r.jsx)(o.Text, {
              variant: "text-xs/normal",
              children: null != i ? m.intl.string(m.t.CHf9iI) : m.intl.string(m.t.PoWNfX)
            })]
          }), (0, r.jsxs)(o.P3F, {
            className: h.inventoryControlsButton,
            onClick: s,
            children: [(0, r.jsx)(o.EOn, {
              size: "md",
              color: "currentColor"
            }), (0, r.jsx)(o.Text, {
              variant: "text-xs/normal",
              children: m.intl.string(m.t.pWG4zc)
            })]
          })]
        }), (0, r.jsx)("div", {
          className: h.list,
          children: e.items.filter(c.k).map(i => (0, r.jsx)(v, {
            currentUser: t,
            nameplate: i,
            section: e.section,
            canUsePremiumCollectibles: d,
            isSelected: (null == n ? true : n.skuId) === i.skuId,
            onClick: () => a(i)
          }, i.skuId))
        })]
      }, e.section))
    })
  }