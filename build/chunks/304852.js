/** Chunk was on web.js **/
/** chunk id: 304852, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => o,
  Z: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk149203 = require("./149203.js");

function o(e) {
  let {
    topEmojis: t,
    newlyAddedEmojis: n,
    rowSize: r = i.N6
  } = e, o = t.slice(0, r - n.length);
  return {
    visibleTopEmojis: o,
    visibleNewlyAddedEmojis: n,
    allEmojis: o.concat(n)
  }
}

function a(e) {
  return r.useMemo(() => o(e), [e])
}