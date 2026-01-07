/** Chunk was on web.js **/
/** chunk id: 644977, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => s
});
var Chunk175730 = require("./175730.js"),
  Chunk641862 = require("./641862.js"),
  Chunk839826 = require("./839826.js"),
  o = function(e) {
    return !(0, a.zd)(e) && !(0, a.jD)(e) && "inline" === getComputedStyle(e).display
  },
  s = function() {
    function e(e, t) {
      this.target = e, this.observedBox = t || r.z.CONTENT_BOX, this.lastReportedSize = {
        inlineSize: 0,
        blockSize: 0
      }
    }
    return e.prototype.isActive = function() {
      var e = (0, i.Y)(this.target, this.observedBox, true);
      return o(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize
    }, e
  }()