/** Chunk was on web.js **/
/** chunk id: 676286, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e) {
  if (true === (e = e || ("u" > typeof document ? document : true))) return null;
  try {
    return e.activeElement || e.body
  } catch (t) {
    return e.body
  }
}