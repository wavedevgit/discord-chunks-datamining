/** Chunk was on 71447 **/
/** chunk id: 125117, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => f,
  n: () => A
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

function p(e, t) {
  let [, n] = e, [, i] = t;
  return n === i
}

function f() {
  let [e] = (0, r.bG)([c.A, l.A, o.A], () => {
    var e, t;
    let n = l.A.getGroups(),
      [i, r] = c.A.getRows(c.j.FRIEND_REQUESTS),
      a = h(i),
      s = h(c.A.getRows(c.j.SUGGESTIONS)[0]),
      u = h(c.A.getRows(c.j.SAME_ACTIVITY)[0]),
      d = h(c.A.getRows(c.j.ACTIVITIES)[0]),
      p = h(c.A.getRows(c.j.IN_GAME)[0]),
      f = h(c.A.getRows(c.j.ONLINE)[0]),
      g = h(c.A.getRows(c.j.OFFLINE)[0]),
      m = n.map(e => {
        let [t] = c.A.getRows("GROUP:".concat(e.id));
        return {
          id: e.id,
          name: e.name,
          users: h(t)
        }
      }),
      y = null != (e = null == (t = o.A.getPrimaryActivity()) ? true : t.name) ? e : "",
      A = n.map(e => "".concat(e.id, "\0").concat(e.name, "\0").concat(e.userIds.length)).join("|"),
      v = "".concat(r, "\0").concat(A, "\0").concat(y);
    return [{
      groups: m,
      friendRequests: a,
      suggestions: s,
      inGame: p,
      activities: d,
      sameActivity: u,
      online: f,
      offline: g,
      currentActivityName: y
    }, v]
  }, [], p);
  return e
}

function g(e) {
  let {
    user: t,
    activities: n,
    nickname: i
  } = e;
  return [t.username, t.globalName, i, ...n.map(e => e.name)].filter(u.Vq)
}
let m = {
  searchType: Chunk379078.n.FUZZY,
  searchStringGenerator: g,
  sortType: Chunk379078.r.JARO_WINKLER,
  throttleMs: 100
};

function y(e, t) {
  let [n, r] = i.useState(t), l = i.useCallback(() => r(t), [t]);
  return (0, s.RT)(e, t, r, m), [n, l]
}

function A(e) {
  let [t, n] = i.useState(""), [r, l] = y(t, e.friendRequests), [a, s] = y(t, e.suggestions), [o, u] = y(t, e.sameActivity), [c, d] = y(t, e.activities), [h, p] = y(t, e.inGame), [f, m] = y(t, e.online), [A, v] = y(t, e.offline), b = i.useMemo(() => {
    if ("" === t.trim()) return e.groups;
    let n = t.toLowerCase();
    return e.groups.map(e => {
      var t, i;
      let r = e.users.filter(e => g(e).some(e => null != e && e.toLowerCase().includes(n)));
      return t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, e), i = i = {
        users: r
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t
    }).filter(e => e.users.length > 0)
  }, [t, e.groups]), E = i.useCallback(() => {
    n(""), l(), s(), u(), d(), p(), m(), v()
  }, [l, s, u, d, p, m, v]);
  return {
    groups: b,
    friendRequests: r,
    suggestions: a,
    sameActivity: o,
    inGame: h,
    activities: c,
    online: f,
    offline: A,
    currentActivityName: e.currentActivityName,
    searchQuery: t,
    setSearchQuery: n,
    clearSearch: E
  }
}