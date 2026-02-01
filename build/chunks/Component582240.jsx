/** Chunk was on 71447 **/
/** chunk id: 582240, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function O(e) {
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
let _ = Chunk64700.memo(function(e) {
  let {
    widget: t,
    renderWidget: n,
    renderTitle: l,
    renderButtons: _,
    resizeValidation: S,
    className: I,
    dragContainerClassName: j
  } = e, T = (0, s.bG)([c.A], () => c.A.getWidgetConfig(t.type), [t.type]), C = (0, y.RE)(t.id, y.X1), N = (0, A.A)(), w = (0, v.A)(), P = (0, s.bG)([d.A], () => d.A.windowSize((0, p.Q2)(w))), D = r.useCallback((e, t, n, i, r) => {
    let l = d.A.windowSize((0, p.Q2)((0, v.b)())),
      a = (0, h.NO)(n, l),
      s = (0, h.R9)(i, l);
    (0, o.uD)(t), (0, o.Ju)({
      widgetId: t,
      anchor: a,
      size: s
    });
    let f = e === g.P.MOVE,
      m = (0, h.Ly)(n, l.width, l.height, r.width, r.height);
    u.A.track(b.HAw.OVERLAY_LAYOUT_UPDATED, {
      was_resized: !f,
      was_dragged: f,
      widget_type: c.A.getWidgetType(t),
      window_width: l.width,
      window_height: l.height,
      widget_width: r.width,
      widget_height: r.height,
      widget_left: m.left,
      widget_top: m.top
    })
  }, []), R = r.useCallback(e => {
    (0, o.uD)(e)
  }, []), {
    id: k,
    pinned: M,
    zIndex: L,
    size: U,
    anchor: G,
    minSize: V
  } = t, z = r.useMemo(() => (0, h.fd)(U, P), [U, P]), F = (0, h.Nv)(G, P), {
    resizeX: H,
    resizeY: Y,
    dragAnywhere: K,
    constrainAutoSizeToExplicitResizeEvents: W
  } = null != T ? T : {}, B = M || !N, Z = r.useMemo(() => ({
    minX: 0,
    minY: 0,
    maxX: P.width,
    maxY: P.height
  }), [P]), X = r.useCallback(e => n(x(O({}, e), {
    widget: t,
    dragging: null != e.dragOperation,
    className: I
  })), [t, n, I]), J = r.useCallback(e => null != l || null != _ ? (0, i.jsxs)("div", {
    className: a()(E.vJ, C && E.vw),
    children: [null == l ? true : l(t), null == _ ? true : _(t, e)]
  }) : null, [t, l, C, _]), Q = (0, s.bG)([m.A], () => m.A.hasRenderDebugMode(f.x7.WidgetAreas)), q = r.useMemo(() => {
    if (null != S) return e => S(x(O({}, e), {
      widget: t
    }))
  }, [S, t]);
  return (0, i.jsx)(g.A, {
    className: a()({
      [E.Yz]: Q,
      [E.xu]: Q && !M,
      [E.E]: Q && M
    }, j),
    id: k,
    size: z,
    anchor: F,
    container: Z,
    minSize: null != V ? V : {
      width: 0,
      height: 0
    },
    hidden: !B,
    locked: N,
    resizeX: null != H && H,
    resizeY: null != Y && Y,
    style: {
      zIndex: L
    },
    dragAnywhere: null != K && K,
    constrainAutoSizeToExplicitResizeEvents: null != W && W,
    active: !N,
    onUpdate: D,
    onClick: R,
    targetWindow: w,
    forceShowExtras: C,
    renderExtras: J,
    resizeValidation: q,
    children: X
  })
})