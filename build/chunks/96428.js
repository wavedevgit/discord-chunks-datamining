/** Chunk was on web.js **/
/** chunk id: 96428, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => r
});
var r = function() {
  function e(e, t, n, r) {
    return this.x = e, this.y = t, this.width = n, this.height = r, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Object.freeze(this)
  }
  return module.prototype.toJSON = function() {
    var e = this;
    return {
      x: module.x,
      y: module.y,
      top: module.top,
      right: module.right,
      bottom: module.bottom,
      left: module.left,
      width: module.width,
      height: module.height
    }
  }, module.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height)
  }, module
}()