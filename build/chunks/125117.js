/** Chunk was on 7685 **/
/** chunk id: 125117, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => f,
  n: () => E
}), require("./896048.js"), require("./733351.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk870391 = require("./870391.js"),
  Chunk379078 = require("./379078.js"),
  Chunk704554 = require("./704554.js"),
  Chunk461213 = require("./461213.js"),
  Chunk403362 = require("./403362.js"),
  Chunk185657 = require("./185657.js");

function d(e) {
  return {
    user: e.user,
    activities: e.activities,
    nickname: e.nickname,
    gameProfileEntry: e.gameProfileEntry,
    relationshipType: e.relationshipType
  }
}

function h(e) {
  return e.map(d)
}

function g(e, t) {
  let [, n] = e, [, l] = t;
  return n === l
}

function f() {
  let [e] = (0, r.bG)([c.A, i.A, o.A], () => {
    var e, t;
    let n = i.A.getGroups(),
      [l, r] = c.A.getRows(c.j.FRIEND_REQUESTS),
      s = h(l),
      a = h(c.A.getRows(c.j.SUGGESTIONS)[0]),
      u = h(c.A.getRows(c.j.SAME_ACTIVITY)[0]),
      d = h(c.A.getRows(c.j.ACTIVITIES)[0]),
      g = h(c.A.getRows(c.j.IN_GAME)[0]),
      f = h(c.A.getRows(c.j.ONLINE)[0]),
      p = h(c.A.getRows(c.j.OFFLINE)[0]),
      I = n.map(e => {
        let [t] = c.A.getRows("GROUP:".concat(e.id));
        return {
          id: e.id,
          name: e.name,
          users: h(t)
        }
      }),
      m = null != (e = null == (t = o.A.getPrimaryActivity()) ? true : t.name) ? e : "",
      E = n.map(e => "".concat(e.id, "\0").concat(e.name, "\0").concat(e.userIds.length)).join("|"),
      A = "".concat(r, "\0").concat(E, "\0").concat(m);
    return [{
      groups: I,
      friendRequests: s,
      suggestions: a,
      inGame: g,
      activities: d,
      sameActivity: u,
      online: f,
      offline: p,
      currentActivityName: m
    }, A]
  }, [], g);
  return e
}

function p(e) {
  let {
    user: t,
    activities: n,
    nickname: l
  } = e;
  return [t.username, t.globalName, l, ...n.map(e => e.name)].filter(u.Vq)
}
let I = {
  searchType: Chunk379078.n.FUZZY,
  searchStringGenerator: p,
  sortType: Chunk379078.r.JARO_WINKLER,
  throttleMs: 100
};

function m(e, t) {
  let [n, r] = l.useState(t), i = l.useCallback(() => r(t), [t]);
  return (0, a.RT)(e, t, r, I), [n, i]
}

function E(e) {
  let [t, n] = l.useState(""), [r, i] = m(t, e.friendRequests), [s, a] = m(t, e.suggestions), [o, u] = m(t, e.sameActivity), [c, d] = m(t, e.activities), [h, g] = m(t, e.inGame), [f, I] = m(t, e.online), [E, A] = m(t, e.offline), y = l.useMemo(() => {
    if ("" === t.trim()) return e.groups;
    let n = t.toLowerCase();
    return e.groups.map(e => {
      var t, l;
      let r = e.users.filter(e => p(e).some(e => null != e && e.toLowerCase().includes(n)));
      return t = function(e) {
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
      }({}, e), l = l = {
        users: r
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
      }), t
    }).filter(e => e.users.length > 0)
  }, [t, e.groups]), S = l.useCallback(() => {
    n(""), i(), a(), u(), d(), g(), I(), A()
  }, [i, a, u, d, g, I, A]);
  return {
    groups: y,
    friendRequests: r,
    suggestions: s,
    sameActivity: o,
    inGame: h,
    activities: c,
    online: f,
    offline: E,
    currentActivityName: e.currentActivityName,
    searchQuery: t,
    setSearchQuery: n,
    clearSearch: S
  }
}