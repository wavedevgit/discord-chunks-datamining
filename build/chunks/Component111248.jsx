/** Chunk was on 47840 **/
/** chunk id: 111248, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk523238 = require("./523238.js"),
  Chunk241915 = require("./241915.jsx"),
  Chunk366050 = require("./366050.js"),
  Chunk27457 = require("./27457.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk330831 = require("./330831.js"),
  Chunk315091 = require("./315091.js");
let b = "CameraPreviewPosition";

function C(e) {
  let {
    width: t,
    onContextMenuParticipant: n,
    height: l,
    channel: C,
    participants: y,
    onSelectParticipant: _
  } = e, [v, x] = function() {
    let [e, t] = r.useState(() => s.K.get(b, h.VD2.BOTTOM_RIGHT));
    return [e, r.useCallback(e => {
      s.K.set(b, e), t(e)
    }, [])]
  }(), O = r.useRef(null), j = null == C.getGuildId() ? 70 : 50, E = (0, o.e7)([d.Z], () => d.Z.pipWidth(f.cL.CAMERA_PREVIEW)), S = y.length, P = E * S + 8 * (S - 1), I = r.useMemo(() => ({
    minWidth: f.Rv[f.cL.CAMERA_PREVIEW] * S + 8 * (S - 1),
    maxWidth: f.$i[f.cL.CAMERA_PREVIEW] * S + 8 * (S - 1)
  }), [S]);
  r.useLayoutEffect(() => {
    var e;
    null == (e = O.current) || e.ensureIsInPosition()
  }, [y.length]);
  let Z = r.useCallback(e => {
      let t = 0 === S ? e : (e - 8 * (S - 1)) / S;
      c.d7(t, f.cL.CAMERA_PREVIEW)
    }, [S]),
    T = r.useCallback((e, t) => {
      x(t)
    }, [x]);
  return (0, i.jsx)("div", {
    className: m.container,
    children: (0, i.jsx)(u._, {
      position: v,
      id: 0,
      width: P,
      ref: O,
      onMove: T,
      onResize: Z,
      maxX: t,
      maxY: l,
      edgeOffsetTop: j,
      edgeOffsetBottom: 70,
      edgeOffsetLeft: 16,
      edgeOffsetRight: 16,
      resizeConfig: I,
      children: (0, i.jsx)("div", {
        className: m.tileContainer,
        children: y.map(e => (0, i.jsx)(p.ZP, {
          participant: e,
          channel: C,
          onContextMenu: n,
          className: a()(m.tile, g.elevationHigh),
          fit: p.BP.COVER,
          inCall: true,
          inPopout: false,
          width: 160,
          onClick: _
        }, e.id))
      })
    })
  })
}