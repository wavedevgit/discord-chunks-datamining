/** Chunk was on 86642 **/
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
  Chunk519938 = require("./519938.js"),
  Chunk598006 = require("./598006.js"),
  Chunk241915 = require("./241915.jsx"),
  Chunk366050 = require("./366050.js"),
  Chunk27457 = require("./27457.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk330831 = require("./330831.js"),
  Chunk315091 = require("./315091.js");
let y = "CameraPreviewPosition";

function C(e) {
  let {
    width: t,
    onContextMenuParticipant: n,
    height: l,
    channel: C,
    participants: _,
    onSelectParticipant: v
  } = e, [x, O] = function() {
    let [e, t] = r.useState(() => s.K.get(y, h.VD2.BOTTOM_RIGHT));
    return [e, r.useCallback(e => {
      s.K.set(y, e), t(e)
    }, [])]
  }(), E = r.useRef(null), j = null == C.getGuildId() ? 70 : 50, S = (0, o.e7)([p.Z], () => p.Z.pipWidth(m.cL.CAMERA_PREVIEW)), P = _.length, I = S * P + 8 * (P - 1), Z = r.useMemo(() => ({
    minWidth: m.Rv[m.cL.CAMERA_PREVIEW] * P + 8 * (P - 1),
    maxWidth: m.$i[m.cL.CAMERA_PREVIEW] * P + 8 * (P - 1)
  }), [P]);
  r.useLayoutEffect(() => {
    var e;
    null == (e = E.current) || e.ensureIsInPosition()
  }, [_.length]);
  let T = r.useCallback(e => {
      let t = 0 === P ? e : (e - 8 * (P - 1)) / P;
      c.d7(t, m.cL.CAMERA_PREVIEW)
    }, [P]),
    N = r.useCallback((e, t) => {
      O(t)
    }, [O]);
  return (0, i.jsx)("div", {
    className: g.container,
    children: (0, i.jsx)(d._, {
      position: x,
      id: 0,
      width: I,
      ref: E,
      onMove: N,
      onResize: T,
      maxX: t,
      maxY: l,
      edgeOffsetTop: j,
      edgeOffsetBottom: 70,
      edgeOffsetLeft: 16,
      edgeOffsetRight: 16,
      resizeConfig: Z,
      children: (0, i.jsx)("div", {
        className: g.tileContainer,
        children: _.map(e => (0, i.jsx)(f.ZP, {
          participant: e,
          channel: C,
          onContextMenu: n,
          className: a()(g.tile, b.elevationHigh),
          fit: f.BP.COVER,
          inCall: true,
          popoutType: u.P.NO_POPOUT,
          width: 160,
          onClick: v
        }, e.id))
      })
    })
  })
}