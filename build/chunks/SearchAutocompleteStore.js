/** Chunk was on web.js **/
/** chunk id: 738018, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => en
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
  Chunk981631 = require("./981631.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let I = null,
  T = new Map,
  S = new Map,
  A = 10,
  C = 3;

function N(e) {
  let t = (0, E.R6)(e),
    n = (0, b.Z)({
      location: "getEmptySearchOptions"
    });
  return new Map([
    [O.dCx.FILTER_FROM, !_.Z.hidePersonalInformation],
    [O.dCx.FILTER_MENTIONS, !_.Z.hidePersonalInformation],
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
  return _.Z.hidePersonalInformation || (t.push(O.dCx.FILTER_FROM), t.push(O.dCx.FILTER_MENTIONS)), (0, E.R6)(e) && t.push(O.dCx.FILTER_IN), t
}

function P(e) {
  var t;
  let n = (0, E.Tm)(e),
    r = null != (t = S.get(n)) ? t : {
      results: [],
      context: l.Z.getUserSearchContext(k.bind(null, e))
    };
  return S.set(n, r), r
}

function w(e) {
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

function D(e) {
  let {
    searchContext: t,
    query: n,
    mode: r,
    tokens: i,
    cursorScope: o,
    autocompletes: a
  } = e;
  return P(t), {
    searchContext: t,
    query: n,
    mode: r,
    tokens: i,
    cursorScope: o,
    autocompletes: a
  }
}

function x(e) {
  let {
    id: t
  } = e, n = S.get(t);
  null != n && (n.context.destroy(), n.results = [], S.delete(t)), T.delete(t), I = null
}

function L(e) {
  return null != e && (e === O.dCx.FILTER_FROM || e === O.dCx.FILTER_MENTIONS)
}

function j(e) {
  let t = L(e.filter);
  return e.type === O.Sap.FILTER_ALL || e.type === O.Sap.FILTER && t
}

function k(e, t) {
  let {
    results: n
  } = t, r = (0, E.Tm)(e), i = S.get(r), o = T.get(r);
  if (null == i || null == o || !j(o.mode)) return;
  i.results = M(n, o.mode.type === O.Sap.FILTER ? A : C);
  let {
    query: a,
    mode: s,
    tokens: l,
    cursorScope: c
  } = o, u = W(e, s, l), d = D({
    searchContext: e,
    query: a,
    mode: s,
    tokens: l,
    cursorScope: c,
    autocompletes: u
  });
  T.set(r, d), et.emitChange()
}

function M(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : A,
    n = [];
  for (let r of e) {
    if (n.length >= t) break;
    let e = p.default.getUser(r.id);
    if (null == e) continue;
    let i = g.ZP.getUserTag(e);
    null != i && n.push({
      text: i,
      user: e
    })
  }
  return n
}

function U(e) {
  o()(I, e) || (I = e, (0, E.WU)())
}

function G(e) {
  let {
    searchContext: t
  } = e;
  U(t), Q(t)
}

function B(e) {
  let t, {
    searchContext: n,
    tokens: r,
    cursorScope: i
  } = e;
  U(n);
  let o = (0, E.cl)(r),
    a = (0, E.qc)(i, r),
    s = (0, E.Tm)(n),
    l = T.get(s),
    c = true;
  if (null != l && o === l.query && (null == l.mode || l.mode.filter === a.filter)) t = l.autocompletes, c = false;
  else if (j(a)) {
    var u, d;
    let e = P(n),
      i = a.token,
      o = null == i || null == (u = i.getFullMatch()) ? true : u.trim();
    if (null != o && o.length > 0) {
      let r = (0, E.s5)(n);
      null != r && m.Z.requestMembers(r, o, A), e.context.setQuery({
        query: o,
        filters: {
          guild: null != r ? r : true
        }
      }), t = null != (d = null == l ? true : l.autocompletes) ? d : [], c = false
    } else e.context.clearQuery(), t = W(n, a, r)
  } else {
    let e = S.get(s);
    null != e && (e.context.clearQuery(), e.results = []), t = W(n, a, r)
  }
  let f = D({
    searchContext: n,
    query: o,
    mode: a,
    tokens: r,
    cursorScope: i,
    autocompletes: t
  });
  return T.set(s, f), c
}

function Z(e) {
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
    u = null != (n = null == o || null == (t = o.getFullMatch()) ? true : t.trim()) ? n : "";
  if ((0, E.b7)(a) && L(i)) {
    let e = P(a);
    if (0 === u.length) {
      let t = f.Z.getCurrentlySelectedChannelId(a.guildId);
      e.results = h.ZP.getRecentlyTalked(t, A).map(e => {
        let {
          record: t
        } = e;
        return {
          user: t,
          text: g.ZP.getUserTag(t)
        }
      })
    }
    c = e.results
  } else {
    let e = null == (r = y.ZP[i]) ? true : r.getAutocompletions;
    c = null != e ? e({
      query: u,
      searchContext: a,
      maxResults: s,
      tokens: l
    }) : []
  }
  if (null != c && L(i) && (0, y.co)(u)) {
    let e = p.default.getCurrentUser();
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

function F(e, t) {
  let n = (null != e ? e.getFullMatch() : "").trim(),
    r = N(t),
    i = (0, y.Ej)(n).filter(e => null != e.token && true === r.get(e.token));
  return {
    group: O.rtL.SEARCH_OPTIONS,
    results: i
  }
}

function V(e, t, n) {
  var r;
  let i = e.token,
    o = null == i || null == (r = i.getFullMatch()) ? true : r.trim(),
    a = [];
  if (null != o && "" !== o) {
    R(t).forEach(e => {
      if (null == e) return;
      let r = Z({
        filter: e,
        currentToken: i,
        searchContext: t,
        maxResults: C,
        tokens: n
      });
      null != r && a.push(r)
    });
    let e = H(i, t);
    null != e && a.push(e)
  }
  return 5 > (0, E.BU)(a) && a.push(F(i, t)), a
}

function H(e, t) {
  var n, r, i, o, a, s, l, c, u;
  let d = (null != e ? e.getFullMatch() : "").trim();
  if (null == d || "" === d) return null;
  let f = null == (i = y.ZP[O.dCx.FILTER_BEFORE]) || null == (r = i.getAutocompletions) || null == (n = r.call(i, {
      query: d,
      searchContext: t,
      maxResults: 1
    })) ? true : n[0],
    _ = null == (s = y.ZP[O.dCx.FILTER_ON]) || null == (a = s.getAutocompletions) || null == (o = a.call(s, {
      query: d,
      searchContext: t,
      maxResults: 1
    })) ? true : o[0],
    p = null == (u = y.ZP[O.dCx.FILTER_AFTER]) || null == (c = u.getAutocompletions) || null == (l = c.call(u, {
      query: d,
      searchContext: t,
      maxResults: 1
    })) ? true : l[0];
  if (null == f) return null;
  let h = [f];
  return null != _ && h.push(_), null != p && h.push(p), {
    group: O.rtL.DATES,
    results: h
  }
}

function Y(e) {
  if (_.Z.hidePersonalInformation) return null;
  {
    let t = n(741995).Z,
      r = (0, E.Tm)(e),
      i = t.getHistory(r);
    return null == i ? null : {
      group: O.rtL.HISTORY,
      results: i.map(e => ({
        text: e
      }))
    }
  }
}

function W(e, t, n) {
  switch (t.type) {
    case O.Sap.FILTER:
      let r = Z({
        filter: t.filter,
        currentToken: t.token,
        searchContext: e,
        maxResults: A,
        tokens: n
      });
      return null != r ? [r] : [];
    case O.Sap.FILTER_ALL:
      return V(t, e, n);
    case O.Sap.EMPTY:
      let i = [];
      i.push(F(t.token, e));
      {
        let t = Y(e);
        null != t && i.push(t)
      }
      return i
  }
}

function K() {
  (0, Chunk607802.WU)()
}

function z(e) {
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
  let c = D({
    searchContext: n,
    query: r,
    mode: i,
    tokens: o,
    cursorScope: a,
    autocompletes: l
  });
  T.set(e, c)
}

function q(e) {
  let {
    id: t
  } = e;
  z(t)
}

function X() {
  for (let e of T.keys()) z(module)
}

function Q(e) {
  let t = (0, E.Tm)(e),
    n = T.get(t);
  if (null == n) returnfalse;
  let {
    query: r,
    mode: i,
    tokens: o,
    cursorScope: a
  } = n, s = D({
    searchContext: e,
    query: r,
    mode: i,
    tokens: o,
    cursorScope: a,
    autocompletes: W(e, i, o)
  });
  T.set(t, s)
}

function J() {
  return null != I && Q(I)
}

function $() {
  if (null == I) returnfalse;
  if ((0, Chunk607802.R6)(I)) {
    var e;
    let t = (0, Chunk607802.Tm)(I),
      n = T.get(exports);
    if (null == require) returnfalse;
    let {
      type: r,
      filter: i,
      token: o
    } = require.mode, a = null == o || null == (e = o.getFullMatch()) ? true : module.trim(), s = null == Chunk442837 || 0 === Chunk442837.length;
    if (r === Chunk981631.Sap.FILTER && Chunk498607 === Chunk981631.dCx.FILTER_IN && Chunk570140) return Q(I)
  }
  returnfalse
}
class ee extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk271383.ZP, Chunk246946.Z, Chunk592125.Z, Chunk430824.Z, Chunk944486.Z)
  }
  getState(e) {
    var t;
    let n = (0, E.Tm)(e);
    return null != (t = T.get(n)) ? t : w(e)
  }
  getSelectedSearchContext() {
    return I
  }
}
v(ee, "displayName", "SearchAutocompleteStore");
let et = new ee(Chunk570140.Z, {
    SEARCH_AUTOCOMPLETE_QUERY_UPDATE: B,
    SEARCH_EDITOR_STATE_CLEAR: x,
    CHANNEL_CREATE: K,
    CHANNEL_DELETE: K,
    STREAMER_MODE_UPDATE: J,
    SEARCH_SCREEN_OPEN: G,
    CHANNEL_SELECT: $,
    LOGOUT: X,
    SEARCH_HISTORY_WEB_CLEAR_ITEMS: q
  }),
  en = et