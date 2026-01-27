/** Chunk was on web.js **/
/** chunk id: 956703, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk857071 = require("./857071.js"),
  Chunk649963 = require("./649963.js"),
  Chunk427157 = require("./427157.js"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = {};
class p {
  static ensure(e, t, n) {
    var r, i;
    let a = "".concat(e, ":").concat(t.name, ":").concat(null != (r = t.id) ? r : "", ":").concat(n);
    return f[a] = null != (i = f[a]) ? i : new p
  }
  constructor() {
    d(this, "users", true), d(this, "fetched", true), this.fetched = false, this.users = new Map
  }
}

function _() {
  f = {}
}

function h(e) {
  let {
    type: t,
    messageId: n,
    userId: r,
    emoji: i,
    reactionType: a
  } = e, o = p.ensure(n, i, a);
  if ("MESSAGE_REACTION_ADD" === t) {
    let e = u.default.getUser(r);
    null != e && o.users.set(r, e)
  } else o.users.delete(r)
}

function m(e) {
  let {
    messageId: t,
    users: n,
    emoji: r,
    reactionType: i
  } = e, a = p.ensure(t, r, i);
  n.forEach(e => a.users.set(e.id, new l.A(e)))
}
class g extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A, o.A, u.default)
  }
  getReactions(e, t, n, r, i) {
    let a = p.ensure(t, n, i);
    if (!a.fetched) {
      let l = c.A.getChannel(e),
        u = null != l ? l.getGuildId() : null;
      if (null != u && o.A.isLurking(u)) return;
      s.ao({
        channelId: e,
        messageId: t,
        emoji: n,
        limit: r,
        type: i
      }), a.fetched = true
    }
    return a.users
  }
}
d(g, "displayName", "MessageReactionsStore");
let E = new g(Chunk73153.h, {
  CONNECTION_OPEN: _,
  MESSAGE_REACTION_ADD: h,
  MESSAGE_REACTION_REMOVE: h,
  MESSAGE_REACTION_ADD_USERS: m
})