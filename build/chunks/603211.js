/** Chunk was on 9414 **/
/** chunk id: 603211, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk891371 = require("./891371.js"),
  Chunk692992 = require("./692992.js");

function a(e) {
  let {
    type: t,
    index: n,
    optionId: a,
    onDragStart: o,
    onDragComplete: s,
    onDragReset: c
  } = e, [d, u] = i.useState(false), [, b] = (0, r.c)({
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
    dragSourcePosition: p
  }, m] = (0, l.L)({
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
    drag: b,
    dragSourcePosition: p,
    drop: m,
    setIsDraggable: u
  }
}