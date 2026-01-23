/** Chunk was on 23321 **/
/** chunk id: 272104, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk837015 = require("./837015.js"),
  Chunk483968 = require("./483968.jsx"),
  Chunk713517 = require("./713517.js"),
  Chunk927578 = require("./927578.js"),
  Chunk659503 = require("./659503.js"),
  Chunk550111 = require("./550111.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk390734 = require("./390734.js");
let h = e => {
    var t;
    let {
      currentUser: l,
      nameplate: i,
      section: o,
      canUsePremiumCollectibles: d,
      isSelected: h,
      onClick: A
    } = e, _ = (0, r.useRef)(null), {
      isHoveringOrFocusing: v
    } = (0, u.A)(_);
    return (0, n.jsxs)(a.DUT, {
      innerRef: _,
      "aria-label": null != (t = i.label) ? t : x.intl.string(x.t.x5CoXR),
      className: g.Hj,
      onClick: A,
      children: [(0, n.jsx)(m.A, {
        nameplate: i,
        user: l,
        showPlaceholderUser: true,
        isHighlighted: v
      }), (0, n.jsx)("div", {
        className: s()(g.t1, {
          [g.wH]: h
        })
      }), (0, n.jsx)(c.A, {
        isPurchaseSection: o === p.wn.PURCHASE,
        isPremiumSection: o === p.wn.PREMIUM_PURCHASE,
        canUsePremiumCollectibles: d,
        skuId: i.skuId
      })]
    })
  },
  A = e => {
    let {
      currentUser: t,
      selectedNameplate: l,
      guildId: r,
      onSelect: i,
      onOpenShop: c
    } = e, u = d.Ay.canUseCollectibles(t), m = (0, p.Ay)();
    return (0, n.jsx)(a.d_W, {
      className: g.pf,
      children: m.map(e => (0, n.jsxs)(a.BJc, {
        gap: 4,
        children: [(0, n.jsx)(a.Text, {
          variant: "text-md/medium",
          children: e.header
        }), e.section === p.wn.PURCHASE && (0, n.jsxs)("div", {
          className: g.VQ,
          children: [(0, n.jsxs)(a.DUT, {
            className: s()(g.H5, {
              [g.wH]: null == l
            }),
            onClick: () => i(null),
            children: [(0, n.jsx)(a.KTN, {
              size: "md",
              color: "currentColor"
            }), (0, n.jsx)(a.Text, {
              variant: "text-xs/normal",
              children: null != r ? x.intl.string(x.t.CHf9iJ) : x.intl.string(x.t.PoWNfe)
            })]
          }), (0, n.jsxs)(a.DUT, {
            className: g.H5,
            onClick: c,
            children: [(0, n.jsx)(a.U1X, {
              size: "md",
              color: "currentColor"
            }), (0, n.jsx)(a.Text, {
              variant: "text-xs/normal",
              children: x.intl.string(x.t.pWG4ze)
            })]
          })]
        }), (0, n.jsx)("div", {
          className: g.p_,
          children: e.items.filter(o.F).map(r => (0, n.jsx)(h, {
            currentUser: t,
            nameplate: r,
            section: e.section,
            canUsePremiumCollectibles: u,
            isSelected: (null == l ? true : l.skuId) === r.skuId,
            onClick: () => i(r)
          }, r.skuId))
        })]
      }, e.section))
    })
  }