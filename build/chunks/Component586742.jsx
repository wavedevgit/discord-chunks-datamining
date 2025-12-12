/** Chunk was on 50751 **/
/** chunk id: 586742, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => z,
  Z: () => V
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk765250 = require("./765250.js"),
  Chunk393238 = require("./393238.js"),
  Chunk358221 = require("./358221.js"),
  Chunk598006 = require("./598006.js"),
  Chunk352978 = require("./352978.jsx"),
  Chunk522474 = require("./522474.js"),
  Chunk27457 = require("./27457.jsx"),
  Chunk796638 = require("./796638.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk237997 = require("./237997.js"),
  Chunk136015 = require("./136015.js"),
  Chunk444295 = require("./444295.js"),
  Chunk906037 = require("./906037.js"),
  Chunk353038 = require("./353038.jsx"),
  Chunk804570 = require("./804570.jsx"),
  Chunk461393 = require("./461393.js"),
  Chunk340101 = require("./340101.js"),
  Chunk501787 = require("./501787.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk926927 = require("./926927.js");

function k(e) {
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

function D(e, t) {
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
let R = Chunk473749.memo(function(e) {
    var t;
    let {
      participant: n,
      channel: r,
      context: a
    } = e, l = null == (t = n.user) ? true : t.id;
    return (0, o.e7)([O.Z], () => null != n.user && null != a && null != r && O.Z.isLocalVideoDisabled(l, a), [l, n.user, a, r]) ? null : (0, i.jsx)(g.ZP, k({}, e))
  }),
  L = Chunk473749.memo(function(e) {
    let {
      context: t = T.Yn.DEFAULT,
      participants: a,
      locked: l,
      channel: o,
      width: s,
      height: u,
      shouldDisplay: d
    } = e, f = r.useCallback((e, r) => {
      let a = e.user;
      (0, x.Ws)(w.Odu.VIDEO, {
        type: x.Qu.CAMERA,
        value: x.bk.SETTINGS_OPENED,
        userId: null == a ? true : a.id
      }), (0, c.jW)(r, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("6524")]).then(n.bind(n, 27900));
        return n => (0, i.jsx)(e, D(k({}, n), {
          user: a,
          mediaEngineContext: t,
          onWatchStream: () => {
            (0, x.Ws)(w.Odu.VIDEO, {
              type: x.Qu.GO_LIVE,
              value: x.bk.ENABLED,
              userId: null == a ? true : a.id
            })
          }
        }))
      })
    }, [t]), m = (0, x.ee)(() => new Set(a.map(e => {
      var t;
      return null == (t = e.user) ? true : t.id
    })), [a]);
    r.useEffect(() => {
      d && (0, x.zi)(w.Odu.VIDEO, {
        locked: E.default.isInstanceLocked(),
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
      children: a.map(e => (0, i.jsx)(R, {
        participant: e,
        width: s,
        className: A.tile,
        containerStyle: g,
        fit: p.L.COVER,
        channel: o,
        popoutType: h.P.OVERLAY,
        inCall: true,
        noBorder: true,
        onContextMenu: l ? true : f,
        forceIdle: l,
        paused: !d,
        context: t
      }, e.id))
    })
  }),
  M = Chunk473749.memo(function(e) {
    let {
      context: t = T.Yn.DEFAULT,
      participants: n,
      participantsVersion: a,
      locked: o,
      widget: c,
      channel: u,
      width: d,
      height: f,
      showEmpty: h = true,
      containerRef: p
    } = e, m = "boolean" != typeof c.meta.horizontal || c.meta.horizontal, g = n.length > 0 && null != t && null != u && (!o || c.pinned);
    r.useEffect(() => {
      (0, I.m3)({
        locked: o,
        pinned: c.pinned,
        widget: c.type,
        isPreviewingInGame: false
      }, g)
    }, [o, c, g]);
    let b = r.useMemo(() => ({
        opacity: c.opacity
      }), [c.opacity]),
      y = r.useMemo(() => l()({
        [A.videoList]: true,
        [A.vertical]: !m,
        [A.hidden]: !g && o
      }), [m, g, o]);
    return 0 !== n.length || o ? null == u ? null : (0, i.jsx)("div", {
      ref: p,
      className: y,
      style: b,
      children: (0, i.jsx)(L, {
        context: t,
        participants: n,
        locked: o,
        channel: u,
        width: d,
        height: f,
        shouldDisplay: g,
        participantsVersion: a
      })
    }) : h ? (0, i.jsx)("div", {
      ref: p,
      children: (0, i.jsx)(j.E, {
        emptyText: P.intl.string(P.t.aTiM42),
        icon: s.Odl,
        absolute: true
      })
    }) : null
  }),
  z = e => {
    let {
      widget: t,
      computedSize: n,
      borderWidth: i,
      padding: r,
      containerSpecs: a
    } = e;
    if (!(0, Z.js)(t)) return n;
    let l = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
      o = 2 * i + 2 * r,
      s = l ? {
        width: Math.max(n.width, N.vZ),
        height: Math.min(n.height, 2 * N.mo + o)
      } : {
        height: Math.max(n.height, N.vZ),
        width: Math.min(n.width, 2 * N.mo + o)
      },
      c = {
        maxWidth: .75 * a.maxX,
        maxHeight: .75 * a.maxY
      };
    return (0, _.hJ)(s, c)
  };

function V(e) {
  var t, n, a, l;
  let s = (0, o.e7)([v.Z, y.Z], () => y.Z.getChannel(v.Z.getVoiceChannelId())),
    c = 2 * e.padding + 2 * e.borderWidth,
    h = null == s ? true : s.id,
    [p, g] = (0, o.e7)([f.Z], () => null == h ? [
      [], 0
    ] : [f.Z.getVideoParticipants(h), f.Z.getParticipantsVersion(h)], [h], S.Q),
    O = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
    {
      width: E = e.width - c,
      height: x = e.height - c,
      ref: I
    } = (0, d.ZP)(e.locked, e.widget.pinned),
    {
      participantTileWidth: j,
      visibleParticipants: _
    } = (0, b.ZB)(O ? E : x, p, {
      tileWidth: N.vZ,
      tileMinWidth: N.mo,
      tileMargin: N.F$,
      limit: 8,
      cropSelfVideo: true,
      version: g
    }),
    Z = (0, o.e7)([m.Z], () => m.Z.getWindowState(N.$J)),
    w = {
      id: e.widget.id,
      containerSize: {
        containerHeight: x,
        containerWidth: E
      },
      sizeOffset: c,
      padding: e.padding,
      borderWidth: e.borderWidth,
      containerSpecs: {
        maxX: null != (t = null == Z ? true : Z.width) ? t : e.width - c,
        maxY: null != (n = null == Z ? true : Z.height) ? n : e.height - c,
        minX: 0,
        minY: 0
      },
      widget: e.widget,
      orientedPosition: {
        top: 0,
        left: 0,
        bottom: null != (a = null == Z ? true : Z.height) ? a : e.height,
        right: null != (l = null == Z ? true : Z.width) ? l : e.width
      }
    };
  return ! function(e) {
    let {
      horizontal: t,
      widget: n,
      widgetLayoutSpecs: i
    } = e, a = {
      id: n.id,
      size: n.size,
      containerWidth: i.containerSize.containerWidth,
      containerHeight: i.containerSize.containerHeight,
      widget: n,
      widgetLayoutSpecs: i
    }, l = r.useRef(a);
    r.useLayoutEffect(() => void(l.current = a)), r.useLayoutEffect(() => {
      let {
        size: e,
        id: n,
        containerWidth: i,
        containerHeight: r,
        widget: a,
        widgetLayoutSpecs: o
      } = l.current;
      if (!(t && e.height > e.width || !t && e.width > e.height)) return;
      let {
        width: s,
        height: c
      } = z(D(k({}, o), {
        widget: a,
        operation: C.B.RESIZE_NORTH,
        computedSize: {
          width: r,
          height: i
        },
        originSize: {
          width: r,
          height: i
        }
      }));
      (0, u.nv)({
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
    widgetLayoutSpecs: w
  }), (0, i.jsx)(M, D(k({}, e), {
    channel: s,
    participants: _,
    participantsVersion: g,
    width: O ? j : null != E ? E : e.width,
    height: O ? null != x ? x : e.height : j,
    containerRef: I
  }))
}