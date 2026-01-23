/** Chunk was on web.js **/
/** chunk id: 517381, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => x
}), require("./896048.js"), require("./321073.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk141468 = require("./141468.js"),
  Chunk815807 = require("./815807.js"),
  Chunk961350 = require("./961350.js"),
  Chunk994500 = require("./994500.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f {
  handleSearchStart() {
    this.isFetching = true, this.isIndexing = false, this.analyticsId = null, this.error = null
  }
  handleSearchIndexing() {
    this.isInitialFetchComplete = true, this.isIndexing = true, this.isHistoricalIndexing = true, this.isFetching = false, this.error = null
  }
  handleSearchFailure(e) {
    this.isFetching = false, this.isIndexing = false, this.isInitialFetchComplete = true, this.isHistoricalIndexing = false, this.error = new s.LG(e), this.analyticsId = null, this.documentsIndexed = 0
  }
  handleSearchSuccess(e, t) {
    var n;
    let {
      analyticsId: r,
      cursor: i,
      totalResults: a,
      doingHistoricalIndex: s,
      documentsIndexed: o
    } = e;
    this.analyticsId = r, this.isFetching = false, this.isIndexing = false, this.isInitialFetchComplete = true, this.isHistoricalIndexing = s, this.error = null, this.documentsIndexed = o, this.cursor = i;
    let l = [...null != (n = this.messages) ? n : []],
      c = [];
    return t.forEach(e => {
      this.messageIds.has(e.id) || (this.messageIds.add(e.id), l.push(e), c.push(e))
    }), this.messages = l, this.totalResults = a, c
  }
  constructor() {
    d(this, "isIndexing", false), d(this, "isHistoricalIndexing", false), d(this, "isFetching", false), d(this, "analyticsId", null), d(this, "error", null), d(this, "messages", null), d(this, "documentsIndexed", 0), d(this, "totalResults", null), d(this, "messageIds", new Set), d(this, "isInitialFetchComplete", false), d(this, "cursor", null)
  }
}
let p = new Map,
  _ = new Map,
  h = new Map;

function m(e) {
  var t;
  return null != (t = p.get(e)) ? t : new f
}

function g(e) {
  let t = m(e);
  return p.set(e, t), t
}

function E(e, t) {
  let n = _.get(e);
  if (null == n) returnfalse;
  let r = t(n);
  return _.set(e, r), true
}

function y(e, t) {
  return t(m(e))
}

function b() {
  p = new Map, _ = new Map, h = new Map
}

function O(e) {
  e.ids.forEach(e => {
    g(e).handleSearchStart()
  })
}

function v(e) {
  e.data.forEach(e => {
    let t = g(e.id),
      n = e.messages.map(e => {
        let [t] = e;
        return (0, o.rh)(t)
      });
    t.handleSearchSuccess(e, n).forEach(e => {
      var t;
      _.set(e.id, e);
      let n = null != (t = h.get(e.id)) ? t : 0;
      h.set(e.id, n + 1)
    })
  })
}

function A(e) {
  let t = e.message.id;
  if (null == t) returnfalse;
  let n = _.get(t);
  if (null == n) returnfalse;
  let r = (0, o.IU)(n, e.message);
  _.set(t, r)
}

function I(e) {
  let {
    type: t,
    messageId: n,
    userId: r,
    emoji: i
  } = e;
  if (!(0, l.vp)(e)) returnfalse;
  let a = c.default.getId() === r;
  return E(n, n => {
    let {
      reactionType: r
    } = e;
    return "MESSAGE_REACTION_ADD" === t ? n.addReaction(i, a, e.colors, r) : n.removeReaction(i, a, r)
  })
}

function S(e) {
  let {
    messageId: t,
    reactions: n
  } = e, r = c.default.getId();
  return E(t, e => e.addReactionBatch(n, r))
}

function T(e) {
  let {
    messageId: t
  } = e;
  return E(t, e => e.set("reactions", []))
}

function C(e) {
  let {
    messageId: t,
    emoji: n
  } = e;
  return E(t, e => e.removeReactionsForEmoji(n))
}

function N(e) {
  e.ids.forEach(e => {
    g(e).handleSearchIndexing()
  })
}

function R(e) {
  e.ids.forEach(t => {
    g(t).handleSearchFailure(e.error)
  })
}

function w(e) {
  let t = p.get(e.id);
  if (null == t) returnfalse;
  t.messageIds.forEach(e => {
    var t;
    let n = null != (t = h.get(e)) ? t : 0;
    n <= 1 ? (_.delete(e), h.delete(e)) : h.set(e, n - 1)
  }), p.delete(e.id)
}

function P(e) {
  p = new Map, _ = new Map, h = new Map
}
class D extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.default, u.A)
  }
  getMessage(e) {
    return _.get(e)
  }
  getTotalCount(e) {
    return y(e, e => e.totalResults)
  }
  getIsInitialFetchComplete(e) {
    return y(e, e => e.isInitialFetchComplete)
  }
  getIsIndexing(e) {
    return y(e, e => e.isIndexing)
  }
  getIsHistoricalIndexing(e) {
    return y(e, e => e.isHistoricalIndexing)
  }
  getDocumentsIndexed(e) {
    return y(e, e => e.documentsIndexed)
  }
  getIsFetching(e) {
    return y(e, e => e.isFetching)
  }
  getError(e) {
    return y(e, e => e.error)
  }
  getMessages(e) {
    return y(e, e => e.messages)
  }
  getCursor(e) {
    return y(e, e => e.cursor)
  }
  getAnalyticsId(e) {
    return y(e, e => e.analyticsId)
  }
  hasSearchState(e) {
    return p.has(e)
  }
}
d(D, "displayName", "SearchMessageStore");
let x = new D(Chunk73153.h, {
  SEARCH_MESSAGES_START: O,
  SEARCH_MESSAGES_SUCCESS: v,
  SEARCH_MESSAGES_INDEXING: N,
  SEARCH_MESSAGES_FAILURE: R,
  SEARCH_MESSAGES_CLEAR: w,
  SEARCH_MESSAGES_CLEAR_ALL: P,
  MESSAGE_UPDATE: A,
  MESSAGE_REACTION_ADD: I,
  MESSAGE_REACTION_ADD_MANY: S,
  MESSAGE_REACTION_REMOVE: I,
  MESSAGE_REACTION_REMOVE_ALL: T,
  MESSAGE_REACTION_REMOVE_EMOJI: C,
  CONNECTION_OPEN: b
})