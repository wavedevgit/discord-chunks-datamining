/** Chunk was on web.js **/
/** chunk id: 904514, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk391898 = require("./391898.js"),
  Chunk114922 = require("./114922.js"),
  Chunk531857 = require("./531857.js"),
  Chunk985307 = require("./985307.js"),
  Chunk586538 = require("./586538.js"),
  Chunk327854 = require("./327854.js"),
  Chunk222367 = require("./222367.js");
let u = function() {
  function e(e) {
    this.options = e
  }
  return e.prototype.rebuild = function(e, t) {
    var n = this.options;
    if (e !== this.lastyear && (this.yearinfo = (0, a.N)(e, n)), (0, r.z2)(n.bynweekday) && (t !== this.lastmonth || e !== this.lastyear)) {
      var i = this.yearinfo,
        l = i.yearlen,
        c = i.mrange,
        u = i.wdaymask;
      this.monthinfo = (0, o.W)(e, t, l, c, u, n)
    }(0, r.Wo)(n.byeaster) && (this.eastermask = (0, s.H)(e, n.byeaster))
  }, Object.defineProperty(e.prototype, "lastyear", {
    get: function() {
      return this.monthinfo ? this.monthinfo.lastyear : null
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "lastmonth", {
    get: function() {
      return this.monthinfo ? this.monthinfo.lastmonth : null
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "yearlen", {
    get: function() {
      return this.yearinfo.yearlen
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "yearordinal", {
    get: function() {
      return this.yearinfo.yearordinal
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "mrange", {
    get: function() {
      return this.yearinfo.mrange
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "wdaymask", {
    get: function() {
      return this.yearinfo.wdaymask
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "mmask", {
    get: function() {
      return this.yearinfo.mmask
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "wnomask", {
    get: function() {
      return this.yearinfo.wnomask
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "nwdaymask", {
    get: function() {
      return this.monthinfo ? this.monthinfo.nwdaymask : []
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "nextyearlen", {
    get: function() {
      return this.yearinfo.nextyearlen
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "mdaymask", {
    get: function() {
      return this.yearinfo.mdaymask
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(e.prototype, "nmdaymask", {
    get: function() {
      return this.yearinfo.nmdaymask
    },
    enumerable: false,
    configurable: true
  }), e.prototype.ydayset = function() {
    return [(0, r.y1)(this.yearlen), 0, this.yearlen]
  }, e.prototype.mdayset = function(e, t) {
    for (var n = this.mrange[t - 1], i = this.mrange[t], a = (0, r.ux)(null, this.yearlen), o = n; o < i; o++) a[o] = o;
    return [a, n, i]
  }, e.prototype.wdayset = function(e, t, n) {
    for (var i = (0, r.ux)(null, this.yearlen + 7), a = (0, c.ZO)((0, c.w$)(e, t, n)) - this.yearordinal, o = a, s = 0; s < 7 && (i[a] = a, ++a, this.wdaymask[a] !== this.options.wkst); s++);
    return [i, o, a]
  }, e.prototype.ddayset = function(e, t, n) {
    var i = (0, r.ux)(null, this.yearlen),
      a = (0, c.ZO)((0, c.w$)(e, t, n)) - this.yearordinal;
    return i[a] = a, [i, a, a + 1]
  }, e.prototype.htimeset = function(e, t, n, r) {
    var i = this,
      a = [];
    return this.options.byminute.forEach(function(t) {
      a = a.concat(i.mtimeset(e, t, n, r))
    }), (0, c.di)(a), a
  }, e.prototype.mtimeset = function(e, t, n, r) {
    var i = this.options.bysecond.map(function(n) {
      return new l.g(e, t, n, r)
    });
    return (0, c.di)(i), i
  }, e.prototype.stimeset = function(e, t, n, r) {
    return [new l.g(e, t, n, r)]
  }, e.prototype.getdayset = function(e) {
    switch (e) {
      case i.j.YEARLY:
        return this.ydayset.bind(this);
      case i.j.MONTHLY:
        return this.mdayset.bind(this);
      case i.j.WEEKLY:
        return this.wdayset.bind(this);
      case i.j.DAILY:
      default:
        return this.ddayset.bind(this)
    }
  }, e.prototype.gettimeset = function(e) {
    switch (e) {
      case i.j.HOURLY:
        return this.htimeset.bind(this);
      case i.j.MINUTELY:
        return this.mtimeset.bind(this);
      case i.j.SECONDLY:
        return this.stimeset.bind(this)
    }
  }, e
}()