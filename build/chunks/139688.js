/** Chunk was on web.js **/
/** chunk id: 139688, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  xE: () => s
}), require("./35282.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk339085 = require("./339085.js");
let o = /^<(a?):(\w+):(\d+)>/;

function s(e) {
  let t = r.useMemo(() => {
    var t;
    return null == (t = o.exec(e)) ? true : t[3]
  }, [e]);
  return (0, i.e7)([a.ZP], () => null == t ? null : a.ZP.getCustomEmojiById(t))
}