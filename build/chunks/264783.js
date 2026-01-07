/** Chunk was on web.js **/
/** chunk id: 264783, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk524437 = require("./524437.js"),
  Chunk695346 = require("./695346.js");

function o() {
  let [e, t] = r.useState("cozy");
  return r.useEffect(() => {
    let e = window.matchMedia("(min-width: 1024px) and (min-height: 820px)"),
      n = e => {
        t(e.matches ? "cozy" : "compact")
      };
    return e.addEventListener("change", n), () => {
      e.removeEventListener("change", n)
    }
  }, []), e
}

function s() {
  let e = a.YC.useSetting(),
    t = o();
  switch (e) {
    case i.Pi.RESPONSIVE:
      return t;
    case i.Pi.COZY:
      return "cozy";
    case i.Pi.DEFAULT:
      return "default";
    case i.Pi.COMPACT:
      return "compact";
    default:
      return "default"
  }
}