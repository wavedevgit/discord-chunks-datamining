/** Chunk was on web.js **/
/** chunk id: 406985, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => c
});
var Chunk199407 = require("./199407.js"),
  Chunk807177 = require("./807177.js"),
  Chunk885714 = require("./885714.js"),
  Chunk47276 = require("./47276.js"),
  Chunk64700 = require("./64700.js");

function l(e) {
  return e && e.__esModule ? e.default : e
}

function c(e) {
  let t = (0, o.o)(l(r.A), "@react-aria/grid"),
    n = (0, a.lb)(),
    c = ("pointer" === n || "virtual" === n || null == n) && "u" > typeof window && "ontouchstart" in window,
    u = (0, s.useMemo)(() => {
      let n, r = e.selectionManager.selectionMode,
        i = e.selectionManager.selectionBehavior;
      return c && (n = t.format("longPressToSelect")), "replace" === i && "none" !== r && e.hasItemActions ? n : true
    }, [e.selectionManager.selectionMode, e.selectionManager.selectionBehavior, e.hasItemActions, t, c]);
  return (0, i.I)(u)
}