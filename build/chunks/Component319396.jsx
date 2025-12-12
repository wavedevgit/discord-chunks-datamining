/** Chunk was on 49941 **/
/** chunk id: 319396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk85707 = require("./85707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk454399 = require("./454399.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk277511 = require("./277511.js"),
  Chunk607550 = require("./607550.js"),
  Chunk474930 = require("./474930.js"),
  Chunk602733 = require("./602733.js"),
  Chunk689201 = require("./689201.js"),
  Chunk594174 = require("./594174.js"),
  Chunk621853 = require("./621853.js"),
  Chunk559410 = require("./559410.js"),
  Chunk780899 = require("./780899.jsx"),
  Chunk733231 = require("./733231.jsx"),
  Chunk796483 = require("./796483.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk855587 = require("./855587.js");

function x(e) {
  let {
    item: t,
    index: n,
    wishlistId: i,
    onReorder: l,
    children: a
  } = e, {
    registerDragHandleRef: o,
    manageFocusOnReorder: s
  } = (0, y.C)();
  return (0, r.jsx)(h.yW, {
    index: n,
    itemId: String(t.skuId),
    listType: String(i),
    itemType: "WISHLIST_ITEM",
    itemPreviewProps: {
      item: t
    },
    "aria-label": v.intl.formatToPlainString(v.t["7SnyMA"], {
      positionNumber: n + 1
    }),
    onReorder: l,
    onEnd: () => s(String(t.skuId)),
    className: j.dragAndDropContainer,
    dropBeforeClassName: j.dropIndicatorBefore,
    dropAfterClassName: j.dropIndicatorAfter,
    draggingClassName: j.isDragging,
    children: (0, r.jsxs)("div", {
      className: j.dragHandleContainer,
      children: [a, (0, r.jsx)(h.e_, {
        buttonRef: o(String(t.skuId)),
        className: j.dragHandle
      })]
    })
  })
}
let P = Chunk473749.memo(function(e) {
  let {
    item: t,
    index: n,
    profileOwner: i,
    isOwner: l,
    wishlistId: a,
    canReorder: c,
    tooltipConfig: u,
    isDragging: d,
    onReorder: g
  } = e, p = (0, r.jsx)(O.Z, {
    item: t,
    profileOwner: i,
    wishlistId: a,
    isOwner: l,
    isDragging: d
  }), m = p;
  if (u.shouldShow && !d)
    if (null != u.title && null == u.body && null == u.renderIcon) m = (0, r.jsx)(s.u, {
      text: u.title,
      position: "top",
      asContainer: true,
      delay: f.rq,
      children: p
    });
    else {
      var b, h;
      m = (0, r.jsx)(o.i, {
        title: u.title,
        body: null != (h = u.body) ? h : "",
        asset: null == (b = u.renderIcon) ? true : b.call(u, t),
        assetSize: f.EU,
        position: "top",
        asContainer: true,
        delay: f.rq,
        children: p
      })
    } return c && (m = (0, r.jsx)(x, {
    item: t,
    index: n,
    wishlistId: a,
    onReorder: g,
    children: m
  })), (0, r.jsx)("li", {
    children: m
  })
});

function _(e) {
  let {
    items: t,
    profileOwner: n,
    isOwner: o
  } = e, s = p.default.getCurrentUser(), {
    defaultWishlistId: f
  } = (0, a.cj)([m.Z], () => ({
    defaultWishlistId: m.Z.getFirstWishlistId(n.id)
  })), h = (0, g.c)(t, o), O = (0, b.f)({
    location: "UserProfileModalV2WishlistGrid"
  }) && o, {
    isDragging: v
  } = (0, l.f)(e => ({
    isDragging: e.isDragging()
  })), x = i.useCallback((e, n) => {
    if (e === n || null == f || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
    let r = u.Z.getWishlist(f);
    if (null == r) return;
    let i = t[e],
      {
        newWishlistData: l,
        previousSkuId: a,
        nextSkuId: o
      } = (0, d.d)(r, t, e, n);
    c.Z.reorderWishlistItem(f, i.skuId, {
      previousSkuId: a,
      nextSkuId: o,
      newWishlistData: l
    })
  }, [f, t]);
  if (null == s || null == f) return null;
  let _ = (0, r.jsx)("ul", {
    className: j.grid,
    children: t.map((e, t) => (0, r.jsx)(P, {
      item: e,
      index: t,
      profileOwner: n,
      isOwner: o,
      wishlistId: f,
      canReorder: O,
      tooltipConfig: h[t],
      isDragging: v,
      onReorder: x
    }, e.skuId))
  });
  return O ? (0, r.jsx)(y.d, {
    emptyListFallbackRef: null,
    children: _
  }) : _
}