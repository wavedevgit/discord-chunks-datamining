/** Chunk was on 52557 **/
/** chunk id: 190862, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk86419 = require("./86419.js"),
  Chunk556045 = require("./556045.js"),
  Chunk881410 = require("./881410.jsx"),
  Chunk985748 = require("./985748.jsx"),
  Chunk566007 = require("./566007.jsx"),
  Chunk173951 = require("./173951.jsx"),
  Chunk455731 = require("./455731.jsx"),
  Chunk272289 = require("./272289.jsx"),
  Chunk39642 = require("./39642.js");

function b(e) {
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
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
let y = e => {
    var {
      widget: t
    } = e, n = h(e, ["widget"]);
    switch (t.type) {
      case i.l.FAVORITE_GAMES:
        return (0, r.jsx)(d.Z, b({
          widget: t
        }, n));
      case i.l.CURRENT_GAMES:
        return (0, r.jsx)(u.Z, b({
          widget: t
        }, n));
      case i.l.WANT_TO_PLAY_GAMES:
        return (0, r.jsx)(f.Z, b({
          widget: t
        }, n));
      case i.l.PLAYED_GAMES:
        return (0, r.jsx)(g.Z, b({
          widget: t
        }, n));
      default:
        return null
    }
  },
  v = e => {
    var {
      widget: t,
      user: n,
      disableInteraction: i
    } = e, u = h(e, ["widget", "user", "disableInteraction"]);
    let {
      shouldShowSuggestions: d,
      handleDismissSuggestions: g
    } = (0, c.h)(t), f = (0, a.e7)([l.default], () => l.default.getId() === n.id), v = f && !i && d, O = (0, o.mR)(t), j = (0, o.Hy)(t, {
      isCurrentUser: f
    }), x = (0, o.kQ)(t), _ = 1 === (0, o.Gv)(t.type);
    return (0, r.jsx)(y, b({
      widget: t,
      user: n,
      disableInteraction: i,
      headerTitle: O,
      headerSubtitle: j,
      headerActionButtons: f && !_ ? [(0, r.jsx)(s.yX, {
        disabled: x,
        widgetType: t.type,
        widget: t
      }, "".concat(t.type, "-browse-games-popout"))] : true,
      trailingContent: v && (0, r.jsx)(p.Z, {
        userId: n.id,
        widgetType: t.type,
        onDismiss: g,
        className: m.suggestedGames
      })
    }, u))
  }