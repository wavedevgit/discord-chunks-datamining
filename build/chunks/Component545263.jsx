/** Chunk was on 18877 **/
/** chunk id: 545263, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk296009 = require("./296009.js"),
  Chunk747101 = require("./747101.js"),
  Chunk985748 = require("./985748.jsx"),
  Chunk566007 = require("./566007.jsx"),
  Chunk173951 = require("./173951.jsx"),
  Chunk455731 = require("./455731.jsx");

function u(e) {
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
let d = e => {
  var {
    widget: t
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, i = function(e, t) {
      if (null == e) return {};
      var r, n, i = {},
        l = Object.keys(e);
      for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
    }
    return i
  }(e, ["widget"]);
  let d = (0, l.FX)(t);
  switch (d.type) {
    case i.l.FAVORITE_GAMES:
      return (0, n.jsx)(o.Z, u({
        widget: d
      }, r));
    case i.l.CURRENT_GAMES:
      return (0, n.jsx)(a.Z, u({
        widget: d
      }, r));
    case i.l.WANT_TO_PLAY_GAMES:
      return (0, n.jsx)(s.Z, u({
        widget: d
      }, r));
    case i.l.PLAYED_GAMES:
      return (0, n.jsx)(c.Z, u({
        widget: d
      }, r));
    default:
      return null
  }
}