/** Chunk was on web.js **/
/** chunk id: 304852, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => a,
  Z: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk149203 = require("./149203.js");

function a(e) {
  let {
    topEmojis: t,
    newlyAddedEmojis: n,
    rowSize: r = i.N6
  } = e, a = t.slice(0, r - n.length);
  return {
    visibleTopEmojis: a,
    visibleNewlyAddedEmojis: n,
    allEmojis: a.concat(n)
  }
}

function o(e) {
  return r.useMemo(() => a(e), [e])
}