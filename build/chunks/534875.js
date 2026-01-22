/** Chunk was on 47841 **/
/** chunk id: 534875, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554375 = require("./554375.js"),
  Chunk475743 = require("./475743.js"),
  Chunk885617 = require("./885617.js"),
  Chunk492494 = require("./492494.js");
let o = [];

function d(e) {
  let {
    revision: t,
    emojis: n
  } = (0, i.cf)([a.A], () => ({
    revision: a.A.getEmojiRevision(e),
    emojis: a.A.getEmojis(e)
  })), d = (0, s.A)(t);
  return r.useEffect(() => {
    (0, l.dZ)(e)
  }, [e]), r.useEffect(() => {
    null != d && d < t && (0, l.dZ)(e)
  }, [t, d, e]), r.useMemo(() => null == n ? o : n.filter(t => (0, c.Eg)(t, e)), [n, e])
}