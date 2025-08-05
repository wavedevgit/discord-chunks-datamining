/** Chunk was on 80144 **/
n.d(t, {
  Z: () => u
});
var r = n(255367),
  i = n(73800),
  o = n(481060),
  l = n(703656),
  s = n(981631);

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
let u = i.forwardRef(function(e, t) {
  var {
    href: n,
    children: u,
    onClick: d,
    onKeyPress: _,
    focusProps: E
  } = e, m = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["href", "children", "onClick", "onKeyPress", "focusProps"]);
  let I = i.useCallback(e => {
      e.repeat || ((e.charCode === s.yXg.SPACE || e.charCode === s.yXg.ENTER) && (e.preventDefault(), null != n && (0, l.uL)(n), null == d || d()), null == _ || _(e))
    }, [n, _, d]),
    p = i.useCallback(e => {
      e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, l.uL)(n), null == d || d())
    }, [n, d]),
    N = (0, r.jsx)("a", a(c({
      ref: t,
      href: n,
      onClick: p,
      onKeyPress: I
    }, m), {
      children: u
    }));
  return (0, r.jsx)(o.tEY, a(c({}, E), {
    children: N
  }))
})