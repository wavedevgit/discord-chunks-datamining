/** Chunk was on 29709 **/
/** chunk id: 5254, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var i, Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk598077 = require("./598077.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388380 = require("./388380.js"),
  Chunk72937 = require("./72937.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = {},
  g = 0,
  h = false,
  y = false;

function m(e) {
  var t;
  let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
  return {
    key: e.suggested_user.id,
    name: null == (t = l().first(e.reasons)) ? true : t.name,
    user: new o.Z(e.suggested_user),
    mutualFriendsCount: e.mutual_friends_count,
    contactNames: n
  }
}
class O extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default)
  }
  getSuggestionCount() {
    return g
  }
  getSuggestions() {
    return Object.entries(p).map(e => {
      let [t, n] = e;
      return n
    })
  }
  getSuggestion(e) {
    return p[e]
  }
}
f(O, "displayName", "FriendSuggestionStore");
let N = new O(Chunk570140.Z, {
  CONNECTION_OPEN: function(e) {
    p = {}, (g = e.friendSuggestionCount) > 0 ? (y = true, !h && y && (h = true, y = false, u.Z.fetch())) : (0, d.Z)()
  },
  FRIEND_SUGGESTION_CREATE: function(e) {
    var t, n;
    let i = m(e.suggestion);
    if (null != p[i.key]) returnfalse;
    g++, t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          f(e, t, n[t])
        })
      }
      return e
    }({}, p), n = n = {
      [i.key]: i
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), p = t
  },
  FRIEND_SUGGESTION_DELETE: function(e) {
    g = Math.max(0, --g), delete p[e.suggestedUserId]
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    var t;
    h = false, t = e.suggestions, p = l().chain(t).map(e => m(e)).keyBy(e => e.key).value(), g = l().keys(p).length
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
    h = false, p = {}
  }
})