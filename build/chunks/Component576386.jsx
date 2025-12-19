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
let h = e => {
    var t;
    let {
      currentUser: n,
      nameplate: i,
      section: o,
      canUsePremiumCollectibles: u,
      isSelected: h,
      onClick: v
    } = e, f = (0, r.useRef)(null), {
      isHoveringOrFocusing: b
    } = (0, d.Z)(f);
    return (0, l.jsxs)(s.P3F, {
      innerRef: f,
      "aria-label": null != (t = i.label) ? t : x.intl.string(x.t.x5CoXR),
      className: g.nameplateItem,
      onClick: v,
      children: [(0, l.jsx)(m.Z, {
        nameplate: i,
        user: n,
        showPlaceholderUser: true,
        isHighlighted: b
      }), (0, l.jsx)("div", {
        className: a()(g.nameplateItemOverlay, {
          [g.selected]: h
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
      className: g.inventory,
      children: m.map(e => (0, l.jsxs)(s.Kqy, {
        gap: 4,
        children: [(0, l.jsx)(s.Text, {
          variant: "text-md/medium",
          children: e.header
        }), e.section === p.$0.PURCHASE && (0, l.jsxs)("div", {
          className: g.inventoryControls,
          children: [(0, l.jsxs)(s.P3F, {
            className: a()(g.inventoryControlsButton, {
              [g.selected]: null == n
            }),
            onClick: () => i(null),
            children: [(0, l.jsx)(s.t6m, {
              size: "md",
              color: "currentColor"
            }), (0, l.jsx)(s.Text, {
              variant: "text-xs/normal",
              children: null != r ? x.intl.string(x.t.CHf9iJ) : x.intl.string(x.t.PoWNfe)
            })]
          }), (0, l.jsxs)(s.P3F, {
            className: g.inventoryControlsButton,
            onClick: c,
            children: [(0, l.jsx)(s.EOn, {
              size: "md",
              color: "currentColor"
            }), (0, l.jsx)(s.Text, {
              variant: "text-xs/normal",
              children: x.intl.string(x.t.pWG4ze)
            })]
          })]
        }), (0, l.jsx)("div", {
          className: g.list,
          children: e.items.filter(o.k).map(r => (0, l.jsx)(h, {
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