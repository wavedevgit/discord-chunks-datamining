/** Chunk was on 29709 **/
/** chunk id: 5254, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk598077 = require("./598077.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388380 = require("./388380.js"),
  Chunk72937 = require("./72937.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = {},
  f = 0,
  h = false,
  O = false;

function m(e) {
  var t;
  let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
  return {
    key: e.suggested_user.id,
    name: null == (t = l().first(e.reasons)) ? true : t.name,
    user: new a.Z(e.suggested_user),
    mutualFriendsCount: e.mutual_friends_count,
    contactNames: n
  }
}
class E extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default)
  }
  getSuggestionCount() {
    return f
  }
  getSuggestions() {
    return Object.entries(g).map(e => {
      let [t, n] = e;
      return n
    })
  }
  getSuggestion(e) {
    return g[e]
  }
}
p(E, "displayName", "FriendSuggestionStore");
let I = new E(Chunk570140.Z, {
  CONNECTION_OPEN: function(e) {
    g = {}, (f = e.friendSuggestionCount) > 0 ? (O = true, !h && O && (h = true, O = false, c.Z.fetch())) : (0, d.Z)()
  },
  FRIEND_SUGGESTION_CREATE: function(e) {
    var t, n;
    let r = m(e.suggestion);
    if (null != g[r.key]) returnfalse;
    f++, t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          p(e, t, n[t])
        })
      }
      return e
    }({}, g), n = n = {
      [r.key]: r
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), g = t
  },
  FRIEND_SUGGESTION_DELETE: function(e) {
    f = Math.max(0, --f), delete g[e.suggestedUserId]
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    var t;
    h = false, t = e.suggestions, g = l().chain(t).map(e => m(e)).keyBy(e => e.key).value(), f = l().keys(g).length
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
    h = false, g = {}
  }
})