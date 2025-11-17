/** Chunk was on 27978 **/
/** chunk id: 937154, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js");

function i() {
  return "undefined" == typeof document || "visible" === document.visibilityState
}

function s() {
  let [e, t] = (0, Chunk473749.useState)(i());
  return (0, Chunk473749.useEffect)(() => {
    function e() {
      exports(i())
    }
    return window.addEventListener("visibilitychange", module), () => {
      window.removeEventListener("visibilitychange", module)
    }
  }, [exports]), module
}