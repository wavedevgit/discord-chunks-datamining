/** Chunk was on 80144 **/
n.d(t, {
  Z: () => u
});
var r = n(255367),
  o = n(73800),
  i = n(481060),
  s = n(703656),
  l = n(981631);

function c(e) {
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

function a(e, t) {
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
let u = o.forwardRef(function(e, t) {
  var {
    href: n,
    children: u,
    onClick: _,
    onKeyPress: E,
    focusProps: d
  } = e, I = function(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }(e, ["href", "children", "onClick", "onKeyPress", "focusProps"]);
  let p = o.useCallback(e => {
      e.repeat || ((e.charCode === l.yXg.SPACE || e.charCode === l.yXg.ENTER) && (e.preventDefault(), null != n && (0, s.uL)(n), null == _ || _()), null == E || E(e))
    }, [n, E, _]),
    m = o.useCallback(e => {
      e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, s.uL)(n), null == _ || _())
    }, [n, _]),
    N = (0, r.jsx)("a", a(c({
      ref: t,
      href: n,
      onClick: m,
      onKeyPress: p
    }, I), {
      children: u
    }));
  return (0, r.jsx)(i.tEY, a(c({}, d), {
    children: N
  }))
})