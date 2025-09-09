/** Chunk was on 46290 **/
/** chunk id: 761374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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

function j(e) {
  var t, n, j, C;
  let {
    id: w,
    widget: N,
    size: Z,
    locked: T,
    padding: P,
    borderWidth: A,
    opacity: k,
    horizontal: D,
    pinned: R,
    anchorTop: L,
    anchorLeft: M,
    showEmpty: z = true
  } = e, U = D ? E.C5.HORIZONTAL : E.C5.VERTICAL, V = U === E.C5.VERTICAL, W = (0, o.e7)([m.Z], () => {
    var e;
    let t = m.Z.getWidget(w);
    return !!(0, E.ZL)(t) && !T && (null == (e = t.meta.showAllStreams) || e)
  }, [w, T]), G = (0, o.e7)([g.Z], () => g.Z.getVoiceChannelId()), F = (0, o.e7)([f.Z], () => f.Z.getChannel(G)), B = (0, o.e7)([h.default], () => h.default.getId()), {
    streamParticipants: H,
    activeStreams: Y,
    participantsVersion: Q
  } = (j = L && V || M && D, C = !L && V || !M && D, (0, o.cj)([p.Z, c.Z], () => {
    if (null == G) return {
      streamParticipants: I,
      participantsVersion: false,
      activeStreams: new Set
    };
    let e = new Set(p.Z.getAllActiveStreamsForChannel(G).map(e => (0, u.V9)(e))),
      t = t => e.has((0, u.V9)(t.stream)),
      n = c.Z.getStreamParticipants(G).filter(e => e.user.id !== B && (!!W || t(e)));
    return n.sort((e, n) => {
      if (j) {
        if (t(e) && !t(n)) return false;
        if (!t(e) && t(n)) return 1
      } else if (C) {
        if (t(e) && !t(n)) return 1;
        if (!t(e) && t(n)) return false
      }
      return e.user.username.localeCompare(n.user.username)
    }), {
      streamParticipants: n,
      activeStreams: e,
      participantsVersion: c.Z.getParticipantsVersion(G)
    }
  }, [G, B, W, j, C])), K = H.length, X = (0, o.e7)([d.Z], () => d.Z.getWindowState(_.$J)), {
    tileWidth: q,
    tileHeight: J,
    widgetWidth: $,
    widgetHeight: ee,
    containerRef: et,
    containerMinMaxSizes: en
  } = (0, b.Bz)({
    tileCount: K,
    padding: P,
    borderWidth: A,
    windowWidth: null == X ? true : X.width,
    windowHeight: null == X ? true : X.height,
    isVertical: V,
    widgetSize: Z
  }), ei = {
    id: w,
    widget: N,
    layout: U,
    participants: H.length,
    padding: P,
    borderWidth: A,
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
    locked: T
  };
  (0, b.Dl)({
    id: w,
    streamParticipants: H,
    layout: U,
    widgetLayoutSpecs: ei
  });
  let er = null == F || 0 === Y.size && T || 0 === K && !T;
  return (r.useEffect(() => {
    a.Z.setGpuBoostRequested(y.zS.OVERLAY_VIDEO_STREAM_RENDERING, !er)
  }, [er]), (0, s.ZP)(() => () => {
    a.Z.setGpuBoostRequested(y.zS.OVERLAY_VIDEO_STREAM_RENDERING, false)
  }), (er || !R) && T) ? null : er && !T ? z ? T ? null : (0, i.jsx)(O.E, {
    emptyText: S.intl.string(S.t["T6+rX1"]),
    icon: l.hGI,
    absolute: true
  }) : null : (0, i.jsx)("div", {
    className: x.goLiveGridContainer,
    style: {
      opacity: k
    },
    ref: et,
    children: (0, i.jsx)(v.Z, {
      widgetId: w,
      tileWidth: q,
      tileHeight: J,
      locked: T,
      layout: U,
      activeStreams: Y,
      streamParticipants: H,
      participantsVersion: Q,
      pinned: R,
      padding: P
    })
  })
}