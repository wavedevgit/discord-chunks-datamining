/** Chunk was on web.js **/
/** chunk id: 55960, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk688807 = require("./688807.js"),
  Chunk73289 = require("./73289.js");
let o = e => {
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
    let e = (0, r.useRef)(null),
      t = (0, i.V)(t => ({
        currentOffset: (0, a.D)(t, e),
        isDragging: t.isDragging(),
        itemType: t.getItemType(),
        item: t.getItem(),
        monitor: t
      }));
    return t.isDragging && null !== t.currentOffset ? {
      display: true,
      itemType: t.itemType,
      item: t.item,
      style: o(t.currentOffset),
      monitor: t.monitor,
      ref: e
    } : {
      display: false
    }
  }