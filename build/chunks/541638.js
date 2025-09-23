/** Chunk was on web.js **/
/** chunk id: 541638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => a,
  o: () => o
}), require("./388685.js");
var Chunk399606 = require("./399606.js"),
  Chunk271383 = require("./271383.js");

function a(e, t) {
  return (0, r.e7)([i.ZP], () => o(e, t, [i.ZP]))
}

function o(e, t) {
  var n;
  let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [i.ZP],
    [a] = r,
    o = null != t && null != e ? a.getMember(t, e.id) : null;
  return null != (n = null == o ? true : o.avatarDecoration) ? n : null == e ? true : e.avatarDecoration
}