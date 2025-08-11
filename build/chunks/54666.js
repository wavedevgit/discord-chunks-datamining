/** Chunk was on web.js **/
/** chunk id: 54666, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => a
});
var Chunk73800 = require("./73800.js"),
  Chunk626442 = require("./626442.js"),
  Chunk80349 = require("./80349.js");
let a = e => {
  let t, n = (0, i.u)();
  if (!n.display) return null;
  let {
    display: a,
    ...s
  } = n;
  return t = "children" in e ? "function" == typeof e.children ? e.children(s) : e.children : e.generator(s), r.createElement(o._.Provider, {
    value: s
  }, t)
}