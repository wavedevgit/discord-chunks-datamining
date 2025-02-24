/** Chunk was on 68880 **/
"use strict";
var n = r(65183).OrderedMap;
t.exports = {
  createFromArray: function(t) {
    return n(t.map(function(t) {
      return [t.getKey(), t]
    }))
  }
}