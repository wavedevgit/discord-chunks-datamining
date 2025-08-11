/** Chunk was on web.js **/
/** chunk id: 644977, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => s
});
var Chunk175730 = require("./175730.js"),
  Chunk641862 = require("./641862.js"),
  Chunk839826 = require("./839826.js"),
  a = function(e) {
    return !(0, o.zd)(e) && !(0, o.jD)(e) && "inline" === getComputedStyle(e).display
  },
  s = function() {
    function e(e, t) {
      this.target = e, this.observedBox = t || r.z.CONTENT_BOX, this.lastReportedSize = {
        inlineSize: 0,
        blockSize: 0
      }
    }
    return module.prototype.isActive = function() {
      var e = (0, Chunk641862.Y)(this.target, this.observedBox, true);
      return a(this.target) && (this.lastReportedSize = module), this.lastReportedSize.inlineSize !== module.inlineSize || this.lastReportedSize.blockSize !== module.blockSize
    }, module
  }()