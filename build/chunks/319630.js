/** Chunk was on web.js **/
"use strict";
e.exports = function(e) {
  return e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window
}