/** Chunk was on 22477 **/
/** chunk id: 364504, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk687173 = require("./687173.jsx"),
  Chunk871123 = require("./871123.js"),
  Chunk44724 = require("./44724.js"),
  Chunk228053 = require("./228053.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk248710 = require("./248710.js");

function p() {
  (0, c.default)({
    guildId: (0, o.zf)()
  })
}

function h(e) {
  let {
    handleOpenUserProfileModal: t,
    markAsDismissed: n
  } = e, {
    analyticsLocations: o
  } = (0, i.Ay)([r.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
  return (0, a.jsxs)(s.A, {
    heading: u.intl.string(u.t["vy/61K"]),
    subheading: u.intl.string(u.t.tEee9t),
    markAsDismissed: n,
    className: m.Zj,
    contentClassName: m.hQ,
    height: 560,
    children: [(0, a.jsx)(d.A, {
      analyticsLocations: o,
      handleOpenUserProfileModal: t,
      numWishlistItemsToRecommend: 9
    }), (0, a.jsx)("div", {
      className: m.UD,
      children: (0, a.jsx)(l.$nd, {
        variant: "primary",
        fullWidth: true,
        text: u.intl.string(u.t.rg9FQp),
        onClick: p
      })
    })]
  })
}