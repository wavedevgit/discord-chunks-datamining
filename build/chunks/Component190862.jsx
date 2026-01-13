/** Chunk was on 90882 **/
/** chunk id: 190862, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk296009 = require("./296009.js"),
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
  Chunk902210 = require("./902210.js");

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

function h(e, t) {
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

function j(e) {
  var {
    widget: t
  } = e, n = h(e, ["widget"]);
  switch (t.type) {
    case i.l.FAVORITE_GAMES:
      return (0, r.jsx)(f.Z, y({
        widget: t
      }, n));
    case i.l.CURRENT_GAMES:
      return (0, r.jsx)(d.Z, y({
        widget: t
      }, n));
    case i.l.WANT_TO_PLAY_GAMES:
      return (0, r.jsx)(p.Z, y({
        widget: t
      }, n));
    case i.l.PLAYED_GAMES:
      return (0, r.jsx)(g.Z, y({
        widget: t
      }, n));
    default:
      return null
  }
}

function O(e) {
  var {
    widget: t,
    user: n,
    disableInteraction: i
  } = e, d = h(e, ["widget", "user", "disableInteraction"]);
  let {
    setExpanded: f
  } = (0, u.g)(), {
    shouldShowSuggestions: g,
    handleDismissSuggestions: p
  } = (0, c.h)(t), O = (0, l.e7)([a.default], () => a.default.getId() === n.id), x = O && !i && g, v = (0, o.mR)(t), P = (0, o.Hy)(t, {
    isCurrentUser: O
  }), I = (0, o.kQ)(t), w = 1 === (0, o.Gv)(t.type);
  return (0, r.jsx)(j, y({
    widget: t,
    user: n,
    disableInteraction: i,
    headerTitle: v,
    headerSubtitle: P,
    headerActionButtons: O && !w ? [(0, r.jsx)(s.yX, {
      disabled: I,
      widgetType: t.type,
      widget: t,
      onAddGame: () => f(true)
    }, "".concat(t.type, "-browse-games-popout"))] : true,
    trailingContent: x && (0, r.jsx)(m.Z, {
      userId: n.id,
      widgetType: t.type,
      onDismiss: p,
      className: b.suggestedGames
    })
  }, d))
}

function x(e) {
  var {
    widget: t
  } = e, n = h(e, ["widget"]);
  return (0, r.jsx)(u.N, {
    widgetType: t.type,
    children: (0, r.jsx)(O, y({
      widget: t
    }, n))
  })
}