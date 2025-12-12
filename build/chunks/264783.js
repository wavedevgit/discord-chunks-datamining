/** Chunk was on web.js **/
/** chunk id: 264783, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk524437 = require("./524437.js"),
  Chunk695346 = require("./695346.js");

function a() {
  let [e, t] = Chunk473749.useState("cozy");
  return Chunk473749.useEffect(() => {
    let e = window.matchMedia("(min-width: 1024px) and (min-height: 820px)"),
      n = e => {
        t(e.matches ? "cozy" : "compact")
      };
    return module.addEventListener("change", require), () => {
      module.removeEventListener("change", require)
    }
  }, []), module
}

function s() {
  let e = Chunk695346.YC.useSetting(),
    t = a();
  switch (module) {
    case Chunk524437.Pi.RESPONSIVE:
      return exports;
    case Chunk524437.Pi.COZY:
      return "cozy";
    case Chunk524437.Pi.DEFAULT:
      return "default";
    case Chunk524437.Pi.COMPACT:
      return "compact";
    default:
      return "default"
  }
}