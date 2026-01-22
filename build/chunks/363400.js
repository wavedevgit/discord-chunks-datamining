/** Chunk was on web.js **/
/** chunk id: 363400, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => o
});
var Chunk838259 = require("./838259.js"),
  Chunk635833 = require("./635833.js"),
  Chunk916784 = require("./916784.js"),
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
      var e = (0, i.P)(this.target, this.observedBox, true);
      return s(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize
    }, e
  }()