/** Chunk was on web.js **/
/** chunk id: 924125, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e) {
  if (true === (e = e || ("undefined" != typeof document ? document : true))) return null;
  try {
    return e.activeElement || e.body
  } catch (t) {
    return e.body
  }
}