/** Chunk was on web.js **/
/** chunk id: 692986, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => en
}), require("./896048.js"), require("./321073.js"), require("./733351.js"), require("./667532.js");
var r, Chunk33851 = require("./33851.js"),
  a = require.n(Chunk33851),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk450827 = require("./450827.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk309010 = require("./309010.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk248465 = require("./248465.js"),
  Chunk695184 = require("./695184.js"),
  Chunk427262 = require("./427262.js"),
  Chunk822382 = require("./822382.js"),
  Chunk771650 = require("./771650.js"),
  Chunk652215 = require("./652215.js"),
  Chunk926140 = require("./926140.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let A = null,
  I = new Map,
  S = new Map,
  T = 10,
  C = 3;

function N(e) {
  let t = (0, E.Wg)(e);
  return new Map([
    [b.LWr.FILTER_FROM, !p.A.hidePersonalInformation],
    [b.LWr.FILTER_MENTIONS, !p.A.hidePersonalInformation],
    [b.LWr.FILTER_HAS, true],
    [b.LWr.FILTER_BEFORE, true],
    [b.LWr.FILTER_AFTER, true],
    [b.LWr.FILTER_ON, true],
    [b.LWr.FILTER_IN, t],
    [b.LWr.FILTER_PINNED, true],
    [b.LWr.FILTER_AUTHOR_TYPE, true]
  ])
}

function w(e) {
  let t = [b.LWr.FILTER_HAS];
  return p.A.hidePersonalInformation || (t.push(b.LWr.FILTER_FROM), t.push(b.LWr.FILTER_MENTIONS)), (0, E.Wg)(e) && t.push(b.LWr.FILTER_IN), t
}

function R(e) {
  var t;
  let n = (0, E.bS)(e),
    r = null != (t = S.get(n)) ? t : {
      results: [],
      context: l.A.getUserSearchContext(j.bind(null, e))
    };
  return S.set(n, r), r
}

function P(e) {
  return {
    searchContext: e,
    query: "",
    mode: {
      type: b.o$q.EMPTY,
      filter: null,
      token: null
    },
    tokens: [],
    cursorScope: null,
    autocompletes: []
  }
}

function D(e) {
  let {
    searchContext: t,
    query: n,
    mode: r,
    tokens: i,
    cursorScope: a,
    autocompletes: o
  } = e;
  return R(t), {
    searchContext: t,
    query: n,
    mode: r,
    tokens: i,
    cursorScope: a,
    autocompletes: o
  }
}

function L(e) {
  let {
    id: t
  } = e, n = S.get(t);
  null != n && (n.context.destroy(), n.results = [], S.delete(t)), I.delete(t), A = null
}

function x(e) {
  return null != e && (e === b.LWr.FILTER_FROM || e === b.LWr.FILTER_MENTIONS)
}

function M(e) {
  let t = x(e.filter);
  return e.type === b.o$q.FILTER_ALL || e.type === b.o$q.FILTER && t
}

function j(e, t) {
  let {
    results: n
  } = t, r = (0, E.bS)(e), i = S.get(r), a = I.get(r);
  if (null == i || null == a || !M(a.mode)) return;
  i.results = k(n, a.mode.type === b.o$q.FILTER ? T : C);
  let {
    query: o,
    mode: s,
    tokens: l,
    cursorScope: c
  } = a, u = K(e, s, l), d = D({
    searchContext: e,
    query: o,
    mode: s,
    tokens: l,
    cursorScope: c,
    autocompletes: u
  });
  I.set(r, d), et.emitChange()
}

function k(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : T,
    n = [];
  for (let r of e) {
    if (n.length >= t) break;
    let e = _.default.getUser(r.id);
    if (null == e) continue;
    let i = g.Ay.getUserTag(e);
    null != i && n.push({
      text: i,
      user: e
    })
  }
  return n
}

function U(e) {
  a()(A, e) || (A = e, (0, E.Pe)())
}

function G(e) {
  let {
    searchContext: t
  } = e;
  U(t), X(t)
}

function V(e) {
  let t, {
    searchContext: n,
    tokens: r,
    cursorScope: i
  } = e;
  U(n);
  let a = (0, E.lX)(r),
    o = (0, E.Gk)(i, r),
    s = (0, E.bS)(n),
    l = I.get(s),
    c = true;
  if (null != l && a === l.query && (null == l.mode || l.mode.filter === o.filter)) t = l.autocompletes, c = false;
  else if (M(o)) {
    var u, d;
    let e = R(n),
      i = o.token,
      a = null == i || null == (u = i.getFullMatch()) ? true : u.trim();
    if (null != a && a.length > 0) {
      let r = (0, E.mt)(n);
      null != r && m.A.requestMembers(r, a, T), e.context.setQuery({
        query: a,
        filters: {
          guild: null != r ? r : true
        },
        boosters: (0, h.X3)(O.rD.USER)
      }), t = null != (d = null == l ? true : l.autocompletes) ? d : [], c = false
    } else e.context.clearQuery(), t = K(n, o, r)
  } else {
    let e = S.get(s);
    null != e && (e.context.clearQuery(), e.results = []), t = K(n, o, r)
  }
  let f = D({
    searchContext: n,
    query: a,
    mode: o,
    tokens: r,
    cursorScope: i,
    autocompletes: t
  });
  return I.set(s, f), c
}

function F(e) {
  var t, n, r;
  let {
    filter: i,
    currentToken: a,
    searchContext: o,
    maxResults: s = T,
    tokens: l
  } = e;
  if (null == i) return null;
  let c = null,
    u = null != (t = null == a || null == (n = a.getFullMatch()) ? true : n.trim()) ? t : "",
    d = 0 === u.length;
  if ((0, E._B)(o) && x(i) && !d) c = R(o).results;
  else {
    let e = null == (r = y.Ay[i]) ? true : r.getAutocompletions;
    c = null != e ? e({
      query: u,
      searchContext: o,
      maxResults: s,
      tokens: l
    }) : []
  }
  if (null != c && x(i) && (0, y.WL)(u)) {
    let e = _.default.getCurrentUser();
    null != e && (c = c.filter(t => {
      let {
        user: n
      } = t;
      return (null == n ? true : n.id) !== e.id
    })).unshift({
      text: b.ME,
      user: e
    })
  }
  return null == c || 0 === c.length ? null : {
    group: i,
    results: c
  }
}

function B(e, t) {
  let n = (null != e ? e.getFullMatch() : "").trim(),
    r = N(t),
    i = (0, y.gR)(n).filter(e => null != e.token && true === r.get(e.token));
  return {
    group: b.x2k.SEARCH_OPTIONS,
    results: i
  }
}

function H(e, t, n) {
  var r;
  let i = e.token,
    a = null == i || null == (r = i.getFullMatch()) ? true : r.trim(),
    o = [];
  if (null != a && "" !== a) {
    w(t).forEach(e => {
      if (null == e) return;
      let r = F({
        filter: e,
        currentToken: i,
        searchContext: t,
        maxResults: C,
        tokens: n
      });
      null != r && o.push(r)
    });
    let e = Y(i, t);
    null != e && o.push(e)
  }
  return 5 > (0, E.rI)(o) && o.push(B(i, t)), o
}

function Y(e, t) {
  var n, r, i, a, o, s, l, c, u;
  let d = (null != e ? e.getFullMatch() : "").trim();
  if (null == d || "" === d) return null;
  let f = null == (i = y.Ay[b.LWr.FILTER_BEFORE]) || null == (r = i.getAutocompletions) || null == (n = r.call(i, {
      query: d,
      searchContext: t,
      maxResults: 1
    })) ? true : n[0],
    p = null == (s = y.Ay[b.LWr.FILTER_ON]) || null == (o = s.getAutocompletions) || null == (a = o.call(s, {
      query: d,
      searchContext: t,
      maxResults: 1
    })) ? true : a[0],
    _ = null == (u = y.Ay[b.LWr.FILTER_AFTER]) || null == (c = u.getAutocompletions) || null == (l = c.call(u, {
      query: d,
      searchContext: t,
      maxResults: 1
    })) ? true : l[0];
  if (null == f) return null;
  let h = [f];
  return null != p && h.push(p), null != _ && h.push(_), {
    group: b.x2k.DATES,
    results: h
  }
}

function W(e) {
  if (p.A.hidePersonalInformation) return null;
  {
    let t = n(842716).A,
      r = (0, E.Jl)(e);
    if (null == r) return null;
    let i = t.getHistory(r);
    if (null == i) return null;
    let a = [],
      o = new Set;
    return i.forEach(t => {
      let n = e.type === b.I4_.CHANNEL ? (0, E.EH)(t) : t;
      "" === n || o.has(n) || (o.add(n), a.push({
        text: n
      }))
    }), {
      group: b.x2k.HISTORY,
      results: a
    }
  }
}

function K(e, t, n) {
  switch (t.type) {
    case b.o$q.FILTER:
      let r = F({
        filter: t.filter,
        currentToken: t.token,
        searchContext: e,
        maxResults: T,
        tokens: n
      });
      return null != r ? [r] : [];
    case b.o$q.FILTER_ALL:
      return H(t, e, n);
    case b.o$q.EMPTY:
      let i = [];
      i.push(B(t.token, e));
      {
        let t = W(e);
        null != t && i.push(t)
      }
      return i
  }
}

function z() {
  (0, E.Pe)()
}

function q(e) {
  let t = I.get(e);
  if (null == t) return;
  let {
    searchContext: n,
    query: r,
    mode: i,
    tokens: a,
    cursorScope: o,
    autocompletes: s
  } = t, l = [];
  s.forEach(e => {
    e.group !== b.x2k.HISTORY && l.push(e)
  });
  let c = D({
    searchContext: n,
    query: r,
    mode: i,
    tokens: a,
    cursorScope: o,
    autocompletes: l
  });
  I.set(e, c)
}

function Z(e) {
  let {
    autocompleteStateId: t
  } = e;
  q(t)
}

function Q() {
  for (let e of I.keys()) q(e)
}

function X(e) {
  let t = (0, E.bS)(e),
    n = I.get(t);
  if (null == n) returnfalse;
  let {
    query: r,
    mode: i,
    tokens: a,
    cursorScope: o
  } = n, s = D({
    searchContext: e,
    query: r,
    mode: i,
    tokens: a,
    cursorScope: o,
    autocompletes: K(e, i, a)
  });
  I.set(t, s)
}

function J() {
  return null != A && X(A)
}

function $() {
  return null != A && X(A)
}
class ee extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A, u.Ay, d.A, f.A, p.A, _.default)
  }
  getState(e) {
    var t;
    let n = (0, E.bS)(e);
    return null != (t = I.get(n)) ? t : P(e)
  }
  getSelectedSearchContext() {
    return A
  }
}
v(ee, "displayName", "SearchAutocompleteStore");
let et = new ee(Chunk73153.h, {
    SEARCH_AUTOCOMPLETE_INITIALIZE: G,
    SEARCH_AUTOCOMPLETE_QUERY_UPDATE: V,
    SEARCH_EDITOR_STATE_CLEAR: L,
    CHANNEL_CREATE: z,
    CHANNEL_DELETE: z,
    STREAMER_MODE_UPDATE: J,
    CHANNEL_SELECT: $,
    LOGOUT: Q,
    SEARCH_HISTORY_WEB_CLEAR_ITEMS: Z
  }),
  en = et