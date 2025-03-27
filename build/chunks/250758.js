/** Chunk was on 52272 **/
n.d(t, {
  Z: () => w
}), n(653041), n(566702), n(757143), n(301563), n(733860);
var r, i, a, o = n(442837),
  l = n(570140),
  s = n(999650),
  c = n(279779),
  u = n(483360),
  d = n(892880),
  p = n(405656),
  m = n(51144),
  f = n(271383),
  h = n(768119),
  g = n(246946),
  _ = n(594174),
  b = n(981631),
  v = n(388032);
let x = {},
  y = {};

function E(e) {
  let {
    searchId: t,
    query: n,
    mode: r,
    tokens: i,
    cursorScope: a,
    autocompletes: o
  } = e, l = y[t];
  return null == l && (l = {
    results: [],
    context: c.Z.getSearchContext(O.bind(null, t))
  }, y[t] = l), {
    query: null != n ? n : "",
    mode: null != r ? r : {
      type: b.Sap.EMPTY,
      filter: null,
      token: null
    },
    tokens: null != i ? i : [],
    cursorScope: null != a ? a : null,
    autocompletes: null != o ? o : []
  }
}

function O(e, t) {
  let {
    results: n
  } = t, r = y[e], i = x[e];
  if (null == r || null == i) return;
  let {
    type: a,
    filter: o
  } = i.mode;
  if (a === b.Sap.EMPTY || a === b.Sap.FILTER && o !== b.dCx.FILTER_FROM && o !== b.dCx.FILTER_MENTIONS) return;
  let l = 3;
  i.mode.type === b.Sap.FILTER && (l = 10), r.results = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
    return (e = e.reduce((e, t) => {
      let n = _.default.getUser(t.id);
      return null == n || e.push({
        id: n.id,
        text: m.ZP.getUserTag(n),
        user: n
      }), e
    }, [])).length > t && (e.length = t), e
  }(n, l);
  let {
    query: s,
    mode: c,
    tokens: u,
    cursorScope: d
  } = i, {
    autocompletes: p
  } = i;
  p = C(e, c), x[e] = E({
    searchId: e,
    query: s,
    mode: c,
    tokens: u,
    cursorScope: d,
    autocompletes: p
  }), A.emitChange()
}

function N(e, t, n) {
  var r, i, a;
  let o, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
  if (null == e || "" === e) return null;
  let c = h.Z.getSearchType(n),
    d = null !== (i = null == t ? void 0 : null === (r = t.getFullMatch()) || void 0 === r ? void 0 : r.trim()) && void 0 !== i ? i : "",
    p = e === b.dCx.FILTER_FROM || e === b.dCx.FILTER_MENTIONS;
  if (c === b.aib.GUILD && p) {
    let e = y[n];
    null == e ? o = null : ((null == t || 0 === d.length) && (e.results = u.ZP.getRecentlyTalked(n, 10).map(e => {
      let {
        record: t
      } = e;
      return {
        user: t,
        text: m.ZP.getUserTag(t)
      }
    })), o = e.results)
  } else {
    let t = null === (a = s.ZP[e]) || void 0 === a ? void 0 : a.getAutocompletions;
    o = null != t ? t(d, n, null != l ? l : 10) : []
  }
  let f = d.toLowerCase().replace(/^@/, "");
  if (null != o && p && d.length > 0 && (v.NW.string(v.t.Qf3ptr).startsWith(f) || b.ME.substr(1).startsWith(f))) {
    let e = _.default.getCurrentUser();
    null != e && (o = o.filter(t => {
      let {
        user: n
      } = t;
      return n.id !== e.id
    })).unshift({
      text: b.ME,
      user: e
    })
  }
  return null == o || 0 === o.length ? null : {
    group: e,
    results: o
  }
}

function j(e) {
  let t = (null != e ? e.getFullMatch() : "").trim(),
    n = {
      [b.dCx.FILTER_FROM]: !g.Z.hidePersonalInformation,
      [b.dCx.FILTER_MENTIONS]: !g.Z.hidePersonalInformation,
      [b.dCx.FILTER_HAS]: !0,
      [b.dCx.FILTER_BEFORE]: !0,
      [b.dCx.FILTER_AFTER]: !0,
      [b.dCx.FILTER_ON]: !0,
      [b.dCx.FILTER_IN]: h.Z.getSearchType() === b.aib.GUILD,
      [b.dCx.FILTER_PINNED]: !0
    },
    r = (0, s.nB)(t).filter(e => n[e.token]);
  return {
    group: b.rtL.SEARCH_OPTIONS,
    results: r
  }
}

function C(e, t) {
  let n = [];
  return t.type === b.Sap.FILTER ? n.push(N(t.filter, t.token, e, 10)) : t.type === b.Sap.FILTER_ALL ? n = function(e, t) {
    let n = (null != e ? e.getFullMatch() : "").trim(),
      r = [];
    return null != n && "" !== n && ((function(e) {
      let t = h.Z.getSearchType(e),
        n = [b.dCx.FILTER_HAS];
      return g.Z.hidePersonalInformation || (n.push(b.dCx.FILTER_FROM), n.push(b.dCx.FILTER_MENTIONS)), t === b.aib.GUILD && n.push(b.dCx.FILTER_IN), n
    })(t).forEach(n => {
      if (null == n) return;
      let i = N(n, e, t, 3);
      null != i && r.push(i)
    }), r.push(function(e, t) {
      let n = (null != e ? e.getFullMatch() : "").trim();
      if (null != n && "" !== n) {
        var r, i, a;
        let e = null === (r = s.ZP[b.dCx.FILTER_BEFORE]) || void 0 === r ? void 0 : r.getAutocompletions(n, t, 1)[0],
          o = null === (i = s.ZP[b.dCx.FILTER_ON]) || void 0 === i ? void 0 : i.getAutocompletions(n, t, 1)[0],
          l = null === (a = s.ZP[b.dCx.FILTER_AFTER]) || void 0 === a ? void 0 : a.getAutocompletions(n, t, 1)[0];
        return null == e ? null : {
          group: b.rtL.DATES,
          results: [e, o, l]
        }
      }
    }(e, t))), 5 > (0, p.BU)(r) && r.push(j(e)), r
  }(t.token, e) : t.type === b.Sap.EMPTY && (n.push(j(t.token)), n.push(function(e) {
    if (g.Z.hidePersonalInformation) return null;
    let t = h.Z.getHistory(e);
    return null == t ? null : {
      group: b.rtL.HISTORY,
      results: t.map(e => ({
        text: e
      }))
    }
  }(e))), n
}

function I() {
  (0, p.WU)()
}

function S(e) {
  let t = x[e];
  if (null == t) return;
  let {
    query: n,
    mode: r,
    tokens: i,
    cursorScope: a,
    autocompletes: o
  } = t;
  x[e] = E({
    searchId: e,
    query: n,
    mode: r,
    tokens: i,
    cursorScope: a,
    autocompletes: o.map(e => (null == e ? void 0 : e.group) === b.rtL.HISTORY ? null : e)
  })
}

function T() {
  let e = h.Z.getCurrentSearchId();
  if (null == e || null == x[e]) return;
  let {
    query: t,
    mode: n,
    tokens: r,
    cursorScope: i
  } = x[e];
  x[e] = E({
    searchId: e,
    query: t,
    mode: n,
    tokens: r,
    cursorScope: i,
    autocompletes: C(e, n)
  })
}
class P extends(r = o.ZP.Store) {
  initialize() {
    this.waitFor(f.ZP, g.Z)
  }
  getState(e) {
    var t;
    return null !== (t = x[e]) && void 0 !== t ? t : E({
      searchId: e
    })
  }
}
a = "SearchAutocompleteStore", (i = "displayName") in P ? Object.defineProperty(P, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : P[i] = a;
let A = new P(l.Z, {
    SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function(e) {
      var t;
      let n, {
          searchId: r,
          tokens: i,
          cursorScope: a
        } = e,
        o = (0, p.cl)(i),
        l = (0, p.qc)(a, i),
        s = null !== (t = x[r]) && void 0 !== t ? t : {},
        c = y[r],
        u = !0;
      if (o === s.query && (null == s.mode || s.mode.filter === l.filter)) n = s.autocompletes, u = !1;
      else if (l.type === b.Sap.EMPTY || l.type === b.Sap.FILTER && l.filter !== b.dCx.FILTER_FROM && l.filter !== b.dCx.FILTER_MENTIONS) null != c && (c.context.clearQuery(), c.results = []), n = C(r, l);
      else if (null != c) {
        let {
          token: e
        } = l;
        null != e && e.getFullMatch().trim().length > 0 ? (d.Z.requestMembers(r, e.getFullMatch().trim(), 10), c.context.setQuery(e.getFullMatch().trim(), {
          guild: r
        }), n = s.autocompletes, u = !1) : (c.context.clearQuery(), n = C(r, l))
      }
      return x[r] = E({
        searchId: r,
        query: o,
        mode: l,
        tokens: i,
        cursorScope: a,
        autocompletes: n
      }), u
    },
    SEARCH_EDITOR_STATE_CLEAR: function(e) {
      let {
        searchId: t
      } = e, n = y[t];
      null != n && (n.context.destroy(), n.results = [], delete y[t]), delete x[t]
    },
    CHANNEL_CREATE: I,
    CHANNEL_DELETE: I,
    STREAMER_MODE_UPDATE: T,
    SEARCH_SCREEN_OPEN: T,
    SEARCH_CLEAR_HISTORY: function(e) {
      let {
        searchId: t
      } = e;
      null != t ? S(t) : Object.keys(x).forEach(S)
    },
    LOGOUT: function() {
      Object.keys(x).forEach(S)
    }
  }),
  w = A