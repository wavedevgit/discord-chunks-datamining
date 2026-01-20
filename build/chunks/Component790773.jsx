/** Chunk was on 45956 **/
/** chunk id: 790773, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
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

function S(e) {
  let {
    application: a,
    sku: t,
    handleOpenUserProfileModal: n,
    analyticsLocations: r
  } = e, o = l.useRef(null), {
    analyticsLocations: m
  } = (0, u.ZP)(null != r ? r : []), {
    isHoveringOrFocusing: g
  } = (0, v.Z)(o), [j, I] = l.useState(false), N = l.useCallback(async e => {
    if (e.stopPropagation(), !j) {
      I(true);
      try {
        await x.Z.addSkuToWishlist(t.id, m), null == n || n({
          tabSection: A.oh.WISHLIST
        })
      } catch (e) {
        (0, d.showToast)((0, d.createToast)(O.intl.string(O.t.F8FvUy), d.ToastType.FAILURE)), s.uvj.announce(O.intl.string(O.t.F8FvUy))
      } finally {
        I(false)
      }
    }
  }, [t.id, m, n, j]);
  return (0, i.jsx)(c.i_, {
    title: O.intl.string(O.t["8DkMEQ"]),
    body: t.name,
    asset: (0, i.jsx)(p.No, {
      application: a
    }),
    assetSize: h.EU,
    children: (0, i.jsxs)(s.kL8, {
      className: T.card,
      ref: o,
      "aria-label": t.name,
      onClick: N,
      children: [(0, i.jsx)(E.A, {
        shape: "custom",
        containerClassName: T.card,
        foregroundImageClassName: T.cardImage,
        backgroundImageClassName: T.cardBackgroundImage,
        sku: t
      }, t.id), (g || j) && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: T.highlightOverlay
        }), (0, i.jsx)("div", {
          className: T.plusIconContainer,
          children: j ? (0, i.jsx)(f.T, {}) : (0, i.jsx)(s.svS, {
            size: "lg",
            color: d.TVs.unsafe_rawColors.WHITE_500
          })
        })]
      })]
    })
  })
}

function P(e) {
  let {
    wishlist: a,
    handleOpenUserProfileModal: t,
    analyticsLocations: n,
    numWishlistItemsToRecommend: s,
    maxWishlistItemsToShow: c = s,
    className: d
  } = e, u = (0, m.q)(L.t9), p = (0, o.e7)([j.default], () => j.default.getCurrentUser()), v = (0, o.e7)([j.default], () => j.default.getUser(null == a ? true : a.userId)), x = null == a || null != p && null != a && a.userId === p.id, h = l.useMemo(() => null == a ? null != p ? [p.id] : true : [a.userId], [a, p]), E = (0, N.Z)({
    guildId: (0, I.ac)(),
    numWishlistItems: s,
    location: "SocialLayerAddToWishlistGrid",
    applicationId: L.t9,
    userIds: h,
    includeWishlists: false
  }), A = l.useMemo(() => {
    var e;
    return new Set(null != (e = null == a ? true : a.items.map(e => e.skuId)) ? e : [])
  }, [a]), O = E.recommendations.filter(e => !A.has(e.skuId)).slice(0, c);
  return "success" !== E.state ? (0, i.jsx)("div", {
    className: T.loadingContainer,
    children: (0, i.jsx)(f.T, {})
  }) : 0 === O.length ? null : (0, i.jsx)("ul", {
    className: r()(T.grid, d),
    children: O.map(e => x ? (0, i.jsx)(S, {
      application: u,
      sku: e.sku,
      handleOpenUserProfileModal: t,
      analyticsLocations: n
    }, e.skuId) : (0, i.jsx)(b.Z, {
      item: e,
      wishlistId: a.id,
      isOwner: false,
      profileOwner: v,
      cardSize: g.U.FLEX,
      showOverlayButton: true,
      hideButtonIcon: true,
      isDragging: false
    }, e.skuId))
  })
}