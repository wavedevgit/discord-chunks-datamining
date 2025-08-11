/** Chunk was on web.js **/
/** chunk id: 483019, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk846519 = require("./846519.js"),
  Chunk710845 = require("./710845.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = +Chunk70956.Z.Millis.MINUTE;
class d {
  reset() {
    this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe.cancel()
  }
  get(e) {
    var t;
    let n = null != (t = this._subscriptions[e]) ? t : {};
    return l.default.keys(n)
  }
  clear(e) {
    delete this._subscriptions[e], delete this._unsubscriptions[e]
  }
  subscribe(e, t) {
    var n, r;
    let i = null != (n = this._subscriptions[e]) ? n : {};
    i[t] = (null != (r = i[t]) ? r : 0) + 1, this._subscriptions[e] = i, 1 === i[t] && this._onChange(e, this.get(e)), this.checkForLeaks(e, t)
  }
  isSubscribed(e, t) {
    return null != this._subscriptions[e] && null != this._subscriptions[e][t]
  }
  isSubscribedToAnyMember(e) {
    return this.get(e).length > 0
  }
  unsubscribe(e, t) {
    var n, r;
    if (!this.isSubscribed(e, t)) return;
    let i = null != (n = this._unsubscriptions[e]) ? n : {};
    i[t] = (null != (r = i[t]) ? r : 0) + 1, this._unsubscriptions[e] = i, 1 === i[t] && this._unsubscribe.delay(false)
  }
  checkForLeaks(e, t) {
    var n, r, i, o;
    let s = (null != (i = null == (n = this._subscriptions[e]) ? true : n[t]) ? i : 0) - (null != (o = null == (r = this._unsubscriptions[e]) ? true : r[t]) ? o : 0);
    s > 5 && new a.Z("GuildMemberSubscriptions").warn("GuildMemberSubscriptions.subscribe(...): Potential reference leak! (".concat(s, " subscriptions)"))
  }
  flushUnsubscriptions() {
    i().isEmpty(this._unsubscriptions) || (i().forEach(this._unsubscriptions, (e, t) => {
      let n = this._subscriptions[t];
      i().forEach(e, (e, t) => {
        var r;
        n[t] = (null != (r = n[t]) ? r : 0) - e, n[t] <= 0 && delete n[t]
      }), i().isEmpty(n) && delete this._subscriptions[t], this._onChange(t, this.get(t))
    }), this._unsubscriptions = {})
  }
  constructor(e) {
    c(this, "_subscriptions", {}), c(this, "_unsubscriptions", {}), c(this, "_onChange", true), c(this, "_unsubscribe", new o.sW(u, () => this.flushUnsubscriptions())), this._onChange = e
  }
}