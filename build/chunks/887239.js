/** Chunk was on web.js **/
/** chunk id: 887239, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk56636 = require("./56636.js");
let i = function(e) {
  function t(t, n, r) {
    var i = e.call(this, t, n) || this;
    return i.iterator = r, i
  }
  return (0, r.C6)(t, e), t.prototype.add = function(e) {
    return !!this.iterator(e, this._result.length) && (this._result.push(e), true)
  }, t
}(require("./485756.js").A)