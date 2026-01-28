/** Chunk was on 78528 **/
/** chunk id: 353157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
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

function d(e) {
  let {
    item: t,
    profileOwner: n,
    isHighlighted: d,
    cardSize: p = c.Y.MEDIUM
  } = e, h = t.collectiblesItem;
  switch (h.type) {
    case l.R.PROFILE_EFFECT:
      return (0, r.jsx)("div", {
        className: u.xC,
        children: (0, r.jsx)(o.A, {
          skuId: h.skuId,
          isHighlighted: d,
          removeSetHeight: true
        })
      });
    case l.R.AVATAR_DECORATION:
      return (0, r.jsx)("div", {
        className: u._P,
        children: (0, r.jsx)(s.i, {
          item: h,
          user: n,
          isHighlighted: d,
          avatarSize: i._3J.SIZE_80
        })
      });
    case l.R.NAMEPLATE:
      return (0, r.jsxs)("div", {
        className: u.M4,
        children: [(0, r.jsx)("div", {
          className: u.Qt,
          children: (0, r.jsx)(a.A, {
            user: n,
            nameplate: h,
            isHighlighted: d,
            showPlaceholderUser: true,
            showStatus: true,
            nameplatePreviewSize: "default",
            width: p === c.Y.SMALL ? 136 : 200
          })
        }), (0, r.jsx)("div", {
          className: u.BM,
          "aria-hidden": true,
          children: (0, r.jsx)(a.A, {
            user: n,
            nameplate: h,
            isHighlighted: d,
            showPlaceholderUser: true,
            showStatus: true,
            nameplatePreviewSize: "default",
            width: p === c.Y.SMALL ? 136 : 200
          })
        })]
      });
    default:
      return null
  }
}