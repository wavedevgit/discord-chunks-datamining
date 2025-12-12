/** Chunk was on 33721 **/
/** chunk id: 5254, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk598077 = require("./598077.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388380 = require("./388380.js"),
  Chunk72937 = require("./72937.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = {},
  d = 0,
  _ = false,
  b = false;

function O(e) {
  var t;
  let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
  return {
    key: e.suggested_user.id,
    name: null == (t = o().first(e.reasons)) ? true : t.name,
    user: new a.Z(e.suggested_user),
    mutualFriendsCount: e.mutual_friends_count,
    contactNames: n
  }
}
class m extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default)
  }
  getSuggestionCount() {
    return d
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
g(m, "displayName", "FriendSuggestionStore");
let y = new m(Chunk570140.Z, {
  CONNECTION_OPEN: function(e) {
    f = {}, (d = e.friendSuggestionCount) > 0 ? (b = true, !_ && b && (_ = true, b = false, u.Z.fetch())) : (0, p.Z)()
  },
  FRIEND_SUGGESTION_CREATE: function(e) {
    var t, n;
    let r = O(e.suggestion);
    if (null != f[r.key]) returnfalse;
    d++, t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          g(e, t, n[t])
        })
      }
      return e
    }({}, f), n = n = {
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
    }), f = t
  },
  FRIEND_SUGGESTION_DELETE: function(e) {
    d = Math.max(0, --d), delete f[e.suggestedUserId]
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    var t;
    _ = false, t = e.suggestions, f = o().chain(t).map(e => O(e)).keyBy(e => e.key).value(), d = o().keys(f).length
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
    _ = false, f = {}
  }
})