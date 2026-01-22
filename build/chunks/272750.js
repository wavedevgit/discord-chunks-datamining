/** Chunk was on web.js **/
/** chunk id: 272750, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => o
});
var Chunk254033 = require("./254033.js"),
  Chunk943019 = require("./943019.js"),
  Chunk63514 = require("./63514.js"),
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