/** Chunk was on web.js **/
/** chunk id: 371268, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => c
});
var Chunk207430 = require("./207430.js"),
  Chunk24645 = require("./24645.js"),
  Chunk938264 = require("./938264.js"),
  Chunk792160 = require("./792160.js"),
  Chunk647438 = require("./647438.js");

function l(e) {
  return e && e.__esModule ? e.default : e
}

function c(e) {
  let t = (0, o.q)(l(r.Z), "@react-aria/grid"),
    n = (0, a.Kf)(),
    c = ("pointer" === n || "virtual" === n || null == n) && "undefined" != typeof window && "ontouchstart" in window,
    u = (0, s.useMemo)(() => {
      let n, r = e.selectionManager.selectionMode,
        i = e.selectionManager.selectionBehavior;
      return c && (n = t.format("longPressToSelect")), "replace" === i && "none" !== r && e.hasItemActions ? n : true
    }, [e.selectionManager.selectionMode, e.selectionManager.selectionBehavior, e.hasItemActions, t, c]);
  return (0, i.P)(u)
}