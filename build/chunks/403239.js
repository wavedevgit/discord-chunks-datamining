/** Chunk was on 83789 **/
/** chunk id: 403239, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  q: () => d
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk574981 = require("./574981.js"),
  Chunk194630 = require("./194630.js"),
  Chunk665379 = require("./665379.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk592183 = require("./592183.js"),
  Chunk517157 = require("./517157.js");

function d(e) {
  let {
    dropRef: t,
    dragRef: r,
    userId: d,
    widget: f,
    index: g
  } = e, p = (0, u.Z)(d), b = (0, o.e7)([c.default], () => c.default.getCurrentUser()), m = (0, n.useCallback)((e, t) => {
    let r = p.slice(),
      [n] = r.splice(e, 1);
    r.splice(t, 0, n), s.Z.setPendingWidgets(r)
  }, [p]), [{
    isDragging: O
  }, j, y] = (0, i.c)({
    type: "WIDGET",
    item: {
      widgetId: f.id,
      index: g,
      widget: f
    },
    collect: e => ({
      handlerId: e.getHandlerId(),
      isDragging: e.isDragging()
    })
  });
  (0, n.useEffect)(() => {
    y((0, a.r)(), {
      captureDraggingState: true
    })
  }, [y]);
  let [x, v] = (0, l.L)({
    accept: "WIDGET",
    collect: e => ({
      handlerId: e.getHandlerId()
    }),
    hover: (e, r) => {
      var n;
      if (null == t.current || !r.isOver({
          shallow: true
        })) return;
      let i = e.index,
        l = null != g ? g : 0;
      if (i === l) return;
      let a = null == (n = t.current) ? true : n.getBoundingClientRect(),
        o = (a.bottom - a.top) / 2,
        c = r.getClientOffset();
      if (null == c) return;
      let s = c.y - a.top;
      (!(i < l) || !(s < o)) && (i > l && s > o || (m(i, l), e.index = l))
    }
  });
  return null == g ? {
    isDragging: false
  } : ((null == b ? true : b.id) === d && (j(r), v(t)), {
    isDragging: O
  })
}