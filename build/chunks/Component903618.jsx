/** Chunk was on web.js **/
/** chunk id: 903618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk788868 = require("./788868.js"),
  Chunk298116 = require("./298116.js"),
  Chunk134839 = require("./134839.js"),
  Chunk974704 = require("./974704.js"),
  Chunk703707 = require("./703707.js"),
  Chunk460024 = require("./460024.js"),
  Chunk889056 = require("./889056.js"),
  Chunk579401 = require("./579401.js"),
  Chunk991564 = require("./991564.js"),
  Chunk336417 = require("./336417.js"),
  Chunk790193 = require("./790193.js");
let g = {
    [Chunk788868.o2.STANDARD_BOX]: Chunk889056,
    [Chunk788868.o2.CAKE]: Chunk579401,
    [Chunk788868.o2.CHEST]: Chunk991564,
    [Chunk788868.o2.COFFEE]: Chunk336417,
    [Chunk788868.o2.SNOWGLOBE]: "",
    [Chunk788868.o2.BOX]: "",
    [Chunk788868.o2.CUP]: "",
    [Chunk788868.o2.SEASONAL_CAKE]: Chunk974704,
    [Chunk788868.o2.SEASONAL_CHEST]: Chunk703707,
    [Chunk788868.o2.SEASONAL_COFFEE]: Chunk460024,
    [Chunk788868.o2.SEASONAL_STANDARD_BOX]: Chunk134839,
    [Chunk788868.o2.NITROWEEN_STANDARD]: Chunk790193.A
  },
  E = Chunk64700.forwardRef(function(e, t) {
    let {
      isSelected: n,
      giftStyle: i,
      setSelectedGiftStyle: o,
      onFocus: l,
      onBlur: c
    } = e;
    return (0, r.jsx)(a.DUT, {
      className: s.x6,
      innerRef: t,
      onClick: () => o(i),
      onFocus: l,
      onBlur: c,
      children: (0, r.jsx)("img", {
        style: {
          width: "100%",
          height: "100%"
        },
        alt: "",
        src: g[i],
        className: n ? s.MY : s.dk
      })
    })
  })