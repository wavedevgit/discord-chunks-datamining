/** Chunk was on web.js **/
/** chunk id: 541638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => o,
  o: () => a
}), require("./388685.js");
var Chunk399606 = require("./399606.js"),
  Chunk271383 = require("./271383.js");

function o(e, t) {
  return (0, r.e7)([i.ZP], () => a(e, t, [i.ZP]))
}

function a(e, t) {
  var n;
  let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [i.ZP],
    [o] = r,
    a = null != t && null != e ? o.getMember(t, e.id) : null;
  return null != (n = null == a ? true : a.avatarDecoration) ? n : null == e ? true : e.avatarDecoration
}