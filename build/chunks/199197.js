/** Chunk was on web.js **/
/** chunk id: 199197, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cA: () => i,
  cq: () => r
}), require("./49124.js"), require("./388685.js"), require("./539854.js");

function r(e, t, n) {
  let r = [...t];
  return "multiple" === e ? null != t.find(e => e.id === n.id) ? r = t.filter(e => e.id !== n.id) : r.push(n) : r = [n], r
}

function i() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "listbox",
    t = arguments.length > 1 ? arguments[1] : true;
  return "".concat(e, "-option-").concat(t)
}