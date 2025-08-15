/** Chunk was on web.js **/
/** chunk id: 738018, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => q
}), require("./388685.js"), require("./539854.js"), require("./781311.js"), require("./290780.js");
var r, Chunk442837 = require("./442837.js"),
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

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let O = null,
  v = {},
  I = {},
  T = 10,
  S = 3;

function A(e) {
  let t = (0, m.R6)(e),
    n = (0, g.Z)({
      location: "getEmptySearchOptions"
    });
  return new Map([
    [b.dCx.FILTER_FROM, !d.Z.hidePersonalInformation],
    [b.dCx.FILTER_MENTIONS, !d.Z.hidePersonalInformation],
    [b.dCx.FILTER_HAS, true],
    [b.dCx.FILTER_BEFORE, true],
    [b.dCx.FILTER_AFTER, true],
    [b.dCx.FILTER_ON, true],
    [b.dCx.FILTER_IN, t],
    [b.dCx.FILTER_PINNED, true],
    [b.dCx.FILTER_AUTHOR_TYPE, n]
  ])
}

function N(e) {
  let t = [b.dCx.FILTER_HAS];
  return d.Z.hidePersonalInformation || (t.push(b.dCx.FILTER_FROM), t.push(b.dCx.FILTER_MENTIONS)), (0, m.R6)(e) && t.push(b.dCx.FILTER_IN), t
}

function C(e) {
  let {
    searchContext: t,
    query: n,
    mode: r,
    tokens: i,
    cursorScope: a,
    autocompletes: s
  } = e, l = (0, m.Tm)(t), c = I[l];
  return null == c && (c = {
    results: [],
    context: o.Z.getUserSearchContext(P.bind(null, t))
  }, I[l] = c), {
    searchContext: t,
    query: null != n ? n : "",
    mode: null != r ? r : {
      type: b.Sap.EMPTY,
      filter: null,
      token: null
    },
    tokens: null != i ? i : [],
    cursorScope: null != a ? a : null,
    autocompletes: null != s ? s : []
  }
}

function R(e) {
  let {
    id: t
  } = e, n = I[t];
  null != n && (n.context.destroy(), n.results = [], delete I[t]), delete v[t], O = null
}

function P(e, t) {
  let {
    results: n
  } = t, r = (0, m.Tm)(e), i = I[r], a = v[r];
  if (null == i || null == a) return;
  let {
    type: o,
    filter: s
  } = a.mode;
  if (o === b.Sap.EMPTY || o === b.Sap.FILTER && s !== b.dCx.FILTER_FROM && s !== b.dCx.FILTER_MENTIONS) return;
  let l = S;
  a.mode.type === b.Sap.FILTER && (l = T), i.results = w(n, l);
  let {
    query: c,
    mode: u,
    tokens: d,
    cursorScope: f
  } = a, {
    autocompletes: _
  } = a;
  _ = G(e, u, d), v[r] = C({
    searchContext: e,
    query: c,
    mode: u,
    tokens: d,
    cursorScope: f,
    autocompletes: _
  }), z.emitChange()
}

function w(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : T,
    n = [];
  for (let r of e) {
    if (n.length >= t) break;
    let e = f.default.getUser(r.id);
    if (null == e) continue;
    let i = h.ZP.getUserTag(e);
    null != i && n.push({
      text: i,
      user: e
    })
  }
  return n
}

function D(e) {
  let {
    searchContext: t
  } = e;
  O = t, H(t)
}

function L(e) {
  var t;
  let n, {
    searchContext: r,
    tokens: i,
    cursorScope: a
  } = e;
  O = r;
  let o = (0, m.cl)(i),
    s = (0, m.qc)(a, i),
    l = (0, m.Tm)(r),
    c = null != (t = v[l]) ? t : {},
    u = I[l],
    d = true;
  if (o === c.query && (null == c.mode || c.mode.filter === s.filter)) n = c.autocompletes, d = false;
  else if (s.type === b.Sap.EMPTY || s.type === b.Sap.FILTER && s.filter !== b.dCx.FILTER_FROM && s.filter !== b.dCx.FILTER_MENTIONS) null != u && (u.context.clearQuery(), u.results = []), n = G(r, s, i);
  else if (null != u) {
    let {
      token: e
    } = s;
    if (null != e && e.getFullMatch().trim().length > 0) {
      let t = (0, m.s5)(r);
      null != t && p.Z.requestMembers(t, e.getFullMatch().trim(), T), u.context.setQuery({
        query: e.getFullMatch().trim(),
        filters: {
          guild: null != t ? t : true
        }
      }), n = c.autocompletes, d = false
    } else u.context.clearQuery(), n = G(r, s, i)
  }
  return v[l] = C({
    searchContext: r,
    query: o,
    mode: s,
    tokens: i,
    cursorScope: a,
    autocompletes: n
  }), d
}

function x(e) {
  var t, n, r;
  let i, {
    filter: a,
    token: o,
    searchContext: s,
    maxResults: l = T,
    tokens: c
  } = e;
  if (null == a) return null;
  let d = (0, m.Tm)(s),
    p = null != (n = null == o || null == (t = o.getFullMatch()) ? true : t.trim()) ? n : "",
    g = a === b.dCx.FILTER_FROM || a === b.dCx.FILTER_MENTIONS;
  if ((0, m.b7)(s) && g) {
    let e = I[d];
    if (null == e) i = null;
    else {
      if (null == o || 0 === p.length) {
        let t = u.Z.getCurrentlySelectedChannelId(s.guildId);
        e.results = _.ZP.getRecentlyTalked(t, T).map(e => {
          let {
            record: t
          } = e;
          return {
            user: t,
            text: h.ZP.getUserTag(t)
          }
        })
      }
      i = e.results
    }
  } else {
    let e = null == (r = E.ZP[a]) ? true : r.getAutocompletions;
    i = null != e ? e({
      query: p,
      searchContext: s,
      maxResults: null != l ? l : T,
      tokens: c
    }) : []
  }
  if (null != i && g && (0, E.co)(p)) {
    let e = f.default.getCurrentUser();
    null != e && (i = i.filter(t => {
      let {
        user: n
      } = t;
      return (null == n ? true : n.id) !== e.id
    })).unshift({
      text: b.ME,
      user: e
    })
  }
  return null == i || 0 === i.length ? null : {
    group: a,
    results: i
  }
}

function M(e, t) {
  let n = (null != e ? e.getFullMatch() : "").trim(),
    r = A(t),
    i = (0, E.nB)(n).filter(e => null != e.token && true === r.get(e.token));
  return {
    group: b.rtL.SEARCH_OPTIONS,
    results: i
  }
}

function k(e, t, n) {
  let r = (null != e ? e.getFullMatch() : "").trim(),
    i = [];
  return null != r && "" !== r && (N(t).forEach(r => {
    if (null == r) return;
    let a = x({
      filter: r,
      token: e,
      searchContext: t,
      maxResults: S,
      tokens: n
    });
    null != a && i.push(a)
  }), i.push(j(e, t))), 5 > (0, m.BU)(i) && i.push(M(e, t)), i
}

function j(e, t) {
  let n = (null != e ? e.getFullMatch() : "").trim();
  if (null != n && "" !== n) {
    var r, i, a, o, s, l, c, u, d;
    let e = null == (a = E.ZP[b.dCx.FILTER_BEFORE]) || null == (i = a.getAutocompletions) || null == (r = i.call(a, {
        query: n,
        searchContext: t,
        maxResults: 1
      })) ? true : r[0],
      f = null == (l = E.ZP[b.dCx.FILTER_ON]) || null == (s = l.getAutocompletions) || null == (o = s.call(l, {
        query: n,
        searchContext: t,
        maxResults: 1
      })) ? true : o[0],
      _ = null == (d = E.ZP[b.dCx.FILTER_AFTER]) || null == (u = d.getAutocompletions) || null == (c = u.call(d, {
        query: n,
        searchContext: t,
        maxResults: 1
      })) ? true : c[0];
    if (null == e) return null;
    let p = [e];
    return null != f && p.push(f), null != _ && p.push(_), {
      group: b.rtL.DATES,
      results: p
    }
  }
}

function U(e) {
  if (d.Z.hidePersonalInformation) return null;
  {
    let t = n(741995).Z,
      r = (0, m.Tm)(e),
      i = t.getHistory(r);
    return null == i ? null : {
      group: b.rtL.HISTORY,
      results: i.map(e => ({
        text: e
      }))
    }
  }
}

function G(e, t, n) {
  let r = [];
  return t.type === b.Sap.FILTER ? r.push(x({
    filter: t.filter,
    token: t.token,
    searchContext: e,
    maxResults: T,
    tokens: n
  })) : t.type === b.Sap.FILTER_ALL ? r = k(t.token, e, n) : t.type === b.Sap.EMPTY && (r.push(M(t.token, e)), r.push(U(e))), r
}

function B() {
  (0, Chunk607802.WU)()
}

function V(e) {
  let t = v[e];
  if (null == t) return;
  let {
    searchContext: n,
    query: r,
    mode: i,
    tokens: a,
    cursorScope: o,
    autocompletes: s
  } = t;
  v[e] = C({
    searchContext: n,
    query: r,
    mode: i,
    tokens: a,
    cursorScope: o,
    autocompletes: s.map(e => (null == e ? true : e.group) === b.rtL.HISTORY ? null : e)
  })
}

function F(e) {
  let {
    id: t
  } = e;
  V(t)
}

function Z() {
  Object.keys(v).forEach(V)
}

function H(e) {
  let t = (0, m.Tm)(e);
  if (null == v[t]) returnfalse;
  let {
    query: n,
    mode: r,
    tokens: i,
    cursorScope: a
  } = v[t];
  v[t] = C({
    searchContext: e,
    query: n,
    mode: r,
    tokens: i,
    cursorScope: a,
    autocompletes: G(e, r, i)
  })
}

function Y() {
  return null != O && H(O)
}

function W(e) {
  let {
    channelId: t
  } = e;
  if (null == O) returnfalse;
  if (O.type === b.aib.DMS && (0, m.R6)(O)) {
    let e = s.Z.getChannel(t);
    if (null == e || !e.isPrivate()) returnfalse;
    let n = v[(0, m.Tm)(O)];
    if (null == n) returnfalse;
    let {
      type: r,
      filter: i
    } = n.mode;
    return r === b.Sap.FILTER && i === b.dCx.FILTER_IN && H(O)
  }
  returnfalse
}
class K extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk271383.ZP, Chunk246946.Z, Chunk592125.Z, Chunk430824.Z, Chunk944486.Z)
  }
  getState(e) {
    var t;
    return null != (t = v[(0, m.Tm)(e)]) ? t : C({
      searchContext: e
    })
  }
  getSelectedSearchContext() {
    return O
  }
}
y(K, "displayName", "SearchAutocompleteStore");
let z = new K(Chunk570140.Z, {
    SEARCH_AUTOCOMPLETE_QUERY_UPDATE: L,
    SEARCH_EDITOR_STATE_CLEAR: R,
    CHANNEL_CREATE: B,
    CHANNEL_DELETE: B,
    STREAMER_MODE_UPDATE: Y,
    SEARCH_SCREEN_OPEN: D,
    CHANNEL_SELECT: W,
    LOGOUT: Z,
    SEARCH_HISTORY_WEB_CLEAR_ITEMS: F
  }),
  q = z