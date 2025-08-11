/** Chunk was on 23357 **/
/** chunk id: 134546, original params: e (module,exports,require) **/
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