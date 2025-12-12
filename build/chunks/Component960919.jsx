/** Chunk was on web.js **/
/** chunk id: 960919, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => d,
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk418616 = require("./418616.js");
let Chunk17702 = require("./17702.js"),
  Chunk647894 = require("./647894.js"),
  d = e => {
    let {
      customSize: t,
      shouldUseThemeColor: n = false,
      loading: i,
      className: d
    } = e, f = (0, s.ZP)(), p = n && (0, o.ap)(f) ? u : c, _ = true !== t ? {
      height: t
    } : true;
    return (0, r.jsx)("img", {
      className: a()(l.orbIconSVG, d, {
        [l.loading]: i
      }),
      src: p,
      alt: "",
      style: _
    })
  },
  f = d