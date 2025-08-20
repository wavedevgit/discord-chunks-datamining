/** Chunk was on 46290 **/
/** chunk id: 586742, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => M,
  Z: () => z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk765250 = require("./765250.js"),
  Chunk393238 = require("./393238.js"),
  Chunk358221 = require("./358221.js"),
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
  Chunk59122 = require("./59122.js");

function A(e) {
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
let D = Chunk647438.memo(function(e) {
    var t;
    let {
      participant: n,
      channel: r,
      context: o
    } = e, l = null == (t = n.user) ? true : t.id;
    return (0, a.e7)([O.Z], () => null != n.user && null != o && null != r && O.Z.isLocalVideoDisabled(l, o), [l, n.user, o, r]) ? null : (0, i.jsx)(m.ZP, A({}, e))
  }),
  R = Chunk647438.memo(function(e) {
    let {
      context: t = Z.Yn.DEFAULT,
      participants: o,
      locked: l,
      channel: a,
      width: s,
      height: u,
      shouldDisplay: d
    } = e, p = r.useCallback((e, r) => {
      let o = e.user;
      (0, _.Ws)(w.Odu.VIDEO, {
        type: _.Qu.CAMERA,
        value: _.bk.SETTINGS_OPENED,
        userId: null == o ? true : o.id
      }), (0, c.jW)(r, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("6524")]).then(n.bind(n, 27900));
        return n => (0, i.jsx)(e, k(A({}, n), {
          user: o,
          mediaEngineContext: t,
          onWatchStream: () => {
            (0, _.Ws)(w.Odu.VIDEO, {
              type: _.Qu.GO_LIVE,
              value: _.bk.ENABLED,
              userId: null == o ? true : o.id
            })
          }
        }))
      })
    }, [t]), h = (0, _.ee)(() => new Set(o.map(e => {
      var t;
      return null == (t = e.user) ? true : t.id
    })), [o]);
    r.useEffect(() => {
      d && (0, _.zi)(w.Odu.VIDEO, {
        locked: v.default.isInstanceLocked(),
        shownUserIds: Array.from(h),
        liveUserIds: Array.from(h),
        contentInventoryIds: []
      })
    }, [h, d]);
    let m = r.useMemo(() => ({
      width: s,
      height: u
    }), [s, u]);
    return (0, i.jsx)(i.Fragment, {
      children: o.map(e => (0, i.jsx)(D, {
        participant: e,
        width: s,
        className: T.tile,
        containerStyle: m,
        fit: f.L.COVER,
        channel: a,
        inPopout: true,
        inCall: true,
        noBorder: true,
        onContextMenu: l ? true : p,
        forceIdle: l,
        paused: !d,
        inOverlayPopout: true,
        context: t
      }, e.id))
    })
  }),
  L = Chunk647438.memo(function(e) {
    let {
      context: t = Z.Yn.DEFAULT,
      participants: n,
      participantsVersion: o,
      locked: a,
      widget: c,
      channel: u,
      width: d,
      height: p,
      showEmpty: f = true,
      containerRef: h
    } = e, m = "boolean" != typeof c.meta.horizontal || c.meta.horizontal, g = n.length > 0 && null != t && null != u && (!a || c.pinned);
    r.useEffect(() => {
      (0, x.m3)({
        locked: a,
        pinned: c.pinned,
        widget: c.type,
        isPreviewingInGame: false
      }, g)
    }, [a, c, g]);
    let y = r.useMemo(() => ({
        opacity: c.opacity
      }), [c.opacity]),
      O = r.useMemo(() => l()({
        [T.videoList]: true,
        [T.vertical]: !m,
        [T.hidden]: !g && a
      }), [m, g, a]);
    return 0 !== n.length || a ? null == u ? null : (0, i.jsx)("div", {
      ref: h,
      className: O,
      style: y,
      children: (0, i.jsx)(R, {
        context: t,
        participants: n,
        locked: a,
        channel: u,
        width: d,
        height: p,
        shouldDisplay: g,
        participantsVersion: o
      })
    }) : f ? (0, i.jsx)("div", {
      ref: h,
      children: (0, i.jsx)(I.E, {
        emptyText: P.intl.string(P.t["aTiM4+"]),
        icon: s.Odl,
        absolute: true
      })
    }) : null
  }),
  M = e => {
    let {
      widget: t,
      computedSize: n,
      borderWidth: i,
      padding: r,
      containerSpecs: o
    } = e;
    if (!(0, C.js)(t)) return n;
    let l = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
      a = 2 * i + 2 * r,
      s = l ? {
        width: Math.max(n.width, N.vZ),
        height: Math.min(n.height, 2 * N.mo + a)
      } : {
        height: Math.max(n.height, N.vZ),
        width: Math.min(n.width, 2 * N.mo + a)
      },
      c = {
        maxWidth: .75 * o.maxX,
        maxHeight: .75 * o.maxY
      };
    return (0, j.h)(s, c)
  };

function z(e) {
  var t, n, o, l;
  let s = (0, a.e7)([b.Z, y.Z], () => y.Z.getChannel(b.Z.getVoiceChannelId())),
    c = 2 * e.padding + 2 * e.borderWidth,
    f = null == s ? true : s.id,
    [m, O] = (0, a.e7)([p.Z], () => null == f ? [
      [], 0
    ] : [p.Z.getVideoParticipants(f), p.Z.getParticipantsVersion(f)], [f], E.Q),
    v = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
    {
      width: _ = e.width - c,
      height: x = e.height - c,
      ref: I
    } = (0, d.ZP)(e.locked, e.widget.pinned),
    {
      participantTileWidth: j,
      visibleParticipants: C
    } = (0, g.ZB)(v ? _ : x, m, {
      tileWidth: N.vZ,
      tileMinWidth: N.mo,
      tileMargin: N.F$,
      limit: 8,
      cropSelfVideo: true,
      version: O
    }),
    w = (0, a.e7)([h.Z], () => h.Z.getWindowState(N.$J)),
    Z = {
      id: e.widget.id,
      containerSize: {
        containerHeight: x,
        containerWidth: _
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
        bottom: null != (o = null == w ? true : w.height) ? o : e.height,
        right: null != (l = null == w ? true : w.width) ? l : e.width
      }
    };
  return ! function(e) {
    let {
      horizontal: t,
      widget: n,
      widgetLayoutSpecs: i
    } = e, o = {
      id: n.id,
      size: n.size,
      containerWidth: i.containerSize.containerWidth,
      containerHeight: i.containerSize.containerHeight,
      widget: n,
      widgetLayoutSpecs: i
    }, l = r.useRef(o);
    r.useLayoutEffect(() => void(l.current = o)), r.useLayoutEffect(() => {
      let {
        size: e,
        id: n,
        containerWidth: i,
        containerHeight: r,
        widget: o,
        widgetLayoutSpecs: a
      } = l.current;
      if (!(t && e.height > e.width || !t && e.width > e.height)) return;
      let {
        width: s,
        height: c
      } = M(k(A({}, a), {
        widget: o,
        operation: S.B.RESIZE_NORTH,
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
    horizontal: v,
    widget: e.widget,
    widgetLayoutSpecs: Z
  }), (0, i.jsx)(L, k(A({}, e), {
    channel: s,
    participants: C,
    participantsVersion: O,
    width: v ? j : null != _ ? _ : e.width,
    height: v ? null != x ? x : e.height : j,
    containerRef: I
  }))
}