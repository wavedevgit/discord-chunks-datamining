/** Chunk was on 71447 **/
/** chunk id: 479207, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => U,
  r: () => V
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
    return (0, o.bG)([O.A], () => null != n.user && null != l && null != r && O.A.isLocalVideoDisabled(a, l), [a, n.user, l, r]) ? null : (0, i.jsx)(m.Ay, R({}, e))
  }),
  M = Chunk64700.memo(function(e) {
    let {
      context: t = N.x.DEFAULT,
      participants: l,
      locked: a,
      channel: o,
      width: s,
      height: c,
      shouldDisplay: d
    } = e, h = r.useCallback((e, r) => {
      let l = e.user;
      (0, _.YX)(w.uss.VIDEO, {
        type: _.Z5.CAMERA,
        value: _.IP.SETTINGS_OPENED,
        userId: null == l ? true : l.id
      }), (0, u.L3)(r, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("87997"), n.e("99871")]).then(n.bind(n, 180812));
        return n => (0, i.jsx)(e, L(R({}, n), {
          user: l,
          mediaEngineContext: t,
          onWatchStream: () => {
            (0, _.YX)(w.uss.VIDEO, {
              type: _.Z5.GO_LIVE,
              value: _.IP.ENABLED,
              userId: null == l ? true : l.id
            })
          }
        }))
      })
    }, [t]), g = (0, _.Dk)(() => new Set(l.map(e => {
      var t;
      return null == (t = e.user) ? true : t.id
    })), [l]);
    r.useEffect(() => {
      d && (0, _.Y)(w.uss.VIDEO, {
        locked: b.default.isInstanceLocked(),
        shownUserIds: Array.from(g),
        liveUserIds: Array.from(g),
        contentInventoryIds: []
      })
    }, [g, d]);
    let m = r.useMemo(() => ({
      width: s,
      height: c
    }), [s, c]);
    return (0, i.jsx)(i.Fragment, {
      children: l.map(e => (0, i.jsx)(k, {
        participant: e,
        width: s,
        className: D.Vs,
        containerStyle: m,
        fit: f.$.COVER,
        channel: o,
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
  z = Chunk64700.memo(function(e) {
    let {
      context: t = N.x.DEFAULT,
      participants: n,
      participantsVersion: l,
      locked: o,
      widget: u,
      channel: c,
      width: d,
      height: h,
      showEmpty: p = true,
      containerRef: f
    } = e, g = "boolean" != typeof u.meta.horizontal || u.meta.horizontal, m = n.length > 0 && null != t && null != c && (!o || u.pinned);
    r.useEffect(() => {
      (0, S.j_)({
        locked: o,
        pinned: u.pinned,
        widget: u.type,
        isPreviewingInGame: false
      }, m)
    }, [o, u, m]);
    let A = r.useMemo(() => ({
        opacity: u.opacity
      }), [u.opacity]),
      y = r.useMemo(() => a()({
        [D.wb]: true,
        [D.Vd]: !g,
        [D.R]: !m && o
      }), [g, m, o]);
    return 0 !== n.length || o ? null == c ? null : (0, i.jsx)("div", {
      ref: f,
      className: y,
      style: A,
      children: (0, i.jsx)(M, {
        context: t,
        participants: n,
        locked: o,
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
        icon: s.npA,
        absolute: true
      })
    }) : null
  }),
  V = e => {
    let {
      widget: t,
      computedSize: n,
      borderWidth: i,
      padding: r,
      containerSpecs: l
    } = e;
    if (!(0, C.cv)(t)) return n;
    let a = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
      o = 2 * i + 2 * r,
      s = a ? {
        width: Math.max(n.width, 192),
        height: Math.min(n.height, 240 + o)
      } : {
        height: Math.max(n.height, 192),
        width: Math.min(n.width, 240 + o)
      },
      u = {
        maxWidth: .75 * l.maxX,
        maxHeight: .75 * l.maxY
      };
    return (0, j.$G)(s, u)
  };

function U(e) {
  var t, n, l, a;
  let s = (0, o.bG)([v.A, y.A], () => y.A.getChannel(v.A.getVoiceChannelId())),
    u = 2 * e.padding + 2 * e.borderWidth,
    p = null == s ? true : s.id,
    [f, m] = (0, o.bG)([h.A], () => null == p ? [
      [], 0
    ] : [h.A.getVideoParticipants(p), h.A.getParticipantsVersion(p)], [p], E.D),
    O = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
    {
      width: b = e.width - u,
      height: _ = e.height - u,
      ref: S
    } = (0, d.Ay)(e.locked, e.widget.pinned),
    {
      participantTileWidth: I,
      visibleParticipants: j
    } = (0, A.i4)(O ? b : _, f, {
      tileWidth: 192,
      tileMinWidth: 120,
      tileMargin: 4,
      limit: 8,
      cropSelfVideo: true,
      version: m
    }),
    C = (0, o.bG)([g.A], () => g.A.getWindowState(T.f)),
    w = {
      id: e.widget.id,
      containerSize: {
        containerHeight: _,
        containerWidth: b
      },
      sizeOffset: u,
      padding: e.padding,
      borderWidth: e.borderWidth,
      containerSpecs: {
        maxX: null != (t = null == C ? true : C.width) ? t : e.width - u,
        maxY: null != (n = null == C ? true : C.height) ? n : e.height - u,
        minX: 0,
        minY: 0
      },
      widget: e.widget,
      orientedPosition: {
        top: 0,
        left: 0,
        bottom: null != (l = null == C ? true : C.height) ? l : e.height,
        right: null != (a = null == C ? true : C.width) ? a : e.width
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
        height: u
      } = V(L(R({}, o), {
        widget: l,
        operation: x.P.RESIZE_NORTH,
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
          width: s,
          height: u
        }
      })
    }, [t])
  }({
    horizontal: O,
    widget: e.widget,
    widgetLayoutSpecs: w
  }), (0, i.jsx)(z, L(R({}, e), {
    channel: s,
    participants: j,
    participantsVersion: m,
    width: O ? I : null != b ? b : e.width,
    height: O ? null != _ ? _ : e.height : I,
    containerRef: S
  }))
}