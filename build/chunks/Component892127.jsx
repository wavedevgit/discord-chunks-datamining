/** Chunk was on 50751 **/
/** chunk id: 892127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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
let j = Chunk473749.memo(function(e) {
  let {
    widget: t,
    renderWidget: n,
    renderTitle: l,
    renderButtons: j,
    resizeValidation: I,
    className: Z,
    dragContainerClassName: C
  } = e, N = (0, a.e7)([c.Z], () => c.Z.getWidgetConfig(t.type), [t.type]), w = (0, y.xZ)(t.id, y.bc), T = (0, O.Z)(), _ = (0, E.Z)(), P = (0, a.e7)([d.Z], () => d.Z.windowSize((0, p.ZY)(_))), A = r.useCallback((e, t, n, i, r) => {
    let l = d.Z.windowSize((0, p.ZY)((0, E.i)())),
      o = (0, h.jL)(n, l),
      a = (0, h.Ox)(i, l);
    (0, s.Os)(t), (0, s.nv)({
      widgetId: t,
      anchor: o,
      size: a
    });
    let f = e === m.B.MOVE,
      g = (0, h.PY)(n, l.width, l.height, r.width, r.height);
    u.Z.track(v.rMx.OVERLAY_LAYOUT_UPDATED, {
      was_resized: !f,
      was_dragged: f,
      widget_type: c.Z.getWidgetType(t),
      window_width: l.width,
      window_height: l.height,
      widget_width: r.width,
      widget_height: r.height,
      widget_left: g.left,
      widget_top: g.top
    })
  }, []), D = r.useCallback(e => {
    (0, s.Os)(e)
  }, []), {
    id: R,
    pinned: k,
    zIndex: L,
    size: M,
    anchor: V,
    minSize: z
  } = t, U = r.useMemo(() => (0, h.w_)(M, P), [M, P]), W = (0, h.KR)(V, P), {
    resizeX: G,
    resizeY: F,
    dragAnywhere: H
  } = null != N ? N : {}, Y = k || !T, B = r.useMemo(() => ({
    minX: 0,
    minY: 0,
    maxX: P.width,
    maxY: P.height
  }), [P]), Q = r.useCallback(e => n(x(S({}, e), {
    widget: t,
    dragging: null != e.dragOperation,
    className: Z
  })), [t, n, Z]), K = r.useCallback(e => null != l || null != j ? (0, i.jsxs)("div", {
    className: o()(b.extrasContainer, w && b.fullFlex),
    children: [null == l ? true : l(t), null == j ? true : j(t, e)]
  }) : null, [t, l, w, j]), X = (0, a.e7)([g.Z], () => g.Z.hasRenderDebugMode(f.GO.WidgetAreas)), J = r.useMemo(() => {
    if (null != I) return e => I(x(S({}, e), {
      widget: t
    }))
  }, [I, t]);
  return (0, i.jsx)(m.Z, {
    className: o()({
      [b.debug]: X,
      [b.debugUnpinned]: X && !k,
      [b.debugPinned]: X && k
    }, C),
    id: R,
    size: U,
    anchor: W,
    container: B,
    minSize: null != z ? z : {
      width: 0,
      height: 0
    },
    hidden: !Y,
    locked: T,
    resizeX: null != G && G,
    resizeY: null != F && F,
    style: {
      zIndex: L
    },
    dragAnywhere: null != H && H,
    active: !T,
    onUpdate: A,
    onClick: D,
    targetWindow: _,
    forceShowExtras: w,
    renderExtras: K,
    resizeValidation: J,
    children: Q
  })
})