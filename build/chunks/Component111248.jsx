/** Chunk was on web.js **/
/** chunk id: 111248, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk519938 = require("./519938.js"),
  Chunk241915 = require("./241915.jsx"),
  Chunk366050 = require("./366050.js"),
  Chunk27457 = require("./27457.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk162004 = require("./162004.js"),
  Chunk210297 = require("./210297.js");
let g = "CameraPreviewPosition",
  E = 160,
  b = 8;

function y() {
  let [e, t] = Chunk73800.useState(() => Chunk433517.K.get(g, Chunk981631.VD2.BOTTOM_RIGHT));
  return [module, Chunk73800.useCallback(e => {
    l.K.set(g, e), t(e)
  }, [])]
}

function O(e, t) {
  return e * t + b * (t - 1)
}

function v(e, t) {
  return 0 === t ? e : (e - b * (t - 1)) / t
}

function I(e) {
  let {
    width: t,
    onContextMenuParticipant: n,
    height: o,
    channel: l,
    participants: _,
    onSelectParticipant: g
  } = e, [b, I] = y(), T = i.useRef(null), S = null == l.getGuildId() ? 70 : 50, A = (0, s.e7)([d.Z], () => d.Z.pipWidth(p.cL.CAMERA_PREVIEW)), N = _.length, C = O(A, N), R = i.useMemo(() => ({
    minWidth: O(p.Rv[p.cL.CAMERA_PREVIEW], N),
    maxWidth: O(p.$i[p.cL.CAMERA_PREVIEW], N)
  }), [N]);
  i.useLayoutEffect(() => {
    var e;
    null == (e = T.current) || e.ensureIsInPosition()
  }, [_.length]);
  let P = i.useCallback(e => {
      let t = v(e, N);
      c.d7(t, p.cL.CAMERA_PREVIEW)
    }, [N]),
    w = i.useCallback((e, t) => {
      I(t)
    }, [I]);
  return (0, r.jsx)("div", {
    className: h.container,
    children: (0, r.jsx)(u._, {
      position: b,
      id: 0,
      width: C,
      ref: T,
      onMove: w,
      onResize: P,
      maxX: t,
      maxY: o,
      edgeOffsetTop: S,
      edgeOffsetBottom: 70,
      edgeOffsetLeft: 16,
      edgeOffsetRight: 16,
      resizeConfig: R,
      children: (0, r.jsx)("div", {
        className: h.tileContainer,
        children: _.map(e => (0, r.jsx)(f.ZP, {
          participant: e,
          channel: l,
          onContextMenu: n,
          className: a()(h.tile, m.elevationHigh),
          fit: f.BP.COVER,
          inCall: true,
          inPopout: false,
          width: E,
          onClick: g
        }, e.id))
      })
    })
  })
}