/** Chunk was on 50751 **/
n.d(t, {
  Z: () => I
});
var i = n(200651),
  r = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  s = n(765250),
  u = n(13245),
  c = n(355863),
  d = n(237997),
  p = n(451478),
  h = n(434529),
  f = n(145597),
  m = n(830917),
  g = n(353038),
  O = n(306381),
  v = n(610394),
  y = n(561064),
  E = n(981631),
  b = n(459227);

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
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
let I = r.memo(function(e) {
  let {
    widget: t,
    renderWidget: n,
    renderTitle: l,
    renderButtons: I,
    resizeValidation: S,
    className: C,
    dragContainerClassName: N
  } = e, Z = c.Z.getWidgetConfig(t.type), w = (0, a.e7)([d.default], () => d.default.isLocked((0, f.getPID)())), P = (0, y.Z)(), _ = (0, a.e7)([p.Z], () => p.Z.windowSize((0, m.ZY)(P))), T = r.useCallback((e, t, n, i, r) => {
    let l = p.Z.windowSize((0, m.ZY)((0, y.i)())),
      o = (0, h.jL)(n, l),
      a = (0, h.Ox)(i, l);
    (0, s.Os)(t), (0, s.nv)({
      widgetId: t,
      anchor: o,
      size: a
    });
    let d = e === g.B.MOVE,
      f = (0, h.PY)(n, l.width, l.height, r.width, r.height);
    u.Z.track(E.rMx.OVERLAY_LAYOUT_UPDATED, {
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
  }, []), D = r.useCallback(e => {
    (0, s.Os)(e)
  }, []), {
    id: k,
    pinned: A,
    zIndex: L,
    size: R,
    anchor: M
  } = t, W = (0, h.w_)(R, _), V = (0, h.KR)(M, _), {
    minSize: z,
    resizeX: U,
    resizeY: F,
    dragAnywhere: G
  } = null != Z ? Z : {}, Y = A || !w, H = r.useMemo(() => ({
    minX: 0,
    minY: 0,
    maxX: _.width,
    maxY: _.height
  }), [_]), B = r.useCallback(e => n(x(j({}, e), {
    widget: t,
    dragging: null != e.dragOperation,
    className: C
  })), [t, n, C]), K = r.useCallback(e => null != l || null != I ? (0, i.jsxs)("div", {
    className: b.extrasContainer,
    children: [null == l ? void 0 : l(t), null == I ? void 0 : I(t, e)]
  }) : null, [t, l, I]), Q = (0, a.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(O.G.WidgetAreas)), X = r.useMemo(() => {
    if (null != S) return e => S(x(j({}, e), {
      widget: t
    }))
  }, [S, t]);
  return (0, i.jsx)(g.Z, {
    className: o()({
      [b.debug]: Q,
      [b.debugUnpinned]: Q && !A,
      [b.debugPinned]: Q && A
    }, N),
    id: k,
    size: W,
    anchor: V,
    container: H,
    minSize: null != z ? z : {
      width: 0,
      height: 0
    },
    hidden: !Y,
    locked: w,
    resizeX: null != U && U,
    resizeY: null != F && F,
    style: {
      zIndex: L
    },
    dragAnywhere: null != G && G,
    active: !w,
    onUpdate: T,
    onClick: D,
    targetWindow: P,
    renderExtras: K,
    resizeValidation: X,
    children: B
  })
})