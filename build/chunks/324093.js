/** Chunk was on 71447 **/
/** chunk id: 324093, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K2: () => j,
  OL: () => I,
  Ub: () => y,
  k1: () => T
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk391973 = require("./391973.js"),
  Chunk765671 = require("./765671.js"),
  Chunk964486 = require("./964486.js"),
  Chunk475743 = require("./475743.js"),
  Chunk531685 = require("./531685.js"),
  Chunk365971 = require("./365971.js"),
  Chunk129537 = require("./129537.jsx"),
  Chunk916494 = require("./916494.js"),
  Chunk897720 = require("./897720.js"),
  Chunk545807 = require("./545807.js");

function g(e) {
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

function m(e, t) {
  if (null == e) return {};
  var n, i, r, l = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
    return l
  }
  if (l = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        l = Object.getOwnPropertyNames(e);
      for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
      return r
    }(e, t), Object.getOwnPropertySymbols)
    for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
  return l
}
let y = 256,
  A = (e, t) => 2 * e + 2 * t,
  v = e => {
    let {
      width: t,
      height: n
    } = e;
    return {
      fixed: true,
      width: t,
      height: n
    }
  };

function b(e, t, n, i) {
  let r = arguments.length > 4 && true !== arguments[4] ? arguments[4] : y,
    l = {
      width: r,
      height: (0, h.uc)(r)
    },
    a = Math.max(1, e),
    s = (0, h.kz)(e, t),
    o = A(n, t);
  return i ? {
    width: l.width + o,
    height: l.height * a + s + o
  } : {
    width: l.width * a + s + o,
    height: l.height + o
  }
}

function E(e, t, n, i) {
  let r = A(e, t);
  return i ? n.width - r : (0, h.Um)(n.height - r)
}

function O(e) {
  return e.height > e.width
}
let x = 180 / 1080;

function _(e) {
  let {
    layout: t,
    tileCount: n,
    borderWidth: i,
    padding: r,
    previousContainerSize: l,
    widgetMinMaxSizes: a
  } = e, s = t === p.IV.VERTICAL, o = E(i, r, l, s), u = b(n, r, i, s, o);
  return (0, h.UM)(u, {
    containerOffset: A(i, r),
    gapSize: r,
    tileCount: n,
    isVertical: s
  }, {
    maxWidth: a.maxSize.width,
    maxHeight: a.maxSize.height
  })
}

function S(e) {
  let {
    widgetId: t,
    size: n,
    borderWidth: i,
    padding: r,
    minSize: a,
    containerSpecs: s,
    defaultSize: o
  } = e, u = m(e, ["widgetId", "size", "borderWidth", "padding", "minSize", "containerSpecs", "defaultSize"]), c = e => I(g({
    operation: d.P.RESIZE_NORTH,
    computedSize: e,
    originSize: e,
    borderWidth: i,
    padding: r,
    containerSpecs: s
  }, u)), h = {
    widgetId: t,
    size: g({
      fixed: n.fixed
    }, c(n)),
    minSize: g({}, c(a))
  };
  null != o && (h.defaultSize = g({}, c(o))), (0, l.Ju)(g({}, h))
}
let I = e => {
  let t, n, i, {
      operation: r,
      computedSize: l,
      originSize: a,
      borderWidth: s,
      padding: o,
      containerSpecs: u
    } = e,
    c = A(s, o),
    p = Math.max(1, a.width),
    f = Math.max(1, a.height),
    g = {
      width: p,
      height: f
    },
    m = O(g),
    y = (t = O(g), n = E(s, o, g, t), i = (0, h.uc)(n), t ? Math.floor(g.height / i) : Math.floor(g.width / n)),
    v = (0, h.eu)({
      width: p,
      height: f,
      containerOffset: c,
      gapSize: o,
      tileCount: y,
      isVertical: m
    }),
    b = (0, h.kz)(y, o),
    x = (() => {
      var e, t;
      switch (r) {
        case d.P.RESIZE_NORTH:
        case d.P.RESIZE_SOUTH:
          let n, i;
          return {
            height: l.height, width: (e = l.height, n = m ? e - b : e, i = (0, h.Mw)(n - c, v.horizontalRatio), m || (i += b), i + c)
          };
        default:
          let a, s;
          return {
            width: l.width, height: (t = l.width, a = m ? t : t - b, s = (0, h.cP)(a - c, v.verticalRatio), m && (s += b), s + c)
          }
      }
    })();
  return (0, h.UM)(x, {
    containerOffset: c,
    gapSize: o,
    tileCount: y,
    isVertical: m
  }, {
    maxWidth: .75 * u.maxX,
    maxHeight: .75 * u.maxY
  })
};

function j(e) {
  let {
    tileCount: t,
    padding: n,
    borderWidth: i,
    isVertical: l,
    widgetSize: s
  } = e, {
    width: o,
    height: d
  } = {
    width: "number" == typeof s.width ? s.width : y,
    height: "number" == typeof s.height ? s.height : (0, h.uc)(y)
  }, {
    width: p = o,
    height: g = d,
    ref: m
  } = (0, a.Ay)(), v = (0, f.A)(), O = (0, c.Q2)(v), _ = (0, r.bG)([u.A], () => u.A.windowSize(O), [O]), S = function(e) {
    let {
      tileCount: t,
      padding: n,
      borderWidth: i,
      windowWidth: r,
      windowHeight: l,
      isVertical: a
    } = e, s = b(t, n, i, a), o = {
      maxX: null != r ? r : 2 * s.width / .75,
      maxY: null != l ? l : 2 * s.height / .75,
      minX: 0,
      minY: 0
    }, u = {
      width: .75 * o.maxX,
      height: .75 * o.maxY
    }, c = (null != l ? l : 0) * x;
    return c = Math.max(s.height, c), c = Math.min(u.height, c), {
      minSize: s,
      defaultSize: b(t, n, i, a, (0, h.Um)(c)),
      maxSize: u,
      containerSpecs: o
    }
  }({
    tileCount: t,
    padding: n,
    borderWidth: i,
    windowWidth: _.width,
    windowHeight: _.height,
    isVertical: l
  }), I = A(i, n), j = E(i, n, {
    width: p + I,
    height: g + I
  }, l), T = (0, h.uc)(j);
  return {
    tileWidth: j,
    tileHeight: T,
    widgetWidth: o,
    widgetHeight: d,
    containerRef: m,
    containerMinMaxSizes: S
  }
}

function T(e) {
  let {
    streamParticipants: t,
    layout: n,
    widgetLayoutSpecs: r
  } = e, l = i.useRef(r);
  l.current = r;
  let a = (0, o.A)(n),
    u = t.length,
    c = r.widgetMinMaxSizes.maxSize.width * r.widgetMinMaxSizes.maxSize.height;
  (0, s.u5)(() => {
    let e = l.current,
      {
        id: t,
        widgetMinMaxSizes: n,
        containerSize: i,
        layout: r,
        padding: a,
        widget: s,
        borderWidth: o,
        locked: c
      } = e,
      d = m(e, ["id", "widgetMinMaxSizes", "containerSize", "layout", "padding", "widget", "borderWidth", "locked"]);
    null == s || S(g({
      widgetId: t,
      size: v(_({
        layout: r,
        tileCount: Math.max(1, u),
        borderWidth: o,
        padding: a,
        previousContainerSize: n.defaultSize,
        widgetMinMaxSizes: n
      })),
      defaultSize: n.defaultSize,
      minSize: v(n.minSize),
      containerSpecs: n.containerSpecs,
      padding: a,
      borderWidth: o,
      widget: s
    }, d))
  }), i.useLayoutEffect(() => {
    let e = l.current,
      {
        id: t,
        widgetMinMaxSizes: n,
        containerSize: i,
        layout: r,
        padding: a,
        widget: s,
        borderWidth: o,
        locked: c
      } = e,
      d = m(e, ["id", "widgetMinMaxSizes", "containerSize", "layout", "padding", "widget", "borderWidth", "locked"]);
    if (null != s) {
      if (0 === u) {
        if (c) return;
        S(g({
          widgetId: t,
          size: v(n.defaultSize),
          defaultSize: n.defaultSize,
          minSize: v(n.minSize),
          padding: a,
          borderWidth: o,
          widget: s,
          containerSpecs: n.containerSpecs
        }, d));
        return
      }
      S(g({
        widgetId: t,
        size: v(_({
          layout: r,
          tileCount: u,
          borderWidth: o,
          padding: a,
          previousContainerSize: i,
          widgetMinMaxSizes: n
        })),
        minSize: v(n.minSize),
        containerSpecs: n.containerSpecs,
        padding: a,
        borderWidth: o,
        widget: s
      }, d))
    }
  }, [u, c]), i.useLayoutEffect(() => {
    if (l.current.participants <= 1) return;
    let e = l.current,
      {
        id: t,
        widgetMinMaxSizes: i,
        containerSize: r,
        padding: s,
        borderWidth: o,
        participants: u,
        widget: c
      } = e,
      d = m(e, ["id", "widgetMinMaxSizes", "containerSize", "padding", "borderWidth", "participants", "widget"]);
    if (null == c || a === n) return;
    let f = function(e) {
      let {
        oldLayout: t,
        newLayout: n,
        tileCount: i,
        borderWidth: r,
        padding: l,
        previousContainerSize: a,
        widgetMinMaxSizes: s
      } = e, o = E(r, l, a, t === p.IV.VERTICAL), u = b(i, l, r, n === p.IV.VERTICAL, o);
      return (0, h.UM)(u, {
        containerOffset: A(r, l),
        gapSize: l,
        tileCount: i,
        isVertical: n === p.IV.VERTICAL
      }, {
        maxWidth: s.maxSize.width,
        maxHeight: s.maxSize.height
      })
    }({
      oldLayout: null != a ? a : n,
      newLayout: n,
      tileCount: u,
      borderWidth: o,
      padding: s,
      previousContainerSize: r,
      widgetMinMaxSizes: i
    });
    S(g({
      widgetId: t,
      size: v(f),
      minSize: v(i.minSize),
      containerSpecs: i.containerSpecs,
      padding: s,
      borderWidth: o,
      widget: c
    }, d))
  }, [n, a]), (0, s.l0)(() => {
    let e = l.current,
      {
        id: t,
        widgetMinMaxSizes: n,
        widget: i,
        padding: r
      } = e,
      a = m(e, ["id", "widgetMinMaxSizes", "widget", "padding"]);
    null != i && S(g({
      widgetId: t,
      size: v(n.defaultSize),
      defaultSize: n.defaultSize,
      minSize: v(n.minSize),
      containerSpecs: n.containerSpecs,
      padding: r,
      widget: i
    }, a))
  })
}