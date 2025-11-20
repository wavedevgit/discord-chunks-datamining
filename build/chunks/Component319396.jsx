/** Chunk was on 44097 **/
/** chunk id: 319396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk454399 = require("./454399.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk376521 = require("./376521.js"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk621853 = require("./621853.js"),
  Chunk796483 = require("./796483.jsx"),
  Chunk855587 = require("./855587.js");

function p(e) {
  let {
    items: t,
    profileOwner: n,
    isOwner: p
  } = e, m = u.default.getCurrentUser(), {
    defaultWishlistId: b
  } = (0, a.cj)([d.Z], () => ({
    defaultWishlistId: d.Z.getFirstWishlistId(n.id)
  })), h = i.useMemo(() => {
    let e = t.map(e => e.skuProductLine);
    return (0, c.l)(e)
  }, [t]);
  return null == m || null == b ? null : (0, r.jsx)("ul", {
    className: g.grid,
    children: t.map((e, t) => {
      var i;
      let a = h[t],
        c = (0, r.jsx)(f.Z, {
          item: e,
          profileOwner: n,
          wishlistId: b,
          isOwner: p
        });
      return a.shouldShow ? null != a.title && null == a.body && null == a.icon ? (0, r.jsx)("li", {
        children: (0, r.jsx)(o.u, {
          text: a.title,
          position: "top",
          asContainer: true,
          delay: s.rq,
          children: c
        })
      }, e.skuId) : (0, r.jsx)("li", {
        children: (0, r.jsx)(l.i, {
          title: a.title,
          body: null != (i = a.body) ? i : "",
          asset: a.icon,
          assetSize: 24,
          position: "top",
          asContainer: true,
          delay: s.rq,
          children: c
        })
      }, e.skuId) : (0, r.jsx)("li", {
        children: c
      }, e.skuId)
    })
  })
}