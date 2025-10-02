/** Chunk was on 88614 **/
/** chunk id: 960919, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  M: () => u,
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk779802 = require("./779802.js");
let Chunk17702 = require("./17702.js"),
  Chunk647894 = require("./647894.js"),
  u = e => {
    let {
      customSize: t,
      shouldUseThemeColor: r = false,
      loading: i,
      className: u
    } = e, p = (0, o.ZP)(), _ = r && (0, l.ap)(p) ? d : c;
    return (0, n.jsx)("img", {
      className: a()(s.orbIconSVG, u, {
        [s.loading]: i
      }),
      src: _,
      alt: "",
      style: true !== t ? {
        height: t
      } : true
    })
  },
  p = u