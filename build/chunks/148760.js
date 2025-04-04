/** Chunk was on 86029 **/
"use strict";
t.exports = {
  stringify: function(t) {
    return "_" + String(t)
  },
  unstringify: function(t) {
    return t.slice(1)
  }
}