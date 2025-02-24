/** Chunk was on 68880 **/
"use strict";
t.exports = {
  stringify: function(t) {
    return "_" + String(t)
  },
  unstringify: function(t) {
    return t.slice(1)
  }
}