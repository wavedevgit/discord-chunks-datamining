/** Chunk was on web.js **/
/** chunk id: 849352, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => o
});
var Chunk853590 = require("./853590.js"),
  Chunk515702 = require("./515702.js"),
  Chunk7521 = require("./7521.js"),
  Chunk64700 = require("./64700.js");

function o(e) {
  e = (0, a.k)(null != e ? e : {}, l);
  let {
    locale: t
  } = (0, r.Y)();
  return (0, s.useMemo)(() => new(0, i.p)(t, e), [t, e])
}

function l(e, t) {
  if (e === t) returntrue;
  let n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) returnfalse;
  for (let r of n)
    if (t[r] !== e[r]) returnfalse;
  returntrue
}