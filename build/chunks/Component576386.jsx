/** Chunk was on 8895 **/
/** chunk id: 576386, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk135483 = require("./135483.js"),
  Chunk171019 = require("./171019.jsx"),
  Chunk104505 = require("./104505.js"),
  Chunk74538 = require("./74538.js"),
  Chunk539530 = require("./539530.js"),
  Chunk566697 = require("./566697.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk332502 = require("./332502.js");
let x = e => {
    var t;
    let {
      currentUser: n,
      nameplate: i,
      section: o,
      canUsePremiumCollectibles: u,
      isSelected: x,
      onClick: v
    } = e, b = (0, r.useRef)(null), {
      isHoveringOrFocusing: f
    } = (0, d.Z)(b);
    return (0, l.jsxs)(s.P3F, {
      innerRef: b,
      "aria-label": null != (t = i.label) ? t : g.intl.string(g.t.x5CoXR),
      className: h.nameplateItem,
      onClick: v,
      children: [(0, l.jsx)(m.Z, {
        nameplate: i,
        user: n,
        showPlaceholderUser: true,
        isHighlighted: f
      }), (0, l.jsx)("div", {
        className: a()(h.nameplateItemOverlay, {
          [h.selected]: x
        })
      }), (0, l.jsx)(c.Z, {
        isPurchaseSection: o === p.$0.PURCHASE,
        isPremiumSection: o === p.$0.PREMIUM_PURCHASE,
        canUsePremiumCollectibles: u,
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
    } = e, d = u.ZP.canUseCollectibles(t), m = (0, p.ZP)();
    return (0, l.jsx)(s.u2D, {
      className: h.inventory,
      children: m.map(e => (0, l.jsxs)(s.Kqy, {
        gap: 4,
        children: [(0, l.jsx)(s.Text, {
          variant: "text-md/medium",
          children: e.header
        }), e.section === p.$0.PURCHASE && (0, l.jsxs)("div", {
          className: h.inventoryControls,
          children: [(0, l.jsxs)(s.P3F, {
            className: a()(h.inventoryControlsButton, {
              [h.selected]: null == n
            }),
            onClick: () => i(null),
            children: [(0, l.jsx)(s.t6m, {
              size: "md",
              color: "currentColor"
            }), (0, l.jsx)(s.Text, {
              variant: "text-xs/normal",
              children: null != r ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.PoWNfe)
            })]
          }), (0, l.jsxs)(s.P3F, {
            className: h.inventoryControlsButton,
            onClick: c,
            children: [(0, l.jsx)(s.EOn, {
              size: "md",
              color: "currentColor"
            }), (0, l.jsx)(s.Text, {
              variant: "text-xs/normal",
              children: g.intl.string(g.t.pWG4ze)
            })]
          })]
        }), (0, l.jsx)("div", {
          className: h.list,
          children: e.items.filter(o.k).map(r => (0, l.jsx)(x, {
            currentUser: t,
            nameplate: r,
            section: e.section,
            canUsePremiumCollectibles: d,
            isSelected: (null == n ? true : n.skuId) === r.skuId,
            onClick: () => i(r)
          }, r.skuId))
        })]
      }, e.section))
    })
  }