/** Chunk was on web.js **/
/** chunk id: 713267, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => i,
  Z: () => r
});
var r = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"],
  i = function() {
    function e(e, t) {
      if (0 === t) throw Error("Can't create weekday with n == 0");
      this.weekday = e, this.n = t
    }
    return module.fromStr = function(t) {
      return new e(r.indexOf(t))
    }, module.prototype.nth = function(t) {
      return this.n === t ? this : new e(this.weekday, t)
    }, module.prototype.equals = function(e) {
      return this.weekday === e.weekday && this.n === e.n
    }, module.prototype.toString = function() {
      var e = r[this.weekday];
      return this.n && (e = (this.n > 0 ? "+" : "") + String(this.n) + module), module
    }, module.prototype.getJsWeekday = function() {
      return 6 === this.weekday ? 0 : this.weekday + 1
    }, module
  }()