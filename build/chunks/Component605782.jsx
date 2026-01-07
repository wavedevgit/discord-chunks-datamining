/** Chunk was on 12581 **/
/** chunk id: 605782, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk828700 = require("./828700.js"),
  Chunk215569 = require("./215569.js");

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
  var i, s, n = function(t, e) {
    if (null == t) return {};
    var i, s, n = {},
      r = Object.keys(t);
    for (s = 0; s < r.length; s++) i = r[s], e.indexOf(i) >= 0 || (n[i] = t[i]);
    return n
  }(t, e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    for (s = 0; s < r.length; s++) i = r[s], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (n[i] = t[i])
  }
  return n
}
class c extends Chunk473749.Component {
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
        null != (f = null != p ? (0, r.LX)(i.pathname, l(h({}, u), {
          path: p
        })) : null) && (u = l(h({}, u), {
          key: p,
          location: i,
          match: f,
          history: c,
          staticContext: d
        }), null != s ? m = n.createElement(s, u) : null != a && (m = a(u)))
      }
    }), (0, s.jsx)(a.W, l(h({}, p), {
      children: m
    }))
  }
}
let d = (0, Chunk828700.EN)(c)