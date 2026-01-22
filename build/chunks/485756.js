/** Chunk was on web.js **/
/** chunk id: 485756, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
let r = function() {
  function e(e, t) {
    this.minDate = null, this.maxDate = null, this._result = [], this.total = 0, this.method = e, this.args = t, "between" === e ? (this.maxDate = t.inc ? t.before : new Date(t.before.getTime() - 1), this.minDate = t.inc ? t.after : new Date(t.after.getTime() + 1)) : "before" === e ? this.maxDate = t.inc ? t.dt : new Date(t.dt.getTime() - 1) : "after" === e && (this.minDate = t.inc ? t.dt : new Date(t.dt.getTime() + 1))
  }
  return e.prototype.accept = function(e) {
    ++this.total;
    var t = this.minDate && e < this.minDate,
      n = this.maxDate && e > this.maxDate;
    if ("between" === this.method) {
      if (t) returntrue;
      if (n) returnfalse
    } else if ("before" === this.method) {
      if (n) returnfalse
    } else if ("after" === this.method) return !!t || (this.add(e), false);
    return this.add(e)
  }, e.prototype.add = function(e) {
    return this._result.push(e), true
  }, e.prototype.getValue = function() {
    var e = this._result;
    switch (this.method) {
      case "all":
      case "between":
        return e;
      default:
        return e.length ? e[e.length - 1] : null
    }
  }, e.prototype.clone = function() {
    return new e(this.method, this.args)
  }, e
}()