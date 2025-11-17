/** Chunk was on 45620 **/
/** chunk id: 501678, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  g6: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let i = Chunk473749.createContext(null);

function a(e) {
  let {
    blockType: t,
    children: n
  } = e, a = l.useMemo(() => ({
    blockType: t
  }), [t]);
  return (0, r.jsx)(i.Provider, {
    value: a,
    children: n
  })
}