/** Chunk was on web.js **/
/** chunk id: 750253, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk438495 = require("./438495.js");

function i(e, t) {
  if (!e || !t) returnfalse;
  if (e === t) returntrue;
  if (r(e)) returnfalse;
  if (r(t)) return i(e, t.parentNode);
  if ("contains" in e) return e.contains(t);
  else if (e.compareDocumentPosition) return !!(16 & e.compareDocumentPosition(t));
  else returnfalse
}
module.exports = i