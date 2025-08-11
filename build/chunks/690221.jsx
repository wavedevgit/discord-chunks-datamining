/** Chunk was on 93886 **/
/** chunk id: 690221, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js");

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
        enumerable: true,
        configurable: true,
        writable: true
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
let d = Chunk73800.forwardRef(function(e, t) {
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
    b = r.useCallback(e => {
      e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != a && (0, i.uL)(a), null == u || u())
    }, [a, u]),
    f = <a{...c(o({
      ref: t,
      href: a,
      onClick: b,
      onKeyPress: p
    }, h), {
      children: d
    })} />;
  return <l.tEY{...c(o({}, x), {
    children: f
  })} />
})