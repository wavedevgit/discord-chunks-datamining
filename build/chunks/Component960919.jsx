/** Chunk was on 96910 **/
/** chunk id: 960919, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk475491 = require("./475491.js");
let Chunk17702 = require("./17702.js"),
  Chunk647894 = require("./647894.js"),
  d = e => {
    let {
      customSize: t,
      shouldUseThemeColor: r = false,
      loading: a,
      className: d
    } = e, p = (0, o.ZP)(), b = r && (0, l.ap)(p) ? u : c;
    return (0, n.jsx)("img", {
      className: i()(s.orbIconSVG, d, {
        [s.loading]: a
      }),
      src: b,
      alt: "",
      style: true !== t ? {
        height: t
      } : true
    })
  }