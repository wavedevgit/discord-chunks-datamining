/** Chunk was on 35511 **/
/** chunk id: 564904, original params: e (module,exports,require) **/
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