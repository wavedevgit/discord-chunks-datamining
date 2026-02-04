/** Chunk was on 7685 **/
/** chunk id: 576420, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A2: () => u,
  Ay: () => c,
  WS: () => a
});
var Chunk839214 = require("./839214.js"),
  Chunk914853 = require("./914853.js");

function i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let a = 1e3,
  o = (0, Chunk839214.D)((e, t) => ({
    activeTab: r.x.FRIENDS,
    recentlyAddedFavoriteTimestampMsByKey: {},
    setActiveTab: n => {
      t().activeTab !== n && e({
        activeTab: n
      })
    },
    markFavoriteAdded: (t, n) => {
      let l = null != n ? n : Date.now();
      e(e => ({
        recentlyAddedFavoriteTimestampMsByKey: s(i({}, e.recentlyAddedFavoriteTimestampMsByKey), {
          [t]: l
        })
      }))
    },
    clearFavoriteAdded: t => {
      e(e => null == e.recentlyAddedFavoriteTimestampMsByKey[t] ? {} : {
        recentlyAddedFavoriteTimestampMsByKey: s(i({}, e.recentlyAddedFavoriteTimestampMsByKey), {
          [t]: true
        })
      })
    }
  }));

function u(e) {
  return o.useState(t => {
    var n;
    return null != (n = t.recentlyAddedFavoriteTimestampMsByKey[e]) ? n : null
  })
}
let c = o