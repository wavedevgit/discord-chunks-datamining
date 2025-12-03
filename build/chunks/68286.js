/** Chunk was on 50751 **/
/** chunk id: 68286, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Bz: () => Z,
  Dl: () => N,
  bt: () => y,
  wD: () => C
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk765250 = require("./765250.js"),
  Chunk393238 = require("./393238.js"),
  Chunk493773 = require("./493773.js"),
  Chunk110924 = require("./110924.js"),
  Chunk451478 = require("./451478.js"),
  Chunk830917 = require("./830917.js"),
  Chunk353038 = require("./353038.jsx"),
  Chunk461393 = require("./461393.js"),
  Chunk340101 = require("./340101.js"),
  Chunk561064 = require("./561064.js");

function m(e) {
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

function g(e, t) {
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
let y = 256,
  O = (e, t) => 2 * e + 2 * t,
  E = e => {
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
  let r = arguments.length > 4 && true !== arguments[4] ? arguments[4] : y,
    l = {
      width: r,
      height: (0, h.MH)(r)
    },
    a = Math.max(1, e),
    o = (0, h.bj)(e, t),
    s = O(n, t);
  return i ? {
    width: l.width + s,
    height: l.height * a + o + s
  } : {
    width: l.width * a + o + s,
    height: l.height + s
  }
}

function S(e, t, n, i) {
  let r = O(e, t);
  return i ? n.width - r : (0, h.eJ)(n.height - r)
}

function b(e) {
  return e.height > e.width
}
let x = 180 / 1080;

function j(e) {
  let {
    layout: t,
    tileCount: n,
    borderWidth: i,
    padding: r,
    previousContainerSize: l,
    widgetMinMaxSizes: a
  } = e, o = t === p.C5.VERTICAL, s = S(i, r, l, o), c = v(n, r, i, o, s);
  return (0, h.Se)(c, {
    containerOffset: O(i, r),
    gapSize: r,
    tileCount: n,
    isVertical: o
  }, {
    maxWidth: a.maxSize.width,
    maxHeight: a.maxSize.height
  })
}

function I(e) {
  var {
    widgetId: t,
    size: n,
    borderWidth: i,
    padding: r,
    minSize: a,
    containerSpecs: o,
    defaultSize: s
  } = e, c = g(e, ["widgetId", "size", "borderWidth", "padding", "minSize", "containerSpecs", "defaultSize"]);
  let u = e => C(m({
      operation: d.B.RESIZE_NORTH,
      computedSize: e,
      originSize: e,
      borderWidth: i,
      padding: r,
      containerSpecs: o
    }, c)),
    h = {
      widgetId: t,
      size: m({
        fixed: n.fixed
      }, u(n)),
      minSize: m({}, u(a))
    };
  null != s && (h.defaultSize = m({}, u(s))), (0, l.nv)(m({}, h))
}
let C = e => {
  let {
    operation: t,
    computedSize: n,
    originSize: i,
    borderWidth: r,
    padding: l,
    containerSpecs: a
  } = e, o = O(r, l), s = Math.max(1, i.width), c = Math.max(1, i.height), u = {
    width: s,
    height: c
  }, p = b(u), f = function(e, t, n) {
    let i = b(n),
      r = S(e, t, n, i),
      l = (0, h.MH)(r);
    return i ? Math.floor(n.height / l) : Math.floor(n.width / r)
  }(r, l, u), m = (0, h.f8)({
    width: s,
    height: c,
    containerOffset: o,
    gapSize: l,
    tileCount: f,
    isVertical: p
  }), g = (0, h.bj)(f, l), y = (() => {
    switch (t) {
      case d.B.RESIZE_NORTH:
      case d.B.RESIZE_SOUTH:
        return {
          height: n.height, width: (e => {
            let t = p ? e - g : e,
              n = (0, h.GB)(t - o, m.horizontalRatio);
            return p || (n += g), n + o
          })(n.height)
        };
      default:
        return {
          width: n.width, height: (e => {
            let t = p ? e : e - g,
              n = (0, h.E5)(t - o, m.verticalRatio);
            return p && (n += g), n + o
          })(n.width)
        }
    }
  })();
  return (0, h.Se)(y, {
    containerOffset: o,
    gapSize: l,
    tileCount: f,
    isVertical: p
  }, {
    maxWidth: .75 * a.maxX,
    maxHeight: .75 * a.maxY
  })
};

function Z(e) {
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
    width: "number" == typeof o.width ? o.width : y,
    height: "number" == typeof o.height ? o.height : (0, h.MH)(y)
  }, {
    width: p = s,
    height: m = d,
    ref: g
  } = (0, a.ZP)(), E = (0, f.Z)(), b = (0, u.ZY)(E), j = (0, r.e7)([c.Z], () => c.Z.windowSize(b), [b]), I = function(e) {
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
    }, c = {
      width: .75 * s.maxX,
      height: .75 * s.maxY
    }, u = (null != l ? l : 0) * x;
    return u = Math.max(o.height, u), u = Math.min(c.height, u), {
      minSize: o,
      defaultSize: v(t, n, i, a, (0, h.eJ)(u)),
      maxSize: c,
      containerSpecs: s
    }
  }({
    tileCount: t,
    padding: n,
    borderWidth: i,
    windowWidth: j.width,
    windowHeight: j.height,
    isVertical: l
  }), C = O(i, n), Z = S(i, n, {
    width: p + C,
    height: m + C
  }, l), N = (0, h.MH)(Z);
  return {
    tileWidth: Z,
    tileHeight: N,
    widgetWidth: s,
    widgetHeight: d,
    containerRef: g,
    containerMinMaxSizes: I
  }
}

function N(e) {
  let {
    streamParticipants: t,
    layout: n,
    widgetLayoutSpecs: r
  } = e, l = i.useRef(r);
  l.current = r;
  let a = (0, s.Z)(n),
    c = t.length,
    u = r.widgetMinMaxSizes.maxSize.width * r.widgetMinMaxSizes.maxSize.height;
  (0, o.Ng)(() => {
    let e = l.current,
      {
        id: t,
        widgetMinMaxSizes: n,
        containerSize: i,
        layout: r,
        padding: a,
        widget: o,
        borderWidth: s,
        locked: u
      } = e,
      d = g(e, ["id", "widgetMinMaxSizes", "containerSize", "layout", "padding", "widget", "borderWidth", "locked"]);
    null != o && I(m({
      widgetId: t,
      size: E(j({
        layout: r,
        tileCount: Math.max(1, c),
        borderWidth: s,
        padding: a,
        previousContainerSize: n.defaultSize,
        widgetMinMaxSizes: n
      })),
      defaultSize: n.defaultSize,
      minSize: E(n.minSize),
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
        locked: u
      } = e,
      d = g(e, ["id", "widgetMinMaxSizes", "containerSize", "layout", "padding", "widget", "borderWidth", "locked"]);
    if (null != o) {
      if (0 === c) {
        if (u) return;
        I(m({
          widgetId: t,
          size: E(n.defaultSize),
          defaultSize: n.defaultSize,
          minSize: E(n.minSize),
          padding: a,
          borderWidth: s,
          widget: o,
          containerSpecs: n.containerSpecs
        }, d));
        return
      }
      I(m({
        widgetId: t,
        size: E(j({
          layout: r,
          tileCount: c,
          borderWidth: s,
          padding: a,
          previousContainerSize: i,
          widgetMinMaxSizes: n
        })),
        minSize: E(n.minSize),
        containerSpecs: n.containerSpecs,
        padding: a,
        borderWidth: s,
        widget: o
      }, d))
    }
  }, [c, u]), i.useLayoutEffect(() => {
    if (l.current.participants <= 1) return;
    let e = l.current,
      {
        id: t,
        widgetMinMaxSizes: i,
        containerSize: r,
        padding: o,
        borderWidth: s,
        participants: c,
        widget: u
      } = e,
      d = g(e, ["id", "widgetMinMaxSizes", "containerSize", "padding", "borderWidth", "participants", "widget"]);
    if (null == u || a === n) return;
    let f = function(e) {
      let {
        oldLayout: t,
        newLayout: n,
        tileCount: i,
        borderWidth: r,
        padding: l,
        previousContainerSize: a,
        widgetMinMaxSizes: o
      } = e, s = S(r, l, a, t === p.C5.VERTICAL), c = v(i, l, r, n === p.C5.VERTICAL, s);
      return (0, h.Se)(c, {
        containerOffset: O(r, l),
        gapSize: l,
        tileCount: i,
        isVertical: n === p.C5.VERTICAL
      }, {
        maxWidth: o.maxSize.width,
        maxHeight: o.maxSize.height
      })
    }({
      oldLayout: null != a ? a : n,
      newLayout: n,
      tileCount: c,
      borderWidth: s,
      padding: o,
      previousContainerSize: r,
      widgetMinMaxSizes: i
    });
    I(m({
      widgetId: t,
      size: E(f),
      minSize: E(i.minSize),
      containerSpecs: i.containerSpecs,
      padding: o,
      borderWidth: s,
      widget: u
    }, d))
  }, [n, a]), (0, o.zq)(() => {
    let e = l.current,
      {
        id: t,
        widgetMinMaxSizes: n,
        widget: i,
        padding: r
      } = e,
      a = g(e, ["id", "widgetMinMaxSizes", "widget", "padding"]);
    null != i && I(m({
      widgetId: t,
      size: E(n.defaultSize),
      defaultSize: n.defaultSize,
      minSize: E(n.minSize),
      containerSpecs: n.containerSpecs,
      padding: r,
      widget: i
    }, a))
  })
}