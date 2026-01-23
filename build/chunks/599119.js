/** Chunk was on 21968 **/
/** chunk id: 599119, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk131346 = require("./131346.js"),
  Chunk744818 = require("./744818.js");

function a(e) {
  let {
    type: t,
    index: n,
    optionId: a,
    onDragStart: s,
    onDragComplete: o,
    onDragReset: c
  } = e, [d, u] = i.useState(false), [, p] = (0, r.i)({
    type: t,
    item: () => (s(a), {
      id: a,
      position: n
    }),
    canDrag: () => d,
    collect: e => ({
      isDragging: e.isDragging()
    }),
    end: (e, t) => {
      let n = t.getDropResult();
      null == n ? c() : o(n.optionId)
    }
  }), [{
    dragSourcePosition: m
  }, g] = (0, l.H)({
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
    drop: g,
    setIsDraggable: u
  }
}