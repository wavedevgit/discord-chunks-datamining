/** Chunk was on 74449 **/
/** chunk id: 190862, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => v
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

function y(e) {
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

function j(e, t) {
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
let m = e => {
    var {
      widget: t
    } = e, r = j(e, ["widget"]);
    switch (t.type) {
      case i.l.FAVORITE_GAMES:
        return (0, n.jsx)(f.Z, y({
          widget: t
        }, r));
      case i.l.CURRENT_GAMES:
        return (0, n.jsx)(d.Z, y({
          widget: t
        }, r));
      case i.l.WANT_TO_PLAY_GAMES:
        return (0, n.jsx)(p.Z, y({
          widget: t
        }, r));
      case i.l.PLAYED_GAMES:
        return (0, n.jsx)(b.Z, y({
          widget: t
        }, r));
      default:
        return null
    }
  },
  v = e => {
    var {
      widget: t,
      user: r,
      disableInteraction: i
    } = e, d = j(e, ["widget", "user", "disableInteraction"]);
    let f = (0, c.FX)(t),
      {
        shouldShowSuggestions: b,
        handleDismissSuggestions: p
      } = (0, s.h)(f),
      v = (0, l.e7)([o.default], () => o.default.getId() === r.id),
      h = v && !i && b,
      x = (0, a.A5)(f.type),
      w = (0, a.Hy)(f, {
        isCurrentUser: v
      }),
      P = (0, a.kQ)(f);
    return (0, n.jsx)(m, y({
      widget: f,
      user: r,
      disableInteraction: i,
      headerTitle: x,
      headerSubtitle: w,
      headerActionButtons: v ? [(0, n.jsx)(u.Z, {
        disabled: P,
        widgetType: f.type,
        widget: f
      }, "".concat(f.type, "-browse-games-popout"))] : true,
      trailingContent: h && (0, n.jsx)(g.Z, {
        userId: r.id,
        widgetType: f.type,
        onDismiss: p,
        className: O.suggestedGames
      })
    }, d))
  }