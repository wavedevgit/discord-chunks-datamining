/** Chunk was on 13368 **/
n.d(t, {
  Z: () => s
});
var a = n(200651),
  i = n(192379),
  o = n(481060),
  r = n(703656),
  c = n(981631);

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a
    })
  }
  return e
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let s = i.forwardRef(function(e, t) {
  var {
    href: n,
    children: s,
    onClick: u,
    onKeyPress: d,
    focusProps: f
  } = e, m = function(e, t) {
    if (null == e) return {};
    var n, a, i = function(e, t) {
      if (null == e) return {};
      var n, a, i = {},
        o = Object.keys(e);
      for (a = 0; a < o.length; a++) n = o[a], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (a = 0; a < o.length; a++) n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["href", "children", "onClick", "onKeyPress", "focusProps"]);
  let p = i.useCallback(e => {
      !e.repeat && ((e.charCode === c.yXg.SPACE || e.charCode === c.yXg.ENTER) && (e.preventDefault(), null != n && (0, r.uL)(n), null == u || u()), null == d || d(e))
    }, [n, d, u]),
    g = i.useCallback(e => {
      !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, r.uL)(n), null == u || u())
    }, [n, u]),
    h = (0, a.jsx)("a", _(l({
      ref: t,
      href: n,
      onClick: g,
      onKeyPress: p
    }, m), {
      children: s
    }));
  return (0, a.jsx)(o.tEY, _(l({}, f), {
    children: h
  }))
})