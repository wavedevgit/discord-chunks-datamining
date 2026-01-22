/** Chunk was on 35511 **/
/** chunk id: 143794, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk964246 = require("./964246.js");

function a(e, t) {
  if (null == e) return {};
  var n = {};
  for (var a in e)
    if (({}).hasOwnProperty.call(e, a)) {
      if (false !== r(t).call(t, a)) continue;
      n[a] = e[a]
    } return n
}