/** Chunk was on 94758 **/
/** chunk id: 688192, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Y: () => v,
  Z: () => S
});
var n, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk221292 = require("./221292.js"),
  Chunk461631 = require("./461631.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk232644 = require("./232644.js"),
  v = ((n = {}).GIFTING_FLOW = "gifting_flow", n.PROFILE_MODAL = "profile_modal", n.PROFILE_SIDEBAR = "profile_sidebar", n);

function S(e) {
  let {
    item: t,
    wishlistId: r,
    isOwner: n,
    surface: s = "profile_modal",
    cardRef: v,
    renderItemPreview: S,
    accessibleLabel: w,
    onCardClick: y,
    buttonCTALabel: x,
    buttonIcon: E,
    isOwned: k = false,
    renderSourceIcon: N,
    giftingOrigin: T,
    source: C
  } = e, _ = l.useRef(null), L = l.useRef(null), Z = null != v ? v : L, {
    analyticsLocations: R
  } = (0, u.ZP)(), F = n && true === t.isOwned && null != t.gifterUserId, A = null != t.gifterUserId ? f.default.getUser(t.gifterUserId) : null, G = null != A ? p.ZP.getName(A) : null, W = F && null != A && null != G && "" !== G, D = W ? (0, i.jsx)(c.qEK, {
    src: A.getAvatarURL(true, 48),
    size: c.EFr.SIZE_48,
    "aria-label": G
  }) : null, H = (0, i.jsx)("div", {
    className: P.cardStateIconWrapper,
    children: (0, i.jsx)(c.sV5, {
      size: "custom",
      color: c.TVs.colors.WHITE,
      width: 38,
      height: 38,
      className: a()(P.cardStateIcon, P.checkmark),
      "aria-label": j.intl.string(j.t.L5Pt9L)
    })
  }), M = (0, i.jsx)("div", {
    className: P.overlay,
    children: (0, i.jsx)(c.Button, {
      focusProps: {
        ringTarget: Z
      },
      variant: "primary",
      size: "sm",
      text: x,
      icon: E,
      onClick: e => {
        e.stopPropagation(), U()
      },
      fullWidth: true
    })
  }), U = () => {
    if (T === b.Wt.DM_CHANNEL_WISHLIST) {
      let e = C === d.lr.WISHLIST ? "wishlist" : "shop";
      m.default.track(h.rMx.GIFTING_ITEM_CLICKED, {
        sku_id: t.skuId,
        item_source: e,
        wishlist_id: C === d.lr.WISHLIST ? r : null
      })
    } else null != r && (0, O.Er)({
      wishlistId: r,
      action: g.NW.WISHLIST_ITEM_CLICKED,
      skuId: t.skuId,
      analyticsLocations: R
    });
    y()
  }, z = (0, i.jsxs)("div", {
    ref: _,
    className: P.container,
    children: [(0, i.jsxs)("div", {
      ref: Z,
      className: a()(P.card, {
        [P.isOwned]: k,
        [P.smallCard]: "gifting_flow" === s,
        [P.largeCard]: "profile_modal" === s
      }),
      onClick: U,
      children: [(0, i.jsx)(c.nn4, {
        children: (0, i.jsx)(c.H, {
          children: w
        })
      }), (0, i.jsx)("div", {
        className: P.cardPreview,
        children: S()
      }), k && H, "profile_modal" === s ? M : (0, i.jsx)(c.P3F, {
        "aria-label": x,
        focusProps: {
          ringTarget: Z
        },
        onClick: e => {
          e.stopPropagation(), U()
        }
      })]
    }), null != N && N(), n && null != r && (0, i.jsx)(I.Z, {
      iconSize: "sm",
      item: t,
      wishlistId: r,
      className: P.removeItemButton
    })]
  });
  return W ? (0, i.jsx)(o.i_, {
    asContainer: true,
    title: j.intl.formatToPlainString(j.t.TL4ktE, {
      username: G
    }),
    body: t.skuName,
    asset: D,
    children: z
  }) : z
}