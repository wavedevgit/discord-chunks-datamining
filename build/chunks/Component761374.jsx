/** Chunk was on 50751 **/
/** chunk id: 761374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk230558 = require("./230558.js");

function j(e) {
  var t, n;
  let {
    id: j,
    widget: _,
    size: Z,
    locked: N,
    padding: w,
    borderWidth: T,
    opacity: P,
    horizontal: A,
    pinned: k,
    anchorTop: D,
    anchorLeft: R,
    showEmpty: L = true
  } = e, M = A ? S.C5.HORIZONTAL : S.C5.VERTICAL, z = M === S.C5.VERTICAL, V = (0, a.e7)([m.Z], () => {
    var e;
    let t = m.Z.getWidget(j);
    return !!(0, S.ZL)(t) && !N && (null == (e = t.meta.showAllStreams) || e)
  }, [j, N]), U = (0, a.e7)([g.Z], () => g.Z.getVoiceChannelId()), W = (0, a.e7)([p.Z], () => p.Z.getChannel(U)), {
    streamParticipants: G,
    activeStreams: F,
    participantsVersion: H
  } = function(e, t, n, i, l) {
    let o = (0, a.Wu)([f.Z], () => null == e ? [] : f.Z.getAllActiveStreamsForChannel(e)),
      s = r.useMemo(() => new Set(o.map(e => (0, u.V9)(e))), [o]),
      d = (0, a.e7)([c.Z], () => null == e ? false : c.Z.getParticipantsVersion(e));
    return {
      streamParticipants: (0, a.Wu)([c.Z, f.Z], () => {
        if (null == e) return [];

        function r(e) {
          return s.has((0, u.V9)(e.stream))
        }
        let a = c.Z.getStreamParticipants(e).filter(e => {
          if (e.user.id === t) returnfalse;
          let i = f.Z.getActiveStreamForUser(e.user.id, e.stream.guildId);
          return !(null != i && v.q.has(i.state)) && (!!n || r(e))
        });
        return a.sort((e, t) => {
          if (i) {
            if (r(e) && !r(t)) return false;
            if (!r(e) && r(t)) return 1
          } else if (l) {
            if (r(e) && !r(t)) return 1;
            if (!r(e) && r(t)) return false
          }
          return e.user.username.localeCompare(t.user.username)
        }), a
      }, [e, s, t, n, i, l]),
      activeStreams: s,
      participantsVersion: d
    }
  }(U, (0, a.e7)([h.default], () => h.default.getId()), V, D && z || R && A, !D && z || !R && A), B = G.length, Y = (0, a.e7)([d.Z], () => d.Z.getWindowState(x.$J), []), {
    tileWidth: Q,
    tileHeight: K,
    widgetWidth: X,
    widgetHeight: J,
    containerRef: q,
    containerMinMaxSizes: $
  } = (0, E.Bz)({
    tileCount: B,
    padding: w,
    borderWidth: T,
    isVertical: z,
    widgetSize: Z
  }), ee = {
    id: j,
    widget: _,
    layout: M,
    participants: G.length,
    padding: w,
    borderWidth: T,
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
    locked: N
  };
  (0, E.Dl)({
    id: j,
    streamParticipants: G,
    layout: M,
    widgetLayoutSpecs: ee
  });
  let et = null == W || 0 === F.size && N || 0 === B && !N;
  return (r.useEffect(() => {
    o.Z.setGpuBoostRequested(b.zS.OVERLAY_VIDEO_STREAM_RENDERING, !et)
  }, [et]), (0, s.ZP)(() => () => {
    o.Z.setGpuBoostRequested(b.zS.OVERLAY_VIDEO_STREAM_RENDERING, false)
  }), (et || !k) && N) ? null : et && !N ? L ? N ? null : (0, i.jsx)(y.E, {
    emptyText: I.intl.string(I.t["T6+rXy"]),
    icon: l.hGI,
    absolute: true
  }) : null : (0, i.jsx)("div", {
    className: C.goLiveGridContainer,
    style: {
      opacity: P
    },
    ref: q,
    children: (0, i.jsx)(O.Z, {
      widgetId: j,
      tileWidth: Q,
      tileHeight: K,
      locked: N,
      layout: M,
      activeStreams: F,
      streamParticipants: G,
      participantsVersion: H,
      pinned: k,
      padding: w
    })
  })
}