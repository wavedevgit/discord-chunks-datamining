/** Chunk was on web.js **/
/** chunk id: 829105, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => i
});
var Chunk695170 = require("./695170.js"),
  i = function() {
    function e(e, t) {
      if (isNaN(e.getTime())) throw RangeError("Invalid date passed to DateWithZone");
      this.date = e, this.tzid = t
    }
    return Object.defineProperty(module.prototype, "isUTC", {
      get: function() {
        return !this.tzid || "UTC" === this.tzid.toUpperCase()
      },
      enumerable: false,
      configurable: true
    }), module.prototype.toString = function() {
      var e = (0, Chunk695170.Od)(this.date.getTime(), this.isUTC);
      return this.isUTC ? ":".concat(module) : ";TZID=".concat(this.tzid, ":").concat(module)
    }, module.prototype.getTime = function() {
      return this.date.getTime()
    }, module.prototype.rezonedDate = function() {
      return this.isUTC ? this.date : (0, Chunk695170.ZY)(this.date, this.tzid)
    }, module
  }()