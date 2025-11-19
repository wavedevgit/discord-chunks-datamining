/** Chunk was on web.js **/
/** chunk id: 969521, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk818710 = require("./818710.js"),
  Chunk159691 = require("./159691.js");
let s = "https://discord.com/api/download?platform=",
  l = () => {
    let e = (0, Chunk818710.Ij)(),
      t = (0, Chunk473749.useMemo)(() => c(module), [module]),
      n = () => {
        window.location.href = s + exports
      };
    return (0, Chunk54381.jsx)(Chunk159691.zxk, {
      text: "Get the Discord App",
      onClick: require
    })
  },
  c = e => {
    switch (e) {
      case "macos":
        return "osx";
      case "linux":
        return "linux";
      default:
        return "windows"
    }
  }