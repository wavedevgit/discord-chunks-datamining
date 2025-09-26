/** Chunk was on 73696 **/
/** chunk id: 403239, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => d
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk79116 = require("./79116.js"),
  Chunk100568 = require("./100568.js"),
  Chunk417865 = require("./417865.js"),
  Chunk665379 = require("./665379.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592183 = require("./592183.js"),
  Chunk517157 = require("./517157.js");

function d(e) {
  let {
    dropRef: t,
    dragRef: n,
    userId: d,
    widget: f,
    index: g,
    disableInteraction: p = false
  } = e, b = (0, u.Z)(d), m = (0, c.zPA)(), {
    isDragging: O,
    currentItem: y
  } = (0, i.f)(e => ({
    isDragging: e.isDragging(),
    currentItem: e.getItem()
  })), j = (0, r.useCallback)((e, t) => {
    let n = b.slice(),
      [r] = n.splice(e, 1);
    n.splice(t, 0, r), s.Z.setPendingWidgets(n)
  }, [b]), [, h, v] = (0, a.c)({
    type: "WIDGET",
    item: {
      widgetType: f.type,
      index: g,
      widget: f,
      originalIndex: null != g ? g : 0
    },
    canDrag: () => !p,
    collect: e => ({
      handlerId: e.getHandlerId(),
      isDragging: e.isDragging()
    })
  });
  (0, r.useEffect)(() => {
    v((0, l.r)(), {
      captureDraggingState: true
    })
  }, [v]);
  let [{
    dragSourcePosition: x
  }, _] = (0, o.L)({
    accept: "WIDGET",
    canDrop: () => !p,
    collect: e => {
      let t = null,
        n = e.getItem();
      return null != n && e.isOver() && e.canDrop() && n.widgetType !== f.type && (t = n.originalIndex), {
        handlerId: e.getHandlerId(),
        dragSourcePosition: t
      }
    },
    drop: e => {
      let t = null != g ? g : 0;
      j(e.index, t), e.index = t
    },
    hover: (e, n) => {
      var r;
      if (p || m || null == t.current || !n.isOver({
          shallow: true
        })) return;
      let i = e.index,
        a = null != g ? g : 0;
      if (i === a) return;
      let o = null == (r = t.current) ? true : r.getBoundingClientRect(),
        l = (o.bottom - o.top) / 2,
        c = n.getClientOffset();
      if (null == c) return;
      let s = c.y - o.top;
      (!(i < a) || !(s < l)) && (i > a && s > l || (j(i, a), e.index = a))
    }
  });
  return null == g || p ? {
    isDragging: false,
    dragSourcePosition: null
  } : (h(n), _(t), {
    isDragging: O && (null == y ? true : y.widgetType) === f.type,
    dragSourcePosition: x
  })
}