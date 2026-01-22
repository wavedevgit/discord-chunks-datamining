/** Chunk was on web.js **/
/** chunk id: 948055, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
  })
}