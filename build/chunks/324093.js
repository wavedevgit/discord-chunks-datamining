/** Chunk was on 71447 **/
/** chunk id: 324093, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K2: () => j,
  OL: () => I,
  Ub: () => A,
  k1: () => C
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
let A = 256,
  y = (e, t) => 2 * e + 2 * t,
  O = e => {
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

function v(e, t, n, i) {
  let r = arguments.length > 4 && true !== arguments[4] ? arguments[4] : A,
    l = {
      width: r,
      height: (0, h.uc)(r)
    },
    a = Math.max(1, e),
    o = (0, h.kz)(e, t),
    s = y(n, t);
  return i ? {
    width: l.width + s,
    height: l.height * a + o + s
  } : {
    width: l.width * a + o + s,
    height: l.height + s
  }
}

function b(e, t, n, i) {
  let r = y(e, t);
  return i ? n.width - r : (0, h.Um)(n.height - r)
}

function E(e) {
  return e.height > e.width
}
let _ = 180 / 1080;

function S(e) {
  let {
    layout: t,
    tileCount: n,
    borderWidth: i,
    padding: r,
    previousContainerSize: l,
    widgetMinMaxSizes: a
  } = e, o = t === p.IV.VERTICAL, s = b(i, r, l, o), u = v(n, r, i, o, s);
  return (0, h.UM)(u, {
    containerOffset: y(i, r),
    gapSize: r,
    tileCount: n,
    isVertical: o
  }, {
    maxWidth: a.maxSize.width,
    maxHeight: a.maxSize.height
  })
}

function x(e) {
  let {
    widgetId: t,
    size: n,
    borderWidth: i,
    padding: r,
    minSize: a,
    containerSpecs: o,
    defaultSize: s
  } = e, u = m(e, ["widgetId", "size", "borderWidth", "padding", "minSize", "containerSpecs", "defaultSize"]), c = e => I(g({
    operation: d.P.RESIZE_NORTH,
    computedSize: e,
    originSize: e,
    borderWidth: i,
    padding: r,
    containerSpecs: o
  }, u)), h = {
    widgetId: t,
    size: g({
      fixed: n.fixed
    }, c(n)),
    minSize: g({}, c(a))
  };
  null != s && (h.defaultSize = g({}, c(s))), (0, l.Ju)(g({}, h))
}
let I = e => {
  let t, n, i, {
      operation: r,
      computedSize: l,
      originSize: a,
      borderWidth: o,
      padding: s,
      containerSpecs: u
    } = e,
    c = y(o, s),
    p = Math.max(1, a.width),
    f = Math.max(1, a.height),
    g = {
      width: p,
      height: f
    },
    m = E(g),
    A = (t = E(g), n = b(o, s, g, t), i = (0, h.uc)(n), t ? Math.floor(g.height / i) : Math.floor(g.width / n)),
    O = (0, h.eu)({
      width: p,
      height: f,
      containerOffset: c,
      gapSize: s,
      tileCount: A,
      isVertical: m
    }),
    v = (0, h.kz)(A, s),
    _ = (() => {
      var e, t;
      switch (r) {
        case d.P.RESIZE_NORTH:
        case d.P.RESIZE_SOUTH:
          let n, i;
          return {
            height: l.height, width: (e = l.height, n = m ? e - v : e, i = (0, h.Mw)(n - c, O.horizontalRatio), m || (i += v), i + c)
          };
        default:
          let a, o;
          return {
            width: l.width, height: (t = l.width, a = m ? t : t - v, o = (0, h.cP)(a - c, O.verticalRatio), m && (o += v), o + c)
          }
      }
    })();
  return (0, h.UM)(_, {
    containerOffset: c,
    gapSize: s,
    tileCount: A,
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
    widgetSize: o
  } = e, {
    width: s,
    height: d
  } = {
    width: "number" == typeof o.width ? o.width : A,
    height: "number" == typeof o.height ? o.height : (0, h.uc)(A)
  }, {
    width: p = s,
    height: g = d,
    ref: m
  } = (0, a.Ay)(), O = (0, f.A)(), E = (0, c.Q2)(O), S = (0, r.bG)([u.A], () => u.A.windowSize(E), [E]), x = function(e) {
    let {
      tileCount: t,
      padding: n,
      borderWidth: i,
      windowWidth: r,
      windowHeight: l,
      isVertical: a
    } = e, o = v(t, n, i, a), s = {
      maxX: null != r ? r : 2 * o.width / .75,
      maxY: null != l ? l : 2 * o.height / .75,
      minX: 0,
      minY: 0
    }, u = {
      width: .75 * s.maxX,
      height: .75 * s.maxY
    }, c = (null != l ? l : 0) * _;
    return c = Math.max(o.height, c), c = Math.min(u.height, c), {
      minSize: o,
      defaultSize: v(t, n, i, a, (0, h.Um)(c)),
      maxSize: u,
      containerSpecs: s
    }
  }({
    tileCount: t,
    padding: n,
    borderWidth: i,
    windowWidth: S.width,
    windowHeight: S.height,
    isVertical: l
  }), I = y(i, n), j = b(i, n, {
    width: p + I,
    height: g + I
  }, l), C = (0, h.uc)(j);
  return {
    tileWidth: j,
    tileHeight: C,
    widgetWidth: s,
    widgetHeight: d,
    containerRef: m,
    containerMinMaxSizes: x
  }
}

function C(e) {
  let {
    streamParticipants: t,
    layout: n,
    widgetLayoutSpecs: r
  } = e, l = i.useRef(r);
  l.current = r;
  let a = (0, s.A)(n),
    u = t.length,
    c = r.widgetMinMaxSizes.maxSize.width * r.widgetMinMaxSizes.maxSize.height;
  (0, o.u5)(() => {
    let e = l.current,
      {
        id: t,
        widgetMinMaxSizes: n,
        containerSize: i,
        layout: r,
        padding: a,
        widget: o,
        borderWidth: s,
        locked: c
      } = e,
      d = m(e, ["id", "widgetMinMaxSizes", "containerSize", "layout", "padding", "widget", "borderWidth", "locked"]);
    null == o || x(g({
      widgetId: t,
      size: O(S({
        layout: r,
        tileCount: Math.max(1, u),
        borderWidth: s,
        padding: a,
        previousContainerSize: n.defaultSize,
        widgetMinMaxSizes: n
      })),
      defaultSize: n.defaultSize,
      minSize: O(n.minSize),
      containerSpecs: n.containerSpecs,
      padding: a,
      borderWidth: s,
      widget: o
    }, d))
  }), i.useLayoutEffect(() => {
    let e = l.current,
      {
        id: t,
        widgetMinMaxSizes: n,
        containerSize: i,
        layout: r,
        padding: a,
        widget: o,
        borderWidth: s,
        locked: c
      } = e,
      d = m(e, ["id", "widgetMinMaxSizes", "containerSize", "layout", "padding", "widget", "borderWidth", "locked"]);
    if (null != o) {
      if (0 === u) {
        if (c) return;
        x(g({
          widgetId: t,
          size: O(n.defaultSize),
          defaultSize: n.defaultSize,
          minSize: O(n.minSize),
          padding: a,
          borderWidth: s,
          widget: o,
          containerSpecs: n.containerSpecs
        }, d));
        return
      }
      x(g({
        widgetId: t,
        size: O(S({
          layout: r,
          tileCount: u,
          borderWidth: s,
          padding: a,
          previousContainerSize: i,
          widgetMinMaxSizes: n
        })),
        minSize: O(n.minSize),
        containerSpecs: n.containerSpecs,
        padding: a,
        borderWidth: s,
        widget: o
      }, d))
    }
  }, [u, c]), i.useLayoutEffect(() => {
    if (l.current.participants <= 1) return;
    let e = l.current,
      {
        id: t,
        widgetMinMaxSizes: i,
        containerSize: r,
        padding: o,
        borderWidth: s,
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
        widgetMinMaxSizes: o
      } = e, s = b(r, l, a, t === p.IV.VERTICAL), u = v(i, l, r, n === p.IV.VERTICAL, s);
      return (0, h.UM)(u, {
        containerOffset: y(r, l),
        gapSize: l,
        tileCount: i,
        isVertical: n === p.IV.VERTICAL
      }, {
        maxWidth: o.maxSize.width,
        maxHeight: o.maxSize.height
      })
    }({
      oldLayout: null != a ? a : n,
      newLayout: n,
      tileCount: u,
      borderWidth: s,
      padding: o,
      previousContainerSize: r,
      widgetMinMaxSizes: i
    });
    x(g({
      widgetId: t,
      size: O(f),
      minSize: O(i.minSize),
      containerSpecs: i.containerSpecs,
      padding: o,
      borderWidth: s,
      widget: c
    }, d))
  }, [n, a]), (0, o.l0)(() => {
    let e = l.current,
      {
        id: t,
        widgetMinMaxSizes: n,
        widget: i,
        padding: r
      } = e,
      a = m(e, ["id", "widgetMinMaxSizes", "widget", "padding"]);
    null != i && x(g({
      widgetId: t,
      size: O(n.defaultSize),
      defaultSize: n.defaultSize,
      minSize: O(n.minSize),
      containerSpecs: n.containerSpecs,
      padding: r,
      widget: i
    }, a))
  })
}