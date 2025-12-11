/** Chunk was on 45620 **/
/** chunk id: 501678, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  g6: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let a = Chunk473749.createContext(null);

function o(e) {
  let {
    blockType: t,
    children: n
  } = e, o = l.useMemo(() => ({
    blockType: t
  }), [t]);
  return (0, r.jsx)(a.Provider, {
    value: o,
    children: n
  })
}