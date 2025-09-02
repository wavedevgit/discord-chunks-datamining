/** Chunk was on 61149 **/
/** chunk id: 985748, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk750312 = require("./750312.jsx"),
  Chunk189988 = require("./189988.jsx"),
  Chunk232083 = require("./232083.jsx");

function l(e) {
  var {
    user: t,
    widget: r,
    containerClassName: l,
    disableInteraction: c,
    index: s
  } = e, u = function(e, t) {
    if (null == e) return {};
    var r, n, i = function(e, t) {
      if (null == e) return {};
      var r, n, i = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
    }
    return i
  }(e, ["user", "widget", "containerClassName", "disableInteraction", "index"]);
  return (0, n.jsx)(i.Z, {
    userId: t.id,
    widget: r,
    className: l,
    disableInteraction: c,
    index: s,
    children: r.games.length > 0 ? (0, n.jsx)(o.Z, function(e) {
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
      games: r.games,
      widgetType: r.type,
      disableInteraction: c
    }, u)) : (0, n.jsx)(a.Z, {
      widgetType: r.type
    })
  })
}