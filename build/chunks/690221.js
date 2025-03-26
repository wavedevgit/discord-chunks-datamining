/** Chunk was on 99120 **/
n.d(t, {
  Z: () => u
});
var r = n(200651),
  i = n(192379),
  o = n(481060),
  l = n(703656),
  a = n(981631);

function s(e) {
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

function c(e, t) {
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
    onKeyPress: p,
    focusProps: f
  } = e, v = function(e, t) {
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
  let g = i.useCallback(e => {
      !e.repeat && ((e.charCode === a.yXg.SPACE || e.charCode === a.yXg.ENTER) && (e.preventDefault(), null != n && (0, l.uL)(n), null == d || d()), null == p || p(e))
    }, [n, p, d]),
    m = i.useCallback(e => {
      !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, l.uL)(n), null == d || d())
    }, [n, d]),
    b = (0, r.jsx)("a", c(s({
      ref: t,
      href: n,
      onClick: m,
      onKeyPress: g
    }, v), {
      children: u
    }));
  return (0, r.jsx)(o.tEY, c(s({}, f), {
    children: b
  }))
})