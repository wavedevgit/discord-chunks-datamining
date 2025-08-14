/** Chunk was on 76708 **/
/** chunk id: 272289, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  Chunk804919 = require("./804919.js"),
  Chunk747101 = require("./747101.js"),
  Chunk977416 = require("./977416.jsx");

function s(e) {
  var {
    widgetGames: t
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
  }(e, ["widgetGames"]);
  let {
    games: s,
    isGameFetching: d
  } = function() {
    let [e] = l.useState(() => (0, i.sampleSize)(o.qs, 4)), {
      gameDataMap: t,
      isGameFetching: n
    } = (0, a.F)(e);
    return {
      games: l.useMemo(() => e.map(e => {
        let n = t[e];
        return {
          applicationId: e,
          gameName: null == n ? true : n.name,
          imageSrc: null == n ? true : n.coverImageUrl
        }
      }), [e, t]),
      isGameFetching: n
    }
  }(), u = new Set(t.map(e => e.applicationId)), f = s.filter(e => !u.has(e.applicationId));
  return (0, r.jsx)(c.Z, function(e) {
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
  }({
    games: f,
    isGameFetching: d
  }, n))
}