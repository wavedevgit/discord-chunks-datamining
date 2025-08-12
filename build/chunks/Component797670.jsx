/** Chunk was on 20501 **/
/** chunk id: 797670, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk483453 = require("./483453.js");

function d(e) {
  let {
    guild: t,
    size: n
  } = e, r = (0, o.EB)(t, n, false, true), d = (0, o.gM)(t);
  return (0, i.jsx)(l.ZP, {
    className: c.iconContainer,
    mask: l.ZP.Masks.SQUIRCLE,
    width: n,
    height: n,
    children: null != r ? (0, i.jsx)("img", {
      src: r,
      alt: t.name,
      height: n,
      width: n
    }) : (0, i.jsx)("div", {
      className: c.textContainer,
      children: (0, i.jsx)(a.Text, {
        className: s()({
          [c.smallText]: 20 === n
        }),
        color: "text-secondary",
        variant: "text-md/semibold",
        children: d
      })
    })
  })
}