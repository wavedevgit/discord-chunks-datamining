/** Chunk was on web.js **/
/** chunk id: 989461, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk594832 = require("./594832.js"),
  Chunk996353 = require("./996353.js"),
  Chunk968975 = require("./968975.jsx"),
  Chunk524380 = require("./524380.js"),
  Chunk518477 = require("./518477.js");

function u(e) {
  let {
    user: t,
    onOpenProfile: n
  } = e, u = i.useCallback(() => {
    null == n || n({
      tabSection: c.RP.WISHLIST
    })
  }, [n]), {
    displayedWishlistItems: d,
    defaultWishlistId: f,
    title: p
  } = (0, s.aO)({
    user: t,
    numItems: s.h,
    source: a.mQ.POPOUT,
    location: "User Profile Popout"
  });
  return null == d || 0 === d.length ? null : (0, r.jsx)(o.A, {
    profileOwner: t,
    wishlistItems: d,
    wishlistId: f,
    onClick: u,
    cardSize: l.Y.SMALL,
    title: p
  })
}