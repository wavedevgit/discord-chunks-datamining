/** Chunk was on 45620 **/
/** chunk id: 501678, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  g6: () => i
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let o = Chunk473749.createContext(null);

function i(e) {
  let {
    blockType: t,
    children: n
  } = e, i = l.useMemo(() => ({
    blockType: t
  }), [t]);
  return (0, r.jsx)(o.Provider, {
    value: i,
    children: n
  })
}