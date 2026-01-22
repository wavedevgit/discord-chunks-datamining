/** Chunk was on 38663 **/
/** chunk id: 203647, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk688807 = require("./688807.js"),
  Chunk311907 = require("./311907.js"),
  Chunk459192 = require("./459192.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk808247 = require("./808247.js"),
  Chunk107563 = require("./107563.js"),
  Chunk840411 = require("./840411.js"),
  Chunk594832 = require("./594832.js"),
  Chunk46537 = require("./46537.js"),
  Chunk287809 = require("./287809.js"),
  Chunk622543 = require("./622543.js"),
  Chunk451395 = require("./451395.jsx"),
  Chunk823016 = require("./823016.jsx"),
  Chunk18983 = require("./18983.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk935915 = require("./935915.js");

function h(e) {
  let {
    item: t,
    index: n,
    wishlistId: l,
    onReorder: i,
    children: a
  } = e, {
    manageFocusOnReorder: s
  } = (0, y.r)();
  return (0, r.jsx)(m.mG, {
    index: n,
    itemId: String(t.skuId),
    listType: String(l),
    itemType: "WISHLIST_ITEM",
    itemPreviewProps: {
      item: t
    },
    "aria-label": j.intl.formatToPlainString(j.t["7SnyMA"], {
      positionNumber: n + 1
    }),
    onReorder: i,
    onEnd: () => s(String(t.skuId)),
    className: x.C,
    dropBeforeClassName: x.A,
    dropAfterClassName: x.Ze,
    draggingClassName: x.Id,
    children: (0, r.jsx)("div", {
      className: x.An,
      children: a
    })
  })
}
let v = Chunk64700.memo(function(e) {
  let {
    item: t,
    index: n,
    profileOwner: l,
    isOwner: i,
    wishlistId: a,
    tooltipConfig: c,
    isDragging: u,
    onReorder: d
  } = e, {
    registerDragHandleRef: p
  } = (0, y.r)(), b = i ? (0, r.jsx)(m.jV, {
    buttonRef: p(String(t.skuId)),
    className: x.BU,
    onFocus: e => e.stopPropagation()
  }) : true, g = (0, r.jsx)(O.A, {
    item: t,
    profileOwner: l,
    wishlistId: a,
    isOwner: i,
    isDragging: u,
    dragHandle: b
  }), j = g;
  if (c.shouldShow && !u)
    if (null != c.title && null == c.body && null == c.renderIcon) j = (0, r.jsx)(o.m, {
      text: c.title,
      position: "top",
      asContainer: true,
      delay: f.Zh,
      children: g
    });
    else {
      var v, A;
      j = (0, r.jsx)(s.u, {
        title: c.title,
        body: null != (v = c.body) ? v : "",
        asset: null == (A = c.renderIcon) ? true : A.call(c, t),
        assetSize: f.Q8,
        position: "top",
        asContainer: true,
        delay: f.Zh,
        children: g
      })
    } return i ? (0, r.jsx)("li", {
    children: (0, r.jsx)(h, {
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

function A(e) {
  let {
    items: t,
    profileOwner: n,
    isOwner: s
  } = e, o = b.default.getCurrentUser(), {
    defaultWishlistId: f
  } = (0, a.cf)([g.A], () => ({
    defaultWishlistId: g.A.getFirstWishlistId(n.id)
  })), m = (0, p.u)(t, s), {
    isDragging: O
  } = (0, i.V)(e => ({
    isDragging: e.isDragging()
  })), j = l.useCallback((e, n) => {
    if (e === n || null == f || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
    let r = u.A.getWishlist(f);
    if (null == r) return;
    let l = t[e],
      {
        newWishlistData: i,
        previousSkuId: a,
        nextSkuId: s
      } = (0, d.A)(r, t, e, n);
    c.A.reorderWishlistItem(f, l.skuId, {
      previousSkuId: a,
      nextSkuId: s,
      newWishlistData: i
    })
  }, [f, t]);
  if (null == o || null == f) return null;
  let h = (0, r.jsx)("ul", {
    className: x.Vg,
    children: t.map((e, t) => (0, r.jsx)(v, {
      item: e,
      index: t,
      profileOwner: n,
      isOwner: s,
      wishlistId: f,
      tooltipConfig: m[t],
      isDragging: O,
      onReorder: j
    }, e.skuId))
  });
  return s ? (0, r.jsx)(y.B, {
    emptyListFallbackRef: null,
    children: h
  }) : h
}