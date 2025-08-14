/** Chunk was on 76708 **/
/** chunk id: 566007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk750312 = require("./750312.jsx"),
  Chunk189988 = require("./189988.jsx"),
  Chunk623132 = require("./623132.jsx");

function a(e) {
  var {
    user: t,
    widget: n,
    isGameFetching: a,
    containerClassName: c,
    disableInteraction: s
  } = e, d = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["user", "widget", "isGameFetching", "containerClassName", "disableInteraction"]);
  let u = n.games[0];
  return (0, r.jsx)(l.Z, {
    userId: t.id,
    widget: n,
    className: c,
    disableInteraction: s,
    children: null != u ? (0, r.jsx)(o.Z, function(e) {
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
    }({
      user: t,
      game: u,
      widgetType: n.type,
      loading: a(u.applicationId),
      disableInteraction: s
    }, d)) : (0, r.jsx)(i.Z, {
      widgetType: n.type
    })
  })
}