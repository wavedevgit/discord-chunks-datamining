/** Chunk was on 13859 **/
/** chunk id: 403239, original params: e,t,r (module,exports,require) **/
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
    dragRef: r,
    userId: u,
    widget: d,
    index: f,
    disableInteraction: g = false
  } = e, p = (0, s.Z)(u), {
    isDragging: b,
    currentItem: m
  } = (0, i.f)(e => ({
    isDragging: e.isDragging(),
    currentItem: e.getItem()
  })), O = (0, n.useCallback)((e, t) => {
    let r = p.slice(),
      [n] = r.splice(e, 1);
    r.splice(t, 0, n), c.Z.setPendingWidgets(r)
  }, [p]), [, y, j] = (0, o.c)({
    type: "WIDGET",
    item: {
      widgetType: d.type,
      index: f,
      widget: d,
      originalIndex: null != f ? f : 0,
      type: "WIDGET"
    },
    canDrag: () => !g,
    collect: e => ({
      handlerId: e.getHandlerId(),
      isDragging: e.isDragging()
    })
  });
  (0, n.useEffect)(() => {
    j((0, l.r)(), {
      captureDraggingState: true
    })
  }, [j]);
  let [{
    dragSourcePosition: x
  }, h] = (0, a.L)({
    accept: "WIDGET",
    canDrop: () => !g,
    collect: e => {
      let t = null,
        r = e.getItem();
      return null != r && e.isOver() && e.canDrop() && r.widgetType !== d.type && (t = r.originalIndex), {
        handlerId: e.getHandlerId(),
        dragSourcePosition: t
      }
    },
    drop: e => {
      let t = null != f ? f : 0;
      O(e.index, t), e.index = t
    }
  });
  return null == f || g ? {
    isDragging: false,
    dragSourcePosition: null
  } : (y(r), h(t), {
    isDragging: b && (null == m ? true : m.widgetType) === d.type,
    dragSourcePosition: x
  })
}