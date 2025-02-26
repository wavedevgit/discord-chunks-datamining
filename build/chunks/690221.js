/** Chunk was on 59819 **/
n.d(t, {
  Z: () => l
});
var i = n(200651),
  a = n(192379),
  r = n(481060),
  o = n(703656),
  c = n(981631);

function s(e) {
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

function d(e, t) {
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
let l = a.forwardRef(function(e, t) {
  var {
    href: n,
    children: l,
    onClick: _,
    onKeyPress: g,
    focusProps: u
  } = e, h = function(e, t) {
    if (null == e) return {};
    var n, i, a = function(e, t) {
      if (null == e) return {};
      var n, i, a = {},
        r = Object.keys(e);
      for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
    }
    return a
  }(e, ["href", "children", "onClick", "onKeyPress", "focusProps"]);
  let S = a.useCallback(e => {
      !e.repeat && ((e.charCode === c.yXg.SPACE || e.charCode === c.yXg.ENTER) && (e.preventDefault(), null != n && (0, o.uL)(n), null == _ || _()), null == g || g(e))
    }, [n, g, _]),
    b = a.useCallback(e => {
      !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, o.uL)(n), null == _ || _())
    }, [n, _]),
    N = (0, i.jsx)("a", d(s({
      ref: t,
      href: n,
      onClick: b,
      onKeyPress: S
    }, h), {
      children: l
    }));
  return (0, i.jsx)(r.tEY, d(s({}, u), {
    children: N
  }))
})