/** Chunk was on web.js **/
/** chunk id: 99478, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ip: () => g,
  _l: () => h,
  gX: () => p,
  ng: () => d
});
var Chunk440491 = require("./440491.js"),
  Chunk352404 = require("./352404.js"),
  Chunk928231 = require("./928231.js"),
  Chunk142922 = require("./142922.js"),
  Chunk376472 = require("./376472.js"),
  Chunk170372 = require("./170372.js");

function c(e) {
  let t, n = "object" == typeof e[0] ? e.shift() : new(0, s.FG);
  if ("string" == typeof e[0]) t = e.shift();
  else {
    let e = n.getEras();
    t = e[e.length - 1]
  }
  return [n, t, e.shift(), e.shift(), e.shift()]
}
var u = new WeakMap;
class d {
  copy() {
    return this.era ? new d(this.calendar, this.era, this.year, this.month, this.day) : new d(this.calendar, this.year, this.month, this.day)
  }
  add(e) {
    return (0, r.WQ)(this, e)
  }
  subtract(e) {
    return (0, r.Re)(this, e)
  }
  set(e) {
    return (0, r.hZ)(this, e)
  }
  cycle(e, t, n) {
    return (0, r.xy)(this, e, t, n)
  }
  toDate(e) {
    return (0, o.ay)(this, e)
  }
  toString() {
    return (0, a.$T)(this)
  }
  compare(e) {
    return (0, i.SE)(this, e)
  }
  constructor(...e) {
    (0, l._)(this, u, {
      writable: true,
      value: true
    });
    let [t, n, i, a, s] = c(e);
    this.calendar = t, this.era = n, this.year = i, this.month = a, this.day = s, (0, r.AU)(this)
  }
}
var f = new WeakMap;
class p {
  copy() {
    return new p(this.hour, this.minute, this.second, this.millisecond)
  }
  add(e) {
    return (0, r.tY)(this, e)
  }
  subtract(e) {
    return (0, r.YP)(this, e)
  }
  set(e) {
    return (0, r.ib)(this, e)
  }
  cycle(e, t, n) {
    return (0, r.gt)(this, e, t, n)
  }
  toString() {
    return (0, a.ot)(this)
  }
  compare(e) {
    return (0, i.Nu)(this, e)
  }
  constructor(e = 0, t = 0, n = 0, i = 0) {
    (0, l._)(this, f, {
      writable: true,
      value: true
    }), this.hour = e, this.minute = t, this.second = n, this.millisecond = i, (0, r.Rb)(this)
  }
}
var _ = new WeakMap;
class h {
  copy() {
    return this.era ? new h(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new h(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond)
  }
  add(e) {
    return (0, r.WQ)(this, e)
  }
  subtract(e) {
    return (0, r.Re)(this, e)
  }
  set(e) {
    return (0, r.hZ)((0, r.ib)(this, e), e)
  }
  cycle(e, t, n) {
    switch (e) {
      case "era":
      case "year":
      case "month":
      case "day":
        return (0, r.xy)(this, e, t, n);
      default:
        return (0, r.gt)(this, e, t, n)
    }
  }
  toDate(e, t) {
    return (0, o.ay)(this, e, t)
  }
  toString() {
    return (0, a.qk)(this)
  }
  compare(e) {
    let t = (0, i.SE)(this, e);
    return 0 === t ? (0, i.Nu)(this, (0, o.tR)(e)) : t
  }
  constructor(...e) {
    (0, l._)(this, _, {
      writable: true,
      value: true
    });
    let [t, n, i, a, s] = c(e);
    this.calendar = t, this.era = n, this.year = i, this.month = a, this.day = s, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, (0, r.AU)(this)
  }
}
var m = new WeakMap;
class g {
  copy() {
    return this.era ? new g(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new g(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond)
  }
  add(e) {
    return (0, r.E0)(this, e)
  }
  subtract(e) {
    return (0, r.d_)(this, e)
  }
  set(e, t) {
    return (0, r.D8)(this, e, t)
  }
  cycle(e, t, n) {
    return (0, r.XH)(this, e, t, n)
  }
  toDate() {
    return (0, o.cd)(this)
  }
  toString() {
    return (0, a.e6)(this)
  }
  toAbsoluteString() {
    return this.toDate().toISOString()
  }
  compare(e) {
    return this.toDate().getTime() - (0, o.uB)(e, this.timeZone).toDate().getTime()
  }
  constructor(...e) {
    (0, l._)(this, m, {
      writable: true,
      value: true
    });
    let [t, n, i, a, s] = c(e), o = e.shift(), u = e.shift();
    this.calendar = t, this.era = n, this.year = i, this.month = a, this.day = s, this.timeZone = o, this.offset = u, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, (0, r.AU)(this)
  }
}