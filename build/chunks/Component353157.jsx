/** Chunk was on 13696 **/
/** chunk id: 353157, original params: e,t,r (module,exports,require) **/
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
    profileOwner: r,
    isHighlighted: d,
    cardSize: f = u.Y.MEDIUM
  } = e, m = t.collectiblesItem;
  switch (m.type) {
    case i.R.PROFILE_EFFECT:
      return (0, n.jsx)("div", {
        className: c.xC,
        children: (0, n.jsx)(a.A, {
          skuId: m.skuId,
          isHighlighted: d,
          removeSetHeight: true
        })
      });
    case i.R.AVATAR_DECORATION:
      return (0, n.jsx)("div", {
        className: c._P,
        children: (0, n.jsx)(s.i, {
          item: m,
          user: r,
          isHighlighted: d,
          avatarSize: l._3J.SIZE_80
        })
      });
    case i.R.NAMEPLATE:
      return (0, n.jsxs)("div", {
        className: c.M4,
        children: [(0, n.jsx)("div", {
          className: c.Qt,
          children: (0, n.jsx)(o.A, {
            user: r,
            nameplate: m,
            isHighlighted: d,
            showPlaceholderUser: true,
            showStatus: true,
            nameplatePreviewSize: "default",
            width: f === u.Y.SMALL ? 136 : 200
          })
        }), (0, n.jsx)("div", {
          className: c.BM,
          "aria-hidden": true,
          children: (0, n.jsx)(o.A, {
            user: r,
            nameplate: m,
            isHighlighted: d,
            showPlaceholderUser: true,
            showStatus: true,
            nameplatePreviewSize: "default",
            width: f === u.Y.SMALL ? 136 : 200
          })
        })]
      });
    default:
      return null
  }
}