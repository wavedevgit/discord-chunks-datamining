/** Chunk was on 21738 **/
/** chunk id: 228053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
  Chunk592356 = require("./592356.js"),
  Chunk366523 = require("./366523.jsx"),
  Chunk235218 = require("./235218.jsx"),
  Chunk188275 = require("./188275.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk30621 = require("./30621.js");

function N(e) {
  let {
    application: t,
    sku: n,
    handleOpenUserProfileModal: l,
    analyticsLocations: a
  } = e, o = i.useRef(null), {
    analyticsLocations: p
  } = (0, d.Ay)(null != a ? a : []), {
    isHoveringOrFocusing: m
  } = (0, f.A)(o), [b, E] = i.useState(false), y = i.useCallback(async e => {
    if (e.stopPropagation(), !b) {
      E(true);
      try {
        await A.A.addSkuToWishlist(n.id, p), null == l || l({
          tabSection: v.RP.WISHLIST
        })
      } catch (e) {
        (0, u.showToast)((0, u.createToast)(S.intl.string(S.t.F8FvUy), u.ToastType.FAILURE)), s.ORC.announce(S.intl.string(S.t.F8FvUy))
      } finally {
        E(false)
      }
    }
  }, [n.id, p, l, b]);
  return (0, r.jsx)(c.un, {
    title: S.intl.string(S.t["8DkMEQ"]),
    body: n.name,
    asset: (0, r.jsx)(h.mW, {
      application: t
    }),
    assetSize: _.Q8,
    children: (0, r.jsxs)(s.sqX, {
      className: C.Nr,
      ref: o,
      "aria-label": n.name,
      onClick: y,
      children: [(0, r.jsx)(O.e, {
        shape: "custom",
        containerClassName: C.Nr,
        foregroundImageClassName: C.wP,
        backgroundImageClassName: C.GC,
        sku: n
      }, n.id), (m || b) && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: C.p0
        }), (0, r.jsx)("div", {
          className: C.R$,
          children: b ? (0, r.jsx)(g.k, {}) : (0, r.jsx)(s.pa$, {
            size: "lg",
            color: u.LU0.unsafe_rawColors.WHITE_500
          })
        })]
      })]
    })
  })
}

function T(e) {
  let {
    wishlist: t,
    handleOpenUserProfileModal: n,
    analyticsLocations: l,
    numWishlistItemsToRecommend: s,
    maxWishlistItemsToShow: c = s,
    className: u
  } = e, d = (0, p.h)(I.XR), h = (0, o.bG)([b.default], () => b.default.getCurrentUser()), f = (0, o.bG)([b.default], () => b.default.getUser(null == t ? true : t.userId)), A = null == t || null != h && null != t && t.userId === h.id, _ = i.useMemo(() => null == t ? null != h ? [h.id] : true : [t.userId], [t, h]), O = (0, E.A)({
    numWishlistItems: s,
    location: "SocialLayerAddToWishlistGrid",
    applicationId: I.XR,
    userIds: _,
    includeWishlists: false
  }), v = i.useMemo(() => {
    var e;
    return new Set(null != (e = null == t ? true : t.items.map(e => e.skuId)) ? e : [])
  }, [t]), S = O.recommendations.filter(e => !v.has(e.skuId)).slice(0, c);
  return "success" !== O.state ? (0, r.jsx)("div", {
    className: C.g4,
    children: (0, r.jsx)(g.k, {})
  }) : 0 === S.length ? null : (0, r.jsx)("ul", {
    className: a()(C.Vg, u),
    children: S.map(e => A ? (0, r.jsx)(N, {
      application: d,
      sku: e.sku,
      handleOpenUserProfileModal: n,
      analyticsLocations: l
    }, e.skuId) : (0, r.jsx)(y.A, {
      item: e,
      wishlistId: t.id,
      isOwner: false,
      profileOwner: f,
      cardSize: m.Y.FLEX,
      showOverlayButton: true,
      hideButtonIcon: true,
      isDragging: false
    }, e.skuId))
  })
}