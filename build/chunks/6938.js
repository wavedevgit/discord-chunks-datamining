/** Chunk was on 23357 **/
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
}, e.exports = t