/** Chunk was on 44097 **/
/** chunk id: 319396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk454399 = require("./454399.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk602733 = require("./602733.js"),
  Chunk689201 = require("./689201.js"),
  Chunk594174 = require("./594174.js"),
  Chunk621853 = require("./621853.js"),
  Chunk796483 = require("./796483.jsx"),
  Chunk855587 = require("./855587.js");

function g(e) {
  let {
    items: t,
    profileOwner: n,
    isOwner: g
  } = e, p = s.default.getCurrentUser(), {
    defaultWishlistId: m
  } = (0, i.cj)([u.Z], () => ({
    defaultWishlistId: u.Z.getFirstWishlistId(n.id)
  })), b = (0, c.c)(t, g);
  return null == p || null == m ? null : (0, r.jsx)("ul", {
    className: f.grid,
    children: t.map((e, t) => {
      var i, c;
      let s = b[t],
        u = (0, r.jsx)(d.Z, {
          item: e,
          profileOwner: n,
          wishlistId: m,
          isOwner: g
        });
      return s.shouldShow ? null != s.title && null == s.body && null == s.renderIcon ? (0, r.jsx)("li", {
        children: (0, r.jsx)(a.u, {
          text: s.title,
          position: "top",
          asContainer: true,
          delay: o.rq,
          children: u
        })
      }, e.skuId) : (0, r.jsx)("li", {
        children: (0, r.jsx)(l.i, {
          title: s.title,
          body: null != (c = s.body) ? c : "",
          asset: null == (i = s.renderIcon) ? true : i.call(s, e),
          assetSize: o.EU,
          position: "top",
          asContainer: true,
          delay: o.rq,
          children: u
        })
      }, e.skuId) : (0, r.jsx)("li", {
        children: u
      }, e.skuId)
    })
  })
}