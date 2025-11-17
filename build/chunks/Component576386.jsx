/** Chunk was on 8895 **/
/** chunk id: 576386, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk135483 = require("./135483.js"),
  Chunk171019 = require("./171019.jsx"),
  Chunk104505 = require("./104505.js"),
  Chunk74538 = require("./74538.js"),
  Chunk539530 = require("./539530.js"),
  Chunk566697 = require("./566697.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk24391 = require("./24391.js");
let x = e => {
    var t;
    let {
      currentUser: n,
      nameplate: i,
      section: o,
      canUsePremiumCollectibles: d,
      isSelected: x,
      onClick: v
    } = e, _ = (0, r.useRef)(null), {
      isHoveringOrFocusing: j
    } = (0, u.Z)(_);
    return (0, l.jsxs)(a.P3F, {
      innerRef: _,
      "aria-label": null != (t = i.label) ? t : h.intl.string(h.t.x5CoXR),
      className: g.nameplateItem,
      onClick: v,
      children: [(0, l.jsx)(m.Z, {
        nameplate: i,
        user: n,
        showPlaceholderUser: true,
        isHighlighted: j
      }), (0, l.jsx)("div", {
        className: s()(g.nameplateItemOverlay, {
          [g.selected]: x
        })
      }), (0, l.jsx)(c.Z, {
        isPurchaseSection: o === p.$0.PURCHASE,
        isPremiumSection: o === p.$0.PREMIUM_PURCHASE,
        canUsePremiumCollectibles: d,
        skuId: i.skuId
      })]
    })
  },
  v = e => {
    let {
      currentUser: t,
      selectedNameplate: n,
      guildId: r,
      onSelect: i,
      onOpenShop: c
    } = e, u = d.ZP.canUseCollectibles(t), m = (0, p.ZP)();
    return (0, l.jsx)(a.u2D, {
      className: g.inventory,
      children: m.map(e => (0, l.jsxs)(a.Kqy, {
        gap: 4,
        children: [(0, l.jsx)(a.Text, {
          variant: "text-md/medium",
          children: e.header
        }), e.section === p.$0.PURCHASE && (0, l.jsxs)("div", {
          className: g.inventoryControls,
          children: [(0, l.jsxs)(a.P3F, {
            className: s()(g.inventoryControlsButton, {
              [g.selected]: null == n
            }),
            onClick: () => i(null),
            children: [(0, l.jsx)(a.t6m, {
              size: "md",
              color: "currentColor"
            }), (0, l.jsx)(a.Text, {
              variant: "text-xs/normal",
              children: null != r ? h.intl.string(h.t.CHf9iJ) : h.intl.string(h.t.PoWNfe)
            })]
          }), (0, l.jsxs)(a.P3F, {
            className: g.inventoryControlsButton,
            onClick: c,
            children: [(0, l.jsx)(a.EOn, {
              size: "md",
              color: "currentColor"
            }), (0, l.jsx)(a.Text, {
              variant: "text-xs/normal",
              children: h.intl.string(h.t.pWG4ze)
            })]
          })]
        }), (0, l.jsx)("div", {
          className: g.list,
          children: e.items.filter(o.k).map(r => (0, l.jsx)(x, {
            currentUser: t,
            nameplate: r,
            section: e.section,
            canUsePremiumCollectibles: u,
            isSelected: (null == n ? true : n.skuId) === r.skuId,
            onClick: () => i(r)
          }, r.skuId))
        })]
      }, e.section))
    })
  }