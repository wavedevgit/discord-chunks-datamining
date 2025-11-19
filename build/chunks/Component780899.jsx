/** Chunk was on 52708 **/
/** chunk id: 780899, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y9: () => p,
  e_: () => b,
  yW: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk891371 = require("./891371.js"),
  Chunk692992 = require("./692992.js"),
  Chunk665379 = require("./665379.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e) {
  let {
    dragRef: t,
    dropRef: n,
    index: r,
    listType: a,
    itemId: l,
    itemType: u,
    itemPreviewProps: d,
    onReorder: f,
    onEnd: g,
    disableDefaultPreview: p = true
  } = e, m = "".concat(u, "_").concat(a), b = i.useCallback((e, t) => {
    null == f || f(e, t)
  }, [f]), h = i.useMemo(() => ({
    id: l,
    index: r,
    itemType: u,
    itemPreviewProps: d
  }), [l, r, u, d]), [{
    isDragging: y
  }, O, v] = (0, o.c)({
    type: m,
    item: h,
    collect: e => ({
      isDragging: e.isDragging()
    }),
    end: g
  });
  i.useEffect(() => {
    p && v((0, s.r)(), {
      captureDraggingState: true
    })
  }, [v, p]);
  let [{
    dragSourcePosition: j
  }, x] = (0, c.L)({
    accept: m,
    drop: e => {
      let t = e.index;
      t !== r && (b(t, r), e.index = r)
    },
    collect: e => {
      let t = e.getItem(),
        n = null;
      return null != t && e.isOver({
        shallow: true
      }) && e.canDrop() && (n = t.index), {
        dragSourcePosition: n
      }
    }
  });
  return i.useLayoutEffect(() => (O(t), x(n), () => {
    x(null), O(null)
  }), [O, t, x, n]), {
    isDragging: y,
    dragSourcePosition: j
  }
}
let m = Chunk473749.memo(function(e) {
  var {
    index: t,
    className: n,
    draggingClassName: a,
    dropBeforeClassName: o,
    dropAfterClassName: c,
    "aria-label": s,
    children: u
  } = e, d = g(e, ["index", "className", "draggingClassName", "dropBeforeClassName", "dropAfterClassName", "aria-label", "children"]);
  let m = i.useRef(null),
    {
      isDragging: b,
      dragSourcePosition: h
    } = p(f({
      dragRef: m,
      dropRef: m,
      index: t
    }, d)),
    y = null != h,
    O = y && t < h,
    v = y && t > h;
  return (0, r.jsx)("div", {
    ref: m,
    className: l()(n, b && a, O && o, v && c),
    "aria-label": s,
    children: u
  })
});

function b(e) {
  var t, n, {
      buttonRef: i,
      "aria-label": a,
      iconSize: l = "sm"
    } = e,
    o = g(e, ["buttonRef", "aria-label", "iconSize"]);
  return (0, r.jsx)(u.P3F, (t = f({
    innerRef: i,
    "aria-label": null != a ? a : d.intl.string(d.t.Zc1neM)
  }, o), n = n = {
    children: (0, r.jsx)(u.Vni, {
      size: l,
      color: "currentColor"
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}