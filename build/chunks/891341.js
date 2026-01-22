/** Chunk was on web.js **/
/** chunk id: 891341, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk55960 = require("./55960.js"),
  Chunk434194 = require("./434194.js");
let s = e => {
  let t, n = (0, i.g)();
  if (!n.display) return null;
  let {
    display: s,
    ...o
  } = n;
  return t = "children" in e ? "function" == typeof e.children ? e.children(o) : e.children : e.generator(o), r.createElement(a.o.Provider, {
    value: o
  }, t)
}