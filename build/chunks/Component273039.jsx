/** Chunk was on 39143 **/
/** chunk id: 273039, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk225433 = require("./225433.jsx"),
  Chunk872194 = require("./872194.js");

function c(e) {
  let {
    hasSetEmoji: n,
    onClick: t,
    children: o,
    className: c,
    buttonClassName: u,
    look: d
  } = e, [m, f] = i.useState(false), j = i.useCallback(() => {
    t(), f(false)
  }, [t, f]);
  return (0, l.jsxs)("div", {
    className: r()(s.container, c),
    onMouseEnter: () => {
      if (n) return void f(true);
      f(false)
    },
    onMouseLeave: () => {
      f(false)
    },
    children: [o, n && m ? (0, l.jsx)(a.Z, {
      onClick: j,
      className: r()(s.removeButton, u),
      look: d
    }) : null]
  })
}