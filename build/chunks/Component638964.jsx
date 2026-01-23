/** Chunk was on 78870 **/
/** chunk id: 638964, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  h: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  c = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk250627 = require("./250627.js"),
  Chunk284605 = require("./284605.jsx"),
  Chunk558060 = require("./558060.jsx"),
  Chunk284683 = require("./284683.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk77142 = require("./77142.js");

function O(e) {
  let {
    guildId: t,
    productId: r
  } = e, {
    listingsLoaded: o
  } = (0, u.bb)(t), s = (0, u.fZ)(t), O = i.useRef(null), {
    sortOption: g
  } = (0, f.R)(), h = i.useMemo(() => (function(e, t) {
    let r, n;
    switch (t) {
      case C.p$.NAME:
        r = e => e.name.toLowerCase(), n = "asc";
        break;
      case C.p$.PRICE_ASC:
        r = "price_tier", n = "asc";
        break;
      case C.p$.PRICE_DESC:
        r = "price_tier", n = "desc";
        break;
      case C.p$.NEWEST_ARRIVALS:
        r = "published_at", n = "desc";
        break;
      default:
        return e
    }
    return c().orderBy(e, [r], [n])
  })(s, g), [s, g]);
  return o ? (0, n.jsx)("ul", {
    className: j.Ui,
    "aria-label": b.intl.string(b.t.qe4kTa),
    children: h.map(e => (0, n.jsx)("li", {
      className: j.Nr,
      children: (0, n.jsx)("div", {
        className: l()(j.Ux, {
          [j.Oj]: e.id === r
        }),
        ref: e.id === r ? O : true,
        onLoad: () => {
          let t = O.current;
          null != t && e.id === r && (t.scrollIntoView({
            behavior: "smooth",
            block: "center"
          }), setTimeout(() => {
            t.classList.remove(j.Oj)
          }, 2e3))
        },
        children: (0, n.jsx)(p.i, {
          guildProductListing: e,
          guildId: t,
          location: d.A.GUILD_SHOP_PAGE,
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
  }) : (0, n.jsx)(a.y$y, {})
}