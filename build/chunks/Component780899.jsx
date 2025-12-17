/** Chunk was on 39442 **/
/** chunk id: 780899, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y9: () => b,
  e_: () => h,
  yW: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk891371 = require("./891371.js"),
  Chunk692992 = require("./692992.js"),
  Chunk665379 = require("./665379.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
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

function p(e, t) {
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

function b(e) {
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
  } = e, b = "".concat(u, "_").concat(a), m = i.useCallback((e, t) => {
    null == f || f(e, t)
  }, [f]), h = i.useMemo(() => ({
    id: l,
    index: r,
    itemType: u,
    itemPreviewProps: d
  }), [l, r, u, d]), [{
    isDragging: y
  }, v, O] = (0, o.c)({
    type: b,
    item: h,
    collect: e => ({
      isDragging: e.isDragging()
    }),
    end: g
  });
  i.useEffect(() => {
    p && O((0, s.r)(), {
      captureDraggingState: true
    })
  }, [O, p]);
  let [{
    dragSourcePosition: j
  }, x] = (0, c.L)({
    accept: b,
    drop: e => {
      let t = e.index;
      t !== r && (m(t, r), e.index = r)
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
  return i.useLayoutEffect(() => (v(t), x(n), () => {
    x(null), v(null)
  }), [v, t, x, n]), {
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
  } = e, d = p(e, ["index", "className", "draggingClassName", "dropBeforeClassName", "dropAfterClassName", "aria-label", "children"]);
  let f = i.useRef(null),
    {
      isDragging: m,
      dragSourcePosition: h
    } = b(g({
      dragRef: f,
      dropRef: f,
      index: t
    }, d)),
    y = null != h,
    v = y && t < h,
    O = y && t > h;
  return (0, r.jsx)("div", {
    ref: f,
    className: l()(n, m && a, v && o, O && c),
    "aria-label": s,
    children: u
  })
});

function h(e) {
  var t, n, {
      buttonRef: i,
      "aria-label": a,
      iconSize: l = "sm"
    } = e,
    o = p(e, ["buttonRef", "aria-label", "iconSize"]);
  return (0, r.jsx)(u.i_, {
    body: f.intl.format(f.t["zvln/l"], {
      emphasizeHook: e => (0, r.jsx)("strong", {
        children: e
      })
    }),
    ariaHidden: true,
    children: (0, r.jsx)(d.P3F, (t = g({
      innerRef: i,
      "aria-label": null != a ? a : f.intl.string(f.t.n9T3Hi),
      "aria-keyshortcuts": "Control+D, Meta+D"
    }, o), n = n = {
      children: (0, r.jsx)(d.Vni, {
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
  })
}