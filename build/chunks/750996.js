/** Chunk was on web.js **/
/** chunk id: 750996, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => s
});
var Chunk227399 = require("./227399.js"),
  Chunk45728 = require("./45728.js"),
  Chunk122136 = require("./122136.js"),
  Chunk473749 = require("./473749.js");

function s(e) {
  e = (0, o.v)(null != e ? e : {}, l);
  let {
    locale: t
  } = (0, r.j)();
  return (0, a.useMemo)(() => new(0, i.C)(t, e), [t, e])
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