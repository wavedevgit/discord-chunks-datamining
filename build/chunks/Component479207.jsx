/** Chunk was on 71447 **/
/** chunk id: 479207, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => z,
  r: () => U
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

function L(e, t) {
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
let k = Chunk64700.memo(function(e) {
    var t;
    let {
      participant: n,
      channel: r,
      context: l
    } = e, a = null == (t = n.user) ? true : t.id;
    return (0, o.bG)([O.A], () => null != n.user && null != l && null != r && O.A.isLocalVideoDisabled(a, l), [a, n.user, l, r]) ? null : (0, i.jsx)(g.Ay, R({}, e))
  }),
  M = Chunk64700.memo(function(e) {
    let {
      context: t = _.x.DEFAULT,
      participants: l,
      locked: a,
      channel: o,
      width: s,
      height: u,
      shouldDisplay: d
    } = e, p = r.useCallback((e, r) => {
      let l = e.user;
      (0, S.YX)(C.uss.VIDEO, {
        type: S.Z5.CAMERA,
        value: S.IP.SETTINGS_OPENED,
        userId: null == l ? true : l.id
      }), (0, c.L3)(r, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("87997")]).then(n.bind(n, 180812));
        return n => (0, i.jsx)(e, L(R({}, n), {
          user: l,
          mediaEngineContext: t,
          onWatchStream: () => {
            (0, S.YX)(C.uss.VIDEO, {
              type: S.Z5.GO_LIVE,
              value: S.IP.ENABLED,
              userId: null == l ? true : l.id
            })
          }
        }))
      })
    }, [t]), m = (0, S.Dk)(() => new Set(l.map(e => {
      var t;
      return null == (t = e.user) ? true : t.id
    })), [l]);
    r.useEffect(() => {
      d && (0, S.Y)(C.uss.VIDEO, {
        locked: v.default.isInstanceLocked(),
        shownUserIds: Array.from(m),
        liveUserIds: Array.from(m),
        contentInventoryIds: []
      })
    }, [m, d]);
    let g = r.useMemo(() => ({
      width: s,
      height: u
    }), [s, u]);
    return (0, i.jsx)(i.Fragment, {
      children: l.map(e => (0, i.jsx)(k, {
        participant: e,
        width: s,
        className: D.Vs,
        containerStyle: g,
        fit: f.$.COVER,
        channel: o,
        popoutType: h.N.OVERLAY,
        inCall: true,
        noBorder: true,
        onContextMenu: a ? true : p,
        forceIdle: a,
        paused: !d,
        context: t
      }, e.id))
    })
  }),
  V = Chunk64700.memo(function(e) {
    let {
      context: t = _.x.DEFAULT,
      participants: n,
      participantsVersion: l,
      locked: o,
      widget: c,
      channel: u,
      width: d,
      height: p,
      showEmpty: h = true,
      containerRef: f
    } = e, m = "boolean" != typeof c.meta.horizontal || c.meta.horizontal, g = n.length > 0 && null != t && null != u && (!o || c.pinned);
    r.useEffect(() => {
      (0, x.j_)({
        locked: o,
        pinned: c.pinned,
        widget: c.type,
        isPreviewingInGame: false
      }, g)
    }, [o, c, g]);
    let y = r.useMemo(() => ({
        opacity: c.opacity
      }), [c.opacity]),
      A = r.useMemo(() => a()({
        [D.wb]: true,
        [D.Vd]: !m,
        [D.R]: !g && o
      }), [m, g, o]);
    return 0 !== n.length || o ? null == u ? null : (0, i.jsx)("div", {
      ref: f,
      className: A,
      style: y,
      children: (0, i.jsx)(M, {
        context: t,
        participants: n,
        locked: o,
        channel: u,
        width: d,
        height: p,
        shouldDisplay: g,
        participantsVersion: l
      })
    }) : h ? (0, i.jsx)("div", {
      ref: f,
      children: (0, i.jsx)(I.g, {
        emptyText: P.intl.string(P.t.aTiM42),
        icon: s.npA,
        absolute: true
      })
    }) : null
  }),
  U = e => {
    let {
      widget: t,
      computedSize: n,
      borderWidth: i,
      padding: r,
      containerSpecs: l
    } = e;
    if (!(0, w.cv)(t)) return n;
    let a = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
      o = 2 * i + 2 * r,
      s = a ? {
        width: Math.max(n.width, 192),
        height: Math.min(n.height, 240 + o)
      } : {
        height: Math.max(n.height, 192),
        width: Math.min(n.width, 240 + o)
      },
      c = {
        maxWidth: .75 * l.maxX,
        maxHeight: .75 * l.maxY
      };
    return (0, N.$G)(s, c)
  };

function z(e) {
  var t, n, l, a;
  let s = (0, o.bG)([E.A, A.A], () => A.A.getChannel(E.A.getVoiceChannelId())),
    c = 2 * e.padding + 2 * e.borderWidth,
    h = null == s ? true : s.id,
    [f, g] = (0, o.bG)([p.A], () => null == h ? [
      [], 0
    ] : [p.A.getVideoParticipants(h), p.A.getParticipantsVersion(h)], [h], b.D),
    O = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
    {
      width: v = e.width - c,
      height: S = e.height - c,
      ref: x
    } = (0, d.Ay)(e.locked, e.widget.pinned),
    {
      participantTileWidth: I,
      visibleParticipants: N
    } = (0, y.i4)(O ? v : S, f, {
      tileWidth: 192,
      tileMinWidth: 120,
      tileMargin: 4,
      limit: 8,
      cropSelfVideo: true,
      version: g
    }),
    w = (0, o.bG)([m.A], () => m.A.getWindowState(T.f)),
    C = {
      id: e.widget.id,
      containerSize: {
        containerHeight: S,
        containerWidth: v
      },
      sizeOffset: c,
      padding: e.padding,
      borderWidth: e.borderWidth,
      containerSpecs: {
        maxX: null != (t = null == w ? true : w.width) ? t : e.width - c,
        maxY: null != (n = null == w ? true : w.height) ? n : e.height - c,
        minX: 0,
        minY: 0
      },
      widget: e.widget,
      orientedPosition: {
        top: 0,
        left: 0,
        bottom: null != (l = null == w ? true : w.height) ? l : e.height,
        right: null != (a = null == w ? true : w.width) ? a : e.width
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
        widgetLayoutSpecs: o
      } = a.current;
      if (!(t && e.height > e.width || !t && e.width > e.height)) return;
      let {
        width: s,
        height: c
      } = U(L(R({}, o), {
        widget: l,
        operation: j.P.RESIZE_NORTH,
        computedSize: {
          width: r,
          height: i
        },
        originSize: {
          width: r,
          height: i
        }
      }));
      (0, u.Ju)({
        widgetId: n,
        size: {
          fixed: true,
          width: s,
          height: c
        }
      })
    }, [t])
  }({
    horizontal: O,
    widget: e.widget,
    widgetLayoutSpecs: C
  }), (0, i.jsx)(V, L(R({}, e), {
    channel: s,
    participants: N,
    participantsVersion: g,
    width: O ? I : null != v ? v : e.width,
    height: O ? null != S ? S : e.height : I,
    containerRef: x
  }))
}