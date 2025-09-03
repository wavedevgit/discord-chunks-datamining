/** Chunk was on 30397 **/
/** chunk id: 403239, original params: e,t,r (module,exports,require) **/
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
    dragRef: r,
    userId: s,
    widget: u,
    index: d,
    disableInteraction: f = false
  } = e, b = (0, c.Z)(s), g = (0, n.useCallback)((e, t) => {
    let r = b.slice(),
      [n] = r.splice(e, 1);
    r.splice(t, 0, n), l.Z.setPendingWidgets(r)
  }, [b]), [{
    isDragging: p
  }, m, O] = (0, a.c)({
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
  (0, n.useEffect)(() => {
    O((0, i.r)(), {
      captureDraggingState: true
    })
  }, [O]);
  let [y, j] = (0, o.L)({
    accept: "WIDGET",
    canDrop: () => !f,
    collect: e => ({
      handlerId: e.getHandlerId()
    }),
    hover: (e, r) => {
      var n;
      if (f || null == t.current || !r.isOver({
          shallow: true
        })) return;
      let a = e.index,
        o = null != d ? d : 0;
      if (a === o) return;
      let i = null == (n = t.current) ? true : n.getBoundingClientRect(),
        l = (i.bottom - i.top) / 2,
        c = r.getClientOffset();
      if (null == c) return;
      let s = c.y - i.top;
      (!(a < o) || !(s < l)) && (a > o && s > l || (g(a, o), e.index = o))
    }
  });
  return null == d || f ? {
    isDragging: false
  } : (m(r), j(t), {
    isDragging: p
  })
}