/** Chunk was on 94784 **/
/** chunk id: 960919, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk865184 = require("./865184.js");
let Chunk17702 = require("./17702.js"),
  Chunk647894 = require("./647894.js"),
  u = e => {
    let {
      customSize: n,
      shouldUseThemeColor: t = false,
      loading: a,
      className: u
    } = e, b = (0, s.ZP)(), f = t && (0, o.ap)(b) ? d : l;
    return (0, r.jsx)("img", {
      className: c()(i.orbIconSVG, u, {
        [i.loading]: a
      }),
      src: f,
      alt: "",
      style: true !== n ? {
        height: n
      } : true
    })
  }