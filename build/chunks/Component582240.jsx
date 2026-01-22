/** Chunk was on 71447 **/
/** chunk id: 582240, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk391973 = require("./391973.js"),
  Chunk684013 = require("./684013.js"),
  Chunk555528 = require("./555528.js"),
  Chunk531685 = require("./531685.js"),
  Chunk5463 = require("./5463.js"),
  Chunk365971 = require("./365971.js"),
  Chunk41984 = require("./41984.js"),
  Chunk129537 = require("./129537.jsx"),
  Chunk127242 = require("./127242.js"),
  Chunk968898 = require("./968898.jsx"),
  Chunk481484 = require("./481484.js"),
  Chunk545807 = require("./545807.js"),
  Chunk652215 = require("./652215.js"),
  Chunk121834 = require("./121834.js");

function b(e) {
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
let x = Chunk64700.memo(function(e) {
  let {
    widget: t,
    renderWidget: n,
    renderTitle: l,
    renderButtons: x,
    resizeValidation: j,
    className: I,
    dragContainerClassName: N
  } = e, w = (0, o.bG)([u.A], () => u.A.getWidgetConfig(t.type), [t.type]), T = (0, y.RE)(t.id, y.X1), C = (0, A.A)(), _ = (0, O.A)(), P = (0, o.bG)([d.A], () => d.A.windowSize((0, h.Q2)(_))), D = r.useCallback((e, t, n, i, r) => {
    let l = d.A.windowSize((0, h.Q2)((0, O.b)())),
      a = (0, p.NO)(n, l),
      o = (0, p.R9)(i, l);
    (0, s.uD)(t), (0, s.Ju)({
      widgetId: t,
      anchor: a,
      size: o
    });
    let f = e === m.P.MOVE,
      g = (0, p.Ly)(n, l.width, l.height, r.width, r.height);
    c.A.track(E.HAw.OVERLAY_LAYOUT_UPDATED, {
      was_resized: !f,
      was_dragged: f,
      widget_type: u.A.getWidgetType(t),
      window_width: l.width,
      window_height: l.height,
      widget_width: r.width,
      widget_height: r.height,
      widget_left: g.left,
      widget_top: g.top
    })
  }, []), R = r.useCallback(e => {
    (0, s.uD)(e)
  }, []), {
    id: L,
    pinned: k,
    zIndex: M,
    size: V,
    anchor: U,
    minSize: z
  } = t, G = r.useMemo(() => (0, p.fd)(V, P), [V, P]), H = (0, p.Nv)(U, P), {
    resizeX: Y,
    resizeY: F,
    dragAnywhere: K
  } = null != w ? w : {}, Z = k || !C, W = r.useMemo(() => ({
    minX: 0,
    minY: 0,
    maxX: P.width,
    maxY: P.height
  }), [P]), B = r.useCallback(e => n(S(b({}, e), {
    widget: t,
    dragging: null != e.dragOperation,
    className: I
  })), [t, n, I]), X = r.useCallback(e => null != l || null != x ? (0, i.jsxs)("div", {
    className: a()(v.vJ, T && v.vw),
    children: [null == l ? true : l(t), null == x ? true : x(t, e)]
  }) : null, [t, l, T, x]), Q = (0, o.bG)([g.A], () => g.A.hasRenderDebugMode(f.x7.WidgetAreas)), J = r.useMemo(() => {
    if (null != j) return e => j(S(b({}, e), {
      widget: t
    }))
  }, [j, t]);
  return (0, i.jsx)(m.A, {
    className: a()({
      [v.Yz]: Q,
      [v.xu]: Q && !k,
      [v.E]: Q && k
    }, N),
    id: L,
    size: G,
    anchor: H,
    container: W,
    minSize: null != z ? z : {
      width: 0,
      height: 0
    },
    hidden: !Z,
    locked: C,
    resizeX: null != Y && Y,
    resizeY: null != F && F,
    style: {
      zIndex: M
    },
    dragAnywhere: null != K && K,
    active: !C,
    onUpdate: D,
    onClick: R,
    targetWindow: _,
    forceShowExtras: T,
    renderExtras: X,
    resizeValidation: J,
    children: B
  })
})