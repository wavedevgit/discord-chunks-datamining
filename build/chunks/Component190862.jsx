/** Chunk was on 13859 **/
/** chunk id: 190862, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk86419 = require("./86419.js"),
  Chunk747101 = require("./747101.js"),
  Chunk556045 = require("./556045.js"),
  Chunk881410 = require("./881410.jsx"),
  Chunk985748 = require("./985748.jsx"),
  Chunk566007 = require("./566007.jsx"),
  Chunk173951 = require("./173951.jsx"),
  Chunk455731 = require("./455731.jsx"),
  Chunk272289 = require("./272289.jsx"),
  Chunk39642 = require("./39642.js");

function O(e) {
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

function y(e, t) {
  if (null == e) return {};
  var r, n, i = function(e, t) {
    if (null == e) return {};
    var r, n, i = {},
      o = Object.keys(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
  }
  return i
}
let j = e => {
    var {
      widget: t
    } = e, r = y(e, ["widget"]);
    switch (t.type) {
      case i.l.FAVORITE_GAMES:
        return (0, n.jsx)(f.Z, O({
          widget: t
        }, r));
      case i.l.CURRENT_GAMES:
        return (0, n.jsx)(d.Z, O({
          widget: t
        }, r));
      case i.l.WANT_TO_PLAY_GAMES:
        return (0, n.jsx)(p.Z, O({
          widget: t
        }, r));
      case i.l.PLAYED_GAMES:
        return (0, n.jsx)(g.Z, O({
          widget: t
        }, r));
      default:
        return null
    }
  },
  x = e => {
    var {
      widget: t,
      user: r,
      disableInteraction: i
    } = e, d = y(e, ["widget", "user", "disableInteraction"]);
    let f = (0, c.FX)(t),
      {
        shouldShowSuggestions: g,
        handleDismissSuggestions: p
      } = (0, s.h)(f),
      x = (0, o.e7)([a.default], () => a.default.getId() === r.id),
      h = x && !i && g,
      v = (0, l.mR)(f),
      _ = (0, l.Hy)(f, {
        isCurrentUser: x
      }),
      w = (0, l.kQ)(f);
    return (0, n.jsx)(j, O({
      widget: f,
      user: r,
      disableInteraction: i,
      headerTitle: v,
      headerSubtitle: _,
      headerActionButtons: x ? [(0, n.jsx)(u.Z, {
        disabled: w,
        widgetType: f.type,
        widget: f
      }, "".concat(f.type, "-browse-games-popout"))] : true,
      trailingContent: h && (0, n.jsx)(b.Z, {
        userId: r.id,
        widgetType: f.type,
        onDismiss: p,
        className: m.suggestedGames
      })
    }, d))
  }