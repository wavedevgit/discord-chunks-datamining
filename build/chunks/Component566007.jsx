/** Chunk was on 61149 **/
/** chunk id: 566007, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk750312 = require("./750312.jsx"),
  Chunk189988 = require("./189988.jsx"),
  Chunk623132 = require("./623132.jsx");

function l(e) {
  var {
    user: t,
    widget: r,
    isGameFetching: l,
    containerClassName: c,
    disableInteraction: s,
    index: u
  } = e, d = function(e, t) {
    if (null == e) return {};
    var r, n, a = function(e, t) {
      if (null == e) return {};
      var r, n, a = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
    }
    return a
  }(e, ["user", "widget", "isGameFetching", "containerClassName", "disableInteraction", "index"]);
  let f = r.games[0];
  return (0, n.jsx)(a.Z, {
    userId: t.id,
    widget: r,
    className: c,
    disableInteraction: s,
    index: u,
    children: null != f ? (0, n.jsx)(i.Z, function(e) {
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
    }({
      user: t,
      game: f,
      widgetType: r.type,
      loading: l(f.applicationId),
      disableInteraction: s
    }, d)) : (0, n.jsx)(o.Z, {
      widgetType: r.type
    })
  })
}