/** Chunk was on 78528 **/
/** chunk id: 95035, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk976860 = require("./976860.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
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
let u = Chunk64700.forwardRef(function(e, t) {
  let [n, ...u] = [e, t], {
    href: d,
    children: p,
    onClick: h,
    onKeyPress: f,
    focusProps: g
  } = n, m = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(n, ["href", "children", "onClick", "onKeyPress", "focusProps"]), [b] = u, A = l.useCallback(e => {
    e.repeat || ((e.charCode === a.Ks6.SPACE || e.charCode === a.Ks6.ENTER) && (e.preventDefault(), null != d && (0, s.pX)(d), null == h || h()), null == f || f(e))
  }, [d, f, h]), y = l.useCallback(e => {
    e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != d && (0, s.pX)(d), null == h || h())
  }, [d, h]), _ = (0, r.jsx)("a", c(o({
    ref: b,
    href: d,
    onClick: y,
    onKeyPress: A
  }, m), {
    children: p
  }));
  return (0, r.jsx)(i.vN3, c(o({}, g), {
    children: _
  }))
})