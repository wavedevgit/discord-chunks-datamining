/** Chunk was on 8895 **/
/** chunk id: 576386, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk135483 = require("./135483.js"),
  Chunk171019 = require("./171019.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk539530 = require("./539530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk24391 = require("./24391.js");
let h = e => {
    var t;
    let {
      currentUser: n,
      nameplate: r,
      section: c,
      canUsePremiumCollectibles: p,
      isSelected: h,
      onClick: v
    } = e, _ = (0, i.useRef)(null), C = (0, o.Z)(_);
    return (0, l.jsxs)(a.P3F, {
      innerRef: _,
      "aria-label": null != (t = r.label) ? t : x.intl.string(x.t.x5CoXV),
      className: g.nameplateItem,
      onClick: v,
      children: [(0, l.jsx)(u.Z, {
        nameplate: r,
        user: n,
        showPlaceholderUser: true,
        isHighlighted: C
      }), (0, l.jsx)("div", {
        className: s()(g.nameplateItemOverlay, {
          [g.selected]: h
        })
      }), (0, l.jsx)(d.Z, {
        isPurchaseSection: c === m.$0.PURCHASE,
        isPremiumSection: c === m.$0.PREMIUM_PURCHASE,
        canUsePremiumCollectibles: p,
        skuId: r.skuId
      })]
    })
  },
  v = e => {
    let {
      currentUser: t,
      selectedNameplate: n,
      guildId: i,
      onSelect: r,
      onOpenShop: o
    } = e, d = p.ZP.canUseCollectibles(t), u = (0, m.ZP)();
    return (0, l.jsx)(a.u2D, {
      className: g.inventory,
      children: u.map(e => (0, l.jsxs)("div", {
        children: [(0, l.jsx)(a.vwX, {
          children: e.header
        }), e.section === m.$0.PURCHASE && (0, l.jsxs)("div", {
          className: g.inventoryControls,
          children: [(0, l.jsxs)(a.P3F, {
            className: s()(g.inventoryControlsButton, {
              [g.selected]: null == n
            }),
            onClick: () => r(null),
            children: [(0, l.jsx)(a.t6m, {
              size: "md",
              color: "currentColor"
            }), (0, l.jsx)(a.Text, {
              variant: "text-xs/normal",
              children: null != i ? x.intl.string(x.t.CHf9iI) : x.intl.string(x.t.PoWNfX)
            })]
          }), (0, l.jsxs)(a.P3F, {
            className: g.inventoryControlsButton,
            onClick: o,
            children: [(0, l.jsx)(a.EOn, {
              size: "md",
              color: "currentColor"
            }), (0, l.jsx)(a.Text, {
              variant: "text-xs/normal",
              children: x.intl.string(x.t.pWG4zc)
            })]
          })]
        }), (0, l.jsx)("div", {
          className: g.list,
          children: e.items.filter(c.k).map(i => (0, l.jsx)(h, {
            currentUser: t,
            nameplate: i,
            section: e.section,
            canUsePremiumCollectibles: d,
            isSelected: (null == n ? true : n.skuId) === i.skuId,
            onClick: () => r(i)
          }, i.skuId))
        })]
      }, e.section))
    })
  }