/** Chunk was on 2803 **/
/** chunk id: 892127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk765250 = require("./765250.js"),
  Chunk13245 = require("./13245.js"),
  Chunk355863 = require("./355863.js"),
  Chunk237997 = require("./237997.js"),
  Chunk451478 = require("./451478.js"),
  Chunk434529 = require("./434529.js"),
  Chunk145597 = require("./145597.js"),
  Chunk830917 = require("./830917.js"),
  Chunk837268 = require("./837268.js"),
  Chunk353038 = require("./353038.jsx"),
  Chunk610394 = require("./610394.js"),
  Chunk561064 = require("./561064.js"),
  Chunk981631 = require("./981631.js"),
  Chunk156581 = require("./156581.js");

function _(e) {
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

function I(e, t) {
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
let S = Chunk647438.memo(function(e) {
  let {
    widget: t,
    renderWidget: n,
    renderTitle: o,
    renderButtons: S,
    resizeValidation: x,
    className: j,
    dragContainerClassName: C
  } = e, N = u.Z.getWidgetConfig(t.type), w = (0, a.e7)([d.default], () => d.default.isLocked((0, h.getPID)())), Z = (0, v.Z)(), P = (0, a.e7)([p.Z], () => p.Z.windowSize((0, m.ZY)(Z))), T = r.useCallback((e, t, n, i, r) => {
    let o = p.Z.windowSize((0, m.ZY)((0, v.i)())),
      l = (0, f.jL)(n, o),
      a = (0, f.Ox)(i, o);
    (0, s.Os)(t), (0, s.nv)({
      widgetId: t,
      anchor: l,
      size: a
    });
    let d = e === y.B.MOVE,
      h = (0, f.PY)(n, o.width, o.height, r.width, r.height);
    c.Z.track(b.rMx.OVERLAY_LAYOUT_UPDATED, {
      was_resized: !d,
      was_dragged: d,
      widget_type: u.Z.getWidgetType(t),
      window_width: o.width,
      window_height: o.height,
      widget_width: r.width,
      widget_height: r.height,
      widget_left: h.left,
      widget_top: h.top
    })
  }, []), A = r.useCallback(e => {
    (0, s.Os)(e)
  }, []), {
    id: k,
    pinned: D,
    zIndex: R,
    size: L,
    anchor: M,
    minSize: z
  } = t, U = r.useMemo(() => (0, f.w_)(L, P), [L, P]), V = (0, f.KR)(M, P), {
    resizeX: W,
    resizeY: G,
    dragAnywhere: F
  } = null != N ? N : {}, B = D || !w, H = r.useMemo(() => ({
    minX: 0,
    minY: 0,
    maxX: P.width,
    maxY: P.height
  }), [P]), Y = r.useCallback(e => n(I(_({}, e), {
    widget: t,
    dragging: null != e.dragOperation,
    className: j
  })), [t, n, j]), Q = r.useCallback(e => null != o || null != S ? (0, i.jsxs)("div", {
    className: E.extrasContainer,
    children: [null == o ? true : o(t), null == S ? true : S(t, e)]
  }) : null, [t, o, S]), K = (0, a.e7)([O.ZP], () => O.ZP.hasRenderDebugMode(g.GO.WidgetAreas)), X = r.useMemo(() => {
    if (null != x) return e => x(I(_({}, e), {
      widget: t
    }))
  }, [x, t]);
  return (0, i.jsx)(y.Z, {
    className: l()({
      [E.debug]: K,
      [E.debugUnpinned]: K && !D,
      [E.debugPinned]: K && D
    }, C),
    id: k,
    size: U,
    anchor: V,
    container: H,
    minSize: null != z ? z : {
      width: 0,
      height: 0
    },
    hidden: !B,
    locked: w,
    resizeX: null != W && W,
    resizeY: null != G && G,
    style: {
      zIndex: R
    },
    dragAnywhere: null != F && F,
    active: !w,
    onUpdate: T,
    onClick: A,
    targetWindow: Z,
    renderExtras: Q,
    resizeValidation: X,
    children: Y
  })
})