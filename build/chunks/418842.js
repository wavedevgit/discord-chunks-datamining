/** Chunk was on web.js **/
/** chunk id: 418842, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk873298 = require("./873298.js"),
  Chunk253932 = require("./253932.js");

function s() {
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

function o() {
  let e = a.Xi.useSetting(),
    t = s();
  switch (e) {
    case i.NS.RESPONSIVE:
      return t;
    case i.NS.COZY:
      return "cozy";
    case i.NS.DEFAULT:
      return "default";
    case i.NS.COMPACT:
      return "compact";
    default:
      return "default"
  }
}