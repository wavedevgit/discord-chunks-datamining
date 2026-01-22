/** Chunk was on web.js **/
/** chunk id: 801461, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZN: () => i,
  qH: () => r
}), require("./457529.js"), require("./896048.js"), require("./321073.js");

function r(e, t, n) {
  let r = [...t];
  return "multiple" === e ? null != t.find(e => e.id === n.id) ? r = t.filter(e => e.id !== n.id) : r.push(n) : r = [n], r
}

function i() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "listbox",
    t = arguments.length > 1 ? arguments[1] : true;
  return "".concat(e, "-option-").concat(t)
}