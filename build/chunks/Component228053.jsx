/** Chunk was on 42944 **/
/** chunk id: 228053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk576030 = require("./576030.jsx"),
  Chunk713517 = require("./713517.js"),
  Chunk492518 = require("./492518.jsx"),
  Chunk242640 = require("./242640.jsx"),
  Chunk808247 = require("./808247.js"),
  Chunk594832 = require("./594832.js"),
  Chunk287809 = require("./287809.js"),
  Chunk871123 = require("./871123.js"),
  Chunk592356 = require("./592356.js"),
  Chunk366523 = require("./366523.jsx"),
  Chunk235218 = require("./235218.jsx"),
  Chunk188275 = require("./188275.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk30621 = require("./30621.js");

function k(e) {
  let {
    application: t,
    sku: n,
    handleOpenUserProfileModal: i,
    analyticsLocations: r
  } = e, o = l.useRef(null), {
    analyticsLocations: p
  } = (0, d.Ay)(null != r ? r : []), {
    isHoveringOrFocusing: v
  } = (0, f.A)(o), [j, b] = l.useState(false), I = l.useCallback(async e => {
    if (e.stopPropagation(), !j) {
      b(true);
      try {
        await x.A.addSkuToWishlist(n.id, p), null == i || i({
          tabSection: E.RP.WISHLIST
        })
      } catch (e) {
        (0, u.showToast)((0, u.createToast)(O.intl.string(O.t.F8FvUy), u.ToastType.FAILURE)), s.ORC.announce(O.intl.string(O.t.F8FvUy))
      } finally {
        b(false)
      }
    }
  }, [n.id, p, i, j]);
  return (0, a.jsx)(c.un, {
    title: O.intl.string(O.t["8DkMEQ"]),
    body: n.name,
    asset: (0, a.jsx)(m.mW, {
      application: t
    }),
    assetSize: h.Q8,
    children: (0, a.jsxs)(s.sqX, {
      className: L.Nr,
      ref: o,
      "aria-label": n.name,
      onClick: I,
      children: [(0, a.jsx)(A.e, {
        shape: "custom",
        containerClassName: L.Nr,
        foregroundImageClassName: L.wP,
        backgroundImageClassName: L.GC,
        sku: n
      }, n.id), (v || j) && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: L.p0
        }), (0, a.jsx)("div", {
          className: L.R$,
          children: j ? (0, a.jsx)(g.k, {}) : (0, a.jsx)(s.pa$, {
            size: "lg",
            color: u.LU0.unsafe_rawColors.WHITE_500
          })
        })]
      })]
    })
  })
}

function P(e) {
  let {
    wishlist: t,
    handleOpenUserProfileModal: n,
    analyticsLocations: i,
    numWishlistItemsToRecommend: s,
    maxWishlistItemsToShow: c = s,
    className: u
  } = e, d = (0, p.h)(N.XR), m = (0, o.bG)([j.default], () => j.default.getCurrentUser()), f = (0, o.bG)([j.default], () => j.default.getUser(null == t ? true : t.userId)), x = null == t || null != m && null != t && t.userId === m.id, h = l.useMemo(() => null == t ? null != m ? [m.id] : true : [t.userId], [t, m]), A = (0, I.A)({
    guildId: (0, b.zf)(),
    numWishlistItems: s,
    location: "SocialLayerAddToWishlistGrid",
    applicationId: N.XR,
    userIds: h,
    includeWishlists: false
  }), E = l.useMemo(() => {
    var e;
    return new Set(null != (e = null == t ? true : t.items.map(e => e.skuId)) ? e : [])
  }, [t]), O = A.recommendations.filter(e => !E.has(e.skuId)).slice(0, c);
  return "success" !== A.state ? (0, a.jsx)("div", {
    className: L.g4,
    children: (0, a.jsx)(g.k, {})
  }) : 0 === O.length ? null : (0, a.jsx)("ul", {
    className: r()(L.Vg, u),
    children: O.map(e => x ? (0, a.jsx)(k, {
      application: d,
      sku: e.sku,
      handleOpenUserProfileModal: n,
      analyticsLocations: i
    }, e.skuId) : (0, a.jsx)(y.A, {
      item: e,
      wishlistId: t.id,
      isOwner: false,
      profileOwner: f,
      cardSize: v.Y.FLEX,
      showOverlayButton: true,
      hideButtonIcon: true,
      isDragging: false
    }, e.skuId))
  })
}