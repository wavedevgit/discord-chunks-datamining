/** Chunk was on web.js **/
/** chunk id: 970185, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => c,
  q: () => u
});
var Chunk594886 = require("./594886.js"),
  Chunk919118 = require("./919118.js"),
  Chunk309098 = require("./309098.js"),
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