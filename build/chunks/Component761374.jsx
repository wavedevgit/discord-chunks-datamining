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
  Chunk752802 = require("./752802.jsx"),
  Chunk68286 = require("./68286.js"),
  Chunk340101 = require("./340101.js"),
  Chunk501787 = require("./501787.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk491426 = require("./491426.js");

function C(e) {
  var t, n;
  let {
    id: C,
    widget: Z,
    size: N,
    locked: w,
    padding: T,
    borderWidth: _,
    opacity: P,
    horizontal: A,
    pinned: D,
    anchorTop: R,
    anchorLeft: k,
    showEmpty: L = true
  } = e, M = A ? b.C5.HORIZONTAL : b.C5.VERTICAL, V = M === b.C5.VERTICAL, z = (0, l.e7)([m.Z], () => {
    var e;
    let t = m.Z.getWidget(C);
    return !!(0, b.ZL)(t) && !w && (null == (e = t.meta.showAllStreams) || e)
  }, [C, w]), U = (0, l.e7)([g.Z], () => g.Z.getVoiceChannelId()), W = (0, l.e7)([f.Z], () => f.Z.getChannel(U)), {
    streamParticipants: G,
    activeStreams: F,
    participantsVersion: H
  } = function(e, t, n, i, o) {
    let a = (0, l.Wu)([p.Z], () => null == e ? [] : p.Z.getAllActiveStreamsForChannel(e)),
      s = r.useMemo(() => new Set(a.map(e => (0, c.V9)(e))), [a]),
      d = (0, l.e7)([u.Z], () => null == e ? false : u.Z.getParticipantsVersion(e));
    return {
      streamParticipants: (0, l.Wu)([u.Z, p.Z], () => {
        if (null == e) return [];

        function r(e) {
          return s.has((0, c.V9)(e.stream))
        }
        let l = u.Z.getStreamParticipants(e).filter(e => {
          if (e.user.id === t) returnfalse;
          let i = p.Z.getActiveStreamForUser(e.user.id, e.stream.guildId);
          return !(null != i && v.q.has(i.state)) && (!!n || r(e))
        });
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
  }(U, (0, l.e7)([h.default], () => h.default.getId()), z, R && V || k && A, !R && V || !k && A), B = G.length, Y = (0, l.e7)([d.Z], () => d.Z.getWindowState(x.$J), []), {
    tileWidth: Q,
    tileHeight: K,
    widgetWidth: X,
    widgetHeight: J,
    containerRef: q,
    containerMinMaxSizes: $
  } = (0, S.Bz)({
    tileCount: B,
    padding: T,
    borderWidth: _,
    isVertical: V,
    widgetSize: N
  }), ee = {
    id: C,
    widget: Z,
    layout: M,
    participants: G.length,
    padding: T,
    borderWidth: _,
    widgetMinMaxSizes: $,
    containerSize: {
      width: X,
      height: J
    },
    orientedPosition: {
      top: 0,
      left: 0,
      bottom: null != (t = null == Y ? true : Y.height) ? t : J,
      right: null != (n = null == Y ? true : Y.width) ? n : X
    },
    locked: w
  };
  (0, S.Dl)({
    id: C,
    streamParticipants: G,
    layout: M,
    widgetLayoutSpecs: ee
  });
  let et = null == W || 0 === F.size && w || 0 === B && !w;
  return (r.useEffect(() => {
    a.Z.setGpuBoostRequested(y.zS.OVERLAY_VIDEO_STREAM_RENDERING, !et)
  }, [et]), (0, s.ZP)(() => () => {
    a.Z.setGpuBoostRequested(y.zS.OVERLAY_VIDEO_STREAM_RENDERING, false)
  }), (et || !D) && w) ? null : et && !w ? L ? w ? null : (0, i.jsx)(O.E, {
    emptyText: j.intl.string(j.t["T6+rXy"]),
    icon: o.hGI,
    absolute: true
  }) : null : (0, i.jsx)("div", {
    className: I.goLiveGridContainer,
    style: {
      opacity: P
    },
    ref: q,
    children: (0, i.jsx)(E.Z, {
      widgetId: C,
      tileWidth: Q,
      tileHeight: K,
      locked: w,
      layout: M,
      activeStreams: F,
      streamParticipants: G,
      participantsVersion: H,
      pinned: D,
      padding: T
    })
  })
}