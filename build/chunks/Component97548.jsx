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
  var t, n, I, j;
  let T, C, N, {
      id: w,
      widget: P,
      size: D,
      locked: R,
      padding: k,
      borderWidth: M,
      opacity: L,
      horizontal: U,
      pinned: G,
      anchorTop: V,
      anchorLeft: z,
      showEmpty: F = true
    } = e,
    H = U ? O.IV.HORIZONTAL : O.IV.VERTICAL,
    Y = H === O.IV.VERTICAL,
    W = (0, l.bG)([g.A], () => {
      var e;
      let t = g.A.getWidget(w);
      return !!(0, O.dO)(t) && !R && (null == (e = t.meta.showAllStreams) || e)
    }, [w, R]),
    K = (0, l.bG)([m.A], () => m.A.getVoiceChannelId()),
    B = (0, l.bG)([f.A], () => f.A.getChannel(K)),
    Z = (0, l.bG)([p.default], () => p.default.getId()),
    {
      streamParticipants: X,
      activeStreams: J,
      participantsVersion: Q
    } = (I = V && Y || z && U, j = !V && Y || !z && U, T = (0, l.yK)([h.A], () => null == K ? [] : h.A.getAllActiveStreamsForChannel(K)), C = r.useMemo(() => new Set(T.map(e => (0, c._z)(e))), [T]), N = (0, l.bG)([u.A], () => null == K ? false : u.A.getParticipantsVersion(K)), {
      streamParticipants: (0, l.yK)([u.A, h.A], () => {
        if (null == K) return [];

        function e(e) {
          return C.has((0, c._z)(e.stream))
        }
        let t = u.A.getStreamParticipants(K).filter(t => {
          if (t.user.id === Z) returnfalse;
          let n = h.A.getActiveStreamForUser(t.user.id, t.stream.guildId);
          return !(null != n && b.O.has(n.state)) && (!!W || e(t))
        });
        return t.sort((t, n) => {
          if (I) {
            if (e(t) && !e(n)) return false;
            if (!e(t) && e(n)) return 1
          } else if (j) {
            if (e(t) && !e(n)) return 1;
            if (!e(t) && e(n)) return false
          }
          return t.user.username.localeCompare(n.user.username)
        }), t
      }, [K, C, Z, W, I, j]),
      activeStreams: C,
      participantsVersion: N
    }),
    q = X.length,
    $ = (0, l.bG)([d.A], () => d.A.getWindowState(x.f), []),
    {
      tileWidth: ee,
      tileHeight: et,
      widgetWidth: en,
      widgetHeight: ei,
      containerRef: er,
      containerMinMaxSizes: el
    } = (0, E.K2)({
      tileCount: q,
      padding: k,
      borderWidth: M,
      isVertical: Y,
      widgetSize: D
    }),
    ea = {
      id: w,
      widget: P,
      layout: H,
      participants: X.length,
      padding: k,
      borderWidth: M,
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
  (0, E.k1)({
    id: w,
    streamParticipants: X,
    layout: H,
    widgetLayoutSpecs: ea
  });
  let es = null == B || 0 === J.size && R || 0 === q && !R;
  return (r.useEffect(() => {
    s.A.setGpuBoostRequested(y.y7.OVERLAY_VIDEO_STREAM_RENDERING, !es)
  }, [es]), (0, o.Ay)(() => () => {
    s.A.setGpuBoostRequested(y.y7.OVERLAY_VIDEO_STREAM_RENDERING, false)
  }), (es || !G) && R) ? null : es && !R ? F ? R ? null : (0, i.jsx)(A.g, {
    emptyText: _.intl.string(_.t["T6+rXy"]),
    icon: a.Fzq,
    absolute: true
  }) : null : (0, i.jsx)("div", {
    className: S.u,
    style: {
      opacity: L
    },
    ref: er,
    children: (0, i.jsx)(v.A, {
      widgetId: w,
      tileWidth: ee,
      tileHeight: et,
      locked: R,
      layout: H,
      activeStreams: J,
      streamParticipants: X,
      participantsVersion: Q,
      pinned: G,
      padding: k
    })
  })
}