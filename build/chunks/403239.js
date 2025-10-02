/** Chunk was on 46592 **/
/** chunk id: 403239, original params: e,t,r (module,exports,require) **/
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
    dragRef: r,
    userId: d,
    widget: f,
    index: g,
    disableInteraction: p = false
  } = e, b = (0, u.Z)(d), O = (0, c.zPA)(), {
    isDragging: m,
    currentItem: y
  } = (0, i.f)(e => ({
    isDragging: e.isDragging(),
    currentItem: e.getItem()
  })), j = (0, n.useCallback)((e, t) => {
    let r = b.slice(),
      [n] = r.splice(e, 1);
    r.splice(t, 0, n), s.Z.setPendingWidgets(r)
  }, [b]), [, v, h] = (0, o.c)({
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
  (0, n.useEffect)(() => {
    h((0, l.r)(), {
      captureDraggingState: true
    })
  }, [h]);
  let [{
    dragSourcePosition: x
  }, _] = (0, a.L)({
    accept: "WIDGET",
    canDrop: () => !p,
    collect: e => {
      let t = null,
        r = e.getItem();
      return null != r && e.isOver() && e.canDrop() && r.widgetType !== f.type && (t = r.originalIndex), {
        handlerId: e.getHandlerId(),
        dragSourcePosition: t
      }
    },
    drop: e => {
      let t = null != g ? g : 0;
      j(e.index, t), e.index = t
    },
    hover: (e, r) => {
      var n;
      if (p || O || null == t.current || !r.isOver({
          shallow: true
        })) return;
      let i = e.index,
        o = null != g ? g : 0;
      if (i === o) return;
      let a = null == (n = t.current) ? true : n.getBoundingClientRect(),
        l = (a.bottom - a.top) / 2,
        c = r.getClientOffset();
      if (null == c) return;
      let s = c.y - a.top;
      (!(i < o) || !(s < l)) && (i > o && s > l || (j(i, o), e.index = o))
    }
  });
  return null == g || p ? {
    isDragging: false,
    dragSourcePosition: null
  } : (v(r), _(t), {
    isDragging: m && (null == y ? true : y.widgetType) === f.type,
    dragSourcePosition: x
  })
}