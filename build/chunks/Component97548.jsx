/** Chunk was on 71447 **/
/** chunk id: 97548, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk684013 = require("./684013.js"),
  Chunk964486 = require("./964486.js"),
  Chunk313961 = require("./313961.js"),
  Chunk652896 = require("./652896.js"),
  Chunk87001 = require("./87001.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk555528 = require("./555528.js"),
  Chunk309010 = require("./309010.js"),
  Chunk41984 = require("./41984.js"),
  Chunk412477 = require("./412477.jsx"),
  Chunk75280 = require("./75280.jsx"),
  Chunk433560 = require("./433560.jsx"),
  Chunk324093 = require("./324093.js"),
  Chunk897720 = require("./897720.js"),
  Chunk392164 = require("./392164.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk780682 = require("./780682.js");

function I(e) {
  var t, n, I, N;
  let w, T, C, {
      id: _,
      widget: P,
      size: D,
      locked: R,
      padding: L,
      borderWidth: k,
      opacity: M,
      horizontal: V,
      pinned: U,
      anchorTop: z,
      anchorLeft: G,
      showEmpty: H = true
    } = e,
    Y = V ? b.IV.HORIZONTAL : b.IV.VERTICAL,
    F = Y === b.IV.VERTICAL,
    K = (0, l.bG)([m.A], () => {
      var e;
      let t = m.A.getWidget(_);
      return !!(0, b.dO)(t) && !R && (null == (e = t.meta.showAllStreams) || e)
    }, [_, R]),
    Z = (0, l.bG)([g.A], () => g.A.getVoiceChannelId()),
    W = (0, l.bG)([f.A], () => f.A.getChannel(Z)),
    B = (0, l.bG)([h.default], () => h.default.getId()),
    {
      streamParticipants: X,
      activeStreams: Q,
      participantsVersion: J
    } = (I = z && F || G && V, N = !z && F || !G && V, w = (0, l.yK)([p.A], () => null == Z ? [] : p.A.getAllActiveStreamsForChannel(Z)), T = r.useMemo(() => new Set(w.map(e => (0, u._z)(e))), [w]), C = (0, l.bG)([c.A], () => null == Z ? false : c.A.getParticipantsVersion(Z)), {
      streamParticipants: (0, l.yK)([c.A, p.A], () => {
        if (null == Z) return [];

        function e(e) {
          return T.has((0, u._z)(e.stream))
        }
        let t = c.A.getStreamParticipants(Z).filter(t => {
          if (t.user.id === B) returnfalse;
          let n = p.A.getActiveStreamForUser(t.user.id, t.stream.guildId);
          return !(null != n && E.O.has(n.state)) && (!!K || e(t))
        });
        return t.sort((t, n) => {
          if (I) {
            if (e(t) && !e(n)) return false;
            if (!e(t) && e(n)) return 1
          } else if (N) {
            if (e(t) && !e(n)) return 1;
            if (!e(t) && e(n)) return false
          }
          return t.user.username.localeCompare(n.user.username)
        }), t
      }, [Z, T, B, K, I, N]),
      activeStreams: T,
      participantsVersion: C
    }),
    q = X.length,
    $ = (0, l.bG)([d.A], () => d.A.getWindowState(S.f), []),
    {
      tileWidth: ee,
      tileHeight: et,
      widgetWidth: en,
      widgetHeight: ei,
      containerRef: er,
      containerMinMaxSizes: el
    } = (0, v.K2)({
      tileCount: q,
      padding: L,
      borderWidth: k,
      isVertical: F,
      widgetSize: D
    }),
    ea = {
      id: _,
      widget: P,
      layout: Y,
      participants: X.length,
      padding: L,
      borderWidth: k,
      widgetMinMaxSizes: el,
      containerSize: {
        width: en,
        height: ei
      },
      orientedPosition: {
        top: 0,
        left: 0,
        bottom: null != (t = null == $ ? true : $.height) ? t : ei,
        right: null != (n = null == $ ? true : $.width) ? n : en
      },
      locked: R
    };
  (0, v.k1)({
    id: _,
    streamParticipants: X,
    layout: Y,
    widgetLayoutSpecs: ea
  });
  let eo = null == W || 0 === Q.size && R || 0 === q && !R;
  return (r.useEffect(() => {
    o.A.setGpuBoostRequested(y.y7.OVERLAY_VIDEO_STREAM_RENDERING, !eo)
  }, [eo]), (0, s.Ay)(() => () => {
    o.A.setGpuBoostRequested(y.y7.OVERLAY_VIDEO_STREAM_RENDERING, false)
  }), (eo || !U) && R) ? null : eo && !R ? H ? R ? null : (0, i.jsx)(A.g, {
    emptyText: x.intl.string(x.t["T6+rXy"]),
    icon: a.Fzq,
    absolute: true
  }) : null : (0, i.jsx)("div", {
    className: j.u,
    style: {
      opacity: M
    },
    ref: er,
    children: (0, i.jsx)(O.A, {
      widgetId: _,
      tileWidth: ee,
      tileHeight: et,
      locked: R,
      layout: Y,
      activeStreams: Q,
      streamParticipants: X,
      participantsVersion: J,
      pinned: U,
      padding: L
    })
  })
}