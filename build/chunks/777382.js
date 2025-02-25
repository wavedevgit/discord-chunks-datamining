/** Chunk was on 54030 **/
n.d(t, {
  Z: () => v
}), n(653041), n(47120);
var r = n(200651),
  o = n(192379),
  a = n(442837),
  i = n(481060),
  c = n(355863),
  l = n(237997),
  u = n(451478),
  s = n(145597),
  _ = n(830917),
  d = n(312178),
  b = n(388627),
  f = n(892127),
  p = n(561064),
  h = n(29281);

function m(e) {
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

function g(e, t) {
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

function C(e) {
  return e.widget.id
}

function O(e, t, n, o) {
  return n === i.pJH.YEETED ? null : (0, r.jsx)(f.Z, g(m({}, t), {
    transitionState: n,
    cleanUp: o,
    dragContainerClassName: h.dragContainer,
    className: h.widget
  }), e)
}
let y = [],
  v = o.memo(function(e) {
    let {
      className: t
    } = e, n = (0, p.Z)(), f = (0, a.e7)([u.Z], () => u.Z.windowSize((0, _.ZY)(n))), h = (0, a.e7)([l.Z], () => l.Z.isPreviewingInGame()), v = (0, a.e7)([c.Z], () => {
      let e = c.Z.getLayout(s.qU);
      if (null == e) return y;
      let t = [];
      for (let n of e.widgets) {
        let e = c.Z.getWidget(n);
        if (null == e) continue;
        let r = d.p[e.type];
        null != r && t.push({
          widget: e,
          renderWidget: t => r(g(m({}, t), {
            id: e.id,
            pinned: e.pinned,
            anchor: e.anchor,
            isPreviewingInGame: h
          }))
        })
      }
      return t
    }, [h], b.HP), E = o.useCallback(e => (0, r.jsx)("div", {
      className: t,
      style: f,
      children: e
    }), [t, f]);
    return (0, r.jsx)(i.W3x, {
      items: v,
      renderItem: O,
      getItemKey: C,
      wrapChildren: E
    })
  })