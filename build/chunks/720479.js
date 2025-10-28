/** Chunk was on 33622 **/
/** chunk id: 720479, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  AQ: () => p,
  aw: () => c,
  oz: () => f,
  qp: () => D
});
var Chunk580608 = require("./580608.js"),
  Chunk533426 = require("./533426.js"),
  Chunk333684 = require("./333684.js"),
  Chunk274738 = require("./274738.js"),
  Chunk640475 = require("./640475.js"),
  Chunk375339 = require("./375339.js");

function s(e) {
  let a, t = "object" == typeof e[0] ? e.shift() : new(0, i.IQ);
  if ("string" == typeof e[0]) a = e.shift();
  else {
    let e = t.getEras();
    a = e[e.length - 1]
  }
  return [t, a, e.shift(), e.shift(), e.shift()]
}
var d = new WeakMap;
class c {
  copy() {
    return this.era ? new c(this.calendar, this.era, this.year, this.month, this.day) : new c(this.calendar, this.year, this.month, this.day)
  }
  add(e) {
    return (0, u.IH)(this, e)
  }
  subtract(e) {
    return (0, u.$X)(this, e)
  }
  set(e) {
    return (0, u.t8)(this, e)
  }
  cycle(e, a, t) {
    return (0, u.GK)(this, e, a, t)
  }
  toDate(e) {
    return (0, o.ZU)(this, e)
  }
  toString() {
    return (0, Chunk333684.UW)(this)
  }
  compare(e) {
    return (0, n.rm)(this, e)
  }
  constructor(...e) {
    (0, l._)(this, d, {
      writable: true,
      value: true
    });
    let [a, t, n, r, i] = s(e);
    this.calendar = a, this.era = t, this.year = n, this.month = r, this.day = i, (0, u.jH)(this)
  }
}
var m = new WeakMap;
class D {
  copy() {
    return new D(this.hour, this.minute, this.second, this.millisecond)
  }
  add(e) {
    return (0, u.yG)(this, e)
  }
  subtract(e) {
    return (0, u.U2)(this, e)
  }
  set(e) {
    return (0, u.q_)(this, e)
  }
  cycle(e, a, t) {
    return (0, u.xC)(this, e, a, t)
  }
  toString() {
    return (0, Chunk333684.to)(this)
  }
  compare(e) {
    return (0, n.Xi)(this, e)
  }
  constructor(e = 0, a = 0, t = 0, n = 0) {
    (0, l._)(this, m, {
      writable: true,
      value: true
    }), this.hour = e, this.minute = a, this.second = t, this.millisecond = n, (0, u.dW)(this)
  }
}
var h = new WeakMap;
class f {
  copy() {
    return this.era ? new f(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new f(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond)
  }
  add(e) {
    return (0, u.IH)(this, e)
  }
  subtract(e) {
    return (0, u.$X)(this, e)
  }
  set(e) {
    return (0, u.t8)((0, u.q_)(this, e), e)
  }
  cycle(e, a, t) {
    switch (e) {
      case "era":
      case "year":
      case "month":
      case "day":
        return (0, u.GK)(this, e, a, t);
      default:
        return (0, u.xC)(this, e, a, t)
    }
  }
  toDate(e, a) {
    return (0, o.ZU)(this, e, a)
  }
  toString() {
    return (0, Chunk333684.LM)(this)
  }
  compare(e) {
    let a = (0, n.rm)(this, e);
    return 0 === a ? (0, n.Xi)(this, (0, o.IO)(e)) : a
  }
  constructor(...e) {
    (0, l._)(this, h, {
      writable: true,
      value: true
    });
    let [a, t, n, r, i] = s(e);
    this.calendar = a, this.era = t, this.year = n, this.month = r, this.day = i, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, (0, u.jH)(this)
  }
}
var y = new WeakMap;
class p {
  copy() {
    return this.era ? new p(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new p(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond)
  }
  add(e) {
    return (0, u.cW)(this, e)
  }
  subtract(e) {
    return (0, u.Co)(this, e)
  }
  set(e, a) {
    return (0, u.wC)(this, e, a)
  }
  cycle(e, a, t) {
    return (0, u.qr)(this, e, a, t)
  }
  toDate() {
    return (0, Chunk640475.fk)(this)
  }
  toString() {
    return (0, Chunk333684.Rf)(this)
  }
  toAbsoluteString() {
    return this.toDate().toISOString()
  }
  compare(e) {
    return this.toDate().getTime() - (0, o.fW)(e, this.timeZone).toDate().getTime()
  }
  constructor(...e) {
    (0, l._)(this, y, {
      writable: true,
      value: true
    });
    let [a, t, n, r, i] = s(e), o = e.shift(), d = e.shift();
    this.calendar = a, this.era = t, this.year = n, this.month = r, this.day = i, this.timeZone = o, this.offset = d, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, (0, u.jH)(this)
  }
}