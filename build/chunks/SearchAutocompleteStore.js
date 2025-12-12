/** Chunk was on web.js **/
/** chunk id: 738018, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => er
}), require("./388685.js"), require("./539854.js"), require("./781311.js"), require("./290780.js");
var r, Chunk498607 = require("./498607.js"),
  o = require.n(Chunk498607),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk279779 = require("./279779.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk483360 = require("./483360.js"),
  Chunk892880 = require("./892880.js"),
  Chunk51144 = require("./51144.js"),
  Chunk607802 = require("./607802.js"),
  Chunk375123 = require("./375123.js"),
  Chunk532428 = require("./532428.js"),
  Chunk981631 = require("./981631.js"),
  Chunk727785 = require("./727785.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let I = null,
  T = new Map,
  C = new Map,
  A = 10,
  N = 3;

function P(e) {
  let t = (0, E.R6)(e),
    n = (0, b.Z)({
      location: "getEmptySearchOptions"
    });
  return new Map([
    [O.dCx.FILTER_FROM, !p.Z.hidePersonalInformation],
    [O.dCx.FILTER_MENTIONS, !p.Z.hidePersonalInformation],
    [O.dCx.FILTER_HAS, true],
    [O.dCx.FILTER_BEFORE, true],
    [O.dCx.FILTER_AFTER, true],
    [O.dCx.FILTER_ON, true],
    [O.dCx.FILTER_IN, t],
    [O.dCx.FILTER_PINNED, true],
    [O.dCx.FILTER_AUTHOR_TYPE, n]
  ])
}

function R(e) {
  let t = [O.dCx.FILTER_HAS];
  return p.Z.hidePersonalInformation || (t.push(O.dCx.FILTER_FROM), t.push(O.dCx.FILTER_MENTIONS)), (0, E.R6)(e) && t.push(O.dCx.FILTER_IN), t
}

function w(e) {
  var t;
  let n = (0, E.Tm)(e),
    r = null != (t = C.get(n)) ? t : {
      results: [],
      context: l.Z.getUserSearchContext(k.bind(null, e))
    };
  return C.set(n, r), r
}

function D(e) {
  return {
    searchContext: e,
    query: "",
    mode: {
      type: O.Sap.EMPTY,
      filter: null,
      token: null
    },
    tokens: [],
    cursorScope: null,
    autocompletes: []
  }
}

function x(e) {
  let {
    searchContext: t,
    query: n,
    mode: r,
    tokens: i,
    cursorScope: o,
    autocompletes: a
  } = e;
  return w(t), {
    searchContext: t,
    query: n,
    mode: r,
    tokens: i,
    cursorScope: o,
    autocompletes: a
  }
}

function L(e) {
  let {
    id: t
  } = e, n = C.get(t);
  null != n && (n.context.destroy(), n.results = [], C.delete(t)), T.delete(t), I = null
}

function j(e) {
  return null != e && (e === O.dCx.FILTER_FROM || e === O.dCx.FILTER_MENTIONS)
}

function M(e) {
  let t = j(e.filter);
  return e.type === O.Sap.FILTER_ALL || e.type === O.Sap.FILTER && t
}

function k(e, t) {
  let {
    results: n
  } = t, r = (0, E.Tm)(e), i = C.get(r), o = T.get(r);
  if (null == i || null == o || !M(o.mode)) return;
  i.results = U(n, o.mode.type === O.Sap.FILTER ? A : N);
  let {
    query: a,
    mode: s,
    tokens: l,
    cursorScope: c
  } = o, u = K(e, s, l), d = x({
    searchContext: e,
    query: a,
    mode: s,
    tokens: l,
    cursorScope: c,
    autocompletes: u
  });
  T.set(r, d), en.emitChange()
}

function U(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : A,
    n = [];
  for (let r of e) {
    if (n.length >= t) break;
    let e = _.default.getUser(r.id);
    if (null == e) continue;
    let i = g.ZP.getUserTag(e);
    null != i && n.push({
      text: i,
      user: e
    })
  }
  return n
}

function G(e) {
  o()(I, e) || (I = e, (0, E.WU)())
}

function Z(e) {
  let {
    searchContext: t
  } = e;
  G(t), J(t)
}

function F(e) {
  let t, {
    searchContext: n,
    tokens: r,
    cursorScope: i
  } = e;
  G(n);
  let o = (0, E.cl)(r),
    a = (0, E.qc)(i, r),
    s = (0, E.Tm)(n),
    l = T.get(s),
    c = true;
  if (null != l && o === l.query && (null == l.mode || l.mode.filter === a.filter)) t = l.autocompletes, c = false;
  else if (M(a)) {
    var u, d;
    let e = w(n),
      i = a.token,
      o = null == i || null == (u = i.getFullMatch()) ? true : u.trim();
    if (null != o && o.length > 0) {
      let r = (0, E.s5)(n);
      null != r && h.Z.requestMembers(r, o, A), e.context.setQuery({
        query: o,
        filters: {
          guild: null != r ? r : true
        },
        boosters: (0, m.Cq)(v.h8.USER)
      }), t = null != (d = null == l ? true : l.autocompletes) ? d : [], c = false
    } else e.context.clearQuery(), t = K(n, a, r)
  } else {
    let e = C.get(s);
    null != e && (e.context.clearQuery(), e.results = []), t = K(n, a, r)
  }
  let f = x({
    searchContext: n,
    query: o,
    mode: a,
    tokens: r,
    cursorScope: i,
    autocompletes: t
  });
  return T.set(s, f), c
}

function B(e) {
  var t, n, r;
  let {
    filter: i,
    currentToken: o,
    searchContext: a,
    maxResults: s = A,
    tokens: l
  } = e;
  if (null == i) return null;
  let c = null,
    u = null != (n = null == o || null == (t = o.getFullMatch()) ? true : t.trim()) ? n : "",
    d = 0 === u.length;
  if ((0, E.b7)(a) && j(i) && !d) c = w(a).results;
  else {
    let e = null == (r = y.ZP[i]) ? true : r.getAutocompletions;
    c = null != e ? e({
      query: u,
      searchContext: a,
      maxResults: s,
      tokens: l
    }) : []
  }
  if (null != c && j(i) && (0, y.co)(u)) {
    let e = _.default.getCurrentUser();
    null != e && (c = c.filter(t => {
      let {
        user: n
      } = t;
      return (null == n ? true : n.id) !== e.id
    })).unshift({
      text: O.ME,
      user: e
    })
  }
  return null == c || 0 === c.length ? null : {
    group: i,
    results: c
  }
}

function V(e, t) {
  let n = (null != e ? e.getFullMatch() : "").trim(),
    r = P(t),
    i = (0, y.Ej)(n).filter(e => null != e.token && true === r.get(e.token));
  return {
    group: O.rtL.SEARCH_OPTIONS,
    results: i
  }
}

function H(e, t, n) {
  var r;
  let i = e.token,
    o = null == i || null == (r = i.getFullMatch()) ? true : r.trim(),
    a = [];
  if (null != o && "" !== o) {
    R(t).forEach(e => {
      if (null == e) return;
      let r = B({
        filter: e,
        currentToken: i,
        searchContext: t,
        maxResults: N,
        tokens: n
      });
      null != r && a.push(r)
    });
    let e = Y(i, t);
    null != e && a.push(e)
  }
  return 5 > (0, E.BU)(a) && a.push(V(i, t)), a
}

function Y(e, t) {
  var n, r, i, o, a, s, l, c, u;
  let d = (null != e ? e.getFullMatch() : "").trim();
  if (null == d || "" === d) return null;
  let f = null == (i = y.ZP[O.dCx.FILTER_BEFORE]) || null == (r = i.getAutocompletions) || null == (n = r.call(i, {
      query: d,
      searchContext: t,
      maxResults: 1
    })) ? true : n[0],
    p = null == (s = y.ZP[O.dCx.FILTER_ON]) || null == (a = s.getAutocompletions) || null == (o = a.call(s, {
      query: d,
      searchContext: t,
      maxResults: 1
    })) ? true : o[0],
    _ = null == (u = y.ZP[O.dCx.FILTER_AFTER]) || null == (c = u.getAutocompletions) || null == (l = c.call(u, {
      query: d,
      searchContext: t,
      maxResults: 1
    })) ? true : l[0];
  if (null == f) return null;
  let m = [f];
  return null != p && m.push(p), null != _ && m.push(_), {
    group: O.rtL.DATES,
    results: m
  }
}

function W(e) {
  if (p.Z.hidePersonalInformation) return null;
  {
    let t = n(741995).Z,
      r = (0, E.BX)(e);
    if (null == r) return null;
    let i = t.getHistory(r);
    if (null == i) return null;
    let o = [],
      a = new Set;
    return i.forEach(t => {
      let n = e.type === O.aib.CHANNEL ? (0, E.EX)(t) : t;
      "" === n || a.has(n) || (a.add(n), o.push({
        text: n
      }))
    }), {
      group: O.rtL.HISTORY,
      results: o
    }
  }
}

function K(e, t, n) {
  switch (t.type) {
    case O.Sap.FILTER:
      let r = B({
        filter: t.filter,
        currentToken: t.token,
        searchContext: e,
        maxResults: A,
        tokens: n
      });
      return null != r ? [r] : [];
    case O.Sap.FILTER_ALL:
      return H(t, e, n);
    case O.Sap.EMPTY:
      let i = [];
      i.push(V(t.token, e));
      {
        let t = W(e);
        null != t && i.push(t)
      }
      return i
  }
}

function z() {
  (0, Chunk607802.WU)()
}

function q(e) {
  let t = T.get(e);
  if (null == t) return;
  let {
    searchContext: n,
    query: r,
    mode: i,
    tokens: o,
    cursorScope: a,
    autocompletes: s
  } = t, l = [];
  s.forEach(e => {
    e.group !== O.rtL.HISTORY && l.push(e)
  });
  let c = x({
    searchContext: n,
    query: r,
    mode: i,
    tokens: o,
    cursorScope: a,
    autocompletes: l
  });
  T.set(e, c)
}

function Q(e) {
  let {
    autocompleteStateId: t
  } = e;
  q(t)
}

function X() {
  for (let e of T.keys()) q(module)
}

function J(e) {
  let t = (0, E.Tm)(e),
    n = T.get(t);
  if (null == n) returnfalse;
  let {
    query: r,
    mode: i,
    tokens: o,
    cursorScope: a
  } = n, s = x({
    searchContext: e,
    query: r,
    mode: i,
    tokens: o,
    cursorScope: a,
    autocompletes: K(e, i, o)
  });
  T.set(t, s)
}

function $() {
  return null != I && J(I)
}

function ee() {
  return null != I && J(I)
}
class et extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk271383.ZP, Chunk430824.Z, Chunk944486.Z, Chunk246946.Z, Chunk594174.default)
  }
  getState(e) {
    var t;
    let n = (0, E.Tm)(e);
    return null != (t = T.get(n)) ? t : D(e)
  }
  getSelectedSearchContext() {
    return I
  }
}
S(et, "displayName", "SearchAutocompleteStore");
let en = new et(Chunk570140.Z, {
    SEARCH_AUTOCOMPLETE_INITIALIZE: Z,
    SEARCH_AUTOCOMPLETE_QUERY_UPDATE: F,
    SEARCH_EDITOR_STATE_CLEAR: L,
    CHANNEL_CREATE: z,
    CHANNEL_DELETE: z,
    STREAMER_MODE_UPDATE: $,
    CHANNEL_SELECT: ee,
    LOGOUT: X,
    SEARCH_HISTORY_WEB_CLEAR_ITEMS: Q
  }),
  er = en