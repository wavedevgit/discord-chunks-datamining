/** Chunk was on 38939 **/
/** chunk id: 750253, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk438495 = require("./438495.js");
module.exports = function t(e, r) {
  if (!e || !r) returnfalse;
  if (e === r) returntrue;
  if (n(e)) returnfalse;
  if (n(r)) return t(e, r.parentNode);
  if ("contains" in e) return e.contains(r);
  else if (e.compareDocumentPosition) return !!(16 & e.compareDocumentPosition(r));
  else returnfalse
}