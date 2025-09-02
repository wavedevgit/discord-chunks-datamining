/** Chunk was on 8188 **/
/** chunk id: 403239, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk574981 = require("./574981.js"),
  Chunk194630 = require("./194630.js"),
  Chunk665379 = require("./665379.js"),
  Chunk592183 = require("./592183.js"),
  Chunk517157 = require("./517157.js");

function s(e) {
  let {
    dropRef: t,
    dragRef: n,
    userId: s,
    widget: u,
    index: d,
    disableInteraction: f = false
  } = e, g = (0, c.Z)(s), b = (0, r.useCallback)((e, t) => {
    let n = g.slice(),
      [r] = n.splice(e, 1);
    n.splice(t, 0, r), o.Z.setPendingWidgets(n)
  }, [g]), [{
    isDragging: p
  }, m, O] = (0, i.c)({
    type: "WIDGET",
    item: {
      widgetId: u.id,
      index: d,
      widget: u
    },
    canDrag: () => !f,
    collect: e => ({
      handlerId: e.getHandlerId(),
      isDragging: e.isDragging()
    })
  });
  (0, r.useEffect)(() => {
    O((0, a.r)(), {
      captureDraggingState: true
    })
  }, [O]);
  let [j, y] = (0, l.L)({
    accept: "WIDGET",
    canDrop: () => !f,
    collect: e => ({
      handlerId: e.getHandlerId()
    }),
    hover: (e, n) => {
      var r;
      if (f || null == t.current || !n.isOver({
          shallow: true
        })) return;
      let i = e.index,
        l = null != d ? d : 0;
      if (i === l) return;
      let a = null == (r = t.current) ? true : r.getBoundingClientRect(),
        o = (a.bottom - a.top) / 2,
        c = n.getClientOffset();
      if (null == c) return;
      let s = c.y - a.top;
      (!(i < l) || !(s < o)) && (i > l && s > o || (b(i, l), e.index = l))
    }
  });
  return null == d || f ? {
    isDragging: false
  } : (m(n), y(t), {
    isDragging: p
  })
}