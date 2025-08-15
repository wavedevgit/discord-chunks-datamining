/** Chunk was on 91584 **/
/** chunk id: 808570, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk656566 = require("./656566.js");
module.exports = function t(e, r) {
  if (!e || !r) returnfalse;
  if (e === r) returntrue;
  if (n(e)) returnfalse;
  if (n(r)) return t(e, r.parentNode);
  if ("contains" in e) return e.contains(r);
  else if (e.compareDocumentPosition) return !!(16 & e.compareDocumentPosition(r));
  else returnfalse
}