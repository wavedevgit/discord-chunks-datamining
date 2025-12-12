/** Chunk was on web.js **/
/** chunk id: 921630, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk727916 = require("./727916.js"),
  Chunk627459 = require("./627459.js");
let a = 1,
  o = 2,
  s = 3;
class l extends Chunk727916.Z {
  innerPattern() {
    return RegExp("(\\d{2,4}|[" + Object.keys(Chunk627459.Wu).join("") + "]{4}|[" + Object.keys(Chunk627459.Wu).join("") + "]{2})?(?:\\s*)(?:年)?(?:[\\s|,|，]*)(\\d{1,2}|[" + Object.keys(Chunk627459.Wu).join("") + "]{1,3})(?:\\s*)(?:月)(?:\\s*)(\\d{1,2}|[" + Object.keys(Chunk627459.Wu).join("") + "]{1,3})?(?:\\s*)(?:日|号)?")
  }
  innerExtract(e, t) {
    let n = e.createParsingResult(t.index, t[0]),
      r = parseInt(t[o]);
    if (isNaN(r) && (r = (0, i.zU)(t[o])), n.start.assign("month", r), t[s]) {
      let e = parseInt(t[s]);
      isNaN(e) && (e = (0, i.zU)(t[s])), n.start.assign("day", e)
    } else n.start.imply("day", e.refDate.getDate());
    if (t[a]) {
      let e = parseInt(t[a]);
      isNaN(e) && (e = (0, i.NL)(t[a])), n.start.assign("year", e)
    } else n.start.imply("year", e.refDate.getFullYear());
    return n
  }
}