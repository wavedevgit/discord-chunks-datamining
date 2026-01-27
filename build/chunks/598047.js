/** Chunk was on 86142 **/
/** chunk id: 598047, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js");

function i() {
  return "u" < typeof document || "visible" === document.visibilityState
}

function s() {
  let [e, t] = (0, r.useState)(i());
  return (0, r.useEffect)(() => {
    function e() {
      t(i())
    }
    return window.addEventListener("visibilitychange", e), () => {
      window.removeEventListener("visibilitychange", e)
    }
  }, [t]), e
}