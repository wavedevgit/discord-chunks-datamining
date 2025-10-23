/** Chunk was on 5873 **/
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
  Chunk135483 = require("./135483.js"),
  Chunk171019 = require("./171019.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk104505 = require("./104505.js"),
  Chunk74538 = require("./74538.js"),
  Chunk539530 = require("./539530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk24391 = require("./24391.js");
let b = e => {
    var t;
    let {
      currentUser: n,
      nameplate: a,
      section: o,
      canUsePremiumCollectibles: p,
      isSelected: b,
      onClick: g
    } = e, v = (0, i.useRef)(null), {
      isHoveringOrFocusing: x
    } = (0, u.Z)(v);
    return (0, r.jsxs)(s.P3F, {
      innerRef: v,
      "aria-label": null != (t = a.label) ? t : m.intl.string(m.t.x5CoXR),
      className: h.nameplateItem,
      onClick: g,
      children: [(0, r.jsx)(d.Z, {
        nameplate: a,
        user: n,
        showPlaceholderUser: true,
        isHighlighted: x
      }), (0, r.jsx)("div", {
        className: l()(h.nameplateItemOverlay, {
          [h.selected]: b
        })
      }), (0, r.jsx)(c.Z, {
        isPurchaseSection: o === _.$0.PURCHASE,
        isPremiumSection: o === _.$0.PREMIUM_PURCHASE,
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
      onOpenShop: c
    } = e, d = p.ZP.canUseCollectibles(t), u = (0, _.ZP)();
    return (0, r.jsx)(s.u2D, {
      className: h.inventory,
      children: u.map(e => (0, r.jsxs)(s.Kqy, {
        gap: 4,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/medium",
          children: e.header
        }), e.section === _.$0.PURCHASE && (0, r.jsxs)("div", {
          className: h.inventoryControls,
          children: [(0, r.jsxs)(s.P3F, {
            className: l()(h.inventoryControlsButton, {
              [h.selected]: null == n
            }),
            onClick: () => a(null),
            children: [(0, r.jsx)(s.t6m, {
              size: "md",
              color: "currentColor"
            }), (0, r.jsx)(s.Text, {
              variant: "text-xs/normal",
              children: null != i ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t.PoWNfe)
            })]
          }), (0, r.jsxs)(s.P3F, {
            className: h.inventoryControlsButton,
            onClick: c,
            children: [(0, r.jsx)(s.EOn, {
              size: "md",
              color: "currentColor"
            }), (0, r.jsx)(s.Text, {
              variant: "text-xs/normal",
              children: m.intl.string(m.t.pWG4ze)
            })]
          })]
        }), (0, r.jsx)("div", {
          className: h.list,
          children: e.items.filter(o.k).map(i => (0, r.jsx)(b, {
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