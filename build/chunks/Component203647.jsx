/** Chunk was on 51693 **/
/** chunk id: 203647, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => w
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
  Chunk178213 = require("./178213.js"),
  Chunk594832 = require("./594832.js"),
  Chunk86638 = require("./86638.jsx"),
  Chunk46537 = require("./46537.js"),
  Chunk287809 = require("./287809.js"),
  Chunk622543 = require("./622543.js"),
  Chunk451395 = require("./451395.jsx"),
  Chunk823016 = require("./823016.jsx"),
  Chunk18983 = require("./18983.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk935915 = require("./935915.js");

function _(e) {
  let {
    item: t,
    index: n,
    wishlistId: l,
    onReorder: i,
    children: a
  } = e, {
    manageFocusOnReorder: o
  } = (0, j.r)();
  return (0, r.jsx)(O.mG, {
    index: n,
    itemId: String(t.skuId),
    listType: String(l),
    itemType: "WISHLIST_ITEM",
    itemPreviewProps: {
      item: t
    },
    "aria-label": x.intl.formatToPlainString(x.t["7SnyMA"], {
      positionNumber: n + 1
    }),
    onReorder: i,
    onEnd: () => o(String(t.skuId)),
    className: v.C,
    dropBeforeClassName: v.A,
    dropAfterClassName: v.Ze,
    draggingClassName: v.Id,
    children: (0, r.jsx)("div", {
      className: v.An,
      children: a
    })
  })
}
let I = Chunk64700.memo(function(e) {
  let {
    item: t,
    index: n,
    profileOwner: i,
    isOwner: a,
    wishlistId: c,
    tooltipConfig: u,
    isDragging: d,
    onReorder: m
  } = e, {
    registerDragHandleRef: b
  } = (0, j.r)(), y = (0, f.G)("user_profile_wishlist_grid"), x = l.useMemo(() => a ? (0, r.jsx)(O.jV, {
    buttonRef: b(String(t.skuId)),
    className: v.BU,
    onFocus: e => e.stopPropagation()
  }) : true, [a, b, t.skuId]), I = l.useMemo(() => {
    if (y) return (0, r.jsx)(g.A, {
      item: t,
      wishlistOwner: i,
      wishlistId: c,
      isDragging: d,
      dragHandle: x,
      tooltipConfig: u
    });
    let e = (0, r.jsx)(h.A, {
        item: t,
        profileOwner: i,
        wishlistId: c,
        isOwner: a,
        isDragging: d,
        dragHandle: x
      }),
      n = e;
    if (u.shouldShow && !d)
      if (null != u.title && null == u.body && null == u.renderIcon) n = (0, r.jsx)(s.m, {
        text: u.title,
        position: "top",
        asContainer: true,
        delay: p.Zh,
        children: e
      });
      else {
        var l, f;
        n = (0, r.jsx)(o.u, {
          title: u.title,
          body: null != (l = u.body) ? l : "",
          asset: null == (f = u.renderIcon) ? true : f.call(u, t),
          assetSize: p.Q8,
          position: "top",
          asContainer: true,
          delay: p.Zh,
          children: e
        })
      } return n
  }, [y, t, i, d, x, u, a, c]);
  return a ? (0, r.jsx)("li", {
    children: (0, r.jsx)(_, {
      item: t,
      index: n,
      wishlistId: c,
      onReorder: m,
      children: I
    })
  }) : (0, r.jsx)("li", {
    children: I
  })
});

function w(e) {
  let {
    items: t,
    profileOwner: n,
    isOwner: o
  } = e, s = b.default.getCurrentUser(), {
    defaultWishlistId: f
  } = (0, a.cf)([y.A], () => ({
    defaultWishlistId: y.A.getFirstWishlistId(n.id)
  })), p = (0, m.u)(t, o), {
    isDragging: g
  } = (0, i.V)(e => ({
    isDragging: e.isDragging()
  })), O = l.useCallback((e, n) => {
    if (e === n || null == f || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
    let r = u.A.getWishlist(f);
    if (null == r) return;
    let l = t[e],
      {
        newWishlistData: i,
        previousSkuId: a,
        nextSkuId: o
      } = (0, d.A)(r, t, e, n);
    c.A.reorderWishlistItem(f, l.skuId, {
      previousSkuId: a,
      nextSkuId: o,
      newWishlistData: i
    })
  }, [f, t]);
  if (null == s || null == f) return null;
  let h = (0, r.jsx)("ul", {
    className: v.Vg,
    children: t.map((e, t) => (0, r.jsx)(I, {
      item: e,
      index: t,
      profileOwner: n,
      isOwner: o,
      wishlistId: f,
      tooltipConfig: p[t],
      isDragging: g,
      onReorder: O
    }, e.skuId))
  });
  return o ? (0, r.jsx)(j.B, {
    emptyListFallbackRef: null,
    children: h
  }) : h
}