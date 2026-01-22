/** Chunk was on 97492 **/
/** chunk id: 306852, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk31728 = require("./31728.js"),
  Chunk164617 = require("./164617.js"),
  Chunk205297 = require("./205297.jsx"),
  Chunk334463 = require("./334463.js"),
  Chunk175203 = require("./175203.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk697166 = require("./697166.js"),
  Chunk976092 = require("./976092.js");
let A = "CameraPreviewPosition";

function y(e) {
  let {
    width: t,
    onContextMenuParticipant: n,
    height: i,
    channel: y,
    participants: O,
    onSelectParticipant: j
  } = e, [v, x] = function() {
    let [e, t] = l.useState(() => o.w.get(A, h.CUs.BOTTOM_RIGHT));
    return [e, l.useCallback(e => {
      o.w.set(A, e), t(e)
    }, [])]
  }(), E = l.useRef(null), _ = null == y.getGuildId() ? 70 : 50, C = (0, s.bG)([f.A], () => f.A.pipWidth(b.R8.CAMERA_PREVIEW)), S = O.length, I = C * S + 8 * (S - 1), N = l.useMemo(() => ({
    minWidth: b.mn[b.R8.CAMERA_PREVIEW] * S + 8 * (S - 1),
    maxWidth: b.cF[b.R8.CAMERA_PREVIEW] * S + 8 * (S - 1)
  }), [S]);
  l.useLayoutEffect(() => {
    var e;
    null == (e = E.current) || e.ensureIsInPosition()
  }, [O.length]);
  let T = l.useCallback(e => {
      let t = 0 === S ? e : (e - 8 * (S - 1)) / S;
      c.EB(t, b.R8.CAMERA_PREVIEW)
    }, [S]),
    P = l.useCallback((e, t) => {
      x(t)
    }, [x]);
  return (0, r.jsx)("div", {
    className: g.kL,
    children: (0, r.jsx)(d.S, {
      position: v,
      id: 0,
      width: I,
      ref: E,
      onMove: P,
      onResize: T,
      maxX: t,
      maxY: i,
      edgeOffsetTop: _,
      edgeOffsetBottom: 70,
      edgeOffsetLeft: 16,
      edgeOffsetRight: 16,
      resizeConfig: N,
      children: (0, r.jsx)("div", {
        className: g.iA,
        children: O.map(e => (0, r.jsx)(p.Ay, {
          participant: e,
          channel: y,
          onContextMenu: n,
          className: a()(g.Vs, m.a8),
          fit: p.Yl.COVER,
          inCall: true,
          popoutType: u.N.NO_POPOUT,
          width: 160,
          onClick: j
        }, e.id))
      })
    })
  })
}