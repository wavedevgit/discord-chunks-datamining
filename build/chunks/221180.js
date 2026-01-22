/** Chunk was on web.js **/
/** chunk id: 221180, original params: e (module,exports,re quire) **/
"use strict";
module.exports = (e, t) => (t = t || (() => {}), e.then(e => new Promise(e => {
  e(t())
}).then(() => e), e => new Promise(e => {
  e(t())
}).then(() => {
  throw e
})))