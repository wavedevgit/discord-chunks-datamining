/** Chunk was on 44947 **/
/** chunk id: 221918, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  H: () => u
});
var Chunk73800 = require("./73800.js"),
  Chunk373425 = require("./373425.js"),
  Chunk74463 = require("./74463.js"),
  Chunk541568 = require("./541568.js");

function u(e) {
  var t = (0, o.N)(),
    n = (0, r.useMemo)(function() {
      return new i.Y(t.getBackend())
    }, [t]);
  return (0, a.L)(function() {
    return n.dropTargetOptions = e || null, n.reconnect(),
      function() {
        return n.disconnectDropTarget()
      }
  }, [e]), n
}