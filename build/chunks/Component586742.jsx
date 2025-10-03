/** Chunk was on 50751 **/
/** chunk id: 586742, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => M,
  Z: () => V
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function D(e) {
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

function A(e, t) {
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
let R = Chunk647438.memo(function(e) {
    var t;
    let {
      participant: n,
      channel: r,
      context: l
    } = e, o = null == (t = n.user) ? true : t.id;
    return (0, a.e7)([O.Z], () => null != n.user && null != l && null != r && O.Z.isLocalVideoDisabled(o, l), [o, n.user, l, r]) ? null : (0, i.jsx)(m.ZP, D({}, e))
  }),
  k = Chunk647438.memo(function(e) {
    let {
      context: t = T.Yn.DEFAULT,
      participants: l,
      locked: o,
      channel: a,
      width: s,
      height: c,
      shouldDisplay: d
    } = e, h = r.useCallback((e, r) => {
      let l = e.user;
      (0, b.Ws)(w.Odu.VIDEO, {
        type: b.Qu.CAMERA,
        value: b.bk.SETTINGS_OPENED,
        userId: null == l ? true : l.id
      }), (0, u.jW)(r, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("6524")]).then(n.bind(n, 27900));
        return n => (0, i.jsx)(e, A(D({}, n), {
          user: l,
          mediaEngineContext: t,
          onWatchStream: () => {
            (0, b.Ws)(w.Odu.VIDEO, {
              type: b.Qu.GO_LIVE,
              value: b.bk.ENABLED,
              userId: null == l ? true : l.id
            })
          }
        }))
      })
    }, [t]), f = (0, b.ee)(() => new Set(l.map(e => {
      var t;
      return null == (t = e.user) ? true : t.id
    })), [l]);
    r.useEffect(() => {
      d && (0, b.zi)(w.Odu.VIDEO, {
        locked: v.default.isInstanceLocked(),
        shownUserIds: Array.from(f),
        liveUserIds: Array.from(f),
        contentInventoryIds: []
      })
    }, [f, d]);
    let m = r.useMemo(() => ({
      width: s,
      height: c
    }), [s, c]);
    return (0, i.jsx)(i.Fragment, {
      children: l.map(e => (0, i.jsx)(R, {
        participant: e,
        width: s,
        className: P.tile,
        containerStyle: m,
        fit: p.L.COVER,
        channel: a,
        inPopout: true,
        inCall: true,
        noBorder: true,
        onContextMenu: o ? true : h,
        forceIdle: o,
        paused: !d,
        inOverlayPopout: true,
        context: t
      }, e.id))
    })
  }),
  L = Chunk647438.memo(function(e) {
    let {
      context: t = T.Yn.DEFAULT,
      participants: n,
      participantsVersion: l,
      locked: a,
      widget: u,
      channel: c,
      width: d,
      height: h,
      showEmpty: p = true,
      containerRef: f
    } = e, m = "boolean" != typeof u.meta.horizontal || u.meta.horizontal, g = n.length > 0 && null != t && null != c && (!a || u.pinned);
    r.useEffect(() => {
      (0, x.m3)({
        locked: a,
        pinned: u.pinned,
        widget: u.type,
        isPreviewingInGame: false
      }, g)
    }, [a, u, g]);
    let y = r.useMemo(() => ({
        opacity: u.opacity
      }), [u.opacity]),
      O = r.useMemo(() => o()({
        [P.videoList]: true,
        [P.vertical]: !m,
        [P.hidden]: !g && a
      }), [m, g, a]);
    return 0 !== n.length || a ? null == c ? null : (0, i.jsx)("div", {
      ref: f,
      className: O,
      style: y,
      children: (0, i.jsx)(k, {
        context: t,
        participants: n,
        locked: a,
        channel: c,
        width: d,
        height: h,
        shouldDisplay: g,
        participantsVersion: l
      })
    }) : p ? (0, i.jsx)("div", {
      ref: f,
      children: (0, i.jsx)(I.E, {
        emptyText: _.intl.string(_.t["aTiM4+"]),
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
      containerSpecs: l
    } = e;
    if (!(0, Z.js)(t)) return n;
    let o = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
      a = 2 * i + 2 * r,
      s = o ? {
        width: Math.max(n.width, N.vZ),
        height: Math.min(n.height, 2 * N.mo + a)
      } : {
        height: Math.max(n.height, N.vZ),
        width: Math.min(n.width, 2 * N.mo + a)
      },
      u = {
        maxWidth: .75 * l.maxX,
        maxHeight: .75 * l.maxY
      };
    return (0, C.hJ)(s, u)
  };

function V(e) {
  var t, n, l, o;
  let s = (0, a.e7)([E.Z, y.Z], () => y.Z.getChannel(E.Z.getVoiceChannelId())),
    u = 2 * e.padding + 2 * e.borderWidth,
    p = null == s ? true : s.id,
    [m, O] = (0, a.e7)([h.Z], () => null == p ? [
      [], 0
    ] : [h.Z.getVideoParticipants(p), h.Z.getParticipantsVersion(p)], [p], S.Q),
    v = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
    {
      width: b = e.width - u,
      height: x = e.height - u,
      ref: I
    } = (0, d.ZP)(e.locked, e.widget.pinned),
    {
      participantTileWidth: C,
      visibleParticipants: Z
    } = (0, g.ZB)(v ? b : x, m, {
      tileWidth: N.vZ,
      tileMinWidth: N.mo,
      tileMargin: N.F$,
      limit: 8,
      cropSelfVideo: true,
      version: O
    }),
    w = (0, a.e7)([f.Z], () => f.Z.getWindowState(N.$J)),
    T = {
      id: e.widget.id,
      containerSize: {
        containerHeight: x,
        containerWidth: b
      },
      sizeOffset: u,
      padding: e.padding,
      borderWidth: e.borderWidth,
      containerSpecs: {
        maxX: null != (t = null == w ? true : w.width) ? t : e.width - u,
        maxY: null != (n = null == w ? true : w.height) ? n : e.height - u,
        minX: 0,
        minY: 0
      },
      widget: e.widget,
      orientedPosition: {
        top: 0,
        left: 0,
        bottom: null != (l = null == w ? true : w.height) ? l : e.height,
        right: null != (o = null == w ? true : w.width) ? o : e.width
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
    }, o = r.useRef(l);
    r.useLayoutEffect(() => void(o.current = l)), r.useLayoutEffect(() => {
      let {
        size: e,
        id: n,
        containerWidth: i,
        containerHeight: r,
        widget: l,
        widgetLayoutSpecs: a
      } = o.current;
      if (!(t && e.height > e.width || !t && e.width > e.height)) return;
      let {
        width: s,
        height: u
      } = M(A(D({}, a), {
        widget: l,
        operation: j.B.RESIZE_NORTH,
        computedSize: {
          width: r,
          height: i
        },
        originSize: {
          width: r,
          height: i
        }
      }));
      (0, c.nv)({
        widgetId: n,
        size: {
          fixed: true,
          width: s,
          height: u
        }
      })
    }, [t])
  }({
    horizontal: v,
    widget: e.widget,
    widgetLayoutSpecs: T
  }), (0, i.jsx)(L, A(D({}, e), {
    channel: s,
    participants: Z,
    participantsVersion: O,
    width: v ? C : null != b ? b : e.width,
    height: v ? null != x ? x : e.height : C,
    containerRef: I
  }))
}