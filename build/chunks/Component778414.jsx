/** Chunk was on 11776 **/
/** chunk id: 778414, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk296009 = require("./296009.js"),
  Chunk481060 = require("./481060.js"),
  Chunk747101 = require("./747101.js"),
  Chunk517157 = require("./517157.js"),
  Chunk985748 = require("./985748.jsx"),
  Chunk566007 = require("./566007.jsx"),
  Chunk173951 = require("./173951.jsx"),
  Chunk455731 = require("./455731.jsx"),
  Chunk795990 = require("./795990.jsx"),
  Chunk19043 = require("./19043.js");

function p(e) {
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

function g(e) {
  var {
    widget: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["widget"]);
  switch (t.type) {
    case l.l.FAVORITE_GAMES:
      return (0, r.jsx)(s.Z, p({
        widget: t
      }, n));
    case l.l.CURRENT_GAMES:
      return (0, r.jsx)(c.Z, p({
        widget: t
      }, n));
    case l.l.WANT_TO_PLAY_GAMES:
      return (0, r.jsx)(u.Z, p({
        widget: t
      }, n));
    case l.l.PLAYED_GAMES:
      return (0, r.jsx)(d.Z, p({
        widget: t
      }, n));
    default:
      return null
  }
}

function b(e) {
  let {
    user: t,
    guildId: n,
    channelId: l
  } = e, i = (0, a.Z)(t.id), {
    widgets: c,
    isGameFetching: s
  } = (0, o.Z)(i);
  return 0 === c.length ? (0, r.jsx)(f.Z, {}) : (0, r.jsx)(r.Fragment, {
    children: c.map(e => (0, r.jsx)(g, {
      widget: e,
      user: t,
      guildId: n,
      channelId: l,
      isGameFetching: s
    }, e.id))
  })
}

function j(e) {
  return (0, r.jsx)(i.Ttm, {
    className: m.scroller,
    fade: true,
    children: (0, r.jsx)(b, p({}, e))
  })
}