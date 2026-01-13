/** Chunk was on 55827 **/
/** chunk id: 790773, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk525302 = require("./525302.jsx"),
  Chunk104505 = require("./104505.js"),
  Chunk863886 = require("./863886.jsx"),
  Chunk688192 = require("./688192.jsx"),
  Chunk277511 = require("./277511.js"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk164670 = require("./164670.js"),
  Chunk927613 = require("./927613.js"),
  Chunk848118 = require("./848118.jsx"),
  Chunk851397 = require("./851397.jsx"),
  Chunk582113 = require("./582113.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk702631 = require("./702631.js");

function P(e) {
  let {
    application: a,
    sku: l,
    handleOpenUserProfileModal: n,
    analyticsLocations: s
  } = e, c = t.useRef(null), {
    analyticsLocations: m
  } = (0, u.ZP)(null != s ? s : []), {
    isHoveringOrFocusing: f
  } = (0, v.Z)(c), [j, I] = t.useState(false), N = t.useCallback(async e => {
    if (e.stopPropagation(), !j) {
      I(true);
      try {
        await h.Z.addSkuToWishlist(l.id, m), null == n || n({
          tabSection: O.oh.WISHLIST
        })
      } catch (e) {
        (0, d.showToast)((0, d.createToast)(A.intl.string(A.t.F8FvUy), d.ToastType.FAILURE)), r.uvj.announce(A.intl.string(A.t.F8FvUy))
      } finally {
        I(false)
      }
    }
  }, [l.id, m, n, j]);
  return (0, i.jsx)(o.i_, {
    title: A.intl.string(A.t["8DkMEQ"]),
    body: l.name,
    asset: (0, i.jsx)(p.No, {
      application: a
    }),
    assetSize: x.EU,
    children: (0, i.jsxs)(r.kL8, {
      className: T.card,
      ref: c,
      "aria-label": l.name,
      onClick: N,
      children: [(0, i.jsx)(b.A, {
        shape: "custom",
        containerClassName: T.card,
        foregroundImageClassName: T.cardImage,
        backgroundImageClassName: T.cardBackgroundImage,
        sku: l
      }, l.id), (f || j) && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: T.highlightOverlay
        }), (0, i.jsx)("div", {
          className: T.plusIconContainer,
          children: j ? (0, i.jsx)(g.T, {}) : (0, i.jsx)(r.svS, {
            size: "lg",
            color: d.TVs.unsafe_rawColors.WHITE_500
          })
        })]
      })]
    })
  })
}

function S(e) {
  let {
    wishlist: a,
    handleOpenUserProfileModal: l,
    analyticsLocations: n,
    numWishlistItemsToRecommend: r,
    maxWishlistItemsToShow: o = r,
    className: d
  } = e, u = (0, m.q)(E.t9), p = (0, c.e7)([j.default], () => j.default.getCurrentUser()), v = (0, c.e7)([j.default], () => j.default.getUser(null == a ? true : a.userId)), h = null == a || null != p && null != a && a.userId === p.id, x = t.useMemo(() => null == a ? null != p ? [p.id] : true : [a.userId], [a, p]), b = (0, N.Z)({
    guildId: (0, I.ac)(),
    numWishlistItems: r,
    location: "SocialLayerAddToWishlistGrid",
    applicationId: E.t9,
    userIds: x,
    includeWishlists: false
  }), O = t.useMemo(() => {
    var e;
    return new Set(null != (e = null == a ? true : a.items.map(e => e.skuId)) ? e : [])
  }, [a]), A = b.recommendations.filter(e => !O.has(e.skuId)).slice(0, o);
  return "success" !== b.state ? (0, i.jsx)("div", {
    className: T.loadingContainer,
    children: (0, i.jsx)(g.T, {})
  }) : (0, i.jsx)("ul", {
    className: s()(T.grid, d),
    children: A.map(e => h ? (0, i.jsx)(P, {
      application: u,
      sku: e.sku,
      handleOpenUserProfileModal: l,
      analyticsLocations: n
    }, e.skuId) : (0, i.jsx)(L.Z, {
      item: e,
      wishlistId: a.id,
      isOwner: false,
      profileOwner: v,
      cardSize: f.U.FLEX,
      showOverlayButton: true,
      hideButtonIcon: true,
      isDragging: false
    }, e.skuId))
  })
}