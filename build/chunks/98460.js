/** Chunk was on web.js **/
/** chunk id: 98460, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js"), require("./290780.js");
var Chunk647438 = require("./647438.js"),
  Chunk433517 = require("./433517.js");

function a() {
  let e = (0, Chunk647438.useCallback)(e => {
    let t = new Set(o());
    t.delete(e);
    let n = Array.from(t).slice(0, 4);
    n.unshift(e), i.K.set("RecentDismissibleOverrides", n)
  }, []);
  return [o(), module]
}

function o() {
  var e;
  return null != (e = Chunk433517.K.get("RecentDismissibleOverrides")) ? module : []
}