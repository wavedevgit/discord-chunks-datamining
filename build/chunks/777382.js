/** Chunk was on 54030 **/
n.d(t, {
  Z: () => O
}), n(653041), n(47120);
var r = n(200651),
  o = n(192379),
  a = n(442837),
  i = n(481060),
  c = n(355863),
  l = n(237997),
  _ = n(451478),
  u = n(145597),
  s = n(830917),
  d = n(312178),
  f = n(388627),
  b = n(892127),
  p = n(561064),
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

function h(e, t) {
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

function v(e) {
  return e.widget.id
}

function y(e, t, n, o) {
  return n === i.pJH.YEETED ? null : (0, r.jsx)(b.Z, h(g({}, t), {
    transitionState: n,
    cleanUp: o,
    dragContainerClassName: m.dragContainer,
    className: m.widget
  }), e)
}
let I = [],
  O = o.memo(function(e) {
    let {
      className: t
    } = e, n = (0, p.Z)(), b = (0, a.e7)([_.Z], () => _.Z.windowSize((0, s.ZY)(n))), m = (0, a.e7)([l.default], () => l.default.isPreviewingInGame()), O = (0, a.e7)([c.Z], () => {
      let e = c.Z.getLayout(u.OVERLAY_LAYOUT_ID);
      if (null == e) return I;
      let t = [];
      for (let n of e.widgets) {
        let e = c.Z.getWidget(n);
        if (null == e) continue;
        let r = d.p[e.type];
        null != r && t.push({
          widget: e,
          renderWidget: t => r(h(g({}, t), {
            id: e.id,
            pinned: e.pinned,
            anchor: e.anchor,
            isPreviewingInGame: m
          }))
        })
      }
      return t
    }, [m], f.HP), C = o.useCallback(e => (0, r.jsx)("div", {
      className: t,
      style: b,
      children: e
    }), [t, b]);
    return (0, r.jsx)(i.W3x, {
      items: O,
      renderItem: y,
      getItemKey: v,
      wrapChildren: C
    })
  })