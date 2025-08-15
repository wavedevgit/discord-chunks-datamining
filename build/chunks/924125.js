/** Chunk was on 8381 **/
/** chunk id: 924125, original params: t (module,exports,require) **/
"use strict";
module.exports = function(t) {
  if (true === (t = t || ("undefined" != typeof document ? document : true))) return null;
  try {
    return t.activeElement || t.body
  } catch (e) {
    return t.body
  }
}