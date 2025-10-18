/** Chunk was on 22325 **/
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
    game: u,
    onReorder: d
  } = e, f = "GAME_COVER_".concat(s), g = r.useCallback((e, t) => {
    (0, o.Eq)(s, e, t)
  }, [s]), [{
    isDragging: p
  }, m, b] = (0, i.c)({
    type: f,
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
    }),
    end: d
  });
  r.useEffect(() => {
    b((0, l.r)(), {
      captureDraggingState: true
    })
  }, [b]);
  let [{
    dragSourcePosition: h
  }, v] = (0, a.L)({
    accept: f,
    drop: e => {
      let t = e.index;
      t !== c && (g(t, c), e.index = c)
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
  return m(t), v(n), {
    isDragging: p,
    dragSourcePosition: h
  }
}