/** Chunk was on 49941 **/
/** chunk id: 190862, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk86419 = require("./86419.js"),
  Chunk556045 = require("./556045.js"),
  Chunk881410 = require("./881410.jsx"),
  Chunk141014 = require("./141014.jsx"),
  Chunk985748 = require("./985748.jsx"),
  Chunk566007 = require("./566007.jsx"),
  Chunk173951 = require("./173951.jsx"),
  Chunk455731 = require("./455731.jsx"),
  Chunk272289 = require("./272289.jsx"),
  Chunk39642 = require("./39642.js");

function y(e) {
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

function v(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
let O = e => {
    var {
      widget: t
    } = e, n = v(e, ["widget"]);
    switch (t.type) {
      case l.l.FAVORITE_GAMES:
        return (0, r.jsx)(g.Z, y({
          widget: t
        }, n));
      case l.l.CURRENT_GAMES:
        return (0, r.jsx)(f.Z, y({
          widget: t
        }, n));
      case l.l.WANT_TO_PLAY_GAMES:
        return (0, r.jsx)(m.Z, y({
          widget: t
        }, n));
      case l.l.PLAYED_GAMES:
        return (0, r.jsx)(p.Z, y({
          widget: t
        }, n));
      default:
        return null
    }
  },
  j = e => {
    var {
      widget: t,
      user: n,
      disableInteraction: l
    } = e, f = v(e, ["widget", "user", "disableInteraction"]);
    let {
      shouldShowSuggestions: g,
      handleDismissSuggestions: p
    } = (0, c.h)(t), m = (0, a.e7)([o.default], () => o.default.getId() === n.id), j = m && !l && g, x = (0, s.mR)(t), P = (0, s.Hy)(t, {
      isCurrentUser: m
    }), _ = (0, s.kQ)(t), I = 1 === (0, s.Gv)(t.type), [w, S] = i.useState(false);
    return (0, r.jsx)(d.N, {
      value: {
        expanded: w,
        setExpanded: S
      },
      children: (0, r.jsx)(O, y({
        widget: t,
        user: n,
        disableInteraction: l,
        headerTitle: x,
        headerSubtitle: P,
        headerActionButtons: m && !I ? [(0, r.jsx)(u.yX, {
          disabled: _,
          widgetType: t.type,
          widget: t,
          onAddGame: () => S(true)
        }, "".concat(t.type, "-browse-games-popout"))] : true,
        trailingContent: j && (0, r.jsx)(b.Z, {
          userId: n.id,
          widgetType: t.type,
          onDismiss: p,
          className: h.suggestedGames
        })
      }, f))
    })
  }