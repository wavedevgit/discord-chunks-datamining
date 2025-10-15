/** Chunk was on 3091 **/
/** chunk id: 947790, original params: e,t,n (module,exports,require) **/
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
    dropRef: n,
    index: c,
    widgetType: s,
    game: u
  } = e, d = "GAME_COVER_".concat(s), f = r.useCallback((e, t) => {
    (0, o.Eq)(s, e, t)
  }, [s]), [{
    isDragging: g
  }, p, m] = (0, i.c)({
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
  r.useEffect(() => {
    m((0, l.r)(), {
      captureDraggingState: true
    })
  }, [m]);
  let [{
    dragSourcePosition: b
  }, h] = (0, a.L)({
    accept: d,
    drop: e => {
      let t = e.index;
      t !== c && (f(t, c), e.index = c)
    },
    collect: e => {
      let t = e.getItem(),
        n = null;
      return null != t && e.isOver() && e.canDrop() && (n = t.index), {
        handlerId: e.getHandlerId(),
        dragSourcePosition: n
      }
    }
  });
  return p(t), h(n), {
    isDragging: g,
    dragSourcePosition: b
  }
}