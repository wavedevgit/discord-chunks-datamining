/** Chunk was on 93886 **/
a.d(t, {
  Z: () => d
});
var n = a(255367),
  r = a(73800),
  l = a(481060),
  i = a(703656),
  s = a(981631);

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = a[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      a.push.apply(a, n)
    }
    return a
  })(Object(t)).forEach(function(a) {
    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
  }), e
}
let d = r.forwardRef(function(e, t) {
  var {
    href: a,
    children: d,
    onClick: u,
    onKeyPress: m,
    focusProps: x
  } = e, h = function(e, t) {
    if (null == e) return {};
    var a, n, r = function(e, t) {
      if (null == e) return {};
      var a, n, r = {},
        l = Object.keys(e);
      for (n = 0; n < l.length; n++) a = l[n], t.indexOf(a) >= 0 || (r[a] = e[a]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (n = 0; n < l.length; n++) a = l[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a])
    }
    return r
  }(e, ["href", "children", "onClick", "onKeyPress", "focusProps"]);
  let p = r.useCallback(e => {
      e.repeat || ((e.charCode === s.yXg.SPACE || e.charCode === s.yXg.ENTER) && (e.preventDefault(), null != a && (0, i.uL)(a), null == u || u()), null == m || m(e))
    }, [a, m, u]),
    f = r.useCallback(e => {
      e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != a && (0, i.uL)(a), null == u || u())
    }, [a, u]),
    b = (0, n.jsx)("a", c(o({
      ref: t,
      href: a,
      onClick: f,
      onKeyPress: p
    }, h), {
      children: d
    }));
  return (0, n.jsx)(l.tEY, c(o({}, x), {
    children: b
  }))
})