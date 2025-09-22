/** Chunk was on web.js **/
/** chunk id: 909561, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => u
});
var Chunk578206 = require("./578206.js"),
  Chunk771109 = require("./771109.js"),
  Chunk204574 = require("./204574.js"),
  Chunk647438 = require("./647438.js");
let s = new WeakMap;

function l(e) {
  let t = s.get(e);
  return t || (t = new(0, i.J)(e), s.set(e, t)), t
}

function c(e, t) {
  return t && i.J.getGlobalDictionaryForPackage(t) || l(e)
}

function u(e, t) {
  let {
    locale: n
  } = (0, r.j)(), i = c(e, t);
  return (0, o.useMemo)(() => new(0, a.E)(n, i), [n, i])
}