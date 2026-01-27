/** Chunk was on 94857 **/
/** chunk id: 395031, original params: e,s,t (module,exports,require) **/
require.d(exports, {
  Ys: () => r
}), require("./747238.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk508675 = require("./508675.js");
let i = /^<(a?):(\w+):(\d+)>/;

function r(e) {
  let s = n.useMemo(() => {
    var s;
    return null == (s = i.exec(e)) ? true : s[3]
  }, [e]);
  return (0, l.bG)([a.Ay], () => null == s ? null : a.Ay.getCustomEmojiById(s))
}