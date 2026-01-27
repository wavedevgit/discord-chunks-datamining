/** Chunk was on web.js **/
/** chunk id: 891341, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk55960 = require("./55960.js"),
  Chunk434194 = require("./434194.js");
let o = e => {
  let t, n = (0, i.g)();
  if (!n.display) return null;
  let {
    display: o,
    ...s
  } = n;
  return t = "children" in e ? "function" == typeof e.children ? e.children(s) : e.children : e.generator(s), r.createElement(a.o.Provider, {
    value: s
  }, t)
}