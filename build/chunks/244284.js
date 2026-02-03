/** Chunk was on web.js **/
/** chunk id: 244284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QU: () => d,
  kX: () => u
});
var Chunk988506 = require("./988506.js"),
  Chunk315069 = require("./315069.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = Object.freeze({
  0: Chunk988506.ob.SUNDAY,
  1: Chunk988506.ob.MONDAY,
  2: Chunk988506.ob.TUESDAY,
  3: Chunk988506.ob.WEDNESDAY,
  4: Chunk988506.ob.THURSDAY,
  5: Chunk988506.ob.FRIDAY,
  6: Chunk988506.ob.SATURDAY
});

function s(e) {
  return 60 * e.hours + e.minutes
}

function l(e) {
  return e === r.ob.MONDAY ? r.ob.SUNDAY : e - 1
}
class c extends Chunk315069.A {
  static fromServer(e) {
    var t, n;
    return new c({
      ruleId: e.rule_id,
      label: e.label,
      startTime: null != (t = e.start_time) ? t : true,
      endTime: null != (n = e.end_time) ? n : true,
      days: e.days
    })
  }
  static fromCache(e) {
    return new c(e)
  }
  isActiveAt(e, t) {
    if (null == this.startTime || null == this.endTime || 0 === this.days.length) returnfalse;
    let n = s(this.startTime),
      r = s(this.endTime),
      i = n > r;
    if (this.days.includes(e)) {
      if (i) {
        if (t >= n) returntrue
      } else if (t >= n && t < r) returntrue
    }
    if (i) {
      let n = l(e);
      if (this.days.includes(n) && t < r) returntrue
    }
    returnfalse
  }
  constructor(e) {
    super(), a(this, "ruleId", true), a(this, "label", true), a(this, "startTime", true), a(this, "endTime", true), a(this, "days", true), this.ruleId = e.ruleId, this.label = e.label, this.startTime = e.startTime, this.endTime = e.endTime, this.days = e.days
  }
}
class u extends Chunk315069.A {
  static fromServer(e) {
    return null == e ? null : new u({
      rules: e.rules.map(c.fromServer)
    })
  }
  static fromCache(e) {
    return null == e ? null : new u({
      rules: e.rules.map(c.fromCache)
    })
  }
  isInRestrictedHours() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : new Date;
    if (0 === this.rules.length) returnfalse;
    let t = o[e.getDay()],
      n = 60 * e.getHours() + e.getMinutes();
    return this.rules.some(e => e.isActiveAt(t, n))
  }
  constructor(e) {
    super(), a(this, "rules", true), this.rules = e.rules
  }
}

function d(e) {
  return null == e ? null : e instanceof u ? e : 0 === e.rules.length ? new u({
    rules: []
  }) : "ruleId" in e.rules[0] ? u.fromCache(e) : u.fromServer(e)
}