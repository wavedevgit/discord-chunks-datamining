/** Chunk was on web.js **/
/** chunk id: 984014, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk872810 = require("./872810.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js");

function s(e, t) {
  let n = (0, r.e7)([a.default], () => a.default.getId()),
    s = (0, r.e7)([o.Z], () => {
      let t = o.Z.getCurrentUserActiveStream();
      return null != t && t.channelId === e
    }, [e]);
  return [(null == t || t === n) && s, (0, r.e7)([o.Z], () => o.Z.isSelfStreamHidden(e), [e]), t => {
    (0, i.pR)(e, t)
  }]
}