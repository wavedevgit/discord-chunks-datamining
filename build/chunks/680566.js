/** Chunk was on 68880 **/
"use strict";
t.exports = function(t) {
  return !!t && !!t.ownerDocument && (t.ownerDocument.defaultView ? t instanceof t.ownerDocument.defaultView.HTMLElement : t instanceof HTMLElement)
}