/** Chunk was on 50751 **/
n.d(t, {
  Z: () => y
}), n(653041), n(47120);
var i = n(200651),
  r = n(192379),
  o = n(442837),
  l = n(481060),
  s = n(355863),
  a = n(451478),
  u = n(830917),
  c = n(388627),
  d = n(892127),
  p = n(444982),
  h = n(561064),
  f = n(501787);

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
  var o, s;
  return n === l.pJH.YEETED ? null : (0, i.jsx)(d.Z, (o = m({}, t), s = s = {
    transitionState: n,
    cleanUp: r
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(s)).forEach(function(e) {
    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e))
  }), o), e)
}
let v = [],
  y = r.memo(function(e) {
    let {
      className: t
    } = e, n = (0, h.Z)(), d = (0, o.e7)([a.Z], () => a.Z.windowSize((0, u.ZY)(n))), y = (0, o.e7)([s.Z], () => {
      let e = s.Z.getLayout(f.OVERLAY_V3_LAYOUT_ID);
      if (null == e) return v;
      let t = [];
      for (let n of e.widgets) {
        let e = s.Z.getWidget(n);
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
    return (0, i.jsx)(l.W3x, {
      items: y,
      renderItem: O,
      getItemKey: g,
      wrapChildren: E
    })
  })