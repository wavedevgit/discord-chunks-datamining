/** Chunk was on 91275 **/
/** chunk id: 960919, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  M: () => d,
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk633459 = require("./633459.js");
let Chunk17702 = require("./17702.js"),
  Chunk647894 = require("./647894.js"),
  d = e => {
    let {
      customSize: t,
      shouldUseThemeColor: n = false,
      loading: i,
      className: d
    } = e, m = (0, o.ZP)(), p = n && (0, l.ap)(m) ? u : c;
    return (0, r.jsx)("img", {
      className: a()(s.orbIconSVG, d, {
        [s.loading]: i
      }),
      src: p,
      alt: "",
      style: true !== t ? {
        height: t
      } : true
    })
  },
  m = d