/** Chunk was on web.js **/
/** chunk id: 626442, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => s
});
var Chunk73800 = require("./73800.js"),
  Chunk952683 = require("./952683.js"),
  Chunk116805 = require("./116805.js");
let a = e => {
    let t = "translate(".concat(e.x.toFixed(1), "px, ").concat(e.y.toFixed(1), "px)");
    return {
      pointerEvents: "none",
      position: "fixed",
      top: 0,
      left: 0,
      transform: t,
      WebkitTransform: t
    }
  },
  s = () => {
    let e = (0, Chunk73800.useRef)(null),
      t = (0, Chunk952683.f)(t => ({
        currentOffset: (0, o.s)(t, e),
        isDragging: t.isDragging(),
        itemType: t.getItemType(),
        item: t.getItem(),
        monitor: t
      }));
    return exports.isDragging && null !== exports.currentOffset ? {
      display: true,
      itemType: exports.itemType,
      item: exports.item,
      style: a(exports.currentOffset),
      monitor: exports.monitor,
      ref: module
    } : {
      display: false
    }
  }