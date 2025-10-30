/** Chunk was on 1862 **/
/** chunk id: 273039, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk225433 = require("./225433.jsx"),
  Chunk584644 = require("./584644.js");

function c(e) {
  let {
    hasSetEmoji: t,
    onClick: n,
    children: r,
    className: c,
    buttonClassName: u
  } = e, [d, m] = i.useState(false), j = i.useCallback(() => {
    n(), m(false)
  }, [n, m]);
  return (0, l.jsxs)("div", {
    className: o()(a.container, c),
    onMouseEnter: () => {
      if (t) return void m(true);
      m(false)
    },
    onMouseLeave: () => {
      m(false)
    },
    children: [r, t && d ? (0, l.jsx)(s.Z, {
      onClick: j,
      className: o()(a.removeButton, u)
    }) : null]
  })
}