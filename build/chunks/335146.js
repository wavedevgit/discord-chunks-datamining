/** Chunk was on web.js **/
/** chunk id: 335146, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => o
});
var Chunk181981 = require("./181981.js"),
  Chunk250015 = require("./250015.js"),
  Chunk685518 = require("./685518.js"),
  s = function(e) {
    return !(0, a.XJ)(e) && !(0, a.td)(e) && "inline" === getComputedStyle(e).display
  },
  o = function() {
    function e(e, t) {
      this.target = e, this.observedBox = t || r.U.CONTENT_BOX, this.lastReportedSize = {
        inlineSize: 0,
        blockSize: 0
      }
    }
    return e.prototype.isActive = function() {
      var e = (0, i.Px)(this.target, this.observedBox);
      return s(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize
    }, e
  }()