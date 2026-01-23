/** Chunk was on 38663 **/
/** chunk id: 451395, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  gY: () => m,
  jV: () => y,
  mG: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk131346 = require("./131346.js"),
  Chunk522437 = require("./522437.js"),
  Chunk352944 = require("./352944.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
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
  var n, r, l, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.getOwnPropertyNames(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  return i
}

function m(e) {
  let {
    dragRef: t,
    dropRef: n,
    index: r,
    listType: i,
    itemId: a,
    itemType: u,
    itemPreviewProps: d,
    onReorder: f,
    onEnd: p,
    disableDefaultPreview: g = true
  } = e, m = "".concat(u, "_").concat(i), b = l.useCallback((e, t) => {
    null == f || f(e, t)
  }, [f]), y = l.useMemo(() => ({
    id: a,
    index: r,
    itemType: u,
    itemPreviewProps: d
  }), [a, r, u, d]), [{
    isDragging: O
  }, j, x] = (0, o.i)({
    type: m,
    item: y,
    collect: e => ({
      isDragging: e.isDragging()
    }),
    end: p
  });
  l.useEffect(() => {
    g && x((0, c.n)(), {
      captureDraggingState: true
    })
  }, [x, g]);
  let [{
    dragSourcePosition: h
  }, v] = (0, s.H)({
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
  return l.useLayoutEffect(() => (j(t), v(n), () => {
    v(null), j(null)
  }), [j, t, v, n]), {
    isDragging: O,
    dragSourcePosition: h
  }
}
let b = Chunk64700.memo(function(e) {
  let {
    index: t,
    className: n,
    draggingClassName: i,
    dropBeforeClassName: o,
    dropAfterClassName: s,
    "aria-label": c,
    children: u
  } = e, d = g(e, ["index", "className", "draggingClassName", "dropBeforeClassName", "dropAfterClassName", "aria-label", "children"]), f = l.useRef(null), {
    isDragging: b,
    dragSourcePosition: y
  } = m(p({
    dragRef: f,
    dropRef: f,
    index: t
  }, d)), O = null != y, j = O && t < y, x = O && t > y;
  return (0, r.jsx)("div", {
    ref: f,
    className: a()(n, b && i, j && o, x && s),
    "aria-label": c,
    children: u
  })
});

function y(e) {
  var t, n;
  let {
    buttonRef: l,
    "aria-label": i,
    iconSize: a = "sm"
  } = e, o = g(e, ["buttonRef", "aria-label", "iconSize"]);
  return (0, r.jsx)(u.un, {
    body: f.intl.format(f.t["zvln/l"], {
      emphasizeHook: e => (0, r.jsx)("strong", {
        children: e
      })
    }),
    ariaHidden: true,
    children: (0, r.jsx)(d.DUT, (t = p({
      innerRef: l,
      "aria-label": null != i ? i : f.intl.string(f.t.n9T3Hi),
      "aria-keyshortcuts": "Control+D, Meta+D"
    }, o), n = n = {
      children: (0, r.jsx)(d.WP0, {
        size: a,
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