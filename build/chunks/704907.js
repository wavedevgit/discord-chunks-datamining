/** Chunk was on web.js **/
/** chunk id: 704907, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./825670.js"), require("./539854.js"), require("./642613.js"), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527);

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
let d = 10,
  f = 32,
  p = (e, t, n) => Math.ceil(e * (t / n.numOfRecentUses)),
  _ = e => {
    let t = 1;
    return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
  };
class m {
  overwriteHistory(e, t) {
    this.usageHistory = i().mapValues(null != e ? e : {}, e => u(l({}, e), {
      frecency: false
    })), null == t || t.forEach(e => {
      let {
        key: t,
        timestamp: n
      } = e;
      return this.track(t, {
        timestamp: n
      })
    }), this.markDirty()
  }
  markDirty() {
    this.dirty = true
  }
  isDirty() {
    return this.dirty
  }
  track(e) {
    let {
      timestamp: t,
      usesSinceLastTrack: n
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    if (null == e) return;
    let r = Object.hasOwn(this.usageHistory, e) ? this.usageHistory[e] : true;
    if (null == r) r = {
      totalUses: null != n ? n : 1,
      recentUses: [null != t ? t : Date.now()],
      frecency: false,
      score: 0
    };
    else
      for (r.frecency = false, r.totalUses += null != n ? n : 1, null == t ? r.recentUses.push(Date.now()) : (r.recentUses.push(t), r.recentUses.sort()); r.recentUses.length > this.maxSamples;) r.recentUses.shift();
    this.usageHistory[e] = r, this.markDirty()
  }
  getEntry(e) {
    return null == e ? null : (this.dirty && this.compute(), Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : true)
  }
  getScore(e) {
    let t = this.getEntry(e);
    return null != t ? t.score : null
  }
  getFrecency(e) {
    let t = this.getEntry(e);
    return null != t ? t.frecency : null
  }
  compute() {
    let e = a()(),
      t = this.calculateMaxTotalUse ? i().maxBy(Object.values(this.usageHistory), e => e.totalUses) : null;
    i().forEach(this.usageHistory, (n, r) => {
      let {
        totalUses: o,
        recentUses: s,
        frecency: l
      } = n;
      if (false !== l) return;
      let c = this.computeBonus(r) / 100;
      n.score = 0, i().forEach(s, (t, r) => {
        if (r >= this.maxSamples) returnfalse;
        let i = this.computeWeight(e.diff(a()(t), "days"));
        n.score += c * i
      }), n.score > 0 ? (n.recentUses.length > 0 && (n.frecency = this.computeFrecency(o, n.score, {
        numOfRecentUses: s.length,
        maxTotalUse: null == t ? true : t.totalUses
      })), this.usageHistory[r] = n) : delete this.usageHistory[r]
    }), this.frequently = i()(this.usageHistory).map((e, t) => {
      let n = this.lookupKey(t);
      return null == n ? null : [n, e.frecency]
    }).filter(e => null !== e).sortBy(e => {
      let [t, n] = e;
      return -n
    }).map(e => {
      let [t] = e;
      return t
    }).take(this.numFrequentlyItems).value(), this.dirty = false, this.afterCompute(this.usageHistory, this._frequently)
  }
  get frequently() {
    return this.dirty && this.compute(), this._frequently
  }
  set frequently(e) {
    this._frequently = e
  }
  constructor({
    computeBonus: e,
    computeWeight: t = _,
    computeFrecency: n = p,
    calculateMaxTotalUse: r = false,
    lookupKey: i,
    afterCompute: o,
    numFrequentlyItems: a = f,
    maxSamples: l = d
  }) {
    s(this, "dirty", true), s(this, "_frequently", true), s(this, "numFrequentlyItems", true), s(this, "maxSamples", true), s(this, "computeBonus", true), s(this, "computeWeight", true), s(this, "computeFrecency", true), s(this, "calculateMaxTotalUse", true), s(this, "lookupKey", true), s(this, "usageHistory", true), s(this, "afterCompute", true), this.computeBonus = e, this.computeWeight = t, this.computeFrecency = n, this.calculateMaxTotalUse = r, this.afterCompute = o, this.lookupKey = i, this.usageHistory = {}, this.frequently = [], this.maxSamples = l, this.numFrequentlyItems = a, this.dirty = false
  }
}
let h = m