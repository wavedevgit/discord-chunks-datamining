/** Chunk was on 97492 **/
/** chunk id: 582223, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk741961 = require("./741961.js"),
  Chunk3137 = require("./3137.js"),
  Chunk559908 = require("./559908.js"),
  Chunk208343 = require("./208343.js"),
  Chunk31408 = require("./31408.js");

function u(e) {
  let t = (0, o.A)(c.uD.CHAT_INPUT),
    n = (0, r.bG)([a.A], () => a.A.isEnabled({
      shakeLocation: c.uD.CHAT_INPUT
    }));
  return (0, r.bG)([i.A, s.Ay, l.default], () => n && i.A.isTyping(e, l.default.getId()) ? s.Ay.getUserComboShakeIntensity(l.default.getId(), e, t) : 0)
}