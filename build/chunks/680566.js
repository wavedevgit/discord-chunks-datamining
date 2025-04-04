/** Chunk was on 86029 **/
"use strict";
t.exports = function(t) {
  return !!t && !!t.ownerDocument && (t.ownerDocument.defaultView ? t instanceof t.ownerDocument.defaultView.HTMLElement : t instanceof HTMLElement)
}