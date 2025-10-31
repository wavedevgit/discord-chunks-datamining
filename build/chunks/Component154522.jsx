/** Chunk was on 78431 **/
/** chunk id: 154522, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Q: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk267101 = require("./267101.js"),
  Chunk675297 = require("./675297.jsx"),
  Chunk891561 = require("./891561.jsx"),
  Chunk333866 = require("./333866.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk451489 = require("./451489.js");

function g(e) {
  let {
    guildId: t,
    productId: r
  } = e, {
    listingsLoaded: o
  } = (0, u.eD)(t), s = (0, u.ue)(t), g = i.useRef(null), {
    sortOption: O
  } = (0, p.s)(), h = i.useMemo(() => (function(e, t) {
    let r, n;
    switch (t) {
      case f.zJ.NAME:
        r = e => e.name.toLowerCase(), n = "asc";
        break;
      case f.zJ.PRICE_ASC:
        r = "price_tier", n = "asc";
        break;
      case f.zJ.PRICE_DESC:
        r = "price_tier", n = "desc";
        break;
      case f.zJ.NEWEST_ARRIVALS:
        r = "published_at", n = "desc";
        break;
      default:
        return e
    }
    return c().orderBy(e, [r], [n])
  })(s, O), [s, O]);
  return o ? (0, n.jsx)("ul", {
    className: j.cardContainer,
    "aria-label": b.intl.string(b.t.qe4kTa),
    children: h.map(e => (0, n.jsx)("li", {
      className: j.card,
      children: (0, n.jsx)("div", {
        className: l()(j.cardContent, {
          [j.selectedCard]: e.id === r
        }),
        ref: e.id === r ? g : true,
        onLoad: () => {
          let t = g.current;
          null != t && e.id === r && (t.scrollIntoView({
            behavior: "smooth",
            block: "center"
          }), setTimeout(() => {
            t.classList.remove(j.selectedCard)
          }, 2e3))
        },
        children: (0, n.jsx)(C.H, {
          guildProductListing: e,
          guildId: t,
          location: d.Z.GUILD_SHOP_PAGE,
          shouldShowFullDescriptionButton: false,
          hideRoleTag: true,
          lineClamp: 2,
          cardWidth: 332,
          cardHeight: 347,
          thumbnailHeight: 187,
          descriptionTextVariant: "text-xs/normal",
          showOpaqueBackground: true
        }, e.id)
      }, e.id)
    }, e.id))
  }) : (0, n.jsx)(a.$jN, {})
}