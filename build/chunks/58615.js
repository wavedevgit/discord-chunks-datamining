/** Chunk was on 16828 **/
/** chunk id: 58615, original params: t,e,r (module,exports,require) **/
var Chunk338091 = require("./338091.js");

function n(t) {
  this.mode = o.MODE_8BIT_BYTE, this.data = t
}
n.prototype = {
  getLength: function(t) {
    return this.data.length
  },
  write: function(t) {
    for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8)
  }
}, module.exports = n