/** Chunk was on 49279 **/
/** chunk id: 576386, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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
let g = e => {
    var t;
    let {
      currentUser: n,
      nameplate: a,
      section: o,
      canUsePremiumCollectibles: p,
      isSelected: g,
      onClick: b
    } = e, v = (0, r.useRef)(null), {
      isHoveringOrFocusing: x
    } = (0, u.Z)(v);
    return (0, i.jsxs)(s.P3F, {
      innerRef: v,
      "aria-label": null != (t = a.label) ? t : _.intl.string(_.t.x5CoXV),
      className: h.nameplateItem,
      onClick: b,
      children: [(0, i.jsx)(d.Z, {
        nameplate: a,
        user: n,
        showPlaceholderUser: true,
        isHighlighted: x
      }), (0, i.jsx)("div", {
        className: l()(h.nameplateItemOverlay, {
          [h.selected]: g
        })
      }), (0, i.jsx)(c.Z, {
        isPurchaseSection: o === m.$0.PURCHASE,
        isPremiumSection: o === m.$0.PREMIUM_PURCHASE,
        canUsePremiumCollectibles: p,
        skuId: a.skuId
      })]
    })
  },
  b = e => {
    let {
      currentUser: t,
      selectedNameplate: n,
      guildId: r,
      onSelect: a,
      onOpenShop: c
    } = e, d = p.ZP.canUseCollectibles(t), u = (0, m.ZP)();
    return (0, i.jsx)(s.u2D, {
      className: h.inventory,
      children: u.map(e => (0, i.jsxs)(s.Kqy, {
        gap: 4,
        children: [(0, i.jsx)(s.Text, {
          variant: "text-md/medium",
          children: e.header
        }), e.section === m.$0.PURCHASE && (0, i.jsxs)("div", {
          className: h.inventoryControls,
          children: [(0, i.jsxs)(s.P3F, {
            className: l()(h.inventoryControlsButton, {
              [h.selected]: null == n
            }),
            onClick: () => a(null),
            children: [(0, i.jsx)(s.t6m, {
              size: "md",
              color: "currentColor"
            }), (0, i.jsx)(s.Text, {
              variant: "text-xs/normal",
              children: null != r ? _.intl.string(_.t.CHf9iI) : _.intl.string(_.t.PoWNfX)
            })]
          }), (0, i.jsxs)(s.P3F, {
            className: h.inventoryControlsButton,
            onClick: c,
            children: [(0, i.jsx)(s.EOn, {
              size: "md",
              color: "currentColor"
            }), (0, i.jsx)(s.Text, {
              variant: "text-xs/normal",
              children: _.intl.string(_.t.pWG4zc)
            })]
          })]
        }), (0, i.jsx)("div", {
          className: h.list,
          children: e.items.filter(o.k).map(r => (0, i.jsx)(g, {
            currentUser: t,
            nameplate: r,
            section: e.section,
            canUsePremiumCollectibles: d,
            isSelected: (null == n ? true : n.skuId) === r.skuId,
            onClick: () => a(r)
          }, r.skuId))
        })]
      }, e.section))
    })
  }