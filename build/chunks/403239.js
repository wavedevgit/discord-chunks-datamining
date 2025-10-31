/** Chunk was on 47793 **/
/** chunk id: 403239, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => u
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk79116 = require("./79116.js"),
  Chunk100568 = require("./100568.js"),
  Chunk417865 = require("./417865.js"),
  Chunk665379 = require("./665379.js"),
  Chunk592183 = require("./592183.js"),
  Chunk517157 = require("./517157.js");

function u(e) {
  let {
    dropRef: t,
    dragRef: n,
    userId: u,
    widget: d,
    index: f,
    disableInteraction: g = false,
    onReorder: p
  } = e, m = (0, s.Z)(u), {
    isDragging: b,
    currentItem: y
  } = (0, i.f)(e => ({
    isDragging: e.isDragging(),
    currentItem: e.getItem()
  })), h = (0, r.useCallback)((e, t) => {
    let n = m.slice(),
      [r] = n.splice(e, 1);
    n.splice(t, 0, r), c.Z.setPendingWidgets(n)
  }, [m]), [, v, O] = (0, a.c)({
    type: "WIDGET",
    item: {
      widgetType: d.type,
      index: f,
      itemType: "WIDGET",
      itemPreviewProps: {
        widget: d
      }
    },
    canDrag: () => !g,
    collect: e => ({
      handlerId: e.getHandlerId(),
      isDragging: e.isDragging()
    }),
    end: p
  });
  (0, r.useEffect)(() => {
    O((0, o.r)(), {
      captureDraggingState: true
    })
  }, [O]);
  let [{
    dragSourcePosition: j
  }, x] = (0, l.L)({
    accept: "WIDGET",
    canDrop: () => !g,
    collect: e => {
      let t = null,
        n = e.getItem();
      return null != n && e.isOver() && e.canDrop() && n.widgetType !== d.type && (t = n.index), {
        handlerId: e.getHandlerId(),
        dragSourcePosition: t
      }
    },
    drop: e => {
      let t = null != f ? f : 0;
      h(e.index, t), e.index = t
    }
  });
  return null == f || g ? {
    isDragging: false,
    dragSourcePosition: null
  } : (v(n), x(t), {
    isDragging: b && (null == y ? true : y.widgetType) === d.type,
    dragSourcePosition: j
  })
}