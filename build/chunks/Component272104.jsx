/** Chunk was on 23321 **/
/** chunk id: 272104, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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
let A = e => {
    var t;
    let {
      currentUser: n,
      nameplate: i,
      section: o,
      canUsePremiumCollectibles: d,
      isSelected: A,
      onClick: h
    } = e, _ = (0, r.useRef)(null), {
      isHoveringOrFocusing: y
    } = (0, u.A)(_);
    return (0, l.jsxs)(a.DUT, {
      innerRef: _,
      "aria-label": null != (t = i.label) ? t : x.intl.string(x.t.x5CoXR),
      className: g.Hj,
      onClick: h,
      children: [(0, l.jsx)(m.A, {
        nameplate: i,
        user: n,
        showPlaceholderUser: true,
        isHighlighted: y
      }), (0, l.jsx)("div", {
        className: s()(g.t1, {
          [g.wH]: A
        })
      }), (0, l.jsx)(c.A, {
        isPurchaseSection: o === p.wn.PURCHASE,
        isPremiumSection: o === p.wn.PREMIUM_PURCHASE,
        canUsePremiumCollectibles: d,
        skuId: i.skuId
      })]
    })
  },
  h = e => {
    let {
      currentUser: t,
      selectedNameplate: n,
      guildId: r,
      onSelect: i,
      onOpenShop: c
    } = e, u = d.Ay.canUseCollectibles(t), m = (0, p.Ay)();
    return (0, l.jsx)(a.d_W, {
      className: g.pf,
      children: m.map(e => (0, l.jsxs)(a.BJc, {
        gap: 4,
        children: [(0, l.jsx)(a.Text, {
          variant: "text-md/medium",
          children: e.header
        }), e.section === p.wn.PURCHASE && (0, l.jsxs)("div", {
          className: g.VQ,
          children: [(0, l.jsxs)(a.DUT, {
            className: s()(g.H5, {
              [g.wH]: null == n
            }),
            onClick: () => i(null),
            children: [(0, l.jsx)(a.KTN, {
              size: "md",
              color: "currentColor"
            }), (0, l.jsx)(a.Text, {
              variant: "text-xs/normal",
              children: null != r ? x.intl.string(x.t.CHf9iJ) : x.intl.string(x.t.PoWNfe)
            })]
          }), (0, l.jsxs)(a.DUT, {
            className: g.H5,
            onClick: c,
            children: [(0, l.jsx)(a.U1X, {
              size: "md",
              color: "currentColor"
            }), (0, l.jsx)(a.Text, {
              variant: "text-xs/normal",
              children: x.intl.string(x.t.pWG4ze)
            })]
          })]
        }), (0, l.jsx)("div", {
          className: g.p_,
          children: e.items.filter(o.F).map(r => (0, l.jsx)(A, {
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