/** Chunk was on 54030 **/
n.d(t, {
  Z: () => I
}), n(653041), n(47120);
var r = n(200651),
  o = n(192379),
  i = n(442837),
  a = n(481060),
  l = n(355863),
  c = n(237997),
  u = n(451478),
  s = n(145597),
  _ = n(830917),
  d = n(312178),
  f = n(388627),
  p = n(892127),
  b = n(561064),
  m = n(337380);

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  return e.widget.id
}

function h(e, t, n, o) {
  return n === a.pJH.YEETED ? null : (0, r.jsx)(p.Z, v(g({}, t), {
    transitionState: n,
    cleanUp: o,
    dragContainerClassName: m.dragContainer,
    className: m.widget
  }), e)
}
let O = [],
  I = o.memo(function(e) {
    let {
      className: t
    } = e, n = (0, b.Z)(), p = (0, i.e7)([u.Z], () => u.Z.windowSize((0, _.ZY)(n))), m = (0, i.e7)([c.default], () => c.default.isPreviewingInGame()), I = (0, i.e7)([l.Z], () => {
      let e = l.Z.getLayout(s.OVERLAY_LAYOUT_ID);
      if (null == e) return O;
      let t = [];
      for (let n of e.widgets) {
        let e = l.Z.getWidget(n);
        if (null == e) continue;
        let r = d.p[e.type];
        null != r && t.push({
          widget: e,
          renderWidget: t => r(v(g({}, t), {
            id: e.id,
            pinned: e.pinned,
            anchor: e.anchor,
            isPreviewingInGame: m
          }))
        })
      }
      return t
    }, [m], f.HP), P = o.useCallback(e => (0, r.jsx)("div", {
      className: t,
      style: p,
      children: e
    }), [t, p]);
    return (0, r.jsx)(a.W3x, {
      items: I,
      renderItem: h,
      getItemKey: y,
      wrapChildren: P
    })
  })