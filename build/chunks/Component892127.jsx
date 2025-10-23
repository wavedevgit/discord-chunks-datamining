/** Chunk was on 50751 **/
/** chunk id: 892127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk338949 = require("./338949.js"),
  Chunk430561 = require("./430561.jsx"),
  Chunk561064 = require("./561064.js"),
  Chunk981631 = require("./981631.js"),
  Chunk377409 = require("./377409.js");

function x(e) {
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

function j(e, t) {
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
let I = Chunk647438.memo(function(e) {
  let {
    widget: t,
    renderWidget: n,
    renderTitle: l,
    renderButtons: I,
    resizeValidation: C,
    className: Z,
    dragContainerClassName: N
  } = e, w = (0, a.e7)([c.Z], () => c.Z.getWidgetConfig(t.type), [t.type]), T = (0, E.xZ)(t.id, E.bc), _ = (0, a.e7)([d.default], () => d.default.isLocked((0, f.getPID)())), P = (0, v.Z)(), A = (0, a.e7)([p.Z], () => p.Z.windowSize((0, m.ZY)(P))), D = r.useCallback((e, t, n, i, r) => {
    let l = p.Z.windowSize((0, m.ZY)((0, v.i)())),
      o = (0, h.jL)(n, l),
      a = (0, h.Ox)(i, l);
    (0, s.Os)(t), (0, s.nv)({
      widgetId: t,
      anchor: o,
      size: a
    });
    let d = e === y.B.MOVE,
      f = (0, h.PY)(n, l.width, l.height, r.width, r.height);
    u.Z.track(S.rMx.OVERLAY_LAYOUT_UPDATED, {
      was_resized: !d,
      was_dragged: d,
      widget_type: c.Z.getWidgetType(t),
      window_width: l.width,
      window_height: l.height,
      widget_width: r.width,
      widget_height: r.height,
      widget_left: f.left,
      widget_top: f.top
    })
  }, []), R = r.useCallback(e => {
    (0, s.Os)(e)
  }, []), {
    id: k,
    pinned: L,
    zIndex: M,
    size: V,
    anchor: z,
    minSize: U
  } = t, W = r.useMemo(() => (0, h.w_)(V, A), [V, A]), G = (0, h.KR)(z, A), {
    resizeX: F,
    resizeY: H,
    dragAnywhere: B
  } = null != w ? w : {}, Y = L || !_, Q = r.useMemo(() => ({
    minX: 0,
    minY: 0,
    maxX: A.width,
    maxY: A.height
  }), [A]), K = r.useCallback(e => n(j(x({}, e), {
    widget: t,
    dragging: null != e.dragOperation,
    className: Z
  })), [t, n, Z]), X = r.useCallback(e => null != l || null != I ? (0, i.jsxs)("div", {
    className: o()(b.extrasContainer, T && b.fullFlex),
    children: [null == l ? true : l(t), null == I ? true : I(t, e)]
  }) : null, [t, l, T, I]), J = (0, a.e7)([O.Z], () => O.Z.hasRenderDebugMode(g.GO.WidgetAreas)), q = r.useMemo(() => {
    if (null != C) return e => C(j(x({}, e), {
      widget: t
    }))
  }, [C, t]);
  return (0, i.jsx)(y.Z, {
    className: o()({
      [b.debug]: J,
      [b.debugUnpinned]: J && !L,
      [b.debugPinned]: J && L
    }, N),
    id: k,
    size: W,
    anchor: G,
    container: Q,
    minSize: null != U ? U : {
      width: 0,
      height: 0
    },
    hidden: !Y,
    locked: _,
    resizeX: null != F && F,
    resizeY: null != H && H,
    style: {
      zIndex: M
    },
    dragAnywhere: null != B && B,
    active: !_,
    onUpdate: D,
    onClick: R,
    targetWindow: P,
    forceShowExtras: T,
    renderExtras: X,
    resizeValidation: q,
    children: K
  })
})