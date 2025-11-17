/** Chunk was on web.js **/
/** chunk id: 302800, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  UY: () => _,
  k2: () => u,
  v: () => p
}), require("./473749.js");
var Chunk215023 = require("./215023.js"),
  Chunk497414 = require("./497414.js"),
  Chunk252802 = require("./252802.js"),
  Chunk452823 = require("./452823.js"),
  Chunk744709 = require("./744709.js"),
  Chunk39934 = require("./39934.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var u = function(e) {
  return e[e.NONE = 0] = "NONE", e[e.TOOLTIP = 1] = "TOOLTIP", e[e.COACHTIP = 2] = "COACHTIP", e[e.COACHTIP_HEADLINE_ONLY = 3] = "COACHTIP_HEADLINE_ONLY", e[e.BADGE = 4] = "BADGE", e[e.COACHMARK = 5] = "COACHMARK", e
}({});
class d {
  constructor({
    src: e,
    style: t,
    animated: n
  }) {
    var r = this;
    c(this, "src", true), c(this, "style", true), c(this, "animated", true), c(this, "getSrc", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      return "string" == typeof r.src ? r.src : e ? r.src.dark : r.src.light
    }), this.src = e, this.style = t, this.animated = n
  }
}
let f = {
    ROBERT: new d({
      src: Chunk452823.Z,
      style: {
        position: "absolute",
        width: "400px",
        right: "-200px",
        zIndex: 10
      }
    }),
    SHY: new d({
      src: Chunk744709.Z,
      style: {
        position: "absolute",
        width: "600px",
        left: "calc(50vw - 300px)",
        top: "calc(50vh - 300px)"
      }
    }),
    STORM: new d({
      src: Chunk39934.Z,
      style: {
        position: "absolute",
        width: "850px",
        left: "calc(50vw - 425px)",
        top: "calc(50vh - 425px)"
      }
    }),
    ORB_PURCHASE: new d({
      src: {
        dark: Chunk497414.Z,
        light: Chunk252802.Z
      },
      animated: true,
      style: {
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        objectFit: "cover"
      }
    })
  },
  _ = e => {
    let {
      purchaseType: t,
      skuId: n
    } = e;
    if (t === r.o8.ORB) return f.ORB_PURCHASE;
    switch (n) {
      case "1267521289330102344":
      case "1267521289355268154":
      case "1266160780928352268":
      case "1266160780978556969":
      case "1266161342801383434":
      case "1220513995308400680":
      case "1220513984273186816":
      case "1220513989729976411":
      case "1220514048068812901":
      case "1266493591207940133":
      case "1266493591275044903":
      case "1220432740638523543":
        return f.STORM;
      case "1220513977683935373":
      case "1220432647453409384":
      case "1220432697718083614":
        return f.SHY;
      default:
        return null
    }
  },
  p = e => "1262491137386614805" === e ? f.ROBERT : null