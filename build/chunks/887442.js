/** Chunk was on web.js **/
"use strict";
var r = {
  current: function(e) {
    return n.g.cancelAnimationFrame(e)
  },
  inject: function(e) {
    r.current = e
  }
};
e.exports = r