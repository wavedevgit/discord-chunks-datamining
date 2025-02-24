/** Chunk was on 54030 **/
n.d(t, {
  Z: () => v
}), n(653041), n(47120);
var r = n(200651),
  a = n(192379),
  i = n(442837),
  o = n(481060),
  c = n(355863),
  l = n(237997),
  s = n(451478),
  _ = n(145597),
  d = n(830917),
  u = n(312178),
  f = n(388627),
  p = n(892127),
  h = n(561064),
  b = n(29281);

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

function O(e, t, n, a) {
  return n === o.pJH.YEETED ? null : (0, r.jsx)(p.Z, g(m({}, t), {
    transitionState: n,
    cleanUp: a,
    dragContainerClassName: b.dragContainer,
    className: b.widget
  }), e)
}
let y = [],
  v = a.memo(function(e) {
    let {
      className: t
    } = e, n = (0, h.Z)(), p = (0, i.e7)([s.Z], () => s.Z.windowSize((0, d.ZY)(n))), b = (0, i.e7)([l.Z], () => l.Z.isPreviewingInGame()), v = (0, i.e7)([c.Z], () => {
      let e = c.Z.getLayout(_.qU);
      if (null == e) return y;
      let t = [];
      for (let n of e.widgets) {
        let e = c.Z.getWidget(n);
        if (null == e) continue;
        let r = u.p[e.type];
        null != r && t.push({
          widget: e,
          renderWidget: t => r(g(m({}, t), {
            id: e.id,
            pinned: e.pinned,
            anchor: e.anchor,
            isPreviewingInGame: b
          }))
        })
      }
      return t
    }, [b], f.HP), I = a.useCallback(e => (0, r.jsx)("div", {
      className: t,
      style: p,
      children: e
    }), [t, p]);
    return (0, r.jsx)(o.W3x, {
      items: v,
      renderItem: O,
      getItemKey: C,
      wrapChildren: I
    })
  })