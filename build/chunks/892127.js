/** Chunk was on 50751 **/
n.d(t, {
  Z: () => S
});
var i = n(200651),
  r = n(192379),
  o = n(120356),
  l = n.n(o),
  s = n(442837),
  a = n(765250),
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
  b = n(536755);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
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
let S = r.memo(function(e) {
  let {
    widget: t,
    renderWidget: n,
    renderTitle: o,
    renderButtons: S,
    resizeValidation: I,
    className: C,
    dragContainerClassName: Z
  } = e, N = c.Z.getWidgetConfig(t.type), w = (0, s.e7)([d.Z], () => d.Z.isLocked((0, f.QF)())), _ = (0, y.Z)(), P = (0, s.e7)([p.Z], () => p.Z.windowSize((0, m.ZY)(_))), T = r.useCallback((e, t, n, i, r) => {
    let o = p.Z.windowSize((0, m.ZY)((0, y.i)())),
      l = (0, h.jL)(n, o),
      s = (0, h.Ox)(i, o);
    (0, a.Os)(t), (0, a.nv)({
      widgetId: t,
      anchor: l,
      size: s
    });
    let d = e === g.B.MOVE,
      f = (0, h.PY)(n, o.width, o.height, r.width, r.height);
    u.Z.track(E.rMx.OVERLAY_LAYOUT_UPDATED, {
      was_resized: !d,
      was_dragged: d,
      widget_type: c.Z.getWidgetType(t),
      window_width: o.width,
      window_height: o.height,
      widget_width: r.width,
      widget_height: r.height,
      widget_left: f.left,
      widget_top: f.top
    })
  }, []), A = r.useCallback(e => {
    (0, a.Os)(e)
  }, []), {
    id: D,
    pinned: k,
    zIndex: L,
    size: R,
    anchor: M
  } = t, W = (0, h.w_)(R, P), V = (0, h.KR)(M, P), {
    minSize: z,
    resizeX: U,
    resizeY: F,
    dragAnywhere: G
  } = null != N ? N : {}, Y = k || !w, B = r.useMemo(() => ({
    minX: 0,
    minY: 0,
    maxX: P.width,
    maxY: P.height
  }), [P]), H = r.useCallback(e => n(j(x({}, e), {
    widget: t,
    dragging: null != e.dragOperation,
    className: C
  })), [t, n, C]), Q = r.useCallback(e => null != o || null != S ? (0, i.jsxs)("div", {
    className: b.extrasContainer,
    children: [null == o ? void 0 : o(t), null == S ? void 0 : S(t, e)]
  }) : null, [t, o, S]), K = (0, s.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(O.G.WidgetAreas)), X = r.useMemo(() => {
    if (null != I) return e => I(j(x({}, e), {
      widget: t
    }))
  }, [I, t]);
  return (0, i.jsx)(g.Z, {
    className: l()({
      [b.debug]: K,
      [b.debugUnpinned]: K && !k,
      [b.debugPinned]: K && k
    }, Z),
    id: D,
    size: W,
    anchor: V,
    container: B,
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
    onClick: A,
    targetWindow: _,
    renderExtras: Q,
    resizeValidation: X,
    children: H
  })
})