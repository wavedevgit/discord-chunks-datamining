/** Chunk was on web.js **/
/** chunk id: 208970, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = {};

function f(e) {
  let t = o.Z.getChannel(e);
  return null != t && !!t.isForumLikeChannel()
}

function _(e) {
  var t;
  let n = null != (t = d[e]) ? t : {
    query: null,
    loading: false,
    results: null
  };
  return d[e] = n, n
}

function p(e) {
  let {
    channelId: t,
    query: n
  } = e;
  if (!f(t)) returnfalse;
  let r = _(t);
  d[t] = u(l({}, r), {
    query: n
  })
}

function h(e) {
  let {
    channelId: t
  } = e;
  if (!f(t)) returnfalse;
  let n = _(t);
  d[t] = u(l({}, n), {
    loading: true
  })
}

function m(e) {
  let {
    channelId: t,
    threadIds: n
  } = e;
  if (!f(t)) returnfalse;
  let r = _(t);
  d[t] = u(l({}, r), {
    loading: false,
    results: n
  })
}

function g(e) {
  let {
    channelId: t
  } = e;
  if (!f(t)) returnfalse;
  let n = _(t);
  d[t] = u(l({}, n), {
    loading: false,
    results: []
  })
}

function E(e) {
  let {
    channelId: t
  } = e;
  return !!f(t) && delete d[t]
}

function b(e) {
  var t;
  let {
    channel: n
  } = e, r = n.parent_id;
  if (null == r) returnfalse;
  let i = d[r];
  if (null == i) returnfalse;
  d[r] = u(l({}, i), {
    results: null == (t = i.results) ? true : t.filter(e => n.id !== e)
  })
}

function y(e) {
  let {
    channel: t
  } = e;
  return delete d[t.id]
}

function O() {
  d = {}
}
class v extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z)
  }
  getSearchQuery(e) {
    let t = d[e];
    return null == t ? true : t.query
  }
  getSearchLoading(e) {
    var t;
    let n = d[e];
    return null != (t = null == n ? true : n.loading) && t
  }
  getSearchResults(e) {
    let t = d[e];
    return null == t ? true : t.results
  }
  getHasSearchResults(e) {
    let t = d[e];
    return (null == t ? true : t.results) != null && t.results.length > 0
  }
}
s(v, "displayName", "ForumSearchStore");
let I = new v(Chunk570140.Z, {
  CONNECTION_OPEN: O,
  THREAD_DELETE: b,
  CHANNEL_DELETE: y,
  FORUM_SEARCH_QUERY_UPDATED: p,
  FORUM_SEARCH_START: h,
  FORUM_SEARCH_SUCCESS: m,
  FORUM_SEARCH_FAILURE: g,
  FORUM_SEARCH_CLEAR: E
})