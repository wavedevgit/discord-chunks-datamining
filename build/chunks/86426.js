/** Chunk was on 68880 **/
"use strict";
t.exports = function(t) {
  return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window
}