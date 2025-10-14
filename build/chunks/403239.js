/** Chunk was on 36073 **/
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
    index: g,
    disableInteraction: f = false
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
  }, [p]), [, y, j] = (0, a.c)({
    type: "WIDGET",
    item: {
      widgetType: d.type,
      index: g,
      widget: d,
      originalIndex: null != g ? g : 0,
      type: "WIDGET"
    },
    canDrag: () => !f,
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
  }, v] = (0, o.L)({
    accept: "WIDGET",
    canDrop: () => !f,
    collect: e => {
      let t = null,
        r = e.getItem();
      return null != r && e.isOver() && e.canDrop() && r.widgetType !== d.type && (t = r.originalIndex), {
        handlerId: e.getHandlerId(),
        dragSourcePosition: t
      }
    },
    drop: e => {
      let t = null != g ? g : 0;
      O(e.index, t), e.index = t
    }
  });
  return null == g || f ? {
    isDragging: false,
    dragSourcePosition: null
  } : (y(r), v(t), {
    isDragging: b && (null == m ? true : m.widgetType) === d.type,
    dragSourcePosition: x
  })
}