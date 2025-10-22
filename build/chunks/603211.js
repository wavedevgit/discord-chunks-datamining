/** Chunk was on 86736 **/
/** chunk id: 603211, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk100568 = require("./100568.js"),
  Chunk417865 = require("./417865.js");

function a(e) {
  let {
    type: t,
    index: n,
    optionId: a,
    onDragStart: o,
    onDragComplete: s,
    onDragReset: c
  } = e, [d, u] = i.useState(false), [, p] = (0, r.c)({
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
      optionId: a
    })
  });
  return {
    drag: p,
    dragSourcePosition: m,
    drop: b,
    setIsDraggable: u
  }
}