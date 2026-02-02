/** Chunk was on 51693 **/
/** chunk id: 795755, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk540185 = require("./540185.js"),
  Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk735321 = require("./735321.js"),
  Chunk483558 = require("./483558.js"),
  Chunk34442 = require("./34442.jsx"),
  Chunk253798 = require("./253798.jsx"),
  Chunk25530 = require("./25530.jsx"),
  Chunk155400 = require("./155400.jsx"),
  Chunk844206 = require("./844206.jsx"),
  Chunk557964 = require("./557964.jsx"),
  Chunk987140 = require("./987140.jsx"),
  Chunk281743 = require("./281743.js");

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

function O(e, t) {
  if (null == e) return {};
  var n, r, l, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.getOwnPropertyNames(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  return i
}

function j(e) {
  let {
    widget: t
  } = e, n = O(e, ["widget"]);
  switch (t.type) {
    case l.x.FAVORITE_GAMES:
      return (0, r.jsx)(f.A, y({
        widget: t
      }, n));
    case l.x.CURRENT_GAMES:
      return (0, r.jsx)(d.A, y({
        widget: t
      }, n));
    case l.x.WANT_TO_PLAY_GAMES:
      return (0, r.jsx)(g.A, y({
        widget: t
      }, n));
    case l.x.PLAYED_GAMES:
      return (0, r.jsx)(p.A, y({
        widget: t
      }, n));
    default:
      return null
  }
}

function h(e) {
  let {
    widget: t,
    user: n,
    disableInteraction: l
  } = e, d = O(e, ["widget", "user", "disableInteraction"]), {
    setExpanded: f
  } = (0, u.B)(), {
    shouldShowSuggestions: p,
    handleDismissSuggestions: g
  } = (0, s.q)(t), h = (0, i.bG)([a.default], () => a.default.getId() === n.id), x = h && !l && p, v = (0, o.L)(t), _ = (0, o.FM)(t, {
    isCurrentUser: h
  }), I = (0, o.uA)(t), w = 1 === (0, o.cv)(t.type);
  return (0, r.jsx)(j, y({
    widget: t,
    user: n,
    disableInteraction: l,
    headerTitle: v,
    headerSubtitle: _,
    headerActionButtons: h && !w ? [(0, r.jsx)(c.IU, {
      disabled: I,
      widgetType: t.type,
      widget: t,
      onAddGame: () => f(true)
    }, "".concat(t.type, "-browse-games-popout"))] : true,
    trailingContent: x && (0, r.jsx)(m.A, {
      userId: n.id,
      widgetType: t.type,
      onDismiss: g,
      className: b.r
    })
  }, d))
}

function x(e) {
  let {
    widget: t
  } = e, n = O(e, ["widget"]);
  return (0, r.jsx)(u.M, {
    widgetType: t.type,
    children: (0, r.jsx)(h, y({
      widget: t
    }, n))
  })
}