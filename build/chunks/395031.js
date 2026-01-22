/** Chunk was on web.js **/
/** chunk id: 395031, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ys: () => o
}), require("./747238.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk508675 = require("./508675.js");
let s = /^<(a?):(\w+):(\d+)>/;

function o(e) {
  let t = r.useMemo(() => {
    var t;
    return null == (t = s.exec(e)) ? true : t[3]
  }, [e]);
  return (0, i.bG)([a.Ay], () => null == t ? null : a.Ay.getCustomEmojiById(t))
}