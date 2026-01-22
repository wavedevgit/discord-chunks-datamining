/** Chunk was on web.js **/
/** chunk id: 742388, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e) {
  try {
    return {
      error: false,
      value: e()
    }
  } catch (e) {
    return {
      error: true,
      value: e
    }
  }
}