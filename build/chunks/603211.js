/** Chunk was on 23682 **/
n.d(t, {
  Z: () => l
}), n(47120);
var r = n(192379),
  i = n(999153),
  o = n(584922);

function l(e) {
  let {
    type: t,
    index: n,
    optionId: l,
    onDragStart: a,
    onDragComplete: s,
    onDragReset: c
  } = e, [d, u] = r.useState(!1), [, p] = (0, i.c)({
    type: t,
    item: () => (a(l), {
      id: l,
      position: n
    }),
    canDrag: () => d,
    collect: e => ({
      isDragging: e.isDragging()
    }),
    end: (e, t) => {
      let n = t.getDropResult();
      if (null == n) {
        c();
        return
      }
      s(n.optionId)
    }
  }), [{
    dragSourcePosition: m
  }, b] = (0, o.L)({
    accept: t,
    canDrop: () => !0,
    collect: e => {
      let t = e.getItem();
      return null != t && e.isOver() && e.canDrop() ? {
        dragSourcePosition: t.position
      } : {
        dragSourcePosition: null
      }
    },
    drop: () => ({
      optionId: l
    })
  });
  return {
    drag: p,
    dragSourcePosition: m,
    drop: b,
    setIsDraggable: u
  }
}