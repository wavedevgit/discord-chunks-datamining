/** Chunk was on web.js **/
/** chunk id: 624453, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => E,
  Z: () => D
}), require("./388685.js"), require("./290780.js");
var r, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk247206 = require("./247206.js"),
  Chunk786761 = require("./786761.js"),
  Chunk706454 = require("./706454.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var E = function(e) {
  return e.LOADING = "LOADING", e.LOADED_HAS_MORE = "LOADED_HAS_MORE", e.LOADED_FINISHED = "LOADING_FINISHED", e.FAILED = "FAILED", e
}({});
let b = {};

function y() {
  b = {}
}

function O(e) {
  var t, n;
  let {
    channelId: r,
    reset: i
  } = e;
  if (!i && null != b[r]) {
    b[r].state = "LOADING";
    return
  }
  let o = null != (n = null == (t = d.Z.getChannel(r)) ? true : t.getGuildId()) ? n : true;
  b[r] = {
    id: r,
    items: [],
    state: "LOADING",
    guildId: o
  }
}

function v(e) {
  let {
    channelId: t,
    pins: n,
    hasMore: r
  } = e, i = b[t];
  if (null == i) returnfalse;
  let o = n.map(e => {
    let {
      pinned_at: t,
      message: n
    } = e;
    return {
      pinnedAt: new Date(Date.parse(t)),
      message: (0, c.e5)(n)
    }
  });
  i.items = [...i.items, ...o], i.state = r ? "LOADED_HAS_MORE" : "LOADING_FINISHED"
}

function I(e) {
  let {
    channelId: t
  } = e, n = b[t];
  if (null == n) returnfalse;
  n.state = "FAILED"
}

function T(e) {
  let {
    channel: t
  } = e;
  delete b[t.id]
}

function S(e) {
  let {
    guild: t
  } = e;
  b = o()(b).filter(e => e.guildId !== t.id).keyBy("id").value()
}

function A(e) {
  let {
    id: t,
    channelId: n
  } = e, r = b[n];
  if (null == r || 0 === o().remove(r.items, e => {
      let {
        message: n
      } = e;
      return n.id === t
    }).length) returnfalse;
  r.items = r.items.slice(), b[n] = r
}

function N(e) {
  let {
    ids: t,
    channelId: n
  } = e, r = b[n];
  if (null == r) returnfalse;
  r.items = r.items.filter(e => {
    let {
      message: n
    } = e;
    return !t.includes(n.id)
  })
}

function C(e) {
  let t = e.message.id,
    n = e.message.channel_id;
  if (null == n) returnfalse;
  let r = b[n];
  if (null == r) returnfalse;
  if (null == e.message.author) {
    let i = o().findIndex(r.items, e => {
      let {
        message: n
      } = e;
      return n.id === t
    });
    if (false === i) return;
    let {
      pinnedAt: a,
      message: s
    } = r.items[i], l = (0, c.wi)(s, e.message);
    if (l !== s) {
      let e = r.items.slice();
      e[i] = {
        pinnedAt: a,
        message: l
      }, b[n].items = e
    }
    return
  }
  if (e.message.pinned) {
    r.items = r.items.slice();
    let n = o().findIndex(r.items, e => {
      let {
        message: n
      } = e;
      return n.id === t
    });
    false === n ? r.items.unshift({
      message: (0, c.e5)(e.message),
      pinnedAt: new Date
    }) : r.items[n].message = (0, c.wi)(r.items[n].message, e.message);
    return
  }
  let i = o().findIndex(r.items, e => {
    let {
      message: n
    } = e;
    return n.id === t
  });
  if (false === i) returnfalse;
  r.items = r.items.slice(), r.items.splice(i, 1)
}

function R() {
  o().forEach(b, e => {
    e.items.forEach(e => {
      let {
        message: t
      } = e;
      t.set("blocked", h.Z.isBlockedForMessage(t)), t.set("ignored", h.Z.isIgnoredForMessage(t))
    }), e.items = e.items.slice()
  })
}

function P(e) {
  let {
    messageId: t,
    channelId: n
  } = e, r = b[n];
  if (null == r) returnfalse;
  let i = o().findIndex(r.items, e => {
    let {
      message: n
    } = e;
    return n.id === t
  });
  if (false === i) returnfalse;
  r.items = r.items.slice(), r.items[i].message = (0, l.Cm)(r.items[i].message)
}
class w extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk430824.Z, Chunk271383.ZP, Chunk375954.Z, Chunk594174.default, Chunk706454.default)
  }
  getPins(e) {
    return b[e]
  }
}
g(w, "displayName", "ChannelPinsStore");
let D = new w(Chunk570140.Z, {
  CONNECTION_OPEN: y,
  LOAD_PINNED_MESSAGES: O,
  LOAD_PINNED_MESSAGES_SUCCESS: v,
  LOAD_PINNED_MESSAGES_FAILURE: I,
  CHANNEL_DELETE: T,
  THREAD_DELETE: T,
  GUILD_DELETE: S,
  MESSAGE_DELETE: A,
  MESSAGE_DELETE_BULK: N,
  MESSAGE_UPDATE: C,
  RELATIONSHIP_ADD: R,
  RELATIONSHIP_REMOVE: R,
  RELATIONSHIP_UPDATE: R,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: P
})