/** Chunk was on web.js **/
/** chunk id: 125385, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk451988 = require("./451988.js"),
  Chunk626584 = require("./626584.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = +Chunk927813.A.Millis.MINUTE;
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
    var n, r, i, a;
    let s = (null != (n = null == (i = this._subscriptions[e]) ? true : i[t]) ? n : 0) - (null != (r = null == (a = this._unsubscriptions[e]) ? true : a[t]) ? r : 0);
    s > 5 && new o.A("GuildMemberSubscriptions").warn("GuildMemberSubscriptions.subscribe(...): Potential reference leak! (".concat(s, " subscriptions)"))
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
    c(this, "_subscriptions", {}), c(this, "_unsubscriptions", {}), c(this, "_onChange", true), c(this, "_unsubscribe", new a.J_(u, () => this.flushUnsubscriptions())), this._onChange = e
  }
}