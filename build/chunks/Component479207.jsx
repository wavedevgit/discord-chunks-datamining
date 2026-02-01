/** Chunk was on 71447 **/
/** chunk id: 479207, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => V,
  r: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk391973 = require("./391973.js"),
  Chunk765671 = require("./765671.js"),
  Chunk313961 = require("./313961.js"),
  Chunk164617 = require("./164617.js"),
  Chunk401901 = require("./401901.jsx"),
  Chunk87001 = require("./87001.js"),
  Chunk175203 = require("./175203.jsx"),
  Chunk163432 = require("./163432.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk309010 = require("./309010.js"),
  Chunk256415 = require("./256415.js"),
  Chunk996439 = require("./996439.js"),
  Chunk810412 = require("./810412.js"),
  Chunk799808 = require("./799808.js"),
  Chunk129537 = require("./129537.jsx"),
  Chunk412477 = require("./412477.jsx"),
  Chunk916494 = require("./916494.js"),
  Chunk897720 = require("./897720.js"),
  Chunk392164 = require("./392164.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk384339 = require("./384339.js");

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let M = Chunk64700.memo(function(e) {
    var t;
    let {
      participant: n,
      channel: r,
      context: l
    } = e, a = null == (t = n.user) ? true : t.id;
    return (0, s.bG)([v.A], () => null != n.user && null != l && null != r && v.A.isLocalVideoDisabled(a, l), [a, n.user, l, r]) ? null : (0, i.jsx)(m.Ay, R({}, e))
  }),
  L = Chunk64700.memo(function(e) {
    let {
      context: t = w.x.DEFAULT,
      participants: l,
      locked: a,
      channel: s,
      width: o,
      height: c,
      shouldDisplay: d
    } = e, h = r.useCallback((e, r) => {
      let l = e.user;
      (0, x.YX)(N.uss.VIDEO, {
        type: x.Z5.CAMERA,
        value: x.IP.SETTINGS_OPENED,
        userId: null == l ? true : l.id
      }), (0, u.L3)(r, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("87997"), n.e("99871")]).then(n.bind(n, 180812));
        return n => (0, i.jsx)(e, k(R({}, n), {
          user: l,
          mediaEngineContext: t,
          onWatchStream: () => {
            (0, x.YX)(N.uss.VIDEO, {
              type: x.Z5.GO_LIVE,
              value: x.IP.ENABLED,
              userId: null == l ? true : l.id
            })
          }
        }))
      })
    }, [t]), g = (0, x.Dk)(() => new Set(l.map(e => {
      var t;
      return null == (t = e.user) ? true : t.id
    })), [l]);
    r.useEffect(() => {
      d && (0, x.Y)(N.uss.VIDEO, {
        locked: E.default.isInstanceLocked(),
        shownUserIds: Array.from(g),
        liveUserIds: Array.from(g),
        contentInventoryIds: []
      })
    }, [g, d]);
    let m = r.useMemo(() => ({
      width: o,
      height: c
    }), [o, c]);
    return (0, i.jsx)(i.Fragment, {
      children: l.map(e => (0, i.jsx)(M, {
        participant: e,
        width: o,
        className: D.Vs,
        containerStyle: m,
        fit: f.$.COVER,
        channel: s,
        popoutType: p.N.OVERLAY,
        inCall: true,
        noBorder: true,
        onContextMenu: a ? true : h,
        forceIdle: a,
        paused: !d,
        context: t
      }, e.id))
    })
  }),
  U = Chunk64700.memo(function(e) {
    let {
      context: t = w.x.DEFAULT,
      participants: n,
      participantsVersion: l,
      locked: s,
      widget: u,
      channel: c,
      width: d,
      height: h,
      showEmpty: p = true,
      containerRef: f
    } = e, g = "boolean" != typeof u.meta.horizontal || u.meta.horizontal, m = n.length > 0 && null != t && null != c && (!s || u.pinned);
    r.useEffect(() => {
      (0, _.j_)({
        locked: s,
        pinned: u.pinned,
        widget: u.type,
        isPreviewingInGame: false
      }, m)
    }, [s, u, m]);
    let y = r.useMemo(() => ({
        opacity: u.opacity
      }), [u.opacity]),
      A = r.useMemo(() => a()({
        [D.wb]: true,
        [D.Vd]: !g,
        [D.R]: !m && s
      }), [g, m, s]);
    return 0 !== n.length || s ? null == c ? null : (0, i.jsx)("div", {
      ref: f,
      className: A,
      style: y,
      children: (0, i.jsx)(L, {
        context: t,
        participants: n,
        locked: s,
        channel: c,
        width: d,
        height: h,
        shouldDisplay: m,
        participantsVersion: l
      })
    }) : p ? (0, i.jsx)("div", {
      ref: f,
      children: (0, i.jsx)(I.g, {
        emptyText: P.intl.string(P.t.aTiM42),
        icon: o.npA,
        absolute: true
      })
    }) : null
  }),
  G = e => {
    let {
      widget: t,
      computedSize: n,
      borderWidth: i,
      padding: r,
      containerSpecs: l
    } = e;
    if (!(0, T.cv)(t)) return n;
    let a = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
      s = 2 * i + 2 * r,
      o = a ? {
        width: Math.max(n.width, 192),
        height: Math.min(n.height, 240 + s)
      } : {
        height: Math.max(n.height, 192),
        width: Math.min(n.width, 240 + s)
      },
      u = {
        maxWidth: .75 * l.maxX,
        maxHeight: .75 * l.maxY
      };
    return (0, j.$G)(o, u)
  };

function V(e) {
  var t, n, l, a;
  let o = (0, s.bG)([b.A, A.A], () => A.A.getChannel(b.A.getVoiceChannelId())),
    u = 2 * e.padding + 2 * e.borderWidth,
    p = null == o ? true : o.id,
    [f, m] = (0, s.bG)([h.A], () => null == p ? [
      [], 0
    ] : [h.A.getVideoParticipants(p), h.A.getParticipantsVersion(p)], [p], O.D),
    v = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
    {
      width: E = e.width - u,
      height: x = e.height - u,
      ref: _
    } = (0, d.Ay)(e.locked, e.widget.pinned),
    {
      participantTileWidth: I,
      visibleParticipants: j
    } = (0, y.i4)(v ? E : x, f, {
      tileWidth: 192,
      tileMinWidth: 120,
      tileMargin: 4,
      limit: 8,
      cropSelfVideo: true,
      version: m
    }),
    T = (0, s.bG)([g.A], () => g.A.getWindowState(C.f)),
    N = {
      id: e.widget.id,
      containerSize: {
        containerHeight: x,
        containerWidth: E
      },
      sizeOffset: u,
      padding: e.padding,
      borderWidth: e.borderWidth,
      containerSpecs: {
        maxX: null != (t = null == T ? true : T.width) ? t : e.width - u,
        maxY: null != (n = null == T ? true : T.height) ? n : e.height - u,
        minX: 0,
        minY: 0
      },
      widget: e.widget,
      orientedPosition: {
        top: 0,
        left: 0,
        bottom: null != (l = null == T ? true : T.height) ? l : e.height,
        right: null != (a = null == T ? true : T.width) ? a : e.width
      }
    };
  return ! function(e) {
    let {
      horizontal: t,
      widget: n,
      widgetLayoutSpecs: i
    } = e, l = {
      id: n.id,
      size: n.size,
      containerWidth: i.containerSize.containerWidth,
      containerHeight: i.containerSize.containerHeight,
      widget: n,
      widgetLayoutSpecs: i
    }, a = r.useRef(l);
    r.useLayoutEffect(() => void(a.current = l)), r.useLayoutEffect(() => {
      let {
        size: e,
        id: n,
        containerWidth: i,
        containerHeight: r,
        widget: l,
        widgetLayoutSpecs: s
      } = a.current;
      if (!(t && e.height > e.width || !t && e.width > e.height)) return;
      let {
        width: o,
        height: u
      } = G(k(R({}, s), {
        widget: l,
        operation: S.P.RESIZE_NORTH,
        computedSize: {
          width: r,
          height: i
        },
        originSize: {
          width: r,
          height: i
        }
      }));
      (0, c.Ju)({
        widgetId: n,
        size: {
          fixed: true,
          width: o,
          height: u
        }
      })
    }, [t])
  }({
    horizontal: v,
    widget: e.widget,
    widgetLayoutSpecs: N
  }), (0, i.jsx)(U, k(R({}, e), {
    channel: o,
    participants: j,
    participantsVersion: m,
    width: v ? I : null != E ? E : e.width,
    height: v ? null != x ? x : e.height : I,
    containerRef: _
  }))
}