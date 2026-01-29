/** Chunk was on 42978 **/
/** chunk id: 95035, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk976860 = require("./976860.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function a(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let u = Chunk64700.forwardRef(function(e, t) {
  let [r, ...u] = [e, t], {
    href: f,
    children: p,
    onClick: d,
    onKeyPress: b,
    focusProps: O
  } = r, y = function(e, t) {
    if (null == e) return {};
    var r, n, o, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          i = Object.getOwnPropertyNames(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
  }(r, ["href", "children", "onClick", "onKeyPress", "focusProps"]), [A] = u, E = o.useCallback(e => {
    e.repeat || ((e.charCode === c.Ks6.SPACE || e.charCode === c.Ks6.ENTER) && (e.preventDefault(), null != f && (0, l.pX)(f), null == d || d()), null == b || b(e))
  }, [f, b, d]), m = o.useCallback(e => {
    e.metaKey || e.shiftKey || 0 !== e.button || (e.preventDefault(), e.stopPropagation(), null != f && (0, l.pX)(f), null == d || d())
  }, [f, d]), _ = (0, n.jsx)("a", a(s({
    ref: A,
    href: f,
    onClick: m,
    onKeyPress: E
  }, y), {
    children: p
  }));
  return (0, n.jsx)(i.vN3, a(s({}, O), {
    children: _
  }))
})