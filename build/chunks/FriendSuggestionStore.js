/** Chunk was on 29709 **/
/** chunk id: 5254, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var i, Chunk392711 = require("./392711.js"),
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
let f = {},
  g = 0,
  N = false,
  O = false;

function h(e) {
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
class m extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default)
  }
  getSuggestionCount() {
    return g
  }
  getSuggestions() {
    return Object.entries(f).map(e => {
      let [t, n] = e;
      return n
    })
  }
  getSuggestion(e) {
    return f[e]
  }
}
p(m, "displayName", "FriendSuggestionStore");
let y = new m(Chunk570140.Z, {
  CONNECTION_OPEN: function(e) {
    f = {}, (g = e.friendSuggestionCount) > 0 ? (O = true, !N && O && (N = true, O = false, u.Z.fetch())) : (0, d.Z)()
  },
  FRIEND_SUGGESTION_CREATE: function(e) {
    var t, n;
    let i = h(e.suggestion);
    if (null != f[i.key]) returnfalse;
    g++, t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          p(e, t, n[t])
        })
      }
      return e
    }({}, f), n = n = {
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
    }), f = t
  },
  FRIEND_SUGGESTION_DELETE: function(e) {
    g = Math.max(0, --g), delete f[e.suggestedUserId]
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    var t;
    N = false, t = e.suggestions, f = l().chain(t).map(e => h(e)).keyBy(e => e.key).value(), g = l().keys(f).length
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
    N = false, f = {}
  }
})