/** Chunk was on 81985 **/
/** chunk id: 111248, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk519938 = require("./519938.js"),
  Chunk598006 = require("./598006.js"),
  Chunk241915 = require("./241915.jsx"),
  Chunk366050 = require("./366050.js"),
  Chunk27457 = require("./27457.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk29005 = require("./29005.js"),
  Chunk533348 = require("./533348.js");
let y = "CameraPreviewPosition";

function v(e) {
  let {
    width: t,
    onContextMenuParticipant: n,
    height: l,
    channel: v,
    participants: O,
    onSelectParticipant: j
  } = e, [x, C] = function() {
    let [e, t] = i.useState(() => s.K.get(y, h.VD2.BOTTOM_RIGHT));
    return [e, i.useCallback(e => {
      s.K.set(y, e), t(e)
    }, [])]
  }(), E = i.useRef(null), S = null == v.getGuildId() ? 70 : 50, _ = (0, o.e7)([p.Z], () => p.Z.pipWidth(g.cL.CAMERA_PREVIEW)), I = O.length, P = _ * I + 8 * (I - 1), Z = i.useMemo(() => ({
    minWidth: g.Rv[g.cL.CAMERA_PREVIEW] * I + 8 * (I - 1),
    maxWidth: g.$i[g.cL.CAMERA_PREVIEW] * I + 8 * (I - 1)
  }), [I]);
  i.useLayoutEffect(() => {
    var e;
    null == (e = E.current) || e.ensureIsInPosition()
  }, [O.length]);
  let N = i.useCallback(e => {
      let t = 0 === I ? e : (e - 8 * (I - 1)) / I;
      c.d7(t, g.cL.CAMERA_PREVIEW)
    }, [I]),
    T = i.useCallback((e, t) => {
      C(t)
    }, [C]);
  return (0, r.jsx)("div", {
    className: m.container,
    children: (0, r.jsx)(d._, {
      position: x,
      id: 0,
      width: P,
      ref: E,
      onMove: T,
      onResize: N,
      maxX: t,
      maxY: l,
      edgeOffsetTop: S,
      edgeOffsetBottom: 70,
      edgeOffsetLeft: 16,
      edgeOffsetRight: 16,
      resizeConfig: Z,
      children: (0, r.jsx)("div", {
        className: m.tileContainer,
        children: O.map(e => (0, r.jsx)(f.ZP, {
          participant: e,
          channel: v,
          onContextMenu: n,
          className: a()(m.tile, b.elevationHigh),
          fit: f.BP.COVER,
          inCall: true,
          popoutType: u.P.NO_POPOUT,
          width: 160,
          onClick: j
        }, e.id))
      })
    })
  })
}