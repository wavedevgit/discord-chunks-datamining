/** Chunk was on 1267 **/
/** chunk id: 403239, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  q: () => d
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk323946 = require("./323946.js"),
  Chunk574981 = require("./574981.js"),
  Chunk194630 = require("./194630.js"),
  Chunk665379 = require("./665379.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592183 = require("./592183.js"),
  Chunk517157 = require("./517157.js");

function d(e) {
  let {
    dropRef: t,
    dragRef: r,
    userId: d,
    widget: f,
    index: g,
    disableInteraction: b = false
  } = e, p = (0, u.Z)(d), O = (0, c.zPA)(), {
    isDragging: y,
    currentItem: j
  } = (0, i.f)(e => ({
    isDragging: e.isDragging(),
    currentItem: e.getItem()
  })), m = (0, n.useCallback)((e, t) => {
    let r = p.slice(),
      [n] = r.splice(e, 1);
    r.splice(t, 0, n), s.Z.setPendingWidgets(r)
  }, [p]), [, v, x] = (0, l.c)({
    type: "WIDGET",
    item: {
      widgetId: f.id,
      index: g,
      widget: f,
      originalIndex: null != g ? g : 0
    },
    canDrag: () => !b,
    collect: e => ({
      handlerId: e.getHandlerId(),
      isDragging: e.isDragging()
    })
  });
  (0, n.useEffect)(() => {
    x((0, a.r)(), {
      captureDraggingState: true
    })
  }, [x]);
  let [{
    dragSourcePosition: h
  }, w] = (0, o.L)({
    accept: "WIDGET",
    canDrop: () => !b,
    collect: e => {
      let t = null,
        r = e.getItem();
      return null != r && e.isOver() && e.canDrop() && r.widgetId !== f.id && (t = r.originalIndex), {
        handlerId: e.getHandlerId(),
        dragSourcePosition: t
      }
    },
    drop: e => {
      let t = null != g ? g : 0;
      m(e.index, t), e.index = t
    },
    hover: (e, r) => {
      var n;
      if (b || O || null == t.current || !r.isOver({
          shallow: true
        })) return;
      let i = e.index,
        l = null != g ? g : 0;
      if (i === l) return;
      let o = null == (n = t.current) ? true : n.getBoundingClientRect(),
        a = (o.bottom - o.top) / 2,
        c = r.getClientOffset();
      if (null == c) return;
      let s = c.y - o.top;
      (!(i < l) || !(s < a)) && (i > l && s > a || (m(i, l), e.index = l))
    }
  });
  return null == g || b ? {
    isDragging: false,
    dragSourcePosition: null
  } : (v(r), w(t), {
    isDragging: y && (null == j ? true : j.widgetId) === f.id,
    dragSourcePosition: h
  })
}