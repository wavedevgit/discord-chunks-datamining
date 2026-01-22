/** Chunk was on web.js **/
/** chunk id: 47276, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => c,
  o: () => u
});
var Chunk853590 = require("./853590.js"),
  Chunk731692 = require("./731692.js"),
  Chunk944490 = require("./944490.js"),
  Chunk64700 = require("./64700.js");
let o = new WeakMap;

function l(e) {
  let t = o.get(e);
  return t || (t = new(0, i.B)(e), o.set(e, t)), t
}

function c(e, t) {
  return t && i.B.getGlobalDictionaryForPackage(t) || l(e)
}

function u(e, t) {
  let {
    locale: n
  } = (0, r.Y)(), i = c(e, t);
  return (0, s.useMemo)(() => new(0, a.J)(n, i), [n, i])
}