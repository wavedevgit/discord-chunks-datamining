/** Chunk was on 35511 **/
/** chunk id: 74414, original params: e (module,exports,require) **/
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
    if (e) return null === (this.head = e.next) && (this.tail = null), e.item
  }
}, module.exports = t