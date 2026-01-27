/** Chunk was on 38939 **/
/** chunk id: 676286, original params: t (module,exports,require) **/
"use strict";
module.exports = function(t) {
  if (true === (t = t || ("u" > typeof document ? document : true))) return null;
  try {
    return t.activeElement || t.body
  } catch (e) {
    return t.body
  }
}