/** Chunk was on web.js **/
/** chunk id: 703926, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk474936 = require("./474936.js"),
  Chunk129649 = require("./129649.js"),
  Chunk426831 = require("./426831.js"),
  Chunk257510 = require("./257510.js"),
  Chunk74838 = require("./74838.js"),
  Chunk720834 = require("./720834.js"),
  Chunk385925 = require("./385925.js"),
  Chunk588921 = require("./588921.js"),
  Chunk718720 = require("./718720.js"),
  Chunk721513 = require("./721513.js"),
  Chunk959191 = require("./959191.js");
let g = {
    [Chunk474936.Cj.STANDARD_BOX]: Chunk385925,
    [Chunk474936.Cj.CAKE]: Chunk588921,
    [Chunk474936.Cj.CHEST]: Chunk718720,
    [Chunk474936.Cj.COFFEE]: Chunk721513,
    [Chunk474936.Cj.SNOWGLOBE]: "",
    [Chunk474936.Cj.BOX]: "",
    [Chunk474936.Cj.CUP]: "",
    [Chunk474936.Cj.SEASONAL_CAKE]: Chunk257510,
    [Chunk474936.Cj.SEASONAL_CHEST]: Chunk74838,
    [Chunk474936.Cj.SEASONAL_COFFEE]: Chunk720834,
    [Chunk474936.Cj.SEASONAL_STANDARD_BOX]: Chunk426831,
    [Chunk474936.Cj.NITROWEEN_STANDARD]: Chunk959191.Z
  },
  E = Chunk647438.forwardRef(function(e, t) {
    let {
      isSelected: n,
      giftStyle: i,
      setSelectedGiftStyle: o,
      onFocus: l,
      onBlur: c
    } = e;
    return (0, r.jsx)(a.P3F, {
      className: s.button,
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
        className: n ? s.customGiftBoxHighlighted : s.customGiftBox
      })
    })
  })