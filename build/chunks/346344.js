/** Chunk was on 49681 **/
/** chunk id: 346344, original params: e,i (module,exports,require) **/
var s, t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
  return typeof e
} : function(e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
};
s = function(e) {
  "use strict";

  function i(e, i) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i && ((true === i ? "undefined" : t(i)) === "object" || "function" == typeof i) ? i : e
  }

  function s(e, i) {
    if ("function" != typeof i && null !== i) throw TypeError("Super expression must either be null or a function, not " + (true === i ? "undefined" : t(i)));
    e.prototype = Object.create(i && i.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(e, i) : e.__proto__ = i)
  }

  function r(e, i) {
    if (!(e instanceof i)) throw TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: true
  }), e.newStemmer = function(e) {
    var i = new({
      arabic: _,
      armenian: l,
      basque: w,
      catalan: $,
      czech: v,
      danish: f,
      dutch: k,
      english: d,
      finnish: b,
      french: m,
      german: j,
      hungarian: g,
      italian: y,
      irish: p,
      norwegian: I,
      porter: q,
      portuguese: O,
      romanian: x,
      russian: R,
      spanish: P,
      slovene: z,
      swedish: V,
      tamil: S,
      turkish: A
    })[e.toLowerCase()];
    return {
      stem: function(e) {
        return i.setCurrent(e), i.stem(), i.getCurrent()
      }
    }
  }, e.algorithms = function() {
    return ["arabic", "armenian", "basque", "catalan", "czech", "danish", "dutch", "english", "finnish", "french", "german", "hungarian", "italian", "irish", "norwegian", "porter", "portuguese", "romanian", "russian", "spanish", "slovene", "swedish", "tamil", "turkish"]
  };
  var a = function() {
      function e(e, i) {
        for (var s = 0; s < i.length; s++) {
          var t = i[s];
          t.enumerable = t.enumerable || false, t.configurable = true, "value" in t && (t.writable = true), Object.defineProperty(e, t.key, t)
        }
      }
      return function(i, s, t) {
        return s && e(i.prototype, s), t && e(i, t), i
      }
    }(),
    n = function e(i, s, t) {
      null === i && (i = Function.prototype);
      var r = Object.getOwnPropertyDescriptor(i, s);
      if (true === r) {
        var a = Object.getPrototypeOf(i);
        if (null === a) return;
        return e(a, s, t)
      }
      if ("value" in r) return r.value;
      var n = r.get;
      if (true !== n) return n.call(t)
    },
    h = function() {
      function e() {
        r(this, e)
      }
      return a(e, [{
        key: "length$esjava$0",
        value: function() {
          return this.b.length
        }
      }, {
        key: "replace$esjava$3",
        value: function(e, i, s) {
          if (0 === e && i === this.b.length) this.b = s;
          else {
            var t = this.b.substring(0, e),
              r = this.b.substring(i);
            this.b = t + s + r
          }
        }
      }, {
        key: "substring$esjava$2",
        value: function(e, i) {
          return this.b.substring(e, i)
        }
      }, {
        key: "charAt$esjava$1",
        value: function(e) {
          return this.b.charCodeAt(e)
        }
      }, {
        key: "subSequence$esjava$2",
        value: function(e, i) {
          throw Error("NotImpl: CharSequence::subSequence")
        }
      }, {
        key: "toString$esjava$0",
        value: function() {
          return this.b
        }
      }, {
        key: "length",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 0 === t.length ? this.length$esjava$0.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "length", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "replace",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 3 === t.length ? this.replace$esjava$3.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "replace", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "substring",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 2 === t.length ? this.substring$esjava$2.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "substring", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "charAt",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 1 === t.length ? this.charAt$esjava$1.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "charAt", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "subSequence",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 2 === t.length ? this.subSequence$esjava$2.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "subSequence", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "toString",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 0 === t.length ? this.toString$esjava$0.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "toString", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "b",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$b") ? this._$esjava$b : this._$esjava$b = ""
        },
        set: function(e) {
          this._$esjava$b = e
        }
      }]), e
    }(),
    o = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), t
    }(h),
    u = function() {
      function e(i, s, t, a, n) {
        r(this, e), this.s = e.toCharArray$esjava$1(i), this.substring_i = s, this.result = t, this.method = a ? n[a] : null, this.methodobject = n
      }
      return a(e, null, [{
        key: "toCharArray$esjava$1",
        value: function(e) {
          for (var i = e.length, s = Array(i), t = 0; t < i; t++) s[t] = e.charCodeAt(t);
          return s
        }
      }]), a(e, [{
        key: "s",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$s") ? this._$esjava$s : this._$esjava$s = null
        },
        set: function(e) {
          this._$esjava$s = e
        }
      }, {
        key: "substring_i",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$substring_i") ? this._$esjava$substring_i : this._$esjava$substring_i = 0
        },
        set: function(e) {
          this._$esjava$substring_i = e
        }
      }, {
        key: "result",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$result") ? this._$esjava$result : this._$esjava$result = 0
        },
        set: function(e) {
          this._$esjava$result = e
        }
      }, {
        key: "method",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$method") ? this._$esjava$method : this._$esjava$method = null
        },
        set: function(e) {
          this._$esjava$method = e
        }
      }, {
        key: "methodobject",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$methodobject") ? this._$esjava$methodobject : this._$esjava$methodobject = null
        },
        set: function(e) {
          this._$esjava$methodobject = e
        }
      }]), e
    }(),
    c = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "stem$esjava$0",
        value: function() {
          throw "NotImpl < stem$esjava$0 >"
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }]), t
    }(function() {
      function e() {
        r(this, e), this.current = new h, this.setCurrent$esjava$1("")
      }
      return a(e, [{
        key: "setCurrent$esjava$1",
        value: function(e) {
          this.current.replace(0, this.current.length(), e), this.cursor = 0, this.limit = this.current.length(), this.limit_backward = 0, this.bra = this.cursor, this.ket = this.limit
        }
      }, {
        key: "getCurrent$esjava$0",
        value: function() {
          var e = this.current.toString();
          return this.current = new h, e
        }
      }, {
        key: "in_grouping$esjava$3",
        value: function(e, i, s) {
          if (this.cursor >= this.limit) returnfalse;
          var t = this.current.charAt(this.cursor);
          return !(t > s) && !(t < i) && (e[(t -= i) >> 3] & 1 << (7 & t)) != 0 && (this.cursor++, true)
        }
      }, {
        key: "in_grouping_b$esjava$3",
        value: function(e, i, s) {
          if (this.cursor <= this.limit_backward) returnfalse;
          var t = this.current.charAt(this.cursor - 1);
          return !(t > s) && !(t < i) && (e[(t -= i) >> 3] & 1 << (7 & t)) != 0 && (this.cursor--, true)
        }
      }, {
        key: "out_grouping$esjava$3",
        value: function(e, i, s) {
          if (this.cursor >= this.limit) returnfalse;
          var t = this.current.charAt(this.cursor);
          return (t > s || t < i || (e[(t -= i) >> 3] & 1 << (7 & t)) == 0) && (this.cursor++, true)
        }
      }, {
        key: "out_grouping_b$esjava$3",
        value: function(e, i, s) {
          if (this.cursor <= this.limit_backward) returnfalse;
          var t = this.current.charAt(this.cursor - 1);
          return (t > s || t < i || (e[(t -= i) >> 3] & 1 << (7 & t)) == 0) && (this.cursor--, true)
        }
      }, {
        key: "eq_s$esjava$1",
        value: function(e) {
          if (this.limit - this.cursor < e.length) returnfalse;
          var i = true;
          for (i = 0; i !== e.length; i++)
            if (this.current.charAt(this.cursor + i) !== e.charCodeAt(i)) returnfalse;
          return this.cursor += e.length, true
        }
      }, {
        key: "eq_s_b$esjava$1",
        value: function(e) {
          if (this.cursor - this.limit_backward < e.length) returnfalse;
          var i = true;
          for (i = 0; i !== e.length; i++)
            if (this.current.charAt(this.cursor - e.length + i) !== e.charCodeAt(i)) returnfalse;
          return this.cursor -= e.length, true
        }
      }, {
        key: "find_among$esjava$1",
        value: function(e) {
          for (var i = 0, s = e.length, t = this.cursor, r = this.limit, a = 0, n = 0, h = false;;) {
            var o = i + (s - i >> 1),
              u = 0,
              c = a < n ? a : n,
              _ = e[o],
              l = true;
            for (l = c; l < _.s.length; l++) {
              if (t + c === r) {
                u = false;
                break
              }
              if (0 != (u = this.current.charAt(t + c) - _.s[l])) break;
              c++
            }
            if (u < 0 ? (s = o, n = c) : (i = o, a = c), s - i <= 1) {
              if (i > 0 || s === i || h) break;
              h = true
            }
          }
          for (;;) {
            var _ = e[i];
            if (a >= _.s.length) {
              if (this.cursor = t + _.s.length, null === _.method) return _.result;
              var w = true;
              if (w = _.method.call(_.methodobject), this.cursor = t + _.s.length, w) return _.result
            }
            if ((i = _.substring_i) < 0) return 0
          }
        }
      }, {
        key: "find_among_b$esjava$1",
        value: function(e) {
          for (var i = 0, s = e.length, t = this.cursor, r = this.limit_backward, a = 0, n = 0, h = false;;) {
            var o = i + (s - i >> 1),
              u = 0,
              c = a < n ? a : n,
              _ = e[o],
              l = true;
            for (l = _.s.length - 1 - c; l >= 0; l--) {
              if (t - c === r) {
                u = false;
                break
              }
              if (0 != (u = this.current.charAt(t - 1 - c) - _.s[l])) break;
              c++
            }
            if (u < 0 ? (s = o, n = c) : (i = o, a = c), s - i <= 1) {
              if (i > 0 || s === i || h) break;
              h = true
            }
          }
          for (;;) {
            var _ = e[i];
            if (a >= _.s.length) {
              if (this.cursor = t - _.s.length, null === _.method) return _.result;
              var w = true;
              if (w = _.method.call(_.methodobject), this.cursor = t - _.s.length, w) return _.result
            }
            if ((i = _.substring_i) < 0) return 0
          }
        }
      }, {
        key: "replace_s$esjava$3",
        value: function(e, i, s) {
          var t = s.length - (i - e);
          return this.current.replace(e, i, s), this.limit += t, this.cursor >= i ? this.cursor += t : this.cursor > e && (this.cursor = e), t
        }
      }, {
        key: "slice_check$esjava$0",
        value: function() {
          if (this.bra < 0 || this.bra > this.ket || this.ket > this.limit || this.limit > this.current.length()) throw Error("Snowball: faulty slice operation")
        }
      }, {
        key: "slice_from$esjava$1",
        value: function(e) {
          this.slice_check$esjava$0(), this.replace_s$esjava$3(this.bra, this.ket, e)
        }
      }, {
        key: "slice_del$esjava$0",
        value: function() {
          this.slice_from$esjava$1("")
        }
      }, {
        key: "insert$esjava$3",
        value: function(e, i, s) {
          var t = this.replace_s$esjava$3(e, i, s);
          e <= this.bra && (this.bra += t), e <= this.ket && (this.ket += t)
        }
      }, {
        key: "slice_to$esjava$1",
        value: function(e) {
          return this.slice_check$esjava$0(), e.replace(0, e.length(), this.current.substring(this.bra, this.ket)), e
        }
      }, {
        key: "setCurrent",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 1 === t.length ? this.setCurrent$esjava$1.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "setCurrent", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "getCurrent",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 0 === t.length ? this.getCurrent$esjava$0.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "getCurrent", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "in_grouping",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 3 === t.length ? this.in_grouping$esjava$3.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "in_grouping", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "in_grouping_b",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 3 === t.length ? this.in_grouping_b$esjava$3.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "in_grouping_b", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "out_grouping",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 3 === t.length ? this.out_grouping$esjava$3.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "out_grouping", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "out_grouping_b",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 3 === t.length ? this.out_grouping_b$esjava$3.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "out_grouping_b", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "eq_s",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 1 === t.length ? this.eq_s$esjava$1.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "eq_s", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "eq_s_b",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 1 === t.length ? this.eq_s_b$esjava$1.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "eq_s_b", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "find_among",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 1 === t.length ? this.find_among$esjava$1.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "find_among", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "find_among_b",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 1 === t.length ? this.find_among_b$esjava$1.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "find_among_b", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "replace_s",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 3 === t.length ? this.replace_s$esjava$3.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "replace_s", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "slice_check",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 0 === t.length ? this.slice_check$esjava$0.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "slice_check", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "slice_from",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 1 === t.length ? this.slice_from$esjava$1.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "slice_from", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "slice_del",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 0 === t.length ? this.slice_del$esjava$0.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "slice_del", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "insert",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 3 === t.length ? this.insert$esjava$3.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "insert", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "slice_to",
        value: function() {
          for (var i, s = arguments.length, t = Array(s), r = 0; r < s; r++) t[r] = arguments[r];
          return 1 === t.length ? this.slice_to$esjava$1.apply(this, t) : (i = n(Object.getPrototypeOf(e.prototype), "slice_to", this)).call.apply(i, [this].concat(t))
        }
      }, {
        key: "current",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$current") ? this._$esjava$current : this._$esjava$current = null
        },
        set: function(e) {
          this._$esjava$current = e
        }
      }, {
        key: "cursor",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$cursor") ? this._$esjava$cursor : this._$esjava$cursor = 0
        },
        set: function(e) {
          this._$esjava$cursor = e
        }
      }, {
        key: "limit",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$limit") ? this._$esjava$limit : this._$esjava$limit = 0
        },
        set: function(e) {
          this._$esjava$limit = e
        }
      }, {
        key: "limit_backward",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$limit_backward") ? this._$esjava$limit_backward : this._$esjava$limit_backward = 0
        },
        set: function(e) {
          this._$esjava$limit_backward = e
        }
      }, {
        key: "bra",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$bra") ? this._$esjava$bra : this._$esjava$bra = 0
        },
        set: function(e) {
          this._$esjava$bra = e
        }
      }, {
        key: "ket",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$ket") ? this._$esjava$ket : this._$esjava$ket = 0
        },
        set: function(e) {
          this._$esjava$ket = e
        }
      }]), e
    }()),
    _ = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_Normalize_pre$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          for (i = this.current.length(); i > 0; i--) e: do {
            s = this.cursor;
            i: do {
              if (this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_0))) break;
              switch (this.ket = this.cursor, e) {
                case 0:
                  break i;
                case 1:
                case 2:
                case 3:
                case 4:
                case 15:
                  this.slice_del$esjava$0();
                  break;
                case 5:
                  this.slice_from$esjava$1("0");
                  break;
                case 6:
                  this.slice_from$esjava$1("1");
                  break;
                case 7:
                  this.slice_from$esjava$1("2");
                  break;
                case 8:
                  this.slice_from$esjava$1("3");
                  break;
                case 9:
                  this.slice_from$esjava$1("4");
                  break;
                case 10:
                  this.slice_from$esjava$1("5");
                  break;
                case 11:
                  this.slice_from$esjava$1("6");
                  break;
                case 12:
                  this.slice_from$esjava$1("7");
                  break;
                case 13:
                  this.slice_from$esjava$1("8");
                  break;
                case 14:
                  this.slice_from$esjava$1("9");
                  break;
                case 16:
                  this.slice_from$esjava$1("ء");
                  break;
                case 17:
                  this.slice_from$esjava$1("أ");
                  break;
                case 18:
                  this.slice_from$esjava$1("إ");
                  break;
                case 19:
                  this.slice_from$esjava$1("ئ");
                  break;
                case 20:
                  this.slice_from$esjava$1("آ");
                  break;
                case 21:
                  this.slice_from$esjava$1("ؤ");
                  break;
                case 22:
                  this.slice_from$esjava$1("ا");
                  break;
                case 23:
                  this.slice_from$esjava$1("ب");
                  break;
                case 24:
                  this.slice_from$esjava$1("ة");
                  break;
                case 25:
                  this.slice_from$esjava$1("ت");
                  break;
                case 26:
                  this.slice_from$esjava$1("ث");
                  break;
                case 27:
                  this.slice_from$esjava$1("ج");
                  break;
                case 28:
                  this.slice_from$esjava$1("ح");
                  break;
                case 29:
                  this.slice_from$esjava$1("خ");
                  break;
                case 30:
                  this.slice_from$esjava$1("د");
                  break;
                case 31:
                  this.slice_from$esjava$1("ذ");
                  break;
                case 32:
                  this.slice_from$esjava$1("ر");
                  break;
                case 33:
                  this.slice_from$esjava$1("ز");
                  break;
                case 34:
                  this.slice_from$esjava$1("س");
                  break;
                case 35:
                  this.slice_from$esjava$1("ش");
                  break;
                case 36:
                  this.slice_from$esjava$1("ص");
                  break;
                case 37:
                  this.slice_from$esjava$1("ض");
                  break;
                case 38:
                  this.slice_from$esjava$1("ط");
                  break;
                case 39:
                  this.slice_from$esjava$1("ظ");
                  break;
                case 40:
                  this.slice_from$esjava$1("ع");
                  break;
                case 41:
                  this.slice_from$esjava$1("غ");
                  break;
                case 42:
                  this.slice_from$esjava$1("ف");
                  break;
                case 43:
                  this.slice_from$esjava$1("ق");
                  break;
                case 44:
                  this.slice_from$esjava$1("ك");
                  break;
                case 45:
                  this.slice_from$esjava$1("ل");
                  break;
                case 46:
                  this.slice_from$esjava$1("م");
                  break;
                case 47:
                  this.slice_from$esjava$1("ن");
                  break;
                case 48:
                  this.slice_from$esjava$1("ه");
                  break;
                case 49:
                  this.slice_from$esjava$1("و");
                  break;
                case 50:
                  this.slice_from$esjava$1("ى");
                  break;
                case 51:
                  this.slice_from$esjava$1("ي");
                  break;
                case 52:
                  this.slice_from$esjava$1("لا");
                  break;
                case 53:
                  this.slice_from$esjava$1("لأ");
                  break;
                case 54:
                  this.slice_from$esjava$1("لإ");
                  break;
                case 55:
                  this.slice_from$esjava$1("لآ")
              }
              break e
            } while (false);
            if (this.cursor = s, this.cursor >= this.limit) returnfalse;
            this.cursor++
          } while (false);
          returntrue
        }
      }, {
        key: "r_Normalize_post$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true;
          i = this.cursor;
          e: do {
            if (this.limit_backward = this.cursor, this.cursor = this.limit, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_1))) break;
            switch (this.bra = this.cursor, e) {
              case 0:
                break e;
              case 1:
              case 2:
              case 3:
                this.slice_from$esjava$1("ء")
            }
            this.cursor = this.limit_backward
          } while (false);
          this.cursor = i, s = this.cursor;
          i: do
            for (r = this.I_word_len; r > 0; r--) s: do {
              a = this.cursor;
              t: do {
                if (this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_2))) break;
                switch (this.ket = this.cursor, e) {
                  case 0:
                    break t;
                  case 1:
                    this.slice_from$esjava$1("ا");
                    break;
                  case 2:
                    this.slice_from$esjava$1("و");
                    break;
                  case 3:
                    this.slice_from$esjava$1("ي")
                }
                break s
              } while (false);
              if (this.cursor = a, this.cursor >= this.limit) break i;
              this.cursor++
            } while (false); while (false);
          return this.cursor = s, true
        }
      }, {
        key: "r_Checks1$esjava$0",
        value: function() {
          var e = true;
          if (this.I_word_len = this.current.length(), this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_3))) returnfalse;
          switch (this.ket = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!(this.I_word_len > 4)) returnfalse;
              this.B_is_noun = true, this.B_is_verb = false, this.B_is_defined = true;
              break;
            case 2:
              if (!(this.I_word_len > 3)) returnfalse;
              this.B_is_noun = true, this.B_is_verb = false, this.B_is_defined = true
          }
          returntrue
        }
      }, {
        key: "r_Prefix_Step1$esjava$0",
        value: function() {
          var e = true;
          if (this.I_word_len = this.current.length(), this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_4))) returnfalse;
          switch (this.ket = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
            case 3:
              if (!(this.I_word_len > 3)) returnfalse;
              this.slice_from$esjava$1("أ");
              break;
            case 2:
              if (!(this.I_word_len > 3)) returnfalse;
              this.slice_from$esjava$1("آ");
              break;
            case 4:
              if (!(this.I_word_len > 3)) returnfalse;
              this.slice_from$esjava$1("ا");
              break;
            case 5:
              if (!(this.I_word_len > 3)) returnfalse;
              this.slice_from$esjava$1("إ")
          }
          returntrue
        }
      }, {
        key: "r_Prefix_Step2$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          this.I_word_len = this.current.length(), i = this.cursor;
          do {
            if (!this.eq_s$esjava$1("فا")) break;
            returnfalse
          } while (false);
          this.cursor = i, s = this.cursor;
          do {
            if (!this.eq_s$esjava$1("وا")) break;
            returnfalse
          } while (false);
          if (this.cursor = s, this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_5))) returnfalse;
          switch (this.ket = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
            case 2:
              if (!(this.I_word_len > 3)) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Prefix_Step3a_Noun$esjava$0",
        value: function() {
          var e = true;
          if (this.I_word_len = this.current.length(), this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_6))) returnfalse;
          switch (this.ket = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!(this.I_word_len > 5)) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!(this.I_word_len > 4)) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Prefix_Step3b_Noun$esjava$0",
        value: function() {
          var e = true,
            i = true;
          this.I_word_len = this.current.length(), i = this.cursor;
          do {
            if (!this.eq_s$esjava$1("با")) break;
            returnfalse
          } while (false);
          if (this.cursor = i, this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_7))) returnfalse;
          switch (this.ket = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!(this.I_word_len > 3)) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!(this.I_word_len > 3)) returnfalse;
              this.slice_from$esjava$1("ب");
              break;
            case 3:
              if (!(this.I_word_len > 3)) returnfalse;
              this.slice_from$esjava$1("ك")
          }
          returntrue
        }
      }, {
        key: "r_Prefix_Step3_Verb$esjava$0",
        value: function() {
          var e = true;
          if (this.I_word_len = this.current.length(), this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_8))) returnfalse;
          switch (this.ket = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!(this.I_word_len > 4)) returnfalse;
              this.slice_from$esjava$1("ي");
              break;
            case 2:
              if (!(this.I_word_len > 4)) returnfalse;
              this.slice_from$esjava$1("ت");
              break;
            case 3:
              if (!(this.I_word_len > 4)) returnfalse;
              this.slice_from$esjava$1("ن");
              break;
            case 4:
              if (!(this.I_word_len > 4)) returnfalse;
              this.slice_from$esjava$1("أ")
          }
          returntrue
        }
      }, {
        key: "r_Prefix_Step4_Verb$esjava$0",
        value: function() {
          var e = true;
          if (this.I_word_len = this.current.length(), this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_9))) returnfalse;
          switch (this.ket = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!(this.I_word_len > 4)) returnfalse;
              this.B_is_verb = true, this.B_is_noun = false, this.slice_from$esjava$1("است")
          }
          returntrue
        }
      }, {
        key: "r_Suffix_Noun_Step1a$esjava$0",
        value: function() {
          var e = true;
          if (this.I_word_len = this.current.length(), this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_10))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!(this.I_word_len >= 4)) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!(this.I_word_len >= 5)) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 3:
              if (!(this.I_word_len >= 6)) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Suffix_Noun_Step1b$esjava$0",
        value: function() {
          var e = true;
          if (this.I_word_len = this.current.length(), this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_11))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!(this.I_word_len > 5)) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Suffix_Noun_Step2a$esjava$0",
        value: function() {
          var e = true;
          if (this.I_word_len = this.current.length(), this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_12))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!(this.I_word_len > 4)) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Suffix_Noun_Step2b$esjava$0",
        value: function() {
          var e = true;
          if (this.I_word_len = this.current.length(), this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_13))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!(this.I_word_len >= 5)) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Suffix_Noun_Step2c1$esjava$0",
        value: function() {
          var e = true;
          if (this.I_word_len = this.current.length(), this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_14))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!(this.I_word_len >= 4)) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Suffix_Noun_Step2c2$esjava$0",
        value: function() {
          var e = true;
          if (this.I_word_len = this.current.length(), this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_15))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!(this.I_word_len >= 4)) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Suffix_Noun_Step3$esjava$0",
        value: function() {
          var e = true;
          if (this.I_word_len = this.current.length(), this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_16))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!(this.I_word_len >= 3)) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Suffix_Verb_Step1$esjava$0",
        value: function() {
          var e = true;
          if (this.I_word_len = this.current.length(), this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_17))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!(this.I_word_len >= 4)) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!(this.I_word_len >= 5)) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 3:
              if (!(this.I_word_len >= 6)) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Suffix_Verb_Step2a$esjava$0",
        value: function() {
          var e = true;
          if (this.I_word_len = this.current.length(), this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_18))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
            case 2:
              if (!(this.I_word_len >= 4)) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 3:
              if (!(this.I_word_len >= 5)) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 4:
              if (!(this.I_word_len > 5)) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 5:
              if (!(this.I_word_len >= 6)) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Suffix_Verb_Step2b$esjava$0",
        value: function() {
          var e = true;
          if (this.I_word_len = this.current.length(), this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_19))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!(this.I_word_len >= 5)) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Suffix_Verb_Step2c$esjava$0",
        value: function() {
          var e = true;
          if (this.I_word_len = this.current.length(), this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_20))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!(this.I_word_len >= 4)) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!(this.I_word_len >= 6)) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Suffix_All_alef_maqsura$esjava$0",
        value: function() {
          var e = true;
          if (this.I_word_len = this.current.length(), this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_21))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_from$esjava$1("ي")
          }
          returntrue
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true,
            c = true,
            _ = true,
            l = true,
            w = true,
            $ = true,
            v = true,
            f = true;
          this.B_is_noun = true, this.B_is_verb = true, this.B_is_defined = false, e = this.cursor;
          do
            if (!this.r_Checks1$esjava$0()) break; while (false);
          this.cursor = e, i = this.cursor;
          do
            if (!this.r_Normalize_pre$esjava$0()) break; while (false);
          this.cursor = i, this.limit_backward = this.cursor, this.cursor = this.limit, s = this.limit - this.cursor;
          s: do t: do {
            t = this.limit - this.cursor;
            r: do {
              if (!this.B_is_verb) break;
              a: do {
                r = this.limit - this.cursor;
                n: do {
                  var k = 1;
                  h: for (;;) {
                    a = this.limit - this.cursor;
                    do {
                      if (!this.r_Suffix_Verb_Step1$esjava$0()) break;
                      k--;
                      continue h
                    } while (false);
                    this.cursor = this.limit - a;
                    break
                  }
                  if (k > 0) break;
                  o: do {
                    n = this.limit - this.cursor;
                    do {
                      if (!this.r_Suffix_Verb_Step2a$esjava$0()) break;
                      break o
                    } while (false);
                    this.cursor = this.limit - n;
                    do {
                      if (!this.r_Suffix_Verb_Step2c$esjava$0()) break;
                      break o
                    } while (false);
                    if (this.cursor = this.limit - n, this.cursor <= this.limit_backward) break n;
                    this.cursor--
                  } while (false);
                  break a
                } while (false);
                this.cursor = this.limit - r;
                do {
                  if (!this.r_Suffix_Verb_Step2b$esjava$0()) break;
                  break a
                } while (false);
                if (this.cursor = this.limit - r, !this.r_Suffix_Verb_Step2a$esjava$0()) break r
              } while (false);
              break t
            } while (false);
            this.cursor = this.limit - t;
            do {
              if (!this.B_is_noun) break;
              h = this.limit - this.cursor;
              u: do c: do {
                o = this.limit - this.cursor;
                do {
                  if (!this.r_Suffix_Noun_Step2c2$esjava$0()) break;
                  break c
                } while (false);
                this.cursor = this.limit - o;
                _: do {
                  do {
                    if (!this.B_is_defined) break;
                    break _
                  } while (false);
                  if (!this.r_Suffix_Noun_Step1a$esjava$0()) break;
                  l: do {
                    u = this.limit - this.cursor;
                    do {
                      if (!this.r_Suffix_Noun_Step2a$esjava$0()) break;
                      break l
                    } while (false);
                    this.cursor = this.limit - u;
                    do {
                      if (!this.r_Suffix_Noun_Step2b$esjava$0()) break;
                      break l
                    } while (false);
                    this.cursor = this.limit - u;
                    do {
                      if (!this.r_Suffix_Noun_Step2c1$esjava$0()) break;
                      break l
                    } while (false);
                    if (this.cursor = this.limit - u, this.cursor <= this.limit_backward) break _;
                    this.cursor--
                  } while (false);
                  break c
                } while (false);
                this.cursor = this.limit - o;
                w: do {
                  if (!this.r_Suffix_Noun_Step1b$esjava$0()) break;
                  $: do {
                    c = this.limit - this.cursor;
                    do {
                      if (!this.r_Suffix_Noun_Step2a$esjava$0()) break;
                      break $
                    } while (false);
                    this.cursor = this.limit - c;
                    do {
                      if (!this.r_Suffix_Noun_Step2b$esjava$0()) break;
                      break $
                    } while (false);
                    if (this.cursor = this.limit - c, !this.r_Suffix_Noun_Step2c1$esjava$0()) break w
                  } while (false);
                  break c
                } while (false);
                this.cursor = this.limit - o;
                v: do {
                  do {
                    if (!this.B_is_defined) break;
                    break v
                  } while (false);
                  if (!this.r_Suffix_Noun_Step2a$esjava$0()) break;
                  break c
                } while (false);
                if (this.cursor = this.limit - o, !this.r_Suffix_Noun_Step2b$esjava$0()) {
                  this.cursor = this.limit - h;
                  break u
                }
              } while (false); while (false);
              if (!this.r_Suffix_Noun_Step3$esjava$0()) break;
              break t
            } while (false);
            if (this.cursor = this.limit - t, !this.r_Suffix_All_alef_maqsura$esjava$0()) break s
          } while (false); while (false);
          this.cursor = this.limit - s, this.cursor = this.limit_backward, _ = this.cursor;
          f: do {
            l = this.cursor;
            do
              if (!this.r_Prefix_Step1$esjava$0()) {
                this.cursor = l;
                break
              } while (false);
            w = this.cursor;
            do
              if (!this.r_Prefix_Step2$esjava$0()) {
                this.cursor = w;
                break
              } while (false);
            k: do {
              $ = this.cursor;
              do {
                if (!this.r_Prefix_Step3a_Noun$esjava$0()) break;
                break k
              } while (false);
              this.cursor = $;
              do {
                if (!this.B_is_noun || !this.r_Prefix_Step3b_Noun$esjava$0()) break;
                break k
              } while (false);
              if (this.cursor = $, !this.B_is_verb) break f;
              v = this.cursor;
              do
                if (!this.r_Prefix_Step3_Verb$esjava$0()) {
                  this.cursor = v;
                  break
                } while (false);
              if (!this.r_Prefix_Step4_Verb$esjava$0()) break f
            } while (false)
          } while (false);
          this.cursor = _, f = this.cursor;
          do
            if (!this.r_Normalize_post$esjava$0()) break; while (false);
          return this.cursor = f, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "B_is_defined",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$B_is_defined") ? this._$esjava$B_is_defined : this._$esjava$B_is_defined = false
        },
        set: function(e) {
          this._$esjava$B_is_defined = e
        }
      }, {
        key: "B_is_verb",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$B_is_verb") ? this._$esjava$B_is_verb : this._$esjava$B_is_verb = false
        },
        set: function(e) {
          this._$esjava$B_is_verb = e
        }
      }, {
        key: "B_is_noun",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$B_is_noun") ? this._$esjava$B_is_noun : this._$esjava$B_is_noun = false
        },
        set: function(e) {
          this._$esjava$B_is_noun = e
        }
      }, {
        key: "I_word_len",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_word_len") ? this._$esjava$I_word_len : this._$esjava$I_word_len = 0
        },
        set: function(e) {
          this._$esjava$I_word_len = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("!", false, 3), new u('"', false, 3), new u("%", false, 3), new u("*", false, 3), new u(",", false, 3), new u(".", false, 3), new u("/", false, 3), new u(":", false, 3), new u(";", false, 3), new u("?", false, 3), new u("\\", false, 3), new u("،", false, 4), new u("؛", false, 4), new u("؟", false, 4), new u("ـ", false, 2), new u("ً", false, 1), new u("ٌ", false, 1), new u("ٍ", false, 1), new u("َ", false, 1), new u("ُ", false, 1), new u("ِ", false, 1), new u("ّ", false, 1), new u("ْ", false, 1), new u("٠", false, 5), new u("١", false, 6), new u("٢", false, 7), new u("٣", false, 8), new u("٤", false, 9), new u("٥", false, 10), new u("٦", false, 11), new u("٧", false, 12), new u("٨", false, 13), new u("٩", false, 14), new u("٪", false, 15), new u("٫", false, 15), new u("٬", false, 15), new u("ﺀ", false, 16), new u("ﺁ", false, 20), new u("ﺂ", false, 20), new u("ﺃ", false, 17), new u("ﺄ", false, 17), new u("ﺅ", false, 21), new u("ﺆ", false, 21), new u("ﺇ", false, 18), new u("ﺈ", false, 18), new u("ﺉ", false, 19), new u("ﺊ", false, 19), new u("ﺋ", false, 19), new u("ﺌ", false, 19), new u("ﺍ", false, 22), new u("ﺎ", false, 22), new u("ﺏ", false, 23), new u("ﺐ", false, 23), new u("ﺑ", false, 23), new u("ﺒ", false, 23), new u("ﺓ", false, 24), new u("ﺔ", false, 24), new u("ﺕ", false, 25), new u("ﺖ", false, 25), new u("ﺗ", false, 25), new u("ﺘ", false, 25), new u("ﺙ", false, 26), new u("ﺚ", false, 26), new u("ﺛ", false, 26), new u("ﺜ", false, 26), new u("ﺝ", false, 27), new u("ﺞ", false, 27), new u("ﺟ", false, 27), new u("ﺠ", false, 27), new u("ﺡ", false, 28), new u("ﺢ", false, 28), new u("ﺣ", false, 28), new u("ﺤ", false, 28), new u("ﺥ", false, 29), new u("ﺦ", false, 29), new u("ﺧ", false, 29), new u("ﺨ", false, 29), new u("ﺩ", false, 30), new u("ﺪ", false, 30), new u("ﺫ", false, 31), new u("ﺬ", false, 31), new u("ﺭ", false, 32), new u("ﺮ", false, 32), new u("ﺯ", false, 33), new u("ﺰ", false, 33), new u("ﺱ", false, 34), new u("ﺲ", false, 34), new u("ﺳ", false, 34), new u("ﺴ", false, 34), new u("ﺵ", false, 35), new u("ﺶ", false, 35), new u("ﺷ", false, 35), new u("ﺸ", false, 35), new u("ﺹ", false, 36), new u("ﺺ", false, 36), new u("ﺻ", false, 36), new u("ﺼ", false, 36), new u("ﺽ", false, 37), new u("ﺾ", false, 37), new u("ﺿ", false, 37), new u("ﻀ", false, 37), new u("ﻁ", false, 38), new u("ﻂ", false, 38), new u("ﻃ", false, 38), new u("ﻄ", false, 38), new u("ﻅ", false, 39), new u("ﻆ", false, 39), new u("ﻇ", false, 39), new u("ﻈ", false, 39), new u("ﻉ", false, 40), new u("ﻊ", false, 40), new u("ﻋ", false, 40), new u("ﻌ", false, 40), new u("ﻍ", false, 41), new u("ﻎ", false, 41), new u("ﻏ", false, 41), new u("ﻐ", false, 41), new u("ﻑ", false, 42), new u("ﻒ", false, 42), new u("ﻓ", false, 42), new u("ﻔ", false, 42), new u("ﻕ", false, 43), new u("ﻖ", false, 43), new u("ﻗ", false, 43), new u("ﻘ", false, 43), new u("ﻙ", false, 44), new u("ﻚ", false, 44), new u("ﻛ", false, 44), new u("ﻜ", false, 44), new u("ﻝ", false, 45), new u("ﻞ", false, 45), new u("ﻟ", false, 45), new u("ﻠ", false, 45), new u("ﻡ", false, 46), new u("ﻢ", false, 46), new u("ﻣ", false, 46), new u("ﻤ", false, 46), new u("ﻥ", false, 47), new u("ﻦ", false, 47), new u("ﻧ", false, 47), new u("ﻨ", false, 47), new u("ﻩ", false, 48), new u("ﻪ", false, 48), new u("ﻫ", false, 48), new u("ﻬ", false, 48), new u("ﻭ", false, 49), new u("ﻮ", false, 49), new u("ﻯ", false, 50), new u("ﻰ", false, 50), new u("ﻱ", false, 51), new u("ﻲ", false, 51), new u("ﻳ", false, 51), new u("ﻴ", false, 51), new u("ﻵ", false, 55), new u("ﻶ", false, 55), new u("ﻷ", false, 53), new u("ﻸ", false, 53), new u("ﻹ", false, 54), new u("ﻺ", false, 54), new u("ﻻ", false, 52), new u("ﻼ", false, 52)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("آ", false, 1), new u("أ", false, 1), new u("ؤ", false, 2), new u("إ", false, 1), new u("ئ", false, 3)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("آ", false, 1), new u("أ", false, 1), new u("ؤ", false, 2), new u("إ", false, 1), new u("ئ", false, 3)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("ال", false, 2), new u("بال", false, 1), new u("كال", false, 1), new u("لل", false, 2)]
        }
      }, {
        key: "a_4",
        get: function() {
          return delete t.a_4, t.a_4 = [new u("أآ", false, 2), new u("أأ", false, 1), new u("أؤ", false, 3), new u("أإ", false, 5), new u("أا", false, 4)]
        }
      }, {
        key: "a_5",
        get: function() {
          return delete t.a_5, t.a_5 = [new u("ف", false, 1), new u("و", false, 2)]
        }
      }, {
        key: "a_6",
        get: function() {
          return delete t.a_6, t.a_6 = [new u("ال", false, 2), new u("بال", false, 1), new u("كال", false, 1), new u("لل", false, 2)]
        }
      }, {
        key: "a_7",
        get: function() {
          return delete t.a_7, t.a_7 = [new u("ب", false, 1), new u("بب", 0, 2), new u("كك", false, 3)]
        }
      }, {
        key: "a_8",
        get: function() {
          return delete t.a_8, t.a_8 = [new u("سأ", false, 4), new u("ست", false, 2), new u("سن", false, 3), new u("سي", false, 1)]
        }
      }, {
        key: "a_9",
        get: function() {
          return delete t.a_9, t.a_9 = [new u("تست", false, 1), new u("نست", false, 1), new u("يست", false, 1)]
        }
      }, {
        key: "a_10",
        get: function() {
          return delete t.a_10, t.a_10 = [new u("كما", false, 3), new u("هما", false, 3), new u("نا", false, 2), new u("ها", false, 2), new u("ك", false, 1), new u("كم", false, 2), new u("هم", false, 2), new u("هن", false, 2), new u("ه", false, 1), new u("ي", false, 1)]
        }
      }, {
        key: "a_11",
        get: function() {
          return delete t.a_11, t.a_11 = [new u("ن", false, 1)]
        }
      }, {
        key: "a_12",
        get: function() {
          return delete t.a_12, t.a_12 = [new u("ا", false, 1), new u("و", false, 1), new u("ي", false, 1)]
        }
      }, {
        key: "a_13",
        get: function() {
          return delete t.a_13, t.a_13 = [new u("ات", false, 1)]
        }
      }, {
        key: "a_14",
        get: function() {
          return delete t.a_14, t.a_14 = [new u("ت", false, 1)]
        }
      }, {
        key: "a_15",
        get: function() {
          return delete t.a_15, t.a_15 = [new u("ة", false, 1)]
        }
      }, {
        key: "a_16",
        get: function() {
          return delete t.a_16, t.a_16 = [new u("ي", false, 1)]
        }
      }, {
        key: "a_17",
        get: function() {
          return delete t.a_17, t.a_17 = [new u("كما", false, 3), new u("هما", false, 3), new u("نا", false, 2), new u("ها", false, 2), new u("ك", false, 1), new u("كم", false, 2), new u("هم", false, 2), new u("كن", false, 2), new u("هن", false, 2), new u("ه", false, 1), new u("كمو", false, 3), new u("ني", false, 2)]
        }
      }, {
        key: "a_18",
        get: function() {
          return delete t.a_18, t.a_18 = [new u("ا", false, 2), new u("تا", 0, 3), new u("تما", 0, 5), new u("نا", 0, 3), new u("ت", false, 1), new u("ن", false, 2), new u("ان", 5, 4), new u("تن", 5, 3), new u("ون", 5, 4), new u("ين", 5, 4), new u("ي", false, 2)]
        }
      }, {
        key: "a_19",
        get: function() {
          return delete t.a_19, t.a_19 = [new u("وا", false, 1), new u("تم", false, 1)]
        }
      }, {
        key: "a_20",
        get: function() {
          return delete t.a_20, t.a_20 = [new u("و", false, 1), new u("تمو", 0, 2)]
        }
      }, {
        key: "a_21",
        get: function() {
          return delete t.a_21, t.a_21 = [new u("ى", false, 1)]
        }
      }]), t
    }(c),
    l = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_mark_regions$esjava$0",
        value: function() {
          var e = true;
          this.I_pV = this.limit, this.I_p2 = this.limit, e = this.cursor;
          e: do {
            d: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 1377, 1413)) break;
                break d
              } while (false);
              if (this.cursor >= this.limit) break e;
              this.cursor++
            }
            this.I_pV = this.cursor;b: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 1377, 1413)) break;
                break b
              } while (false);
              if (this.cursor >= this.limit) break e;
              this.cursor++
            }
            m: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 1377, 1413)) break;
                break m
              } while (false);
              if (this.cursor >= this.limit) break e;
              this.cursor++
            }
            j: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 1377, 1413)) break;
                break j
              } while (false);
              if (this.cursor >= this.limit) break e;
              this.cursor++
            }
            this.I_p2 = this.cursor
          } while (false);
          return this.cursor = e, true
        }
      }, {
        key: "r_R2$esjava$0",
        value: function() {
          return this.I_p2 <= this.cursor
        }
      }, {
        key: "r_adjective$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_0))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_verb$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_1))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_noun$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_2))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_ending$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_3)) || (this.bra = this.cursor, !this.r_R2$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true,
            a = true,
            n = true;
          e = this.cursor;
          do
            if (!this.r_mark_regions$esjava$0()) break; while (false);
          if (this.cursor = e, this.limit_backward = this.cursor, this.cursor = this.limit, i = this.limit - this.cursor, this.cursor < this.I_pV) returnfalse;
          this.cursor = this.I_pV, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, t = this.limit - this.cursor;
          do
            if (!this.r_ending$esjava$0()) break; while (false);
          this.cursor = this.limit - t, r = this.limit - this.cursor;
          do
            if (!this.r_verb$esjava$0()) break; while (false);
          this.cursor = this.limit - r, a = this.limit - this.cursor;
          do
            if (!this.r_adjective$esjava$0()) break; while (false);
          this.cursor = this.limit - a, n = this.limit - this.cursor;
          do
            if (!this.r_noun$esjava$0()) break; while (false);
          return this.cursor = this.limit - n, this.limit_backward = s, this.cursor = this.limit_backward, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "I_p2",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p2") ? this._$esjava$I_p2 : this._$esjava$I_p2 = 0
        },
        set: function(e) {
          this._$esjava$I_p2 = e
        }
      }, {
        key: "I_pV",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_pV") ? this._$esjava$I_pV : this._$esjava$I_pV = 0
        },
        set: function(e) {
          this._$esjava$I_pV = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("րորդ", false, 1), new u("երորդ", 0, 1), new u("ալի", false, 1), new u("ակի", false, 1), new u("որակ", false, 1), new u("եղ", false, 1), new u("ական", false, 1), new u("արան", false, 1), new u("են", false, 1), new u("եկեն", 8, 1), new u("երեն", 8, 1), new u("որէն", false, 1), new u("ին", false, 1), new u("գին", 12, 1), new u("ովին", 12, 1), new u("լայն", false, 1), new u("վուն", false, 1), new u("պես", false, 1), new u("իվ", false, 1), new u("ատ", false, 1), new u("ավետ", false, 1), new u("կոտ", false, 1), new u("բար", false, 1)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("ա", false, 1), new u("ացա", 0, 1), new u("եցա", 0, 1), new u("վե", false, 1), new u("ացրի", false, 1), new u("ացի", false, 1), new u("եցի", false, 1), new u("վեցի", 6, 1), new u("ալ", false, 1), new u("ըալ", 8, 1), new u("անալ", 8, 1), new u("ենալ", 8, 1), new u("ացնալ", 8, 1), new u("ել", false, 1), new u("ըել", 13, 1), new u("նել", 13, 1), new u("ցնել", 15, 1), new u("եցնել", 16, 1), new u("չել", 13, 1), new u("վել", 13, 1), new u("ացվել", 19, 1), new u("եցվել", 19, 1), new u("տել", 13, 1), new u("ատել", 22, 1), new u("ոտել", 22, 1), new u("կոտել", 24, 1), new u("ված", false, 1), new u("ում", false, 1), new u("վում", 27, 1), new u("ան", false, 1), new u("ցան", 29, 1), new u("ացան", 30, 1), new u("ացրին", false, 1), new u("ացին", false, 1), new u("եցին", false, 1), new u("վեցին", 34, 1), new u("ալիս", false, 1), new u("ելիս", false, 1), new u("ավ", false, 1), new u("ացավ", 38, 1), new u("եցավ", 38, 1), new u("ալով", false, 1), new u("ելով", false, 1), new u("ար", false, 1), new u("ացար", 43, 1), new u("եցար", 43, 1), new u("ացրիր", false, 1), new u("ացիր", false, 1), new u("եցիր", false, 1), new u("վեցիր", 48, 1), new u("աց", false, 1), new u("եց", false, 1), new u("ացրեց", 51, 1), new u("ալուց", false, 1), new u("ելուց", false, 1), new u("ալու", false, 1), new u("ելու", false, 1), new u("աք", false, 1), new u("ցաք", 57, 1), new u("ացաք", 58, 1), new u("ացրիք", false, 1), new u("ացիք", false, 1), new u("եցիք", false, 1), new u("վեցիք", 62, 1), new u("անք", false, 1), new u("ցանք", 64, 1), new u("ացանք", 65, 1), new u("ացրինք", false, 1), new u("ացինք", false, 1), new u("եցինք", false, 1), new u("վեցինք", 69, 1)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("որդ", false, 1), new u("ույթ", false, 1), new u("ուհի", false, 1), new u("ցի", false, 1), new u("իլ", false, 1), new u("ակ", false, 1), new u("յակ", 5, 1), new u("անակ", 5, 1), new u("իկ", false, 1), new u("ուկ", false, 1), new u("ան", false, 1), new u("պան", 10, 1), new u("ստան", 10, 1), new u("արան", 10, 1), new u("եղէն", false, 1), new u("յուն", false, 1), new u("ություն", 15, 1), new u("ածո", false, 1), new u("իչ", false, 1), new u("ուս", false, 1), new u("ուստ", false, 1), new u("գար", false, 1), new u("վոր", false, 1), new u("ավոր", 22, 1), new u("ոց", false, 1), new u("անօց", false, 1), new u("ու", false, 1), new u("ք", false, 1), new u("չեք", 27, 1), new u("իք", 27, 1), new u("ալիք", 29, 1), new u("անիք", 29, 1), new u("վածք", 27, 1), new u("ույք", 27, 1), new u("ենք", 27, 1), new u("ոնք", 27, 1), new u("ունք", 27, 1), new u("մունք", 36, 1), new u("իչք", 27, 1), new u("արք", 27, 1)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("սա", false, 1), new u("վա", false, 1), new u("ամբ", false, 1), new u("դ", false, 1), new u("անդ", 3, 1), new u("ությանդ", 4, 1), new u("վանդ", 4, 1), new u("ոջդ", 3, 1), new u("երդ", 3, 1), new u("ներդ", 8, 1), new u("ուդ", 3, 1), new u("ը", false, 1), new u("անը", 11, 1), new u("ությանը", 12, 1), new u("վանը", 12, 1), new u("ոջը", 11, 1), new u("երը", 11, 1), new u("ները", 16, 1), new u("ի", false, 1), new u("վի", 18, 1), new u("երի", 18, 1), new u("ների", 20, 1), new u("անում", false, 1), new u("երում", false, 1), new u("ներում", 23, 1), new u("ն", false, 1), new u("ան", 25, 1), new u("ության", 26, 1), new u("վան", 26, 1), new u("ին", 25, 1), new u("երին", 29, 1), new u("ներին", 30, 1), new u("ությանն", 25, 1), new u("երն", 25, 1), new u("ներն", 33, 1), new u("ուն", 25, 1), new u("ոջ", false, 1), new u("ությանս", false, 1), new u("վանս", false, 1), new u("ոջս", false, 1), new u("ով", false, 1), new u("անով", 40, 1), new u("վով", 40, 1), new u("երով", 40, 1), new u("ներով", 43, 1), new u("եր", false, 1), new u("ներ", 45, 1), new u("ց", false, 1), new u("ից", 47, 1), new u("վանից", 48, 1), new u("ոջից", 48, 1), new u("վից", 48, 1), new u("երից", 48, 1), new u("ներից", 52, 1), new u("ցից", 48, 1), new u("ոց", 47, 1), new u("ուց", 47, 1)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [209, 4, 128, 0, 18]
        }
      }]), t
    }(c),
    w = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_mark_regions$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true;
          this.I_pV = this.limit, this.I_p1 = this.limit, this.I_p2 = this.limit, e = this.cursor;
          e: do {
            i: do {
              i = this.cursor;
              s: do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 117)) break;
                t: do {
                  s = this.cursor;
                  r: do {
                    if (!this.out_grouping$esjava$3(t.g_v, 97, 117)) break;
                    m: for (;;) {
                      do {
                        if (!this.in_grouping$esjava$3(t.g_v, 97, 117)) break;
                        break m
                      } while (false);
                      if (this.cursor >= this.limit) break r;
                      this.cursor++
                    }
                    break t
                  } while (false);
                  if (this.cursor = s, !this.in_grouping$esjava$3(t.g_v, 97, 117)) break s;
                  j: for (;;) {
                    do {
                      if (!this.out_grouping$esjava$3(t.g_v, 97, 117)) break;
                      break j
                    } while (false);
                    if (this.cursor >= this.limit) break s;
                    this.cursor++
                  }
                } while (false);
                break i
              } while (false);
              if (this.cursor = i, !this.out_grouping$esjava$3(t.g_v, 97, 117)) break e;
              o: do {
                r = this.cursor;
                g: do {
                  if (!this.out_grouping$esjava$3(t.g_v, 97, 117)) break;
                  p: for (;;) {
                    do {
                      if (!this.in_grouping$esjava$3(t.g_v, 97, 117)) break;
                      break p
                    } while (false);
                    if (this.cursor >= this.limit) break g;
                    this.cursor++
                  }
                  break o
                } while (false);
                if (this.cursor = r, !this.in_grouping$esjava$3(t.g_v, 97, 117) || this.cursor >= this.limit) break e;
                this.cursor++
              } while (false)
            } while (false);this.I_pV = this.cursor
          } while (false);
          this.cursor = e, a = this.cursor;
          y: do {
            I: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 117)) break;
                break I
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            q: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 117)) break;
                break q
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            this.I_p1 = this.cursor;O: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 117)) break;
                break O
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            x: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 117)) break;
                break x
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            this.I_p2 = this.cursor
          } while (false);
          return this.cursor = a, true
        }
      }, {
        key: "r_RV$esjava$0",
        value: function() {
          return this.I_pV <= this.cursor
        }
      }, {
        key: "r_R2$esjava$0",
        value: function() {
          return this.I_p2 <= this.cursor
        }
      }, {
        key: "r_R1$esjava$0",
        value: function() {
          return this.I_p1 <= this.cursor
        }
      }, {
        key: "r_aditzak$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_0))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_RV$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 3:
              this.slice_from$esjava$1("atseden");
              break;
            case 4:
              this.slice_from$esjava$1("arabera");
              break;
            case 5:
              this.slice_from$esjava$1("baditu")
          }
          returntrue
        }
      }, {
        key: "r_izenak$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_1))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_RV$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 3:
              this.slice_from$esjava$1("jok");
              break;
            case 4:
              if (!this.r_R1$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 5:
              this.slice_from$esjava$1("tra");
              break;
            case 6:
              this.slice_from$esjava$1("minutu");
              break;
            case 7:
              this.slice_from$esjava$1("zehar");
              break;
            case 8:
              this.slice_from$esjava$1("geldi");
              break;
            case 9:
              this.slice_from$esjava$1("igaro");
              break;
            case 10:
              this.slice_from$esjava$1("aurka")
          }
          returntrue
        }
      }, {
        key: "r_adjetiboak$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_2))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_RV$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              this.slice_from$esjava$1("z")
          }
          returntrue
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true;
          e = this.cursor;
          do
            if (!this.r_mark_regions$esjava$0()) break; while (false);
          this.cursor = e, this.limit_backward = this.cursor, this.cursor = this.limit;
          R: for (;;) {
            i = this.limit - this.cursor;
            do {
              if (!this.r_aditzak$esjava$0()) break;
              continue R
            } while (false);
            this.cursor = this.limit - i;
            break
          }
          z: for (;;) {
            s = this.limit - this.cursor;
            do {
              if (!this.r_izenak$esjava$0()) break;
              continue z
            } while (false);
            this.cursor = this.limit - s;
            break
          }
          t = this.limit - this.cursor;
          do
            if (!this.r_adjetiboak$esjava$0()) break; while (false);
          return this.cursor = this.limit - t, this.cursor = this.limit_backward, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "I_p2",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p2") ? this._$esjava$I_p2 : this._$esjava$I_p2 = 0
        },
        set: function(e) {
          this._$esjava$I_p2 = e
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }, {
        key: "I_pV",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_pV") ? this._$esjava$I_pV : this._$esjava$I_pV = 0
        },
        set: function(e) {
          this._$esjava$I_pV = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("idea", false, 1), new u("bidea", 0, 1), new u("kidea", 0, 1), new u("pidea", 0, 1), new u("kundea", false, 1), new u("galea", false, 1), new u("tailea", false, 1), new u("tzailea", false, 1), new u("gunea", false, 1), new u("kunea", false, 1), new u("tzaga", false, 1), new u("gaia", false, 1), new u("aldia", false, 1), new u("taldia", 12, 1), new u("karia", false, 1), new u("garria", false, 2), new u("karria", false, 1), new u("ka", false, 1), new u("tzaka", 17, 1), new u("la", false, 1), new u("mena", false, 1), new u("pena", false, 1), new u("kina", false, 1), new u("ezina", false, 1), new u("tezina", 23, 1), new u("kuna", false, 1), new u("tuna", false, 1), new u("kizuna", false, 1), new u("era", false, 1), new u("bera", 28, 1), new u("arabera", 29, 4), new u("kera", 28, 1), new u("pera", 28, 1), new u("orra", false, 1), new u("korra", 33, 1), new u("dura", false, 1), new u("gura", false, 1), new u("kura", false, 1), new u("tura", false, 1), new u("eta", false, 1), new u("keta", 39, 1), new u("gailua", false, 1), new u("eza", false, 1), new u("erreza", 42, 1), new u("tza", false, 2), new u("gaitza", 44, 1), new u("kaitza", 44, 1), new u("kuntza", 44, 1), new u("ide", false, 1), new u("bide", 48, 1), new u("kide", 48, 1), new u("pide", 48, 1), new u("kunde", false, 1), new u("tzake", false, 1), new u("tzeke", false, 1), new u("le", false, 1), new u("gale", 55, 1), new u("taile", 55, 1), new u("tzaile", 55, 1), new u("gune", false, 1), new u("kune", false, 1), new u("tze", false, 1), new u("atze", 61, 1), new u("gai", false, 1), new u("aldi", false, 1), new u("taldi", 64, 1), new u("ki", false, 1), new u("ari", false, 1), new u("kari", 67, 1), new u("lari", 67, 1), new u("tari", 67, 1), new u("etari", 70, 1), new u("garri", false, 2), new u("karri", false, 1), new u("arazi", false, 1), new u("tarazi", 74, 1), new u("an", false, 1), new u("ean", 76, 1), new u("rean", 77, 1), new u("kan", 76, 1), new u("etan", 76, 1), new u("atseden", false, 3), new u("men", false, 1), new u("pen", false, 1), new u("kin", false, 1), new u("rekin", 84, 1), new u("ezin", false, 1), new u("tezin", 86, 1), new u("tun", false, 1), new u("kizun", false, 1), new u("go", false, 1), new u("ago", 90, 1), new u("tio", false, 1), new u("dako", false, 1), new u("or", false, 1), new u("kor", 94, 1), new u("tzat", false, 1), new u("du", false, 1), new u("gailu", false, 1), new u("tu", false, 1), new u("atu", 99, 1), new u("aldatu", 100, 1), new u("tatu", 100, 1), new u("baditu", 99, 5), new u("ez", false, 1), new u("errez", 104, 1), new u("tzez", 104, 1), new u("gaitz", false, 1), new u("kaitz", false, 1)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("ada", false, 1), new u("kada", 0, 1), new u("anda", false, 1), new u("denda", false, 1), new u("gabea", false, 1), new u("kabea", false, 1), new u("aldea", false, 1), new u("kaldea", 6, 1), new u("taldea", 6, 1), new u("ordea", false, 1), new u("zalea", false, 1), new u("tzalea", 10, 1), new u("gilea", false, 1), new u("emea", false, 1), new u("kumea", false, 1), new u("nea", false, 1), new u("enea", 15, 1), new u("zionea", 15, 1), new u("unea", 15, 1), new u("gunea", 18, 1), new u("pea", false, 1), new u("aurrea", false, 1), new u("tea", false, 1), new u("kotea", 22, 1), new u("artea", 22, 1), new u("ostea", 22, 1), new u("etxea", false, 1), new u("ga", false, 1), new u("anga", 27, 1), new u("gaia", false, 1), new u("aldia", false, 1), new u("taldia", 30, 1), new u("handia", false, 1), new u("mendia", false, 1), new u("geia", false, 1), new u("egia", false, 1), new u("degia", 35, 1), new u("tegia", 35, 1), new u("nahia", false, 1), new u("ohia", false, 1), new u("kia", false, 1), new u("tokia", 40, 1), new u("oia", false, 1), new u("koia", 42, 1), new u("aria", false, 1), new u("karia", 44, 1), new u("laria", 44, 1), new u("taria", 44, 1), new u("eria", false, 1), new u("keria", 48, 1), new u("teria", 48, 1), new u("garria", false, 2), new u("larria", false, 1), new u("kirria", false, 1), new u("duria", false, 1), new u("asia", false, 1), new u("tia", false, 1), new u("ezia", false, 1), new u("bizia", false, 1), new u("ontzia", false, 1), new u("ka", false, 1), new u("joka", 60, 3), new u("aurka", 60, 10), new u("ska", 60, 1), new u("xka", 60, 1), new u("zka", 60, 1), new u("gibela", false, 1), new u("gela", false, 1), new u("kaila", false, 1), new u("skila", false, 1), new u("tila", false, 1), new u("ola", false, 1), new u("na", false, 1), new u("kana", 72, 1), new u("ena", 72, 1), new u("garrena", 74, 1), new u("gerrena", 74, 1), new u("urrena", 74, 1), new u("zaina", 72, 1), new u("tzaina", 78, 1), new u("kina", 72, 1), new u("mina", 72, 1), new u("garna", 72, 1), new u("una", 72, 1), new u("duna", 83, 1), new u("asuna", 83, 1), new u("tasuna", 85, 1), new u("ondoa", false, 1), new u("kondoa", 87, 1), new u("ngoa", false, 1), new u("zioa", false, 1), new u("koa", false, 1), new u("takoa", 91, 1), new u("zkoa", 91, 1), new u("noa", false, 1), new u("zinoa", 94, 1), new u("aroa", false, 1), new u("taroa", 96, 1), new u("zaroa", 96, 1), new u("eroa", false, 1), new u("oroa", false, 1), new u("osoa", false, 1), new u("toa", false, 1), new u("ttoa", 102, 1), new u("ztoa", 102, 1), new u("txoa", false, 1), new u("tzoa", false, 1), new u("\xf1oa", false, 1), new u("ra", false, 1), new u("ara", 108, 1), new u("dara", 109, 1), new u("liara", 109, 1), new u("tiara", 109, 1), new u("tara", 109, 1), new u("etara", 113, 1), new u("tzara", 109, 1), new u("bera", 108, 1), new u("kera", 108, 1), new u("pera", 108, 1), new u("ora", 108, 2), new u("tzarra", 108, 1), new u("korra", 108, 1), new u("tra", 108, 1), new u("sa", false, 1), new u("osa", 123, 1), new u("ta", false, 1), new u("eta", 125, 1), new u("keta", 126, 1), new u("sta", 125, 1), new u("dua", false, 1), new u("mendua", 129, 1), new u("ordua", 129, 1), new u("lekua", false, 1), new u("burua", false, 1), new u("durua", false, 1), new u("tsua", false, 1), new u("tua", false, 1), new u("mentua", 136, 1), new u("estua", 136, 1), new u("txua", false, 1), new u("zua", false, 1), new u("tzua", 140, 1), new u("za", false, 1), new u("eza", 142, 1), new u("eroza", 142, 1), new u("tza", 142, 2), new u("koitza", 145, 1), new u("antza", 145, 1), new u("gintza", 145, 1), new u("kintza", 145, 1), new u("kuntza", 145, 1), new u("gabe", false, 1), new u("kabe", false, 1), new u("kide", false, 1), new u("alde", false, 1), new u("kalde", 154, 1), new u("talde", 154, 1), new u("orde", false, 1), new u("ge", false, 1), new u("zale", false, 1), new u("tzale", 159, 1), new u("gile", false, 1), new u("eme", false, 1), new u("kume", false, 1), new u("ne", false, 1), new u("zione", 164, 1), new u("une", 164, 1), new u("gune", 166, 1), new u("pe", false, 1), new u("aurre", false, 1), new u("te", false, 1), new u("kote", 170, 1), new u("arte", 170, 1), new u("oste", 170, 1), new u("etxe", false, 1), new u("gai", false, 1), new u("di", false, 1), new u("aldi", 176, 1), new u("taldi", 177, 1), new u("geldi", 176, 8), new u("handi", 176, 1), new u("mendi", 176, 1), new u("gei", false, 1), new u("egi", false, 1), new u("degi", 183, 1), new u("tegi", 183, 1), new u("nahi", false, 1), new u("ohi", false, 1), new u("ki", false, 1), new u("toki", 188, 1), new u("oi", false, 1), new u("goi", 190, 1), new u("koi", 190, 1), new u("ari", false, 1), new u("kari", 193, 1), new u("lari", 193, 1), new u("tari", 193, 1), new u("garri", false, 2), new u("larri", false, 1), new u("kirri", false, 1), new u("duri", false, 1), new u("asi", false, 1), new u("ti", false, 1), new u("ontzi", false, 1), new u("\xf1i", false, 1), new u("ak", false, 1), new u("ek", false, 1), new u("tarik", false, 1), new u("gibel", false, 1), new u("ail", false, 1), new u("kail", 209, 1), new u("kan", false, 1), new u("tan", false, 1), new u("etan", 212, 1), new u("en", false, 4), new u("ren", 214, 2), new u("garren", 215, 1), new u("gerren", 215, 1), new u("urren", 215, 1), new u("ten", 214, 4), new u("tzen", 214, 4), new u("zain", false, 1), new u("tzain", 221, 1), new u("kin", false, 1), new u("min", false, 1), new u("dun", false, 1), new u("asun", false, 1), new u("tasun", 226, 1), new u("aizun", false, 1), new u("ondo", false, 1), new u("kondo", 229, 1), new u("go", false, 1), new u("ngo", 231, 1), new u("zio", false, 1), new u("ko", false, 1), new u("trako", 234, 5), new u("tako", 234, 1), new u("etako", 236, 1), new u("eko", 234, 1), new u("tariko", 234, 1), new u("sko", 234, 1), new u("tuko", 234, 1), new u("minutuko", 241, 6), new u("zko", 234, 1), new u("no", false, 1), new u("zino", 244, 1), new u("ro", false, 1), new u("aro", 246, 1), new u("igaro", 247, 9), new u("taro", 247, 1), new u("zaro", 247, 1), new u("ero", 246, 1), new u("giro", 246, 1), new u("oro", 246, 1), new u("oso", false, 1), new u("to", false, 1), new u("tto", 255, 1), new u("zto", 255, 1), new u("txo", false, 1), new u("tzo", false, 1), new u("gintzo", 259, 1), new u("\xf1o", false, 1), new u("zp", false, 1), new u("ar", false, 1), new u("dar", 263, 1), new u("behar", 263, 1), new u("zehar", 263, 7), new u("liar", 263, 1), new u("tiar", 263, 1), new u("tar", 263, 1), new u("tzar", 263, 1), new u("or", false, 2), new u("kor", 271, 1), new u("os", false, 1), new u("ket", false, 1), new u("du", false, 1), new u("mendu", 275, 1), new u("ordu", 275, 1), new u("leku", false, 1), new u("buru", false, 2), new u("duru", false, 1), new u("tsu", false, 1), new u("tu", false, 1), new u("tatu", 282, 4), new u("mentu", 282, 1), new u("estu", 282, 1), new u("txu", false, 1), new u("zu", false, 1), new u("tzu", 287, 1), new u("gintzu", 288, 1), new u("z", false, 1), new u("ez", 290, 1), new u("eroz", 290, 1), new u("tz", 290, 1), new u("koitz", 293, 1)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("zlea", false, 2), new u("keria", false, 1), new u("la", false, 1), new u("era", false, 1), new u("dade", false, 1), new u("tade", false, 1), new u("date", false, 1), new u("tate", false, 1), new u("gi", false, 1), new u("ki", false, 1), new u("ik", false, 1), new u("lanik", 10, 1), new u("rik", 10, 1), new u("larik", 12, 1), new u("ztik", 10, 1), new u("go", false, 1), new u("ro", false, 1), new u("ero", 16, 1), new u("to", false, 1)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [17, 65, 16]
        }
      }]), t
    }(c),
    $ = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_mark_regions$esjava$0",
        value: function() {
          var e = true;
          this.I_p1 = this.limit, this.I_p2 = this.limit, e = this.cursor;
          e: do {
            d: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 252)) break;
                break d
              } while (false);
              if (this.cursor >= this.limit) break e;
              this.cursor++
            }
            b: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 252)) break;
                break b
              } while (false);
              if (this.cursor >= this.limit) break e;
              this.cursor++
            }
            this.I_p1 = this.cursor;m: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 252)) break;
                break m
              } while (false);
              if (this.cursor >= this.limit) break e;
              this.cursor++
            }
            j: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 252)) break;
                break j
              } while (false);
              if (this.cursor >= this.limit) break e;
              this.cursor++
            }
            this.I_p2 = this.cursor
          } while (false);
          return this.cursor = e, true
        }
      }, {
        key: "r_cleaning$esjava$0",
        value: function() {
          var e = true,
            i = true;
          P: for (;;) {
            i = this.cursor;
            i: do {
              if (this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_0))) break;
              switch (this.ket = this.cursor, e) {
                case 0:
                  break i;
                case 1:
                case 2:
                  this.slice_from$esjava$1("a");
                  break;
                case 3:
                case 4:
                  this.slice_from$esjava$1("e");
                  break;
                case 5:
                case 6:
                case 11:
                  this.slice_from$esjava$1("i");
                  break;
                case 7:
                case 8:
                  this.slice_from$esjava$1("o");
                  break;
                case 9:
                case 10:
                  this.slice_from$esjava$1("u");
                  break;
                case 12:
                  this.slice_from$esjava$1(".");
                  break;
                case 13:
                  if (this.cursor >= this.limit) break i;
                  this.cursor++
              }
              continue P
            } while (false);
            this.cursor = i;
            break
          }
          returntrue
        }
      }, {
        key: "r_R1$esjava$0",
        value: function() {
          return this.I_p1 <= this.cursor
        }
      }, {
        key: "r_R2$esjava$0",
        value: function() {
          return this.I_p2 <= this.cursor
        }
      }, {
        key: "r_attached_pronoun$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_1))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_R1$esjava$0()) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_standard_suffix$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_2))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_R1$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 3:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_from$esjava$1("log");
              break;
            case 4:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_from$esjava$1("ic");
              break;
            case 5:
              if (!this.r_R1$esjava$0()) returnfalse;
              this.slice_from$esjava$1("c")
          }
          returntrue
        }
      }, {
        key: "r_verb_suffix$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_3))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_R1$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_residual_suffix$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_4))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_R1$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!this.r_R1$esjava$0()) returnfalse;
              this.slice_from$esjava$1("ic")
          }
          returntrue
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true,
            a = true;
          e = this.cursor;
          do
            if (!this.r_mark_regions$esjava$0()) break; while (false);
          this.cursor = e, this.limit_backward = this.cursor, this.cursor = this.limit, i = this.limit - this.cursor;
          do
            if (!this.r_attached_pronoun$esjava$0()) break; while (false);
          this.cursor = this.limit - i, s = this.limit - this.cursor;
          s: do t: do {
            t = this.limit - this.cursor;
            do {
              if (!this.r_standard_suffix$esjava$0()) break;
              break t
            } while (false);
            if (this.cursor = this.limit - t, !this.r_verb_suffix$esjava$0()) break s
          } while (false); while (false);
          this.cursor = this.limit - s, r = this.limit - this.cursor;
          do
            if (!this.r_residual_suffix$esjava$0()) break; while (false);
          this.cursor = this.limit - r, this.cursor = this.limit_backward, a = this.cursor;
          do
            if (!this.r_cleaning$esjava$0()) break; while (false);
          return this.cursor = a, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "I_p2",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p2") ? this._$esjava$I_p2 : this._$esjava$I_p2 = 0
        },
        set: function(e) {
          this._$esjava$I_p2 = e
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("", false, 13), new u("\xb7", 0, 12), new u("\xe0", 0, 2), new u("\xe1", 0, 1), new u("\xe8", 0, 4), new u("\xe9", 0, 3), new u("\xec", 0, 6), new u("\xed", 0, 5), new u("\xef", 0, 11), new u("\xf2", 0, 8), new u("\xf3", 0, 7), new u("\xfa", 0, 9), new u("\xfc", 0, 10)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("la", false, 1), new u("-la", 0, 1), new u("sela", 0, 1), new u("le", false, 1), new u("me", false, 1), new u("-me", 4, 1), new u("se", false, 1), new u("-te", false, 1), new u("hi", false, 1), new u("'hi", 8, 1), new u("li", false, 1), new u("-li", 10, 1), new u("'l", false, 1), new u("'m", false, 1), new u("-m", false, 1), new u("'n", false, 1), new u("-n", false, 1), new u("ho", false, 1), new u("'ho", 17, 1), new u("lo", false, 1), new u("selo", 19, 1), new u("'s", false, 1), new u("las", false, 1), new u("selas", 22, 1), new u("les", false, 1), new u("-les", 24, 1), new u("'ls", false, 1), new u("-ls", false, 1), new u("'ns", false, 1), new u("-ns", false, 1), new u("ens", false, 1), new u("los", false, 1), new u("selos", 31, 1), new u("nos", false, 1), new u("-nos", 33, 1), new u("vos", false, 1), new u("us", false, 1), new u("-us", 36, 1), new u("'t", false, 1)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("ica", false, 4), new u("l\xf3gica", 0, 3), new u("enca", false, 1), new u("ada", false, 2), new u("ancia", false, 1), new u("encia", false, 1), new u("\xe8ncia", false, 1), new u("\xedcia", false, 1), new u("logia", false, 3), new u("inia", false, 1), new u("\xedinia", 9, 1), new u("eria", false, 1), new u("\xe0ria", false, 1), new u("at\xf2ria", false, 1), new u("alla", false, 1), new u("ella", false, 1), new u("\xedvola", false, 1), new u("ima", false, 1), new u("\xedssima", 17, 1), new u("qu\xedssima", 18, 5), new u("ana", false, 1), new u("ina", false, 1), new u("era", false, 1), new u("sfera", 22, 1), new u("ora", false, 1), new u("dora", 24, 1), new u("adora", 25, 1), new u("adura", false, 1), new u("esa", false, 1), new u("osa", false, 1), new u("assa", false, 1), new u("essa", false, 1), new u("issa", false, 1), new u("eta", false, 1), new u("ita", false, 1), new u("ota", false, 1), new u("ista", false, 1), new u("ialista", 36, 1), new u("ionista", 36, 1), new u("iva", false, 1), new u("ativa", 39, 1), new u("n\xe7a", false, 1), new u("log\xeda", false, 3), new u("ic", false, 4), new u("\xedstic", 43, 1), new u("enc", false, 1), new u("esc", false, 1), new u("ud", false, 1), new u("atge", false, 1), new u("ble", false, 1), new u("able", 49, 1), new u("ible", 49, 1), new u("isme", false, 1), new u("ialisme", 52, 1), new u("ionisme", 52, 1), new u("ivisme", 52, 1), new u("aire", false, 1), new u("icte", false, 1), new u("iste", false, 1), new u("ici", false, 1), new u("\xedci", false, 1), new u("logi", false, 3), new u("ari", false, 1), new u("tori", false, 1), new u("al", false, 1), new u("il", false, 1), new u("all", false, 1), new u("ell", false, 1), new u("\xedvol", false, 1), new u("isam", false, 1), new u("issem", false, 1), new u("\xecssem", false, 1), new u("\xedssem", false, 1), new u("\xedssim", false, 1), new u("qu\xedssim", 73, 5), new u("amen", false, 1), new u("\xecssin", false, 1), new u("ar", false, 1), new u("ificar", 77, 1), new u("egar", 77, 1), new u("ejar", 77, 1), new u("itar", 77, 1), new u("itzar", 77, 1), new u("fer", false, 1), new u("or", false, 1), new u("dor", 84, 1), new u("dur", false, 1), new u("doras", false, 1), new u("ics", false, 4), new u("l\xf3gics", 88, 3), new u("uds", false, 1), new u("nces", false, 1), new u("ades", false, 2), new u("ancies", false, 1), new u("encies", false, 1), new u("\xe8ncies", false, 1), new u("\xedcies", false, 1), new u("logies", false, 3), new u("inies", false, 1), new u("\xednies", false, 1), new u("eries", false, 1), new u("\xe0ries", false, 1), new u("at\xf2ries", false, 1), new u("bles", false, 1), new u("ables", 103, 1), new u("ibles", 103, 1), new u("imes", false, 1), new u("\xedssimes", 106, 1), new u("qu\xedssimes", 107, 5), new u("formes", false, 1), new u("ismes", false, 1), new u("ialismes", 110, 1), new u("ines", false, 1), new u("eres", false, 1), new u("ores", false, 1), new u("dores", 114, 1), new u("idores", 115, 1), new u("dures", false, 1), new u("eses", false, 1), new u("oses", false, 1), new u("asses", false, 1), new u("ictes", false, 1), new u("ites", false, 1), new u("otes", false, 1), new u("istes", false, 1), new u("ialistes", 124, 1), new u("ionistes", 124, 1), new u("iques", false, 4), new u("l\xf3giques", 127, 3), new u("ives", false, 1), new u("atives", 129, 1), new u("log\xedes", false, 3), new u("alleng\xfces", false, 1), new u("icis", false, 1), new u("\xedcis", false, 1), new u("logis", false, 3), new u("aris", false, 1), new u("toris", false, 1), new u("ls", false, 1), new u("als", 138, 1), new u("ells", 138, 1), new u("ims", false, 1), new u("\xedssims", 141, 1), new u("qu\xedssims", 142, 5), new u("ions", false, 1), new u("cions", 144, 1), new u("acions", 145, 2), new u("esos", false, 1), new u("osos", false, 1), new u("assos", false, 1), new u("issos", false, 1), new u("ers", false, 1), new u("ors", false, 1), new u("dors", 152, 1), new u("adors", 153, 1), new u("idors", 153, 1), new u("ats", false, 1), new u("itats", 156, 1), new u("bilitats", 157, 1), new u("ivitats", 157, 1), new u("ativitats", 159, 1), new u("\xeftats", 156, 1), new u("ets", false, 1), new u("ants", false, 1), new u("ents", false, 1), new u("ments", 164, 1), new u("aments", 165, 1), new u("ots", false, 1), new u("uts", false, 1), new u("ius", false, 1), new u("trius", 169, 1), new u("atius", 169, 1), new u("\xe8s", false, 1), new u("\xe9s", false, 1), new u("\xeds", false, 1), new u("d\xeds", 174, 1), new u("\xf3s", false, 1), new u("itat", false, 1), new u("bilitat", 177, 1), new u("ivitat", 177, 1), new u("ativitat", 179, 1), new u("\xeftat", false, 1), new u("et", false, 1), new u("ant", false, 1), new u("ent", false, 1), new u("ient", 184, 1), new u("ment", 184, 1), new u("ament", 186, 1), new u("isament", 187, 1), new u("ot", false, 1), new u("isseu", false, 1), new u("\xecsseu", false, 1), new u("\xedsseu", false, 1), new u("triu", false, 1), new u("\xedssiu", false, 1), new u("atiu", false, 1), new u("\xf3", false, 1), new u("i\xf3", 196, 1), new u("ci\xf3", 197, 1), new u("aci\xf3", 198, 1)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("aba", false, 1), new u("esca", false, 1), new u("isca", false, 1), new u("\xefsca", false, 1), new u("ada", false, 1), new u("ida", false, 1), new u("uda", false, 1), new u("\xefda", false, 1), new u("ia", false, 1), new u("aria", 8, 1), new u("iria", 8, 1), new u("ara", false, 1), new u("iera", false, 1), new u("ira", false, 1), new u("adora", false, 1), new u("\xefra", false, 1), new u("ava", false, 1), new u("ixa", false, 1), new u("itza", false, 1), new u("\xeda", false, 1), new u("ar\xeda", 19, 1), new u("er\xeda", 19, 1), new u("ir\xeda", 19, 1), new u("\xefa", false, 1), new u("isc", false, 1), new u("\xefsc", false, 1), new u("ad", false, 1), new u("ed", false, 1), new u("id", false, 1), new u("ie", false, 1), new u("re", false, 1), new u("dre", 30, 1), new u("ase", false, 1), new u("iese", false, 1), new u("aste", false, 1), new u("iste", false, 1), new u("ii", false, 1), new u("ini", false, 1), new u("esqui", false, 1), new u("eixi", false, 1), new u("itzi", false, 1), new u("am", false, 1), new u("em", false, 1), new u("arem", 42, 1), new u("irem", 42, 1), new u("\xe0rem", 42, 1), new u("\xedrem", 42, 1), new u("\xe0ssem", 42, 1), new u("\xe9ssem", 42, 1), new u("iguem", 42, 1), new u("\xefguem", 42, 1), new u("avem", 42, 1), new u("\xe0vem", 42, 1), new u("\xe1vem", 42, 1), new u("ir\xecem", 42, 1), new u("\xedem", 42, 1), new u("ar\xedem", 55, 1), new u("ir\xedem", 55, 1), new u("assim", false, 1), new u("essim", false, 1), new u("issim", false, 1), new u("\xe0ssim", false, 1), new u("\xe8ssim", false, 1), new u("\xe9ssim", false, 1), new u("\xedssim", false, 1), new u("\xefm", false, 1), new u("an", false, 1), new u("aban", 66, 1), new u("arian", 66, 1), new u("aran", 66, 1), new u("ieran", 66, 1), new u("iran", 66, 1), new u("\xedan", 66, 1), new u("ar\xedan", 72, 1), new u("er\xedan", 72, 1), new u("ir\xedan", 72, 1), new u("en", false, 1), new u("ien", 76, 1), new u("arien", 77, 1), new u("irien", 77, 1), new u("aren", 76, 1), new u("eren", 76, 1), new u("iren", 76, 1), new u("\xe0ren", 76, 1), new u("\xefren", 76, 1), new u("asen", 76, 1), new u("iesen", 76, 1), new u("assen", 76, 1), new u("essen", 76, 1), new u("issen", 76, 1), new u("\xe9ssen", 76, 1), new u("\xefssen", 76, 1), new u("esquen", 76, 1), new u("isquen", 76, 1), new u("\xefsquen", 76, 1), new u("aven", 76, 1), new u("ixen", 76, 1), new u("eixen", 96, 1), new u("\xefxen", 76, 1), new u("\xefen", 76, 1), new u("in", false, 1), new u("inin", 100, 1), new u("sin", 100, 1), new u("isin", 102, 1), new u("assin", 102, 1), new u("essin", 102, 1), new u("issin", 102, 1), new u("\xefssin", 102, 1), new u("esquin", 100, 1), new u("eixin", 100, 1), new u("aron", false, 1), new u("ieron", false, 1), new u("ar\xe1n", false, 1), new u("er\xe1n", false, 1), new u("ir\xe1n", false, 1), new u("i\xefn", false, 1), new u("ado", false, 1), new u("ido", false, 1), new u("ando", false, 2), new u("iendo", false, 1), new u("io", false, 1), new u("ixo", false, 1), new u("eixo", 121, 1), new u("\xefxo", false, 1), new u("itzo", false, 1), new u("ar", false, 1), new u("tzar", 125, 1), new u("er", false, 1), new u("eixer", 127, 1), new u("ir", false, 1), new u("ador", false, 1), new u("as", false, 1), new u("abas", 131, 1), new u("adas", 131, 1), new u("idas", 131, 1), new u("aras", 131, 1), new u("ieras", 131, 1), new u("\xedas", 131, 1), new u("ar\xedas", 137, 1), new u("er\xedas", 137, 1), new u("ir\xedas", 137, 1), new u("ids", false, 1), new u("es", false, 1), new u("ades", 142, 1), new u("ides", 142, 1), new u("udes", 142, 1), new u("\xefdes", 142, 1), new u("atges", 142, 1), new u("ies", 142, 1), new u("aries", 148, 1), new u("iries", 148, 1), new u("ares", 142, 1), new u("ires", 142, 1), new u("adores", 142, 1), new u("\xefres", 142, 1), new u("ases", 142, 1), new u("ieses", 142, 1), new u("asses", 142, 1), new u("esses", 142, 1), new u("isses", 142, 1), new u("\xefsses", 142, 1), new u("ques", 142, 1), new u("esques", 161, 1), new u("\xefsques", 161, 1), new u("aves", 142, 1), new u("ixes", 142, 1), new u("eixes", 165, 1), new u("\xefxes", 142, 1), new u("\xefes", 142, 1), new u("abais", false, 1), new u("arais", false, 1), new u("ierais", false, 1), new u("\xedais", false, 1), new u("ar\xedais", 172, 1), new u("er\xedais", 172, 1), new u("ir\xedais", 172, 1), new u("aseis", false, 1), new u("ieseis", false, 1), new u("asteis", false, 1), new u("isteis", false, 1), new u("inis", false, 1), new u("sis", false, 1), new u("isis", 181, 1), new u("assis", 181, 1), new u("essis", 181, 1), new u("issis", 181, 1), new u("\xefssis", 181, 1), new u("esquis", false, 1), new u("eixis", false, 1), new u("itzis", false, 1), new u("\xe1is", false, 1), new u("ar\xe9is", false, 1), new u("er\xe9is", false, 1), new u("ir\xe9is", false, 1), new u("ams", false, 1), new u("ados", false, 1), new u("idos", false, 1), new u("amos", false, 1), new u("\xe1bamos", 197, 1), new u("\xe1ramos", 197, 1), new u("i\xe9ramos", 197, 1), new u("\xedamos", 197, 1), new u("ar\xedamos", 201, 1), new u("er\xedamos", 201, 1), new u("ir\xedamos", 201, 1), new u("aremos", false, 1), new u("eremos", false, 1), new u("iremos", false, 1), new u("\xe1semos", false, 1), new u("i\xe9semos", false, 1), new u("imos", false, 1), new u("adors", false, 1), new u("ass", false, 1), new u("erass", 212, 1), new u("ess", false, 1), new u("ats", false, 1), new u("its", false, 1), new u("ents", false, 1), new u("\xe0s", false, 1), new u("ar\xe0s", 218, 1), new u("ir\xe0s", 218, 1), new u("ar\xe1s", false, 1), new u("er\xe1s", false, 1), new u("ir\xe1s", false, 1), new u("\xe9s", false, 1), new u("ar\xe9s", 224, 1), new u("\xeds", false, 1), new u("i\xefs", false, 1), new u("at", false, 1), new u("it", false, 1), new u("ant", false, 1), new u("ent", false, 1), new u("int", false, 1), new u("ut", false, 1), new u("\xeft", false, 1), new u("au", false, 1), new u("erau", 235, 1), new u("ieu", false, 1), new u("ineu", false, 1), new u("areu", false, 1), new u("ireu", false, 1), new u("\xe0reu", false, 1), new u("\xedreu", false, 1), new u("asseu", false, 1), new u("esseu", false, 1), new u("eresseu", 244, 1), new u("\xe0sseu", false, 1), new u("\xe9sseu", false, 1), new u("igueu", false, 1), new u("\xefgueu", false, 1), new u("\xe0veu", false, 1), new u("\xe1veu", false, 1), new u("itzeu", false, 1), new u("\xeceu", false, 1), new u("ir\xeceu", 253, 1), new u("\xedeu", false, 1), new u("ar\xedeu", 255, 1), new u("ir\xedeu", 255, 1), new u("assiu", false, 1), new u("issiu", false, 1), new u("\xe0ssiu", false, 1), new u("\xe8ssiu", false, 1), new u("\xe9ssiu", false, 1), new u("\xedssiu", false, 1), new u("\xefu", false, 1), new u("ix", false, 1), new u("eix", 265, 1), new u("\xefx", false, 1), new u("itz", false, 1), new u("i\xe0", false, 1), new u("ar\xe0", false, 1), new u("ir\xe0", false, 1), new u("itz\xe0", false, 1), new u("ar\xe1", false, 1), new u("er\xe1", false, 1), new u("ir\xe1", false, 1), new u("ir\xe8", false, 1), new u("ar\xe9", false, 1), new u("er\xe9", false, 1), new u("ir\xe9", false, 1), new u("\xed", false, 1), new u("i\xef", false, 1), new u("i\xf3", false, 1)]
        }
      }, {
        key: "a_4",
        get: function() {
          return delete t.a_4, t.a_4 = [new u("a", false, 1), new u("e", false, 1), new u("i", false, 1), new u("\xefn", false, 1), new u("o", false, 1), new u("ir", false, 1), new u("s", false, 1), new u("is", 6, 1), new u("os", 6, 1), new u("\xefs", 6, 1), new u("it", false, 1), new u("eu", false, 1), new u("iu", false, 1), new u("iqu", false, 2), new u("itz", false, 1), new u("\xe0", false, 1), new u("\xe1", false, 1), new u("\xe9", false, 1), new u("\xec", false, 1), new u("\xed", false, 1), new u("\xef", false, 1), new u("\xf3", false, 1)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 129, 81, 6, 10]
        }
      }]), t
    }(c),
    v = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_mark_regions$esjava$0",
        value: function() {
          var e = true;
          this.I_pV = this.limit, this.I_p1 = this.limit, e = this.cursor;
          e: do {
            d: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 367)) break;
                break d
              } while (false);
              if (this.cursor >= this.limit) break e;
              this.cursor++
            }
            this.I_pV = this.cursor;b: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 367)) break;
                break b
              } while (false);
              if (this.cursor >= this.limit) break e;
              this.cursor++
            }
            m: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 367)) break;
                break m
              } while (false);
              if (this.cursor >= this.limit) break e;
              this.cursor++
            }
            this.I_p1 = this.cursor
          } while (false);
          return this.cursor = e, true
        }
      }, {
        key: "r_RV$esjava$0",
        value: function() {
          return this.I_pV <= this.cursor
        }
      }, {
        key: "r_R1$esjava$0",
        value: function() {
          return this.I_p1 <= this.cursor
        }
      }, {
        key: "r_palatalise$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_0)) || (this.bra = this.cursor, !this.r_RV$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_from$esjava$1("k");
              break;
            case 2:
              this.slice_from$esjava$1("h");
              break;
            case 3:
              this.slice_from$esjava$1("ck");
              break;
            case 4:
              this.slice_from$esjava$1("sk")
          }
          returntrue
        }
      }, {
        key: "r_do_possessive$esjava$0",
        value: function() {
          var e = true,
            i = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_1)) || (this.bra = this.cursor, !this.r_RV$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0();
              break;
            case 2:
              this.slice_del$esjava$0(), i = this.limit - this.cursor;
              do
                if (!this.r_palatalise$esjava$0()) {
                  this.cursor = this.limit - i;
                  break
                } while (false)
          }
          returntrue
        }
      }, {
        key: "r_do_case$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_2))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0();
              break;
            case 2:
              this.slice_del$esjava$0(), i = this.limit - this.cursor;
              do
                if (!this.r_palatalise$esjava$0()) {
                  this.cursor = this.limit - i;
                  break
                } while (false);
              break;
            case 3:
              this.slice_from$esjava$1("e"), s = this.limit - this.cursor;
              do
                if (!this.r_palatalise$esjava$0()) {
                  this.cursor = this.limit - s;
                  break
                } while (false)
          }
          returntrue
        }
      }, {
        key: "r_do_derivational$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_3)) || (this.bra = this.cursor, !this.r_R1$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0();
              break;
            case 2:
              if (this.slice_from$esjava$1("i"), !this.r_palatalise$esjava$0()) returnfalse;
              break;
            case 3:
              if (this.slice_from$esjava$1("e"), !this.r_palatalise$esjava$0()) returnfalse;
              break;
            case 4:
              if (this.slice_from$esjava$1("\xe9"), !this.r_palatalise$esjava$0()) returnfalse;
              break;
            case 5:
              if (this.slice_from$esjava$1("ě"), !this.r_palatalise$esjava$0()) returnfalse;
              break;
            case 6:
              if (this.slice_from$esjava$1("\xed"), !this.r_palatalise$esjava$0()) returnfalse
          }
          returntrue
        }
      }, {
        key: "r_do_deriv_single$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_4))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_do_augmentative$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_5))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0();
              break;
            case 2:
              if (this.slice_from$esjava$1("i"), !this.r_palatalise$esjava$0()) returnfalse
          }
          returntrue
        }
      }, {
        key: "r_do_diminutive$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_6))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0();
              break;
            case 2:
              if (this.slice_from$esjava$1("e"), !this.r_palatalise$esjava$0()) returnfalse;
              break;
            case 3:
              if (this.slice_from$esjava$1("\xe9"), !this.r_palatalise$esjava$0()) returnfalse;
              break;
            case 4:
              if (this.slice_from$esjava$1("i"), !this.r_palatalise$esjava$0()) returnfalse;
              break;
            case 5:
              if (this.slice_from$esjava$1("\xed"), !this.r_palatalise$esjava$0()) returnfalse;
              break;
            case 6:
              this.slice_from$esjava$1("\xe1");
              break;
            case 7:
              this.slice_from$esjava$1("a");
              break;
            case 8:
              this.slice_from$esjava$1("o");
              break;
            case 9:
              this.slice_from$esjava$1("u")
          }
          returntrue
        }
      }, {
        key: "r_do_comparative$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_7))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (this.slice_from$esjava$1("ě"), !this.r_palatalise$esjava$0()) returnfalse;
              break;
            case 2:
              if (this.slice_from$esjava$1("e"), !this.r_palatalise$esjava$0()) returnfalse
          }
          returntrue
        }
      }, {
        key: "r_do_aggressive$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true;
          e = this.limit - this.cursor;
          do
            if (!this.r_do_comparative$esjava$0()) break; while (false);
          this.cursor = this.limit - e, i = this.limit - this.cursor;
          do
            if (!this.r_do_diminutive$esjava$0()) break; while (false);
          this.cursor = this.limit - i, s = this.limit - this.cursor;
          do
            if (!this.r_do_augmentative$esjava$0()) break; while (false);
          this.cursor = this.limit - s;
          t: do {
            t = this.limit - this.cursor;
            do {
              if (!this.r_do_derivational$esjava$0()) break;
              break t
            } while (false);
            if (this.cursor = this.limit - t, !this.r_do_deriv_single$esjava$0()) returnfalse
          } while (false);
          returntrue
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true;
          e = this.cursor;
          do
            if (!this.r_mark_regions$esjava$0()) break; while (false);
          return this.cursor = e, this.limit_backward = this.cursor, this.cursor = this.limit, !!this.r_do_case$esjava$0() && !!this.r_do_possessive$esjava$0() && !!this.r_do_aggressive$esjava$0() && (this.cursor = this.limit_backward, true)
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }, {
        key: "I_pV",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_pV") ? this._$esjava$I_pV : this._$esjava$I_pV = 0
        },
        set: function(e) {
          this._$esjava$I_pV = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("ce", false, 1), new u("ze", false, 2), new u("že", false, 2), new u("ci", false, 1), new u("čti", false, 3), new u("šti", false, 4), new u("zi", false, 2), new u("či", false, 1), new u("ži", false, 2), new u("čt\xe9", false, 3), new u("št\xe9", false, 4), new u("č", false, 1), new u("čtě", false, 3), new u("ště", false, 4)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("in", false, 2), new u("ov", false, 1), new u("ův", false, 1)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("a", false, 1), new u("ama", 0, 1), new u("ata", 0, 1), new u("e", false, 2), new u("ěte", 3, 2), new u("ech", false, 2), new u("atech", 5, 1), new u("ich", false, 2), new u("\xe1ch", false, 1), new u("\xedch", false, 2), new u("\xfdch", false, 1), new u("i", false, 2), new u("mi", 11, 1), new u("ami", 12, 1), new u("emi", 12, 2), new u("\xedmi", 12, 2), new u("\xfdmi", 12, 1), new u("ěmi", 12, 2), new u("ěti", 11, 2), new u("ovi", 11, 1), new u("em", false, 3), new u("ětem", 20, 1), new u("\xe1m", false, 1), new u("\xe9m", false, 2), new u("\xedm", false, 2), new u("\xfdm", false, 1), new u("atům", false, 1), new u("o", false, 1), new u("iho", 27, 2), new u("\xe9ho", 27, 2), new u("\xedho", 27, 2), new u("es", false, 2), new u("os", false, 1), new u("us", false, 1), new u("at", false, 1), new u("u", false, 1), new u("imu", 35, 2), new u("\xe9mu", 35, 2), new u("ou", 35, 1), new u("y", false, 1), new u("aty", 39, 1), new u("\xe1", false, 1), new u("\xe9", false, 1), new u("ov\xe9", 42, 1), new u("\xed", false, 2), new u("\xfd", false, 1), new u("ě", false, 2), new u("ů", false, 1)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("ob", false, 1), new u("itb", false, 2), new u("ec", false, 3), new u("inec", 2, 2), new u("obinec", 3, 1), new u("ovec", 2, 1), new u("ic", false, 2), new u("enic", 6, 3), new u("och", false, 1), new u("\xe1sek", false, 1), new u("nk", false, 1), new u("isk", false, 2), new u("ovisk", 11, 1), new u("tk", false, 1), new u("vk", false, 1), new u("n\xedk", false, 1), new u("ovn\xedk", 15, 1), new u("ov\xedk", false, 1), new u("čk", false, 1), new u("išk", false, 2), new u("ušk", false, 1), new u("dl", false, 1), new u("itel", false, 2), new u("ul", false, 1), new u("an", false, 1), new u("čan", 24, 1), new u("en", false, 3), new u("in", false, 2), new u("štin", 27, 1), new u("ovin", 27, 1), new u("teln", false, 1), new u("\xe1rn", false, 1), new u("\xedrn", false, 6), new u("oun", false, 1), new u("loun", 33, 1), new u("ovn", false, 1), new u("yn", false, 1), new u("kyn", 36, 1), new u("\xe1n", false, 1), new u("i\xe1n", 38, 2), new u("\xedn", false, 6), new u("čn", false, 1), new u("ěn", false, 5), new u("as", false, 1), new u("it", false, 2), new u("ot", false, 1), new u("ist", false, 2), new u("ost", false, 1), new u("nost", 47, 1), new u("out", false, 1), new u("ovišt", false, 1), new u("iv", false, 2), new u("ov", false, 1), new u("tv", false, 1), new u("ctv", 53, 1), new u("stv", 53, 1), new u("ovstv", 55, 1), new u("ovtv", 53, 1), new u("ač", false, 1), new u("\xe1č", false, 1), new u("oň", false, 1), new u("\xe1ř", false, 1), new u("k\xe1ř", 61, 1), new u("ion\xe1ř", 61, 2), new u("\xe9ř", false, 4), new u("n\xe9ř", 64, 1), new u("\xedř", false, 6), new u("ouš", false, 1)]
        }
      }, {
        key: "a_4",
        get: function() {
          return delete t.a_4, t.a_4 = [new u("c", false, 1), new u("k", false, 1), new u("l", false, 1), new u("n", false, 1), new u("t", false, 1), new u("č", false, 1)]
        }
      }, {
        key: "a_5",
        get: function() {
          return delete t.a_5, t.a_5 = [new u("isk", false, 2), new u("\xe1k", false, 1), new u("izn", false, 2), new u("ajzn", false, 1)]
        }
      }, {
        key: "a_6",
        get: function() {
          return delete t.a_6, t.a_6 = [new u("k", false, 1), new u("ak", 0, 7), new u("ek", 0, 2), new u("anek", 2, 1), new u("enek", 2, 2), new u("inek", 2, 4), new u("onek", 2, 1), new u("unek", 2, 1), new u("\xe1nek", 2, 1), new u("aček", 2, 1), new u("eček", 2, 2), new u("iček", 2, 4), new u("oček", 2, 1), new u("uček", 2, 1), new u("\xe1ček", 2, 1), new u("\xe9ček", 2, 3), new u("\xedček", 2, 5), new u("oušek", 2, 1), new u("ik", 0, 4), new u("ank", 0, 1), new u("enk", 0, 1), new u("ink", 0, 1), new u("onk", 0, 1), new u("unk", 0, 1), new u("\xe1nk", 0, 1), new u("\xe9nk", 0, 1), new u("\xednk", 0, 1), new u("ok", 0, 8), new u("\xe1tk", 0, 1), new u("uk", 0, 9), new u("\xe1k", 0, 6), new u("\xe9k", 0, 3), new u("\xedk", 0, 5), new u("ačk", 0, 1), new u("ečk", 0, 1), new u("ičk", 0, 1), new u("očk", 0, 1), new u("učk", 0, 1), new u("\xe1čk", 0, 1), new u("\xe9čk", 0, 1), new u("\xedčk", 0, 1), new u("ušk", 0, 1)]
        }
      }, {
        key: "a_7",
        get: function() {
          return delete t.a_7, t.a_7 = [new u("ejš", false, 2), new u("ějš", false, 1)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4, 18, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64]
        }
      }]), t
    }(c),
    f = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_mark_regions$esjava$0",
        value: function() {
          var e = true,
            i = true;
          this.I_p1 = this.limit, e = this.cursor;
          var s = this.cursor + 3;
          if (0 > s || s > this.limit) returnfalse;
          this.cursor = s, this.I_x = this.cursor, this.cursor = e;
          V: for (;;) {
            i = this.cursor;
            do {
              if (!this.in_grouping$esjava$3(t.g_v, 97, 248)) break;
              this.cursor = i;
              break V
            } while (false);
            if (this.cursor = i, this.cursor >= this.limit) returnfalse;
            this.cursor++
          }
          S: for (;;) {
            do {
              if (!this.out_grouping$esjava$3(t.g_v, 97, 248)) break;
              break S
            } while (false);
            if (this.cursor >= this.limit) returnfalse;
            this.cursor++
          }
          this.I_p1 = this.cursor;
          do {
            if (!(this.I_p1 < this.I_x)) break;
            this.I_p1 = this.I_x
          } while (false);
          returntrue
        }
      }, {
        key: "r_main_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          if (i = this.limit - this.cursor, this.cursor < this.I_p1) returnfalse;
          if (this.cursor = this.I_p1, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_0))) return this.limit_backward = s, false;
          switch (this.bra = this.cursor, this.limit_backward = s, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!this.in_grouping_b$esjava$3(t.g_s_ending, 97, 229)) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_consonant_pair$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          return e = this.limit - this.cursor, i = this.limit - this.cursor, !(this.cursor < this.I_p1) && ((this.cursor = this.I_p1, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, 0 === this.find_among_b$esjava$1(t.a_1)) ? (this.limit_backward = s, false) : (this.bra = this.cursor, this.limit_backward = s, this.cursor = this.limit - e, !(this.cursor <= this.limit_backward) && (this.cursor--, this.bra = this.cursor, this.slice_del$esjava$0(), true)))
        }
      }, {
        key: "r_other_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true;
          i = this.limit - this.cursor;
          do {
            if (this.ket = this.cursor, !this.eq_s_b$esjava$1("st") || (this.bra = this.cursor, !this.eq_s_b$esjava$1("ig"))) break;
            this.slice_del$esjava$0()
          } while (false);
          if (this.cursor = this.limit - i, s = this.limit - this.cursor, this.cursor < this.I_p1) returnfalse;
          if (this.cursor = this.I_p1, r = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - s, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_2))) return this.limit_backward = r, false;
          switch (this.bra = this.cursor, this.limit_backward = r, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0(), a = this.limit - this.cursor;
              do
                if (!this.r_consonant_pair$esjava$0()) break; while (false);
              this.cursor = this.limit - a;
              break;
            case 2:
              this.slice_from$esjava$1("l\xf8s")
          }
          returntrue
        }
      }, {
        key: "r_undouble$esjava$0",
        value: function() {
          var e = true,
            i = true;
          return e = this.limit - this.cursor, !(this.cursor < this.I_p1) && ((this.cursor = this.I_p1, i = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - e, this.ket = this.cursor, this.out_grouping_b$esjava$3(t.g_v, 97, 248)) ? (this.bra = this.cursor, this.S_ch = this.slice_to$esjava$1(this.S_ch), this.limit_backward = i, !!this.eq_s_b$esjava$1(this.S_ch.toString()) && (this.slice_del$esjava$0(), true)) : (this.limit_backward = i, false))
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true;
          e = this.cursor;
          do
            if (!this.r_mark_regions$esjava$0()) break; while (false);
          this.cursor = e, this.limit_backward = this.cursor, this.cursor = this.limit, i = this.limit - this.cursor;
          do
            if (!this.r_main_suffix$esjava$0()) break; while (false);
          this.cursor = this.limit - i, s = this.limit - this.cursor;
          do
            if (!this.r_consonant_pair$esjava$0()) break; while (false);
          this.cursor = this.limit - s, t = this.limit - this.cursor;
          do
            if (!this.r_other_suffix$esjava$0()) break; while (false);
          this.cursor = this.limit - t, r = this.limit - this.cursor;
          do
            if (!this.r_undouble$esjava$0()) break; while (false);
          return this.cursor = this.limit - r, this.cursor = this.limit_backward, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "I_x",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_x") ? this._$esjava$I_x : this._$esjava$I_x = 0
        },
        set: function(e) {
          this._$esjava$I_x = e
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }, {
        key: "S_ch",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$S_ch") ? this._$esjava$S_ch : this._$esjava$S_ch = new o
        },
        set: function(e) {
          this._$esjava$S_ch = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("hed", false, 1), new u("ethed", 0, 1), new u("ered", false, 1), new u("e", false, 1), new u("erede", 3, 1), new u("ende", 3, 1), new u("erende", 5, 1), new u("ene", 3, 1), new u("erne", 3, 1), new u("ere", 3, 1), new u("en", false, 1), new u("heden", 10, 1), new u("eren", 10, 1), new u("er", false, 1), new u("heder", 13, 1), new u("erer", 13, 1), new u("s", false, 2), new u("heds", 16, 1), new u("es", 16, 1), new u("endes", 18, 1), new u("erendes", 19, 1), new u("enes", 18, 1), new u("ernes", 18, 1), new u("eres", 18, 1), new u("ens", 16, 1), new u("hedens", 24, 1), new u("erens", 24, 1), new u("ers", 16, 1), new u("ets", 16, 1), new u("erets", 28, 1), new u("et", false, 1), new u("eret", 30, 1)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("gd", false, false), new u("dt", false, false), new u("gt", false, false), new u("kt", false, false)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("ig", false, 1), new u("lig", 0, 1), new u("elig", 1, 1), new u("els", false, 1), new u("l\xf8st", false, 2)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128]
        }
      }, {
        key: "g_s_ending",
        get: function() {
          return delete t.g_s_ending, t.g_s_ending = [239, 254, 42, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]
        }
      }]), t
    }(c),
    k = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_prelude$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true,
            h = true;
          i = this.cursor;
          P: for (;;) {
            s = this.cursor;
            i: do {
              if (this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_0))) break;
              switch (this.ket = this.cursor, e) {
                case 0:
                  break i;
                case 1:
                  this.slice_from$esjava$1("a");
                  break;
                case 2:
                  this.slice_from$esjava$1("e");
                  break;
                case 3:
                  this.slice_from$esjava$1("i");
                  break;
                case 4:
                  this.slice_from$esjava$1("o");
                  break;
                case 5:
                  this.slice_from$esjava$1("u");
                  break;
                case 6:
                  if (this.cursor >= this.limit) break i;
                  this.cursor++
              }
              continue P
            } while (false);
            this.cursor = s;
            break
          }
          this.cursor = i, r = this.cursor;
          do {
            if (this.bra = this.cursor, !this.eq_s$esjava$1("y")) {
              this.cursor = r;
              break
            }
            this.ket = this.cursor, this.slice_from$esjava$1("Y")
          } while (false);
          z: for (;;) {
            a = this.cursor;
            r: do {
              m: for (;;) {
                n = this.cursor;
                n: do {
                  if (!this.in_grouping$esjava$3(t.g_v, 97, 232)) break;
                  this.bra = this.cursor;
                  A: do {
                    h = this.cursor;
                    do {
                      if (!this.eq_s$esjava$1("i") || (this.ket = this.cursor, !this.in_grouping$esjava$3(t.g_v, 97, 232))) break;
                      this.slice_from$esjava$1("I");
                      break A
                    } while (false);
                    if (this.cursor = h, !this.eq_s$esjava$1("y")) break n;
                    this.ket = this.cursor, this.slice_from$esjava$1("Y")
                  } while (false);
                  this.cursor = n;
                  break m
                } while (false);
                if (this.cursor = n, this.cursor >= this.limit) break r;
                this.cursor++
              }
              continue z
            } while (false);
            this.cursor = a;
            break
          }
          returntrue
        }
      }, {
        key: "r_mark_regions$esjava$0",
        value: function() {
          this.I_p1 = this.limit, this.I_p2 = this.limit;
          V: for (;;) {
            do {
              if (!this.in_grouping$esjava$3(t.g_v, 97, 232)) break;
              break V
            } while (false);
            if (this.cursor >= this.limit) returnfalse;
            this.cursor++
          }
          S: for (;;) {
            do {
              if (!this.out_grouping$esjava$3(t.g_v, 97, 232)) break;
              break S
            } while (false);
            if (this.cursor >= this.limit) returnfalse;
            this.cursor++
          }
          this.I_p1 = this.cursor;
          do {
            if (!(this.I_p1 < 3)) break;
            this.I_p1 = 3
          } while (false);
          m: for (;;) {
            do {
              if (!this.in_grouping$esjava$3(t.g_v, 97, 232)) break;
              break m
            } while (false);
            if (this.cursor >= this.limit) returnfalse;
            this.cursor++
          }
          j: for (;;) {
            do {
              if (!this.out_grouping$esjava$3(t.g_v, 97, 232)) break;
              break j
            } while (false);
            if (this.cursor >= this.limit) returnfalse;
            this.cursor++
          }
          return this.I_p2 = this.cursor, true
        }
      }, {
        key: "r_postlude$esjava$0",
        value: function() {
          var e = true,
            i = true;
          P: for (;;) {
            i = this.cursor;
            i: do {
              if (this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_1))) break;
              switch (this.ket = this.cursor, e) {
                case 0:
                  break i;
                case 1:
                  this.slice_from$esjava$1("y");
                  break;
                case 2:
                  this.slice_from$esjava$1("i");
                  break;
                case 3:
                  if (this.cursor >= this.limit) break i;
                  this.cursor++
              }
              continue P
            } while (false);
            this.cursor = i;
            break
          }
          returntrue
        }
      }, {
        key: "r_R1$esjava$0",
        value: function() {
          return this.I_p1 <= this.cursor
        }
      }, {
        key: "r_R2$esjava$0",
        value: function() {
          return this.I_p2 <= this.cursor
        }
      }, {
        key: "r_undouble$esjava$0",
        value: function() {
          var e = true;
          return e = this.limit - this.cursor, 0 !== this.find_among_b$esjava$1(t.a_2) && (this.cursor = this.limit - e, this.ket = this.cursor, !(this.cursor <= this.limit_backward) && (this.cursor--, this.bra = this.cursor, this.slice_del$esjava$0(), true))
        }
      }, {
        key: "r_e_ending$esjava$0",
        value: function() {
          var e = true;
          return this.B_e_found = false, this.ket = this.cursor, !!this.eq_s_b$esjava$1("e") && (this.bra = this.cursor, !!this.r_R1$esjava$0() && (e = this.limit - this.cursor, !!this.out_grouping_b$esjava$3(t.g_v, 97, 232) && (this.cursor = this.limit - e, this.slice_del$esjava$0(), this.B_e_found = true, !!this.r_undouble$esjava$0())))
        }
      }, {
        key: "r_en_ending$esjava$0",
        value: function() {
          var e = true,
            i = true;
          if (!this.r_R1$esjava$0() || (e = this.limit - this.cursor, !this.out_grouping_b$esjava$3(t.g_v, 97, 232))) returnfalse;
          this.cursor = this.limit - e, i = this.limit - this.cursor;
          do {
            if (!this.eq_s_b$esjava$1("gem")) break;
            returnfalse
          } while (false);
          return this.cursor = this.limit - i, this.slice_del$esjava$0(), !!this.r_undouble$esjava$0()
        }
      }, {
        key: "r_standard_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true,
            c = true,
            _ = true;
          i = this.limit - this.cursor;
          e: do {
            if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_3))) break;
            switch (this.bra = this.cursor, e) {
              case 0:
                break e;
              case 1:
                if (!this.r_R1$esjava$0()) break e;
                this.slice_from$esjava$1("heid");
                break;
              case 2:
                if (!this.r_en_ending$esjava$0()) break e;
                break;
              case 3:
                if (!this.r_R1$esjava$0() || !this.out_grouping_b$esjava$3(t.g_v_j, 97, 232)) break e;
                this.slice_del$esjava$0()
            }
          } while (false);
          this.cursor = this.limit - i, s = this.limit - this.cursor;
          do
            if (!this.r_e_ending$esjava$0()) break; while (false);
          this.cursor = this.limit - s, r = this.limit - this.cursor;
          s: do {
            if (this.ket = this.cursor, !this.eq_s_b$esjava$1("heid") || (this.bra = this.cursor, !this.r_R2$esjava$0())) break;
            a = this.limit - this.cursor;
            do {
              if (!this.eq_s_b$esjava$1("c")) break;
              break s
            } while (false);
            if (this.cursor = this.limit - a, this.slice_del$esjava$0(), this.ket = this.cursor, !this.eq_s_b$esjava$1("en") || (this.bra = this.cursor, !this.r_en_ending$esjava$0())) break
          } while (false);
          this.cursor = this.limit - r, n = this.limit - this.cursor;
          r: do {
            if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_4))) break;
            switch (this.bra = this.cursor, e) {
              case 0:
                break r;
              case 1:
                if (!this.r_R2$esjava$0()) break r;
                this.slice_del$esjava$0();
                a: do {
                  h = this.limit - this.cursor;
                  n: do {
                    if (this.ket = this.cursor, !this.eq_s_b$esjava$1("ig") || (this.bra = this.cursor, !this.r_R2$esjava$0())) break;
                    o = this.limit - this.cursor;
                    do {
                      if (!this.eq_s_b$esjava$1("e")) break;
                      break n
                    } while (false);
                    this.cursor = this.limit - o, this.slice_del$esjava$0();
                    break a
                  } while (false);
                  if (this.cursor = this.limit - h, !this.r_undouble$esjava$0()) break r
                } while (false);
                break;
              case 2:
                if (!this.r_R2$esjava$0()) break r;
                u = this.limit - this.cursor;
                do {
                  if (!this.eq_s_b$esjava$1("e")) break;
                  break r
                } while (false);
                this.cursor = this.limit - u, this.slice_del$esjava$0();
                break;
              case 3:
                if (!this.r_R2$esjava$0() || (this.slice_del$esjava$0(), !this.r_e_ending$esjava$0())) break r;
                break;
              case 4:
                if (!this.r_R2$esjava$0()) break r;
                this.slice_del$esjava$0();
                break;
              case 5:
                if (!this.r_R2$esjava$0() || !this.B_e_found) break r;
                this.slice_del$esjava$0()
            }
          } while (false);
          this.cursor = this.limit - n, c = this.limit - this.cursor;
          do {
            if (!this.out_grouping_b$esjava$3(t.g_v_I, 73, 232) || (_ = this.limit - this.cursor, 0 === this.find_among_b$esjava$1(t.a_5) || !this.out_grouping_b$esjava$3(t.g_v, 97, 232)) || (this.cursor = this.limit - _, this.ket = this.cursor, this.cursor <= this.limit_backward)) break;
            this.cursor--, this.bra = this.cursor, this.slice_del$esjava$0()
          } while (false);
          return this.cursor = this.limit - c, true
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true;
          e = this.cursor;
          do
            if (!this.r_prelude$esjava$0()) break; while (false);
          this.cursor = e, i = this.cursor;
          do
            if (!this.r_mark_regions$esjava$0()) break; while (false);
          this.cursor = i, this.limit_backward = this.cursor, this.cursor = this.limit, s = this.limit - this.cursor;
          do
            if (!this.r_standard_suffix$esjava$0()) break; while (false);
          this.cursor = this.limit - s, this.cursor = this.limit_backward, t = this.cursor;
          do
            if (!this.r_postlude$esjava$0()) break; while (false);
          return this.cursor = t, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "I_p2",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p2") ? this._$esjava$I_p2 : this._$esjava$I_p2 = 0
        },
        set: function(e) {
          this._$esjava$I_p2 = e
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }, {
        key: "B_e_found",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$B_e_found") ? this._$esjava$B_e_found : this._$esjava$B_e_found = false
        },
        set: function(e) {
          this._$esjava$B_e_found = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("", false, 6), new u("\xe1", 0, 1), new u("\xe4", 0, 1), new u("\xe9", 0, 2), new u("\xeb", 0, 2), new u("\xed", 0, 3), new u("\xef", 0, 3), new u("\xf3", 0, 4), new u("\xf6", 0, 4), new u("\xfa", 0, 5), new u("\xfc", 0, 5)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("", false, 3), new u("I", 0, 2), new u("Y", 0, 1)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("dd", false, false), new u("kk", false, false), new u("tt", false, false)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("ene", false, 2), new u("se", false, 3), new u("en", false, 2), new u("heden", 2, 1), new u("s", false, 3)]
        }
      }, {
        key: "a_4",
        get: function() {
          return delete t.a_4, t.a_4 = [new u("end", false, 1), new u("ig", false, 2), new u("ing", false, 1), new u("lijk", false, 3), new u("baar", false, 4), new u("bar", false, 5)]
        }
      }, {
        key: "a_5",
        get: function() {
          return delete t.a_5, t.a_5 = [new u("aa", false, false), new u("ee", false, false), new u("oo", false, false), new u("uu", false, false)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128]
        }
      }, {
        key: "g_v_I",
        get: function() {
          return delete t.g_v_I, t.g_v_I = [1, 0, 0, 17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128]
        }
      }, {
        key: "g_v_j",
        get: function() {
          return delete t.g_v_j, t.g_v_j = [17, 67, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128]
        }
      }]), t
    }(c),
    d = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_prelude$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true;
          this.B_Y_found = false, e = this.cursor;
          do {
            if (this.bra = this.cursor, !this.eq_s$esjava$1("'")) break;
            this.ket = this.cursor, this.slice_del$esjava$0()
          } while (false);
          this.cursor = e, i = this.cursor;
          do {
            if (this.bra = this.cursor, !this.eq_s$esjava$1("y")) break;
            this.ket = this.cursor, this.slice_from$esjava$1("Y"), this.B_Y_found = true
          } while (false);
          this.cursor = i, s = this.cursor;
          do z: for (;;) {
            r = this.cursor;
            r: do {
              m: for (;;) {
                a = this.cursor;
                do {
                  if (!this.in_grouping$esjava$3(t.g_v, 97, 121) || (this.bra = this.cursor, !this.eq_s$esjava$1("y"))) break;
                  this.ket = this.cursor, this.cursor = a;
                  break m
                } while (false);
                if (this.cursor = a, this.cursor >= this.limit) break r;
                this.cursor++
              }
              this.slice_from$esjava$1("Y"),
              this.B_Y_found = true;
              continue z
            } while (false);
            this.cursor = r;
            break
          }
          while (false);
          return this.cursor = s, true
        }
      }, {
        key: "r_mark_regions$esjava$0",
        value: function() {
          var e = true,
            i = true;
          this.I_p1 = this.limit, this.I_p2 = this.limit, e = this.cursor;
          e: do {
            i: do {
              i = this.cursor;
              do {
                if (0 === this.find_among$esjava$1(t.a_0)) break;
                break i
              } while (false);
              this.cursor = i;
              b: for (;;) {
                do {
                  if (!this.in_grouping$esjava$3(t.g_v, 97, 121)) break;
                  break b
                } while (false);
                if (this.cursor >= this.limit) break e;
                this.cursor++
              }
              m: for (;;) {
                do {
                  if (!this.out_grouping$esjava$3(t.g_v, 97, 121)) break;
                  break m
                } while (false);
                if (this.cursor >= this.limit) break e;
                this.cursor++
              }
            } while (false);this.I_p1 = this.cursor;j: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 121)) break;
                break j
              } while (false);
              if (this.cursor >= this.limit) break e;
              this.cursor++
            }
            B: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 121)) break;
                break B
              } while (false);
              if (this.cursor >= this.limit) break e;
              this.cursor++
            }
            this.I_p2 = this.cursor
          } while (false);
          return this.cursor = e, true
        }
      }, {
        key: "r_shortv$esjava$0",
        value: function() {
          var e = true;
          e: do {
            e = this.limit - this.cursor;
            do {
              if (!this.out_grouping_b$esjava$3(t.g_v_WXY, 89, 121) || !this.in_grouping_b$esjava$3(t.g_v, 97, 121) || !this.out_grouping_b$esjava$3(t.g_v, 97, 121)) break;
              break e
            } while (false);
            if (this.cursor = this.limit - e, !this.out_grouping_b$esjava$3(t.g_v, 97, 121) || !this.in_grouping_b$esjava$3(t.g_v, 97, 121) || this.cursor > this.limit_backward) returnfalse
          } while (false);
          returntrue
        }
      }, {
        key: "r_R1$esjava$0",
        value: function() {
          return this.I_p1 <= this.cursor
        }
      }, {
        key: "r_R2$esjava$0",
        value: function() {
          return this.I_p2 <= this.cursor
        }
      }, {
        key: "r_Step_1a$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          i = this.limit - this.cursor;
          e: do {
            if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_1))) {
              this.cursor = this.limit - i;
              break
            }
            switch (this.bra = this.cursor, e) {
              case 0:
                this.cursor = this.limit - i;
                break e;
              case 1:
                this.slice_del$esjava$0()
            }
          } while (false);
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_2))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_from$esjava$1("ss");
              break;
            case 2:
              i: do {
                s = this.limit - this.cursor;
                do {
                  var r = this.cursor - 2;
                  if (this.limit_backward > r || r > this.limit) break;
                  this.cursor = r, this.slice_from$esjava$1("i");
                  break i
                } while (false);
                this.cursor = this.limit - s, this.slice_from$esjava$1("ie")
              } while (false);
              break;
            case 3:
              if (this.cursor <= this.limit_backward) returnfalse;
              this.cursor--;
              b: for (;;) {
                do {
                  if (!this.in_grouping_b$esjava$3(t.g_v, 97, 121)) break;
                  break b
                } while (false);
                if (this.cursor <= this.limit_backward) returnfalse;
                this.cursor--
              }
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Step_1b$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_4))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_R1$esjava$0()) returnfalse;
              this.slice_from$esjava$1("ee");
              break;
            case 2:
              i = this.limit - this.cursor;
              V: for (;;) {
                do {
                  if (!this.in_grouping_b$esjava$3(t.g_v, 97, 121)) break;
                  break V
                } while (false);
                if (this.cursor <= this.limit_backward) returnfalse;
                this.cursor--
              }
              if (this.cursor = this.limit - i, this.slice_del$esjava$0(), s = this.limit - this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_3))) returnfalse;
              switch (this.cursor = this.limit - s, e) {
                case 0:
                  returnfalse;
                case 1:
                  var a = this.cursor;
                  this.insert$esjava$3(this.cursor, this.cursor, "e"), this.cursor = a;
                  break;
                case 2:
                  if (this.ket = this.cursor, this.cursor <= this.limit_backward) returnfalse;
                  this.cursor--, this.bra = this.cursor, this.slice_del$esjava$0();
                  break;
                case 3:
                  if (this.cursor !== this.I_p1 || (r = this.limit - this.cursor, !this.r_shortv$esjava$0())) returnfalse;
                  this.cursor = this.limit - r;
                  var a = this.cursor;
                  this.insert$esjava$3(this.cursor, this.cursor, "e"), this.cursor = a
              }
          }
          returntrue
        }
      }, {
        key: "r_Step_1c$esjava$0",
        value: function() {
          var e = true,
            i = true;
          this.ket = this.cursor;
          e: do {
            e = this.limit - this.cursor;
            do {
              if (!this.eq_s_b$esjava$1("y")) break;
              break e
            } while (false);
            if (this.cursor = this.limit - e, !this.eq_s_b$esjava$1("Y")) returnfalse
          } while (false);
          if (this.bra = this.cursor, !this.out_grouping_b$esjava$3(t.g_v, 97, 121)) returnfalse;
          i = this.limit - this.cursor;
          do {
            if (this.cursor > this.limit_backward) break;
            returnfalse
          } while (false);
          return this.cursor = this.limit - i, this.slice_from$esjava$1("i"), true
        }
      }, {
        key: "r_Step_2$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_5)) || (this.bra = this.cursor, !this.r_R1$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_from$esjava$1("tion");
              break;
            case 2:
              this.slice_from$esjava$1("ence");
              break;
            case 3:
              this.slice_from$esjava$1("ance");
              break;
            case 4:
              this.slice_from$esjava$1("able");
              break;
            case 5:
              this.slice_from$esjava$1("ent");
              break;
            case 6:
              this.slice_from$esjava$1("ize");
              break;
            case 7:
              this.slice_from$esjava$1("ate");
              break;
            case 8:
              this.slice_from$esjava$1("al");
              break;
            case 9:
            case 14:
              this.slice_from$esjava$1("ful");
              break;
            case 10:
              this.slice_from$esjava$1("ous");
              break;
            case 11:
              this.slice_from$esjava$1("ive");
              break;
            case 12:
              this.slice_from$esjava$1("ble");
              break;
            case 13:
              if (!this.eq_s_b$esjava$1("l")) returnfalse;
              this.slice_from$esjava$1("og");
              break;
            case 15:
              this.slice_from$esjava$1("less");
              break;
            case 16:
              if (!this.in_grouping_b$esjava$3(t.g_valid_LI, 99, 116)) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Step_3$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_6)) || (this.bra = this.cursor, !this.r_R1$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_from$esjava$1("tion");
              break;
            case 2:
              this.slice_from$esjava$1("ate");
              break;
            case 3:
              this.slice_from$esjava$1("al");
              break;
            case 4:
              this.slice_from$esjava$1("ic");
              break;
            case 5:
              this.slice_del$esjava$0();
              break;
            case 6:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Step_4$esjava$0",
        value: function() {
          var e = true,
            i = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_7)) || (this.bra = this.cursor, !this.r_R2$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0();
              break;
            case 2:
              e: do {
                i = this.limit - this.cursor;
                do {
                  if (!this.eq_s_b$esjava$1("s")) break;
                  break e
                } while (false);
                if (this.cursor = this.limit - i, !this.eq_s_b$esjava$1("t")) returnfalse
              } while (false);
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Step_5$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_8))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              e: do {
                i = this.limit - this.cursor;
                do {
                  if (!this.r_R2$esjava$0()) break;
                  break e
                } while (false);
                if (this.cursor = this.limit - i, !this.r_R1$esjava$0()) returnfalse;
                s = this.limit - this.cursor;
                do {
                  if (!this.r_shortv$esjava$0()) break;
                  returnfalse
                } while (false);
                this.cursor = this.limit - s
              } while (false);
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!this.r_R2$esjava$0() || !this.eq_s_b$esjava$1("l")) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_exception2$esjava$0",
        value: function() {
          return this.ket = this.cursor, 0 !== this.find_among_b$esjava$1(t.a_9) && (this.bra = this.cursor, !(this.cursor > this.limit_backward))
        }
      }, {
        key: "r_exception1$esjava$0",
        value: function() {
          var e = true;
          if (this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_10)) || (this.ket = this.cursor, this.cursor < this.limit)) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_from$esjava$1("ski");
              break;
            case 2:
              this.slice_from$esjava$1("sky");
              break;
            case 3:
              this.slice_from$esjava$1("die");
              break;
            case 4:
              this.slice_from$esjava$1("lie");
              break;
            case 5:
              this.slice_from$esjava$1("tie");
              break;
            case 6:
              this.slice_from$esjava$1("idl");
              break;
            case 7:
              this.slice_from$esjava$1("gentl");
              break;
            case 8:
              this.slice_from$esjava$1("ugli");
              break;
            case 9:
              this.slice_from$esjava$1("earli");
              break;
            case 10:
              this.slice_from$esjava$1("onli");
              break;
            case 11:
              this.slice_from$esjava$1("singl")
          }
          returntrue
        }
      }, {
        key: "r_postlude$esjava$0",
        value: function() {
          var e = true,
            i = true;
          if (!this.B_Y_found) returnfalse;
          P: for (;;) {
            e = this.cursor;
            i: do {
              S: for (;;) {
                i = this.cursor;
                do {
                  if (this.bra = this.cursor, !this.eq_s$esjava$1("Y")) break;
                  this.ket = this.cursor, this.cursor = i;
                  break S
                } while (false);
                if (this.cursor = i, this.cursor >= this.limit) break i;
                this.cursor++
              }
              this.slice_from$esjava$1("y");
              continue P
            } while (false);
            this.cursor = e;
            break
          }
          returntrue
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true,
            c = true,
            _ = true,
            l = true;
          e: do {
            e = this.cursor;
            do {
              if (!this.r_exception1$esjava$0()) break;
              break e
            } while (false);
            this.cursor = e;
            s: do {
              i = this.cursor;
              do {
                var w = this.cursor + 3;
                if (0 > w || w > this.limit) break;
                this.cursor = w;
                break s
              } while (false);
              this.cursor = i;
              break e
            } while (false);
            this.cursor = e, s = this.cursor;
            do
              if (!this.r_prelude$esjava$0()) break; while (false);
            this.cursor = s, t = this.cursor;
            do
              if (!this.r_mark_regions$esjava$0()) break; while (false);
            this.cursor = t, this.limit_backward = this.cursor, this.cursor = this.limit, r = this.limit - this.cursor;
            do
              if (!this.r_Step_1a$esjava$0()) break; while (false);
            this.cursor = this.limit - r;
            A: do {
              a = this.limit - this.cursor;
              do {
                if (!this.r_exception2$esjava$0()) break;
                break A
              } while (false);
              this.cursor = this.limit - a, n = this.limit - this.cursor;
              do
                if (!this.r_Step_1b$esjava$0()) break; while (false);
              this.cursor = this.limit - n, h = this.limit - this.cursor;
              do
                if (!this.r_Step_1c$esjava$0()) break; while (false);
              this.cursor = this.limit - h, o = this.limit - this.cursor;
              do
                if (!this.r_Step_2$esjava$0()) break; while (false);
              this.cursor = this.limit - o, u = this.limit - this.cursor;
              do
                if (!this.r_Step_3$esjava$0()) break; while (false);
              this.cursor = this.limit - u, c = this.limit - this.cursor;
              do
                if (!this.r_Step_4$esjava$0()) break; while (false);
              this.cursor = this.limit - c, _ = this.limit - this.cursor;
              do
                if (!this.r_Step_5$esjava$0()) break; while (false);
              this.cursor = this.limit - _
            } while (false);
            this.cursor = this.limit_backward, l = this.cursor;
            do
              if (!this.r_postlude$esjava$0()) break; while (false);
            this.cursor = l
          } while (false);
          returntrue
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "B_Y_found",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$B_Y_found") ? this._$esjava$B_Y_found : this._$esjava$B_Y_found = false
        },
        set: function(e) {
          this._$esjava$B_Y_found = e
        }
      }, {
        key: "I_p2",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p2") ? this._$esjava$I_p2 : this._$esjava$I_p2 = 0
        },
        set: function(e) {
          this._$esjava$I_p2 = e
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("arsen", false, false), new u("commun", false, false), new u("gener", false, false)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("'", false, 1), new u("'s'", 0, 1), new u("'s", false, 1)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("ied", false, 2), new u("s", false, 3), new u("ies", 1, 2), new u("sses", 1, 1), new u("ss", 1, false), new u("us", 1, false)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("", false, 3), new u("bb", 0, 2), new u("dd", 0, 2), new u("ff", 0, 2), new u("gg", 0, 2), new u("bl", 0, 1), new u("mm", 0, 2), new u("nn", 0, 2), new u("pp", 0, 2), new u("rr", 0, 2), new u("at", 0, 1), new u("tt", 0, 2), new u("iz", 0, 1)]
        }
      }, {
        key: "a_4",
        get: function() {
          return delete t.a_4, t.a_4 = [new u("ed", false, 2), new u("eed", 0, 1), new u("ing", false, 2), new u("edly", false, 2), new u("eedly", 3, 1), new u("ingly", false, 2)]
        }
      }, {
        key: "a_5",
        get: function() {
          return delete t.a_5, t.a_5 = [new u("anci", false, 3), new u("enci", false, 2), new u("ogi", false, 13), new u("li", false, 16), new u("bli", 3, 12), new u("abli", 4, 4), new u("alli", 3, 8), new u("fulli", 3, 14), new u("lessli", 3, 15), new u("ousli", 3, 10), new u("entli", 3, 5), new u("aliti", false, 8), new u("biliti", false, 12), new u("iviti", false, 11), new u("tional", false, 1), new u("ational", 14, 7), new u("alism", false, 8), new u("ation", false, 7), new u("ization", 17, 6), new u("izer", false, 6), new u("ator", false, 7), new u("iveness", false, 11), new u("fulness", false, 9), new u("ousness", false, 10)]
        }
      }, {
        key: "a_6",
        get: function() {
          return delete t.a_6, t.a_6 = [new u("icate", false, 4), new u("ative", false, 6), new u("alize", false, 3), new u("iciti", false, 4), new u("ical", false, 4), new u("tional", false, 1), new u("ational", 5, 2), new u("ful", false, 5), new u("ness", false, 5)]
        }
      }, {
        key: "a_7",
        get: function() {
          return delete t.a_7, t.a_7 = [new u("ic", false, 1), new u("ance", false, 1), new u("ence", false, 1), new u("able", false, 1), new u("ible", false, 1), new u("ate", false, 1), new u("ive", false, 1), new u("ize", false, 1), new u("iti", false, 1), new u("al", false, 1), new u("ism", false, 1), new u("ion", false, 2), new u("er", false, 1), new u("ous", false, 1), new u("ant", false, 1), new u("ent", false, 1), new u("ment", 15, 1), new u("ement", 16, 1)]
        }
      }, {
        key: "a_8",
        get: function() {
          return delete t.a_8, t.a_8 = [new u("e", false, 1), new u("l", false, 2)]
        }
      }, {
        key: "a_9",
        get: function() {
          return delete t.a_9, t.a_9 = [new u("succeed", false, false), new u("proceed", false, false), new u("exceed", false, false), new u("canning", false, false), new u("inning", false, false), new u("earring", false, false), new u("herring", false, false), new u("outing", false, false)]
        }
      }, {
        key: "a_10",
        get: function() {
          return delete t.a_10, t.a_10 = [new u("andes", false, false), new u("atlas", false, false), new u("bias", false, false), new u("cosmos", false, false), new u("dying", false, 3), new u("early", false, 9), new u("gently", false, 7), new u("howe", false, false), new u("idly", false, 6), new u("lying", false, 4), new u("news", false, false), new u("only", false, 10), new u("singly", false, 11), new u("skies", false, 2), new u("skis", false, 1), new u("sky", false, false), new u("tying", false, 5), new u("ugly", false, 8)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [17, 65, 16, 1]
        }
      }, {
        key: "g_v_WXY",
        get: function() {
          return delete t.g_v_WXY, t.g_v_WXY = [1, 17, 65, 208, 1]
        }
      }, {
        key: "g_valid_LI",
        get: function() {
          return delete t.g_valid_LI, t.g_valid_LI = [55, 141, 2]
        }
      }]), t
    }(c),
    b = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_mark_regions$esjava$0",
        value: function() {
          var e = true,
            i = true;
          this.I_p1 = this.limit, this.I_p2 = this.limit;
          V: for (;;) {
            e = this.cursor;
            do {
              if (!this.in_grouping$esjava$3(t.g_V1, 97, 246)) break;
              this.cursor = e;
              break V
            } while (false);
            if (this.cursor = e, this.cursor >= this.limit) returnfalse;
            this.cursor++
          }
          S: for (;;) {
            do {
              if (!this.out_grouping$esjava$3(t.g_V1, 97, 246)) break;
              break S
            } while (false);
            if (this.cursor >= this.limit) returnfalse;
            this.cursor++
          }
          this.I_p1 = this.cursor;
          U: for (;;) {
            i = this.cursor;
            do {
              if (!this.in_grouping$esjava$3(t.g_V1, 97, 246)) break;
              this.cursor = i;
              break U
            } while (false);
            if (this.cursor = i, this.cursor >= this.limit) returnfalse;
            this.cursor++
          }
          Y: for (;;) {
            do {
              if (!this.out_grouping$esjava$3(t.g_V1, 97, 246)) break;
              break Y
            } while (false);
            if (this.cursor >= this.limit) returnfalse;
            this.cursor++
          }
          return this.I_p2 = this.cursor, true
        }
      }, {
        key: "r_R2$esjava$0",
        value: function() {
          return this.I_p2 <= this.cursor
        }
      }, {
        key: "r_particle_etc$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          if (i = this.limit - this.cursor, this.cursor < this.I_p1) returnfalse;
          if (this.cursor = this.I_p1, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_0))) return this.limit_backward = s, false;
          switch (this.bra = this.cursor, this.limit_backward = s, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.in_grouping_b$esjava$3(t.g_particle_end, 97, 246)) returnfalse;
              break;
            case 2:
              if (!this.r_R2$esjava$0()) returnfalse
          }
          return this.slice_del$esjava$0(), true
        }
      }, {
        key: "r_possessive$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true;
          if (i = this.limit - this.cursor, this.cursor < this.I_p1) returnfalse;
          if (this.cursor = this.I_p1, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_4))) return this.limit_backward = s, false;
          switch (this.bra = this.cursor, this.limit_backward = s, e) {
            case 0:
              returnfalse;
            case 1:
              r = this.limit - this.cursor;
              do {
                if (!this.eq_s_b$esjava$1("k")) break;
                returnfalse
              } while (false);
              this.cursor = this.limit - r, this.slice_del$esjava$0();
              break;
            case 2:
              if (this.slice_del$esjava$0(), this.ket = this.cursor, !this.eq_s_b$esjava$1("kse")) returnfalse;
              this.bra = this.cursor, this.slice_from$esjava$1("ksi");
              break;
            case 3:
              this.slice_del$esjava$0();
              break;
            case 4:
              if (0 === this.find_among_b$esjava$1(t.a_1)) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 5:
              if (0 === this.find_among_b$esjava$1(t.a_2)) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 6:
              if (0 === this.find_among_b$esjava$1(t.a_3)) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_LONG$esjava$0",
        value: function() {
          return 0 !== this.find_among_b$esjava$1(t.a_5)
        }
      }, {
        key: "r_VI$esjava$0",
        value: function() {
          return !!this.eq_s_b$esjava$1("i") && !!this.in_grouping_b$esjava$3(t.g_V2, 97, 246)
        }
      }, {
        key: "r_case_ending$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true;
          if (i = this.limit - this.cursor, this.cursor < this.I_p1) returnfalse;
          if (this.cursor = this.I_p1, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(this.a_6))) return this.limit_backward = s, false;
          switch (this.bra = this.cursor, this.limit_backward = s, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.eq_s_b$esjava$1("a")) returnfalse;
              break;
            case 2:
            case 9:
              if (!this.eq_s_b$esjava$1("e")) returnfalse;
              break;
            case 3:
              if (!this.eq_s_b$esjava$1("i")) returnfalse;
              break;
            case 4:
              if (!this.eq_s_b$esjava$1("o")) returnfalse;
              break;
            case 5:
              if (!this.eq_s_b$esjava$1("\xe4")) returnfalse;
              break;
            case 6:
              if (!this.eq_s_b$esjava$1("\xf6")) returnfalse;
              break;
            case 7:
              r = this.limit - this.cursor;
              e: do {
                a = this.limit - this.cursor;
                i: do {
                  n = this.limit - this.cursor;
                  do {
                    if (!this.r_LONG$esjava$0()) break;
                    break i
                  } while (false);
                  if (this.cursor = this.limit - n, !this.eq_s_b$esjava$1("ie")) {
                    this.cursor = this.limit - r;
                    break e
                  }
                } while (false);
                if (this.cursor = this.limit - a, this.cursor <= this.limit_backward) {
                  this.cursor = this.limit - r;
                  break
                }
                this.cursor--, this.bra = this.cursor
              } while (false);
              break;
            case 8:
              if (!this.in_grouping_b$esjava$3(t.g_V1, 97, 246) || !this.out_grouping_b$esjava$3(t.g_V1, 97, 246)) returnfalse
          }
          return this.slice_del$esjava$0(), this.B_ending_removed = true, true
        }
      }, {
        key: "r_other_endings$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true;
          if (i = this.limit - this.cursor, this.cursor < this.I_p2) returnfalse;
          if (this.cursor = this.I_p2, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_7))) return this.limit_backward = s, false;
          switch (this.bra = this.cursor, this.limit_backward = s, e) {
            case 0:
              returnfalse;
            case 1:
              r = this.limit - this.cursor;
              do {
                if (!this.eq_s_b$esjava$1("po")) break;
                returnfalse
              } while (false);
              this.cursor = this.limit - r
          }
          return this.slice_del$esjava$0(), true
        }
      }, {
        key: "r_i_plural$esjava$0",
        value: function() {
          var e = true,
            i = true;
          return e = this.limit - this.cursor, !(this.cursor < this.I_p1) && ((this.cursor = this.I_p1, i = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - e, this.ket = this.cursor, 0 === this.find_among_b$esjava$1(t.a_8)) ? (this.limit_backward = i, false) : (this.bra = this.cursor, this.limit_backward = i, this.slice_del$esjava$0(), true))
        }
      }, {
        key: "r_t_plural$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true,
            h = true;
          if (i = this.limit - this.cursor, this.cursor < this.I_p1) returnfalse;
          if (this.cursor = this.I_p1, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, !this.eq_s_b$esjava$1("t") || (this.bra = this.cursor, r = this.limit - this.cursor, !this.in_grouping_b$esjava$3(t.g_V1, 97, 246))) return this.limit_backward = s, false;
          if (this.cursor = this.limit - r, this.slice_del$esjava$0(), this.limit_backward = s, a = this.limit - this.cursor, this.cursor < this.I_p2) returnfalse;
          if (this.cursor = this.I_p2, n = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - a, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_9))) return this.limit_backward = n, false;
          switch (this.bra = this.cursor, this.limit_backward = n, e) {
            case 0:
              returnfalse;
            case 1:
              h = this.limit - this.cursor;
              do {
                if (!this.eq_s_b$esjava$1("po")) break;
                returnfalse
              } while (false);
              this.cursor = this.limit - h
          }
          return this.slice_del$esjava$0(), true
        }
      }, {
        key: "r_tidy$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true;
          if (e = this.limit - this.cursor, this.cursor < this.I_p1) returnfalse;
          this.cursor = this.I_p1, i = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - e, s = this.limit - this.cursor;
          do {
            if (r = this.limit - this.cursor, !this.r_LONG$esjava$0() || (this.cursor = this.limit - r, this.ket = this.cursor, this.cursor <= this.limit_backward)) break;
            this.cursor--, this.bra = this.cursor, this.slice_del$esjava$0()
          } while (false);
          this.cursor = this.limit - s, a = this.limit - this.cursor;
          do {
            if (this.ket = this.cursor, !this.in_grouping_b$esjava$3(t.g_AEI, 97, 228) || (this.bra = this.cursor, !this.out_grouping_b$esjava$3(t.g_V1, 97, 246))) break;
            this.slice_del$esjava$0()
          } while (false);
          this.cursor = this.limit - a, n = this.limit - this.cursor;
          s: do {
            if (this.ket = this.cursor, !this.eq_s_b$esjava$1("j")) break;
            this.bra = this.cursor;
            t: do {
              h = this.limit - this.cursor;
              do {
                if (!this.eq_s_b$esjava$1("o")) break;
                break t
              } while (false);
              if (this.cursor = this.limit - h, !this.eq_s_b$esjava$1("u")) break s
            } while (false);
            this.slice_del$esjava$0()
          } while (false);
          this.cursor = this.limit - n, o = this.limit - this.cursor;
          do {
            if (this.ket = this.cursor, !this.eq_s_b$esjava$1("o") || (this.bra = this.cursor, !this.eq_s_b$esjava$1("j"))) break;
            this.slice_del$esjava$0()
          } while (false);
          this.cursor = this.limit - o, this.limit_backward = i;
          Y: for (;;) {
            u = this.limit - this.cursor;
            do {
              if (!this.out_grouping_b$esjava$3(t.g_V1, 97, 246)) break;
              this.cursor = this.limit - u;
              break Y
            } while (false);
            if (this.cursor = this.limit - u, this.cursor <= this.limit_backward) returnfalse;
            this.cursor--
          }
          return this.ket = this.cursor, !(this.cursor <= this.limit_backward) && (this.cursor--, this.bra = this.cursor, this.S_x = this.slice_to$esjava$1(this.S_x), !!this.eq_s_b$esjava$1(this.S_x.toString()) && (this.slice_del$esjava$0(), true))
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true;
          e = this.cursor;
          do
            if (!this.r_mark_regions$esjava$0()) break; while (false);
          this.cursor = e, this.B_ending_removed = false, this.limit_backward = this.cursor, this.cursor = this.limit, i = this.limit - this.cursor;
          do
            if (!this.r_particle_etc$esjava$0()) break; while (false);
          this.cursor = this.limit - i, s = this.limit - this.cursor;
          do
            if (!this.r_possessive$esjava$0()) break; while (false);
          this.cursor = this.limit - s, t = this.limit - this.cursor;
          do
            if (!this.r_case_ending$esjava$0()) break; while (false);
          this.cursor = this.limit - t, r = this.limit - this.cursor;
          do
            if (!this.r_other_endings$esjava$0()) break; while (false);
          this.cursor = this.limit - r;
          a: do {
            a = this.limit - this.cursor;
            do {
              if (!this.B_ending_removed) break;
              n = this.limit - this.cursor;
              do
                if (!this.r_i_plural$esjava$0()) break; while (false);
              this.cursor = this.limit - n;
              break a
            } while (false);
            this.cursor = this.limit - a, h = this.limit - this.cursor;
            do
              if (!this.r_t_plural$esjava$0()) break; while (false);
            this.cursor = this.limit - h
          } while (false);
          o = this.limit - this.cursor;
          do
            if (!this.r_tidy$esjava$0()) break; while (false);
          return this.cursor = this.limit - o, this.cursor = this.limit_backward, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "r_LONG",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.r_LONG$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "r_LONG", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "r_VI",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.r_VI$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "r_VI", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "es6bridge",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$es6bridge") ? this._$esjava$es6bridge : this._$esjava$es6bridge = this
        },
        set: function(e) {
          this._$esjava$es6bridge = e
        }
      }, {
        key: "a_6",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$a_6") ? this._$esjava$a_6 : this._$esjava$a_6 = [new u("a", false, 8), new u("lla", 0, false), new u("na", 0, false), new u("ssa", 0, false), new u("ta", 0, false), new u("lta", 4, false), new u("sta", 4, false), new u("tta", 4, 9), new u("lle", false, false), new u("ine", false, false), new u("ksi", false, false), new u("n", false, 7), new u("han", 11, 1), new u("den", 11, false, "r_VI", this.es6bridge), new u("seen", 11, false, "r_LONG", this.es6bridge), new u("hen", 11, 2), new u("tten", 11, false, "r_VI", this.es6bridge), new u("hin", 11, 3), new u("siin", 11, false, "r_VI", this.es6bridge), new u("hon", 11, 4), new u("h\xe4n", 11, 5), new u("h\xf6n", 11, 6), new u("\xe4", false, 8), new u("ll\xe4", 22, false), new u("n\xe4", 22, false), new u("ss\xe4", 22, false), new u("t\xe4", 22, false), new u("lt\xe4", 26, false), new u("st\xe4", 26, false), new u("tt\xe4", 26, 9)]
        },
        set: function(e) {
          this._$esjava$a_6 = e
        }
      }, {
        key: "B_ending_removed",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$B_ending_removed") ? this._$esjava$B_ending_removed : this._$esjava$B_ending_removed = false
        },
        set: function(e) {
          this._$esjava$B_ending_removed = e
        }
      }, {
        key: "S_x",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$S_x") ? this._$esjava$S_x : this._$esjava$S_x = new o
        },
        set: function(e) {
          this._$esjava$S_x = e
        }
      }, {
        key: "I_p2",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p2") ? this._$esjava$I_p2 : this._$esjava$I_p2 = 0
        },
        set: function(e) {
          this._$esjava$I_p2 = e
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("pa", false, 1), new u("sti", false, 2), new u("kaan", false, 1), new u("han", false, 1), new u("kin", false, 1), new u("h\xe4n", false, 1), new u("k\xe4\xe4n", false, 1), new u("ko", false, 1), new u("p\xe4", false, 1), new u("k\xf6", false, 1)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("lla", false, false), new u("na", false, false), new u("ssa", false, false), new u("ta", false, false), new u("lta", 3, false), new u("sta", 3, false)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("ll\xe4", false, false), new u("n\xe4", false, false), new u("ss\xe4", false, false), new u("t\xe4", false, false), new u("lt\xe4", 3, false), new u("st\xe4", 3, false)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("lle", false, false), new u("ine", false, false)]
        }
      }, {
        key: "a_4",
        get: function() {
          return delete t.a_4, t.a_4 = [new u("nsa", false, 3), new u("mme", false, 3), new u("nne", false, 3), new u("ni", false, 2), new u("si", false, 1), new u("an", false, 4), new u("en", false, 6), new u("\xe4n", false, 5), new u("ns\xe4", false, 3)]
        }
      }, {
        key: "a_5",
        get: function() {
          return delete t.a_5, t.a_5 = [new u("aa", false, false), new u("ee", false, false), new u("ii", false, false), new u("oo", false, false), new u("uu", false, false), new u("\xe4\xe4", false, false), new u("\xf6\xf6", false, false)]
        }
      }, {
        key: "a_7",
        get: function() {
          return delete t.a_7, t.a_7 = [new u("eja", false, false), new u("mma", false, 1), new u("imma", 1, false), new u("mpa", false, 1), new u("impa", 3, false), new u("mmi", false, 1), new u("immi", 5, false), new u("mpi", false, 1), new u("impi", 7, false), new u("ej\xe4", false, false), new u("mm\xe4", false, 1), new u("imm\xe4", 10, false), new u("mp\xe4", false, 1), new u("imp\xe4", 12, false)]
        }
      }, {
        key: "a_8",
        get: function() {
          return delete t.a_8, t.a_8 = [new u("i", false, false), new u("j", false, false)]
        }
      }, {
        key: "a_9",
        get: function() {
          return delete t.a_9, t.a_9 = [new u("mma", false, 1), new u("imma", 0, false)]
        }
      }, {
        key: "g_AEI",
        get: function() {
          return delete t.g_AEI, t.g_AEI = [17, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8]
        }
      }, {
        key: "g_V1",
        get: function() {
          return delete t.g_V1, t.g_V1 = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32]
        }
      }, {
        key: "g_V2",
        get: function() {
          return delete t.g_V2, t.g_V2 = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32]
        }
      }, {
        key: "g_particle_end",
        get: function() {
          return delete t.g_particle_end, t.g_particle_end = [17, 97, 24, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32]
        }
      }]), t
    }(c),
    m = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_prelude$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true;
          P: for (;;) {
            e = this.cursor;
            i: do {
              S: for (;;) {
                i = this.cursor;
                t: do {
                  r: do {
                    s = this.cursor;
                    a: do {
                      if (!this.in_grouping$esjava$3(t.g_v, 97, 251)) break;
                      this.bra = this.cursor;
                      n: do {
                        r = this.cursor;
                        do {
                          if (!this.eq_s$esjava$1("u") || (this.ket = this.cursor, !this.in_grouping$esjava$3(t.g_v, 97, 251))) break;
                          this.slice_from$esjava$1("U");
                          break n
                        } while (false);
                        this.cursor = r;
                        do {
                          if (!this.eq_s$esjava$1("i") || (this.ket = this.cursor, !this.in_grouping$esjava$3(t.g_v, 97, 251))) break;
                          this.slice_from$esjava$1("I");
                          break n
                        } while (false);
                        if (this.cursor = r, !this.eq_s$esjava$1("y")) break a;
                        this.ket = this.cursor, this.slice_from$esjava$1("Y")
                      } while (false);
                      break r
                    } while (false);
                    this.cursor = s;
                    do {
                      if (this.bra = this.cursor, !this.eq_s$esjava$1("y") || (this.ket = this.cursor, !this.in_grouping$esjava$3(t.g_v, 97, 251))) break;
                      this.slice_from$esjava$1("Y");
                      break r
                    } while (false);
                    if (this.cursor = s, !this.eq_s$esjava$1("q") || (this.bra = this.cursor, !this.eq_s$esjava$1("u"))) break t;
                    this.ket = this.cursor, this.slice_from$esjava$1("U")
                  } while (false);this.cursor = i;
                  break S
                } while (false);
                if (this.cursor = i, this.cursor >= this.limit) break i;
                this.cursor++
              }
              continue P
            } while (false);
            this.cursor = e;
            break
          }
          returntrue
        }
      }, {
        key: "r_mark_regions$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          this.I_pV = this.limit, this.I_p1 = this.limit, this.I_p2 = this.limit, e = this.cursor;
          e: do {
            i: do {
              i = this.cursor;
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 251) || !this.in_grouping$esjava$3(t.g_v, 97, 251) || this.cursor >= this.limit) break;
                this.cursor++;
                break i
              } while (false);
              this.cursor = i;
              do {
                if (0 === this.find_among$esjava$1(t.a_0)) break;
                break i
              } while (false);
              if (this.cursor = i, this.cursor >= this.limit) break e;
              this.cursor++;
              U: for (;;) {
                do {
                  if (!this.in_grouping$esjava$3(t.g_v, 97, 251)) break;
                  break U
                } while (false);
                if (this.cursor >= this.limit) break e;
                this.cursor++
              }
            } while (false);this.I_pV = this.cursor
          } while (false);
          this.cursor = e, s = this.cursor;
          n: do {
            j: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 251)) break;
                break j
              } while (false);
              if (this.cursor >= this.limit) break n;
              this.cursor++
            }
            B: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 251)) break;
                break B
              } while (false);
              if (this.cursor >= this.limit) break n;
              this.cursor++
            }
            this.I_p1 = this.cursor;p: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 251)) break;
                break p
              } while (false);
              if (this.cursor >= this.limit) break n;
              this.cursor++
            }
            N: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 251)) break;
                break N
              } while (false);
              if (this.cursor >= this.limit) break n;
              this.cursor++
            }
            this.I_p2 = this.cursor
          } while (false);
          return this.cursor = s, true
        }
      }, {
        key: "r_postlude$esjava$0",
        value: function() {
          var e = true,
            i = true;
          P: for (;;) {
            i = this.cursor;
            i: do {
              if (this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_1))) break;
              switch (this.ket = this.cursor, e) {
                case 0:
                  break i;
                case 1:
                  this.slice_from$esjava$1("i");
                  break;
                case 2:
                  this.slice_from$esjava$1("u");
                  break;
                case 3:
                  this.slice_from$esjava$1("y");
                  break;
                case 4:
                  if (this.cursor >= this.limit) break i;
                  this.cursor++
              }
              continue P
            } while (false);
            this.cursor = i;
            break
          }
          returntrue
        }
      }, {
        key: "r_RV$esjava$0",
        value: function() {
          return this.I_pV <= this.cursor
        }
      }, {
        key: "r_R1$esjava$0",
        value: function() {
          return this.I_p1 <= this.cursor
        }
      }, {
        key: "r_R2$esjava$0",
        value: function() {
          return this.I_p2 <= this.cursor
        }
      }, {
        key: "r_standard_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true,
            c = true,
            _ = true,
            l = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_4))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), i = this.limit - this.cursor;
              do {
                if (this.ket = this.cursor, !this.eq_s_b$esjava$1("ic")) {
                  this.cursor = this.limit - i;
                  break
                }
                this.bra = this.cursor;
                i: do {
                  s = this.limit - this.cursor;
                  do {
                    if (!this.r_R2$esjava$0()) break;
                    this.slice_del$esjava$0();
                    break i
                  } while (false);
                  this.cursor = this.limit - s, this.slice_from$esjava$1("iqU")
                } while (false)
              } while (false);
              break;
            case 3:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_from$esjava$1("log");
              break;
            case 4:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_from$esjava$1("u");
              break;
            case 5:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_from$esjava$1("ent");
              break;
            case 6:
              if (!this.r_RV$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), r = this.limit - this.cursor;
              t: do {
                if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_2))) {
                  this.cursor = this.limit - r;
                  break
                }
                switch (this.bra = this.cursor, e) {
                  case 0:
                    this.cursor = this.limit - r;
                    break t;
                  case 1:
                    if (!this.r_R2$esjava$0() || (this.slice_del$esjava$0(), this.ket = this.cursor, !this.eq_s_b$esjava$1("at")) || (this.bra = this.cursor, !this.r_R2$esjava$0())) {
                      this.cursor = this.limit - r;
                      break t
                    }
                    this.slice_del$esjava$0();
                    break;
                  case 2:
                    r: do {
                      a = this.limit - this.cursor;
                      do {
                        if (!this.r_R2$esjava$0()) break;
                        this.slice_del$esjava$0();
                        break r
                      } while (false);
                      if (this.cursor = this.limit - a, !this.r_R1$esjava$0()) {
                        this.cursor = this.limit - r;
                        break t
                      }
                      this.slice_from$esjava$1("eux")
                    } while (false);
                    break;
                  case 3:
                    if (!this.r_R2$esjava$0()) {
                      this.cursor = this.limit - r;
                      break t
                    }
                    this.slice_del$esjava$0();
                    break;
                  case 4:
                    if (!this.r_RV$esjava$0()) {
                      this.cursor = this.limit - r;
                      break t
                    }
                    this.slice_from$esjava$1("i")
                }
              } while (false);
              break;
            case 7:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), n = this.limit - this.cursor;
              n: do {
                if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_3))) {
                  this.cursor = this.limit - n;
                  break
                }
                switch (this.bra = this.cursor, e) {
                  case 0:
                    this.cursor = this.limit - n;
                    break n;
                  case 1:
                    A: do {
                      h = this.limit - this.cursor;
                      do {
                        if (!this.r_R2$esjava$0()) break;
                        this.slice_del$esjava$0();
                        break A
                      } while (false);
                      this.cursor = this.limit - h, this.slice_from$esjava$1("abl")
                    } while (false);
                    break;
                  case 2:
                    o: do {
                      o = this.limit - this.cursor;
                      do {
                        if (!this.r_R2$esjava$0()) break;
                        this.slice_del$esjava$0();
                        break o
                      } while (false);
                      this.cursor = this.limit - o, this.slice_from$esjava$1("iqU")
                    } while (false);
                    break;
                  case 3:
                    if (!this.r_R2$esjava$0()) {
                      this.cursor = this.limit - n;
                      break n
                    }
                    this.slice_del$esjava$0()
                }
              } while (false);
              break;
            case 8:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), u = this.limit - this.cursor;
              do {
                if (this.ket = this.cursor, !this.eq_s_b$esjava$1("at") || (this.bra = this.cursor, !this.r_R2$esjava$0()) || (this.slice_del$esjava$0(), this.ket = this.cursor, !this.eq_s_b$esjava$1("ic"))) {
                  this.cursor = this.limit - u;
                  break
                }
                this.bra = this.cursor;
                C: do {
                  c = this.limit - this.cursor;
                  do {
                    if (!this.r_R2$esjava$0()) break;
                    this.slice_del$esjava$0();
                    break C
                  } while (false);
                  this.cursor = this.limit - c, this.slice_from$esjava$1("iqU")
                } while (false)
              } while (false);
              break;
            case 9:
              this.slice_from$esjava$1("eau");
              break;
            case 10:
              if (!this.r_R1$esjava$0()) returnfalse;
              this.slice_from$esjava$1("al");
              break;
            case 11:
              u: do {
                _ = this.limit - this.cursor;
                do {
                  if (!this.r_R2$esjava$0()) break;
                  this.slice_del$esjava$0();
                  break u
                } while (false);
                if (this.cursor = this.limit - _, !this.r_R1$esjava$0()) returnfalse;
                this.slice_from$esjava$1("eux")
              } while (false);
              break;
            case 12:
              if (!this.r_R1$esjava$0() || !this.out_grouping_b$esjava$3(t.g_v, 97, 251)) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 13:
              if (!this.r_RV$esjava$0()) returnfalse;
              return this.slice_from$esjava$1("ant"), false;
            case 14:
              if (!this.r_RV$esjava$0()) returnfalse;
              return this.slice_from$esjava$1("ent"), false;
            case 15:
              if (l = this.limit - this.cursor, !this.in_grouping_b$esjava$3(t.g_v, 97, 251) || !this.r_RV$esjava$0()) returnfalse;
              return this.cursor = this.limit - l, this.slice_del$esjava$0(), false
          }
          returntrue
        }
      }, {
        key: "r_i_verb_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          if (i = this.limit - this.cursor, this.cursor < this.I_pV) returnfalse;
          if (this.cursor = this.I_pV, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_5))) return this.limit_backward = s, false;
          switch (this.bra = this.cursor, e) {
            case 0:
              return this.limit_backward = s, false;
            case 1:
              if (!this.out_grouping_b$esjava$3(t.g_v, 97, 251)) return this.limit_backward = s, false;
              this.slice_del$esjava$0()
          }
          return this.limit_backward = s, true
        }
      }, {
        key: "r_verb_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true;
          if (i = this.limit - this.cursor, this.cursor < this.I_pV) returnfalse;
          if (this.cursor = this.I_pV, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_6))) return this.limit_backward = s, false;
          switch (this.bra = this.cursor, e) {
            case 0:
              return this.limit_backward = s, false;
            case 1:
              if (!this.r_R2$esjava$0()) return this.limit_backward = s, false;
              this.slice_del$esjava$0();
              break;
            case 2:
              this.slice_del$esjava$0();
              break;
            case 3:
              this.slice_del$esjava$0(), r = this.limit - this.cursor;
              do {
                if (this.ket = this.cursor, !this.eq_s_b$esjava$1("e")) {
                  this.cursor = this.limit - r;
                  break
                }
                this.bra = this.cursor, this.slice_del$esjava$0()
              } while (false)
          }
          return this.limit_backward = s, true
        }
      }, {
        key: "r_residual_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true;
          i = this.limit - this.cursor;
          do {
            if (this.ket = this.cursor, !this.eq_s_b$esjava$1("s") || (this.bra = this.cursor, s = this.limit - this.cursor, !this.out_grouping_b$esjava$3(t.g_keep_with_s, 97, 232))) {
              this.cursor = this.limit - i;
              break
            }
            this.cursor = this.limit - s, this.slice_del$esjava$0()
          } while (false);
          if (r = this.limit - this.cursor, this.cursor < this.I_pV) returnfalse;
          if (this.cursor = this.I_pV, a = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - r, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_7))) return this.limit_backward = a, false;
          switch (this.bra = this.cursor, e) {
            case 0:
              return this.limit_backward = a, false;
            case 1:
              if (!this.r_R2$esjava$0()) return this.limit_backward = a, false;
              i: do {
                n = this.limit - this.cursor;
                do {
                  if (!this.eq_s_b$esjava$1("s")) break;
                  break i
                } while (false);
                if (this.cursor = this.limit - n, !this.eq_s_b$esjava$1("t")) return this.limit_backward = a, false
              } while (false);
              this.slice_del$esjava$0();
              break;
            case 2:
              this.slice_from$esjava$1("i");
              break;
            case 3:
              this.slice_del$esjava$0();
              break;
            case 4:
              if (!this.eq_s_b$esjava$1("gu")) return this.limit_backward = a, false;
              this.slice_del$esjava$0()
          }
          return this.limit_backward = a, true
        }
      }, {
        key: "r_un_double$esjava$0",
        value: function() {
          var e = true;
          return e = this.limit - this.cursor, 0 !== this.find_among_b$esjava$1(t.a_8) && (this.cursor = this.limit - e, this.ket = this.cursor, !(this.cursor <= this.limit_backward) && (this.cursor--, this.bra = this.cursor, this.slice_del$esjava$0(), true))
        }
      }, {
        key: "r_un_accent$esjava$0",
        value: function() {
          var e = true,
            i = 1;
          P: for (;;) {
            do {
              if (!this.out_grouping_b$esjava$3(t.g_v, 97, 251)) break;
              i--;
              continue P
            } while (false);
            break
          }
          if (i > 0) returnfalse;
          this.ket = this.cursor;
          s: do {
            e = this.limit - this.cursor;
            do {
              if (!this.eq_s_b$esjava$1("\xe9")) break;
              break s
            } while (false);
            if (this.cursor = this.limit - e, !this.eq_s_b$esjava$1("\xe8")) returnfalse
          } while (false);
          return this.bra = this.cursor, this.slice_from$esjava$1("e"), true
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true,
            c = true;
          e = this.cursor;
          do
            if (!this.r_prelude$esjava$0()) break; while (false);
          this.cursor = e, i = this.cursor;
          do
            if (!this.r_mark_regions$esjava$0()) break; while (false);
          this.cursor = i, this.limit_backward = this.cursor, this.cursor = this.limit, s = this.limit - this.cursor;
          s: do t: do {
            t = this.limit - this.cursor;
            r: do {
              r = this.limit - this.cursor;
              a: do {
                a = this.limit - this.cursor;
                do {
                  if (!this.r_standard_suffix$esjava$0()) break;
                  break a
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.r_i_verb_suffix$esjava$0()) break;
                  break a
                } while (false);
                if (this.cursor = this.limit - a, !this.r_verb_suffix$esjava$0()) break r
              } while (false);
              this.cursor = this.limit - r, n = this.limit - this.cursor;
              D: do {
                this.ket = this.cursor;
                o: do {
                  h = this.limit - this.cursor;
                  do {
                    if (!this.eq_s_b$esjava$1("Y")) break;
                    this.bra = this.cursor, this.slice_from$esjava$1("i");
                    break o
                  } while (false);
                  if (this.cursor = this.limit - h, !this.eq_s_b$esjava$1("\xe7")) {
                    this.cursor = this.limit - n;
                    break D
                  }
                  this.bra = this.cursor, this.slice_from$esjava$1("c")
                } while (false)
              } while (false);
              break t
            } while (false);
            if (this.cursor = this.limit - t, !this.r_residual_suffix$esjava$0()) break s
          } while (false); while (false);
          this.cursor = this.limit - s, o = this.limit - this.cursor;
          do
            if (!this.r_un_double$esjava$0()) break; while (false);
          this.cursor = this.limit - o, u = this.limit - this.cursor;
          do
            if (!this.r_un_accent$esjava$0()) break; while (false);
          this.cursor = this.limit - u, this.cursor = this.limit_backward, c = this.cursor;
          do
            if (!this.r_postlude$esjava$0()) break; while (false);
          return this.cursor = c, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "I_p2",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p2") ? this._$esjava$I_p2 : this._$esjava$I_p2 = 0
        },
        set: function(e) {
          this._$esjava$I_p2 = e
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }, {
        key: "I_pV",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_pV") ? this._$esjava$I_pV : this._$esjava$I_pV = 0
        },
        set: function(e) {
          this._$esjava$I_pV = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("col", false, false), new u("par", false, false), new u("tap", false, false)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("", false, 4), new u("I", 0, 1), new u("U", 0, 2), new u("Y", 0, 3)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("iqU", false, 3), new u("abl", false, 3), new u("I\xe8r", false, 4), new u("i\xe8r", false, 4), new u("eus", false, 2), new u("iv", false, 1)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("ic", false, 2), new u("abil", false, 1), new u("iv", false, 3)]
        }
      }, {
        key: "a_4",
        get: function() {
          return delete t.a_4, t.a_4 = [new u("iqUe", false, 1), new u("atrice", false, 2), new u("ance", false, 1), new u("ence", false, 5), new u("logie", false, 3), new u("able", false, 1), new u("isme", false, 1), new u("euse", false, 11), new u("iste", false, 1), new u("ive", false, 8), new u("if", false, 8), new u("usion", false, 4), new u("ation", false, 2), new u("ution", false, 4), new u("ateur", false, 2), new u("iqUes", false, 1), new u("atrices", false, 2), new u("ances", false, 1), new u("ences", false, 5), new u("logies", false, 3), new u("ables", false, 1), new u("ismes", false, 1), new u("euses", false, 11), new u("istes", false, 1), new u("ives", false, 8), new u("ifs", false, 8), new u("usions", false, 4), new u("ations", false, 2), new u("utions", false, 4), new u("ateurs", false, 2), new u("ments", false, 15), new u("ements", 30, 6), new u("issements", 31, 12), new u("it\xe9s", false, 7), new u("ment", false, 15), new u("ement", 34, 6), new u("issement", 35, 12), new u("amment", 34, 13), new u("emment", 34, 14), new u("aux", false, 10), new u("eaux", 39, 9), new u("eux", false, 1), new u("it\xe9", false, 7)]
        }
      }, {
        key: "a_5",
        get: function() {
          return delete t.a_5, t.a_5 = [new u("ira", false, 1), new u("ie", false, 1), new u("isse", false, 1), new u("issante", false, 1), new u("i", false, 1), new u("irai", 4, 1), new u("ir", false, 1), new u("iras", false, 1), new u("ies", false, 1), new u("\xeemes", false, 1), new u("isses", false, 1), new u("issantes", false, 1), new u("\xeetes", false, 1), new u("is", false, 1), new u("irais", 13, 1), new u("issais", 13, 1), new u("irions", false, 1), new u("issions", false, 1), new u("irons", false, 1), new u("issons", false, 1), new u("issants", false, 1), new u("it", false, 1), new u("irait", 21, 1), new u("issait", 21, 1), new u("issant", false, 1), new u("iraIent", false, 1), new u("issaIent", false, 1), new u("irent", false, 1), new u("issent", false, 1), new u("iront", false, 1), new u("\xeet", false, 1), new u("iriez", false, 1), new u("issiez", false, 1), new u("irez", false, 1), new u("issez", false, 1)]
        }
      }, {
        key: "a_6",
        get: function() {
          return delete t.a_6, t.a_6 = [new u("a", false, 3), new u("era", 0, 2), new u("asse", false, 3), new u("ante", false, 3), new u("\xe9e", false, 2), new u("ai", false, 3), new u("erai", 5, 2), new u("er", false, 2), new u("as", false, 3), new u("eras", 8, 2), new u("\xe2mes", false, 3), new u("asses", false, 3), new u("antes", false, 3), new u("\xe2tes", false, 3), new u("\xe9es", false, 2), new u("ais", false, 3), new u("erais", 15, 2), new u("ions", false, 1), new u("erions", 17, 2), new u("assions", 17, 3), new u("erons", false, 2), new u("ants", false, 3), new u("\xe9s", false, 2), new u("ait", false, 3), new u("erait", 23, 2), new u("ant", false, 3), new u("aIent", false, 3), new u("eraIent", 26, 2), new u("\xe8rent", false, 2), new u("assent", false, 3), new u("eront", false, 2), new u("\xe2t", false, 3), new u("ez", false, 2), new u("iez", 32, 2), new u("eriez", 33, 2), new u("assiez", 33, 3), new u("erez", 32, 2), new u("\xe9", false, 2)]
        }
      }, {
        key: "a_7",
        get: function() {
          return delete t.a_7, t.a_7 = [new u("e", false, 3), new u("I\xe8re", 0, 2), new u("i\xe8re", 0, 2), new u("ion", false, 1), new u("Ier", false, 2), new u("ier", false, 2), new u("\xeb", false, 4)]
        }
      }, {
        key: "a_8",
        get: function() {
          return delete t.a_8, t.a_8 = [new u("ell", false, false), new u("eill", false, false), new u("enn", false, false), new u("onn", false, false), new u("ett", false, false)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 130, 103, 8, 5]
        }
      }, {
        key: "g_keep_with_s",
        get: function() {
          return delete t.g_keep_with_s, t.g_keep_with_s = [1, 65, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128]
        }
      }]), t
    }(c),
    j = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_prelude$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true;
          e = this.cursor;
          P: for (;;) {
            i = this.cursor;
            i: do {
              s: do {
                s = this.cursor;
                do {
                  if (this.bra = this.cursor, !this.eq_s$esjava$1("\xdf")) break;
                  this.ket = this.cursor, this.slice_from$esjava$1("ss");
                  break s
                } while (false);
                if (this.cursor = s, this.cursor >= this.limit) break i;
                this.cursor++
              } while (false);
              continue P
            } while (false);
            this.cursor = i;
            break
          }
          this.cursor = e;
          E: for (;;) {
            r = this.cursor;
            a: do {
              Y: for (;;) {
                a = this.cursor;
                A: do {
                  if (!this.in_grouping$esjava$3(t.g_v, 97, 252)) break;
                  this.bra = this.cursor;
                  D: do {
                    n = this.cursor;
                    do {
                      if (!this.eq_s$esjava$1("u") || (this.ket = this.cursor, !this.in_grouping$esjava$3(t.g_v, 97, 252))) break;
                      this.slice_from$esjava$1("U");
                      break D
                    } while (false);
                    if (this.cursor = n, !this.eq_s$esjava$1("y") || (this.ket = this.cursor, !this.in_grouping$esjava$3(t.g_v, 97, 252))) break A;
                    this.slice_from$esjava$1("Y")
                  } while (false);
                  this.cursor = a;
                  break Y
                } while (false);
                if (this.cursor = a, this.cursor >= this.limit) break a;
                this.cursor++
              }
              continue E
            } while (false);
            this.cursor = r;
            break
          }
          returntrue
        }
      }, {
        key: "r_mark_regions$esjava$0",
        value: function() {
          var e = true;
          this.I_p1 = this.limit, this.I_p2 = this.limit, e = this.cursor;
          var i = this.cursor + 3;
          if (0 > i || i > this.limit) returnfalse;
          this.cursor = i, this.I_x = this.cursor, this.cursor = e;
          V: for (;;) {
            do {
              if (!this.in_grouping$esjava$3(t.g_v, 97, 252)) break;
              break V
            } while (false);
            if (this.cursor >= this.limit) returnfalse;
            this.cursor++
          }
          S: for (;;) {
            do {
              if (!this.out_grouping$esjava$3(t.g_v, 97, 252)) break;
              break S
            } while (false);
            if (this.cursor >= this.limit) returnfalse;
            this.cursor++
          }
          this.I_p1 = this.cursor;
          do {
            if (!(this.I_p1 < this.I_x)) break;
            this.I_p1 = this.I_x
          } while (false);
          m: for (;;) {
            do {
              if (!this.in_grouping$esjava$3(t.g_v, 97, 252)) break;
              break m
            } while (false);
            if (this.cursor >= this.limit) returnfalse;
            this.cursor++
          }
          j: for (;;) {
            do {
              if (!this.out_grouping$esjava$3(t.g_v, 97, 252)) break;
              break j
            } while (false);
            if (this.cursor >= this.limit) returnfalse;
            this.cursor++
          }
          return this.I_p2 = this.cursor, true
        }
      }, {
        key: "r_postlude$esjava$0",
        value: function() {
          var e = true,
            i = true;
          P: for (;;) {
            i = this.cursor;
            i: do {
              if (this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_0))) break;
              switch (this.ket = this.cursor, e) {
                case 0:
                  break i;
                case 1:
                  this.slice_from$esjava$1("y");
                  break;
                case 2:
                case 5:
                  this.slice_from$esjava$1("u");
                  break;
                case 3:
                  this.slice_from$esjava$1("a");
                  break;
                case 4:
                  this.slice_from$esjava$1("o");
                  break;
                case 6:
                  if (this.cursor >= this.limit) break i;
                  this.cursor++
              }
              continue P
            } while (false);
            this.cursor = i;
            break
          }
          returntrue
        }
      }, {
        key: "r_R1$esjava$0",
        value: function() {
          return this.I_p1 <= this.cursor
        }
      }, {
        key: "r_R2$esjava$0",
        value: function() {
          return this.I_p2 <= this.cursor
        }
      }, {
        key: "r_standard_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true,
            c = true,
            _ = true;
          i = this.limit - this.cursor;
          e: do {
            if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_1)) || (this.bra = this.cursor, !this.r_R1$esjava$0())) break;
            switch (e) {
              case 0:
                break e;
              case 1:
                this.slice_del$esjava$0();
                break;
              case 2:
                this.slice_del$esjava$0(), s = this.limit - this.cursor;
                do {
                  if (this.ket = this.cursor, !this.eq_s_b$esjava$1("s") || (this.bra = this.cursor, !this.eq_s_b$esjava$1("nis"))) {
                    this.cursor = this.limit - s;
                    break
                  }
                  this.slice_del$esjava$0()
                } while (false);
                break;
              case 3:
                if (!this.in_grouping_b$esjava$3(t.g_s_ending, 98, 116)) break e;
                this.slice_del$esjava$0()
            }
          } while (false);
          this.cursor = this.limit - i, r = this.limit - this.cursor;
          s: do {
            if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_2)) || (this.bra = this.cursor, !this.r_R1$esjava$0())) break;
            switch (e) {
              case 0:
                break s;
              case 1:
                this.slice_del$esjava$0();
                break;
              case 2:
                if (!this.in_grouping_b$esjava$3(t.g_st_ending, 98, 116)) break s;
                var l = this.cursor - 3;
                if (this.limit_backward > l || l > this.limit) break s;
                this.cursor = l, this.slice_del$esjava$0()
            }
          } while (false);
          this.cursor = this.limit - r, a = this.limit - this.cursor;
          t: do {
            if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_4)) || (this.bra = this.cursor, !this.r_R2$esjava$0())) break;
            switch (e) {
              case 0:
                break t;
              case 1:
                this.slice_del$esjava$0(), n = this.limit - this.cursor;
                r: do {
                  if (this.ket = this.cursor, !this.eq_s_b$esjava$1("ig")) {
                    this.cursor = this.limit - n;
                    break
                  }
                  this.bra = this.cursor, h = this.limit - this.cursor;
                  do {
                    if (!this.eq_s_b$esjava$1("e")) break;
                    this.cursor = this.limit - n;
                    break r
                  } while (false);
                  if (this.cursor = this.limit - h, !this.r_R2$esjava$0()) {
                    this.cursor = this.limit - n;
                    break
                  }
                  this.slice_del$esjava$0()
                } while (false);
                break;
              case 2:
                o = this.limit - this.cursor;
                do {
                  if (!this.eq_s_b$esjava$1("e")) break;
                  break t
                } while (false);
                this.cursor = this.limit - o, this.slice_del$esjava$0();
                break;
              case 3:
                this.slice_del$esjava$0(), u = this.limit - this.cursor;
                A: do {
                  this.ket = this.cursor;
                  D: do {
                    c = this.limit - this.cursor;
                    do {
                      if (!this.eq_s_b$esjava$1("er")) break;
                      break D
                    } while (false);
                    if (this.cursor = this.limit - c, !this.eq_s_b$esjava$1("en")) {
                      this.cursor = this.limit - u;
                      break A
                    }
                  } while (false);
                  if (this.bra = this.cursor, !this.r_R1$esjava$0()) {
                    this.cursor = this.limit - u;
                    break
                  }
                  this.slice_del$esjava$0()
                } while (false);
                break;
              case 4:
                this.slice_del$esjava$0(), _ = this.limit - this.cursor;
                g: do {
                  if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_3)) || (this.bra = this.cursor, !this.r_R2$esjava$0())) {
                    this.cursor = this.limit - _;
                    break
                  }
                  switch (e) {
                    case 0:
                      this.cursor = this.limit - _;
                      break g;
                    case 1:
                      this.slice_del$esjava$0()
                  }
                } while (false)
            }
          } while (false);
          return this.cursor = this.limit - a, true
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true;
          e = this.cursor;
          do
            if (!this.r_prelude$esjava$0()) break; while (false);
          this.cursor = e, i = this.cursor;
          do
            if (!this.r_mark_regions$esjava$0()) break; while (false);
          this.cursor = i, this.limit_backward = this.cursor, this.cursor = this.limit, s = this.limit - this.cursor;
          do
            if (!this.r_standard_suffix$esjava$0()) break; while (false);
          this.cursor = this.limit - s, this.cursor = this.limit_backward, t = this.cursor;
          do
            if (!this.r_postlude$esjava$0()) break; while (false);
          return this.cursor = t, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "I_x",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_x") ? this._$esjava$I_x : this._$esjava$I_x = 0
        },
        set: function(e) {
          this._$esjava$I_x = e
        }
      }, {
        key: "I_p2",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p2") ? this._$esjava$I_p2 : this._$esjava$I_p2 = 0
        },
        set: function(e) {
          this._$esjava$I_p2 = e
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("", false, 6), new u("U", 0, 2), new u("Y", 0, 1), new u("\xe4", 0, 3), new u("\xf6", 0, 4), new u("\xfc", 0, 5)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("e", false, 2), new u("em", false, 1), new u("en", false, 2), new u("ern", false, 1), new u("er", false, 1), new u("s", false, 3), new u("es", 5, 2)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("en", false, 1), new u("er", false, 1), new u("st", false, 2), new u("est", 2, 1)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("ig", false, 1), new u("lich", false, 1)]
        }
      }, {
        key: "a_4",
        get: function() {
          return delete t.a_4, t.a_4 = [new u("end", false, 1), new u("ig", false, 2), new u("ung", false, 1), new u("lich", false, 3), new u("isch", false, 2), new u("ik", false, 2), new u("heit", false, 3), new u("keit", false, 4)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32, 8]
        }
      }, {
        key: "g_s_ending",
        get: function() {
          return delete t.g_s_ending, t.g_s_ending = [117, 30, 5]
        }
      }, {
        key: "g_st_ending",
        get: function() {
          return delete t.g_st_ending, t.g_st_ending = [117, 30, 4]
        }
      }]), t
    }(c),
    g = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_mark_regions$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          this.I_p1 = this.limit;
          e: do {
            e = this.cursor;
            i: do {
              if (!this.in_grouping$esjava$3(t.g_v, 97, 369)) break;
              S: for (;;) {
                i = this.cursor;
                do {
                  if (!this.out_grouping$esjava$3(t.g_v, 97, 369)) break;
                  this.cursor = i;
                  break S
                } while (false);
                if (this.cursor = i, this.cursor >= this.limit) break i;
                this.cursor++
              }
              r: do {
                s = this.cursor;
                do {
                  if (0 === this.find_among$esjava$1(t.a_0)) break;
                  break r
                } while (false);
                if (this.cursor = s, this.cursor >= this.limit) break i;
                this.cursor++
              } while (false);
              this.I_p1 = this.cursor;
              break e
            } while (false);
            if (this.cursor = e, !this.out_grouping$esjava$3(t.g_v, 97, 369)) returnfalse;
            Y: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 369)) break;
                break Y
              } while (false);
              if (this.cursor >= this.limit) returnfalse;
              this.cursor++
            }
            this.I_p1 = this.cursor
          } while (false);
          returntrue
        }
      }, {
        key: "r_R1$esjava$0",
        value: function() {
          return this.I_p1 <= this.cursor
        }
      }, {
        key: "r_v_ending$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_1)) || (this.bra = this.cursor, !this.r_R1$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_from$esjava$1("a");
              break;
            case 2:
              this.slice_from$esjava$1("e")
          }
          returntrue
        }
      }, {
        key: "r_double$esjava$0",
        value: function() {
          var e = true;
          return e = this.limit - this.cursor, 0 !== this.find_among_b$esjava$1(t.a_2) && (this.cursor = this.limit - e, true)
        }
      }, {
        key: "r_undouble$esjava$0",
        value: function() {
          if (this.cursor <= this.limit_backward) returnfalse;
          this.cursor--, this.ket = this.cursor;
          var e = this.cursor - 1;
          return !(this.limit_backward > e) && !(e > this.limit) && (this.cursor = e, this.bra = this.cursor, this.slice_del$esjava$0(), true)
        }
      }, {
        key: "r_instrum$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_3)) || (this.bra = this.cursor, !this.r_R1$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
            case 2:
              if (!this.r_double$esjava$0()) returnfalse
          }
          return this.slice_del$esjava$0(), !!this.r_undouble$esjava$0()
        }
      }, {
        key: "r_case$esjava$0",
        value: function() {
          return this.ket = this.cursor, 0 !== this.find_among_b$esjava$1(t.a_4) && (this.bra = this.cursor, !!this.r_R1$esjava$0() && (this.slice_del$esjava$0(), !!this.r_v_ending$esjava$0()))
        }
      }, {
        key: "r_case_special$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_5)) || (this.bra = this.cursor, !this.r_R1$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_from$esjava$1("e");
              break;
            case 2:
            case 3:
              this.slice_from$esjava$1("a")
          }
          returntrue
        }
      }, {
        key: "r_case_other$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_6)) || (this.bra = this.cursor, !this.r_R1$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
            case 2:
              this.slice_del$esjava$0();
              break;
            case 3:
              this.slice_from$esjava$1("a");
              break;
            case 4:
              this.slice_from$esjava$1("e")
          }
          returntrue
        }
      }, {
        key: "r_factive$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_7)) || (this.bra = this.cursor, !this.r_R1$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
            case 2:
              if (!this.r_double$esjava$0()) returnfalse
          }
          return this.slice_del$esjava$0(), !!this.r_undouble$esjava$0()
        }
      }, {
        key: "r_plural$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_8)) || (this.bra = this.cursor, !this.r_R1$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_from$esjava$1("a");
              break;
            case 2:
              this.slice_from$esjava$1("e");
              break;
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_owned$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_9)) || (this.bra = this.cursor, !this.r_R1$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
            case 4:
            case 7:
            case 9:
              this.slice_del$esjava$0();
              break;
            case 2:
            case 5:
            case 8:
              this.slice_from$esjava$1("e");
              break;
            case 3:
            case 6:
              this.slice_from$esjava$1("a")
          }
          returntrue
        }
      }, {
        key: "r_sing_owner$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_10)) || (this.bra = this.cursor, !this.r_R1$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
            case 4:
            case 7:
            case 8:
            case 9:
            case 12:
            case 13:
            case 16:
            case 17:
            case 18:
              this.slice_del$esjava$0();
              break;
            case 2:
            case 5:
            case 10:
            case 14:
            case 19:
              this.slice_from$esjava$1("a");
              break;
            case 3:
            case 6:
            case 11:
            case 15:
            case 20:
              this.slice_from$esjava$1("e")
          }
          returntrue
        }
      }, {
        key: "r_plur_owner$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_11)) || (this.bra = this.cursor, !this.r_R1$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
            case 4:
            case 5:
            case 6:
            case 9:
            case 10:
            case 11:
            case 14:
            case 15:
            case 16:
            case 17:
            case 20:
            case 21:
            case 24:
            case 25:
            case 26:
            case 29:
              this.slice_del$esjava$0();
              break;
            case 2:
            case 7:
            case 12:
            case 18:
            case 22:
            case 27:
              this.slice_from$esjava$1("a");
              break;
            case 3:
            case 8:
            case 13:
            case 19:
            case 23:
            case 28:
              this.slice_from$esjava$1("e")
          }
          returntrue
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true;
          e = this.cursor;
          do
            if (!this.r_mark_regions$esjava$0()) break; while (false);
          this.cursor = e, this.limit_backward = this.cursor, this.cursor = this.limit, i = this.limit - this.cursor;
          do
            if (!this.r_instrum$esjava$0()) break; while (false);
          this.cursor = this.limit - i, s = this.limit - this.cursor;
          do
            if (!this.r_case$esjava$0()) break; while (false);
          this.cursor = this.limit - s, t = this.limit - this.cursor;
          do
            if (!this.r_case_special$esjava$0()) break; while (false);
          this.cursor = this.limit - t, r = this.limit - this.cursor;
          do
            if (!this.r_case_other$esjava$0()) break; while (false);
          this.cursor = this.limit - r, a = this.limit - this.cursor;
          do
            if (!this.r_factive$esjava$0()) break; while (false);
          this.cursor = this.limit - a, n = this.limit - this.cursor;
          do
            if (!this.r_owned$esjava$0()) break; while (false);
          this.cursor = this.limit - n, h = this.limit - this.cursor;
          do
            if (!this.r_sing_owner$esjava$0()) break; while (false);
          this.cursor = this.limit - h, o = this.limit - this.cursor;
          do
            if (!this.r_plur_owner$esjava$0()) break; while (false);
          this.cursor = this.limit - o, u = this.limit - this.cursor;
          do
            if (!this.r_plural$esjava$0()) break; while (false);
          return this.cursor = this.limit - u, this.cursor = this.limit_backward, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("cs", false, false), new u("dzs", false, false), new u("gy", false, false), new u("ly", false, false), new u("ny", false, false), new u("sz", false, false), new u("ty", false, false), new u("zs", false, false)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("\xe1", false, 1), new u("\xe9", false, 2)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("bb", false, false), new u("cc", false, false), new u("dd", false, false), new u("ff", false, false), new u("gg", false, false), new u("jj", false, false), new u("kk", false, false), new u("ll", false, false), new u("mm", false, false), new u("nn", false, false), new u("pp", false, false), new u("rr", false, false), new u("ccs", false, false), new u("ss", false, false), new u("zzs", false, false), new u("tt", false, false), new u("vv", false, false), new u("ggy", false, false), new u("lly", false, false), new u("nny", false, false), new u("tty", false, false), new u("ssz", false, false), new u("zz", false, false)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("al", false, 1), new u("el", false, 2)]
        }
      }, {
        key: "a_4",
        get: function() {
          return delete t.a_4, t.a_4 = [new u("ba", false, false), new u("ra", false, false), new u("be", false, false), new u("re", false, false), new u("ig", false, false), new u("nak", false, false), new u("nek", false, false), new u("val", false, false), new u("vel", false, false), new u("ul", false, false), new u("n\xe1l", false, false), new u("n\xe9l", false, false), new u("b\xf3l", false, false), new u("r\xf3l", false, false), new u("t\xf3l", false, false), new u("\xfcl", false, false), new u("ből", false, false), new u("ről", false, false), new u("től", false, false), new u("n", false, false), new u("an", 19, false), new u("ban", 20, false), new u("en", 19, false), new u("ben", 22, false), new u("k\xe9ppen", 22, false), new u("on", 19, false), new u("\xf6n", 19, false), new u("k\xe9pp", false, false), new u("kor", false, false), new u("t", false, false), new u("at", 29, false), new u("et", 29, false), new u("k\xe9nt", 29, false), new u("ank\xe9nt", 32, false), new u("enk\xe9nt", 32, false), new u("onk\xe9nt", 32, false), new u("ot", 29, false), new u("\xe9rt", 29, false), new u("\xf6t", 29, false), new u("hez", false, false), new u("hoz", false, false), new u("h\xf6z", false, false), new u("v\xe1", false, false), new u("v\xe9", false, false)]
        }
      }, {
        key: "a_5",
        get: function() {
          return delete t.a_5, t.a_5 = [new u("\xe1n", false, 2), new u("\xe9n", false, 1), new u("\xe1nk\xe9nt", false, 3)]
        }
      }, {
        key: "a_6",
        get: function() {
          return delete t.a_6, t.a_6 = [new u("stul", false, 2), new u("astul", 0, 1), new u("\xe1stul", 0, 3), new u("st\xfcl", false, 2), new u("est\xfcl", 3, 1), new u("\xe9st\xfcl", 3, 4)]
        }
      }, {
        key: "a_7",
        get: function() {
          return delete t.a_7, t.a_7 = [new u("\xe1", false, 1), new u("\xe9", false, 2)]
        }
      }, {
        key: "a_8",
        get: function() {
          return delete t.a_8, t.a_8 = [new u("k", false, 7), new u("ak", 0, 4), new u("ek", 0, 6), new u("ok", 0, 5), new u("\xe1k", 0, 1), new u("\xe9k", 0, 2), new u("\xf6k", 0, 3)]
        }
      }, {
        key: "a_9",
        get: function() {
          return delete t.a_9, t.a_9 = [new u("\xe9i", false, 7), new u("\xe1\xe9i", 0, 6), new u("\xe9\xe9i", 0, 5), new u("\xe9", false, 9), new u("k\xe9", 3, 4), new u("ak\xe9", 4, 1), new u("ek\xe9", 4, 1), new u("ok\xe9", 4, 1), new u("\xe1k\xe9", 4, 3), new u("\xe9k\xe9", 4, 2), new u("\xf6k\xe9", 4, 1), new u("\xe9\xe9", 3, 8)]
        }
      }, {
        key: "a_10",
        get: function() {
          return delete t.a_10, t.a_10 = [new u("a", false, 18), new u("ja", 0, 17), new u("d", false, 16), new u("ad", 2, 13), new u("ed", 2, 13), new u("od", 2, 13), new u("\xe1d", 2, 14), new u("\xe9d", 2, 15), new u("\xf6d", 2, 13), new u("e", false, 18), new u("je", 9, 17), new u("nk", false, 4), new u("unk", 11, 1), new u("\xe1nk", 11, 2), new u("\xe9nk", 11, 3), new u("\xfcnk", 11, 1), new u("uk", false, 8), new u("juk", 16, 7), new u("\xe1juk", 17, 5), new u("\xfck", false, 8), new u("j\xfck", 19, 7), new u("\xe9j\xfck", 20, 6), new u("m", false, 12), new u("am", 22, 9), new u("em", 22, 9), new u("om", 22, 9), new u("\xe1m", 22, 10), new u("\xe9m", 22, 11), new u("o", false, 18), new u("\xe1", false, 19), new u("\xe9", false, 20)]
        }
      }, {
        key: "a_11",
        get: function() {
          return delete t.a_11, t.a_11 = [new u("id", false, 10), new u("aid", 0, 9), new u("jaid", 1, 6), new u("eid", 0, 9), new u("jeid", 3, 6), new u("\xe1id", 0, 7), new u("\xe9id", 0, 8), new u("i", false, 15), new u("ai", 7, 14), new u("jai", 8, 11), new u("ei", 7, 14), new u("jei", 10, 11), new u("\xe1i", 7, 12), new u("\xe9i", 7, 13), new u("itek", false, 24), new u("eitek", 14, 21), new u("jeitek", 15, 20), new u("\xe9itek", 14, 23), new u("ik", false, 29), new u("aik", 18, 26), new u("jaik", 19, 25), new u("eik", 18, 26), new u("jeik", 21, 25), new u("\xe1ik", 18, 27), new u("\xe9ik", 18, 28), new u("ink", false, 20), new u("aink", 25, 17), new u("jaink", 26, 16), new u("eink", 25, 17), new u("jeink", 28, 16), new u("\xe1ink", 25, 18), new u("\xe9ink", 25, 19), new u("aitok", false, 21), new u("jaitok", 32, 20), new u("\xe1itok", false, 22), new u("im", false, 5), new u("aim", 35, 4), new u("jaim", 36, 1), new u("eim", 35, 4), new u("jeim", 38, 1), new u("\xe1im", 35, 2), new u("\xe9im", 35, 3)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 36, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1]
        }
      }]), t
    }(c),
    p = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_mark_regions$esjava$0",
        value: function() {
          var e = true,
            i = true;
          this.I_pV = this.limit, this.I_p1 = this.limit, this.I_p2 = this.limit, e = this.cursor;
          e: do {
            d: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 250)) break;
                break d
              } while (false);
              if (this.cursor >= this.limit) break e;
              this.cursor++
            }
            this.I_pV = this.cursor
          } while (false);
          this.cursor = e, i = this.cursor;
          t: do {
            U: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 250)) break;
                break U
              } while (false);
              if (this.cursor >= this.limit) break t;
              this.cursor++
            }
            Y: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 250)) break;
                break Y
              } while (false);
              if (this.cursor >= this.limit) break t;
              this.cursor++
            }
            this.I_p1 = this.cursor;L: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 250)) break;
                break L
              } while (false);
              if (this.cursor >= this.limit) break t;
              this.cursor++
            }
            G: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 250)) break;
                break G
              } while (false);
              if (this.cursor >= this.limit) break t;
              this.cursor++
            }
            this.I_p2 = this.cursor
          } while (false);
          return this.cursor = i, true
        }
      }, {
        key: "r_initial_morph$esjava$0",
        value: function() {
          var e = true;
          if (this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_0))) returnfalse;
          switch (this.ket = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
            case 2:
            case 4:
              this.slice_del$esjava$0();
              break;
            case 3:
            case 9:
            case 17:
              this.slice_from$esjava$1("f");
              break;
            case 5:
            case 12:
              this.slice_from$esjava$1("s");
              break;
            case 6:
            case 14:
              this.slice_from$esjava$1("b");
              break;
            case 7:
            case 15:
              this.slice_from$esjava$1("c");
              break;
            case 8:
            case 16:
              this.slice_from$esjava$1("d");
              break;
            case 10:
            case 18:
              this.slice_from$esjava$1("g");
              break;
            case 11:
            case 20:
              this.slice_from$esjava$1("p");
              break;
            case 13:
            case 21:
              this.slice_from$esjava$1("t");
              break;
            case 19:
              this.slice_from$esjava$1("m")
          }
          returntrue
        }
      }, {
        key: "r_RV$esjava$0",
        value: function() {
          return this.I_pV <= this.cursor
        }
      }, {
        key: "r_R1$esjava$0",
        value: function() {
          return this.I_p1 <= this.cursor
        }
      }, {
        key: "r_R2$esjava$0",
        value: function() {
          return this.I_p2 <= this.cursor
        }
      }, {
        key: "r_noun_sfx$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_1))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_R1$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_deriv$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_2))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              this.slice_from$esjava$1("arc");
              break;
            case 3:
              this.slice_from$esjava$1("gin");
              break;
            case 4:
              this.slice_from$esjava$1("graf");
              break;
            case 5:
              this.slice_from$esjava$1("paite");
              break;
            case 6:
              this.slice_from$esjava$1("\xf3id")
          }
          returntrue
        }
      }, {
        key: "r_verb_sfx$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_3))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_RV$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!this.r_R1$esjava$0()) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true;
          e = this.cursor;
          do
            if (!this.r_initial_morph$esjava$0()) break; while (false);
          this.cursor = e, i = this.cursor;
          do
            if (!this.r_mark_regions$esjava$0()) break; while (false);
          this.cursor = i, this.limit_backward = this.cursor, this.cursor = this.limit, s = this.limit - this.cursor;
          do
            if (!this.r_noun_sfx$esjava$0()) break; while (false);
          this.cursor = this.limit - s, t = this.limit - this.cursor;
          do
            if (!this.r_deriv$esjava$0()) break; while (false);
          this.cursor = this.limit - t, r = this.limit - this.cursor;
          do
            if (!this.r_verb_sfx$esjava$0()) break; while (false);
          return this.cursor = this.limit - r, this.cursor = this.limit_backward, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "I_p2",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p2") ? this._$esjava$I_p2 : this._$esjava$I_p2 = 0
        },
        set: function(e) {
          this._$esjava$I_p2 = e
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }, {
        key: "I_pV",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_pV") ? this._$esjava$I_pV : this._$esjava$I_pV = 0
        },
        set: function(e) {
          this._$esjava$I_pV = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("b'", false, 4), new u("bh", false, 14), new u("bhf", 1, 9), new u("bp", false, 11), new u("ch", false, 15), new u("d'", false, 2), new u("d'fh", 5, 3), new u("dh", false, 16), new u("dt", false, 13), new u("fh", false, 17), new u("gc", false, 7), new u("gh", false, 18), new u("h-", false, 1), new u("m'", false, 4), new u("mb", false, 6), new u("mh", false, 19), new u("n-", false, 1), new u("nd", false, 8), new u("ng", false, 10), new u("ph", false, 20), new u("sh", false, 5), new u("t-", false, 1), new u("th", false, 21), new u("ts", false, 12)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("\xedochta", false, 1), new u("a\xedochta", 0, 1), new u("ire", false, 2), new u("aire", 2, 2), new u("abh", false, 1), new u("eabh", 4, 1), new u("ibh", false, 1), new u("aibh", 6, 1), new u("amh", false, 1), new u("eamh", 8, 1), new u("imh", false, 1), new u("aimh", 10, 1), new u("\xedocht", false, 1), new u("a\xedocht", 12, 1), new u("ir\xed", false, 2), new u("air\xed", 14, 2)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("\xf3ideacha", false, 6), new u("patacha", false, 5), new u("achta", false, 1), new u("arcachta", 2, 2), new u("eachta", 2, 1), new u("grafa\xedochta", false, 4), new u("paite", false, 5), new u("ach", false, 1), new u("each", 7, 1), new u("\xf3ideach", 8, 6), new u("gineach", 8, 3), new u("patach", 7, 5), new u("grafa\xedoch", false, 4), new u("pataigh", false, 5), new u("\xf3idigh", false, 6), new u("acht\xfail", false, 1), new u("eacht\xfail", 15, 1), new u("gineas", false, 3), new u("ginis", false, 3), new u("acht", false, 1), new u("arcacht", 19, 2), new u("eacht", 19, 1), new u("grafa\xedocht", false, 4), new u("arcachta\xed", false, 2), new u("grafa\xedochta\xed", false, 4)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("imid", false, 1), new u("aimid", 0, 1), new u("\xedmid", false, 1), new u("a\xedmid", 2, 1), new u("adh", false, 2), new u("eadh", 4, 2), new u("faidh", false, 1), new u("fidh", false, 1), new u("\xe1il", false, 2), new u("ain", false, 2), new u("tear", false, 2), new u("tar", false, 2)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4, 2]
        }
      }]), t
    }(c),
    y = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_prelude$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true;
          i = this.cursor;
          P: for (;;) {
            s = this.cursor;
            i: do {
              if (this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_0))) break;
              switch (this.ket = this.cursor, e) {
                case 0:
                  break i;
                case 1:
                  this.slice_from$esjava$1("\xe0");
                  break;
                case 2:
                  this.slice_from$esjava$1("\xe8");
                  break;
                case 3:
                  this.slice_from$esjava$1("\xec");
                  break;
                case 4:
                  this.slice_from$esjava$1("\xf2");
                  break;
                case 5:
                  this.slice_from$esjava$1("\xf9");
                  break;
                case 6:
                  this.slice_from$esjava$1("qU");
                  break;
                case 7:
                  if (this.cursor >= this.limit) break i;
                  this.cursor++
              }
              continue P
            } while (false);
            this.cursor = s;
            break
          }
          this.cursor = i;
          W: for (;;) {
            r = this.cursor;
            t: do {
              U: for (;;) {
                a = this.cursor;
                a: do {
                  if (!this.in_grouping$esjava$3(t.g_v, 97, 249)) break;
                  this.bra = this.cursor;
                  n: do {
                    n = this.cursor;
                    do {
                      if (!this.eq_s$esjava$1("u") || (this.ket = this.cursor, !this.in_grouping$esjava$3(t.g_v, 97, 249))) break;
                      this.slice_from$esjava$1("U");
                      break n
                    } while (false);
                    if (this.cursor = n, !this.eq_s$esjava$1("i") || (this.ket = this.cursor, !this.in_grouping$esjava$3(t.g_v, 97, 249))) break a;
                    this.slice_from$esjava$1("I")
                  } while (false);
                  this.cursor = a;
                  break U
                } while (false);
                if (this.cursor = a, this.cursor >= this.limit) break t;
                this.cursor++
              }
              continue W
            } while (false);
            this.cursor = r;
            break
          }
          returntrue
        }
      }, {
        key: "r_mark_regions$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true;
          this.I_pV = this.limit, this.I_p1 = this.limit, this.I_p2 = this.limit, e = this.cursor;
          e: do {
            i: do {
              i = this.cursor;
              s: do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 249)) break;
                t: do {
                  s = this.cursor;
                  r: do {
                    if (!this.out_grouping$esjava$3(t.g_v, 97, 249)) break;
                    m: for (;;) {
                      do {
                        if (!this.in_grouping$esjava$3(t.g_v, 97, 249)) break;
                        break m
                      } while (false);
                      if (this.cursor >= this.limit) break r;
                      this.cursor++
                    }
                    break t
                  } while (false);
                  if (this.cursor = s, !this.in_grouping$esjava$3(t.g_v, 97, 249)) break s;
                  j: for (;;) {
                    do {
                      if (!this.out_grouping$esjava$3(t.g_v, 97, 249)) break;
                      break j
                    } while (false);
                    if (this.cursor >= this.limit) break s;
                    this.cursor++
                  }
                } while (false);
                break i
              } while (false);
              if (this.cursor = i, !this.out_grouping$esjava$3(t.g_v, 97, 249)) break e;
              o: do {
                r = this.cursor;
                g: do {
                  if (!this.out_grouping$esjava$3(t.g_v, 97, 249)) break;
                  p: for (;;) {
                    do {
                      if (!this.in_grouping$esjava$3(t.g_v, 97, 249)) break;
                      break p
                    } while (false);
                    if (this.cursor >= this.limit) break g;
                    this.cursor++
                  }
                  break o
                } while (false);
                if (this.cursor = r, !this.in_grouping$esjava$3(t.g_v, 97, 249) || this.cursor >= this.limit) break e;
                this.cursor++
              } while (false)
            } while (false);this.I_pV = this.cursor
          } while (false);
          this.cursor = e, a = this.cursor;
          y: do {
            I: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 249)) break;
                break I
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            q: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 249)) break;
                break q
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            this.I_p1 = this.cursor;O: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 249)) break;
                break O
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            x: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 249)) break;
                break x
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            this.I_p2 = this.cursor
          } while (false);
          return this.cursor = a, true
        }
      }, {
        key: "r_postlude$esjava$0",
        value: function() {
          var e = true,
            i = true;
          P: for (;;) {
            i = this.cursor;
            i: do {
              if (this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_1))) break;
              switch (this.ket = this.cursor, e) {
                case 0:
                  break i;
                case 1:
                  this.slice_from$esjava$1("i");
                  break;
                case 2:
                  this.slice_from$esjava$1("u");
                  break;
                case 3:
                  if (this.cursor >= this.limit) break i;
                  this.cursor++
              }
              continue P
            } while (false);
            this.cursor = i;
            break
          }
          returntrue
        }
      }, {
        key: "r_RV$esjava$0",
        value: function() {
          return this.I_pV <= this.cursor
        }
      }, {
        key: "r_R1$esjava$0",
        value: function() {
          return this.I_p1 <= this.cursor
        }
      }, {
        key: "r_R2$esjava$0",
        value: function() {
          return this.I_p2 <= this.cursor
        }
      }, {
        key: "r_attached_pronoun$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === this.find_among_b$esjava$1(t.a_2) || (this.bra = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_3)) || !this.r_RV$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0();
              break;
            case 2:
              this.slice_from$esjava$1("e")
          }
          returntrue
        }
      }, {
        key: "r_standard_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_6))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), i = this.limit - this.cursor;
              do {
                if (this.ket = this.cursor, !this.eq_s_b$esjava$1("ic") || (this.bra = this.cursor, !this.r_R2$esjava$0())) {
                  this.cursor = this.limit - i;
                  break
                }
                this.slice_del$esjava$0()
              } while (false);
              break;
            case 3:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_from$esjava$1("log");
              break;
            case 4:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_from$esjava$1("u");
              break;
            case 5:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_from$esjava$1("ente");
              break;
            case 6:
              if (!this.r_RV$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 7:
              if (!this.r_R1$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), s = this.limit - this.cursor;
              i: do {
                if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_4)) || (this.bra = this.cursor, !this.r_R2$esjava$0())) {
                  this.cursor = this.limit - s;
                  break
                }
                switch (this.slice_del$esjava$0(), e) {
                  case 0:
                    this.cursor = this.limit - s;
                    break i;
                  case 1:
                    if (this.ket = this.cursor, !this.eq_s_b$esjava$1("at") || (this.bra = this.cursor, !this.r_R2$esjava$0())) {
                      this.cursor = this.limit - s;
                      break i
                    }
                    this.slice_del$esjava$0()
                }
              } while (false);
              break;
            case 8:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), r = this.limit - this.cursor;
              s: do {
                if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_5))) {
                  this.cursor = this.limit - r;
                  break
                }
                switch (this.bra = this.cursor, e) {
                  case 0:
                    this.cursor = this.limit - r;
                    break s;
                  case 1:
                    if (!this.r_R2$esjava$0()) {
                      this.cursor = this.limit - r;
                      break s
                    }
                    this.slice_del$esjava$0()
                }
              } while (false);
              break;
            case 9:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), a = this.limit - this.cursor;
              do {
                if (this.ket = this.cursor, !this.eq_s_b$esjava$1("at") || (this.bra = this.cursor, !this.r_R2$esjava$0()) || (this.slice_del$esjava$0(), this.ket = this.cursor, !this.eq_s_b$esjava$1("ic")) || (this.bra = this.cursor, !this.r_R2$esjava$0())) {
                  this.cursor = this.limit - a;
                  break
                }
                this.slice_del$esjava$0()
              } while (false)
          }
          returntrue
        }
      }, {
        key: "r_verb_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          if (i = this.limit - this.cursor, this.cursor < this.I_pV) returnfalse;
          if (this.cursor = this.I_pV, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_7))) return this.limit_backward = s, false;
          switch (this.bra = this.cursor, e) {
            case 0:
              return this.limit_backward = s, false;
            case 1:
              this.slice_del$esjava$0()
          }
          return this.limit_backward = s, true
        }
      }, {
        key: "r_vowel_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true;
          e = this.limit - this.cursor;
          do {
            if (this.ket = this.cursor, !this.in_grouping_b$esjava$3(t.g_AEIO, 97, 242) || (this.bra = this.cursor, !this.r_RV$esjava$0()) || (this.slice_del$esjava$0(), this.ket = this.cursor, !this.eq_s_b$esjava$1("i")) || (this.bra = this.cursor, !this.r_RV$esjava$0())) {
              this.cursor = this.limit - e;
              break
            }
            this.slice_del$esjava$0()
          } while (false);
          i = this.limit - this.cursor;
          do {
            if (this.ket = this.cursor, !this.eq_s_b$esjava$1("h") || (this.bra = this.cursor, !this.in_grouping_b$esjava$3(t.g_CG, 99, 103) || !this.r_RV$esjava$0())) {
              this.cursor = this.limit - i;
              break
            }
            this.slice_del$esjava$0()
          } while (false);
          returntrue
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true,
            a = true,
            n = true;
          e = this.cursor;
          do
            if (!this.r_prelude$esjava$0()) break; while (false);
          this.cursor = e, i = this.cursor;
          do
            if (!this.r_mark_regions$esjava$0()) break; while (false);
          this.cursor = i, this.limit_backward = this.cursor, this.cursor = this.limit, s = this.limit - this.cursor;
          do
            if (!this.r_attached_pronoun$esjava$0()) break; while (false);
          this.cursor = this.limit - s, t = this.limit - this.cursor;
          t: do r: do {
            r = this.limit - this.cursor;
            do {
              if (!this.r_standard_suffix$esjava$0()) break;
              break r
            } while (false);
            if (this.cursor = this.limit - r, !this.r_verb_suffix$esjava$0()) break t
          } while (false); while (false);
          this.cursor = this.limit - t, a = this.limit - this.cursor;
          do
            if (!this.r_vowel_suffix$esjava$0()) break; while (false);
          this.cursor = this.limit - a, this.cursor = this.limit_backward, n = this.cursor;
          do
            if (!this.r_postlude$esjava$0()) break; while (false);
          return this.cursor = n, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "I_p2",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p2") ? this._$esjava$I_p2 : this._$esjava$I_p2 = 0
        },
        set: function(e) {
          this._$esjava$I_p2 = e
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }, {
        key: "I_pV",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_pV") ? this._$esjava$I_pV : this._$esjava$I_pV = 0
        },
        set: function(e) {
          this._$esjava$I_pV = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("", false, 7), new u("qu", 0, 6), new u("\xe1", 0, 1), new u("\xe9", 0, 2), new u("\xed", 0, 3), new u("\xf3", 0, 4), new u("\xfa", 0, 5)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("", false, 3), new u("I", 0, 1), new u("U", 0, 2)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("la", false, false), new u("cela", 0, false), new u("gliela", 0, false), new u("mela", 0, false), new u("tela", 0, false), new u("vela", 0, false), new u("le", false, false), new u("cele", 6, false), new u("gliele", 6, false), new u("mele", 6, false), new u("tele", 6, false), new u("vele", 6, false), new u("ne", false, false), new u("cene", 12, false), new u("gliene", 12, false), new u("mene", 12, false), new u("sene", 12, false), new u("tene", 12, false), new u("vene", 12, false), new u("ci", false, false), new u("li", false, false), new u("celi", 20, false), new u("glieli", 20, false), new u("meli", 20, false), new u("teli", 20, false), new u("veli", 20, false), new u("gli", 20, false), new u("mi", false, false), new u("si", false, false), new u("ti", false, false), new u("vi", false, false), new u("lo", false, false), new u("celo", 31, false), new u("glielo", 31, false), new u("melo", 31, false), new u("telo", 31, false), new u("velo", 31, false)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("ando", false, 1), new u("endo", false, 1), new u("ar", false, 2), new u("er", false, 2), new u("ir", false, 2)]
        }
      }, {
        key: "a_4",
        get: function() {
          return delete t.a_4, t.a_4 = [new u("ic", false, false), new u("abil", false, false), new u("os", false, false), new u("iv", false, 1)]
        }
      }, {
        key: "a_5",
        get: function() {
          return delete t.a_5, t.a_5 = [new u("ic", false, 1), new u("abil", false, 1), new u("iv", false, 1)]
        }
      }, {
        key: "a_6",
        get: function() {
          return delete t.a_6, t.a_6 = [new u("ica", false, 1), new u("logia", false, 3), new u("osa", false, 1), new u("ista", false, 1), new u("iva", false, 9), new u("anza", false, 1), new u("enza", false, 5), new u("ice", false, 1), new u("atrice", 7, 1), new u("iche", false, 1), new u("logie", false, 3), new u("abile", false, 1), new u("ibile", false, 1), new u("usione", false, 4), new u("azione", false, 2), new u("uzione", false, 4), new u("atore", false, 2), new u("ose", false, 1), new u("ante", false, 1), new u("mente", false, 1), new u("amente", 19, 7), new u("iste", false, 1), new u("ive", false, 9), new u("anze", false, 1), new u("enze", false, 5), new u("ici", false, 1), new u("atrici", 25, 1), new u("ichi", false, 1), new u("abili", false, 1), new u("ibili", false, 1), new u("ismi", false, 1), new u("usioni", false, 4), new u("azioni", false, 2), new u("uzioni", false, 4), new u("atori", false, 2), new u("osi", false, 1), new u("anti", false, 1), new u("amenti", false, 6), new u("imenti", false, 6), new u("isti", false, 1), new u("ivi", false, 9), new u("ico", false, 1), new u("ismo", false, 1), new u("oso", false, 1), new u("amento", false, 6), new u("imento", false, 6), new u("ivo", false, 9), new u("it\xe0", false, 8), new u("ist\xe0", false, 1), new u("ist\xe8", false, 1), new u("ist\xec", false, 1)]
        }
      }, {
        key: "a_7",
        get: function() {
          return delete t.a_7, t.a_7 = [new u("isca", false, 1), new u("enda", false, 1), new u("ata", false, 1), new u("ita", false, 1), new u("uta", false, 1), new u("ava", false, 1), new u("eva", false, 1), new u("iva", false, 1), new u("erebbe", false, 1), new u("irebbe", false, 1), new u("isce", false, 1), new u("ende", false, 1), new u("are", false, 1), new u("ere", false, 1), new u("ire", false, 1), new u("asse", false, 1), new u("ate", false, 1), new u("avate", 16, 1), new u("evate", 16, 1), new u("ivate", 16, 1), new u("ete", false, 1), new u("erete", 20, 1), new u("irete", 20, 1), new u("ite", false, 1), new u("ereste", false, 1), new u("ireste", false, 1), new u("ute", false, 1), new u("erai", false, 1), new u("irai", false, 1), new u("isci", false, 1), new u("endi", false, 1), new u("erei", false, 1), new u("irei", false, 1), new u("assi", false, 1), new u("ati", false, 1), new u("iti", false, 1), new u("eresti", false, 1), new u("iresti", false, 1), new u("uti", false, 1), new u("avi", false, 1), new u("evi", false, 1), new u("ivi", false, 1), new u("isco", false, 1), new u("ando", false, 1), new u("endo", false, 1), new u("Yamo", false, 1), new u("iamo", false, 1), new u("avamo", false, 1), new u("evamo", false, 1), new u("ivamo", false, 1), new u("eremo", false, 1), new u("iremo", false, 1), new u("assimo", false, 1), new u("ammo", false, 1), new u("emmo", false, 1), new u("eremmo", 54, 1), new u("iremmo", 54, 1), new u("immo", false, 1), new u("ano", false, 1), new u("iscano", 58, 1), new u("avano", 58, 1), new u("evano", 58, 1), new u("ivano", 58, 1), new u("eranno", false, 1), new u("iranno", false, 1), new u("ono", false, 1), new u("iscono", 65, 1), new u("arono", 65, 1), new u("erono", 65, 1), new u("irono", 65, 1), new u("erebbero", false, 1), new u("irebbero", false, 1), new u("assero", false, 1), new u("essero", false, 1), new u("issero", false, 1), new u("ato", false, 1), new u("ito", false, 1), new u("uto", false, 1), new u("avo", false, 1), new u("evo", false, 1), new u("ivo", false, 1), new u("ar", false, 1), new u("ir", false, 1), new u("er\xe0", false, 1), new u("ir\xe0", false, 1), new u("er\xf2", false, 1), new u("ir\xf2", false, 1)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 8, 2, 1]
        }
      }, {
        key: "g_AEIO",
        get: function() {
          return delete t.g_AEIO, t.g_AEIO = [17, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 8, 2]
        }
      }, {
        key: "g_CG",
        get: function() {
          return delete t.g_CG, t.g_CG = [17]
        }
      }]), t
    }(c),
    I = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_mark_regions$esjava$0",
        value: function() {
          var e = true,
            i = true;
          this.I_p1 = this.limit, e = this.cursor;
          var s = this.cursor + 3;
          if (0 > s || s > this.limit) returnfalse;
          this.cursor = s, this.I_x = this.cursor, this.cursor = e;
          V: for (;;) {
            i = this.cursor;
            do {
              if (!this.in_grouping$esjava$3(t.g_v, 97, 248)) break;
              this.cursor = i;
              break V
            } while (false);
            if (this.cursor = i, this.cursor >= this.limit) returnfalse;
            this.cursor++
          }
          S: for (;;) {
            do {
              if (!this.out_grouping$esjava$3(t.g_v, 97, 248)) break;
              break S
            } while (false);
            if (this.cursor >= this.limit) returnfalse;
            this.cursor++
          }
          this.I_p1 = this.cursor;
          do {
            if (!(this.I_p1 < this.I_x)) break;
            this.I_p1 = this.I_x
          } while (false);
          returntrue
        }
      }, {
        key: "r_main_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true;
          if (i = this.limit - this.cursor, this.cursor < this.I_p1) returnfalse;
          if (this.cursor = this.I_p1, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_0))) return this.limit_backward = s, false;
          switch (this.bra = this.cursor, this.limit_backward = s, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0();
              break;
            case 2:
              e: do {
                r = this.limit - this.cursor;
                do {
                  if (!this.in_grouping_b$esjava$3(t.g_s_ending, 98, 122)) break;
                  break e
                } while (false);
                if (this.cursor = this.limit - r, !this.eq_s_b$esjava$1("k") || !this.out_grouping_b$esjava$3(t.g_v, 97, 248)) returnfalse
              } while (false);
              this.slice_del$esjava$0();
              break;
            case 3:
              this.slice_from$esjava$1("er")
          }
          returntrue
        }
      }, {
        key: "r_consonant_pair$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          return e = this.limit - this.cursor, i = this.limit - this.cursor, !(this.cursor < this.I_p1) && ((this.cursor = this.I_p1, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, 0 === this.find_among_b$esjava$1(t.a_1)) ? (this.limit_backward = s, false) : (this.bra = this.cursor, this.limit_backward = s, this.cursor = this.limit - e, !(this.cursor <= this.limit_backward) && (this.cursor--, this.bra = this.cursor, this.slice_del$esjava$0(), true)))
        }
      }, {
        key: "r_other_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          if (i = this.limit - this.cursor, this.cursor < this.I_p1) returnfalse;
          if (this.cursor = this.I_p1, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_2))) return this.limit_backward = s, false;
          switch (this.bra = this.cursor, this.limit_backward = s, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true;
          e = this.cursor;
          do
            if (!this.r_mark_regions$esjava$0()) break; while (false);
          this.cursor = e, this.limit_backward = this.cursor, this.cursor = this.limit, i = this.limit - this.cursor;
          do
            if (!this.r_main_suffix$esjava$0()) break; while (false);
          this.cursor = this.limit - i, s = this.limit - this.cursor;
          do
            if (!this.r_consonant_pair$esjava$0()) break; while (false);
          this.cursor = this.limit - s, t = this.limit - this.cursor;
          do
            if (!this.r_other_suffix$esjava$0()) break; while (false);
          return this.cursor = this.limit - t, this.cursor = this.limit_backward, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "I_x",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_x") ? this._$esjava$I_x : this._$esjava$I_x = 0
        },
        set: function(e) {
          this._$esjava$I_x = e
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("a", false, 1), new u("e", false, 1), new u("ede", 1, 1), new u("ande", 1, 1), new u("ende", 1, 1), new u("ane", 1, 1), new u("ene", 1, 1), new u("hetene", 6, 1), new u("erte", 1, 3), new u("en", false, 1), new u("heten", 9, 1), new u("ar", false, 1), new u("er", false, 1), new u("heter", 12, 1), new u("s", false, 2), new u("as", 14, 1), new u("es", 14, 1), new u("edes", 16, 1), new u("endes", 16, 1), new u("enes", 16, 1), new u("hetenes", 19, 1), new u("ens", 14, 1), new u("hetens", 21, 1), new u("ers", 14, 1), new u("ets", 14, 1), new u("et", false, 1), new u("het", 25, 1), new u("ert", false, 3), new u("ast", false, 1)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("dt", false, false), new u("vt", false, false)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("leg", false, 1), new u("eleg", 0, 1), new u("ig", false, 1), new u("eig", 2, 1), new u("lig", 2, 1), new u("elig", 4, 1), new u("els", false, 1), new u("lov", false, 1), new u("elov", 7, 1), new u("slov", 7, 1), new u("hetslov", 9, 1)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128]
        }
      }, {
        key: "g_s_ending",
        get: function() {
          return delete t.g_s_ending, t.g_s_ending = [119, 125, 149, 1]
        }
      }]), t
    }(c),
    q = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_shortv$esjava$0",
        value: function() {
          return !!this.out_grouping_b$esjava$3(t.g_v_WXY, 89, 121) && !!this.in_grouping_b$esjava$3(t.g_v, 97, 121) && !!this.out_grouping_b$esjava$3(t.g_v, 97, 121)
        }
      }, {
        key: "r_R1$esjava$0",
        value: function() {
          return this.I_p1 <= this.cursor
        }
      }, {
        key: "r_R2$esjava$0",
        value: function() {
          return this.I_p2 <= this.cursor
        }
      }, {
        key: "r_Step_1a$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_0))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_from$esjava$1("ss");
              break;
            case 2:
              this.slice_from$esjava$1("i");
              break;
            case 3:
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Step_1b$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_2))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_R1$esjava$0()) returnfalse;
              this.slice_from$esjava$1("ee");
              break;
            case 2:
              i = this.limit - this.cursor;
              V: for (;;) {
                do {
                  if (!this.in_grouping_b$esjava$3(t.g_v, 97, 121)) break;
                  break V
                } while (false);
                if (this.cursor <= this.limit_backward) returnfalse;
                this.cursor--
              }
              if (this.cursor = this.limit - i, this.slice_del$esjava$0(), s = this.limit - this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_1))) returnfalse;
              switch (this.cursor = this.limit - s, e) {
                case 0:
                  returnfalse;
                case 1:
                  var a = this.cursor;
                  this.insert$esjava$3(this.cursor, this.cursor, "e"), this.cursor = a;
                  break;
                case 2:
                  if (this.ket = this.cursor, this.cursor <= this.limit_backward) returnfalse;
                  this.cursor--, this.bra = this.cursor, this.slice_del$esjava$0();
                  break;
                case 3:
                  if (this.cursor !== this.I_p1 || (r = this.limit - this.cursor, !this.r_shortv$esjava$0())) returnfalse;
                  this.cursor = this.limit - r;
                  var a = this.cursor;
                  this.insert$esjava$3(this.cursor, this.cursor, "e"), this.cursor = a
              }
          }
          returntrue
        }
      }, {
        key: "r_Step_1c$esjava$0",
        value: function() {
          var e = true;
          this.ket = this.cursor;
          e: do {
            e = this.limit - this.cursor;
            do {
              if (!this.eq_s_b$esjava$1("y")) break;
              break e
            } while (false);
            if (this.cursor = this.limit - e, !this.eq_s_b$esjava$1("Y")) returnfalse
          } while (false);
          this.bra = this.cursor;
          S: for (;;) {
            do {
              if (!this.in_grouping_b$esjava$3(t.g_v, 97, 121)) break;
              break S
            } while (false);
            if (this.cursor <= this.limit_backward) returnfalse;
            this.cursor--
          }
          return this.slice_from$esjava$1("i"), true
        }
      }, {
        key: "r_Step_2$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_3)) || (this.bra = this.cursor, !this.r_R1$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_from$esjava$1("tion");
              break;
            case 2:
              this.slice_from$esjava$1("ence");
              break;
            case 3:
              this.slice_from$esjava$1("ance");
              break;
            case 4:
              this.slice_from$esjava$1("able");
              break;
            case 5:
              this.slice_from$esjava$1("ent");
              break;
            case 6:
              this.slice_from$esjava$1("e");
              break;
            case 7:
              this.slice_from$esjava$1("ize");
              break;
            case 8:
              this.slice_from$esjava$1("ate");
              break;
            case 9:
            case 10:
              this.slice_from$esjava$1("al");
              break;
            case 11:
              this.slice_from$esjava$1("ful");
              break;
            case 12:
              this.slice_from$esjava$1("ous");
              break;
            case 13:
              this.slice_from$esjava$1("ive");
              break;
            case 14:
              this.slice_from$esjava$1("ble")
          }
          returntrue
        }
      }, {
        key: "r_Step_3$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_4)) || (this.bra = this.cursor, !this.r_R1$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_from$esjava$1("al");
              break;
            case 2:
              this.slice_from$esjava$1("ic");
              break;
            case 3:
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Step_4$esjava$0",
        value: function() {
          var e = true,
            i = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_5)) || (this.bra = this.cursor, !this.r_R2$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0();
              break;
            case 2:
              e: do {
                i = this.limit - this.cursor;
                do {
                  if (!this.eq_s_b$esjava$1("s")) break;
                  break e
                } while (false);
                if (this.cursor = this.limit - i, !this.eq_s_b$esjava$1("t")) returnfalse
              } while (false);
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_Step_5a$esjava$0",
        value: function() {
          var e = true,
            i = true;
          if (this.ket = this.cursor, !this.eq_s_b$esjava$1("e")) returnfalse;
          this.bra = this.cursor;
          e: do {
            e = this.limit - this.cursor;
            do {
              if (!this.r_R2$esjava$0()) break;
              break e
            } while (false);
            if (this.cursor = this.limit - e, !this.r_R1$esjava$0()) returnfalse;
            i = this.limit - this.cursor;
            do {
              if (!this.r_shortv$esjava$0()) break;
              returnfalse
            } while (false);
            this.cursor = this.limit - i
          } while (false);
          return this.slice_del$esjava$0(), true
        }
      }, {
        key: "r_Step_5b$esjava$0",
        value: function() {
          return this.ket = this.cursor, !!this.eq_s_b$esjava$1("l") && (this.bra = this.cursor, !!this.r_R2$esjava$0() && !!this.eq_s_b$esjava$1("l") && (this.slice_del$esjava$0(), true))
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true,
            c = true,
            _ = true,
            l = true,
            w = true,
            $ = true,
            v = true,
            f = true;
          this.B_Y_found = false, e = this.cursor;
          do {
            if (this.bra = this.cursor, !this.eq_s$esjava$1("y")) break;
            this.ket = this.cursor, this.slice_from$esjava$1("Y"), this.B_Y_found = true
          } while (false);
          this.cursor = e, i = this.cursor;
          do W: for (;;) {
            s = this.cursor;
            t: do {
              U: for (;;) {
                r = this.cursor;
                do {
                  if (!this.in_grouping$esjava$3(t.g_v, 97, 121) || (this.bra = this.cursor, !this.eq_s$esjava$1("y"))) break;
                  this.ket = this.cursor, this.cursor = r;
                  break U
                } while (false);
                if (this.cursor = r, this.cursor >= this.limit) break t;
                this.cursor++
              }
              this.slice_from$esjava$1("Y"),
              this.B_Y_found = true;
              continue W
            } while (false);
            this.cursor = s;
            break
          }
          while (false);
          this.cursor = i, this.I_p1 = this.limit, this.I_p2 = this.limit, a = this.cursor;
          n: do {
            j: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 121)) break;
                break j
              } while (false);
              if (this.cursor >= this.limit) break n;
              this.cursor++
            }
            B: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 121)) break;
                break B
              } while (false);
              if (this.cursor >= this.limit) break n;
              this.cursor++
            }
            this.I_p1 = this.cursor;p: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 121)) break;
                break p
              } while (false);
              if (this.cursor >= this.limit) break n;
              this.cursor++
            }
            N: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 121)) break;
                break N
              } while (false);
              if (this.cursor >= this.limit) break n;
              this.cursor++
            }
            this.I_p2 = this.cursor
          } while (false);
          this.cursor = a, this.limit_backward = this.cursor, this.cursor = this.limit, n = this.limit - this.cursor;
          do
            if (!this.r_Step_1a$esjava$0()) break; while (false);
          this.cursor = this.limit - n, h = this.limit - this.cursor;
          do
            if (!this.r_Step_1b$esjava$0()) break; while (false);
          this.cursor = this.limit - h, o = this.limit - this.cursor;
          do
            if (!this.r_Step_1c$esjava$0()) break; while (false);
          this.cursor = this.limit - o, u = this.limit - this.cursor;
          do
            if (!this.r_Step_2$esjava$0()) break; while (false);
          this.cursor = this.limit - u, c = this.limit - this.cursor;
          do
            if (!this.r_Step_3$esjava$0()) break; while (false);
          this.cursor = this.limit - c, _ = this.limit - this.cursor;
          do
            if (!this.r_Step_4$esjava$0()) break; while (false);
          this.cursor = this.limit - _, l = this.limit - this.cursor;
          do
            if (!this.r_Step_5a$esjava$0()) break; while (false);
          this.cursor = this.limit - l, w = this.limit - this.cursor;
          do
            if (!this.r_Step_5b$esjava$0()) break; while (false);
          this.cursor = this.limit - w, this.cursor = this.limit_backward, $ = this.cursor;
          do {
            if (!this.B_Y_found) break;
            X: for (;;) {
              v = this.cursor;
              F: do {
                T: for (;;) {
                  f = this.cursor;
                  do {
                    if (this.bra = this.cursor, !this.eq_s$esjava$1("Y")) break;
                    this.ket = this.cursor, this.cursor = f;
                    break T
                  } while (false);
                  if (this.cursor = f, this.cursor >= this.limit) break F;
                  this.cursor++
                }
                this.slice_from$esjava$1("y");
                continue X
              } while (false);
              this.cursor = v;
              break
            }
          } while (false);
          return this.cursor = $, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "B_Y_found",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$B_Y_found") ? this._$esjava$B_Y_found : this._$esjava$B_Y_found = false
        },
        set: function(e) {
          this._$esjava$B_Y_found = e
        }
      }, {
        key: "I_p2",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p2") ? this._$esjava$I_p2 : this._$esjava$I_p2 = 0
        },
        set: function(e) {
          this._$esjava$I_p2 = e
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("s", false, 3), new u("ies", 0, 2), new u("sses", 0, 1), new u("ss", 0, false)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("", false, 3), new u("bb", 0, 2), new u("dd", 0, 2), new u("ff", 0, 2), new u("gg", 0, 2), new u("bl", 0, 1), new u("mm", 0, 2), new u("nn", 0, 2), new u("pp", 0, 2), new u("rr", 0, 2), new u("at", 0, 1), new u("tt", 0, 2), new u("iz", 0, 1)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("ed", false, 2), new u("eed", 0, 1), new u("ing", false, 2)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("anci", false, 3), new u("enci", false, 2), new u("abli", false, 4), new u("eli", false, 6), new u("alli", false, 9), new u("ousli", false, 12), new u("entli", false, 5), new u("aliti", false, 10), new u("biliti", false, 14), new u("iviti", false, 13), new u("tional", false, 1), new u("ational", 10, 8), new u("alism", false, 10), new u("ation", false, 8), new u("ization", 13, 7), new u("izer", false, 7), new u("ator", false, 8), new u("iveness", false, 13), new u("fulness", false, 11), new u("ousness", false, 12)]
        }
      }, {
        key: "a_4",
        get: function() {
          return delete t.a_4, t.a_4 = [new u("icate", false, 2), new u("ative", false, 3), new u("alize", false, 1), new u("iciti", false, 2), new u("ical", false, 2), new u("ful", false, 3), new u("ness", false, 3)]
        }
      }, {
        key: "a_5",
        get: function() {
          return delete t.a_5, t.a_5 = [new u("ic", false, 1), new u("ance", false, 1), new u("ence", false, 1), new u("able", false, 1), new u("ible", false, 1), new u("ate", false, 1), new u("ive", false, 1), new u("ize", false, 1), new u("iti", false, 1), new u("al", false, 1), new u("ism", false, 1), new u("ion", false, 2), new u("er", false, 1), new u("ous", false, 1), new u("ant", false, 1), new u("ent", false, 1), new u("ment", 15, 1), new u("ement", 16, 1), new u("ou", false, 1)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [17, 65, 16, 1]
        }
      }, {
        key: "g_v_WXY",
        get: function() {
          return delete t.g_v_WXY, t.g_v_WXY = [1, 17, 65, 208, 1]
        }
      }]), t
    }(c),
    O = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_prelude$esjava$0",
        value: function() {
          var e = true,
            i = true;
          P: for (;;) {
            i = this.cursor;
            i: do {
              if (this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_0))) break;
              switch (this.ket = this.cursor, e) {
                case 0:
                  break i;
                case 1:
                  this.slice_from$esjava$1("a~");
                  break;
                case 2:
                  this.slice_from$esjava$1("o~");
                  break;
                case 3:
                  if (this.cursor >= this.limit) break i;
                  this.cursor++
              }
              continue P
            } while (false);
            this.cursor = i;
            break
          }
          returntrue
        }
      }, {
        key: "r_mark_regions$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true;
          this.I_pV = this.limit, this.I_p1 = this.limit, this.I_p2 = this.limit, e = this.cursor;
          e: do {
            i: do {
              i = this.cursor;
              s: do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 250)) break;
                t: do {
                  s = this.cursor;
                  r: do {
                    if (!this.out_grouping$esjava$3(t.g_v, 97, 250)) break;
                    m: for (;;) {
                      do {
                        if (!this.in_grouping$esjava$3(t.g_v, 97, 250)) break;
                        break m
                      } while (false);
                      if (this.cursor >= this.limit) break r;
                      this.cursor++
                    }
                    break t
                  } while (false);
                  if (this.cursor = s, !this.in_grouping$esjava$3(t.g_v, 97, 250)) break s;
                  j: for (;;) {
                    do {
                      if (!this.out_grouping$esjava$3(t.g_v, 97, 250)) break;
                      break j
                    } while (false);
                    if (this.cursor >= this.limit) break s;
                    this.cursor++
                  }
                } while (false);
                break i
              } while (false);
              if (this.cursor = i, !this.out_grouping$esjava$3(t.g_v, 97, 250)) break e;
              o: do {
                r = this.cursor;
                g: do {
                  if (!this.out_grouping$esjava$3(t.g_v, 97, 250)) break;
                  p: for (;;) {
                    do {
                      if (!this.in_grouping$esjava$3(t.g_v, 97, 250)) break;
                      break p
                    } while (false);
                    if (this.cursor >= this.limit) break g;
                    this.cursor++
                  }
                  break o
                } while (false);
                if (this.cursor = r, !this.in_grouping$esjava$3(t.g_v, 97, 250) || this.cursor >= this.limit) break e;
                this.cursor++
              } while (false)
            } while (false);this.I_pV = this.cursor
          } while (false);
          this.cursor = e, a = this.cursor;
          y: do {
            I: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 250)) break;
                break I
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            q: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 250)) break;
                break q
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            this.I_p1 = this.cursor;O: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 250)) break;
                break O
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            x: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 250)) break;
                break x
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            this.I_p2 = this.cursor
          } while (false);
          return this.cursor = a, true
        }
      }, {
        key: "r_postlude$esjava$0",
        value: function() {
          var e = true,
            i = true;
          P: for (;;) {
            i = this.cursor;
            i: do {
              if (this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_1))) break;
              switch (this.ket = this.cursor, e) {
                case 0:
                  break i;
                case 1:
                  this.slice_from$esjava$1("\xe3");
                  break;
                case 2:
                  this.slice_from$esjava$1("\xf5");
                  break;
                case 3:
                  if (this.cursor >= this.limit) break i;
                  this.cursor++
              }
              continue P
            } while (false);
            this.cursor = i;
            break
          }
          returntrue
        }
      }, {
        key: "r_RV$esjava$0",
        value: function() {
          return this.I_pV <= this.cursor
        }
      }, {
        key: "r_R1$esjava$0",
        value: function() {
          return this.I_p1 <= this.cursor
        }
      }, {
        key: "r_R2$esjava$0",
        value: function() {
          return this.I_p2 <= this.cursor
        }
      }, {
        key: "r_standard_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_5))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_from$esjava$1("log");
              break;
            case 3:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_from$esjava$1("u");
              break;
            case 4:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_from$esjava$1("ente");
              break;
            case 5:
              if (!this.r_R1$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), i = this.limit - this.cursor;
              e: do {
                if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_2)) || (this.bra = this.cursor, !this.r_R2$esjava$0())) {
                  this.cursor = this.limit - i;
                  break
                }
                switch (this.slice_del$esjava$0(), e) {
                  case 0:
                    this.cursor = this.limit - i;
                    break e;
                  case 1:
                    if (this.ket = this.cursor, !this.eq_s_b$esjava$1("at") || (this.bra = this.cursor, !this.r_R2$esjava$0())) {
                      this.cursor = this.limit - i;
                      break e
                    }
                    this.slice_del$esjava$0()
                }
              } while (false);
              break;
            case 6:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), s = this.limit - this.cursor;
              i: do {
                if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_3))) {
                  this.cursor = this.limit - s;
                  break
                }
                switch (this.bra = this.cursor, e) {
                  case 0:
                    this.cursor = this.limit - s;
                    break i;
                  case 1:
                    if (!this.r_R2$esjava$0()) {
                      this.cursor = this.limit - s;
                      break i
                    }
                    this.slice_del$esjava$0()
                }
              } while (false);
              break;
            case 7:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), r = this.limit - this.cursor;
              s: do {
                if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_4))) {
                  this.cursor = this.limit - r;
                  break
                }
                switch (this.bra = this.cursor, e) {
                  case 0:
                    this.cursor = this.limit - r;
                    break s;
                  case 1:
                    if (!this.r_R2$esjava$0()) {
                      this.cursor = this.limit - r;
                      break s
                    }
                    this.slice_del$esjava$0()
                }
              } while (false);
              break;
            case 8:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), a = this.limit - this.cursor;
              do {
                if (this.ket = this.cursor, !this.eq_s_b$esjava$1("at") || (this.bra = this.cursor, !this.r_R2$esjava$0())) {
                  this.cursor = this.limit - a;
                  break
                }
                this.slice_del$esjava$0()
              } while (false);
              break;
            case 9:
              if (!this.r_RV$esjava$0() || !this.eq_s_b$esjava$1("e")) returnfalse;
              this.slice_from$esjava$1("ir")
          }
          returntrue
        }
      }, {
        key: "r_verb_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          if (i = this.limit - this.cursor, this.cursor < this.I_pV) returnfalse;
          if (this.cursor = this.I_pV, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_6))) return this.limit_backward = s, false;
          switch (this.bra = this.cursor, e) {
            case 0:
              return this.limit_backward = s, false;
            case 1:
              this.slice_del$esjava$0()
          }
          return this.limit_backward = s, true
        }
      }, {
        key: "r_residual_suffix$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_7))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_RV$esjava$0()) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_residual_form$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_8))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_RV$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), this.ket = this.cursor;
              e: do {
                i = this.limit - this.cursor;
                do {
                  if (!this.eq_s_b$esjava$1("u") || (this.bra = this.cursor, s = this.limit - this.cursor, !this.eq_s_b$esjava$1("g"))) break;
                  this.cursor = this.limit - s;
                  break e
                } while (false);
                if (this.cursor = this.limit - i, !this.eq_s_b$esjava$1("i") || (this.bra = this.cursor, r = this.limit - this.cursor, !this.eq_s_b$esjava$1("c"))) returnfalse;
                this.cursor = this.limit - r
              } while (false);
              if (!this.r_RV$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              this.slice_from$esjava$1("c")
          }
          returntrue
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true;
          e = this.cursor;
          do
            if (!this.r_prelude$esjava$0()) break; while (false);
          this.cursor = e, i = this.cursor;
          do
            if (!this.r_mark_regions$esjava$0()) break; while (false);
          this.cursor = i, this.limit_backward = this.cursor, this.cursor = this.limit, s = this.limit - this.cursor;
          s: do t: do {
            t = this.limit - this.cursor;
            r: do {
              r = this.limit - this.cursor;
              a: do {
                a = this.limit - this.cursor;
                do {
                  if (!this.r_standard_suffix$esjava$0()) break;
                  break a
                } while (false);
                if (this.cursor = this.limit - a, !this.r_verb_suffix$esjava$0()) break r
              } while (false);
              this.cursor = this.limit - r, n = this.limit - this.cursor;
              do {
                if (this.ket = this.cursor, !this.eq_s_b$esjava$1("i") || (this.bra = this.cursor, h = this.limit - this.cursor, !this.eq_s_b$esjava$1("c")) || (this.cursor = this.limit - h, !this.r_RV$esjava$0())) break;
                this.slice_del$esjava$0()
              } while (false);
              this.cursor = this.limit - n;
              break t
            } while (false);
            if (this.cursor = this.limit - t, !this.r_residual_suffix$esjava$0()) break s
          } while (false); while (false);
          this.cursor = this.limit - s, o = this.limit - this.cursor;
          do
            if (!this.r_residual_form$esjava$0()) break; while (false);
          this.cursor = this.limit - o, this.cursor = this.limit_backward, u = this.cursor;
          do
            if (!this.r_postlude$esjava$0()) break; while (false);
          return this.cursor = u, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "I_p2",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p2") ? this._$esjava$I_p2 : this._$esjava$I_p2 = 0
        },
        set: function(e) {
          this._$esjava$I_p2 = e
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }, {
        key: "I_pV",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_pV") ? this._$esjava$I_pV : this._$esjava$I_pV = 0
        },
        set: function(e) {
          this._$esjava$I_pV = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("", false, 3), new u("\xe3", 0, 1), new u("\xf5", 0, 2)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("", false, 3), new u("a~", 0, 1), new u("o~", 0, 2)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("ic", false, false), new u("ad", false, false), new u("os", false, false), new u("iv", false, 1)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("ante", false, 1), new u("avel", false, 1), new u("\xedvel", false, 1)]
        }
      }, {
        key: "a_4",
        get: function() {
          return delete t.a_4, t.a_4 = [new u("ic", false, 1), new u("abil", false, 1), new u("iv", false, 1)]
        }
      }, {
        key: "a_5",
        get: function() {
          return delete t.a_5, t.a_5 = [new u("ica", false, 1), new u("\xe2ncia", false, 1), new u("\xeancia", false, 4), new u("logia", false, 2), new u("ira", false, 9), new u("adora", false, 1), new u("osa", false, 1), new u("ista", false, 1), new u("iva", false, 8), new u("eza", false, 1), new u("idade", false, 7), new u("ante", false, 1), new u("mente", false, 6), new u("amente", 12, 5), new u("\xe1vel", false, 1), new u("\xedvel", false, 1), new u("ico", false, 1), new u("ismo", false, 1), new u("oso", false, 1), new u("amento", false, 1), new u("imento", false, 1), new u("ivo", false, 8), new u("a\xe7a~o", false, 1), new u("u\xe7a~o", false, 3), new u("ador", false, 1), new u("icas", false, 1), new u("\xeancias", false, 4), new u("logias", false, 2), new u("iras", false, 9), new u("adoras", false, 1), new u("osas", false, 1), new u("istas", false, 1), new u("ivas", false, 8), new u("ezas", false, 1), new u("idades", false, 7), new u("adores", false, 1), new u("antes", false, 1), new u("a\xe7o~es", false, 1), new u("u\xe7o~es", false, 3), new u("icos", false, 1), new u("ismos", false, 1), new u("osos", false, 1), new u("amentos", false, 1), new u("imentos", false, 1), new u("ivos", false, 8)]
        }
      }, {
        key: "a_6",
        get: function() {
          return delete t.a_6, t.a_6 = [new u("ada", false, 1), new u("ida", false, 1), new u("ia", false, 1), new u("aria", 2, 1), new u("eria", 2, 1), new u("iria", 2, 1), new u("ara", false, 1), new u("era", false, 1), new u("ira", false, 1), new u("ava", false, 1), new u("asse", false, 1), new u("esse", false, 1), new u("isse", false, 1), new u("aste", false, 1), new u("este", false, 1), new u("iste", false, 1), new u("ei", false, 1), new u("arei", 16, 1), new u("erei", 16, 1), new u("irei", 16, 1), new u("am", false, 1), new u("iam", 20, 1), new u("ariam", 21, 1), new u("eriam", 21, 1), new u("iriam", 21, 1), new u("aram", 20, 1), new u("eram", 20, 1), new u("iram", 20, 1), new u("avam", 20, 1), new u("em", false, 1), new u("arem", 29, 1), new u("erem", 29, 1), new u("irem", 29, 1), new u("assem", 29, 1), new u("essem", 29, 1), new u("issem", 29, 1), new u("ado", false, 1), new u("ido", false, 1), new u("ando", false, 1), new u("endo", false, 1), new u("indo", false, 1), new u("ara~o", false, 1), new u("era~o", false, 1), new u("ira~o", false, 1), new u("ar", false, 1), new u("er", false, 1), new u("ir", false, 1), new u("as", false, 1), new u("adas", 47, 1), new u("idas", 47, 1), new u("ias", 47, 1), new u("arias", 50, 1), new u("erias", 50, 1), new u("irias", 50, 1), new u("aras", 47, 1), new u("eras", 47, 1), new u("iras", 47, 1), new u("avas", 47, 1), new u("es", false, 1), new u("ardes", 58, 1), new u("erdes", 58, 1), new u("irdes", 58, 1), new u("ares", 58, 1), new u("eres", 58, 1), new u("ires", 58, 1), new u("asses", 58, 1), new u("esses", 58, 1), new u("isses", 58, 1), new u("astes", 58, 1), new u("estes", 58, 1), new u("istes", 58, 1), new u("is", false, 1), new u("ais", 71, 1), new u("eis", 71, 1), new u("areis", 73, 1), new u("ereis", 73, 1), new u("ireis", 73, 1), new u("\xe1reis", 73, 1), new u("\xe9reis", 73, 1), new u("\xedreis", 73, 1), new u("\xe1sseis", 73, 1), new u("\xe9sseis", 73, 1), new u("\xedsseis", 73, 1), new u("\xe1veis", 73, 1), new u("\xedeis", 73, 1), new u("ar\xedeis", 84, 1), new u("er\xedeis", 84, 1), new u("ir\xedeis", 84, 1), new u("ados", false, 1), new u("idos", false, 1), new u("amos", false, 1), new u("\xe1ramos", 90, 1), new u("\xe9ramos", 90, 1), new u("\xedramos", 90, 1), new u("\xe1vamos", 90, 1), new u("\xedamos", 90, 1), new u("ar\xedamos", 95, 1), new u("er\xedamos", 95, 1), new u("ir\xedamos", 95, 1), new u("emos", false, 1), new u("aremos", 99, 1), new u("eremos", 99, 1), new u("iremos", 99, 1), new u("\xe1ssemos", 99, 1), new u("\xeassemos", 99, 1), new u("\xedssemos", 99, 1), new u("imos", false, 1), new u("armos", false, 1), new u("ermos", false, 1), new u("irmos", false, 1), new u("\xe1mos", false, 1), new u("ar\xe1s", false, 1), new u("er\xe1s", false, 1), new u("ir\xe1s", false, 1), new u("eu", false, 1), new u("iu", false, 1), new u("ou", false, 1), new u("ar\xe1", false, 1), new u("er\xe1", false, 1), new u("ir\xe1", false, 1)]
        }
      }, {
        key: "a_7",
        get: function() {
          return delete t.a_7, t.a_7 = [new u("a", false, 1), new u("i", false, 1), new u("o", false, 1), new u("os", false, 1), new u("\xe1", false, 1), new u("\xed", false, 1), new u("\xf3", false, 1)]
        }
      }, {
        key: "a_8",
        get: function() {
          return delete t.a_8, t.a_8 = [new u("e", false, 1), new u("\xe7", false, 2), new u("\xe9", false, 1), new u("\xea", false, 1)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 19, 12, 2]
        }
      }]), t
    }(c),
    x = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_prelude$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          P: for (;;) {
            e = this.cursor;
            i: do {
              S: for (;;) {
                i = this.cursor;
                t: do {
                  if (!this.in_grouping$esjava$3(t.g_v, 97, 259)) break;
                  this.bra = this.cursor;
                  r: do {
                    s = this.cursor;
                    do {
                      if (!this.eq_s$esjava$1("u") || (this.ket = this.cursor, !this.in_grouping$esjava$3(t.g_v, 97, 259))) break;
                      this.slice_from$esjava$1("U");
                      break r
                    } while (false);
                    if (this.cursor = s, !this.eq_s$esjava$1("i") || (this.ket = this.cursor, !this.in_grouping$esjava$3(t.g_v, 97, 259))) break t;
                    this.slice_from$esjava$1("I")
                  } while (false);
                  this.cursor = i;
                  break S
                } while (false);
                if (this.cursor = i, this.cursor >= this.limit) break i;
                this.cursor++
              }
              continue P
            } while (false);
            this.cursor = e;
            break
          }
          returntrue
        }
      }, {
        key: "r_mark_regions$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true;
          this.I_pV = this.limit, this.I_p1 = this.limit, this.I_p2 = this.limit, e = this.cursor;
          e: do {
            i: do {
              i = this.cursor;
              s: do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 259)) break;
                t: do {
                  s = this.cursor;
                  r: do {
                    if (!this.out_grouping$esjava$3(t.g_v, 97, 259)) break;
                    m: for (;;) {
                      do {
                        if (!this.in_grouping$esjava$3(t.g_v, 97, 259)) break;
                        break m
                      } while (false);
                      if (this.cursor >= this.limit) break r;
                      this.cursor++
                    }
                    break t
                  } while (false);
                  if (this.cursor = s, !this.in_grouping$esjava$3(t.g_v, 97, 259)) break s;
                  j: for (;;) {
                    do {
                      if (!this.out_grouping$esjava$3(t.g_v, 97, 259)) break;
                      break j
                    } while (false);
                    if (this.cursor >= this.limit) break s;
                    this.cursor++
                  }
                } while (false);
                break i
              } while (false);
              if (this.cursor = i, !this.out_grouping$esjava$3(t.g_v, 97, 259)) break e;
              o: do {
                r = this.cursor;
                g: do {
                  if (!this.out_grouping$esjava$3(t.g_v, 97, 259)) break;
                  p: for (;;) {
                    do {
                      if (!this.in_grouping$esjava$3(t.g_v, 97, 259)) break;
                      break p
                    } while (false);
                    if (this.cursor >= this.limit) break g;
                    this.cursor++
                  }
                  break o
                } while (false);
                if (this.cursor = r, !this.in_grouping$esjava$3(t.g_v, 97, 259) || this.cursor >= this.limit) break e;
                this.cursor++
              } while (false)
            } while (false);this.I_pV = this.cursor
          } while (false);
          this.cursor = e, a = this.cursor;
          y: do {
            I: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 259)) break;
                break I
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            q: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 259)) break;
                break q
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            this.I_p1 = this.cursor;O: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 259)) break;
                break O
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            x: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 259)) break;
                break x
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            this.I_p2 = this.cursor
          } while (false);
          return this.cursor = a, true
        }
      }, {
        key: "r_postlude$esjava$0",
        value: function() {
          var e = true,
            i = true;
          P: for (;;) {
            i = this.cursor;
            i: do {
              if (this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_0))) break;
              switch (this.ket = this.cursor, e) {
                case 0:
                  break i;
                case 1:
                  this.slice_from$esjava$1("i");
                  break;
                case 2:
                  this.slice_from$esjava$1("u");
                  break;
                case 3:
                  if (this.cursor >= this.limit) break i;
                  this.cursor++
              }
              continue P
            } while (false);
            this.cursor = i;
            break
          }
          returntrue
        }
      }, {
        key: "r_RV$esjava$0",
        value: function() {
          return this.I_pV <= this.cursor
        }
      }, {
        key: "r_R1$esjava$0",
        value: function() {
          return this.I_p1 <= this.cursor
        }
      }, {
        key: "r_R2$esjava$0",
        value: function() {
          return this.I_p2 <= this.cursor
        }
      }, {
        key: "r_step_0$esjava$0",
        value: function() {
          var e = true,
            i = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_1)) || (this.bra = this.cursor, !this.r_R1$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0();
              break;
            case 2:
              this.slice_from$esjava$1("a");
              break;
            case 3:
              this.slice_from$esjava$1("e");
              break;
            case 4:
              this.slice_from$esjava$1("i");
              break;
            case 5:
              i = this.limit - this.cursor;
              do {
                if (!this.eq_s_b$esjava$1("ab")) break;
                returnfalse
              } while (false);
              this.cursor = this.limit - i, this.slice_from$esjava$1("i");
              break;
            case 6:
              this.slice_from$esjava$1("at");
              break;
            case 7:
              this.slice_from$esjava$1("aţi")
          }
          returntrue
        }
      }, {
        key: "r_combo_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true;
          if (i = this.limit - this.cursor, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_2)) || (this.bra = this.cursor, !this.r_R1$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_from$esjava$1("abil");
              break;
            case 2:
              this.slice_from$esjava$1("ibil");
              break;
            case 3:
              this.slice_from$esjava$1("iv");
              break;
            case 4:
              this.slice_from$esjava$1("ic");
              break;
            case 5:
              this.slice_from$esjava$1("at");
              break;
            case 6:
              this.slice_from$esjava$1("it")
          }
          return this.B_standard_suffix_removed = true, this.cursor = this.limit - i, true
        }
      }, {
        key: "r_standard_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true;
          this.B_standard_suffix_removed = false;
          P: for (;;) {
            i = this.limit - this.cursor;
            do {
              if (!this.r_combo_suffix$esjava$0()) break;
              continue P
            } while (false);
            this.cursor = this.limit - i;
            break
          }
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_3)) || (this.bra = this.cursor, !this.r_R2$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!this.eq_s_b$esjava$1("ţ")) returnfalse;
              this.bra = this.cursor, this.slice_from$esjava$1("t");
              break;
            case 3:
              this.slice_from$esjava$1("ist")
          }
          return this.B_standard_suffix_removed = true, true
        }
      }, {
        key: "r_verb_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true;
          if (i = this.limit - this.cursor, this.cursor < this.I_pV) returnfalse;
          if (this.cursor = this.I_pV, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_4))) return this.limit_backward = s, false;
          switch (this.bra = this.cursor, e) {
            case 0:
              return this.limit_backward = s, false;
            case 1:
              e: do {
                r = this.limit - this.cursor;
                do {
                  if (!this.out_grouping_b$esjava$3(t.g_v, 97, 259)) break;
                  break e
                } while (false);
                if (this.cursor = this.limit - r, !this.eq_s_b$esjava$1("u")) return this.limit_backward = s, false
              } while (false);
              this.slice_del$esjava$0();
              break;
            case 2:
              this.slice_del$esjava$0()
          }
          return this.limit_backward = s, true
        }
      }, {
        key: "r_vowel_suffix$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_5)) || (this.bra = this.cursor, !this.r_RV$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true,
            a = true,
            n = true,
            h = true;
          e = this.cursor;
          do
            if (!this.r_prelude$esjava$0()) break; while (false);
          this.cursor = e, i = this.cursor;
          do
            if (!this.r_mark_regions$esjava$0()) break; while (false);
          this.cursor = i, this.limit_backward = this.cursor, this.cursor = this.limit, s = this.limit - this.cursor;
          do
            if (!this.r_step_0$esjava$0()) break; while (false);
          this.cursor = this.limit - s, t = this.limit - this.cursor;
          do
            if (!this.r_standard_suffix$esjava$0()) break; while (false);
          this.cursor = this.limit - t, r = this.limit - this.cursor;
          r: do a: do {
            a = this.limit - this.cursor;
            do {
              if (!this.B_standard_suffix_removed) break;
              break a
            } while (false);
            if (this.cursor = this.limit - a, !this.r_verb_suffix$esjava$0()) break r
          } while (false); while (false);
          this.cursor = this.limit - r, n = this.limit - this.cursor;
          do
            if (!this.r_vowel_suffix$esjava$0()) break; while (false);
          this.cursor = this.limit - n, this.cursor = this.limit_backward, h = this.cursor;
          do
            if (!this.r_postlude$esjava$0()) break; while (false);
          return this.cursor = h, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "B_standard_suffix_removed",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$B_standard_suffix_removed") ? this._$esjava$B_standard_suffix_removed : this._$esjava$B_standard_suffix_removed = false
        },
        set: function(e) {
          this._$esjava$B_standard_suffix_removed = e
        }
      }, {
        key: "I_p2",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p2") ? this._$esjava$I_p2 : this._$esjava$I_p2 = 0
        },
        set: function(e) {
          this._$esjava$I_p2 = e
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }, {
        key: "I_pV",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_pV") ? this._$esjava$I_pV : this._$esjava$I_pV = 0
        },
        set: function(e) {
          this._$esjava$I_pV = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("", false, 3), new u("I", 0, 1), new u("U", 0, 2)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("ea", false, 3), new u("aţia", false, 7), new u("aua", false, 2), new u("iua", false, 4), new u("aţie", false, 7), new u("ele", false, 3), new u("ile", false, 5), new u("iile", 6, 4), new u("iei", false, 4), new u("atei", false, 6), new u("ii", false, 4), new u("ului", false, 1), new u("ul", false, 1), new u("elor", false, 3), new u("ilor", false, 4), new u("iilor", 14, 4)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("icala", false, 4), new u("iciva", false, 4), new u("ativa", false, 5), new u("itiva", false, 6), new u("icale", false, 4), new u("aţiune", false, 5), new u("iţiune", false, 6), new u("atoare", false, 5), new u("itoare", false, 6), new u("ătoare", false, 5), new u("icitate", false, 4), new u("abilitate", false, 1), new u("ibilitate", false, 2), new u("ivitate", false, 3), new u("icive", false, 4), new u("ative", false, 5), new u("itive", false, 6), new u("icali", false, 4), new u("atori", false, 5), new u("icatori", 18, 4), new u("itori", false, 6), new u("ători", false, 5), new u("icitati", false, 4), new u("abilitati", false, 1), new u("ivitati", false, 3), new u("icivi", false, 4), new u("ativi", false, 5), new u("itivi", false, 6), new u("icităi", false, 4), new u("abilităi", false, 1), new u("ivităi", false, 3), new u("icităţi", false, 4), new u("abilităţi", false, 1), new u("ivităţi", false, 3), new u("ical", false, 4), new u("ator", false, 5), new u("icator", 35, 4), new u("itor", false, 6), new u("ător", false, 5), new u("iciv", false, 4), new u("ativ", false, 5), new u("itiv", false, 6), new u("icală", false, 4), new u("icivă", false, 4), new u("ativă", false, 5), new u("itivă", false, 6)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("ica", false, 1), new u("abila", false, 1), new u("ibila", false, 1), new u("oasa", false, 1), new u("ata", false, 1), new u("ita", false, 1), new u("anta", false, 1), new u("ista", false, 3), new u("uta", false, 1), new u("iva", false, 1), new u("ic", false, 1), new u("ice", false, 1), new u("abile", false, 1), new u("ibile", false, 1), new u("isme", false, 3), new u("iune", false, 2), new u("oase", false, 1), new u("ate", false, 1), new u("itate", 17, 1), new u("ite", false, 1), new u("ante", false, 1), new u("iste", false, 3), new u("ute", false, 1), new u("ive", false, 1), new u("ici", false, 1), new u("abili", false, 1), new u("ibili", false, 1), new u("iuni", false, 2), new u("atori", false, 1), new u("osi", false, 1), new u("ati", false, 1), new u("itati", 30, 1), new u("iti", false, 1), new u("anti", false, 1), new u("isti", false, 3), new u("uti", false, 1), new u("işti", false, 3), new u("ivi", false, 1), new u("ităi", false, 1), new u("oşi", false, 1), new u("ităţi", false, 1), new u("abil", false, 1), new u("ibil", false, 1), new u("ism", false, 3), new u("ator", false, 1), new u("os", false, 1), new u("at", false, 1), new u("it", false, 1), new u("ant", false, 1), new u("ist", false, 3), new u("ut", false, 1), new u("iv", false, 1), new u("ică", false, 1), new u("abilă", false, 1), new u("ibilă", false, 1), new u("oasă", false, 1), new u("ată", false, 1), new u("ită", false, 1), new u("antă", false, 1), new u("istă", false, 3), new u("ută", false, 1), new u("ivă", false, 1)]
        }
      }, {
        key: "a_4",
        get: function() {
          return delete t.a_4, t.a_4 = [new u("ea", false, 1), new u("ia", false, 1), new u("esc", false, 1), new u("ăsc", false, 1), new u("ind", false, 1), new u("\xe2nd", false, 1), new u("are", false, 1), new u("ere", false, 1), new u("ire", false, 1), new u("\xe2re", false, 1), new u("se", false, 2), new u("ase", 10, 1), new u("sese", 10, 2), new u("ise", 10, 1), new u("use", 10, 1), new u("\xe2se", 10, 1), new u("eşte", false, 1), new u("ăşte", false, 1), new u("eze", false, 1), new u("ai", false, 1), new u("eai", 19, 1), new u("iai", 19, 1), new u("sei", false, 2), new u("eşti", false, 1), new u("ăşti", false, 1), new u("ui", false, 1), new u("ezi", false, 1), new u("\xe2i", false, 1), new u("aşi", false, 1), new u("seşi", false, 2), new u("aseşi", 29, 1), new u("seseşi", 29, 2), new u("iseşi", 29, 1), new u("useşi", 29, 1), new u("\xe2seşi", 29, 1), new u("işi", false, 1), new u("uşi", false, 1), new u("\xe2şi", false, 1), new u("aţi", false, 2), new u("eaţi", 38, 1), new u("iaţi", 38, 1), new u("eţi", false, 2), new u("iţi", false, 2), new u("\xe2ţi", false, 2), new u("arăţi", false, 1), new u("serăţi", false, 2), new u("aserăţi", 45, 1), new u("seserăţi", 45, 2), new u("iserăţi", 45, 1), new u("userăţi", 45, 1), new u("\xe2serăţi", 45, 1), new u("irăţi", false, 1), new u("urăţi", false, 1), new u("\xe2răţi", false, 1), new u("am", false, 1), new u("eam", 54, 1), new u("iam", 54, 1), new u("em", false, 2), new u("asem", 57, 1), new u("sesem", 57, 2), new u("isem", 57, 1), new u("usem", 57, 1), new u("\xe2sem", 57, 1), new u("im", false, 2), new u("\xe2m", false, 2), new u("ăm", false, 2), new u("arăm", 65, 1), new u("serăm", 65, 2), new u("aserăm", 67, 1), new u("seserăm", 67, 2), new u("iserăm", 67, 1), new u("userăm", 67, 1), new u("\xe2serăm", 67, 1), new u("irăm", 65, 1), new u("urăm", 65, 1), new u("\xe2răm", 65, 1), new u("au", false, 1), new u("eau", 76, 1), new u("iau", 76, 1), new u("indu", false, 1), new u("\xe2ndu", false, 1), new u("ez", false, 1), new u("ească", false, 1), new u("ară", false, 1), new u("seră", false, 2), new u("aseră", 84, 1), new u("seseră", 84, 2), new u("iseră", 84, 1), new u("useră", 84, 1), new u("\xe2seră", 84, 1), new u("iră", false, 1), new u("ură", false, 1), new u("\xe2ră", false, 1), new u("ează", false, 1)]
        }
      }, {
        key: "a_5",
        get: function() {
          return delete t.a_5, t.a_5 = [new u("a", false, 1), new u("e", false, 1), new u("ie", 1, 1), new u("i", false, 1), new u("ă", false, 1)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 32, 0, 0, 4]
        }
      }]), t
    }(c),
    R = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_mark_regions$esjava$0",
        value: function() {
          var e = true;
          this.I_pV = this.limit, this.I_p2 = this.limit, e = this.cursor;
          e: do {
            d: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 1072, 1103)) break;
                break d
              } while (false);
              if (this.cursor >= this.limit) break e;
              this.cursor++
            }
            this.I_pV = this.cursor;b: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 1072, 1103)) break;
                break b
              } while (false);
              if (this.cursor >= this.limit) break e;
              this.cursor++
            }
            m: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 1072, 1103)) break;
                break m
              } while (false);
              if (this.cursor >= this.limit) break e;
              this.cursor++
            }
            j: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 1072, 1103)) break;
                break j
              } while (false);
              if (this.cursor >= this.limit) break e;
              this.cursor++
            }
            this.I_p2 = this.cursor
          } while (false);
          return this.cursor = e, true
        }
      }, {
        key: "r_R2$esjava$0",
        value: function() {
          return this.I_p2 <= this.cursor
        }
      }, {
        key: "r_perfective_gerund$esjava$0",
        value: function() {
          var e = true,
            i = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_0))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              e: do {
                i = this.limit - this.cursor;
                do {
                  if (!this.eq_s_b$esjava$1("а")) break;
                  break e
                } while (false);
                if (this.cursor = this.limit - i, !this.eq_s_b$esjava$1("я")) returnfalse
              } while (false);
              this.slice_del$esjava$0();
              break;
            case 2:
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_adjective$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_1))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_adjectival$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          if (!this.r_adjective$esjava$0()) returnfalse;
          i = this.limit - this.cursor;
          e: do {
            if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_2))) {
              this.cursor = this.limit - i;
              break
            }
            switch (this.bra = this.cursor, e) {
              case 0:
                this.cursor = this.limit - i;
                break e;
              case 1:
                i: do {
                  s = this.limit - this.cursor;
                  do {
                    if (!this.eq_s_b$esjava$1("а")) break;
                    break i
                  } while (false);
                  if (this.cursor = this.limit - s, !this.eq_s_b$esjava$1("я")) {
                    this.cursor = this.limit - i;
                    break e
                  }
                } while (false);
                this.slice_del$esjava$0();
                break;
              case 2:
                this.slice_del$esjava$0()
            }
          } while (false);
          returntrue
        }
      }, {
        key: "r_reflexive$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_3))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_verb$esjava$0",
        value: function() {
          var e = true,
            i = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_4))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              e: do {
                i = this.limit - this.cursor;
                do {
                  if (!this.eq_s_b$esjava$1("а")) break;
                  break e
                } while (false);
                if (this.cursor = this.limit - i, !this.eq_s_b$esjava$1("я")) returnfalse
              } while (false);
              this.slice_del$esjava$0();
              break;
            case 2:
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_noun$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_5))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_derivational$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_6)) || (this.bra = this.cursor, !this.r_R2$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_tidy_up$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_7))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (this.slice_del$esjava$0(), this.ket = this.cursor, !this.eq_s_b$esjava$1("н") || (this.bra = this.cursor, !this.eq_s_b$esjava$1("н"))) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!this.eq_s_b$esjava$1("н")) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 3:
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true;
          e = this.cursor;
          do
            if (!this.r_mark_regions$esjava$0()) break; while (false);
          if (this.cursor = e, this.limit_backward = this.cursor, this.cursor = this.limit, i = this.limit - this.cursor, this.cursor < this.I_pV) returnfalse;
          this.cursor = this.I_pV, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, t = this.limit - this.cursor;
          i: do s: do {
            r = this.limit - this.cursor;
            do {
              if (!this.r_perfective_gerund$esjava$0()) break;
              break s
            } while (false);
            this.cursor = this.limit - r, a = this.limit - this.cursor;
            do
              if (!this.r_reflexive$esjava$0()) {
                this.cursor = this.limit - a;
                break
              } while (false);
            a: do {
              n = this.limit - this.cursor;
              do {
                if (!this.r_adjectival$esjava$0()) break;
                break a
              } while (false);
              this.cursor = this.limit - n;
              do {
                if (!this.r_verb$esjava$0()) break;
                break a
              } while (false);
              if (this.cursor = this.limit - n, !this.r_noun$esjava$0()) break i
            } while (false)
          } while (false); while (false);
          this.cursor = this.limit - t, h = this.limit - this.cursor;
          do {
            if (this.ket = this.cursor, !this.eq_s_b$esjava$1("и")) {
              this.cursor = this.limit - h;
              break
            }
            this.bra = this.cursor, this.slice_del$esjava$0()
          } while (false);
          o = this.limit - this.cursor;
          do
            if (!this.r_derivational$esjava$0()) break; while (false);
          this.cursor = this.limit - o, u = this.limit - this.cursor;
          do
            if (!this.r_tidy_up$esjava$0()) break; while (false);
          return this.cursor = this.limit - u, this.limit_backward = s, this.cursor = this.limit_backward, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "I_p2",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p2") ? this._$esjava$I_p2 : this._$esjava$I_p2 = 0
        },
        set: function(e) {
          this._$esjava$I_p2 = e
        }
      }, {
        key: "I_pV",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_pV") ? this._$esjava$I_pV : this._$esjava$I_pV = 0
        },
        set: function(e) {
          this._$esjava$I_pV = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("в", false, 1), new u("ив", 0, 2), new u("ыв", 0, 2), new u("вши", false, 1), new u("ивши", 3, 2), new u("ывши", 3, 2), new u("вшись", false, 1), new u("ившись", 6, 2), new u("ывшись", 6, 2)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("ее", false, 1), new u("ие", false, 1), new u("ое", false, 1), new u("ые", false, 1), new u("ими", false, 1), new u("ыми", false, 1), new u("ей", false, 1), new u("ий", false, 1), new u("ой", false, 1), new u("ый", false, 1), new u("ем", false, 1), new u("им", false, 1), new u("ом", false, 1), new u("ым", false, 1), new u("его", false, 1), new u("ого", false, 1), new u("ему", false, 1), new u("ому", false, 1), new u("их", false, 1), new u("ых", false, 1), new u("ею", false, 1), new u("ою", false, 1), new u("ую", false, 1), new u("юю", false, 1), new u("ая", false, 1), new u("яя", false, 1)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("ем", false, 1), new u("нн", false, 1), new u("вш", false, 1), new u("ивш", 2, 2), new u("ывш", 2, 2), new u("щ", false, 1), new u("ющ", 5, 1), new u("ующ", 6, 2)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("сь", false, 1), new u("ся", false, 1)]
        }
      }, {
        key: "a_4",
        get: function() {
          return delete t.a_4, t.a_4 = [new u("ла", false, 1), new u("ила", 0, 2), new u("ыла", 0, 2), new u("на", false, 1), new u("ена", 3, 2), new u("ете", false, 1), new u("ите", false, 2), new u("йте", false, 1), new u("ейте", 7, 2), new u("уйте", 7, 2), new u("ли", false, 1), new u("или", 10, 2), new u("ыли", 10, 2), new u("й", false, 1), new u("ей", 13, 2), new u("уй", 13, 2), new u("л", false, 1), new u("ил", 16, 2), new u("ыл", 16, 2), new u("ем", false, 1), new u("им", false, 2), new u("ым", false, 2), new u("н", false, 1), new u("ен", 22, 2), new u("ло", false, 1), new u("ило", 24, 2), new u("ыло", 24, 2), new u("но", false, 1), new u("ено", 27, 2), new u("нно", 27, 1), new u("ет", false, 1), new u("ует", 30, 2), new u("ит", false, 2), new u("ыт", false, 2), new u("ют", false, 1), new u("уют", 34, 2), new u("ят", false, 2), new u("ны", false, 1), new u("ены", 37, 2), new u("ть", false, 1), new u("ить", 39, 2), new u("ыть", 39, 2), new u("ешь", false, 1), new u("ишь", false, 2), new u("ю", false, 2), new u("ую", 44, 2)]
        }
      }, {
        key: "a_5",
        get: function() {
          return delete t.a_5, t.a_5 = [new u("а", false, 1), new u("ев", false, 1), new u("ов", false, 1), new u("е", false, 1), new u("ие", 3, 1), new u("ье", 3, 1), new u("и", false, 1), new u("еи", 6, 1), new u("ии", 6, 1), new u("ами", 6, 1), new u("ями", 6, 1), new u("иями", 10, 1), new u("й", false, 1), new u("ей", 12, 1), new u("ией", 13, 1), new u("ий", 12, 1), new u("ой", 12, 1), new u("ам", false, 1), new u("ем", false, 1), new u("ием", 18, 1), new u("ом", false, 1), new u("ям", false, 1), new u("иям", 21, 1), new u("о", false, 1), new u("у", false, 1), new u("ах", false, 1), new u("ях", false, 1), new u("иях", 26, 1), new u("ы", false, 1), new u("ь", false, 1), new u("ю", false, 1), new u("ию", 30, 1), new u("ью", 30, 1), new u("я", false, 1), new u("ия", 33, 1), new u("ья", 33, 1)]
        }
      }, {
        key: "a_6",
        get: function() {
          return delete t.a_6, t.a_6 = [new u("ост", false, 1), new u("ость", false, 1)]
        }
      }, {
        key: "a_7",
        get: function() {
          return delete t.a_7, t.a_7 = [new u("ейше", false, 1), new u("н", false, 2), new u("ейш", false, 1), new u("ь", false, 3)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [33, 65, 8, 232]
        }
      }]), t
    }(c),
    z = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true,
            c = true,
            _ = true;
          this.I_p1 = this.current.length(), this.limit_backward = this.cursor, this.cursor = this.limit, i = this.limit - this.cursor;
          do
            for (s = 4; s > 0; s--) {
              r = this.limit - this.cursor;
              i: do {
                if (!(this.I_p1 > 8) || (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_0)))) {
                  this.cursor = this.limit - r;
                  break
                }
                switch (this.bra = this.cursor, e) {
                  case 0:
                    this.cursor = this.limit - r;
                    break i;
                  case 1:
                    this.slice_del$esjava$0()
                }
              } while (false);
              a = this.limit - this.cursor;
              s: do {
                if (!(this.I_p1 > 7) || (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_1)))) {
                  this.cursor = this.limit - a;
                  break
                }
                switch (this.bra = this.cursor, e) {
                  case 0:
                    this.cursor = this.limit - a;
                    break s;
                  case 1:
                    this.slice_del$esjava$0()
                }
              } while (false);
              this.I_p1 = this.current.length(), n = this.limit - this.cursor;
              t: do {
                if (!(this.I_p1 > 6) || (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_2)))) {
                  this.cursor = this.limit - n;
                  break
                }
                switch (this.bra = this.cursor, e) {
                  case 0:
                    this.cursor = this.limit - n;
                    break t;
                  case 1:
                    this.slice_del$esjava$0()
                }
              } while (false);
              this.I_p1 = this.current.length(), h = this.limit - this.cursor;
              r: do {
                if (!(this.I_p1 > 6) || (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_3)))) {
                  this.cursor = this.limit - h;
                  break
                }
                switch (this.bra = this.cursor, e) {
                  case 0:
                    this.cursor = this.limit - h;
                    break r;
                  case 1:
                    this.slice_del$esjava$0()
                }
              } while (false);
              this.I_p1 = this.current.length(), o = this.limit - this.cursor;
              a: do {
                if (!(this.I_p1 > 5) || (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_4)))) {
                  this.cursor = this.limit - o;
                  break
                }
                switch (this.bra = this.cursor, e) {
                  case 0:
                    this.cursor = this.limit - o;
                    break a;
                  case 1:
                    this.slice_del$esjava$0()
                }
              } while (false);
              this.I_p1 = this.current.length(), u = this.limit - this.cursor;
              do {
                if (!(this.I_p1 > 6) || (this.ket = this.cursor, !this.in_grouping_b$esjava$3(t.g_soglasniki, 98, 382)) || (this.bra = this.cursor, c = this.limit - this.cursor, !this.in_grouping_b$esjava$3(t.g_soglasniki, 98, 382))) {
                  this.cursor = this.limit - u;
                  break
                }
                this.cursor = this.limit - c, this.slice_del$esjava$0()
              } while (false);
              this.I_p1 = this.current.length(), _ = this.limit - this.cursor;
              A: do {
                if (!(this.I_p1 > 5) || (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_5)))) {
                  this.cursor = this.limit - _;
                  break
                }
                switch (this.bra = this.cursor, e) {
                  case 0:
                    this.cursor = this.limit - _;
                    break A;
                  case 1:
                    this.slice_del$esjava$0()
                }
              } while (false)
            }
          while (false);
          return this.cursor = this.limit - i, this.cursor = this.limit_backward, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("anski", false, 1), new u("evski", false, 1), new u("ovski", false, 1)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("stvo", false, 1), new u("štvo", false, 1)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("ega", false, 1), new u("ija", false, 1), new u("ila", false, 1), new u("ema", false, 1), new u("vna", false, 1), new u("ite", false, 1), new u("ste", false, 1), new u("šče", false, 1), new u("ski", false, 1), new u("ški", false, 1), new u("iti", false, 1), new u("ovi", false, 1), new u("ček", false, 1), new u("ovm", false, 1), new u("čan", false, 1), new u("len", false, 1), new u("ven", false, 1), new u("šen", false, 1), new u("ejo", false, 1), new u("ijo", false, 1), new u("ast", false, 1), new u("ost", false, 1)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("ja", false, 1), new u("ka", false, 1), new u("ma", false, 1), new u("ec", false, 1), new u("je", false, 1), new u("eg", false, 1), new u("eh", false, 1), new u("ih", false, 1), new u("mi", false, 1), new u("ti", false, 1), new u("ij", false, 1), new u("al", false, 1), new u("il", false, 1), new u("em", false, 1), new u("om", false, 1), new u("an", false, 1), new u("en", false, 1), new u("in", false, 1), new u("do", false, 1), new u("jo", false, 1), new u("ir", false, 1), new u("at", false, 1), new u("ev", false, 1), new u("iv", false, 1), new u("ov", false, 1), new u("oč", false, 1)]
        }
      }, {
        key: "a_4",
        get: function() {
          return delete t.a_4, t.a_4 = [new u("a", false, 1), new u("c", false, 1), new u("e", false, 1), new u("i", false, 1), new u("m", false, 1), new u("o", false, 1), new u("u", false, 1), new u("š", false, 1)]
        }
      }, {
        key: "a_5",
        get: function() {
          return delete t.a_5, t.a_5 = [new u("a", false, 1), new u("e", false, 1), new u("i", false, 1), new u("o", false, 1), new u("u", false, 1)]
        }
      }, {
        key: "g_soglasniki",
        get: function() {
          return delete t.g_soglasniki, t.g_soglasniki = [119, 95, 23, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 16]
        }
      }]), t
    }(c),
    P = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_mark_regions$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true;
          this.I_pV = this.limit, this.I_p1 = this.limit, this.I_p2 = this.limit, e = this.cursor;
          e: do {
            i: do {
              i = this.cursor;
              s: do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 252)) break;
                t: do {
                  s = this.cursor;
                  r: do {
                    if (!this.out_grouping$esjava$3(t.g_v, 97, 252)) break;
                    m: for (;;) {
                      do {
                        if (!this.in_grouping$esjava$3(t.g_v, 97, 252)) break;
                        break m
                      } while (false);
                      if (this.cursor >= this.limit) break r;
                      this.cursor++
                    }
                    break t
                  } while (false);
                  if (this.cursor = s, !this.in_grouping$esjava$3(t.g_v, 97, 252)) break s;
                  j: for (;;) {
                    do {
                      if (!this.out_grouping$esjava$3(t.g_v, 97, 252)) break;
                      break j
                    } while (false);
                    if (this.cursor >= this.limit) break s;
                    this.cursor++
                  }
                } while (false);
                break i
              } while (false);
              if (this.cursor = i, !this.out_grouping$esjava$3(t.g_v, 97, 252)) break e;
              o: do {
                r = this.cursor;
                g: do {
                  if (!this.out_grouping$esjava$3(t.g_v, 97, 252)) break;
                  p: for (;;) {
                    do {
                      if (!this.in_grouping$esjava$3(t.g_v, 97, 252)) break;
                      break p
                    } while (false);
                    if (this.cursor >= this.limit) break g;
                    this.cursor++
                  }
                  break o
                } while (false);
                if (this.cursor = r, !this.in_grouping$esjava$3(t.g_v, 97, 252) || this.cursor >= this.limit) break e;
                this.cursor++
              } while (false)
            } while (false);this.I_pV = this.cursor
          } while (false);
          this.cursor = e, a = this.cursor;
          y: do {
            I: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 252)) break;
                break I
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            q: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 252)) break;
                break q
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            this.I_p1 = this.cursor;O: for (;;) {
              do {
                if (!this.in_grouping$esjava$3(t.g_v, 97, 252)) break;
                break O
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            x: for (;;) {
              do {
                if (!this.out_grouping$esjava$3(t.g_v, 97, 252)) break;
                break x
              } while (false);
              if (this.cursor >= this.limit) break y;
              this.cursor++
            }
            this.I_p2 = this.cursor
          } while (false);
          return this.cursor = a, true
        }
      }, {
        key: "r_postlude$esjava$0",
        value: function() {
          var e = true,
            i = true;
          P: for (;;) {
            i = this.cursor;
            i: do {
              if (this.bra = this.cursor, 0 === (e = this.find_among$esjava$1(t.a_0))) break;
              switch (this.ket = this.cursor, e) {
                case 0:
                  break i;
                case 1:
                  this.slice_from$esjava$1("a");
                  break;
                case 2:
                  this.slice_from$esjava$1("e");
                  break;
                case 3:
                  this.slice_from$esjava$1("i");
                  break;
                case 4:
                  this.slice_from$esjava$1("o");
                  break;
                case 5:
                  this.slice_from$esjava$1("u");
                  break;
                case 6:
                  if (this.cursor >= this.limit) break i;
                  this.cursor++
              }
              continue P
            } while (false);
            this.cursor = i;
            break
          }
          returntrue
        }
      }, {
        key: "r_RV$esjava$0",
        value: function() {
          return this.I_pV <= this.cursor
        }
      }, {
        key: "r_R1$esjava$0",
        value: function() {
          return this.I_p1 <= this.cursor
        }
      }, {
        key: "r_R2$esjava$0",
        value: function() {
          return this.I_p2 <= this.cursor
        }
      }, {
        key: "r_attached_pronoun$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === this.find_among_b$esjava$1(t.a_1) || (this.bra = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_2)) || !this.r_RV$esjava$0())) returnfalse;
          switch (e) {
            case 0:
              returnfalse;
            case 1:
              this.bra = this.cursor, this.slice_from$esjava$1("iendo");
              break;
            case 2:
              this.bra = this.cursor, this.slice_from$esjava$1("ando");
              break;
            case 3:
              this.bra = this.cursor, this.slice_from$esjava$1("ar");
              break;
            case 4:
              this.bra = this.cursor, this.slice_from$esjava$1("er");
              break;
            case 5:
              this.bra = this.cursor, this.slice_from$esjava$1("ir");
              break;
            case 6:
              this.slice_del$esjava$0();
              break;
            case 7:
              if (!this.eq_s_b$esjava$1("u")) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_standard_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_6))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), i = this.limit - this.cursor;
              do {
                if (this.ket = this.cursor, !this.eq_s_b$esjava$1("ic") || (this.bra = this.cursor, !this.r_R2$esjava$0())) {
                  this.cursor = this.limit - i;
                  break
                }
                this.slice_del$esjava$0()
              } while (false);
              break;
            case 3:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_from$esjava$1("log");
              break;
            case 4:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_from$esjava$1("u");
              break;
            case 5:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_from$esjava$1("ente");
              break;
            case 6:
              if (!this.r_R1$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), s = this.limit - this.cursor;
              i: do {
                if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_3)) || (this.bra = this.cursor, !this.r_R2$esjava$0())) {
                  this.cursor = this.limit - s;
                  break
                }
                switch (this.slice_del$esjava$0(), e) {
                  case 0:
                    this.cursor = this.limit - s;
                    break i;
                  case 1:
                    if (this.ket = this.cursor, !this.eq_s_b$esjava$1("at") || (this.bra = this.cursor, !this.r_R2$esjava$0())) {
                      this.cursor = this.limit - s;
                      break i
                    }
                    this.slice_del$esjava$0()
                }
              } while (false);
              break;
            case 7:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), r = this.limit - this.cursor;
              s: do {
                if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_4))) {
                  this.cursor = this.limit - r;
                  break
                }
                switch (this.bra = this.cursor, e) {
                  case 0:
                    this.cursor = this.limit - r;
                    break s;
                  case 1:
                    if (!this.r_R2$esjava$0()) {
                      this.cursor = this.limit - r;
                      break s
                    }
                    this.slice_del$esjava$0()
                }
              } while (false);
              break;
            case 8:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), a = this.limit - this.cursor;
              t: do {
                if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_5))) {
                  this.cursor = this.limit - a;
                  break
                }
                switch (this.bra = this.cursor, e) {
                  case 0:
                    this.cursor = this.limit - a;
                    break t;
                  case 1:
                    if (!this.r_R2$esjava$0()) {
                      this.cursor = this.limit - a;
                      break t
                    }
                    this.slice_del$esjava$0()
                }
              } while (false);
              break;
            case 9:
              if (!this.r_R2$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), n = this.limit - this.cursor;
              do {
                if (this.ket = this.cursor, !this.eq_s_b$esjava$1("at") || (this.bra = this.cursor, !this.r_R2$esjava$0())) {
                  this.cursor = this.limit - n;
                  break
                }
                this.slice_del$esjava$0()
              } while (false)
          }
          returntrue
        }
      }, {
        key: "r_y_verb_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          if (i = this.limit - this.cursor, this.cursor < this.I_pV) returnfalse;
          if (this.cursor = this.I_pV, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_7))) return this.limit_backward = s, false;
          switch (this.bra = this.cursor, this.limit_backward = s, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.eq_s_b$esjava$1("u")) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_verb_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true;
          if (i = this.limit - this.cursor, this.cursor < this.I_pV) returnfalse;
          if (this.cursor = this.I_pV, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_8))) return this.limit_backward = s, false;
          switch (this.bra = this.cursor, this.limit_backward = s, e) {
            case 0:
              returnfalse;
            case 1:
              r = this.limit - this.cursor;
              do {
                if (!this.eq_s_b$esjava$1("u") || (a = this.limit - this.cursor, !this.eq_s_b$esjava$1("g"))) {
                  this.cursor = this.limit - r;
                  break
                }
                this.cursor = this.limit - a
              } while (false);
              this.bra = this.cursor, this.slice_del$esjava$0();
              break;
            case 2:
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_residual_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_9))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              if (!this.r_RV$esjava$0()) returnfalse;
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!this.r_RV$esjava$0()) returnfalse;
              this.slice_del$esjava$0(), i = this.limit - this.cursor;
              do {
                if (this.ket = this.cursor, !this.eq_s_b$esjava$1("u") || (this.bra = this.cursor, s = this.limit - this.cursor, !this.eq_s_b$esjava$1("g")) || (this.cursor = this.limit - s, !this.r_RV$esjava$0())) {
                  this.cursor = this.limit - i;
                  break
                }
                this.slice_del$esjava$0()
              } while (false)
          }
          returntrue
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true,
            a = true;
          e = this.cursor;
          do
            if (!this.r_mark_regions$esjava$0()) break; while (false);
          this.cursor = e, this.limit_backward = this.cursor, this.cursor = this.limit, i = this.limit - this.cursor;
          do
            if (!this.r_attached_pronoun$esjava$0()) break; while (false);
          this.cursor = this.limit - i, s = this.limit - this.cursor;
          s: do t: do {
            t = this.limit - this.cursor;
            do {
              if (!this.r_standard_suffix$esjava$0()) break;
              break t
            } while (false);
            this.cursor = this.limit - t;
            do {
              if (!this.r_y_verb_suffix$esjava$0()) break;
              break t
            } while (false);
            if (this.cursor = this.limit - t, !this.r_verb_suffix$esjava$0()) break s
          } while (false); while (false);
          this.cursor = this.limit - s, r = this.limit - this.cursor;
          do
            if (!this.r_residual_suffix$esjava$0()) break; while (false);
          this.cursor = this.limit - r, this.cursor = this.limit_backward, a = this.cursor;
          do
            if (!this.r_postlude$esjava$0()) break; while (false);
          return this.cursor = a, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "I_p2",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p2") ? this._$esjava$I_p2 : this._$esjava$I_p2 = 0
        },
        set: function(e) {
          this._$esjava$I_p2 = e
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }, {
        key: "I_pV",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_pV") ? this._$esjava$I_pV : this._$esjava$I_pV = 0
        },
        set: function(e) {
          this._$esjava$I_pV = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("", false, 6), new u("\xe1", 0, 1), new u("\xe9", 0, 2), new u("\xed", 0, 3), new u("\xf3", 0, 4), new u("\xfa", 0, 5)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("la", false, false), new u("sela", 0, false), new u("le", false, false), new u("me", false, false), new u("se", false, false), new u("lo", false, false), new u("selo", 5, false), new u("las", false, false), new u("selas", 7, false), new u("les", false, false), new u("los", false, false), new u("selos", 10, false), new u("nos", false, false)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("ando", false, 6), new u("iendo", false, 6), new u("yendo", false, 7), new u("\xe1ndo", false, 2), new u("i\xe9ndo", false, 1), new u("ar", false, 6), new u("er", false, 6), new u("ir", false, 6), new u("\xe1r", false, 3), new u("\xe9r", false, 4), new u("\xedr", false, 5)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("ic", false, false), new u("ad", false, false), new u("os", false, false), new u("iv", false, 1)]
        }
      }, {
        key: "a_4",
        get: function() {
          return delete t.a_4, t.a_4 = [new u("able", false, 1), new u("ible", false, 1), new u("ante", false, 1)]
        }
      }, {
        key: "a_5",
        get: function() {
          return delete t.a_5, t.a_5 = [new u("ic", false, 1), new u("abil", false, 1), new u("iv", false, 1)]
        }
      }, {
        key: "a_6",
        get: function() {
          return delete t.a_6, t.a_6 = [new u("ica", false, 1), new u("ancia", false, 2), new u("encia", false, 5), new u("adora", false, 2), new u("osa", false, 1), new u("ista", false, 1), new u("iva", false, 9), new u("anza", false, 1), new u("log\xeda", false, 3), new u("idad", false, 8), new u("able", false, 1), new u("ible", false, 1), new u("ante", false, 2), new u("mente", false, 7), new u("amente", 13, 6), new u("aci\xf3n", false, 2), new u("uci\xf3n", false, 4), new u("ico", false, 1), new u("ismo", false, 1), new u("oso", false, 1), new u("amiento", false, 1), new u("imiento", false, 1), new u("ivo", false, 9), new u("ador", false, 2), new u("icas", false, 1), new u("ancias", false, 2), new u("encias", false, 5), new u("adoras", false, 2), new u("osas", false, 1), new u("istas", false, 1), new u("ivas", false, 9), new u("anzas", false, 1), new u("log\xedas", false, 3), new u("idades", false, 8), new u("ables", false, 1), new u("ibles", false, 1), new u("aciones", false, 2), new u("uciones", false, 4), new u("adores", false, 2), new u("antes", false, 2), new u("icos", false, 1), new u("ismos", false, 1), new u("osos", false, 1), new u("amientos", false, 1), new u("imientos", false, 1), new u("ivos", false, 9)]
        }
      }, {
        key: "a_7",
        get: function() {
          return delete t.a_7, t.a_7 = [new u("ya", false, 1), new u("ye", false, 1), new u("yan", false, 1), new u("yen", false, 1), new u("yeron", false, 1), new u("yendo", false, 1), new u("yo", false, 1), new u("yas", false, 1), new u("yes", false, 1), new u("yais", false, 1), new u("yamos", false, 1), new u("y\xf3", false, 1)]
        }
      }, {
        key: "a_8",
        get: function() {
          return delete t.a_8, t.a_8 = [new u("aba", false, 2), new u("ada", false, 2), new u("ida", false, 2), new u("ara", false, 2), new u("iera", false, 2), new u("\xeda", false, 2), new u("ar\xeda", 5, 2), new u("er\xeda", 5, 2), new u("ir\xeda", 5, 2), new u("ad", false, 2), new u("ed", false, 2), new u("id", false, 2), new u("ase", false, 2), new u("iese", false, 2), new u("aste", false, 2), new u("iste", false, 2), new u("an", false, 2), new u("aban", 16, 2), new u("aran", 16, 2), new u("ieran", 16, 2), new u("\xedan", 16, 2), new u("ar\xedan", 20, 2), new u("er\xedan", 20, 2), new u("ir\xedan", 20, 2), new u("en", false, 1), new u("asen", 24, 2), new u("iesen", 24, 2), new u("aron", false, 2), new u("ieron", false, 2), new u("ar\xe1n", false, 2), new u("er\xe1n", false, 2), new u("ir\xe1n", false, 2), new u("ado", false, 2), new u("ido", false, 2), new u("ando", false, 2), new u("iendo", false, 2), new u("ar", false, 2), new u("er", false, 2), new u("ir", false, 2), new u("as", false, 2), new u("abas", 39, 2), new u("adas", 39, 2), new u("idas", 39, 2), new u("aras", 39, 2), new u("ieras", 39, 2), new u("\xedas", 39, 2), new u("ar\xedas", 45, 2), new u("er\xedas", 45, 2), new u("ir\xedas", 45, 2), new u("es", false, 1), new u("ases", 49, 2), new u("ieses", 49, 2), new u("abais", false, 2), new u("arais", false, 2), new u("ierais", false, 2), new u("\xedais", false, 2), new u("ar\xedais", 55, 2), new u("er\xedais", 55, 2), new u("ir\xedais", 55, 2), new u("aseis", false, 2), new u("ieseis", false, 2), new u("asteis", false, 2), new u("isteis", false, 2), new u("\xe1is", false, 2), new u("\xe9is", false, 1), new u("ar\xe9is", 64, 2), new u("er\xe9is", 64, 2), new u("ir\xe9is", 64, 2), new u("ados", false, 2), new u("idos", false, 2), new u("amos", false, 2), new u("\xe1bamos", 70, 2), new u("\xe1ramos", 70, 2), new u("i\xe9ramos", 70, 2), new u("\xedamos", 70, 2), new u("ar\xedamos", 74, 2), new u("er\xedamos", 74, 2), new u("ir\xedamos", 74, 2), new u("emos", false, 1), new u("aremos", 78, 2), new u("eremos", 78, 2), new u("iremos", 78, 2), new u("\xe1semos", 78, 2), new u("i\xe9semos", 78, 2), new u("imos", false, 2), new u("ar\xe1s", false, 2), new u("er\xe1s", false, 2), new u("ir\xe1s", false, 2), new u("\xeds", false, 2), new u("ar\xe1", false, 2), new u("er\xe1", false, 2), new u("ir\xe1", false, 2), new u("ar\xe9", false, 2), new u("er\xe9", false, 2), new u("ir\xe9", false, 2), new u("i\xf3", false, 2)]
        }
      }, {
        key: "a_9",
        get: function() {
          return delete t.a_9, t.a_9 = [new u("a", false, 1), new u("e", false, 2), new u("o", false, 1), new u("os", false, 1), new u("\xe1", false, 1), new u("\xe9", false, 2), new u("\xed", false, 1), new u("\xf3", false, 1)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 4, 10]
        }
      }]), t
    }(c),
    V = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_mark_regions$esjava$0",
        value: function() {
          var e = true,
            i = true;
          this.I_p1 = this.limit, e = this.cursor;
          var s = this.cursor + 3;
          if (0 > s || s > this.limit) returnfalse;
          this.cursor = s, this.I_x = this.cursor, this.cursor = e;
          V: for (;;) {
            i = this.cursor;
            do {
              if (!this.in_grouping$esjava$3(t.g_v, 97, 246)) break;
              this.cursor = i;
              break V
            } while (false);
            if (this.cursor = i, this.cursor >= this.limit) returnfalse;
            this.cursor++
          }
          S: for (;;) {
            do {
              if (!this.out_grouping$esjava$3(t.g_v, 97, 246)) break;
              break S
            } while (false);
            if (this.cursor >= this.limit) returnfalse;
            this.cursor++
          }
          this.I_p1 = this.cursor;
          do {
            if (!(this.I_p1 < this.I_x)) break;
            this.I_p1 = this.I_x
          } while (false);
          returntrue
        }
      }, {
        key: "r_main_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          if (i = this.limit - this.cursor, this.cursor < this.I_p1) returnfalse;
          if (this.cursor = this.I_p1, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_0))) return this.limit_backward = s, false;
          switch (this.bra = this.cursor, this.limit_backward = s, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_del$esjava$0();
              break;
            case 2:
              if (!this.in_grouping_b$esjava$3(t.g_s_ending, 98, 121)) returnfalse;
              this.slice_del$esjava$0()
          }
          returntrue
        }
      }, {
        key: "r_consonant_pair$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          return e = this.limit - this.cursor, !(this.cursor < this.I_p1) && ((this.cursor = this.I_p1, i = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - e, s = this.limit - this.cursor, 0 === this.find_among_b$esjava$1(t.a_1) || (this.cursor = this.limit - s, this.ket = this.cursor, this.cursor <= this.limit_backward)) ? (this.limit_backward = i, false) : (this.cursor--, this.bra = this.cursor, this.slice_del$esjava$0(), this.limit_backward = i, true))
        }
      }, {
        key: "r_other_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          if (i = this.limit - this.cursor, this.cursor < this.I_p1) returnfalse;
          if (this.cursor = this.I_p1, s = this.limit_backward, this.limit_backward = this.cursor, this.cursor = this.limit - i, this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_2))) return this.limit_backward = s, false;
          switch (this.bra = this.cursor, e) {
            case 0:
              return this.limit_backward = s, false;
            case 1:
              this.slice_del$esjava$0();
              break;
            case 2:
              this.slice_from$esjava$1("l\xf6s");
              break;
            case 3:
              this.slice_from$esjava$1("full")
          }
          return this.limit_backward = s, true
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true;
          e = this.cursor;
          do
            if (!this.r_mark_regions$esjava$0()) break; while (false);
          this.cursor = e, this.limit_backward = this.cursor, this.cursor = this.limit, i = this.limit - this.cursor;
          do
            if (!this.r_main_suffix$esjava$0()) break; while (false);
          this.cursor = this.limit - i, s = this.limit - this.cursor;
          do
            if (!this.r_consonant_pair$esjava$0()) break; while (false);
          this.cursor = this.limit - s, t = this.limit - this.cursor;
          do
            if (!this.r_other_suffix$esjava$0()) break; while (false);
          return this.cursor = this.limit - t, this.cursor = this.limit_backward, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "I_x",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_x") ? this._$esjava$I_x : this._$esjava$I_x = 0
        },
        set: function(e) {
          this._$esjava$I_x = e
        }
      }, {
        key: "I_p1",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_p1") ? this._$esjava$I_p1 : this._$esjava$I_p1 = 0
        },
        set: function(e) {
          this._$esjava$I_p1 = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("a", false, 1), new u("arna", 0, 1), new u("erna", 0, 1), new u("heterna", 2, 1), new u("orna", 0, 1), new u("ad", false, 1), new u("e", false, 1), new u("ade", 6, 1), new u("ande", 6, 1), new u("arne", 6, 1), new u("are", 6, 1), new u("aste", 6, 1), new u("en", false, 1), new u("anden", 12, 1), new u("aren", 12, 1), new u("heten", 12, 1), new u("ern", false, 1), new u("ar", false, 1), new u("er", false, 1), new u("heter", 18, 1), new u("or", false, 1), new u("s", false, 2), new u("as", 21, 1), new u("arnas", 22, 1), new u("ernas", 22, 1), new u("ornas", 22, 1), new u("es", 21, 1), new u("ades", 26, 1), new u("andes", 26, 1), new u("ens", 21, 1), new u("arens", 29, 1), new u("hetens", 29, 1), new u("erns", 21, 1), new u("at", false, 1), new u("andet", false, 1), new u("het", false, 1), new u("ast", false, 1)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("dd", false, false), new u("gd", false, false), new u("nn", false, false), new u("dt", false, false), new u("gt", false, false), new u("kt", false, false), new u("tt", false, false)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("ig", false, 1), new u("lig", 0, 1), new u("els", false, 1), new u("fullt", false, 3), new u("l\xf6st", false, 2)]
        }
      }, {
        key: "g_v",
        get: function() {
          return delete t.g_v, t.g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 32]
        }
      }, {
        key: "g_s_ending",
        get: function() {
          return delete t.g_s_ending, t.g_s_ending = [119, 127, 149]
        }
      }]), t
    }(c),
    S = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_has_min_length$esjava$0",
        value: function() {
          return this.I_length = this.current.length(), this.I_length > 4
        }
      }, {
        key: "r_fix_va_start$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true;
          e: do {
            e = this.cursor;
            do {
              i = this.cursor, s = this.cursor;
              do
                if (!this.eq_s$esjava$1("வோ")) {
                  this.cursor = s;
                  break
                } while (false);
              if (this.cursor = i, this.bra = this.cursor, !this.eq_s$esjava$1("வோ")) break;
              this.ket = this.cursor, this.slice_from$esjava$1("ஓ");
              break e
            } while (false);
            this.cursor = e;
            do {
              t = this.cursor, r = this.cursor;
              do
                if (!this.eq_s$esjava$1("வொ")) {
                  this.cursor = r;
                  break
                } while (false);
              if (this.cursor = t, this.bra = this.cursor, !this.eq_s$esjava$1("வொ")) break;
              this.ket = this.cursor, this.slice_from$esjava$1("ஒ");
              break e
            } while (false);
            this.cursor = e;
            do {
              a = this.cursor, n = this.cursor;
              do
                if (!this.eq_s$esjava$1("வு")) {
                  this.cursor = n;
                  break
                } while (false);
              if (this.cursor = a, this.bra = this.cursor, !this.eq_s$esjava$1("வு")) break;
              this.ket = this.cursor, this.slice_from$esjava$1("உ");
              break e
            } while (false);
            this.cursor = e, h = this.cursor, o = this.cursor;
            do
              if (!this.eq_s$esjava$1("வூ")) {
                this.cursor = o;
                break
              } while (false);
            if (this.cursor = h, this.bra = this.cursor, !this.eq_s$esjava$1("வூ")) returnfalse;
            this.ket = this.cursor, this.slice_from$esjava$1("ஊ")
          } while (false);
          returntrue
        }
      }, {
        key: "r_fix_endings$esjava$0",
        value: function() {
          var e = true,
            i = true;
          this.B_found_wrong_ending = true;
          P: for (;;) {
            e = this.cursor;
            do {
              if (!this.B_found_wrong_ending) break;
              i = this.cursor;
              do
                if (!this.r_fix_ending$esjava$0()) break; while (false);
              this.cursor = i;
              continue P
            } while (false);
            this.cursor = e;
            break
          }
          returntrue
        }
      }, {
        key: "r_remove_question_prefixes$esjava$0",
        value: function() {
          var e = true;
          if (this.bra = this.cursor, !this.eq_s$esjava$1("எ") || 0 === this.find_among$esjava$1(t.a_0) || !this.eq_s$esjava$1("்")) returnfalse;
          this.ket = this.cursor, this.slice_del$esjava$0(), e = this.cursor;
          do
            if (!this.r_fix_va_start$esjava$0()) break; while (false);
          return this.cursor = e, true
        }
      }, {
        key: "r_fix_ending$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true,
            c = true,
            _ = true,
            l = true,
            w = true;
          if (this.B_found_wrong_ending = false, this.I_length = this.current.length(), !(this.I_length > 3)) returnfalse;
          this.limit_backward = this.cursor, this.cursor = this.limit;
          e: do {
            e = this.limit - this.cursor;
            do {
              if (this.ket = this.cursor, 0 === this.find_among_b$esjava$1(t.a_1)) break;
              this.bra = this.cursor, this.slice_del$esjava$0();
              break e
            } while (false);
            this.cursor = this.limit - e;
            do {
              if (this.ket = this.cursor, !this.eq_s_b$esjava$1("ய்") || (i = this.limit - this.cursor, 0 === this.find_among_b$esjava$1(t.a_2))) break;
              this.cursor = this.limit - i, this.bra = this.cursor, this.slice_del$esjava$0();
              break e
            } while (false);
            this.cursor = this.limit - e;
            t: do {
              this.ket = this.cursor;
              r: do {
                s = this.limit - this.cursor;
                do {
                  if (!this.eq_s_b$esjava$1("ட்ப்")) break;
                  break r
                } while (false);
                if (this.cursor = this.limit - s, !this.eq_s_b$esjava$1("ட்க்")) break t
              } while (false);
              this.bra = this.cursor, this.slice_from$esjava$1("ள்");
              break e
            } while (false);
            this.cursor = this.limit - e;
            do {
              if (this.ket = this.cursor, !this.eq_s_b$esjava$1("ன்ற்")) break;
              this.bra = this.cursor, this.slice_from$esjava$1("ல்");
              break e
            } while (false);
            this.cursor = this.limit - e;
            do {
              if (this.ket = this.cursor, !this.eq_s_b$esjava$1("ற்க்")) break;
              this.bra = this.cursor, this.slice_from$esjava$1("ல்");
              break e
            } while (false);
            this.cursor = this.limit - e;
            do {
              if (this.ket = this.cursor, !this.eq_s_b$esjava$1("ட்ட்")) break;
              this.bra = this.cursor, this.slice_from$esjava$1("டு");
              break e
            } while (false);
            this.cursor = this.limit - e;
            o: do {
              if (!this.B_found_vetrumai_urupu || (this.ket = this.cursor, !this.eq_s_b$esjava$1("த்த்"))) break;
              r = this.limit - this.cursor, a = this.limit - this.cursor;
              do {
                if (!this.eq_s_b$esjava$1("ை")) break;
                break o
              } while (false);
              this.cursor = this.limit - a, this.cursor = this.limit - r, this.bra = this.cursor, this.slice_from$esjava$1("ம்"), this.bra = this.cursor;
              break e
            } while (false);
            this.cursor = this.limit - e;
            M: do {
              this.ket = this.cursor;
              C: do {
                n = this.limit - this.cursor;
                do {
                  if (!this.eq_s_b$esjava$1("ுக்")) break;
                  break C
                } while (false);
                if (this.cursor = this.limit - n, !this.eq_s_b$esjava$1("ுக்க்")) break M
              } while (false);
              this.bra = this.cursor, this.slice_from$esjava$1("்");
              break e
            } while (false);
            this.cursor = this.limit - e;
            do {
              if (this.ket = this.cursor, !this.eq_s_b$esjava$1("்") || 0 === this.find_among_b$esjava$1(t.a_3) || !this.eq_s_b$esjava$1("்") || 0 === this.find_among_b$esjava$1(t.a_4)) break;
              this.bra = this.cursor, this.slice_del$esjava$0();
              break e
            } while (false);
            this.cursor = this.limit - e;
            do {
              if (this.ket = this.cursor, !this.eq_s_b$esjava$1("ுக்")) break;
              this.bra = this.cursor, this.slice_from$esjava$1("்");
              break e
            } while (false);
            this.cursor = this.limit - e;
            do {
              if (this.ket = this.cursor, !this.eq_s_b$esjava$1("்") || 0 === this.find_among_b$esjava$1(t.a_5)) break;
              this.bra = this.cursor, this.slice_del$esjava$0();
              break e
            } while (false);
            this.cursor = this.limit - e;
            _: do {
              if (this.ket = this.cursor, !this.eq_s_b$esjava$1("்")) break;
              H: do {
                h = this.limit - this.cursor;
                do {
                  if (0 === this.find_among_b$esjava$1(t.a_6)) break;
                  break H
                } while (false);
                if (this.cursor = this.limit - h, 0 === this.find_among_b$esjava$1(t.a_7)) break _
              } while (false);
              if (!this.eq_s_b$esjava$1("்")) break;
              this.bra = this.cursor, this.slice_from$esjava$1("்");
              break e
            } while (false);
            this.cursor = this.limit - e;
            do {
              if (this.ket = this.cursor, 0 === this.find_among_b$esjava$1(t.a_8)) break;
              this.bra = this.cursor, this.slice_del$esjava$0();
              break e
            } while (false);
            this.cursor = this.limit - e;
            J: do {
              if (this.ket = this.cursor, !this.eq_s_b$esjava$1("னு")) break;
              o = this.limit - this.cursor, u = this.limit - this.cursor;
              do {
                if (0 === this.find_among_b$esjava$1(t.a_9)) break;
                break J
              } while (false);
              this.cursor = this.limit - u, this.cursor = this.limit - o, this.bra = this.cursor, this.slice_del$esjava$0();
              break e
            } while (false);
            this.cursor = this.limit - e;
            w: do {
              if (this.ket = this.cursor, !this.eq_s_b$esjava$1("ங்")) break;
              c = this.limit - this.cursor, _ = this.limit - this.cursor;
              do {
                if (!this.eq_s_b$esjava$1("ை")) break;
                break w
              } while (false);
              this.cursor = this.limit - _, this.cursor = this.limit - c, this.bra = this.cursor, this.slice_from$esjava$1("ம்");
              break e
            } while (false);
            this.cursor = this.limit - e;
            do {
              if (this.ket = this.cursor, !this.eq_s_b$esjava$1("ங்")) break;
              this.bra = this.cursor, this.slice_del$esjava$0();
              break e
            } while (false);
            if (this.cursor = this.limit - e, this.ket = this.cursor, !this.eq_s_b$esjava$1("்")) returnfalse;
            l = this.limit - this.cursor;
            K: do {
              w = this.limit - this.cursor;
              do {
                if (0 === this.find_among_b$esjava$1(t.a_10)) break;
                break K
              } while (false);
              if (this.cursor = this.limit - w, !this.eq_s_b$esjava$1("்")) returnfalse
            } while (false);
            this.cursor = this.limit - l, this.bra = this.cursor, this.slice_del$esjava$0()
          } while (false);
          return this.cursor = this.limit_backward, this.B_found_wrong_ending = true, true
        }
      }, {
        key: "r_remove_pronoun_prefixes$esjava$0",
        value: function() {
          var e = true;
          if (this.B_found_a_match = false, this.bra = this.cursor, 0 === this.find_among$esjava$1(t.a_11) || 0 === this.find_among$esjava$1(t.a_12) || !this.eq_s$esjava$1("்")) returnfalse;
          this.ket = this.cursor, this.slice_del$esjava$0(), this.B_found_a_match = true, e = this.cursor;
          do
            if (!this.r_fix_va_start$esjava$0()) break; while (false);
          return this.cursor = e, true
        }
      }, {
        key: "r_remove_plural_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          this.B_found_a_match = false, this.limit_backward = this.cursor, this.cursor = this.limit;
          e: do {
            e = this.limit - this.cursor;
            i: do {
              if (this.ket = this.cursor, !this.eq_s_b$esjava$1("ுங்கள்")) break;
              i = this.limit - this.cursor, s = this.limit - this.cursor;
              do {
                if (0 === this.find_among_b$esjava$1(t.a_13)) break;
                break i
              } while (false);
              this.cursor = this.limit - s, this.cursor = this.limit - i, this.bra = this.cursor, this.slice_from$esjava$1("்");
              break e
            } while (false);
            this.cursor = this.limit - e;
            do {
              if (this.ket = this.cursor, !this.eq_s_b$esjava$1("ற்கள்")) break;
              this.bra = this.cursor, this.slice_from$esjava$1("ல்");
              break e
            } while (false);
            this.cursor = this.limit - e;
            do {
              if (this.ket = this.cursor, !this.eq_s_b$esjava$1("ட்கள்")) break;
              this.bra = this.cursor, this.slice_from$esjava$1("ள்");
              break e
            } while (false);
            if (this.cursor = this.limit - e, this.ket = this.cursor, !this.eq_s_b$esjava$1("கள்")) returnfalse;
            this.bra = this.cursor, this.slice_del$esjava$0()
          } while (false);
          return this.B_found_a_match = true, this.cursor = this.limit_backward, true
        }
      }, {
        key: "r_remove_question_suffixes$esjava$0",
        value: function() {
          var e = true,
            i = true;
          if (!this.r_has_min_length$esjava$0()) returnfalse;
          this.B_found_a_match = false, this.limit_backward = this.cursor, this.cursor = this.limit, e = this.limit - this.cursor;
          do {
            if (this.ket = this.cursor, 0 === this.find_among_b$esjava$1(t.a_14)) break;
            this.bra = this.cursor, this.slice_from$esjava$1("்"), this.B_found_a_match = true
          } while (false);
          this.cursor = this.limit - e, this.cursor = this.limit_backward, i = this.cursor;
          do
            if (!this.r_fix_endings$esjava$0()) break; while (false);
          return this.cursor = i, true
        }
      }, {
        key: "r_remove_command_suffixes$esjava$0",
        value: function() {
          return !!this.r_has_min_length$esjava$0() && (this.B_found_a_match = false, this.limit_backward = this.cursor, this.cursor = this.limit, this.ket = this.cursor, 0 !== this.find_among_b$esjava$1(t.a_15) && (this.bra = this.cursor, this.slice_del$esjava$0(), this.B_found_a_match = true, this.cursor = this.limit_backward, true))
        }
      }, {
        key: "r_remove_um$esjava$0",
        value: function() {
          var e = true;
          if (this.B_found_a_match = false, !this.r_has_min_length$esjava$0() || (this.limit_backward = this.cursor, this.cursor = this.limit, this.ket = this.cursor, !this.eq_s_b$esjava$1("ும்"))) returnfalse;
          this.bra = this.cursor, this.slice_from$esjava$1("்"), this.B_found_a_match = true, this.cursor = this.limit_backward, e = this.cursor;
          do
            if (!this.r_fix_ending$esjava$0()) break; while (false);
          return this.cursor = e, true
        }
      }, {
        key: "r_remove_common_word_endings$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true,
            h = true;
          if (this.B_found_a_match = false, !this.r_has_min_length$esjava$0()) returnfalse;
          this.limit_backward = this.cursor, this.cursor = this.limit;
          e: do {
            e = this.limit - this.cursor;
            i: do {
              i = this.limit - this.cursor, this.ket = this.cursor;
              s: do {
                s = this.limit - this.cursor;
                do {
                  if (!this.eq_s_b$esjava$1("ுடன்")) break;
                  break s
                } while (false);
                this.cursor = this.limit - s;
                do {
                  if (!this.eq_s_b$esjava$1("ில்லை")) break;
                  break s
                } while (false);
                this.cursor = this.limit - s;
                do {
                  if (!this.eq_s_b$esjava$1("ிடம்")) break;
                  break s
                } while (false);
                this.cursor = this.limit - s;
                do {
                  if (!this.eq_s_b$esjava$1("ின்றி")) break;
                  break s
                } while (false);
                this.cursor = this.limit - s;
                do {
                  if (!this.eq_s_b$esjava$1("ாகி")) break;
                  break s
                } while (false);
                this.cursor = this.limit - s;
                do {
                  if (!this.eq_s_b$esjava$1("ாகிய")) break;
                  break s
                } while (false);
                this.cursor = this.limit - s;
                do {
                  if (!this.eq_s_b$esjava$1("ென்று")) break;
                  break s
                } while (false);
                this.cursor = this.limit - s;
                do {
                  if (!this.eq_s_b$esjava$1("ுள்ள")) break;
                  break s
                } while (false);
                this.cursor = this.limit - s;
                do {
                  if (!this.eq_s_b$esjava$1("ுடைய")) break;
                  break s
                } while (false);
                this.cursor = this.limit - s;
                do {
                  if (!this.eq_s_b$esjava$1("ுடை")) break;
                  break s
                } while (false);
                this.cursor = this.limit - s;
                do {
                  if (!this.eq_s_b$esjava$1("ெனும்")) break;
                  break s
                } while (false);
                this.cursor = this.limit - s;
                u: do {
                  if (!this.eq_s_b$esjava$1("ல்ல")) break;
                  r = this.limit - this.cursor, a = this.limit - this.cursor;
                  do {
                    if (0 === this.find_among_b$esjava$1(t.a_16)) break;
                    break u
                  } while (false);
                  this.cursor = this.limit - a, this.cursor = this.limit - r;
                  break s
                } while (false);
                this.cursor = this.limit - s;
                do {
                  if (!this.eq_s_b$esjava$1("ென")) break;
                  break s
                } while (false);
                if (this.cursor = this.limit - s, !this.eq_s_b$esjava$1("ாகி")) break i
              } while (false);
              this.bra = this.cursor, this.slice_from$esjava$1("்"), this.B_found_a_match = true, this.cursor = this.limit - i;
              break e
            } while (false);
            if (this.cursor = this.limit - e, n = this.limit - this.cursor, this.ket = this.cursor, 0 === this.find_among_b$esjava$1(t.a_17)) returnfalse;
            this.bra = this.cursor, this.slice_del$esjava$0(), this.B_found_a_match = true, this.cursor = this.limit - n
          } while (false);
          this.cursor = this.limit_backward, h = this.cursor;
          do
            if (!this.r_fix_endings$esjava$0()) break; while (false);
          return this.cursor = h, true
        }
      }, {
        key: "r_remove_vetrumai_urupukal$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true,
            c = true,
            _ = true,
            l = true,
            w = true,
            $ = true,
            v = true,
            f = true,
            k = true,
            d = true,
            b = true,
            m = true,
            j = true;
          if (this.B_found_a_match = false, this.B_found_vetrumai_urupu = false, !this.r_has_min_length$esjava$0()) returnfalse;
          this.limit_backward = this.cursor, this.cursor = this.limit;
          e: do {
            e = this.limit - this.cursor;
            do {
              if (i = this.limit - this.cursor, this.ket = this.cursor, !this.eq_s_b$esjava$1("னை")) break;
              this.bra = this.cursor, this.slice_del$esjava$0(), this.cursor = this.limit - i;
              break e
            } while (false);
            this.cursor = this.limit - e;
            s: do {
              s = this.limit - this.cursor, this.ket = this.cursor;
              t: do {
                r = this.limit - this.cursor;
                r: do {
                  a: do {
                    a = this.limit - this.cursor;
                    do {
                      if (!this.eq_s_b$esjava$1("ினை")) break;
                      break a
                    } while (false);
                    if (this.cursor = this.limit - a, !this.eq_s_b$esjava$1("ை")) break r
                  } while (false);n = this.limit - this.cursor,
                  h = this.limit - this.cursor;do {
                    if (0 === this.find_among_b$esjava$1(t.a_18)) break;
                    break r
                  } while (false);this.cursor = this.limit - h,
                  this.cursor = this.limit - n;
                  break t
                } while (false);
                if (this.cursor = this.limit - r, !this.eq_s_b$esjava$1("ை") || (o = this.limit - this.cursor, 0 === this.find_among_b$esjava$1(t.a_19) || !this.eq_s_b$esjava$1("்"))) break s;
                this.cursor = this.limit - o
              } while (false);
              this.bra = this.cursor, this.slice_from$esjava$1("்"), this.cursor = this.limit - s;
              break e
            } while (false);
            this.cursor = this.limit - e;
            D: do {
              u = this.limit - this.cursor, this.ket = this.cursor;
              o: do {
                c = this.limit - this.cursor;
                do {
                  if (!this.eq_s_b$esjava$1("ொடு")) break;
                  break o
                } while (false);
                this.cursor = this.limit - c;
                do {
                  if (!this.eq_s_b$esjava$1("ோடு")) break;
                  break o
                } while (false);
                this.cursor = this.limit - c;
                do {
                  if (!this.eq_s_b$esjava$1("ில்")) break;
                  break o
                } while (false);
                this.cursor = this.limit - c;
                do {
                  if (!this.eq_s_b$esjava$1("ிற்")) break;
                  break o
                } while (false);
                this.cursor = this.limit - c;
                u: do {
                  if (!this.eq_s_b$esjava$1("ின்")) break;
                  _ = this.limit - this.cursor, l = this.limit - this.cursor;
                  do {
                    if (!this.eq_s_b$esjava$1("ம")) break;
                    break u
                  } while (false);
                  this.cursor = this.limit - l, this.cursor = this.limit - _;
                  break o
                } while (false);
                this.cursor = this.limit - c;
                do {
                  if (!this.eq_s_b$esjava$1("ின்று")) break;
                  break o
                } while (false);
                this.cursor = this.limit - c;
                do {
                  if (!this.eq_s_b$esjava$1("ிருந்து")) break;
                  break o
                } while (false);
                this.cursor = this.limit - c;
                do {
                  if (!this.eq_s_b$esjava$1("விட")) break;
                  break o
                } while (false);
                this.cursor = this.limit - c;
                do {
                  if (!(this.I_length >= 7) || !this.eq_s_b$esjava$1("ிடம்")) break;
                  break o
                } while (false);
                this.cursor = this.limit - c;
                do {
                  if (!this.eq_s_b$esjava$1("ால்")) break;
                  break o
                } while (false);
                this.cursor = this.limit - c;
                do {
                  if (!this.eq_s_b$esjava$1("ுடை")) break;
                  break o
                } while (false);
                this.cursor = this.limit - c;
                do {
                  if (!this.eq_s_b$esjava$1("ாமல்")) break;
                  break o
                } while (false);
                this.cursor = this.limit - c;
                w: do {
                  if (!this.eq_s_b$esjava$1("ல்")) break;
                  w = this.limit - this.cursor, $ = this.limit - this.cursor;
                  do {
                    if (0 === this.find_among_b$esjava$1(t.a_20)) break;
                    break w
                  } while (false);
                  this.cursor = this.limit - $, this.cursor = this.limit - w;
                  break o
                } while (false);
                if (this.cursor = this.limit - c, !this.eq_s_b$esjava$1("ுள்")) break D
              } while (false);
              this.bra = this.cursor, this.slice_from$esjava$1("்"), this.cursor = this.limit - u;
              break e
            } while (false);
            this.cursor = this.limit - e;
            F: do {
              v = this.limit - this.cursor, this.ket = this.cursor;
              K: do {
                f = this.limit - this.cursor;
                do {
                  if (!this.eq_s_b$esjava$1("கண்")) break;
                  break K
                } while (false);
                this.cursor = this.limit - f;
                do {
                  if (!this.eq_s_b$esjava$1("முன்")) break;
                  break K
                } while (false);
                this.cursor = this.limit - f;
                do {
                  if (!this.eq_s_b$esjava$1("மேல்")) break;
                  break K
                } while (false);
                this.cursor = this.limit - f;
                do {
                  if (!this.eq_s_b$esjava$1("மேற்")) break;
                  break K
                } while (false);
                this.cursor = this.limit - f;
                do {
                  if (!this.eq_s_b$esjava$1("கீழ்")) break;
                  break K
                } while (false);
                this.cursor = this.limit - f;
                do {
                  if (!this.eq_s_b$esjava$1("பின்")) break;
                  break K
                } while (false);
                if (this.cursor = this.limit - f, !this.eq_s_b$esjava$1("து")) break F;
                k = this.limit - this.cursor, d = this.limit - this.cursor;
                do {
                  if (0 === this.find_among_b$esjava$1(t.a_21)) break;
                  break F
                } while (false);
                this.cursor = this.limit - d, this.cursor = this.limit - k
              } while (false);
              this.bra = this.cursor, this.slice_del$esjava$0(), this.cursor = this.limit - v;
              break e
            } while (false);
            if (this.cursor = this.limit - e, b = this.limit - this.cursor, this.ket = this.cursor, !this.eq_s_b$esjava$1("ீ")) returnfalse;
            this.bra = this.cursor, this.slice_from$esjava$1("ி"), this.cursor = this.limit - b
          } while (false);
          this.B_found_a_match = true, this.B_found_vetrumai_urupu = true, m = this.limit - this.cursor;
          do {
            if (this.ket = this.cursor, !this.eq_s_b$esjava$1("ின்")) break;
            this.bra = this.cursor, this.slice_from$esjava$1("்")
          } while (false);
          this.cursor = this.limit - m, this.cursor = this.limit_backward, j = this.cursor;
          do
            if (!this.r_fix_endings$esjava$0()) break; while (false);
          return this.cursor = j, true
        }
      }, {
        key: "r_remove_tense_suffixes$esjava$0",
        value: function() {
          var e = true,
            i = true;
          this.B_found_a_match = true;
          P: for (;;) {
            e = this.cursor;
            do {
              if (!this.B_found_a_match) break;
              i = this.cursor;
              do
                if (!this.r_remove_tense_suffix$esjava$0()) break; while (false);
              this.cursor = i;
              continue P
            } while (false);
            this.cursor = e;
            break
          }
          returntrue
        }
      }, {
        key: "r_remove_tense_suffix$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true,
            c = true,
            _ = true,
            l = true,
            w = true,
            $ = true,
            v = true,
            f = true,
            k = true,
            d = true;
          if (this.B_found_a_match = false, !this.r_has_min_length$esjava$0()) returnfalse;
          this.limit_backward = this.cursor, this.cursor = this.limit, e = this.limit - this.cursor;
          e: do i: do {
            i = this.limit - this.cursor;
            do {
              if (s = this.limit - this.cursor, this.ket = this.cursor, 0 === this.find_among_b$esjava$1(t.a_22)) break;
              this.bra = this.cursor, this.slice_del$esjava$0(), this.B_found_a_match = true, this.cursor = this.limit - s;
              break i
            } while (false);
            this.cursor = this.limit - i;
            t: do {
              r = this.limit - this.cursor, this.ket = this.cursor;
              r: do {
                a = this.limit - this.cursor;
                do {
                  if (!this.eq_s_b$esjava$1("மார்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("மின்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("னன்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("னான்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("னாள்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("னார்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                M: do {
                  if (!this.eq_s_b$esjava$1("வன்")) break;
                  n = this.limit - this.cursor, h = this.limit - this.cursor;
                  do {
                    if (0 === this.find_among_b$esjava$1(t.a_23)) break;
                    break M
                  } while (false);
                  this.cursor = this.limit - h, this.cursor = this.limit - n;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("னள்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("வள்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("னர்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("வர்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("ன")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("ப")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("க")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("த")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("ய")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("பன்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("பள்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("பர்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                F: do {
                  if (!this.eq_s_b$esjava$1("து")) break;
                  o = this.limit - this.cursor, u = this.limit - this.cursor;
                  do {
                    if (0 === this.find_among_b$esjava$1(t.a_24)) break;
                    break F
                  } while (false);
                  this.cursor = this.limit - u, this.cursor = this.limit - o;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("ிற்று")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("பம்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("னம்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("தும்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("றும்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("கும்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("னென்")) break;
                  break r
                } while (false);
                this.cursor = this.limit - a;
                do {
                  if (!this.eq_s_b$esjava$1("னை")) break;
                  break r
                } while (false);
                if (this.cursor = this.limit - a, !this.eq_s_b$esjava$1("வை")) break t
              } while (false);
              this.bra = this.cursor, this.slice_del$esjava$0(), this.B_found_a_match = true, this.cursor = this.limit - r;
              break i
            } while (false);
            this.cursor = this.limit - i;
            Q: do {
              c = this.limit - this.cursor, this.ket = this.cursor;
              Z: do {
                _ = this.limit - this.cursor;
                ee: do {
                  if (!this.eq_s_b$esjava$1("ான்")) break;
                  l = this.limit - this.cursor, w = this.limit - this.cursor;
                  do {
                    if (!this.eq_s_b$esjava$1("ச")) break;
                    break ee
                  } while (false);
                  this.cursor = this.limit - w, this.cursor = this.limit - l;
                  break Z
                } while (false);
                this.cursor = this.limit - _;
                do {
                  if (!this.eq_s_b$esjava$1("ாள்")) break;
                  break Z
                } while (false);
                this.cursor = this.limit - _;
                do {
                  if (!this.eq_s_b$esjava$1("ார்")) break;
                  break Z
                } while (false);
                this.cursor = this.limit - _;
                do {
                  if (!this.eq_s_b$esjava$1("ேன்")) break;
                  break Z
                } while (false);
                this.cursor = this.limit - _;
                do {
                  if (!this.eq_s_b$esjava$1("ா")) break;
                  break Z
                } while (false);
                this.cursor = this.limit - _;
                do {
                  if (!this.eq_s_b$esjava$1("ாம்")) break;
                  break Z
                } while (false);
                this.cursor = this.limit - _;
                do {
                  if (!this.eq_s_b$esjava$1("ெம்")) break;
                  break Z
                } while (false);
                this.cursor = this.limit - _;
                do {
                  if (!this.eq_s_b$esjava$1("ேம்")) break;
                  break Z
                } while (false);
                this.cursor = this.limit - _;
                do {
                  if (!this.eq_s_b$esjava$1("ோம்")) break;
                  break Z
                } while (false);
                this.cursor = this.limit - _;
                do {
                  if (!this.eq_s_b$esjava$1("கும்")) break;
                  break Z
                } while (false);
                this.cursor = this.limit - _;
                do {
                  if (!this.eq_s_b$esjava$1("தும்")) break;
                  break Z
                } while (false);
                this.cursor = this.limit - _;
                do {
                  if (!this.eq_s_b$esjava$1("டும்")) break;
                  break Z
                } while (false);
                this.cursor = this.limit - _;
                do {
                  if (!this.eq_s_b$esjava$1("றும்")) break;
                  break Z
                } while (false);
                this.cursor = this.limit - _;
                do {
                  if (!this.eq_s_b$esjava$1("ாய்")) break;
                  break Z
                } while (false);
                this.cursor = this.limit - _;
                do {
                  if (!this.eq_s_b$esjava$1("னென்")) break;
                  break Z
                } while (false);
                this.cursor = this.limit - _;
                do {
                  if (!this.eq_s_b$esjava$1("னிர்")) break;
                  break Z
                } while (false);
                this.cursor = this.limit - _;
                do {
                  if (!this.eq_s_b$esjava$1("ீர்")) break;
                  break Z
                } while (false);
                if (this.cursor = this.limit - _, !this.eq_s_b$esjava$1("ீயர்")) break Q
              } while (false);
              this.bra = this.cursor, this.slice_from$esjava$1("்"), this.B_found_a_match = true, this.cursor = this.limit - c;
              break i
            } while (false);
            this.cursor = this.limit - i, $ = this.limit - this.cursor, this.ket = this.cursor;
            ei: do {
              v = this.limit - this.cursor;
              do {
                if (!this.eq_s_b$esjava$1("கு")) break;
                break ei
              } while (false);
              if (this.cursor = this.limit - v, !this.eq_s_b$esjava$1("து")) break e
            } while (false);
            if (f = this.limit - this.cursor, !this.eq_s_b$esjava$1("்")) break e;
            this.cursor = this.limit - f, this.bra = this.cursor, this.slice_del$esjava$0(), this.B_found_a_match = true, this.cursor = this.limit - $
          } while (false); while (false);
          this.cursor = this.limit - e, k = this.limit - this.cursor;
          do {
            if (this.ket = this.cursor, 0 === this.find_among_b$esjava$1(t.a_25)) break;
            this.bra = this.cursor, this.slice_del$esjava$0(), this.B_found_a_match = true
          } while (false);
          this.cursor = this.limit - k, this.cursor = this.limit_backward, d = this.cursor;
          do
            if (!this.r_fix_endings$esjava$0()) break; while (false);
          return this.cursor = d, true
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true;
          this.B_found_vetrumai_urupu = false, e = this.cursor;
          do
            if (!this.r_fix_ending$esjava$0()) break; while (false);
          if (this.cursor = e, !this.r_has_min_length$esjava$0()) returnfalse;
          i = this.cursor;
          do
            if (!this.r_remove_question_prefixes$esjava$0()) break; while (false);
          this.cursor = i, s = this.cursor;
          do
            if (!this.r_remove_pronoun_prefixes$esjava$0()) break; while (false);
          this.cursor = s, t = this.cursor;
          do
            if (!this.r_remove_question_suffixes$esjava$0()) break; while (false);
          this.cursor = t, r = this.cursor;
          do
            if (!this.r_remove_um$esjava$0()) break; while (false);
          this.cursor = r, a = this.cursor;
          do
            if (!this.r_remove_common_word_endings$esjava$0()) break; while (false);
          this.cursor = a, n = this.cursor;
          do
            if (!this.r_remove_vetrumai_urupukal$esjava$0()) break; while (false);
          this.cursor = n, h = this.cursor;
          do
            if (!this.r_remove_plural_suffix$esjava$0()) break; while (false);
          this.cursor = h, o = this.cursor;
          do
            if (!this.r_remove_command_suffixes$esjava$0()) break; while (false);
          this.cursor = o, u = this.cursor;
          do
            if (!this.r_remove_tense_suffixes$esjava$0()) break; while (false);
          return this.cursor = u, true
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "I_length",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_length") ? this._$esjava$I_length : this._$esjava$I_length = 0
        },
        set: function(e) {
          this._$esjava$I_length = e
        }
      }, {
        key: "B_found_wrong_ending",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$B_found_wrong_ending") ? this._$esjava$B_found_wrong_ending : this._$esjava$B_found_wrong_ending = false
        },
        set: function(e) {
          this._$esjava$B_found_wrong_ending = e
        }
      }, {
        key: "B_found_vetrumai_urupu",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$B_found_vetrumai_urupu") ? this._$esjava$B_found_vetrumai_urupu : this._$esjava$B_found_vetrumai_urupu = false
        },
        set: function(e) {
          this._$esjava$B_found_vetrumai_urupu = e
        }
      }, {
        key: "B_found_a_match",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$B_found_a_match") ? this._$esjava$B_found_a_match : this._$esjava$B_found_a_match = false
        },
        set: function(e) {
          this._$esjava$B_found_a_match = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("க", false, false), new u("ங", false, false), new u("ச", false, false), new u("ஞ", false, false), new u("த", false, false), new u("ந", false, false), new u("ப", false, false), new u("ம", false, false), new u("ய", false, false), new u("வ", false, false)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("ந்த", false, false), new u("ந்த்", false, false), new u("ந்", false, false)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("ி", false, false), new u("ீ", false, false), new u("ை", false, false)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("க", false, false), new u("ச", false, false), new u("ட", false, false), new u("த", false, false), new u("ப", false, false), new u("ற", false, false)]
        }
      }, {
        key: "a_4",
        get: function() {
          return delete t.a_4, t.a_4 = [new u("க", false, false), new u("ச", false, false), new u("ட", false, false), new u("த", false, false), new u("ப", false, false), new u("ற", false, false)]
        }
      }, {
        key: "a_5",
        get: function() {
          return delete t.a_5, t.a_5 = [new u("க", false, false), new u("ச", false, false), new u("ட", false, false), new u("த", false, false), new u("ப", false, false), new u("ற", false, false)]
        }
      }, {
        key: "a_6",
        get: function() {
          return delete t.a_6, t.a_6 = [new u("ய", false, false), new u("ர", false, false), new u("ல", false, false), new u("ள", false, false), new u("ழ", false, false), new u("வ", false, false)]
        }
      }, {
        key: "a_7",
        get: function() {
          return delete t.a_7, t.a_7 = [new u("ங", false, false), new u("ஞ", false, false), new u("ண", false, false), new u("ந", false, false), new u("ன", false, false), new u("ம", false, false)]
        }
      }, {
        key: "a_8",
        get: function() {
          return delete t.a_8, t.a_8 = [new u("ய", false, false), new u("வ", false, false), new u("வ்", false, false)]
        }
      }, {
        key: "a_9",
        get: function() {
          return delete t.a_9, t.a_9 = [new u("ா", false, false), new u("ி", false, false), new u("ீ", false, false), new u("ு", false, false), new u("ூ", false, false), new u("ெ", false, false), new u("ே", false, false), new u("ை", false, false)]
        }
      }, {
        key: "a_10",
        get: function() {
          return delete t.a_10, t.a_10 = [new u("ா", false, false), new u("ி", false, false), new u("ீ", false, false), new u("ு", false, false), new u("ூ", false, false), new u("ெ", false, false), new u("ே", false, false), new u("ை", false, false)]
        }
      }, {
        key: "a_11",
        get: function() {
          return delete t.a_11, t.a_11 = [new u("அ", false, false), new u("இ", false, false), new u("உ", false, false)]
        }
      }, {
        key: "a_12",
        get: function() {
          return delete t.a_12, t.a_12 = [new u("க", false, false), new u("ங", false, false), new u("ச", false, false), new u("ஞ", false, false), new u("த", false, false), new u("ந", false, false), new u("ப", false, false), new u("ம", false, false), new u("ய", false, false), new u("வ", false, false)]
        }
      }, {
        key: "a_13",
        get: function() {
          return delete t.a_13, t.a_13 = [new u("க", false, false), new u("ச", false, false), new u("ட", false, false), new u("த", false, false), new u("ப", false, false), new u("ற", false, false)]
        }
      }, {
        key: "a_14",
        get: function() {
          return delete t.a_14, t.a_14 = [new u("ா", false, false), new u("ே", false, false), new u("ோ", false, false)]
        }
      }, {
        key: "a_15",
        get: function() {
          return delete t.a_15, t.a_15 = [new u("பி", false, false), new u("வி", false, false)]
        }
      }, {
        key: "a_16",
        get: function() {
          return delete t.a_16, t.a_16 = [new u("ா", false, false), new u("ி", false, false), new u("ீ", false, false), new u("ு", false, false), new u("ூ", false, false), new u("ெ", false, false), new u("ே", false, false), new u("ை", false, false)]
        }
      }, {
        key: "a_17",
        get: function() {
          return delete t.a_17, t.a_17 = [new u("பட்ட", false, false), new u("பட்டண", false, false), new u("தான", false, false), new u("படிதான", 2, false), new u("குரிய", false, false), new u("படி", false, false), new u("பற்றி", false, false), new u("படு", false, false), new u("விடு", false, false), new u("பட்டு", false, false), new u("விட்டு", false, false), new u("பட்டது", false, false), new u("ெல்லாம்", false, false)]
        }
      }, {
        key: "a_18",
        get: function() {
          return delete t.a_18, t.a_18 = [new u("க", false, false), new u("ச", false, false), new u("ட", false, false), new u("த", false, false), new u("ப", false, false), new u("ற", false, false)]
        }
      }, {
        key: "a_19",
        get: function() {
          return delete t.a_19, t.a_19 = [new u("க", false, false), new u("ச", false, false), new u("ட", false, false), new u("த", false, false), new u("ப", false, false), new u("ற", false, false)]
        }
      }, {
        key: "a_20",
        get: function() {
          return delete t.a_20, t.a_20 = [new u("ா", false, false), new u("ி", false, false), new u("ீ", false, false), new u("ு", false, false), new u("ூ", false, false), new u("ெ", false, false), new u("ே", false, false), new u("ை", false, false)]
        }
      }, {
        key: "a_21",
        get: function() {
          return delete t.a_21, t.a_21 = [new u("ா", false, false), new u("ி", false, false), new u("ீ", false, false), new u("ு", false, false), new u("ூ", false, false), new u("ெ", false, false), new u("ே", false, false), new u("ை", false, false)]
        }
      }, {
        key: "a_22",
        get: function() {
          return delete t.a_22, t.a_22 = [new u("படு", false, false), new u("கொண்டிர்", false, false)]
        }
      }, {
        key: "a_23",
        get: function() {
          return delete t.a_23, t.a_23 = [new u("அ", false, false), new u("ஆ", false, false), new u("இ", false, false), new u("ஈ", false, false), new u("உ", false, false), new u("ஊ", false, false), new u("எ", false, false), new u("ஏ", false, false), new u("ஐ", false, false), new u("ஒ", false, false), new u("ஓ", false, false), new u("ஔ", false, false)]
        }
      }, {
        key: "a_24",
        get: function() {
          return delete t.a_24, t.a_24 = [new u("ா", false, false), new u("ி", false, false), new u("ீ", false, false), new u("ு", false, false), new u("ூ", false, false), new u("ெ", false, false), new u("ே", false, false), new u("ை", false, false)]
        }
      }, {
        key: "a_25",
        get: function() {
          return delete t.a_25, t.a_25 = [new u("கிற", false, false), new u("கின்ற", false, false), new u("ாநின்ற", false, false), new u("கிற்", false, false), new u("கின்ற்", false, false), new u("ாநின்ற்", false, false)]
        }
      }]), t
    }(c),
    A = function(e) {
      function t() {
        return r(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
      }
      return s(t, e), a(t, [{
        key: "r_check_vowel_harmony$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true,
            c = true,
            _ = true;
          e = this.limit - this.cursor;
          V: for (;;) {
            i = this.limit - this.cursor;
            do {
              if (!this.in_grouping_b$esjava$3(t.g_vowel, 97, 305)) break;
              this.cursor = this.limit - i;
              break V
            } while (false);
            if (this.cursor = this.limit - i, this.cursor <= this.limit_backward) returnfalse;
            this.cursor--
          }
          s: do {
            s = this.limit - this.cursor;
            t: do {
              if (!this.eq_s_b$esjava$1("a")) break;
              U: for (;;) {
                r = this.limit - this.cursor;
                do {
                  if (!this.in_grouping_b$esjava$3(t.g_vowel1, 97, 305)) break;
                  this.cursor = this.limit - r;
                  break U
                } while (false);
                if (this.cursor = this.limit - r, this.cursor <= this.limit_backward) break t;
                this.cursor--
              }
              break s
            } while (false);
            this.cursor = this.limit - s;
            n: do {
              if (!this.eq_s_b$esjava$1("e")) break;
              j: for (;;) {
                a = this.limit - this.cursor;
                do {
                  if (!this.in_grouping_b$esjava$3(t.g_vowel2, 101, 252)) break;
                  this.cursor = this.limit - a;
                  break j
                } while (false);
                if (this.cursor = this.limit - a, this.cursor <= this.limit_backward) break n;
                this.cursor--
              }
              break s
            } while (false);
            this.cursor = this.limit - s;
            o: do {
              if (!this.eq_s_b$esjava$1("ı")) break;
              G: for (;;) {
                n = this.limit - this.cursor;
                do {
                  if (!this.in_grouping_b$esjava$3(t.g_vowel3, 97, 305)) break;
                  this.cursor = this.limit - n;
                  break G
                } while (false);
                if (this.cursor = this.limit - n, this.cursor <= this.limit_backward) break o;
                this.cursor--
              }
              break s
            } while (false);
            this.cursor = this.limit - s;
            C: do {
              if (!this.eq_s_b$esjava$1("i")) break;
              N: for (;;) {
                h = this.limit - this.cursor;
                do {
                  if (!this.in_grouping_b$esjava$3(t.g_vowel4, 101, 105)) break;
                  this.cursor = this.limit - h;
                  break N
                } while (false);
                if (this.cursor = this.limit - h, this.cursor <= this.limit_backward) break C;
                this.cursor--
              }
              break s
            } while (false);
            this.cursor = this.limit - s;
            c: do {
              if (!this.eq_s_b$esjava$1("o")) break;
              q: for (;;) {
                o = this.limit - this.cursor;
                do {
                  if (!this.in_grouping_b$esjava$3(t.g_vowel5, 111, 117)) break;
                  this.cursor = this.limit - o;
                  break q
                } while (false);
                if (this.cursor = this.limit - o, this.cursor <= this.limit_backward) break c;
                this.cursor--
              }
              break s
            } while (false);
            this.cursor = this.limit - s;
            H: do {
              if (!this.eq_s_b$esjava$1("\xf6")) break;
              es: for (;;) {
                u = this.limit - this.cursor;
                do {
                  if (!this.in_grouping_b$esjava$3(t.g_vowel6, 246, 252)) break;
                  this.cursor = this.limit - u;
                  break es
                } while (false);
                if (this.cursor = this.limit - u, this.cursor <= this.limit_backward) break H;
                this.cursor--
              }
              break s
            } while (false);
            this.cursor = this.limit - s;
            J: do {
              if (!this.eq_s_b$esjava$1("u")) break;
              et: for (;;) {
                c = this.limit - this.cursor;
                do {
                  if (!this.in_grouping_b$esjava$3(t.g_vowel5, 111, 117)) break;
                  this.cursor = this.limit - c;
                  break et
                } while (false);
                if (this.cursor = this.limit - c, this.cursor <= this.limit_backward) break J;
                this.cursor--
              }
              break s
            } while (false);
            if (this.cursor = this.limit - s, !this.eq_s_b$esjava$1("\xfc")) returnfalse;
            er: for (;;) {
              _ = this.limit - this.cursor;
              do {
                if (!this.in_grouping_b$esjava$3(t.g_vowel6, 246, 252)) break;
                this.cursor = this.limit - _;
                break er
              } while (false);
              if (this.cursor = this.limit - _, this.cursor <= this.limit_backward) returnfalse;
              this.cursor--
            }
          } while (false);
          return this.cursor = this.limit - e, true
        }
      }, {
        key: "r_mark_suffix_with_optional_n_consonant$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true;
          e: do {
            e = this.limit - this.cursor;
            do {
              if (!this.eq_s_b$esjava$1("n") || (i = this.limit - this.cursor, !this.in_grouping_b$esjava$3(t.g_vowel, 97, 305))) break;
              this.cursor = this.limit - i;
              break e
            } while (false);
            this.cursor = this.limit - e, s = this.limit - this.cursor;
            do {
              if (r = this.limit - this.cursor, !this.eq_s_b$esjava$1("n")) break;
              return this.cursor = this.limit - r, false
            } while (false);
            if (this.cursor = this.limit - s, a = this.limit - this.cursor, this.cursor <= this.limit_backward || (this.cursor--, !this.in_grouping_b$esjava$3(t.g_vowel, 97, 305))) returnfalse;
            this.cursor = this.limit - a
          } while (false);
          returntrue
        }
      }, {
        key: "r_mark_suffix_with_optional_s_consonant$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true;
          e: do {
            e = this.limit - this.cursor;
            do {
              if (!this.eq_s_b$esjava$1("s") || (i = this.limit - this.cursor, !this.in_grouping_b$esjava$3(t.g_vowel, 97, 305))) break;
              this.cursor = this.limit - i;
              break e
            } while (false);
            this.cursor = this.limit - e, s = this.limit - this.cursor;
            do {
              if (r = this.limit - this.cursor, !this.eq_s_b$esjava$1("s")) break;
              return this.cursor = this.limit - r, false
            } while (false);
            if (this.cursor = this.limit - s, a = this.limit - this.cursor, this.cursor <= this.limit_backward || (this.cursor--, !this.in_grouping_b$esjava$3(t.g_vowel, 97, 305))) returnfalse;
            this.cursor = this.limit - a
          } while (false);
          returntrue
        }
      }, {
        key: "r_mark_suffix_with_optional_y_consonant$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true;
          e: do {
            e = this.limit - this.cursor;
            do {
              if (!this.eq_s_b$esjava$1("y") || (i = this.limit - this.cursor, !this.in_grouping_b$esjava$3(t.g_vowel, 97, 305))) break;
              this.cursor = this.limit - i;
              break e
            } while (false);
            this.cursor = this.limit - e, s = this.limit - this.cursor;
            do {
              if (r = this.limit - this.cursor, !this.eq_s_b$esjava$1("y")) break;
              return this.cursor = this.limit - r, false
            } while (false);
            if (this.cursor = this.limit - s, a = this.limit - this.cursor, this.cursor <= this.limit_backward || (this.cursor--, !this.in_grouping_b$esjava$3(t.g_vowel, 97, 305))) returnfalse;
            this.cursor = this.limit - a
          } while (false);
          returntrue
        }
      }, {
        key: "r_mark_suffix_with_optional_U_vowel$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true;
          e: do {
            e = this.limit - this.cursor;
            do {
              if (!this.in_grouping_b$esjava$3(t.g_U, 105, 305) || (i = this.limit - this.cursor, !this.out_grouping_b$esjava$3(t.g_vowel, 97, 305))) break;
              this.cursor = this.limit - i;
              break e
            } while (false);
            this.cursor = this.limit - e, s = this.limit - this.cursor;
            do {
              if (r = this.limit - this.cursor, !this.in_grouping_b$esjava$3(t.g_U, 105, 305)) break;
              return this.cursor = this.limit - r, false
            } while (false);
            if (this.cursor = this.limit - s, a = this.limit - this.cursor, this.cursor <= this.limit_backward || (this.cursor--, !this.out_grouping_b$esjava$3(t.g_vowel, 97, 305))) returnfalse;
            this.cursor = this.limit - a
          } while (false);
          returntrue
        }
      }, {
        key: "r_mark_possessives$esjava$0",
        value: function() {
          return 0 !== this.find_among_b$esjava$1(t.a_0) && !!this.r_mark_suffix_with_optional_U_vowel$esjava$0()
        }
      }, {
        key: "r_mark_sU$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && !!this.in_grouping_b$esjava$3(t.g_U, 105, 305) && !!this.r_mark_suffix_with_optional_s_consonant$esjava$0()
        }
      }, {
        key: "r_mark_lArI$esjava$0",
        value: function() {
          return 0 !== this.find_among_b$esjava$1(t.a_1)
        }
      }, {
        key: "r_mark_yU$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && !!this.in_grouping_b$esjava$3(t.g_U, 105, 305) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0()
        }
      }, {
        key: "r_mark_nU$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(t.a_2)
        }
      }, {
        key: "r_mark_nUn$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(t.a_3) && !!this.r_mark_suffix_with_optional_n_consonant$esjava$0()
        }
      }, {
        key: "r_mark_yA$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(t.a_4) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0()
        }
      }, {
        key: "r_mark_nA$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(t.a_5)
        }
      }, {
        key: "r_mark_DA$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(t.a_6)
        }
      }, {
        key: "r_mark_ndA$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(t.a_7)
        }
      }, {
        key: "r_mark_DAn$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(t.a_8)
        }
      }, {
        key: "r_mark_ndAn$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(t.a_9)
        }
      }, {
        key: "r_mark_ylA$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(t.a_10) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0()
        }
      }, {
        key: "r_mark_ki$esjava$0",
        value: function() {
          return !!this.eq_s_b$esjava$1("ki")
        }
      }, {
        key: "r_mark_ncA$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(t.a_11) && !!this.r_mark_suffix_with_optional_n_consonant$esjava$0()
        }
      }, {
        key: "r_mark_yUm$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(t.a_12) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0()
        }
      }, {
        key: "r_mark_sUn$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(t.a_13)
        }
      }, {
        key: "r_mark_yUz$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(t.a_14) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0()
        }
      }, {
        key: "r_mark_sUnUz$esjava$0",
        value: function() {
          return 0 !== this.find_among_b$esjava$1(t.a_15)
        }
      }, {
        key: "r_mark_lAr$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(t.a_16)
        }
      }, {
        key: "r_mark_nUz$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(t.a_17)
        }
      }, {
        key: "r_mark_DUr$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(t.a_18)
        }
      }, {
        key: "r_mark_cAsInA$esjava$0",
        value: function() {
          return 0 !== this.find_among_b$esjava$1(t.a_19)
        }
      }, {
        key: "r_mark_yDU$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(t.a_20) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0()
        }
      }, {
        key: "r_mark_ysA$esjava$0",
        value: function() {
          return 0 !== this.find_among_b$esjava$1(t.a_21) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0()
        }
      }, {
        key: "r_mark_ymUs_$esjava$0",
        value: function() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$1(t.a_22) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0()
        }
      }, {
        key: "r_mark_yken$esjava$0",
        value: function() {
          return !!this.eq_s_b$esjava$1("ken") && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0()
        }
      }, {
        key: "r_stem_nominal_verb_suffixes$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true;
          this.ket = this.cursor, this.B_continue_stemming_noun_suffixes = true;
          e: do {
            e = this.limit - this.cursor;
            i: do {
              s: do {
                i = this.limit - this.cursor;
                do {
                  if (!this.r_mark_ymUs_$esjava$0()) break;
                  break s
                } while (false);
                this.cursor = this.limit - i;
                do {
                  if (!this.r_mark_yDU$esjava$0()) break;
                  break s
                } while (false);
                this.cursor = this.limit - i;
                do {
                  if (!this.r_mark_ysA$esjava$0()) break;
                  break s
                } while (false);
                if (this.cursor = this.limit - i, !this.r_mark_yken$esjava$0()) break i
              } while (false);
              break e
            } while (false);
            this.cursor = this.limit - e;
            do {
              if (!this.r_mark_cAsInA$esjava$0()) break;
              A: do {
                s = this.limit - this.cursor;
                do {
                  if (!this.r_mark_sUnUz$esjava$0()) break;
                  break A
                } while (false);
                this.cursor = this.limit - s;
                do {
                  if (!this.r_mark_lAr$esjava$0()) break;
                  break A
                } while (false);
                this.cursor = this.limit - s;
                do {
                  if (!this.r_mark_yUm$esjava$0()) break;
                  break A
                } while (false);
                this.cursor = this.limit - s;
                do {
                  if (!this.r_mark_sUn$esjava$0()) break;
                  break A
                } while (false);
                this.cursor = this.limit - s;
                do {
                  if (!this.r_mark_yUz$esjava$0()) break;
                  break A
                } while (false);
                this.cursor = this.limit - s
              } while (false);
              if (!this.r_mark_ymUs_$esjava$0()) break;
              break e
            } while (false);
            this.cursor = this.limit - e;
            do {
              if (!this.r_mark_lAr$esjava$0()) break;
              this.bra = this.cursor, this.slice_del$esjava$0(), t = this.limit - this.cursor;
              u: do {
                this.ket = this.cursor;
                c: do {
                  r = this.limit - this.cursor;
                  do {
                    if (!this.r_mark_DUr$esjava$0()) break;
                    break c
                  } while (false);
                  this.cursor = this.limit - r;
                  do {
                    if (!this.r_mark_yDU$esjava$0()) break;
                    break c
                  } while (false);
                  this.cursor = this.limit - r;
                  do {
                    if (!this.r_mark_ysA$esjava$0()) break;
                    break c
                  } while (false);
                  if (this.cursor = this.limit - r, !this.r_mark_ymUs_$esjava$0()) {
                    this.cursor = this.limit - t;
                    break u
                  }
                } while (false)
              } while (false);
              this.B_continue_stemming_noun_suffixes = false;
              break e
            } while (false);
            this.cursor = this.limit - e;
            l: do {
              if (!this.r_mark_nUz$esjava$0()) break;
              ea: do {
                a = this.limit - this.cursor;
                do {
                  if (!this.r_mark_yDU$esjava$0()) break;
                  break ea
                } while (false);
                if (this.cursor = this.limit - a, !this.r_mark_ysA$esjava$0()) break l
              } while (false);
              break e
            } while (false);
            this.cursor = this.limit - e;
            en: do {
              w: do {
                n = this.limit - this.cursor;
                do {
                  if (!this.r_mark_sUnUz$esjava$0()) break;
                  break w
                } while (false);
                this.cursor = this.limit - n;
                do {
                  if (!this.r_mark_yUz$esjava$0()) break;
                  break w
                } while (false);
                this.cursor = this.limit - n;
                do {
                  if (!this.r_mark_sUn$esjava$0()) break;
                  break w
                } while (false);
                if (this.cursor = this.limit - n, !this.r_mark_yUm$esjava$0()) break en
              } while (false);this.bra = this.cursor,
              this.slice_del$esjava$0(),
              h = this.limit - this.cursor;do
                if (this.ket = this.cursor, !this.r_mark_ymUs_$esjava$0()) {
                  this.cursor = this.limit - h;
                  break
                } while (false);
              break e
            } while (false);
            if (this.cursor = this.limit - e, !this.r_mark_DUr$esjava$0()) returnfalse;
            this.bra = this.cursor, this.slice_del$esjava$0(), o = this.limit - this.cursor;
            do {
              this.ket = this.cursor;
              f: do {
                u = this.limit - this.cursor;
                do {
                  if (!this.r_mark_sUnUz$esjava$0()) break;
                  break f
                } while (false);
                this.cursor = this.limit - u;
                do {
                  if (!this.r_mark_lAr$esjava$0()) break;
                  break f
                } while (false);
                this.cursor = this.limit - u;
                do {
                  if (!this.r_mark_yUm$esjava$0()) break;
                  break f
                } while (false);
                this.cursor = this.limit - u;
                do {
                  if (!this.r_mark_sUn$esjava$0()) break;
                  break f
                } while (false);
                this.cursor = this.limit - u;
                do {
                  if (!this.r_mark_yUz$esjava$0()) break;
                  break f
                } while (false);
                this.cursor = this.limit - u
              } while (false);
              if (!this.r_mark_ymUs_$esjava$0()) {
                this.cursor = this.limit - o;
                break
              }
            } while (false)
          } while (false);
          return this.bra = this.cursor, this.slice_del$esjava$0(), true
        }
      }, {
        key: "r_stem_suffix_chain_before_ki$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true,
            c = true;
          if (this.ket = this.cursor, !this.r_mark_ki$esjava$0()) returnfalse;
          e: do {
            e = this.limit - this.cursor;
            do {
              if (!this.r_mark_DA$esjava$0()) break;
              this.bra = this.cursor, this.slice_del$esjava$0(), i = this.limit - this.cursor;
              s: do {
                this.ket = this.cursor;
                t: do {
                  s = this.limit - this.cursor;
                  do {
                    if (!this.r_mark_lAr$esjava$0()) break;
                    this.bra = this.cursor, this.slice_del$esjava$0(), t = this.limit - this.cursor;
                    do
                      if (!this.r_stem_suffix_chain_before_ki$esjava$0()) {
                        this.cursor = this.limit - t;
                        break
                      } while (false);
                    break t
                  } while (false);
                  if (this.cursor = this.limit - s, !this.r_mark_possessives$esjava$0()) {
                    this.cursor = this.limit - i;
                    break s
                  }
                  this.bra = this.cursor, this.slice_del$esjava$0(), r = this.limit - this.cursor;
                  do
                    if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0() || (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0())) {
                      this.cursor = this.limit - r;
                      break
                    } while (false)
                } while (false)
              } while (false);
              break e
            } while (false);
            this.cursor = this.limit - e;
            do {
              if (!this.r_mark_nUn$esjava$0()) break;
              this.bra = this.cursor, this.slice_del$esjava$0(), a = this.limit - this.cursor;
              D: do {
                this.ket = this.cursor;
                o: do {
                  n = this.limit - this.cursor;
                  do {
                    if (!this.r_mark_lArI$esjava$0()) break;
                    this.bra = this.cursor, this.slice_del$esjava$0();
                    break o
                  } while (false);
                  this.cursor = this.limit - n;
                  M: do {
                    this.ket = this.cursor;
                    C: do {
                      h = this.limit - this.cursor;
                      do {
                        if (!this.r_mark_possessives$esjava$0()) break;
                        break C
                      } while (false);
                      if (this.cursor = this.limit - h, !this.r_mark_sU$esjava$0()) break M
                    } while (false);
                    this.bra = this.cursor, this.slice_del$esjava$0(), o = this.limit - this.cursor;
                    do
                      if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0() || (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0())) {
                        this.cursor = this.limit - o;
                        break
                      } while (false);
                    break o
                  } while (false);
                  if (this.cursor = this.limit - n, !this.r_stem_suffix_chain_before_ki$esjava$0()) {
                    this.cursor = this.limit - a;
                    break D
                  }
                } while (false)
              } while (false);
              break e
            } while (false);
            if (this.cursor = this.limit - e, !this.r_mark_ndA$esjava$0()) returnfalse;
            c: do {
              u = this.limit - this.cursor;
              do {
                if (!this.r_mark_lArI$esjava$0()) break;
                this.bra = this.cursor, this.slice_del$esjava$0();
                break c
              } while (false);
              this.cursor = this.limit - u;
              do {
                if (!this.r_mark_sU$esjava$0()) break;
                this.bra = this.cursor, this.slice_del$esjava$0(), c = this.limit - this.cursor;
                do
                  if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0() || (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0())) {
                    this.cursor = this.limit - c;
                    break
                  } while (false);
                break c
              } while (false);
              if (this.cursor = this.limit - u, !this.r_stem_suffix_chain_before_ki$esjava$0()) returnfalse
            } while (false)
          } while (false);
          returntrue
        }
      }, {
        key: "r_stem_noun_suffixes$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            t = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true,
            c = true,
            _ = true,
            l = true,
            w = true,
            $ = true,
            v = true,
            f = true,
            k = true,
            d = true,
            b = true,
            m = true,
            j = true,
            g = true,
            p = true,
            y = true,
            I = true,
            q = true;
          e: do {
            e = this.limit - this.cursor;
            do {
              if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0()) break;
              this.bra = this.cursor, this.slice_del$esjava$0(), i = this.limit - this.cursor;
              do
                if (!this.r_stem_suffix_chain_before_ki$esjava$0()) {
                  this.cursor = this.limit - i;
                  break
                } while (false);
              break e
            } while (false);
            this.cursor = this.limit - e;
            do {
              if (this.ket = this.cursor, !this.r_mark_ncA$esjava$0()) break;
              this.bra = this.cursor, this.slice_del$esjava$0(), s = this.limit - this.cursor;
              r: do a: do {
                t = this.limit - this.cursor;
                do {
                  if (this.ket = this.cursor, !this.r_mark_lArI$esjava$0()) break;
                  this.bra = this.cursor, this.slice_del$esjava$0();
                  break a
                } while (false);
                this.cursor = this.limit - t;
                A: do {
                  this.ket = this.cursor;
                  D: do {
                    r = this.limit - this.cursor;
                    do {
                      if (!this.r_mark_possessives$esjava$0()) break;
                      break D
                    } while (false);
                    if (this.cursor = this.limit - r, !this.r_mark_sU$esjava$0()) break A
                  } while (false);
                  this.bra = this.cursor, this.slice_del$esjava$0(), a = this.limit - this.cursor;
                  do
                    if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0() || (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0())) {
                      this.cursor = this.limit - a;
                      break
                    } while (false);
                  break a
                } while (false);
                if (this.cursor = this.limit - t, this.ket = this.cursor, !this.r_mark_lAr$esjava$0() || (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0())) {
                  this.cursor = this.limit - s;
                  break r
                }
              } while (false); while (false);
              break e
            } while (false);
            this.cursor = this.limit - e;
            M: do {
              this.ket = this.cursor;
              C: do {
                n = this.limit - this.cursor;
                do {
                  if (!this.r_mark_ndA$esjava$0()) break;
                  break C
                } while (false);
                if (this.cursor = this.limit - n, !this.r_mark_nA$esjava$0()) break M
              } while (false);
              u: do {
                h = this.limit - this.cursor;
                do {
                  if (!this.r_mark_lArI$esjava$0()) break;
                  this.bra = this.cursor, this.slice_del$esjava$0();
                  break u
                } while (false);
                this.cursor = this.limit - h;
                do {
                  if (!this.r_mark_sU$esjava$0()) break;
                  this.bra = this.cursor, this.slice_del$esjava$0(), o = this.limit - this.cursor;
                  do
                    if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0() || (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0())) {
                      this.cursor = this.limit - o;
                      break
                    } while (false);
                  break u
                } while (false);
                if (this.cursor = this.limit - h, !this.r_stem_suffix_chain_before_ki$esjava$0()) break M
              } while (false);
              break e
            } while (false);
            this.cursor = this.limit - e;
            H: do {
              this.ket = this.cursor;
              l: do {
                u = this.limit - this.cursor;
                do {
                  if (!this.r_mark_ndAn$esjava$0()) break;
                  break l
                } while (false);
                if (this.cursor = this.limit - u, !this.r_mark_nU$esjava$0()) break H
              } while (false);
              J: do {
                c = this.limit - this.cursor;
                do {
                  if (!this.r_mark_sU$esjava$0()) break;
                  this.bra = this.cursor, this.slice_del$esjava$0(), _ = this.limit - this.cursor;
                  do
                    if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0() || (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0())) {
                      this.cursor = this.limit - _;
                      break
                    } while (false);
                  break J
                } while (false);
                if (this.cursor = this.limit - c, !this.r_mark_lArI$esjava$0()) break H
              } while (false);
              break e
            } while (false);
            this.cursor = this.limit - e;
            do {
              if (this.ket = this.cursor, !this.r_mark_DAn$esjava$0()) break;
              this.bra = this.cursor, this.slice_del$esjava$0(), l = this.limit - this.cursor;
              F: do {
                this.ket = this.cursor;
                K: do {
                  w = this.limit - this.cursor;
                  do {
                    if (!this.r_mark_possessives$esjava$0()) break;
                    this.bra = this.cursor, this.slice_del$esjava$0(), $ = this.limit - this.cursor;
                    do
                      if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0() || (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0())) {
                        this.cursor = this.limit - $;
                        break
                      } while (false);
                    break K
                  } while (false);
                  this.cursor = this.limit - w;
                  do {
                    if (!this.r_mark_lAr$esjava$0()) break;
                    this.bra = this.cursor, this.slice_del$esjava$0(), v = this.limit - this.cursor;
                    do
                      if (!this.r_stem_suffix_chain_before_ki$esjava$0()) {
                        this.cursor = this.limit - v;
                        break
                      } while (false);
                    break K
                  } while (false);
                  if (this.cursor = this.limit - w, !this.r_stem_suffix_chain_before_ki$esjava$0()) {
                    this.cursor = this.limit - l;
                    break F
                  }
                } while (false)
              } while (false);
              break e
            } while (false);
            this.cursor = this.limit - e;
            eh: do {
              this.ket = this.cursor;
              k: do {
                f = this.limit - this.cursor;
                do {
                  if (!this.r_mark_nUn$esjava$0()) break;
                  break k
                } while (false);
                if (this.cursor = this.limit - f, !this.r_mark_ylA$esjava$0()) break eh
              } while (false);
              this.bra = this.cursor, this.slice_del$esjava$0(), k = this.limit - this.cursor;
              eo: do Q: do {
                d = this.limit - this.cursor;
                do {
                  if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0() || (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0())) break;
                  break Q
                } while (false);
                this.cursor = this.limit - d;
                ee: do {
                  this.ket = this.cursor;
                  eu: do {
                    b = this.limit - this.cursor;
                    do {
                      if (!this.r_mark_possessives$esjava$0()) break;
                      break eu
                    } while (false);
                    if (this.cursor = this.limit - b, !this.r_mark_sU$esjava$0()) break ee
                  } while (false);
                  this.bra = this.cursor, this.slice_del$esjava$0(), m = this.limit - this.cursor;
                  do
                    if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0() || (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0())) {
                      this.cursor = this.limit - m;
                      break
                    } while (false);
                  break Q
                } while (false);
                if (this.cursor = this.limit - d, !this.r_stem_suffix_chain_before_ki$esjava$0()) {
                  this.cursor = this.limit - k;
                  break eo
                }
              } while (false); while (false);
              break e
            } while (false);
            this.cursor = this.limit - e;
            do {
              if (this.ket = this.cursor, !this.r_mark_lArI$esjava$0()) break;
              this.bra = this.cursor, this.slice_del$esjava$0();
              break e
            } while (false);
            this.cursor = this.limit - e;
            do {
              if (!this.r_stem_suffix_chain_before_ki$esjava$0()) break;
              break e
            } while (false);
            this.cursor = this.limit - e;
            ec: do {
              this.ket = this.cursor;
              e_: do {
                j = this.limit - this.cursor;
                do {
                  if (!this.r_mark_DA$esjava$0()) break;
                  break e_
                } while (false);
                this.cursor = this.limit - j;
                do {
                  if (!this.r_mark_yU$esjava$0()) break;
                  break e_
                } while (false);
                if (this.cursor = this.limit - j, !this.r_mark_yA$esjava$0()) break ec
              } while (false);
              this.bra = this.cursor, this.slice_del$esjava$0(), g = this.limit - this.cursor;
              el: do {
                this.ket = this.cursor;
                ew: do {
                  p = this.limit - this.cursor;
                  do {
                    if (!this.r_mark_possessives$esjava$0()) break;
                    this.bra = this.cursor, this.slice_del$esjava$0(), y = this.limit - this.cursor;
                    do
                      if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0()) {
                        this.cursor = this.limit - y;
                        break
                      } while (false);
                    break ew
                  } while (false);
                  if (this.cursor = this.limit - p, !this.r_mark_lAr$esjava$0()) {
                    this.cursor = this.limit - g;
                    break el
                  }
                } while (false);
                if (this.bra = this.cursor, this.slice_del$esjava$0(), this.ket = this.cursor, !this.r_stem_suffix_chain_before_ki$esjava$0()) {
                  this.cursor = this.limit - g;
                  break
                }
              } while (false);
              break e
            } while (false);
            this.cursor = this.limit - e, this.ket = this.cursor;
            e$: do {
              I = this.limit - this.cursor;
              do {
                if (!this.r_mark_possessives$esjava$0()) break;
                break e$
              } while (false);
              if (this.cursor = this.limit - I, !this.r_mark_sU$esjava$0()) returnfalse
            } while (false);
            this.bra = this.cursor, this.slice_del$esjava$0(), q = this.limit - this.cursor;
            do
              if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0() || (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0())) {
                this.cursor = this.limit - q;
                break
              } while (false)
          } while (false);
          returntrue
        }
      }, {
        key: "r_post_process_last_consonants$esjava$0",
        value: function() {
          var e = true;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$1(t.a_23))) returnfalse;
          switch (this.bra = this.cursor, e) {
            case 0:
              returnfalse;
            case 1:
              this.slice_from$esjava$1("p");
              break;
            case 2:
              this.slice_from$esjava$1("\xe7");
              break;
            case 3:
              this.slice_from$esjava$1("t");
              break;
            case 4:
              this.slice_from$esjava$1("k")
          }
          returntrue
        }
      }, {
        key: "r_append_U_to_stems_ending_with_d_or_g$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true,
            r = true,
            a = true,
            n = true,
            h = true,
            o = true,
            u = true,
            c = true,
            _ = true,
            l = true,
            w = true,
            $ = true,
            v = true;
          e = this.limit - this.cursor;
          e: do {
            i = this.limit - this.cursor;
            do {
              if (!this.eq_s_b$esjava$1("d")) break;
              break e
            } while (false);
            if (this.cursor = this.limit - i, !this.eq_s_b$esjava$1("g")) returnfalse
          } while (false);
          this.cursor = this.limit - e;
          s: do {
            s = this.limit - this.cursor;
            t: do {
              r = this.limit - this.cursor;
              U: for (;;) {
                a = this.limit - this.cursor;
                do {
                  if (!this.in_grouping_b$esjava$3(t.g_vowel, 97, 305)) break;
                  this.cursor = this.limit - a;
                  break U
                } while (false);
                if (this.cursor = this.limit - a, this.cursor <= this.limit_backward) break t;
                this.cursor--
              }
              n: do {
                n = this.limit - this.cursor;
                do {
                  if (!this.eq_s_b$esjava$1("a")) break;
                  break n
                } while (false);
                if (this.cursor = this.limit - n, !this.eq_s_b$esjava$1("ı")) break t
              } while (false);
              this.cursor = this.limit - r;
              var f = this.cursor;
              this.insert$esjava$3(this.cursor, this.cursor, "ı"), this.cursor = f;
              break s
            } while (false);
            this.cursor = this.limit - s;
            D: do {
              h = this.limit - this.cursor;
              B: for (;;) {
                o = this.limit - this.cursor;
                do {
                  if (!this.in_grouping_b$esjava$3(t.g_vowel, 97, 305)) break;
                  this.cursor = this.limit - o;
                  break B
                } while (false);
                if (this.cursor = this.limit - o, this.cursor <= this.limit_backward) break D;
                this.cursor--
              }
              M: do {
                u = this.limit - this.cursor;
                do {
                  if (!this.eq_s_b$esjava$1("e")) break;
                  break M
                } while (false);
                if (this.cursor = this.limit - u, !this.eq_s_b$esjava$1("i")) break D
              } while (false);
              this.cursor = this.limit - h;
              var f = this.cursor;
              this.insert$esjava$3(this.cursor, this.cursor, "i"), this.cursor = f;
              break s
            } while (false);
            this.cursor = this.limit - s;
            y: do {
              c = this.limit - this.cursor;
              I: for (;;) {
                _ = this.limit - this.cursor;
                do {
                  if (!this.in_grouping_b$esjava$3(t.g_vowel, 97, 305)) break;
                  this.cursor = this.limit - _;
                  break I
                } while (false);
                if (this.cursor = this.limit - _, this.cursor <= this.limit_backward) break y;
                this.cursor--
              }
              ev: do {
                l = this.limit - this.cursor;
                do {
                  if (!this.eq_s_b$esjava$1("o")) break;
                  break ev
                } while (false);
                if (this.cursor = this.limit - l, !this.eq_s_b$esjava$1("u")) break y
              } while (false);
              this.cursor = this.limit - c;
              var f = this.cursor;
              this.insert$esjava$3(this.cursor, this.cursor, "u"), this.cursor = f;
              break s
            } while (false);
            this.cursor = this.limit - s, w = this.limit - this.cursor;
            O: for (;;) {
              $ = this.limit - this.cursor;
              do {
                if (!this.in_grouping_b$esjava$3(t.g_vowel, 97, 305)) break;
                this.cursor = this.limit - $;
                break O
              } while (false);
              if (this.cursor = this.limit - $, this.cursor <= this.limit_backward) returnfalse;
              this.cursor--
            }
            ea: do {
              v = this.limit - this.cursor;
              do {
                if (!this.eq_s_b$esjava$1("\xf6")) break;
                break ea
              } while (false);
              if (this.cursor = this.limit - v, !this.eq_s_b$esjava$1("\xfc")) returnfalse
            } while (false);
            this.cursor = this.limit - w;
            var f = this.cursor;
            this.insert$esjava$3(this.cursor, this.cursor, "\xfc"), this.cursor = f
          } while (false);
          returntrue
        }
      }, {
        key: "r_more_than_one_syllable_word$esjava$0",
        value: function() {
          var e = true,
            i = true;
          e = this.cursor;
          var s = 2;
          P: for (;;) {
            i = this.cursor;
            i: do {
              S: for (;;) {
                do {
                  if (!this.in_grouping$esjava$3(t.g_vowel, 97, 305)) break;
                  break S
                } while (false);
                if (this.cursor >= this.limit) break i;
                this.cursor++
              }
              s--;
              continue P
            } while (false);
            this.cursor = i;
            break
          }
          return !(s > 0) && (this.cursor = e, true)
        }
      }, {
        key: "r_is_reserved_word$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          e: do {
            e = this.cursor;
            i: do {
              i = this.cursor;
              S: for (;;) {
                do {
                  if (!this.eq_s$esjava$1("ad")) break;
                  break S
                } while (false);
                if (this.cursor >= this.limit) break i;
                this.cursor++
              }
              if (this.I_strlen = 2, this.I_strlen !== this.limit) break;
              this.cursor = i;
              break e
            } while (false);
            this.cursor = e, s = this.cursor;
            U: for (;;) {
              do {
                if (!this.eq_s$esjava$1("soyad")) break;
                break U
              } while (false);
              if (this.cursor >= this.limit) returnfalse;
              this.cursor++
            }
            if (this.I_strlen = 5, this.I_strlen !== this.limit) returnfalse;
            this.cursor = s
          } while (false);
          returntrue
        }
      }, {
        key: "r_postlude$esjava$0",
        value: function() {
          var e = true,
            i = true,
            s = true;
          e = this.cursor;
          do {
            if (!this.r_is_reserved_word$esjava$0()) break;
            returnfalse
          } while (false);
          this.cursor = e, this.limit_backward = this.cursor, this.cursor = this.limit, i = this.limit - this.cursor;
          do
            if (!this.r_append_U_to_stems_ending_with_d_or_g$esjava$0()) break; while (false);
          this.cursor = this.limit - i, s = this.limit - this.cursor;
          do
            if (!this.r_post_process_last_consonants$esjava$0()) break; while (false);
          return this.cursor = this.limit - s, this.cursor = this.limit_backward, true
        }
      }, {
        key: "stem$esjava$0",
        value: function() {
          var e = true,
            i = true;
          if (!this.r_more_than_one_syllable_word$esjava$0()) returnfalse;
          this.limit_backward = this.cursor, this.cursor = this.limit, e = this.limit - this.cursor;
          do
            if (!this.r_stem_nominal_verb_suffixes$esjava$0()) break; while (false);
          if (this.cursor = this.limit - e, !this.B_continue_stemming_noun_suffixes) returnfalse;
          i = this.limit - this.cursor;
          do
            if (!this.r_stem_noun_suffixes$esjava$0()) break; while (false);
          return this.cursor = this.limit - i, this.cursor = this.limit_backward, !!this.r_postlude$esjava$0()
        }
      }, {
        key: "stem",
        value: function() {
          for (var e, i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return 0 === s.length ? this.stem$esjava$0.apply(this, s) : (e = n(Object.getPrototypeOf(t.prototype), "stem", this)).call.apply(e, [this].concat(s))
        }
      }, {
        key: "B_continue_stemming_noun_suffixes",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$B_continue_stemming_noun_suffixes") ? this._$esjava$B_continue_stemming_noun_suffixes : this._$esjava$B_continue_stemming_noun_suffixes = false
        },
        set: function(e) {
          this._$esjava$B_continue_stemming_noun_suffixes = e
        }
      }, {
        key: "I_strlen",
        get: function() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_strlen") ? this._$esjava$I_strlen : this._$esjava$I_strlen = 0
        },
        set: function(e) {
          this._$esjava$I_strlen = e
        }
      }], [{
        key: "a_0",
        get: function() {
          return delete t.a_0, t.a_0 = [new u("m", false, false), new u("n", false, false), new u("miz", false, false), new u("niz", false, false), new u("muz", false, false), new u("nuz", false, false), new u("m\xfcz", false, false), new u("n\xfcz", false, false), new u("mız", false, false), new u("nız", false, false)]
        }
      }, {
        key: "a_1",
        get: function() {
          return delete t.a_1, t.a_1 = [new u("leri", false, false), new u("ları", false, false)]
        }
      }, {
        key: "a_2",
        get: function() {
          return delete t.a_2, t.a_2 = [new u("ni", false, false), new u("nu", false, false), new u("n\xfc", false, false), new u("nı", false, false)]
        }
      }, {
        key: "a_3",
        get: function() {
          return delete t.a_3, t.a_3 = [new u("in", false, false), new u("un", false, false), new u("\xfcn", false, false), new u("ın", false, false)]
        }
      }, {
        key: "a_4",
        get: function() {
          return delete t.a_4, t.a_4 = [new u("a", false, false), new u("e", false, false)]
        }
      }, {
        key: "a_5",
        get: function() {
          return delete t.a_5, t.a_5 = [new u("na", false, false), new u("ne", false, false)]
        }
      }, {
        key: "a_6",
        get: function() {
          return delete t.a_6, t.a_6 = [new u("da", false, false), new u("ta", false, false), new u("de", false, false), new u("te", false, false)]
        }
      }, {
        key: "a_7",
        get: function() {
          return delete t.a_7, t.a_7 = [new u("nda", false, false), new u("nde", false, false)]
        }
      }, {
        key: "a_8",
        get: function() {
          return delete t.a_8, t.a_8 = [new u("dan", false, false), new u("tan", false, false), new u("den", false, false), new u("ten", false, false)]
        }
      }, {
        key: "a_9",
        get: function() {
          return delete t.a_9, t.a_9 = [new u("ndan", false, false), new u("nden", false, false)]
        }
      }, {
        key: "a_10",
        get: function() {
          return delete t.a_10, t.a_10 = [new u("la", false, false), new u("le", false, false)]
        }
      }, {
        key: "a_11",
        get: function() {
          return delete t.a_11, t.a_11 = [new u("ca", false, false), new u("ce", false, false)]
        }
      }, {
        key: "a_12",
        get: function() {
          return delete t.a_12, t.a_12 = [new u("im", false, false), new u("um", false, false), new u("\xfcm", false, false), new u("ım", false, false)]
        }
      }, {
        key: "a_13",
        get: function() {
          return delete t.a_13, t.a_13 = [new u("sin", false, false), new u("sun", false, false), new u("s\xfcn", false, false), new u("sın", false, false)]
        }
      }, {
        key: "a_14",
        get: function() {
          return delete t.a_14, t.a_14 = [new u("iz", false, false), new u("uz", false, false), new u("\xfcz", false, false), new u("ız", false, false)]
        }
      }, {
        key: "a_15",
        get: function() {
          return delete t.a_15, t.a_15 = [new u("siniz", false, false), new u("sunuz", false, false), new u("s\xfcn\xfcz", false, false), new u("sınız", false, false)]
        }
      }, {
        key: "a_16",
        get: function() {
          return delete t.a_16, t.a_16 = [new u("lar", false, false), new u("ler", false, false)]
        }
      }, {
        key: "a_17",
        get: function() {
          return delete t.a_17, t.a_17 = [new u("niz", false, false), new u("nuz", false, false), new u("n\xfcz", false, false), new u("nız", false, false)]
        }
      }, {
        key: "a_18",
        get: function() {
          return delete t.a_18, t.a_18 = [new u("dir", false, false), new u("tir", false, false), new u("dur", false, false), new u("tur", false, false), new u("d\xfcr", false, false), new u("t\xfcr", false, false), new u("dır", false, false), new u("tır", false, false)]
        }
      }, {
        key: "a_19",
        get: function() {
          return delete t.a_19, t.a_19 = [new u("casına", false, false), new u("cesine", false, false)]
        }
      }, {
        key: "a_20",
        get: function() {
          return delete t.a_20, t.a_20 = [new u("di", false, false), new u("ti", false, false), new u("dik", false, false), new u("tik", false, false), new u("duk", false, false), new u("tuk", false, false), new u("d\xfck", false, false), new u("t\xfck", false, false), new u("dık", false, false), new u("tık", false, false), new u("dim", false, false), new u("tim", false, false), new u("dum", false, false), new u("tum", false, false), new u("d\xfcm", false, false), new u("t\xfcm", false, false), new u("dım", false, false), new u("tım", false, false), new u("din", false, false), new u("tin", false, false), new u("dun", false, false), new u("tun", false, false), new u("d\xfcn", false, false), new u("t\xfcn", false, false), new u("dın", false, false), new u("tın", false, false), new u("du", false, false), new u("tu", false, false), new u("d\xfc", false, false), new u("t\xfc", false, false), new u("dı", false, false), new u("tı", false, false)]
        }
      }, {
        key: "a_21",
        get: function() {
          return delete t.a_21, t.a_21 = [new u("sa", false, false), new u("se", false, false), new u("sak", false, false), new u("sek", false, false), new u("sam", false, false), new u("sem", false, false), new u("san", false, false), new u("sen", false, false)]
        }
      }, {
        key: "a_22",
        get: function() {
          return delete t.a_22, t.a_22 = [new u("miş", false, false), new u("muş", false, false), new u("m\xfcş", false, false), new u("mış", false, false)]
        }
      }, {
        key: "a_23",
        get: function() {
          return delete t.a_23, t.a_23 = [new u("b", false, 1), new u("c", false, 2), new u("d", false, 3), new u("ğ", false, 4)]
        }
      }, {
        key: "g_vowel",
        get: function() {
          return delete t.g_vowel, t.g_vowel = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 8, 0, 0, 0, 0, 0, 0, 1]
        }
      }, {
        key: "g_U",
        get: function() {
          return delete t.g_U, t.g_U = [1, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 1]
        }
      }, {
        key: "g_vowel1",
        get: function() {
          return delete t.g_vowel1, t.g_vowel1 = [1, 64, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
        }
      }, {
        key: "g_vowel2",
        get: function() {
          return delete t.g_vowel2, t.g_vowel2 = [17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130]
        }
      }, {
        key: "g_vowel3",
        get: function() {
          return delete t.g_vowel3, t.g_vowel3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
        }
      }, {
        key: "g_vowel4",
        get: function() {
          return delete t.g_vowel4, t.g_vowel4 = [17]
        }
      }, {
        key: "g_vowel5",
        get: function() {
          return delete t.g_vowel5, t.g_vowel5 = [65]
        }
      }, {
        key: "g_vowel6",
        get: function() {
          return delete t.g_vowel6, t.g_vowel6 = [65]
        }
      }]), t
    }(c)
}, "function" == typeof define && define.amd ? define("snowballFactory", ["exports"], s) : s(exports)