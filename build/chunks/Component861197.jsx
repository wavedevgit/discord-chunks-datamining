/** Chunk was on 21968 **/
/** chunk id: 861197, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => j
});
var i, r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk657737 = require("./657737.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
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

function b(e, t) {
  if (null == e) return {};
  var n, i, r, l = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
    return l
  }
  if (l = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        l = Object.getOwnPropertyNames(e);
      for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
      return r
    }(e, t), Object.getOwnPropertySymbols)
    for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
  return l
}
class f extends(i = Chunk64700.PureComponent) {
  render() {
    let e = this.props,
      {
        scrollable: t
      } = e,
      n = b(e, ["scrollable"]);
    return t ? (0, l.jsx)("aside", {
      className: u.EW,
      children: (0, l.jsx)(c.HOs, {
        fade: true,
        className: u.XG,
        children: (0, l.jsx)(d.A.Child, g(m({}, n), {
          wrap: true
        }))
      })
    }) : (0, l.jsx)(d.A.Child, g(m({}, n), {
      wrap: true
    }))
  }
}
p(f, "defaultProps", {
  basis: 232,
  grow: 0,
  shrink: 0
});
class h extends Chunk64700.PureComponent {
  render() {
    let e = this.props,
      {
        className: t
      } = e,
      n = b(e, ["className"]);
    return (0, l.jsx)(d.A.Child, m({
      className: o()(u.Qs, t),
      wrap: true
    }, n))
  }
}
class x extends(r = Chunk64700.PureComponent) {
  render() {
    return (0, l.jsx)(d.A, m({}, this.props))
  }
}
p(x, "defaultProps", {
  direction: Chunk235986.A.Direction.HORIZONTAL,
  justify: Chunk235986.A.Justify.START,
  align: Chunk235986.A.Align.START,
  wrap: Chunk235986.A.Wrap.NO_WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto"
}), p(x, "Direction", Chunk235986.A.Direction), p(x, "Justify", Chunk235986.A.Justify), p(x, "Align", Chunk235986.A.Align), p(x, "Wrap", Chunk235986.A.Wrap), p(x, "Sidebar", f), p(x, "Content", h);
let j = x