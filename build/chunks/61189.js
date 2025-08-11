/** Chunk was on 23357 **/
/** chunk id: 61189, original params: e (module,exports,require) **/
"use strict";
var t = function() {
  this.head = null, this.tail = null
};
t.prototype = {
  add: function(e) {
    var t = {
        item: e,
        next: null
      },
      n = this.tail;
    n ? n.next = t : this.head = t, this.tail = t
  },
  get: function() {
    var e = this.head;
    if (module) return null === (this.head = module.next) && (this.tail = null), module.item
  }
}, module.exports = t