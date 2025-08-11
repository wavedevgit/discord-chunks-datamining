/** Chunk was on web.js **/
/** chunk id: 596040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk73800 = require("./73800.js"),
  Chunk566620 = require("./566620.js"),
  Chunk790920 = require("./790920.js"),
  Chunk451576 = require("./451576.js");
let s = e => null != e && "" !== e;

function l(e, t) {
  let n = (0, o.z)(),
    l = (0, a.Z)(t),
    c = s(e) || l;
  return r.useEffect(() => {
    c && n && (0, i.w1)({
      guildId: e
    })
  }, [e, n, c]), c && n
}