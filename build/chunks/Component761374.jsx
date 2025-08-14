/** Chunk was on 46290 **/
/** chunk id: 761374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L,
  w: () => D
}), require("./388685.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk765250 = require("./765250.js"),
  Chunk13245 = require("./13245.js"),
  Chunk393238 = require("./393238.js"),
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
  Chunk353038 = require("./353038.jsx"),
  Chunk804570 = require("./804570.jsx"),
  Chunk350663 = require("./350663.jsx"),
  Chunk461393 = require("./461393.js"),
  Chunk340101 = require("./340101.js"),
  Chunk501787 = require("./501787.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk965365 = require("./965365.js");

function N(e) {
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

function w(e, t) {
  if (null == e) return {};
  var n, i, r = function(e, t) {
    if (null == e) return {};
    var n, i, r = {},
      o = Object.keys(e);
    for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++) n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
let Z = [],
  P = (e, t) => ({
    fixed: true,
    width: e,
    height: t
  }),
  T = P(Chunk350663.bt, Chunk350663.fd);

function A(e, t, n, i, r) {
  let {
    padding: o,
    sizeOffset: l
  } = r, a = Math.max(1, i), s = (a - 1) * o, c = t * a + s, u = n * a + s;
  return e === S.C5.HORIZONTAL ? u = n : c = t, P(c + l, u + l)
}

function k(e, t, n) {
  return A(e, _.bt, _.fd, t, n)
}
let D = e => {
  let {
    operation: t,
    computedSize: n,
    originSize: i,
    borderWidth: r,
    padding: o,
    containerSpecs: l
  } = e, a = 2 * r + 2 * o, s = Math.max(1, i.width - a) / Math.max(1, i.height - a), c = (() => {
    switch (t) {
      case v.B.RESIZE_NORTH:
      case v.B.RESIZE_SOUTH:
        return {
          height: n.height, width: Math.round((n.height - a) * s + a)
        };
      default:
        return {
          width: n.width, height: Math.round((n.width - a) / s + a)
        }
    }
  })();
  return (0, x.S)(c, s, a, {
    maxWidth: .75 * l.maxX,
    maxHeight: .75 * l.maxY
  })
};

function R(e) {
  var {
    widgetId: t,
    size: n,
    borderWidth: i,
    padding: r,
    minSize: o,
    containerSpecs: l
  } = e, s = w(e, ["widgetId", "size", "borderWidth", "padding", "minSize", "containerSpecs"]);
  let {
    width: c,
    height: u
  } = D(N({
    operation: v.B.RESIZE_NORTH,
    computedSize: {
      width: n.width,
      height: n.height
    },
    originSize: {
      width: n.width,
      height: n.height
    },
    borderWidth: i,
    padding: r,
    containerSpecs: l
  }, s)), {
    width: d,
    height: p
  } = D(N({
    operation: v.B.RESIZE_NORTH,
    computedSize: {
      width: o.width,
      height: o.height
    },
    originSize: {
      width: o.width,
      height: o.height
    },
    borderWidth: i,
    padding: r,
    containerSpecs: l
  }, s));
  (0, a.nv)({
    widgetId: t,
    size: {
      fixed: n.fixed,
      width: c,
      height: u
    },
    minSize: {
      width: d,
      height: p
    }
  })
}

function L(e) {
  var t, n, a, v, x, P;
  let {
    id: D,
    widget: L,
    size: M,
    locked: z,
    padding: U,
    borderWidth: V,
    opacity: W,
    horizontal: F,
    pinned: G,
    anchorTop: B,
    anchorLeft: H,
    showEmpty: Y = true
  } = e, Q = 2 * U + 2 * V, {
    width: K,
    height: X
  } = {
    width: "number" == typeof M.width ? M.width : _.bt,
    height: "number" == typeof M.height ? M.height : _.fd
  }, J = (0, o.e7)([O.Z], () => O.Z.getVoiceChannelId()), {
    width: q = K - Q,
    height: $ = X - Q,
    ref: ee
  } = (0, c.ZP)(), et = (0, o.e7)([y.Z], () => {
    var e;
    let t = y.Z.getWidget(D);
    return !!(0, S.ZL)(t) && !z && (null == (e = t.meta.showAllStreams) || e)
  }, [D, z]), en = !F, ei = (0, o.e7)([g.Z], () => g.Z.getChannel(J)), er = (0, o.e7)([m.default], () => m.default.getId()), {
    streamParticipants: eo,
    activeStreams: el,
    participantsVersion: ea
  } = (x = B && en || H && F, P = !B && en || !H && F, (0, o.cj)([h.Z, d.Z], () => {
    if (null == J) return {
      streamParticipants: Z,
      participantsVersion: false,
      activeStreams: new Set
    };
    let e = new Set(h.Z.getAllActiveStreamsForChannel(J).map(e => (0, p.V9)(e))),
      t = t => e.has((0, p.V9)(t.stream)),
      n = d.Z.getStreamParticipants(J).filter(e => e.user.id !== er && (!!et || t(e)));
    return n.sort((e, n) => {
      if (x) {
        if (t(e) && !t(n)) return false;
        if (!t(e) && t(n)) return 1
      } else if (P) {
        if (t(e) && !t(n)) return 1;
        if (!t(e) && t(n)) return false
      }
      return e.user.username.localeCompare(n.user.username)
    }), {
      streamParticipants: n,
      activeStreams: e,
      participantsVersion: d.Z.getParticipantsVersion(J)
    }
  }, [J, er, et, x, P])), es = eo.length, ec = null == ei || 0 === el.size && z || 0 === es && !z, eu = F ? S.C5.HORIZONTAL : S.C5.VERTICAL, ed = {
    containerWidth: q,
    containerHeight: $
  }, {
    tileWidth: ep,
    tileHeight: ef
  } = function(e, t, n) {
    let {
      tileWidth: i,
      tileHeight: o
    } = (0, _.IV)(n, t.containerWidth, t.containerHeight), [l, a] = r.useState(i), [s, c] = r.useState(o);
    return r.useEffect(() => {
      e || (a(i), c(o))
    }, [e, i, o]), {
      tileWidth: e ? l : i,
      tileHeight: e ? s : o
    }
  }(z, ed, eu), eh = (0, o.e7)([f.Z], () => f.Z.getWindowState(I.$J)), em = {
    id: D,
    widget: L,
    layout: eu,
    participants: eo.length,
    containerSize: ed,
    tileSize: {
      tileWidth: ep,
      tileHeight: ef
    },
    sizeOffset: Q,
    padding: U,
    borderWidth: V,
    containerSpecs: {
      maxX: null != (t = null == eh ? true : eh.width) ? t : K - Q,
      maxY: null != (n = null == eh ? true : eh.height) ? n : X - Q,
      minX: 0,
      minY: 0
    },
    orientedPosition: {
      top: 0,
      left: 0,
      bottom: null != (a = null == eh ? true : eh.height) ? a : X,
      right: null != (v = null == eh ? true : eh.width) ? v : K
    }
  };
  return (r.useEffect(() => {
    s.Z.setGpuBoostRequested(b.zS.OVERLAY_VIDEO_STREAM_RENDERING, !ec)
  }, [ec]), (0, u.ZP)(() => () => {
    s.Z.setGpuBoostRequested(b.zS.OVERLAY_VIDEO_STREAM_RENDERING, false)
  }), function(e) {
    let {
      streamParticipants: t,
      layout: n,
      widgetLayoutSpecs: i
    } = e, o = r.useRef(i);
    r.useEffect(() => {
      o.current = i
    });
    let l = t.length;
    r.useLayoutEffect(() => {
      let e = o.current,
        {
          id: t,
          containerSize: n,
          tileSize: i,
          sizeOffset: r,
          layout: a,
          padding: s,
          widget: c
        } = e,
        u = w(e, ["id", "containerSize", "tileSize", "sizeOffset", "layout", "padding", "widget"]);
      if (null == c) return;
      if (0 === l) return void R(N({
        widgetId: t,
        size: T,
        minSize: k(a, 1, {
          padding: s,
          sizeOffset: r
        }),
        padding: s,
        widget: c
      }, u));
      let {
        tileWidth: d,
        tileHeight: p
      } = i;
      R(N({
        widgetId: t,
        size: A(a, d, p, l, {
          padding: s,
          sizeOffset: r
        }),
        minSize: k(a, l, {
          padding: s,
          sizeOffset: r
        }),
        padding: s,
        widget: c
      }, u))
    }, [l]), r.useLayoutEffect(() => {
      if (o.current.participants <= 1) return;
      let e = o.current,
        {
          id: t,
          sizeOffset: i,
          containerSize: r,
          padding: l,
          participants: a,
          widget: s
        } = e,
        c = w(e, ["id", "sizeOffset", "containerSize", "padding", "participants", "widget"]);
      null != s && R(N({
        widgetId: t,
        size: k(n, a, {
          padding: l,
          sizeOffset: i
        }),
        minSize: k(n, a, {
          padding: l,
          sizeOffset: i
        }),
        padding: l,
        widget: s
      }, c))
    }, [n]), (0, u.zq)(() => {
      let e = o.current,
        {
          id: t,
          sizeOffset: i,
          widget: r,
          padding: l
        } = e,
        a = w(e, ["id", "sizeOffset", "widget", "padding"]);
      null != r && R(N({
        widgetId: t,
        size: T,
        minSize: k(n, 0, {
          padding: l,
          sizeOffset: i
        }),
        padding: l,
        widget: r
      }, a))
    })
  }({
    id: D,
    streamParticipants: eo,
    layout: eu,
    widgetLayoutSpecs: em
  }), (ec || !G) && z) ? null : ec && !z ? Y ? z ? null : (0, i.jsx)(E.E, {
    emptyText: j.intl.string(j.t["T6+rX1"]),
    icon: l.hGI,
    absolute: true
  }) : null : (0, i.jsx)("div", {
    className: C.goLiveGridContainer,
    style: {
      opacity: W
    },
    ref: ee,
    children: (0, i.jsx)(_.ZP, {
      widgetId: D,
      tileWidth: ep,
      tileHeight: ef,
      locked: z,
      layout: eu,
      activeStreams: el,
      streamParticipants: eo,
      participantsVersion: ea,
      pinned: G,
      padding: U,
      sizeOffset: Q
    })
  })
}