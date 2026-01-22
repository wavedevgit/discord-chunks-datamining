/** Chunk was on 42944 **/
/** chunk id: 228053, original params: e,a,n (module,exports,require) **/
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

function R(e) {
  let {
    application: a,
    sku: n,
    handleOpenUserProfileModal: i,
    analyticsLocations: r
  } = e, o = l.useRef(null), {
    analyticsLocations: m
  } = (0, u.Ay)(null != r ? r : []), {
    isHoveringOrFocusing: x
  } = (0, f.A)(o), [j, h] = l.useState(false), I = l.useCallback(async e => {
    if (e.stopPropagation(), !j) {
      h(true);
      try {
        await g.A.addSkuToWishlist(n.id, m), null == i || i({
          tabSection: O.RP.WISHLIST
        })
      } catch (e) {
        (0, d.showToast)((0, d.createToast)(y.intl.string(y.t.F8FvUy), d.ToastType.FAILURE)), s.ORC.announce(y.intl.string(y.t.F8FvUy))
      } finally {
        h(false)
      }
    }
  }, [n.id, m, i, j]);
  return (0, t.jsx)(c.un, {
    title: y.intl.string(y.t["8DkMEQ"]),
    body: n.name,
    asset: (0, t.jsx)(p.mW, {
      application: a
    }),
    assetSize: A.Q8,
    children: (0, t.jsxs)(s.sqX, {
      className: L.Nr,
      ref: o,
      "aria-label": n.name,
      onClick: I,
      children: [(0, t.jsx)(N.e, {
        shape: "custom",
        containerClassName: L.Nr,
        foregroundImageClassName: L.wP,
        backgroundImageClassName: L.GC,
        sku: n
      }, n.id), (x || j) && (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("div", {
          className: L.p0
        }), (0, t.jsx)("div", {
          className: L.R$,
          children: j ? (0, t.jsx)(v.k, {}) : (0, t.jsx)(s.pa$, {
            size: "lg",
            color: d.LU0.unsafe_rawColors.WHITE_500
          })
        })]
      })]
    })
  })
}

function P(e) {
  let {
    wishlist: a,
    handleOpenUserProfileModal: n,
    analyticsLocations: i,
    numWishlistItemsToRecommend: s,
    maxWishlistItemsToShow: c = s,
    className: d
  } = e, u = (0, m.h)(E.XR), p = (0, o.bG)([j.default], () => j.default.getCurrentUser()), f = (0, o.bG)([j.default], () => j.default.getUser(null == a ? true : a.userId)), g = null == a || null != p && null != a && a.userId === p.id, A = l.useMemo(() => null == a ? null != p ? [p.id] : true : [a.userId], [a, p]), N = (0, I.A)({
    guildId: (0, h.zf)(),
    numWishlistItems: s,
    location: "SocialLayerAddToWishlistGrid",
    applicationId: E.XR,
    userIds: A,
    includeWishlists: false
  }), O = l.useMemo(() => {
    var e;
    return new Set(null != (e = null == a ? true : a.items.map(e => e.skuId)) ? e : [])
  }, [a]), y = N.recommendations.filter(e => !O.has(e.skuId)).slice(0, c);
  return "success" !== N.state ? (0, t.jsx)("div", {
    className: L.g4,
    children: (0, t.jsx)(v.k, {})
  }) : 0 === y.length ? null : (0, t.jsx)("ul", {
    className: r()(L.Vg, d),
    children: y.map(e => g ? (0, t.jsx)(R, {
      application: u,
      sku: e.sku,
      handleOpenUserProfileModal: n,
      analyticsLocations: i
    }, e.skuId) : (0, t.jsx)(b.A, {
      item: e,
      wishlistId: a.id,
      isOwner: false,
      profileOwner: f,
      cardSize: x.Y.FLEX,
      showOverlayButton: true,
      hideButtonIcon: true,
      isDragging: false
    }, e.skuId))
  })
}