/** Chunk was on 93210 **/
/** chunk id: 576386, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
      nameplate: l,
      section: o,
      canUsePremiumCollectibles: p,
      isSelected: g,
      onClick: I
    } = e, b = (0, r.useRef)(null), {
      isHoveringOrFocusing: f
    } = (0, u.Z)(b);
    return (0, i.jsxs)(s.P3F, {
      innerRef: b,
      "aria-label": null != (t = l.label) ? t : h.intl.string(h.t.x5CoXR),
      className: m.nameplateItem,
      onClick: I,
      children: [(0, i.jsx)(d.Z, {
        nameplate: l,
        user: n,
        showPlaceholderUser: true,
        isHighlighted: f
      }), (0, i.jsx)("div", {
        className: a()(m.nameplateItemOverlay, {
          [m.selected]: g
        })
      }), (0, i.jsx)(c.Z, {
        isPurchaseSection: o === _.$0.PURCHASE,
        isPremiumSection: o === _.$0.PREMIUM_PURCHASE,
        canUsePremiumCollectibles: p,
        skuId: l.skuId
      })]
    })
  },
  I = e => {
    let {
      currentUser: t,
      selectedNameplate: n,
      guildId: r,
      onSelect: l,
      onOpenShop: c
    } = e, d = p.ZP.canUseCollectibles(t), u = (0, _.ZP)();
    return (0, i.jsx)(s.u2D, {
      className: m.inventory,
      children: u.map(e => (0, i.jsxs)(s.Kqy, {
        gap: 4,
        children: [(0, i.jsx)(s.Text, {
          variant: "text-md/medium",
          children: e.header
        }), e.section === _.$0.PURCHASE && (0, i.jsxs)("div", {
          className: m.inventoryControls,
          children: [(0, i.jsxs)(s.P3F, {
            className: a()(m.inventoryControlsButton, {
              [m.selected]: null == n
            }),
            onClick: () => l(null),
            children: [(0, i.jsx)(s.t6m, {
              size: "md",
              color: "currentColor"
            }), (0, i.jsx)(s.Text, {
              variant: "text-xs/normal",
              children: null != r ? h.intl.string(h.t.CHf9iJ) : h.intl.string(h.t.PoWNfe)
            })]
          }), (0, i.jsxs)(s.P3F, {
            className: m.inventoryControlsButton,
            onClick: c,
            children: [(0, i.jsx)(s.EOn, {
              size: "md",
              color: "currentColor"
            }), (0, i.jsx)(s.Text, {
              variant: "text-xs/normal",
              children: h.intl.string(h.t.pWG4ze)
            })]
          })]
        }), (0, i.jsx)("div", {
          className: m.list,
          children: e.items.filter(o.k).map(r => (0, i.jsx)(g, {
            currentUser: t,
            nameplate: r,
            section: e.section,
            canUsePremiumCollectibles: d,
            isSelected: (null == n ? true : n.skuId) === r.skuId,
            onClick: () => l(r)
          }, r.skuId))
        })]
      }, e.section))
    })
  }