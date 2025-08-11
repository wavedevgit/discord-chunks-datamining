/** Chunk was on web.js **/
/** chunk id: 635854, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk139232 = require("./139232.js");
let i = function(e) {
  function t(t, n, r) {
    var i = e.call(this, t, n) || this;
    return i.iterator = r, i
  }
  return (0, r.ZT)(t, e), t.prototype.add = function(e) {
    return !!this.iterator(e, this._result.length) && (this._result.push(e), true)
  }, t
}(require("./135891.js").Z)