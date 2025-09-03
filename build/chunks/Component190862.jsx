/** Chunk was on 74449 **/
/** chunk id: 190862, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk747101 = require("./747101.js"),
  Chunk556045 = require("./556045.js"),
  Chunk985748 = require("./985748.jsx"),
  Chunk566007 = require("./566007.jsx"),
  Chunk173951 = require("./173951.jsx"),
  Chunk455731 = require("./455731.jsx"),
  Chunk272289 = require("./272289.jsx"),
  Chunk39642 = require("./39642.js");

function p(e) {
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

function m(e, t) {
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
}
let O = e => {
    var {
      widget: t
    } = e, r = m(e, ["widget"]);
    switch (t.type) {
      case i.l.FAVORITE_GAMES:
        return (0, n.jsx)(u.Z, p({
          widget: t
        }, r));
      case i.l.CURRENT_GAMES:
        return (0, n.jsx)(s.Z, p({
          widget: t
        }, r));
      case i.l.WANT_TO_PLAY_GAMES:
        return (0, n.jsx)(f.Z, p({
          widget: t
        }, r));
      case i.l.PLAYED_GAMES:
        return (0, n.jsx)(d.Z, p({
          widget: t
        }, r));
      default:
        return null
    }
  },
  y = e => {
    var {
      widget: t,
      user: r,
      disableInteraction: i
    } = e, s = m(e, ["widget", "user", "disableInteraction"]);
    let u = (0, o.FX)(t),
      {
        shouldShowSuggestions: d,
        handleDismissSuggestions: f
      } = (0, c.h)(u),
      y = (0, l.e7)([a.default], () => a.default.getId() === r.id);
    return (0, n.jsx)(O, p({
      widget: u,
      user: r,
      disableInteraction: i,
      trailingContent: y && !i && d && (0, n.jsx)(g.Z, {
        userId: r.id,
        widgetType: u.type,
        onDismiss: f,
        className: b.suggestedGames
      })
    }, s))
  }