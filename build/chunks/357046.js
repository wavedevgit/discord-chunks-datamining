/** Chunk was on web.js **/
/** chunk id: 357046, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => s,
  Z: () => a
}), require("./896048.js");
var Chunk417597 = require("./417597.js"),
  Chunk696451 = require("./696451.js");

function a(e, t) {
  return (0, r.bG)([i.Ay], () => s(e, t, [i.Ay]))
}

function s(e, t) {
  var n;
  let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [i.Ay],
    [a] = r,
    s = null != t && null != e ? a.getMember(t, e.id) : null;
  return null != (n = null == s ? true : s.avatarDecoration) ? n : null == e ? true : e.avatarDecoration
}