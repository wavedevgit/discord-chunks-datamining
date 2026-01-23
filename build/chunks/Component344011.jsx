/** Chunk was on 59275 **/
/** chunk id: 344011, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  rW: () => a
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
let s = Chunk64700.createContext(null);

function a(e) {
  let {
    blockType: t,
    children: n
  } = e, a = l.useMemo(() => ({
    blockType: t
  }), [t]);
  return (0, r.jsx)(s.Provider, {
    value: a,
    children: n
  })
}