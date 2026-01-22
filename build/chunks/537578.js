/** Chunk was on web.js **/
/** chunk id: 537578, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e) {
  return !!e && !!e.ownerDocument && (e.ownerDocument.defaultView ? e instanceof e.ownerDocument.defaultView.HTMLElement : e instanceof HTMLElement)
}