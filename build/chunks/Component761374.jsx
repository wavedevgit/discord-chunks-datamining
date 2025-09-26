/** Chunk was on 50751 **/
/** chunk id: 761374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk13245 = require("./13245.js"),
  Chunk493773 = require("./493773.js"),
  Chunk358221 = require("./358221.js"),
  Chunk569545 = require("./569545.js"),
  Chunk522474 = require("./522474.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk355863 = require("./355863.js"),
  Chunk944486 = require("./944486.js"),
  Chunk837268 = require("./837268.js"),
  Chunk804570 = require("./804570.jsx"),
  Chunk350663 = require("./350663.jsx"),
  Chunk68286 = require("./68286.js"),
  Chunk340101 = require("./340101.js"),
  Chunk501787 = require("./501787.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk965365 = require("./965365.js");
let I = [];

function C(e) {
  var t, n, C, Z;
  let {
    id: w,
    widget: N,
    size: T,
    locked: _,
    padding: P,
    borderWidth: D,
    opacity: A,
    horizontal: R,
    pinned: k,
    anchorTop: L,
    anchorLeft: M,
    showEmpty: V = true
  } = e, z = R ? S.C5.HORIZONTAL : S.C5.VERTICAL, U = z === S.C5.VERTICAL, W = (0, l.e7)([m.Z], () => {
    var e;
    let t = m.Z.getWidget(w);
    return !!(0, S.ZL)(t) && !_ && (null == (e = t.meta.showAllStreams) || e)
  }, [w, _]), G = (0, l.e7)([g.Z], () => g.Z.getVoiceChannelId()), H = (0, l.e7)([f.Z], () => f.Z.getChannel(G)), F = (0, l.e7)([h.default], () => h.default.getId()), {
    streamParticipants: Y,
    activeStreams: B,
    participantsVersion: Q
  } = (C = L && U || M && R, Z = !L && U || !M && R, (0, l.cj)([p.Z, u.Z], () => {
    if (null == G) return {
      streamParticipants: I,
      participantsVersion: false,
      activeStreams: new Set
    };
    let e = new Set(p.Z.getAllActiveStreamsForChannel(G).map(e => (0, c.V9)(e))),
      t = t => e.has((0, c.V9)(t.stream)),
      n = u.Z.getStreamParticipants(G).filter(e => e.user.id !== F && (!!W || t(e)));
    return n.sort((e, n) => {
      if (C) {
        if (t(e) && !t(n)) return false;
        if (!t(e) && t(n)) return 1
      } else if (Z) {
        if (t(e) && !t(n)) return 1;
        if (!t(e) && t(n)) return false
      }
      return e.user.username.localeCompare(n.user.username)
    }), {
      streamParticipants: n,
      activeStreams: e,
      participantsVersion: u.Z.getParticipantsVersion(G)
    }
  }, [G, F, W, C, Z])), K = Y.length, X = (0, l.e7)([d.Z], () => d.Z.getWindowState(b.$J), []), {
    tileWidth: q,
    tileHeight: J,
    widgetWidth: $,
    widgetHeight: ee,
    containerRef: et,
    containerMinMaxSizes: en
  } = (0, E.Bz)({
    tileCount: K,
    padding: P,
    borderWidth: D,
    isVertical: U,
    widgetSize: T
  }), ei = {
    id: w,
    widget: N,
    layout: z,
    participants: Y.length,
    padding: P,
    borderWidth: D,
    widgetMinMaxSizes: en,
    containerSize: {
      width: $,
      height: ee
    },
    orientedPosition: {
      top: 0,
      left: 0,
      bottom: null != (t = null == X ? true : X.height) ? t : ee,
      right: null != (n = null == X ? true : X.width) ? n : $
    },
    locked: _
  };
  (0, E.Dl)({
    id: w,
    streamParticipants: Y,
    layout: z,
    widgetLayoutSpecs: ei
  });
  let er = null == H || 0 === B.size && _ || 0 === K && !_;
  return (r.useEffect(() => {
    a.Z.setGpuBoostRequested(O.zS.OVERLAY_VIDEO_STREAM_RENDERING, !er)
  }, [er]), (0, s.ZP)(() => () => {
    a.Z.setGpuBoostRequested(O.zS.OVERLAY_VIDEO_STREAM_RENDERING, false)
  }), (er || !k) && _) ? null : er && !_ ? V ? _ ? null : (0, i.jsx)(y.E, {
    emptyText: x.intl.string(x.t["T6+rX1"]),
    icon: o.hGI,
    absolute: true
  }) : null : (0, i.jsx)("div", {
    className: j.goLiveGridContainer,
    style: {
      opacity: A
    },
    ref: et,
    children: (0, i.jsx)(v.Z, {
      widgetId: w,
      tileWidth: q,
      tileHeight: J,
      locked: _,
      layout: z,
      activeStreams: B,
      streamParticipants: Y,
      participantsVersion: Q,
      pinned: k,
      padding: P
    })
  })
}