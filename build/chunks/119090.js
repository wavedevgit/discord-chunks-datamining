/** Chunk was on web.js **/
/** chunk id: 119090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => i
});
var Chunk47361 = require("./47361.js"),
  i = function() {
    function e(e, t, n, i) {
      return this.x = e, this.y = t, this.width = n, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, (0, r.C)(this)
    }
    return e.prototype.toJSON = function() {
      var e = this;
      return {
        x: e.x,
        y: e.y,
        top: e.top,
        right: e.right,
        bottom: e.bottom,
        left: e.left,
        width: e.width,
        height: e.height
      }
    }, e.fromRect = function(t) {
      return new e(t.x, t.y, t.width, t.height)
    }, e
  }()