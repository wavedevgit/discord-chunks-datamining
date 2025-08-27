/** Chunk was on web.js **/
/** chunk id: 342040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => a
});
var Chunk807153 = require("./807153.js"),
  Chunk383466 = require("./383466.js"),
  a = function() {
    function e(e) {
      if (0 == arguments.length) throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
      if ("function" != typeof e) throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
      r.M.connect(this, e)
    }
    return module.prototype.observe = function(e, t) {
      if (0 == arguments.length) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
      if (!(0, i.kK)(e)) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
      r.M.observe(this, e, t)
    }, module.prototype.unobserve = function(e) {
      if (0 == arguments.length) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
      if (!(0, i.kK)(e)) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
      r.M.unobserve(this, e)
    }, module.prototype.disconnect = function() {
      Chunk807153.M.disconnect(this)
    }, module.toString = function() {
      return "function ResizeObserver () { [polyfill code] }"
    }, module
  }()