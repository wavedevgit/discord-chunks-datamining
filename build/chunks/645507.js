/** Chunk was on web.js **/
/** chunk id: 645507, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk403918 = require("./403918.js"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  let t = null != e && e.size > 0 ? r.P2.filter(t => !e.has(t.value)) : r.P2;
  if (0 === t.length) return {
    value: r.W_.ADD_STATUS,
    label: () => i.intl.string(i.t.Vq4UmS)
  };
  let n = Math.floor(Math.random() * t.length);
  return t[n]
}