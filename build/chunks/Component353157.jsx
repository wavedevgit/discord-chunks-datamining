/** Chunk was on web.js **/
/** chunk id: 353157, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk575593 = require("./575593.js"),
  Chunk397927 = require("./397927.js"),
  Chunk929283 = require("./929283.jsx"),
  Chunk550111 = require("./550111.jsx"),
  Chunk331402 = require("./331402.jsx"),
  Chunk242640 = require("./242640.jsx"),
  Chunk752276 = require("./752276.js");
let d = 136,
  f = 200;

function p(e) {
  let {
    item: t,
    profileOwner: n,
    isHighlighted: p,
    cardSize: _ = c.Y.MEDIUM
  } = e, h = t.collectiblesItem;
  switch (h.type) {
    case i.R.PROFILE_EFFECT:
      return (0, r.jsx)("div", {
        className: u.xC,
        children: (0, r.jsx)(l.A, {
          skuId: h.skuId,
          isHighlighted: p,
          removeSetHeight: true
        })
      });
    case i.R.AVATAR_DECORATION:
      return (0, r.jsx)("div", {
        className: u._P,
        children: (0, r.jsx)(o.i, {
          item: h,
          user: n,
          isHighlighted: p,
          avatarSize: a._3J.SIZE_80
        })
      });
    case i.R.NAMEPLATE:
      return (0, r.jsxs)("div", {
        className: u.M4,
        children: [(0, r.jsx)("div", {
          className: u.Qt,
          children: (0, r.jsx)(s.A, {
            user: n,
            nameplate: h,
            isHighlighted: p,
            showPlaceholderUser: true,
            showStatus: true,
            nameplatePreviewSize: "default",
            width: _ === c.Y.SMALL ? d : f
          })
        }), (0, r.jsx)("div", {
          className: u.BM,
          "aria-hidden": true,
          children: (0, r.jsx)(s.A, {
            user: n,
            nameplate: h,
            isHighlighted: p,
            showPlaceholderUser: true,
            showStatus: true,
            nameplatePreviewSize: "default",
            width: _ === c.Y.SMALL ? d : f
          })
        })]
      });
    default:
      return null
  }
}