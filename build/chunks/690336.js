/** Chunk was on 50751 **/
n.d(t, {
  Z: () => y
}), n(653041), n(47120);
var i = n(200651),
  r = n(192379),
  l = n(442837),
  o = n(481060),
  a = n(355863),
  s = n(451478),
  u = n(830917),
  c = n(388627),
  d = n(892127),
  p = n(444982),
  h = n(561064),
  f = n(757744);

function m(e) {
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

function g(e) {
  return e.widget.id
}

function O(e, t, n, r) {
  var l, a;
  return n === o.pJH.YEETED ? null : (0, i.jsx)(d.Z, (l = m({}, t), a = a = {
    transitionState: n,
    cleanUp: r
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(a)).forEach(function(e) {
    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
  }), l), e)
}
let v = [],
  y = r.memo(function(e) {
    let {
      className: t
    } = e, n = (0, h.Z)(), d = (0, l.e7)([s.Z], () => s.Z.windowSize((0, u.ZY)(n))), y = (0, l.e7)([a.Z], () => {
      let e = a.Z.getLayout(f.$);
      if (null == e) return v;
      let t = [];
      for (let n of e.widgets) {
        let e = a.Z.getWidget(n);
        if (null == e) continue;
        let i = p.Z[e.type];
        null != i && (null == i.predicate || i.predicate()) && t.push(m({
          widget: e
        }, i))
      }
      return t
    }, [], c.HP), E = r.useCallback(e => (0, i.jsx)("div", {
      className: t,
      style: d,
      children: e
    }), [t, d]);
    return (0, i.jsx)(o.W3x, {
      items: y,
      renderItem: O,
      getItemKey: g,
      wrapChildren: E
    })
  })