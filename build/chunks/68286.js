/** Chunk was on 46290 **/
/** chunk id: 68286, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Bz: () => E,
  Dl: () => _,
  bt: () => h,
  wD: () => b
});
var Chunk647438 = require("./647438.js"),
  Chunk765250 = require("./765250.js"),
  Chunk393238 = require("./393238.js"),
  Chunk493773 = require("./493773.js"),
  Chunk110924 = require("./110924.js"),
  Chunk353038 = require("./353038.jsx"),
  Chunk461393 = require("./461393.js"),
  Chunk340101 = require("./340101.js");

function d(e) {
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

function p(e, t) {
  if (null == e) return {};
  var n, i, r = function(e, t) {
    if (null == e) return {};
    var n, i, r = {},
      l = Object.keys(e);
    for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
let h = 256,
  f = (e, t) => 2 * e + 2 * t,
  m = e => {
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

function g(e, t, n, i) {
  let r = arguments.length > 4 && true !== arguments[4] ? arguments[4] : h,
    l = {
      width: r,
      height: (0, c.MH)(r)
    },
    o = Math.max(1, e),
    a = (0, c.bj)(e, t),
    s = f(n, t);
  return i ? {
    width: l.width + s,
    height: l.height * o + a + s
  } : {
    width: l.width * o + a + s,
    height: l.height + s
  }
}

function y(e, t, n, i) {
  let r = f(e, t);
  return i ? n.width - r : (0, c.eJ)(n.height - r)
}

function O(e) {
  return e.height > e.width
}

function v(e) {
  var {
    widgetId: t,
    size: n,
    borderWidth: i,
    padding: l,
    minSize: o,
    containerSpecs: a
  } = e, c = p(e, ["widgetId", "size", "borderWidth", "padding", "minSize", "containerSpecs"]);
  let {
    width: u,
    height: h
  } = b(d({
    operation: s.B.RESIZE_NORTH,
    computedSize: {
      width: n.width,
      height: n.height
    },
    originSize: {
      width: n.width,
      height: n.height
    },
    borderWidth: i,
    padding: l,
    containerSpecs: a
  }, c)), {
    width: f,
    height: m
  } = b(d({
    operation: s.B.RESIZE_NORTH,
    computedSize: {
      width: o.width,
      height: o.height
    },
    originSize: {
      width: o.width,
      height: o.height
    },
    borderWidth: i,
    padding: l,
    containerSpecs: a
  }, c));
  (0, r.nv)({
    widgetId: t,
    size: {
      fixed: n.fixed,
      width: u,
      height: h
    },
    minSize: {
      width: f,
      height: m
    }
  })
}
let b = e => {
  let {
    operation: t,
    computedSize: n,
    originSize: i,
    borderWidth: r,
    padding: l,
    containerSpecs: o
  } = e, a = f(r, l), u = Math.max(1, i.width), d = Math.max(1, i.height), p = {
    width: u,
    height: d
  }, h = O(p), m = function(e, t, n) {
    let i = O(n),
      r = y(e, t, n, i),
      l = (0, c.MH)(r);
    return i ? Math.floor(n.height / l) : Math.floor(n.width / r)
  }(r, l, p), g = (0, c.f8)({
    width: u,
    height: d,
    containerOffset: a,
    gapSize: l,
    tileCount: m,
    isVertical: h
  }), v = (0, c.bj)(m, l), b = (() => {
    switch (t) {
      case s.B.RESIZE_NORTH:
      case s.B.RESIZE_SOUTH:
        return {
          height: n.height, width: (e => {
            let t = h ? e - v : e,
              n = (0, c.GB)(t - a, g.horizontalRatio);
            return h || (n += v), n + a
          })(n.height)
        };
      default:
        return {
          width: n.width, height: (e => {
            let t = h ? e : e - v,
              n = (0, c.E5)(t - a, g.verticalRatio);
            return h && (n += v), n + a
          })(n.width)
        }
    }
  })();
  return (0, c.Se)(b, {
    containerOffset: a,
    gapSize: l,
    tileCount: m,
    isVertical: h
  }, {
    maxWidth: .75 * o.maxX,
    maxHeight: .75 * o.maxY
  })
};

function E(e) {
  let {
    tileCount: t,
    padding: n,
    borderWidth: i,
    windowWidth: r,
    windowHeight: o,
    isVertical: a,
    widgetSize: s
  } = e, {
    width: u,
    height: d
  } = {
    width: "number" == typeof s.width ? s.width : h,
    height: "number" == typeof s.height ? s.height : (0, c.MH)(h)
  }, {
    width: p = u,
    height: m = d,
    ref: O
  } = (0, l.ZP)(), v = function(e) {
    let {
      tileCount: t,
      padding: n,
      borderWidth: i,
      windowWidth: r,
      windowHeight: l,
      isVertical: o
    } = e, a = g(t, n, i, o), s = {
      maxX: null != r ? r : 2 * a.width / .75,
      maxY: null != l ? l : 2 * a.height / .75,
      minX: 0,
      minY: 0
    };
    return {
      minSize: a,
      maxSize: {
        width: .75 * s.maxX,
        height: .75 * s.maxY
      },
      containerSpecs: s
    }
  }({
    tileCount: t,
    padding: n,
    borderWidth: i,
    windowWidth: r,
    windowHeight: o,
    isVertical: a
  }), b = f(i, n), E = y(i, n, {
    width: p + b,
    height: m + b
  }, a), _ = (0, c.MH)(E);
  return {
    tileWidth: E,
    tileHeight: _,
    widgetWidth: u,
    widgetHeight: d,
    containerRef: O,
    containerMinMaxSizes: v
  }
}

function _(e) {
  let {
    streamParticipants: t,
    layout: n,
    widgetLayoutSpecs: r
  } = e, l = i.useRef(r);
  l.current = r;
  let s = (0, a.Z)(n),
    h = t.length;
  i.useLayoutEffect(() => {
    let e = l.current,
      {
        id: t,
        widgetMinMaxSizes: n,
        containerSize: i,
        layout: r,
        padding: o,
        widget: a,
        borderWidth: s,
        locked: O
      } = e,
      b = p(e, ["id", "widgetMinMaxSizes", "containerSize", "layout", "padding", "widget", "borderWidth", "locked"]);
    if (null == a) return;
    if (0 === h) {
      if (O) return;
      v(d({
        widgetId: t,
        size: m(n.minSize),
        minSize: m(n.minSize),
        padding: o,
        borderWidth: s,
        widget: a,
        containerSpecs: n.containerSpecs
      }, b));
      return
    }
    let E = function(e) {
      let {
        layout: t,
        tileCount: n,
        borderWidth: i,
        padding: r,
        previousContainerSize: l,
        widgetMinMaxSizes: o
      } = e, a = t === u.C5.VERTICAL, s = y(i, r, l, a), d = g(n, r, i, a, s);
      return (0, c.Se)(d, {
        containerOffset: f(i, r),
        gapSize: r,
        tileCount: n,
        isVertical: a
      }, {
        maxWidth: o.maxSize.width,
        maxHeight: o.maxSize.height
      })
    }({
      layout: r,
      tileCount: h,
      borderWidth: s,
      padding: o,
      previousContainerSize: i,
      widgetMinMaxSizes: n
    });
    v(d({
      widgetId: t,
      size: m(E),
      minSize: m(n.minSize),
      containerSpecs: n.containerSpecs,
      padding: o,
      borderWidth: s,
      widget: a
    }, b))
  }, [h]), i.useLayoutEffect(() => {
    if (l.current.participants <= 1) return;
    let e = l.current,
      {
        id: t,
        widgetMinMaxSizes: i,
        containerSize: r,
        padding: o,
        borderWidth: a,
        participants: h,
        widget: O
      } = e,
      b = p(e, ["id", "widgetMinMaxSizes", "containerSize", "padding", "borderWidth", "participants", "widget"]);
    if (null == O || s === n) return;
    let E = function(e) {
      let {
        oldLayout: t,
        newLayout: n,
        tileCount: i,
        borderWidth: r,
        padding: l,
        previousContainerSize: o,
        widgetMinMaxSizes: a
      } = e, s = y(r, l, o, t === u.C5.VERTICAL), d = g(i, l, r, n === u.C5.VERTICAL, s);
      return (0, c.Se)(d, {
        containerOffset: f(r, l),
        gapSize: l,
        tileCount: i,
        isVertical: n === u.C5.VERTICAL
      }, {
        maxWidth: a.maxSize.width,
        maxHeight: a.maxSize.height
      })
    }({
      oldLayout: null != s ? s : n,
      newLayout: n,
      tileCount: h,
      borderWidth: a,
      padding: o,
      previousContainerSize: r,
      widgetMinMaxSizes: i
    });
    v(d({
      widgetId: t,
      size: m(E),
      minSize: m(i.minSize),
      containerSpecs: i.containerSpecs,
      padding: o,
      borderWidth: a,
      widget: O
    }, b))
  }, [n, s]), (0, o.zq)(() => {
    let e = l.current,
      {
        id: t,
        widgetMinMaxSizes: n,
        widget: i,
        padding: r
      } = e,
      o = p(e, ["id", "widgetMinMaxSizes", "widget", "padding"]);
    null != i && v(d({
      widgetId: t,
      size: m(n.minSize),
      minSize: m(n.minSize),
      containerSpecs: n.containerSpecs,
      padding: r,
      widget: i
    }, o))
  })
}