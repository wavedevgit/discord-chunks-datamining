/** Chunk was on 13616 **/
/** chunk id: 603211, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk562075 = require("./562075.js"),
  Chunk539202 = require("./539202.js");

function o(e) {
  let {
    type: t,
    index: n,
    optionId: o,
    onDragStart: a,
    onDragComplete: s,
    onDragReset: c
  } = e, [d, u] = i.useState(false), [, p] = (0, r.c)({
    type: t,
    item: () => (a(o), {
      id: o,
      position: n
    }),
    canDrag: () => d,
    collect: e => ({
      isDragging: e.isDragging()
    }),
    end: (e, t) => {
      let n = t.getDropResult();
      if (null == n) return void c();
      s(n.optionId)
    }
  }), [{
    dragSourcePosition: m
  }, b] = (0, l.L)({
    accept: t,
    canDrop: () => true,
    collect: e => {
      let t = e.getItem();
      return null != t && e.isOver() && e.canDrop() ? {
        dragSourcePosition: t.position
      } : {
        dragSourcePosition: null
      }
    },
    drop: () => ({
      optionId: o
    })
  });
  return {
    drag: p,
    dragSourcePosition: m,
    drop: b,
    setIsDraggable: u
  }
}