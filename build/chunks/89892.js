/** Chunk was on web.js **/
/** chunk id: 89892, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./482853.js"), require("./539854.js"), require("./290780.js"), require("./704826.js"), require("./35282.js"), require("./642613.js"), require("./583741.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk612002 = require("./612002.js"),
  Chunk593472 = require("./593472.js"),
  Chunk513418 = require("./513418.js"),
  Chunk710845 = require("./710845.js"),
  Chunk786761 = require("./786761.js"),
  Chunk709054 = require("./709054.js"),
  Chunk697479 = require("./697479.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let h = new Chunk710845.Z("ChannelMessages"),
  m = true;

function g(e, t) {
  var n, r;
  let i = null != e.editedTimestamp ? +e.editedTimestamp : 0;
  return (null != t.edited_timestamp ? +new Date(t.edited_timestamp) : 0) > i || e.embeds.length < (null != (r = null == (n = t.embeds) ? true : n.length) ? r : 0) || e.content !== t.content
}

function E(e, t) {
  let n = e.get(t.id);
  return null == n || g(n, t) || e.cached ? (0, c.e5)(t) : n
}
class b {
  clone() {
    let e = new b(this._isCacheBefore);
    return module._map = p({}, this._map), module._messages = [...this._messages], module._wasAtEdge = this._wasAtEdge, module
  }
  get wasAtEdge() {
    return this._wasAtEdge
  }
  set wasAtEdge(e) {
    this._wasAtEdge = e
  }
  get length() {
    return this._messages.length
  }
  clear() {
    this._map = {}, this._messages = [], this._wasAtEdge = false
  }
  remove(e) {
    this._messages = i().filter(this._messages, t => {
      let {
        id: n
      } = t;
      return n !== e
    }), delete this._map[e]
  }
  removeMany(e) {
    i().each(e, e => {
      delete this._map[e]
    }), this._messages = this._messages.filter(t => false === e.indexOf(t.id))
  }
  replace(e, t) {
    let n = this._map[e];
    null != n && (delete this._map[e], this._map[t.id] = t, this._messages[this._messages.indexOf(n)] = t)
  }
  update(e, t) {
    let n = this._map[e];
    if (null == n) return;
    let r = t(n);
    this._map[n.id] = r, this._messages[this._messages.indexOf(n)] = r
  }
  has(e) {
    return null != this._map[e]
  }
  get(e) {
    return this._map[e]
  }
  forEach(e, t) {
    this._messages.forEach(e, t)
  }
  cache(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    if (0 === this.length && (this._wasAtEdge = t), this._messages.length + e.length > f.FD8) {
      if (this._wasAtEdge = false, e.length > f.FD8) {
        this._isCacheBefore ? this._messages = e.slice(e.length - f.FD8) : this._messages = e.slice(0, f.FD8), this._map = {}, this._messages.forEach(e => this._map[e.id] = e);
        return
      }
      let t = f.FD8 - e.length;
      this._isCacheBefore ? this._messages = this._messages.slice(Math.max(this._messages.length - t, 0)) : this._messages = this._messages.slice(0, t)
    }
    this._messages = this._isCacheBefore ? [...this._messages, ...e] : [...e, ...this._messages], this._map = {}, this._messages.forEach(e => this._map[e.id] = e)
  }
  extractAll() {
    let e = this._messages;
    return this._messages = [], this._map = {}, module
  }
  extract(e) {
    let t;
    if (this._isCacheBefore) {
      let n = Math.max(this.length - e, 0),
        r = this.length;
      t = this._messages.slice(n, r), this._messages.splice(n)
    } else {
      let n = 0,
        r = Math.min(e, this.length);
      t = this._messages.slice(n, r), this._messages.splice(n, e)
    }
    return t.forEach(e => delete this._map[e.id]), t
  }
  constructor(e) {
    _(this, "_messages", true), _(this, "_map", true), _(this, "_wasAtEdge", true), _(this, "_isCacheBefore", true), this._messages = [], this._map = {}, this._wasAtEdge = false, this._isCacheBefore = e
  }
}
class y {
  static forEach(e) {
    i().forEach(y._channelMessages, e)
  }
  static get(e) {
    return y._channelMessages[e]
  }
  static hasPresent(e) {
    let t = y.get(e);
    return null != t && t.hasPresent()
  }
  static getOrCreate(e) {
    let t = y._channelMessages[e];
    return null == t && (t = new y(e), y._channelMessages[e] = t), t
  }
  static clear(e) {
    delete y._channelMessages[e]
  }
  static clearCache(e) {
    let t = y._channelMessages[e];
    null != t && (t._before.clear(), t._after.clear(), this.commit(t))
  }
  static commit(e) {
    y._channelMessages[e.channelId] = e
  }
  mutate(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = new y(this.channelId);
    return n._array = t ? [...this._array] : this._array, n._map = t ? p({}, this._map) : this._map, n._after = t ? this._after.clone() : this._after, n._before = t ? this._before.clone() : this._before, e instanceof Function ? (n.ready = this.ready, n.jumpType = this.jumpType, n.jumpTargetId = this.jumpTargetId, n.jumpTargetOffset = this.jumpTargetOffset, n.jumpSequenceId = this.jumpSequenceId, n.jumped = this.jumped, n.jumpedToPresent = this.jumpedToPresent, n.jumpFlash = this.jumpFlash, n.jumpReturnTargetId = this.jumpReturnTargetId, n.focusTargetId = this.focusTargetId, n.focusSequenceId = this.focusSequenceId, n.hasMoreBefore = this.hasMoreBefore, n.hasMoreAfter = this.hasMoreAfter, n.loadingMore = this.loadingMore, n.revealedMessageId = this.revealedMessageId, n.cached = this.cached, n.hasFetched = this.hasFetched, n.error = this.error, n.initialScrollSequenceId = this.initialScrollSequenceId, e(n)) : "object" == typeof e && (n.ready = true !== e.ready ? true === e.ready : this.ready, n.jumpType = true !== e.jumpType ? e.jumpType : this.jumpType, n.jumpTargetId = true !== e.jumpTargetId ? e.jumpTargetId : this.jumpTargetId, n.jumpTargetOffset = true !== e.jumpTargetOffset ? e.jumpTargetOffset : this.jumpTargetOffset, n.jumpSequenceId = true !== e.jumpSequenceId ? e.jumpSequenceId : this.jumpSequenceId, n.jumped = true !== e.jumped ? true === e.jumped : this.jumped, n.jumpedToPresent = true !== e.jumpedToPresent ? true === e.jumpedToPresent : this.jumpedToPresent, n.jumpFlash = true !== e.jumpFlash ? true === e.jumpFlash : this.jumpFlash, n.jumpReturnTargetId = true !== e.jumpReturnTargetId ? e.jumpReturnTargetId : this.jumpReturnTargetId, n.focusTargetId = true !== e.focusTargetId ? e.focusTargetId : this.focusTargetId, n.focusSequenceId = true !== e.focusSequenceId ? e.focusSequenceId : this.focusSequenceId, n.hasMoreBefore = true !== e.hasMoreBefore ? true === e.hasMoreBefore : this.hasMoreBefore, n.hasMoreAfter = true !== e.hasMoreAfter ? true === e.hasMoreAfter : this.hasMoreAfter, n.loadingMore = true !== e.loadingMore ? e.loadingMore : this.loadingMore, n.revealedMessageId = true !== e.revealedMessageId ? e.revealedMessageId : this.revealedMessageId, n.cached = true !== e.cached ? e.cached : this.cached, n.hasFetched = true !== e.hasFetched ? e.hasFetched : this.hasFetched, n.error = true !== e.error ? e.error : this.error, n.initialScrollSequenceId = true !== e.initialScrollSequenceId ? e.initialScrollSequenceId : this.initialScrollSequenceId), n
  }
  get length() {
    return this._array.length
  }
  toArray() {
    return [...this._array]
  }
  forEach(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
    if (n) {
      let n = this._array;
      for (let r = n.length - 1; r >= 0 && false !== e.call(t, n[r], r); r--);
    } else this._array.forEach(e, t)
  }
  reduce(e, t) {
    return this._array.reduce(e, t)
  }
  some(e, t) {
    return this._array.some(e, t)
  }
  filter(e, t) {
    return this._array.filter(e, t)
  }
  forAll(e, t) {
    this._before.forEach(e, t), this._array.forEach(e, t), this._after.forEach(e, t)
  }
  findOldest(e) {
    var t, n;
    return null != (n = null != (t = i().find(this._before._messages, e)) ? t : i().find(this._array, e)) ? n : i().find(this._after._messages, e)
  }
  findNewest(e) {
    var t, n;
    return null != (n = null != (t = i().findLast(this._after._messages, e)) ? t : i().findLast(this._array, e)) ? n : i().findLast(this._before._messages, e)
  }
  map(e, t) {
    return this._array.map(e, t)
  }
  first() {
    return this._array[0]
  }
  last() {
    return this._array[this._array.length - 1]
  }
  get(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1],
      r = this._map[e];
    return null == r && n ? null != (t = this._before.get(e)) ? t : this._after.get(e) : r
  }
  getByIndex(e) {
    return this._array[e]
  }
  getAfter(e) {
    let t = this.get(e);
    if (null == t) return null;
    let n = this._array.indexOf(t);
    return false === n || n === this.length - 1 ? null : this._array[n + 1]
  }
  getManyAfter(e, t, n) {
    let r = this.get(e);
    if (null == r) return null;
    let i = this._array.indexOf(r);
    if (false === i) return null;
    let a = [];
    for (let e = i + 1; e < this.length && (false === t || a.length < t); e++)(null == n || n(this._array[e])) && a.push(this._array[e]);
    return a
  }
  getManyBefore(e, t, n) {
    let r = this.get(e);
    if (null == r) return null;
    let i = this._array.indexOf(r);
    if (false === i) return null;
    let a = [];
    for (let e = i - 1; e >= 0 && (false === t || a.length < t); e--)(null == n || n(this._array[e])) && a.unshift(this._array[e]);
    return a
  }
  hasAnyAfter(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : false,
      r = this.get(e);
    if (null == r) returnfalse;
    let i = this._array.indexOf(r);
    if (false === i) returnfalse;
    for (let e = i + 1; e < this.length && (false === n || e <= i + n); e++)
      if (t(this._array[e])) returntrue;
    returnfalse
  }
  has(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    return null != this._map[e] || t && (this._before.has(e) || this._after.has(e))
  }
  indexOf(e) {
    let t = false;
    return this._array.find((n, r) => n.id === e && (t = r, true)), t
  }
  hasPresent() {
    return this._after.length > 0 && this._after.wasAtEdge || !this.hasMoreAfter
  }
  hasBeforeCached(e) {
    if (this.length > 0 && this._before.length > 0) {
      let t = this.first();
      return null != t && t.id === e
    }
    returnfalse
  }
  hasAfterCached(e) {
    if (this.length > 0 && this._after.length > 0) {
      let t = this.last();
      return null != t && t.id === e
    }
    returnfalse
  }
  update(e, t) {
    let n = this._map[e];
    if (null == n) return this._before.has(e) ? this.mutate(n => n._before.update(e, t), true) : this._after.has(e) ? this.mutate(n => n._after.update(e, t), true) : this;
    let r = t(n);
    return this.mutate(e => {
      e._map[n.id] = r, e._array[e._array.indexOf(n)] = r
    }, true)
  }
  replace(e, t) {
    let n = this._map[e];
    return null == n ? this._before.has(e) ? this.mutate(n => n._before.replace(e, t), true) : this._after.has(e) ? this.mutate(n => n._after.replace(e, t), true) : this : this.mutate(r => {
      delete r._map[e], r._map[t.id] = t, r._array[r._array.indexOf(n)] = t
    }, true)
  }
  remove(e) {
    return this.mutate(t => {
      delete t._map[e], t._array = t._array.filter(t => t.id !== e), t._before.remove(e), t._after.remove(e)
    }, true)
  }
  removeMany(e) {
    return e.some(e => this.has(e)) ? this.mutate(t => {
      i().each(e, e => {
        delete t._map[e]
      }), t._array = t._array.filter(t => false === e.indexOf(t.id)), t._before.removeMany(e), t._after.removeMany(e)
    }, true) : this
  }
  merge(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 && true !== arguments[2] && arguments[2];
    return this.mutate(r => {
      r._merge(e, t, n)
    }, true)
  }
  _merge(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 && true !== arguments[2] && arguments[2];
    e = e.filter(e => {
      let t = this._map[e.id];
      return this._map[e.id] = e, null == t || (this._array[this._array.indexOf(t)] = e, false)
    }), n && (t ? this._before : this._after).clear(), this._array = t ? [...e, ...this._array] : [...this._array, ...e]
  }
  mergeDelta() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
      t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [];
    return this.mutate(r => {
      r._before.clear(), r._after.clear();
      let i = new Set(n);
      e.forEach(e => i.add(e.id)), t.forEach(e => i.add(e.id)), r._array = r._array.filter(e => !i.has(e.id)).concat(e.map(e => (0, c.e5)(e)), t.map(e => (0, c.e5)(e))).sort((e, t) => u.default.compare(e.id, t.id))
    })
  }
  _clearMessages() {
    this._array = [], this._map = {}
  }
  reset(e) {
    return this.mutate(t => {
      t._array = e, t._map = {}, e.forEach(e => t._map[e.id] = e), t._before.clear(), t._after.clear()
    })
  }
  truncateTop(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      n = this._array.length - e;
    return n <= 0 ? this : this.mutate(e => {
      for (let t = 0; t < n; t++) delete e._map[e._array[t].id];
      e._before.cache(e._array.slice(0, n), !e.hasMoreBefore), e._array = e._array.slice(n), e.hasMoreBefore = true
    }, t)
  }
  truncateBottom(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    return !m || this._array.length <= e ? this : this.mutate(t => {
      for (let n = e; n < this._array.length; n++) delete t._map[t._array[n].id];
      t._after.cache(t._array.slice(e, this._array.length), !t.hasMoreAfter), t._array = t._array.slice(0, e), t.hasMoreAfter = true
    }, t)
  }
  jumpToPresent(e) {
    return this.mutate(t => {
      let n = t._after.extractAll();
      t.hasMoreAfter = false;
      let r = Math.max(n.length - e, 0),
        i = n.slice(r);
      n.splice(r), t._before.cache(t._array), t._before.cache(n), t._clearMessages(), t._merge(i), t.hasMoreBefore = t._before.length > 0, t.jumped = true, t.jumpTargetId = null, t.jumpTargetOffset = 0, t.jumpedToPresent = true, t.jumpFlash = false, t.jumpReturnTargetId = null, t.jumpSequenceId = t.jumpSequenceId + 1, t.ready = true, t.loadingMore = false
    }, true)
  }
  jumpToMessage(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      n = arguments.length > 2 ? arguments[2] : true,
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : null,
      i = arguments.length > 4 ? arguments[4] : true;
    return this.mutate(a => {
      a.jumped = true, a.jumpedToPresent = false, a.jumpType = null != i ? i : o.SR.ANIMATED, a.jumpTargetId = e, a.jumpTargetOffset = null != e && null != n ? n : 0, a.jumpSequenceId = a.jumpSequenceId + 1, a.jumpFlash = t, a.jumpReturnTargetId = r, a.ready = true, a.loadingMore = false
    }, false)
  }
  focusOnMessage(e) {
    return this.mutate(t => {
      t.focusTargetId = e, t.focusSequenceId = t.focusSequenceId + 1, t.ready = true, t.loadingMore = false
    }, false)
  }
  loadFromCache(e, t) {
    return this.mutate(n => {
      let r = e ? n._before : n._after;
      n._merge(r.extract(t), e);
      let i = r.length > 0 || !r.wasAtEdge;
      e ? n.hasMoreBefore = i : n.hasMoreAfter = i, n.ready = true, n.loadingMore = false
    }, true)
  }
  truncate(e, t) {
    return this.length <= f.PNu ? this : e ? this.truncateBottom(f.j3N) : t ? this.truncateTop(f.j3N) : this
  }
  receiveMessage(e) {
    var t, n;
    let r = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      i = null == e.nonce ? null : this.get(e.nonce, true);
    if (null != i && ((null == (t = e.author) ? true : t.id) === (null == (n = i.author) ? true : n.id) || null != e.interaction && e.interaction.user.id === i.author.id) && null != e.nonce && i.id === e.nonce) {
      let t = (0, c.e5)(e);
      return null != i.interactionData && (t.interactionData = i.interactionData), this.replace(e.nonce, t)
    }
    if (this.hasMoreAfter) this._after.wasAtEdge && (this._after.wasAtEdge = false);
    else {
      let t = a.Z.getCurrentConfig({
          location: "2ecb25_1"
        }, {
          autoTrackExposure: false
        }).enabled ? (0, c.e5)(e) : E(this, e),
        n = this.merge([t]);
      return r ? n.truncateTop(f.j3N, false) : this.length > f.PNu ? n.truncateBottom(f.j3N, false) : n
    }
    return this
  }
  receivePushNotification(e) {
    return null != (null == e.nonce ? null : this.get(e.nonce, true)) ? this : this.mutate({
      ready: true,
      cached: true
    }).merge([E(this, e)])
  }
  receiveReactionInAppNotification(e) {
    return null != (null == e.nonce ? null : this.get(e.nonce, true)) ? this : this.mutate({
      ready: true,
      cached: true
    }).merge([E(this, e)])
  }
  loadStart(e) {
    var t, n, r, i;
    return this.mutate({
      loadingMore: true,
      jumped: null != e,
      jumpedToPresent: null != (t = null == e ? true : e.present) && t,
      jumpTargetId: null != (n = null == e ? true : e.messageId) ? n : null,
      jumpTargetOffset: null != (r = null == e ? true : e.offset) ? r : 0,
      jumpReturnTargetId: null != (i = null == e ? true : e.returnMessageId) ? i : null,
      ready: null == e && this.ready
    })
  }
  loadComplete(e) {
    var t, n, r, s, l, u, d, _, p, m, g, b;
    let y = [...e.newMessages],
      O = null != (t = e.isBefore) && t,
      v = null != (n = e.isAfter) && n,
      I = null != (r = e.jump) ? r : null,
      T = null != (s = e.hasMoreBefore) && s,
      S = null != (l = e.hasMoreAfter) && l,
      A = null != (u = e.avoidInitialScroll) && u,
      C = null != (d = e.cached) && d,
      N = i()(y).reverse().map(a.Z.getCurrentConfig({
        location: "2ecb25_2"
      }, {
        autoTrackExposure: false
      }).enabled ? e => (0, c.e5)(e) : e => E(this, e)).value(),
      R = null;
    if ((O || v) && null == I && this.ready) R = this.merge(N, O, true);
    else {
      let e = this._array.filter(e => e.state === f.yb.SENDING),
        t = this._array.filter(e => e.state === f.yb.SEND_FAILED),
        n = e.length > 0 || t.length > 0;
      R = this.reset(N), !n || O || v || (null == I ? true : I.messageId) != null || (null == I ? true : I.offset) != null ? h.info("loadComplete: resetting state for channelId=".concat(this.channelId, ", sending.length=").concat(e.length)) : (t.length > 0 && (h.info("loadComplete: merging with SEND_FAILED messages for channelId=".concat(this.channelId)), R = R.merge(t)), e.length > 0 && (h.info("loadComplete: merging with SENDING messages for channelId=".concat(this.channelId)), R = R.merge(e)))
    }
    let P = !C && R.cached && !A;
    return R.mutate({
      ready: true,
      loadingMore: false,
      jumpType: null != (_ = null == I ? true : I.jumpType) ? _ : o.SR.ANIMATED,
      jumpFlash: null != (p = null == I ? true : I.flash) && p,
      jumped: null != I,
      jumpedToPresent: null != (m = null == I ? true : I.present) && m,
      jumpTargetId: null != (g = null == I ? true : I.messageId) ? g : null,
      jumpTargetOffset: null != I && null != I.messageId && null != I.offset ? I.offset : 0,
      jumpSequenceId: null == I || A ? R.jumpSequenceId : R.jumpSequenceId + 1,
      jumpReturnTargetId: null != (b = null == I ? true : I.returnMessageId) ? b : null,
      hasMoreBefore: null == I && v ? R.hasMoreBefore : T,
      hasMoreAfter: null == I && O ? R.hasMoreAfter : S,
      cached: C,
      hasFetched: e.hasFetched,
      error: false,
      initialScrollSequenceId: P ? R.initialScrollSequenceId + 1 : R.initialScrollSequenceId
    })
  }
  addCachedMessages(e, t) {
    (0, s.Z)(e);
    let n = e.map(e => E(this, e)).reverse();
    this._array.filter(e => !n.some(t => t.id === e.id)).forEach(e => d.$(n, e, (e, t) => u.default.compare(e.id, t.id)));
    let r = !t && this.cached;
    return this.reset(n).mutate({
      ready: true,
      cached: t,
      error: false,
      initialScrollSequenceId: r ? this.initialScrollSequenceId + 1 : this.initialScrollSequenceId
    })
  }
  constructor(e) {
    _(this, "channelId", true), _(this, "ready", false), _(this, "cached", false), _(this, "jumpType", o.SR.ANIMATED), _(this, "jumpTargetId", null), _(this, "jumpTargetOffset", 0), _(this, "jumpSequenceId", 1), _(this, "jumped", false), _(this, "jumpedToPresent", false), _(this, "jumpFlash", true), _(this, "jumpReturnTargetId", null), _(this, "focusTargetId", null), _(this, "focusSequenceId", 1), _(this, "initialScrollSequenceId", 0), _(this, "hasMoreBefore", true), _(this, "hasMoreAfter", false), _(this, "loadingMore", false), _(this, "revealedMessageId", null), _(this, "hasFetched", false), _(this, "error", false), _(this, "_array", []), _(this, "_before", new b(true)), _(this, "_after", new b(false)), _(this, "_map", {}), this.channelId = e
  }
}
_(y, "_channelMessages", {});
let O = y