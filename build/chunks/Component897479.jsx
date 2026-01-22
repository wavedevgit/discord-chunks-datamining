/** Chunk was on 99673 **/
/** chunk id: 897479, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk960488 = require("./960488.js"),
  Chunk73939 = require("./73939.js");

function h(t) {
  for (var e = 1; e < arguments.length; e++) {
    var i = null != arguments[e] ? arguments[e] : {},
      s = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
      return Object.getOwnPropertyDescriptor(i, t).enumerable
    }))), s.forEach(function(e) {
      var s;
      s = i[e], e in t ? Object.defineProperty(t, e, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = s
    })
  }
  return t
}

function l(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(t);
      i.push.apply(i, s)
    }
    return i
  })(Object(e)).forEach(function(i) {
    Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i))
  }), t
}

function o(t, e) {
  if (null == t) return {};
  var i, s, n, r = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (n = 0, i = Reflect.ownKeys(t); n < i.length; n++) s = i[n], !(e.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (r[s] = t[s]);
    return r
  }
  if (r = function(t, e) {
      if (null == t) return {};
      var i, s, n = {},
        r = Object.getOwnPropertyNames(t);
      for (s = 0; s < r.length; s++) i = r[s], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (n[i] = t[i]);
      return n
    }(t, e), Object.getOwnPropertySymbols)
    for (n = 0, i = Object.getOwnPropertySymbols(t); n < i.length; n++) s = i[n], !(e.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (r[s] = t[s]);
  return r
}
class c extends Chunk64700.Component {
  render() {
    let t = this.props,
      {
        children: e,
        location: i,
        history: c,
        staticContext: d,
        match: u
      } = t,
      p = o(t, ["children", "location", "history", "staticContext", "match"]),
      f = null,
      m = null;
    return n.Children.forEach(e, t => {
      if (null == f && n.isValidElement(t)) {
        let e = t.props,
          {
            component: s,
            render: a
          } = e,
          u = o(e, ["component", "render"]),
          p = u.path || u.from;
        null != (f = null != p ? (0, r.B6)(i.pathname, l(h({}, u), {
          path: p
        })) : null) && (u = l(h({}, u), {
          key: p,
          location: i,
          match: f,
          history: c,
          staticContext: d
        }), null != s ? m = n.createElement(s, u) : null != a && (m = a(u)))
      }
    }), (0, s.jsx)(a.F, l(h({}, p), {
      children: m
    }))
  }
}
let d = (0, Chunk960488.y)(c)