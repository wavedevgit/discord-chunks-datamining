/** Chunk was on web.js **/
/** chunk id: 130501, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => s
});
var Chunk430901 = require("./430901.js"),
  Chunk229579 = require("./229579.js"),
  Chunk222285 = require("./222285.js"),
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