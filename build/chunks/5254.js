/** Chunk was on 24491 **/
n.d(t, {
  Z: () => P
}), n(47120);
var r, i = n(392711),
  l = n.n(i),
  u = n(442837),
  o = n(570140),
  c = n(598077),
  a = n(594174),
  s = n(388380),
  d = n(72937);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let g = {},
  O = 0,
  y = !1,
  p = !1;

function E(e) {
  var t;
  let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
  return {
    key: e.suggested_user.id,
    name: null === (t = l().first(e.reasons)) || void 0 === t ? void 0 : t.name,
    user: new c.Z(e.suggested_user),
    mutualFriendsCount: e.mutual_friends_count,
    contactNames: n
  }
}
class h extends(r = u.ZP.Store) {
  initialize() {
    this.waitFor(a.default)
  }
  getSuggestionCount() {
    return O
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
f(h, "displayName", "FriendSuggestionStore");
let P = new h(o.Z, {
  CONNECTION_OPEN: function(e) {
    g = {}, (O = e.friendSuggestionCount) > 0 ? (p = !0, y || !p || (y = !0, p = !1, s.Z.fetch())) : (0, d.Z)()
  },
  FRIEND_SUGGESTION_CREATE: function(e) {
    var t, n;
    let r = E(e.suggestion);
    if (null != g[r.key]) return !1;
    O++, t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          f(e, t, n[t])
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
    O = Math.max(0, --O), delete g[e.suggestedUserId]
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    var t;
    y = !1, t = e.suggestions, g = l().chain(t).map(e => E(e)).keyBy(e => e.key).value(), O = l().keys(g).length
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
    y = !1, g = {}
  }
})