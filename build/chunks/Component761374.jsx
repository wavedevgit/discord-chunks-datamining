/** Chunk was on 50751 **/
/** chunk id: 761374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
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

function I(e) {
  var t, n;
  let {
    id: I,
    widget: C,
    size: Z,
    locked: w,
    padding: N,
    borderWidth: T,
    opacity: _,
    horizontal: P,
    pinned: D,
    anchorTop: A,
    anchorLeft: R,
    showEmpty: k = true
  } = e, L = P ? b.C5.HORIZONTAL : b.C5.VERTICAL, M = L === b.C5.VERTICAL, V = (0, l.e7)([m.Z], () => {
    var e;
    let t = m.Z.getWidget(I);
    return !!(0, b.ZL)(t) && !w && (null == (e = t.meta.showAllStreams) || e)
  }, [I, w]), z = (0, l.e7)([g.Z], () => g.Z.getVoiceChannelId()), U = (0, l.e7)([f.Z], () => f.Z.getChannel(z)), {
    streamParticipants: W,
    activeStreams: G,
    participantsVersion: H
  } = function(e, t, n, i, o) {
    let a = (0, l.Wu)([p.Z], () => null == e ? [] : p.Z.getAllActiveStreamsForChannel(e)),
      s = r.useMemo(() => new Set(a.map(e => (0, c.V9)(e))), [a]),
      d = (0, l.e7)([u.Z], () => null == e ? false : u.Z.getParticipantsVersion(e));
    return {
      streamParticipants: (0, l.Wu)([u.Z], () => {
        if (null == e) return [];

        function r(e) {
          return s.has((0, c.V9)(e.stream))
        }
        let l = u.Z.getStreamParticipants(e).filter(e => e.user.id !== t && (!!n || r(e)));
        return l.sort((e, t) => {
          if (i) {
            if (r(e) && !r(t)) return false;
            if (!r(e) && r(t)) return 1
          } else if (o) {
            if (r(e) && !r(t)) return 1;
            if (!r(e) && r(t)) return false
          }
          return e.user.username.localeCompare(t.user.username)
        }), l
      }, [e, s, t, n, i, o]),
      activeStreams: s,
      participantsVersion: d
    }
  }(z, (0, l.e7)([h.default], () => h.default.getId()), V, A && M || R && P, !A && M || !R && P), F = W.length, Y = (0, l.e7)([d.Z], () => d.Z.getWindowState(S.$J), []), {
    tileWidth: B,
    tileHeight: Q,
    widgetWidth: K,
    widgetHeight: X,
    containerRef: q,
    containerMinMaxSizes: J
  } = (0, v.Bz)({
    tileCount: F,
    padding: N,
    borderWidth: T,
    isVertical: M,
    widgetSize: Z
  }), $ = {
    id: I,
    widget: C,
    layout: L,
    participants: W.length,
    padding: N,
    borderWidth: T,
    widgetMinMaxSizes: J,
    containerSize: {
      width: K,
      height: X
    },
    orientedPosition: {
      top: 0,
      left: 0,
      bottom: null != (t = null == Y ? true : Y.height) ? t : X,
      right: null != (n = null == Y ? true : Y.width) ? n : K
    },
    locked: w
  };
  (0, v.Dl)({
    id: I,
    streamParticipants: W,
    layout: L,
    widgetLayoutSpecs: $
  });
  let ee = null == U || 0 === G.size && w || 0 === F && !w;
  return (r.useEffect(() => {
    a.Z.setGpuBoostRequested(O.zS.OVERLAY_VIDEO_STREAM_RENDERING, !ee)
  }, [ee]), (0, s.ZP)(() => () => {
    a.Z.setGpuBoostRequested(O.zS.OVERLAY_VIDEO_STREAM_RENDERING, false)
  }), (ee || !D) && w) ? null : ee && !w ? k ? w ? null : (0, i.jsx)(y.E, {
    emptyText: x.intl.string(x.t["T6+rX1"]),
    icon: o.hGI,
    absolute: true
  }) : null : (0, i.jsx)("div", {
    className: j.goLiveGridContainer,
    style: {
      opacity: _
    },
    ref: q,
    children: (0, i.jsx)(E.Z, {
      widgetId: I,
      tileWidth: B,
      tileHeight: Q,
      locked: w,
      layout: L,
      activeStreams: G,
      streamParticipants: W,
      participantsVersion: H,
      pinned: D,
      padding: N
    })
  })
}