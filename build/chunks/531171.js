/** Chunk was on web.js **/
/** chunk id: 531171, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => d
});
var Chunk139232 = require("./139232.js"),
  Chunk812975 = require("./812975.js"),
  Chunk695170 = require("./695170.js"),
  Chunk686942 = require("./686942.js"),
  Chunk809111 = require("./809111.js"),
  Chunk805802 = require("./805802.js"),
  Chunk981196 = require("./981196.js");

function u(e) {
  var t = this;
  return function(n) {
    if (true !== n && (t["_".concat(e)] = n), true !== t["_".concat(e)]) return t["_".concat(e)];
    for (var r = 0; r < t._rrule.length; r++) {
      var i = t._rrule[r].origOptions[e];
      if (i) return i
    }
  }
}
var d = function(e) {
  function t(t) {
    true === t && (t = false);
    var n = e.call(this, {}, t) || this;
    return n.dtstart = u.apply(n, ["dtstart"]), n.tzid = u.apply(n, ["tzid"]), n._rrule = [], n._rdate = [], n._exrule = [], n._exdate = [], n
  }
  return (0, r.ZT)(t, e), t.prototype._iter = function(e) {
    return (0, s.X)(e, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid())
  }, t.prototype.rrule = function(e) {
    f(e, this._rrule)
  }, t.prototype.exrule = function(e) {
    f(e, this._exrule)
  }, t.prototype.rdate = function(e) {
    p(e, this._rdate)
  }, t.prototype.exdate = function(e) {
    p(e, this._exdate)
  }, t.prototype.rrules = function() {
    return this._rrule.map(function(e) {
      return (0, l.S)(e.toString())
    })
  }, t.prototype.exrules = function() {
    return this._exrule.map(function(e) {
      return (0, l.S)(e.toString())
    })
  }, t.prototype.rdates = function() {
    return this._rdate.map(function(e) {
      return new Date(e.getTime())
    })
  }, t.prototype.exdates = function() {
    return this._exdate.map(function(e) {
      return new Date(e.getTime())
    })
  }, t.prototype.valueOf = function() {
    var e = [];
    return !this._rrule.length && this._dtstart && (e = e.concat((0, c.N)({
      dtstart: this._dtstart
    }))), this._rrule.forEach(function(t) {
      e = e.concat(t.toString().split("\n"))
    }), this._exrule.forEach(function(t) {
      e = e.concat(t.toString().split("\n").map(function(e) {
        return e.replace(/^RRULE:/, "EXRULE:")
      }).filter(function(e) {
        return !/^DTSTART/.test(e)
      }))
    }), this._rdate.length && e.push(_("RDATE", this._rdate, this.tzid())), this._exdate.length && e.push(_("EXDATE", this._exdate, this.tzid())), e
  }, t.prototype.toString = function() {
    return this.valueOf().join("\n")
  }, t.prototype.clone = function() {
    var e = new t(!!this._cache);
    return this._rrule.forEach(function(t) {
      return e.rrule(t.clone())
    }), this._exrule.forEach(function(t) {
      return e.exrule(t.clone())
    }), this._rdate.forEach(function(t) {
      return e.rdate(new Date(t.getTime()))
    }), this._exdate.forEach(function(t) {
      return e.exdate(new Date(t.getTime()))
    }), e
  }, t
}(Chunk812975.Ci);

function f(e, t) {
  if (!(e instanceof i.Ci)) throw TypeError(String(e) + " is not RRule instance");
  (0, o.q9)(t.map(String), String(e)) || t.push(e)
}

function p(e, t) {
  if (!(e instanceof Date)) throw TypeError(String(e) + " is not Date instance");
  (0, o.q9)(t.map(Number), Number(e)) || (t.push(e), (0, a.DY)(t))
}

function _(e, t, n) {
  var r = !n || "UTC" === n.toUpperCase(),
    i = r ? "".concat(e, ":") : "".concat(e, ";TZID=").concat(n, ":"),
    o = t.map(function(e) {
      return (0, a.Od)(e.valueOf(), r)
    }).join(",");
  return "".concat(i).concat(o)
}