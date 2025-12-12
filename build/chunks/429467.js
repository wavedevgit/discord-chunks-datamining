/** Chunk was on web.js **/
/** chunk id: 429467, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk875425 = require("./875425.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let t = null != e && e.size > 0 ? r.pS.filter(t => !e.has(t.value)) : r.pS;
  if (0 === t.length) return {
    value: r.HO.ADD_STATUS,
    label: () => i.intl.string(i.t.Vq4UmS)
  };
  let n = Math.floor(Math.random() * t.length);
  return t[n]
}