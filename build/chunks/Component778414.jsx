/** Chunk was on 12756 **/
/** chunk id: 778414, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => _,
  Z: () => x
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk747101 = require("./747101.js"),
  Chunk517157 = require("./517157.js"),
  Chunk985748 = require("./985748.jsx"),
  Chunk566007 = require("./566007.jsx"),
  Chunk173951 = require("./173951.jsx"),
  Chunk455731 = require("./455731.jsx"),
  Chunk430790 = require("./430790.jsx"),
  Chunk795990 = require("./795990.jsx"),
  Chunk830202 = require("./830202.js");

function h(e) {
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

function x(e) {
  var {
    widget: t
  } = e, n = function(e, t) {
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
  }(e, ["widget"]);
  switch (t.type) {
    case l.l.FAVORITE_GAMES:
      return (0, r.jsx)(m.Z, h({
        widget: t
      }, n));
    case l.l.CURRENT_GAMES:
      return (0, r.jsx)(p.Z, h({
        widget: t
      }, n));
    case l.l.WANT_TO_PLAY_GAMES:
      return (0, r.jsx)(b.Z, h({
        widget: t
      }, n));
    case l.l.PLAYED_GAMES:
      return (0, r.jsx)(g.Z, h({
        widget: t
      }, n));
    default:
      return null
  }
}

function v(e) {
  let {
    user: t,
    guildId: n,
    channelId: i
  } = e, l = (0, f.Z)(t.id), {
    widgets: a,
    isGameFetching: s
  } = (0, u.Z)(l), d = (0, o.e7)([c.default], () => c.default.getId() === t.id);
  return 0 === a.length && d ? (0, r.jsx)(y.Z, {}) : (0, r.jsxs)(r.Fragment, {
    children: [a.map(e => (0, r.jsx)(x, {
      widget: e,
      user: t,
      guildId: n,
      channelId: i,
      isGameFetching: s
    }, e.id)), d && (0, r.jsx)(j.Z, {})]
  })
}

function _(e) {
  let t = (0, o.e7)([d.Z], () => d.Z.suggestedFetchAttempted);
  return i.useEffect(() => {
    t || s.Z.fetchSuggestedGames()
  }, [t]), (0, r.jsx)(a.Ttm, {
    className: O.scroller,
    fade: true,
    children: (0, r.jsx)(v, h({}, e))
  })
}