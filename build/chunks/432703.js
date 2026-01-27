/** Chunk was on web.js **/
/** chunk id: 432703, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => p,
  LD: () => o.LD
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk451988 = require("./451988.js"),
  Chunk36124 = require("./36124.js"),
  Chunk125385 = require("./125385.js"),
  Chunk818307 = require("./818307.js"),
  Chunk652215 = require("./652215.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e) {
  return null != e && "null" !== e && e !== c.ME && "undefined" !== e && e !== c.YYv
}
class p {
  _enqueue(e, t) {
    this._pending[e] = d({}, this._pending[e], t), this._flush.delay()
  }
  reset() {
    this._subscribed.clear(), this._pending = {}, this._members.reset(), this._memberUpdates.clear(), this._channels.reset(), this._threadMemberLists.reset(), this._typing.clear(), this._threads.clear(), this._activities.clear()
  }
  get(e) {
    return {
      typing: this._typing.has(e),
      threads: this._threads.has(e),
      activities: this._activities.has(e),
      members: this._members.get(e),
      member_updates: this._memberUpdates.has(e),
      channels: this._channels.get(e),
      thread_member_lists: this._threadMemberLists.get(e)
    }
  }
  getSubscribedThreadIds() {
    return this._threadMemberLists.getSubscribedThreadIds()
  }
  isSubscribedToThreads(e) {
    return this._threads.has(e)
  }
  isSubscribedToAnyMember(e) {
    var t;
    return null != (t = this._members.isSubscribedToAnyMember(e)) && t
  }
  isSubscribedToMemberUpdates(e) {
    var t;
    return null != (t = this.get(e).member_updates) && t
  }
  forEach(e) {
    this._subscribed.forEach(e)
  }
  clearWithoutFlushing(e, t) {
    (t || !this._threads.has(e)) && this._subscribed.delete(e), delete this._pending[e], this._members.clear(e), this._channels.clear(e), this._threadMemberLists.clear(e), this._typing.delete(e), this._memberUpdates.delete(e), t && this._threads.delete(e), this._activities.delete(e)
  }
  flush() {
    i().forEach(this._pending, (e, t) => {
      this._subscribed.add(t)
    }), this._onChange(this._pending), this._pending = {}
  }
  subscribeUser(e, t) {
    f(e) && this._members.subscribe(e, t)
  }
  unsubscribeUser(e, t) {
    f(e) && this._members.unsubscribe(e, t)
  }
  subscribeChannel(e, t, n) {
    return !!f(e) && this._channels.subscribe(e, t, n)
  }
  subscribeToMemberUpdates(e) {
    if (!f(e)) returnfalse;
    this._enqueue(e, {
      member_updates: true
    }), this._memberUpdates.add(e)
  }
  unsubscribeFromMemberUpdates(e) {
    if (!f(e)) returnfalse;
    this._enqueue(e, {
      member_updates: false
    })
  }
  subscribeThreadMemberList(e, t, n) {
    return !!f(e) && this._threadMemberLists.subscribe(e, t, n)
  }
  unsubscribeThreadMemberList(e, t) {
    return !!f(e) && this._threadMemberLists.unsubscribe(e, t)
  }
  subscribeToGuild(e) {
    this._subscribeToFeature(e, this._typing, {
      typing: true
    }), this._subscribeToFeature(e, this._activities, {
      activities: true
    }), this._subscribeToFeature(e, this._threads, {
      threads: true
    })
  }
  _subscribeToFeature(e, t, n) {
    !f(e) || t.has(e) || (t.add(e), this._enqueue(e, n))
  }
  constructor(e) {
    u(this, "_members", new s.A((e, t) => this._enqueue(e, {
      members: t
    }))), u(this, "_channels", new o.Ay((e, t) => this._enqueue(e, {
      channels: t
    }))), u(this, "_threadMemberLists", new l.A((e, t) => this._enqueue(e, {
      thread_member_lists: t
    }))), u(this, "_typing", new Set), u(this, "_threads", new Set), u(this, "_activities", new Set), u(this, "_memberUpdates", new Set), u(this, "_subscribed", new Set), u(this, "_pending", {}), u(this, "_flush", new a.J_(0, () => this.flush())), u(this, "_onChange", true), this._onChange = e
  }
}