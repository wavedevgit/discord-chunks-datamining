/** Chunk was on web.js **/
/** chunk id: 542578, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk41776 = require("./41776.js"),
  Chunk222677 = require("./222677.js"),
  Chunk598077 = require("./598077.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js");

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
  n.forEach(e => a.users.set(e.id, new l.Z(e)))
}
class g extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(c.Z, o.Z, u.default)
  }
  getReactions(e, t, n, r, i) {
    let a = p.ensure(t, n, i);
    if (!a.fetched) {
      let l = c.Z.getChannel(e),
        u = null != l ? l.getGuildId() : null;
      if (null != u && o.Z.isLurking(u)) return;
      s.U0({
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
let E = new g(Chunk570140.Z, {
  CONNECTION_OPEN: _,
  MESSAGE_REACTION_ADD: h,
  MESSAGE_REACTION_REMOVE: h,
  MESSAGE_REACTION_ADD_USERS: m
})