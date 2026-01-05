/** Chunk was on 9414 **/
/** chunk id: 603211, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk17163 = require("./17163.js"),
  Chunk642007 = require("./642007.js");

function a(e) {
  let {
    type: t,
    index: n,
    optionId: a,
    onDragStart: o,
    onDragComplete: s,
    onDragReset: c
  } = e, [d, u] = i.useState(false), [, m] = (0, r.c)({
    type: t,
    item: () => (o(a), {
      id: a,
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
    dragSourcePosition: b
  }, p] = (0, l.L)({
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
      optionId: a
    })
  });
  return {
    drag: m,
    dragSourcePosition: b,
    drop: p,
    setIsDraggable: u
  }
}