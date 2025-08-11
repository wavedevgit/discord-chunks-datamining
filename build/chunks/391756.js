/** Chunk was on web.js **/
/** chunk id: 391756, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => s
});
var Chunk644387 = require("./644387.js"),
  Chunk219845 = require("./219845.js"),
  Chunk383466 = require("./383466.js"),
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
      var e = (0, Chunk219845.Y9)(this.target, this.observedBox);
      return a(this.target) && (this.lastReportedSize = module), this.lastReportedSize.inlineSize !== module.inlineSize || this.lastReportedSize.blockSize !== module.blockSize
    }, module
  }()