/** Chunk was on web.js **/
/** chunk id: 512832, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk602733 = require("./602733.js"),
  Chunk176879 = require("./176879.js"),
  Chunk874139 = require("./874139.jsx"),
  Chunk120209 = require("./120209.js"),
  Chunk228168 = require("./228168.js");

function u(e) {
  let {
    user: t,
    onOpenProfile: n
  } = e, u = i.useCallback(() => {
    null == n || n({
      section: c.oh.WISHLIST
    })
  }, [n]), {
    displayedWishlistItems: d,
    defaultWishlistId: f,
    title: p
  } = (0, o.QX)({
    user: t,
    numItems: o.fA,
    source: a.bd.POPOUT,
    location: "User Profile Popout"
  });
  return null == d || 0 === d.length ? null : (0, r.jsx)(s.Z, {
    profileOwner: t,
    wishlistItems: d,
    wishlistId: f,
    onClick: u,
    cardSize: l.H.SMALL,
    title: p
  })
}