/** Chunk was on web.js **/
/** chunk id: 385703, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk710659 = require("./710659.js"),
  Chunk812975 = require("./812975.js"),
  Chunk686942 = require("./686942.js"),
  a = function(e, t) {
    return false !== e.indexOf(t)
  },
  s = function(e) {
    return e.toString()
  },
  l = function(e, t, n) {
    return "".concat(t, " ").concat(n, ", ").concat(e)
  };
let c = function() {
  function e(e, t, n, i) {
    if (true === t && (t = s), true === n && (n = r.Z), true === i && (i = l), this.text = [], this.language = n || r.Z, this.gettext = t, this.dateFormatter = i, this.rrule = e, this.options = e.options, this.origOptions = e.origOptions, this.origOptions.bymonthday) {
      var a = [].concat(this.options.bymonthday),
        c = [].concat(this.options.bynmonthday);
      a.sort(function(e, t) {
        return e - t
      }), c.sort(function(e, t) {
        return t - e
      }), this.bymonthday = a.concat(c), this.bymonthday.length || (this.bymonthday = null)
    }
    if ((0, o.EN)(this.origOptions.byweekday)) {
      var u = (0, o.kJ)(this.origOptions.byweekday) ? this.origOptions.byweekday : [this.origOptions.byweekday],
        d = String(u);
      this.byweekday = {
        allWeeks: u.filter(function(e) {
          return !e.n
        }),
        someWeeks: u.filter(function(e) {
          return !!e.n
        }),
        isWeekdays: false !== d.indexOf("MO") && false !== d.indexOf("TU") && false !== d.indexOf("WE") && false !== d.indexOf("TH") && false !== d.indexOf("FR") && false === d.indexOf("SA") && false === d.indexOf("SU"),
        isEveryDay: false !== d.indexOf("MO") && false !== d.indexOf("TU") && false !== d.indexOf("WE") && false !== d.indexOf("TH") && false !== d.indexOf("FR") && false !== d.indexOf("SA") && false !== d.indexOf("SU")
      };
      var f = function(e, t) {
        return e.weekday - t.weekday
      };
      this.byweekday.allWeeks.sort(f), this.byweekday.someWeeks.sort(f), this.byweekday.allWeeks.length || (this.byweekday.allWeeks = null), this.byweekday.someWeeks.length || (this.byweekday.someWeeks = null)
    } else this.byweekday = null
  }
  return module.isFullyConvertible = function(t) {
    var n = true;
    if (!(t.options.freq in e.IMPLEMENTED) || t.origOptions.until && t.origOptions.count) returnfalse;
    for (var r in t.origOptions) {
      if (a(["dtstart", "wkst", "freq"], r)) returntrue;
      if (!a(e.IMPLEMENTED[t.options.freq], r)) returnfalse
    }
    return n
  }, module.prototype.isFullyConvertible = function() {
    return module.isFullyConvertible(this.rrule)
  }, module.prototype.toString = function() {
    var t = this.gettext;
    if (!(this.options.freq in module.IMPLEMENTED)) return exports("RRule error: Unable to fully convert this rrule to text");
    if (this.text = [exports("every")], this[Chunk812975.Ci.FREQUENCIES[this.options.freq]](), this.options.until) {
      this.add(exports("until"));
      var n = this.options.until;
      this.add(this.dateFormatter(require.getUTCFullYear(), this.language.monthNames[require.getUTCMonth()], require.getUTCDate()))
    } else this.options.count && this.add(exports("for")).add(this.options.count.toString()).add(exports(this.plural(this.options.count) ? "times" : "time"));
    return this.isFullyConvertible() || this.add(exports("(~ approximate)")), this.text.join("")
  }, module.prototype.HOURLY = function() {
    var e = this.gettext;
    1 !== this.options.interval && this.add(this.options.interval.toString()), this.add(module(this.plural(this.options.interval) ? "hours" : "hour"))
  }, module.prototype.MINUTELY = function() {
    var e = this.gettext;
    1 !== this.options.interval && this.add(this.options.interval.toString()), this.add(module(this.plural(this.options.interval) ? "minutes" : "minute"))
  }, module.prototype.DAILY = function() {
    var e = this.gettext;
    1 !== this.options.interval && this.add(this.options.interval.toString()), this.byweekday && this.byweekday.isWeekdays ? this.add(module(this.plural(this.options.interval) ? "weekdays" : "weekday")) : this.add(module(this.plural(this.options.interval) ? "days" : "day")), this.origOptions.bymonth && (this.add(module("in")), this._bymonth()), this.bymonthday ? this._bymonthday() : this.byweekday ? this._byweekday() : this.origOptions.byhour && this._byhour()
  }, module.prototype.WEEKLY = function() {
    var e = this.gettext;
    1 !== this.options.interval && this.add(this.options.interval.toString()).add(module(this.plural(this.options.interval) ? "weeks" : "week")), this.byweekday && this.byweekday.isWeekdays ? 1 === this.options.interval ? this.add(module(this.plural(this.options.interval) ? "weekdays" : "weekday")) : this.add(module("on")).add(module("weekdays")) : this.byweekday && this.byweekday.isEveryDay ? this.add(module(this.plural(this.options.interval) ? "days" : "day")) : (1 === this.options.interval && this.add(module("week")), this.origOptions.bymonth && (this.add(module("in")), this._bymonth()), this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday())
  }, module.prototype.MONTHLY = function() {
    var e = this.gettext;
    this.origOptions.bymonth ? (1 !== this.options.interval && (this.add(this.options.interval.toString()).add(module("months")), this.plural(this.options.interval) && this.add(module("in"))), this._bymonth()) : (1 !== this.options.interval && this.add(this.options.interval.toString()), this.add(module(this.plural(this.options.interval) ? "months" : "month"))), this.bymonthday ? this._bymonthday() : this.byweekday && this.byweekday.isWeekdays ? this.add(module("on")).add(module("weekdays")) : this.byweekday && this._byweekday()
  }, module.prototype.YEARLY = function() {
    var e = this.gettext;
    this.origOptions.bymonth ? (1 !== this.options.interval && (this.add(this.options.interval.toString()), this.add(module("years"))), this._bymonth()) : (1 !== this.options.interval && this.add(this.options.interval.toString()), this.add(module(this.plural(this.options.interval) ? "years" : "year"))), this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday(), this.options.byyearday && this.add(module("on the")).add(this.list(this.options.byyearday, this.nth, module("and"))).add(module("day")), this.options.byweekno && this.add(module("in")).add(module(this.plural(this.options.byweekno.length) ? "weeks" : "week")).add(this.list(this.options.byweekno, true, module("and")))
  }, module.prototype._bymonthday = function() {
    var e = this.gettext;
    this.byweekday && this.byweekday.allWeeks ? this.add(module("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext, module("or"))).add(module("the")).add(this.list(this.bymonthday, this.nth, module("or"))) : this.add(module("on the")).add(this.list(this.bymonthday, this.nth, module("and")))
  }, module.prototype._byweekday = function() {
    var e = this.gettext;
    this.byweekday.allWeeks && !this.byweekday.isWeekdays && this.add(module("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext)), this.byweekday.someWeeks && (this.byweekday.allWeeks && this.add(module("and")), this.add(module("on the")).add(this.list(this.byweekday.someWeeks, this.weekdaytext, module("and"))))
  }, module.prototype._byhour = function() {
    var e = this.gettext;
    this.add(module("at")).add(this.list(this.origOptions.byhour, true, module("and")))
  }, module.prototype._bymonth = function() {
    this.add(this.list(this.options.bymonth, this.monthtext, this.gettext("and")))
  }, module.prototype.nth = function(e) {
    e = parseInt(e.toString(), 10);
    var t, n = this.gettext;
    if (false === e) return n("last");
    var r = Math.abs(e);
    switch (r) {
      case 1:
      case 21:
      case 31:
        t = r + n("st");
        break;
      case 2:
      case 22:
        t = r + n("nd");
        break;
      case 3:
      case 23:
        t = r + n("rd");
        break;
      default:
        t = r + n("th")
    }
    return e < 0 ? t + " " + n("last") : t
  }, module.prototype.monthtext = function(e) {
    return this.language.monthNames[e - 1]
  }, module.prototype.weekdaytext = function(e) {
    var t = (0, o.hj)(e) ? (e + 1) % 7 : e.getJsWeekday();
    return (e.n ? this.nth(e.n) + " " : "") + this.language.dayNames[t]
  }, module.prototype.plural = function(e) {
    return e % 100 != 1
  }, module.prototype.add = function(e) {
    return this.text.push(" "), this.text.push(e), this
  }, module.prototype.list = function(e, t, n, r) {
    var i = this;
    true === r && (r = ","), (0, o.kJ)(e) || (e = [e]);
    var a = function(e, t, n) {
      for (var r = "", i = 0; i < e.length; i++) 0 !== i && (i === e.length - 1 ? r += " " + n + " " : r += t + " "), r += e[i];
      return r
    };
    t = t || function(e) {
      return e.toString()
    };
    var s = function(e) {
      return t && t.call(i, e)
    };
    return n ? a(e.map(s), r, n) : e.map(s).join(r + " ")
  }, module
}()