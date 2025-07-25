/** Chunk was on 81064 **/
n.d(t, {
  Z: () => d
});
var i = n(255367),
  r = n(73800),
  l = n(481060),
  o = n(703656),
  s = n(981631);

function a(e) {
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

function c(e, t) {
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
let d = r.forwardRef(function(e, t) {
  var {
    href: n,
    children: d,
    onClick: u,
    onKeyPress: _,
    focusProps: h
  } = e, E = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        l = Object.keys(e);
      for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["href", "children", "onClick", "onKeyPress", "focusProps"]);
  let I = r.useCallback(e => {
      e.repeat || ((e.charCode === s.yXg.SPACE || e.charCode === s.yXg.ENTER) && (e.preventDefault(), null != n && (0, o.uL)(n), null == u || u()), null == _ || _(e))
    }, [n, _, u]),
    p = r.useCallback(e => {
      e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, o.uL)(n), null == u || u())
    }, [n, u]),
    C = (0, i.jsx)("a", c(a({
      ref: t,
      href: n,
      onClick: p,
      onKeyPress: I
    }, E), {
      children: d
    }));
  return (0, i.jsx)(l.tEY, c(a({}, h), {
    children: C
  }))
})