/** Chunk was on 36073 **/
/** chunk id: 947790, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  g: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk100568 = require("./100568.js"),
  Chunk417865 = require("./417865.js"),
  Chunk665379 = require("./665379.js"),
  Chunk86419 = require("./86419.js");

function c(e) {
  let {
    dragRef: t,
    dropRef: r,
    index: c,
    widgetType: s,
    game: u
  } = e, d = "GAME_COVER_".concat(s), g = n.useCallback((e, t) => {
    (0, l.Eq)(s, e, t)
  }, [s]), [{
    isDragging: f
  }, p, b] = (0, i.c)({
    type: d,
    item: {
      index: c,
      id: u.applicationId,
      itemType: "GAME_COVER",
      gameName: u.gameName,
      imageSrc: u.imageSrc
    },
    collect: e => ({
      handlerId: e.getHandlerId(),
      isDragging: e.isDragging()
    })
  });
  n.useEffect(() => {
    b((0, o.r)(), {
      captureDraggingState: true
    })
  }, [b]);
  let [{
    dragSourcePosition: m
  }, O] = (0, a.L)({
    accept: d,
    drop: e => {
      let t = e.index;
      t !== c && (g(t, c), e.index = c)
    },
    collect: e => {
      let t = e.getItem(),
        r = null;
      return null != t && e.isOver() && e.canDrop() && (r = t.index), {
        handlerId: e.getHandlerId(),
        dragSourcePosition: r
      }
    }
  });
  return p(t), O(r), {
    isDragging: f,
    dragSourcePosition: m
  }
}