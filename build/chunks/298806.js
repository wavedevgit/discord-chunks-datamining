/** Chunk was on web.js **/
/** chunk id: 298806, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => s
});
var Chunk594886 = require("./594886.js"),
  Chunk45728 = require("./45728.js"),
  Chunk872 = require("./872.js"),
  Chunk647438 = require("./647438.js");

function s(e) {
  e = (0, a.v)(null != e ? e : {}, l);
  let {
    locale: t
  } = (0, r.j)();
  return (0, o.useMemo)(() => new(0, i.C)(t, e), [t, e])
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