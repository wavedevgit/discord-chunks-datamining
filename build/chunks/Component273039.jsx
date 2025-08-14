/** Chunk was on 1862 **/
/** chunk id: 273039, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk225433 = require("./225433.jsx"),
  Chunk683608 = require("./683608.js");

function c(e) {
  let {
    hasSetEmoji: t,
    onClick: n,
    children: r,
    className: c,
    buttonClassName: d,
    look: u
  } = e, [m, j] = l.useState(false), v = l.useCallback(() => {
    n(), j(false)
  }, [n, j]);
  return (0, i.jsxs)("div", {
    className: o()(a.container, c),
    onMouseEnter: () => {
      if (t) return void j(true);
      j(false)
    },
    onMouseLeave: () => {
      j(false)
    },
    children: [r, t && m ? (0, i.jsx)(s.Z, {
      onClick: v,
      className: o()(a.removeButton, d),
      look: u
    }) : null]
  })
}