/** Chunk was on 89382 **/
/** chunk id: 690221, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js");

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
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function l(e, t) {
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
let d = Chunk647438.forwardRef(function(e, t) {
  var {
    href: n,
    children: d,
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
      e.repeat || ((e.charCode === c.yXg.SPACE || e.charCode === c.yXg.ENTER) && (e.preventDefault(), null != n && (0, o.uL)(n), null == _ || _()), null == g || g(e))
    }, [n, g, _]),
    b = a.useCallback(e => {
      e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != n && (0, o.uL)(n), null == _ || _())
    }, [n, _]),
    f = (0, i.jsx)("a", l(s({
      ref: t,
      href: n,
      onClick: b,
      onKeyPress: S
    }, h), {
      children: d
    }));
  return (0, i.jsx)(r.tEY, l(s({}, u), {
    children: f
  }))
})