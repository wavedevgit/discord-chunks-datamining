/** Chunk was on 7891 **/
/** chunk id: 984014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk872810 = require("./872810.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js");

function o(e, t) {
  let n = (0, i.e7)([a.default], () => a.default.getId()),
    o = (0, i.e7)([l.Z], () => {
      let t = l.Z.getCurrentUserActiveStream();
      return null != t && t.channelId === e
    }, [e]);
  return [(null == t || t === n) && o, (0, i.e7)([l.Z], () => l.Z.isSelfStreamHidden(e), [e]), t => {
    (0, r.pR)(e, t)
  }]
}