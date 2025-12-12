/** Chunk was on web.js **/
/** chunk id: 93163, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk85707 = require("./85707.js"),
  Chunk299407 = require("./299407.js");
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
    let e = (0, Chunk473749.useRef)(null),
      t = (0, Chunk85707.f)(t => ({
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