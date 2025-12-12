/** Chunk was on web.js **/
/** chunk id: 558466, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => c
});
var Chunk806262 = require("./806262.js"),
  Chunk645537 = require("./645537.js"),
  Chunk981166 = require("./981166.js"),
  Chunk218769 = require("./218769.js"),
  Chunk473749 = require("./473749.js");

function l(e) {
  return e && e.__esModule ? e.default : e
}

function c(e) {
  let t = (0, a.q)(l(r.Z), "@react-aria/grid"),
    n = (0, o.Kf)(),
    c = ("pointer" === n || "virtual" === n || null == n) && "undefined" != typeof window && "ontouchstart" in window,
    u = (0, s.useMemo)(() => {
      let n, r = e.selectionManager.selectionMode,
        i = e.selectionManager.selectionBehavior;
      return c && (n = t.format("longPressToSelect")), "replace" === i && "none" !== r && e.hasItemActions ? n : true
    }, [e.selectionManager.selectionMode, e.selectionManager.selectionBehavior, e.hasItemActions, t, c]);
  return (0, i.P)(u)
}