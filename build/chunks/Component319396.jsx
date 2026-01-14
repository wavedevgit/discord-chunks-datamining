/** Chunk was on 90882 **/
/** chunk id: 319396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk505805 = require("./505805.js"),
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
  Chunk780899 = require("./780899.jsx"),
  Chunk733231 = require("./733231.jsx"),
  Chunk796483 = require("./796483.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk796647 = require("./796647.js");

function x(e) {
  let {
    item: t,
    index: n,
    wishlistId: i,
    onReorder: l,
    children: a
  } = e, {
    manageFocusOnReorder: o
  } = (0, y.C)();
  return (0, r.jsx)(b.yW, {
    index: n,
    itemId: String(t.skuId),
    listType: String(i),
    itemType: "WISHLIST_ITEM",
    itemPreviewProps: {
      item: t
    },
    "aria-label": j.intl.formatToPlainString(j.t["7SnyMA"], {
      positionNumber: n + 1
    }),
    onReorder: l,
    onEnd: () => o(String(t.skuId)),
    className: O.dragAndDropContainer,
    dropBeforeClassName: O.dropIndicatorBefore,
    dropAfterClassName: O.dropIndicatorAfter,
    draggingClassName: O.isDragging,
    children: (0, r.jsx)("div", {
      className: O.dragHandleContainer,
      children: a
    })
  })
}
let v = Chunk473749.memo(function(e) {
  let {
    item: t,
    index: n,
    profileOwner: i,
    isOwner: l,
    wishlistId: a,
    tooltipConfig: s,
    isDragging: u,
    onReorder: d
  } = e, {
    registerDragHandleRef: g
  } = (0, y.C)(), p = l ? (0, r.jsx)(b.e_, {
    buttonRef: g(String(t.skuId)),
    className: O.dragHandle,
    onFocus: e => e.stopPropagation()
  }) : true, m = (0, r.jsx)(h.Z, {
    item: t,
    profileOwner: i,
    wishlistId: a,
    isOwner: l,
    isDragging: u,
    dragHandle: p
  }), j = m;
  if (s.shouldShow && !u)
    if (null != s.title && null == s.body && null == s.renderIcon) j = (0, r.jsx)(c.u, {
      text: s.title,
      position: "top",
      asContainer: true,
      delay: f.rq,
      children: m
    });
    else {
      var v, I;
      j = (0, r.jsx)(o.i, {
        title: s.title,
        body: null != (I = s.body) ? I : "",
        asset: null == (v = s.renderIcon) ? true : v.call(s, t),
        assetSize: f.EU,
        position: "top",
        asContainer: true,
        delay: f.rq,
        children: m
      })
    } return l ? (0, r.jsx)("li", {
    children: (0, r.jsx)(x, {
      item: t,
      index: n,
      wishlistId: a,
      onReorder: d,
      children: j
    })
  }) : (0, r.jsx)("li", {
    children: j
  })
});

function I(e) {
  let {
    items: t,
    profileOwner: n,
    isOwner: o
  } = e, c = p.default.getCurrentUser(), {
    defaultWishlistId: f
  } = (0, a.cj)([m.Z], () => ({
    defaultWishlistId: m.Z.getFirstWishlistId(n.id)
  })), b = (0, g.c)(t, o), {
    isDragging: h
  } = (0, l.f)(e => ({
    isDragging: e.isDragging()
  })), j = i.useCallback((e, n) => {
    if (e === n || null == f || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
    let r = u.Z.getWishlist(f);
    if (null == r) return;
    let i = t[e],
      {
        newWishlistData: l,
        previousSkuId: a,
        nextSkuId: o
      } = (0, d.d)(r, t, e, n);
    s.Z.reorderWishlistItem(f, i.skuId, {
      previousSkuId: a,
      nextSkuId: o,
      newWishlistData: l
    })
  }, [f, t]);
  if (null == c || null == f) return null;
  let x = (0, r.jsx)("ul", {
    className: O.grid,
    children: t.map((e, t) => (0, r.jsx)(v, {
      item: e,
      index: t,
      profileOwner: n,
      isOwner: o,
      wishlistId: f,
      tooltipConfig: b[t],
      isDragging: h,
      onReorder: j
    }, e.skuId))
  });
  return o ? (0, r.jsx)(y.d, {
    emptyListFallbackRef: null,
    children: x
  }) : x
}