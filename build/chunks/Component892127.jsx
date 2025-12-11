/** Chunk was on 50751 **/
/** chunk id: 892127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk765250 = require("./765250.js"),
  Chunk13245 = require("./13245.js"),
  Chunk355863 = require("./355863.js"),
  Chunk451478 = require("./451478.js"),
  Chunk434529 = require("./434529.js"),
  Chunk830917 = require("./830917.js"),
  Chunk837268 = require("./837268.js"),
  Chunk353038 = require("./353038.jsx"),
  Chunk338949 = require("./338949.js"),
  Chunk430561 = require("./430561.jsx"),
  Chunk985149 = require("./985149.js"),
  Chunk561064 = require("./561064.js"),
  Chunk981631 = require("./981631.js"),
  Chunk659709 = require("./659709.js");

function S(e) {
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

function x(e, t) {
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
let I = Chunk473749.memo(function(e) {
  let {
    widget: t,
    renderWidget: n,
    renderTitle: a,
    renderButtons: I,
    resizeValidation: j,
    className: C,
    dragContainerClassName: _
  } = e, Z = (0, o.e7)([u.Z], () => u.Z.getWidgetConfig(t.type), [t.type]), N = (0, b.xZ)(t.id, b.bc), w = (0, y.Z)(), T = (0, O.Z)(), P = (0, o.e7)([d.Z], () => d.Z.windowSize((0, h.ZY)(T))), A = r.useCallback((e, t, n, i, r) => {
    let a = d.Z.windowSize((0, h.ZY)((0, O.i)())),
      l = (0, f.jL)(n, a),
      o = (0, f.Ox)(i, a);
    (0, s.Os)(t), (0, s.nv)({
      widgetId: t,
      anchor: l,
      size: o
    });
    let p = e === m.B.MOVE,
      g = (0, f.PY)(n, a.width, a.height, r.width, r.height);
    c.Z.track(v.rMx.OVERLAY_LAYOUT_UPDATED, {
      was_resized: !p,
      was_dragged: p,
      widget_type: u.Z.getWidgetType(t),
      window_width: a.width,
      window_height: a.height,
      widget_width: r.width,
      widget_height: r.height,
      widget_left: g.left,
      widget_top: g.top
    })
  }, []), k = r.useCallback(e => {
    (0, s.Os)(e)
  }, []), {
    id: D,
    pinned: R,
    zIndex: L,
    size: M,
    anchor: z,
    minSize: V
  } = t, U = r.useMemo(() => (0, f.w_)(M, P), [M, P]), W = (0, f.KR)(z, P), {
    resizeX: G,
    resizeY: F,
    dragAnywhere: H
  } = null != Z ? Z : {}, B = R || !w, Y = r.useMemo(() => ({
    minX: 0,
    minY: 0,
    maxX: P.width,
    maxY: P.height
  }), [P]), Q = r.useCallback(e => n(x(S({}, e), {
    widget: t,
    dragging: null != e.dragOperation,
    className: C
  })), [t, n, C]), K = r.useCallback(e => null != a || null != I ? (0, i.jsxs)("div", {
    className: l()(E.extrasContainer, N && E.fullFlex),
    children: [null == a ? true : a(t), null == I ? true : I(t, e)]
  }) : null, [t, a, N, I]), X = (0, o.e7)([g.Z], () => g.Z.hasRenderDebugMode(p.GO.WidgetAreas)), J = r.useMemo(() => {
    if (null != j) return e => j(x(S({}, e), {
      widget: t
    }))
  }, [j, t]);
  return (0, i.jsx)(m.Z, {
    className: l()({
      [E.debug]: X,
      [E.debugUnpinned]: X && !R,
      [E.debugPinned]: X && R
    }, _),
    id: D,
    size: U,
    anchor: W,
    container: Y,
    minSize: null != V ? V : {
      width: 0,
      height: 0
    },
    hidden: !B,
    locked: w,
    resizeX: null != G && G,
    resizeY: null != F && F,
    style: {
      zIndex: L
    },
    dragAnywhere: null != H && H,
    active: !w,
    onUpdate: A,
    onClick: k,
    targetWindow: T,
    forceShowExtras: N,
    renderExtras: K,
    resizeValidation: J,
    children: Q
  })
})