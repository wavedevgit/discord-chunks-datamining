/** Chunk was on web.js **/
/** chunk id: 162848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk710659 = require("./710659.js"),
  Chunk812975 = require("./812975.js"),
  a = function() {
    function e(e) {
      this.done = true, this.rules = e
    }
    return module.prototype.start = function(e) {
      return this.text = e, this.done = false, this.nextSymbol()
    }, module.prototype.isDone = function() {
      return this.done && null === this.symbol
    }, module.prototype.nextSymbol = function() {
      this.symbol = null, this.value = null;
      do {
        if (this.done) returnfalse;
        var e, t, n = true;
        for (var r in e = null, this.rules) {
          var i = (n = this.rules[Chunk710659]).exec(this.text);
          Chunk812975 && (null === module || Chunk812975[0].length > module[0].length) && (e = Chunk812975, t = Chunk710659)
        }
        if (null != module && (this.text = this.text.substr(module[0].length), "" === this.text && (this.done = true)), null == module) {
          this.done = true, this.symbol = null, this.value = null;
          return
        }
      } while ("SKIP" === exports);
      return this.symbol = exports, this.value = module, true
    }, module.prototype.accept = function(e) {
      if (this.symbol === e) {
        if (this.value) {
          var t = this.value;
          return this.nextSymbol(), t
        }
        return this.nextSymbol(), true
      }
      returnfalse
    }, module.prototype.acceptNumber = function() {
      return this.accept("number")
    }, module.prototype.expect = function(e) {
      if (this.accept(e)) returntrue;
      throw Error("expected " + e + " but found " + this.symbol)
    }, module
  }();

function o(e, t) {
  true === t && (t = r.Z);
  var n = {},
    o = new a(t.tokens);
  if (!o.start(e)) return null;
  return s(), n;

  function s() {
    o.expect("every");
    var e = o.acceptNumber();
    if (e && (n.interval = parseInt(e[0], 10)), o.isDone()) throw Error("Unexpected end");
    switch (o.symbol) {
      case "day(s)":
        n.freq = i.Ci.DAILY, o.nextSymbol() && (c(), _());
        break;
      case "weekday(s)":
        n.freq = i.Ci.WEEKLY, n.byweekday = [i.Ci.MO, i.Ci.TU, i.Ci.WE, i.Ci.TH, i.Ci.FR], o.nextSymbol(), _();
        break;
      case "week(s)":
        n.freq = i.Ci.WEEKLY, o.nextSymbol() && (l(), _());
        break;
      case "hour(s)":
        n.freq = i.Ci.HOURLY, o.nextSymbol() && (l(), _());
        break;
      case "minute(s)":
        n.freq = i.Ci.MINUTELY, o.nextSymbol() && (l(), _());
        break;
      case "month(s)":
        n.freq = i.Ci.MONTHLY, o.nextSymbol() && (l(), _());
        break;
      case "year(s)":
        n.freq = i.Ci.YEARLY, o.nextSymbol() && (l(), _());
        break;
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
      case "saturday":
      case "sunday":
        n.freq = i.Ci.WEEKLY;
        var t = o.symbol.substr(0, 2).toUpperCase();
        if (n.byweekday = [i.Ci[t]], !o.nextSymbol()) return;
        for (; o.accept("comma");) {
          if (o.isDone()) throw Error("Unexpected end");
          var r = d();
          if (!r) throw Error("Unexpected symbol " + o.symbol + ", expected weekday");
          n.byweekday.push(i.Ci[r]), o.nextSymbol()
        }
        p(), _();
        break;
      case "january":
      case "february":
      case "march":
      case "april":
      case "may":
      case "june":
      case "july":
      case "august":
      case "september":
      case "october":
      case "november":
      case "december":
        if (n.freq = i.Ci.YEARLY, n.bymonth = [u()], !o.nextSymbol()) return;
        for (; o.accept("comma");) {
          if (o.isDone()) throw Error("Unexpected end");
          var a = u();
          if (!a) throw Error("Unexpected symbol " + o.symbol + ", expected month");
          n.bymonth.push(a), o.nextSymbol()
        }
        l(), _();
        break;
      default:
        throw Error("Unknown symbol")
    }
  }

  function l() {
    var e = o.accept("on"),
      t = o.accept("the");
    if (e || t)
      do {
        var r = f(),
          a = d(),
          s = u();
        if (r) a ? (o.nextSymbol(), n.byweekday || (n.byweekday = []), n.byweekday.push(i.Ci[a].nth(r))) : (n.bymonthday || (n.bymonthday = []), n.bymonthday.push(r), o.accept("day(s)"));
        else if (a) o.nextSymbol(), n.byweekday || (n.byweekday = []), n.byweekday.push(i.Ci[a]);
        else if ("weekday(s)" === o.symbol) o.nextSymbol(), n.byweekday || (n.byweekday = [i.Ci.MO, i.Ci.TU, i.Ci.WE, i.Ci.TH, i.Ci.FR]);
        else if ("week(s)" === o.symbol) {
          o.nextSymbol();
          var l = o.acceptNumber();
          if (!l) throw Error("Unexpected symbol " + o.symbol + ", expected week number");
          for (n.byweekno = [parseInt(l[0], 10)]; o.accept("comma");) {
            if (!(l = o.acceptNumber())) throw Error("Unexpected symbol " + o.symbol + "; expected monthday");
            n.byweekno.push(parseInt(l[0], 10))
          }
        } else {
          if (!s) return;
          o.nextSymbol(), n.bymonth || (n.bymonth = []), n.bymonth.push(s)
        }
      } while (o.accept("comma") || o.accept("the") || o.accept("on"))
  }

  function c() {
    if (o.accept("at"))
      do {
        var e = o.acceptNumber();
        if (!e) throw Error("Unexpected symbol " + o.symbol + ", expected hour");
        for (n.byhour = [parseInt(e[0], 10)]; o.accept("comma");) {
          if (!(e = o.acceptNumber())) throw Error("Unexpected symbol " + o.symbol + "; expected hour");
          n.byhour.push(parseInt(e[0], 10))
        }
      } while (o.accept("comma") || o.accept("at"))
  }

  function u() {
    switch (o.symbol) {
      case "january":
        return 1;
      case "february":
        return 2;
      case "march":
        return 3;
      case "april":
        return 4;
      case "may":
        return 5;
      case "june":
        return 6;
      case "july":
        return 7;
      case "august":
        return 8;
      case "september":
        return 9;
      case "october":
        return 10;
      case "november":
        return 11;
      case "december":
        return 12;
      default:
        returnfalse
    }
  }

  function d() {
    switch (o.symbol) {
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
      case "saturday":
      case "sunday":
        return o.symbol.substr(0, 2).toUpperCase();
      default:
        returnfalse
    }
  }

  function f() {
    switch (o.symbol) {
      case "last":
        return o.nextSymbol(), false;
      case "first":
        return o.nextSymbol(), 1;
      case "second":
        return o.nextSymbol(), o.accept("last") ? false : 2;
      case "third":
        return o.nextSymbol(), o.accept("last") ? false : 3;
      case "nth":
        var e = parseInt(o.value[1], 10);
        if (e < false || e > 366) throw Error("Nth out of range: " + e);
        return o.nextSymbol(), o.accept("last") ? -e : e;
      default:
        returnfalse
    }
  }

  function p() {
    o.accept("on"), o.accept("the");
    var e = f();
    if (e)
      for (n.bymonthday = [e], o.nextSymbol(); o.accept("comma");) {
        if (!(e = f())) throw Error("Unexpected symbol " + o.symbol + "; expected monthday");
        n.bymonthday.push(e), o.nextSymbol()
      }
  }

  function _() {
    if ("until" === o.symbol) {
      var e = Date.parse(o.text);
      if (!e) throw Error("Cannot parse until date:" + o.text);
      n.until = new Date(e)
    } else o.accept("for") && (n.count = parseInt(o.value[0], 10), o.expect("number"))
  }
}