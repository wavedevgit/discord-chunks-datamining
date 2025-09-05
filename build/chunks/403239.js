/** Chunk was on 1267 **/
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
  } = e, g = (0, c.Z)(s), b = (0, n.useCallback)((e, t) => {
    let r = g.slice(),
      [n] = r.splice(e, 1);
    r.splice(t, 0, n), a.Z.setPendingWidgets(r)
  }, [g]), [{
    isDragging: p
  }, O, y] = (0, i.c)({
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
    y((0, o.r)(), {
      captureDraggingState: true
    })
  }, [y]);
  let [j, m] = (0, l.L)({
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
      let i = e.index,
        l = null != d ? d : 0;
      if (i === l) return;
      let o = null == (n = t.current) ? true : n.getBoundingClientRect(),
        a = (o.bottom - o.top) / 2,
        c = r.getClientOffset();
      if (null == c) return;
      let s = c.y - o.top;
      (!(i < l) || !(s < a)) && (i > l && s > a || (b(i, l), e.index = l))
    }
  });
  return null == d || f ? {
    isDragging: false
  } : (O(r), m(t), {
    isDragging: p
  })
}