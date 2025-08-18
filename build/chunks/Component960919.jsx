/** Chunk was on 89035 **/
/** chunk id: 960919, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk633459 = require("./633459.js");
let Chunk17702 = require("./17702.js"),
  Chunk647894 = require("./647894.js"),
  u = e => {
    let {
      customSize: t,
      shouldUseThemeColor: r = false,
      loading: o,
      className: u
    } = e, p = (0, i.ZP)(), m = r && (0, s.ap)(p) ? d : c;
    return (0, n.jsx)("img", {
      className: a()(l.orbIconSVG, u, {
        [l.loading]: o
      }),
      src: m,
      alt: "",
      style: true !== t ? {
        height: t
      } : true
    })
  }