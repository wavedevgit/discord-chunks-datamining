/** Chunk was on 97887 **/
/** chunk id: 306852, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
    participants: _,
    onSelectParticipant: O
  } = e, [j, v] = function() {
    let [e, t] = l.useState(() => o.w.get(A, f.CUs.BOTTOM_RIGHT));
    return [e, l.useCallback(e => {
      o.w.set(A, e), t(e)
    }, [])]
  }(), x = l.useRef(null), E = null == y.getGuildId() ? 70 : 50, C = (0, a.bG)([p.A], () => p.A.pipWidth(g.R8.CAMERA_PREVIEW)), S = _.length, I = C * S + 8 * (S - 1), N = l.useMemo(() => ({
    minWidth: g.mn[g.R8.CAMERA_PREVIEW] * S + 8 * (S - 1),
    maxWidth: g.cF[g.R8.CAMERA_PREVIEW] * S + 8 * (S - 1)
  }), [S]);
  l.useLayoutEffect(() => {
    var e;
    null == (e = x.current) || e.ensureIsInPosition()
  }, [_.length]);
  let T = l.useCallback(e => {
      let t = 0 === S ? e : (e - 8 * (S - 1)) / S;
      c.EB(t, g.R8.CAMERA_PREVIEW)
    }, [S]),
    P = l.useCallback((e, t) => {
      v(t)
    }, [v]);
  return (0, r.jsx)("div", {
    className: m.kL,
    children: (0, r.jsx)(d.S, {
      position: j,
      id: 0,
      width: I,
      ref: x,
      onMove: P,
      onResize: T,
      maxX: t,
      maxY: i,
      edgeOffsetTop: E,
      edgeOffsetBottom: 70,
      edgeOffsetLeft: 16,
      edgeOffsetRight: 16,
      resizeConfig: N,
      children: (0, r.jsx)("div", {
        className: m.iA,
        children: _.map(e => (0, r.jsx)(h.Ay, {
          participant: e,
          channel: y,
          onContextMenu: n,
          className: s()(m.Vs, b.a8),
          fit: h.Yl.COVER,
          inCall: true,
          popoutType: u.N.NO_POPOUT,
          width: 160,
          onClick: O
        }, e.id))
      })
    })
  })
}