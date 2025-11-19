/** Chunk was on 50751 **/
/** chunk id: 892127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk377409 = require("./377409.js");

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

function S(e, t) {
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
let x = Chunk473749.memo(function(e) {
  let {
    widget: t,
    renderWidget: n,
    renderTitle: l,
    renderButtons: x,
    resizeValidation: I,
    className: C,
    dragContainerClassName: j
  } = e, N = (0, a.e7)([u.Z], () => u.Z.getWidgetConfig(t.type), [t.type]), Z = (0, y.xZ)(t.id, y.bc), w = (0, O.Z)(), T = (0, v.Z)(), P = (0, a.e7)([d.Z], () => d.Z.windowSize((0, p.ZY)(T))), A = r.useCallback((e, t, n, i, r) => {
    let l = d.Z.windowSize((0, p.ZY)((0, v.i)())),
      o = (0, h.jL)(n, l),
      a = (0, h.Ox)(i, l);
    (0, s.Os)(t), (0, s.nv)({
      widgetId: t,
      anchor: o,
      size: a
    });
    let f = e === m.B.MOVE,
      g = (0, h.PY)(n, l.width, l.height, r.width, r.height);
    c.Z.track(E.rMx.OVERLAY_LAYOUT_UPDATED, {
      was_resized: !f,
      was_dragged: f,
      widget_type: u.Z.getWidgetType(t),
      window_width: l.width,
      window_height: l.height,
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
  } = t, U = r.useMemo(() => (0, h.w_)(M, P), [M, P]), W = (0, h.KR)(z, P), {
    resizeX: G,
    resizeY: F,
    dragAnywhere: B
  } = null != N ? N : {}, H = R || !w, Y = r.useMemo(() => ({
    minX: 0,
    minY: 0,
    maxX: P.width,
    maxY: P.height
  }), [P]), Q = r.useCallback(e => n(S(_({}, e), {
    widget: t,
    dragging: null != e.dragOperation,
    className: C
  })), [t, n, C]), K = r.useCallback(e => null != l || null != x ? (0, i.jsxs)("div", {
    className: o()(b.extrasContainer, Z && b.fullFlex),
    children: [null == l ? true : l(t), null == x ? true : x(t, e)]
  }) : null, [t, l, Z, x]), X = (0, a.e7)([g.Z], () => g.Z.hasRenderDebugMode(f.GO.WidgetAreas)), J = r.useMemo(() => {
    if (null != I) return e => I(S(_({}, e), {
      widget: t
    }))
  }, [I, t]);
  return (0, i.jsx)(m.Z, {
    className: o()({
      [b.debug]: X,
      [b.debugUnpinned]: X && !R,
      [b.debugPinned]: X && R
    }, j),
    id: D,
    size: U,
    anchor: W,
    container: Y,
    minSize: null != V ? V : {
      width: 0,
      height: 0
    },
    hidden: !H,
    locked: w,
    resizeX: null != G && G,
    resizeY: null != F && F,
    style: {
      zIndex: L
    },
    dragAnywhere: null != B && B,
    active: !w,
    onUpdate: A,
    onClick: k,
    targetWindow: T,
    forceShowExtras: Z,
    renderExtras: K,
    resizeValidation: J,
    children: Q
  })
})