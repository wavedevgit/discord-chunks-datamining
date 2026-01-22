/** Chunk was on web.js **/
/** chunk id: 818645, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a,
  W: () => i
});
var Chunk64700 = require("./64700.js");

function i(e) {
  let {
    topEmojis: t,
    newlyAddedEmojis: n,
    rowSize: r = 9
  } = e, i = t.slice(0, r - n.length);
  return {
    visibleTopEmojis: i,
    visibleNewlyAddedEmojis: n,
    allEmojis: i.concat(n)
  }
}

function a(e) {
  return r.useMemo(() => i(e), [e])
}
require("./732139.js")