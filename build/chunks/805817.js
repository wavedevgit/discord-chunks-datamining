/** Chunk was on web.js **/
/** chunk id: 805817, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk686942 = require("./686942.js"),
  Chunk707908 = require("./707908.js"),
  Chunk747337 = require("./747337.js"),
  Chunk117089 = require("./117089.js"),
  Chunk109766 = require("./109766.js"),
  Chunk68808 = require("./68808.js"),
  Chunk695170 = require("./695170.js");
let u = function() {
  function e(e) {
    this.options = e
  }
  return e.prototype.rebuild = function(e, t) {
    var n = this.options;
    if (e !== this.lastyear && (this.yearinfo = (0, a.h)(e, n)), (0, r.Dw)(n.bynweekday) && (t !== this.lastmonth || e !== this.lastyear)) {
      var i = this.yearinfo,
        l = i.yearlen,
        c = i.mrange,
        u = i.wdaymask;
      this.monthinfo = (0, o.D)(e, t, l, c, u, n)
    }(0, r.EN)(n.byeaster) && (this.eastermask = (0, s.d)(e, n.byeaster))
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
    return [(0, r.w6)(this.yearlen), 0, this.yearlen]
  }, e.prototype.mdayset = function(e, t) {
    for (var n = this.mrange[t - 1], i = this.mrange[t], a = (0, r.rx)(null, this.yearlen), o = n; o < i; o++) a[o] = o;
    return [a, n, i]
  }, e.prototype.wdayset = function(e, t, n) {
    for (var i = (0, r.rx)(null, this.yearlen + 7), a = (0, c.fv)((0, c.t2)(e, t, n)) - this.yearordinal, o = a, s = 0; s < 7 && (i[a] = a, ++a, this.wdaymask[a] !== this.options.wkst); s++);
    return [i, o, a]
  }, e.prototype.ddayset = function(e, t, n) {
    var i = (0, r.rx)(null, this.yearlen),
      a = (0, c.fv)((0, c.t2)(e, t, n)) - this.yearordinal;
    return i[a] = a, [i, a, a + 1]
  }, e.prototype.htimeset = function(e, t, n, r) {
    var i = this,
      a = [];
    return this.options.byminute.forEach(function(t) {
      a = a.concat(i.mtimeset(e, t, n, r))
    }), (0, c.DY)(a), a
  }, e.prototype.mtimeset = function(e, t, n, r) {
    var i = this.options.bysecond.map(function(n) {
      return new l.q(e, t, n, r)
    });
    return (0, c.DY)(i), i
  }, e.prototype.stimeset = function(e, t, n, r) {
    return [new l.q(e, t, n, r)]
  }, e.prototype.getdayset = function(e) {
    switch (e) {
      case i.D.YEARLY:
        return this.ydayset.bind(this);
      case i.D.MONTHLY:
        return this.mdayset.bind(this);
      case i.D.WEEKLY:
        return this.wdayset.bind(this);
      case i.D.DAILY:
      default:
        return this.ddayset.bind(this)
    }
  }, e.prototype.gettimeset = function(e) {
    switch (e) {
      case i.D.HOURLY:
        return this.htimeset.bind(this);
      case i.D.MINUTELY:
        return this.mtimeset.bind(this);
      case i.D.SECONDLY:
        return this.stimeset.bind(this)
    }
  }, e
}()