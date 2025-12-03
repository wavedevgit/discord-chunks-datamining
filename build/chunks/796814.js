/** Chunk was on 384 **/
/** chunk id: 796814, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk80932 = require("./80932.js"),
  Chunk110924 = require("./110924.js"),
  Chunk471613 = require("./471613.js"),
  Chunk889564 = require("./889564.js");
let c = [];

function u(e) {
  let {
    revision: t,
    emojis: n
  } = (0, i.cj)([s.Z], () => ({
    revision: s.Z.getEmojiRevision(e),
    emojis: s.Z.getEmojis(e)
  })), u = (0, a.Z)(t);
  return r.useEffect(() => {
    (0, l.OQ)(e)
  }, [e]), r.useEffect(() => {
    null != u && u < t && (0, l.OQ)(e)
  }, [t, u, e]), r.useMemo(() => null == n ? c : n.filter(t => (0, o.Kt)(t, e)), [n, e])
}