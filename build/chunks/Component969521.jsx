/** Chunk was on 9452 **/
/** chunk id: 969521, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  U: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk818710 = require("./818710.js"),
  Chunk159691 = require("./159691.js");
let s = () => {
    let t = (0, Chunk818710.Ij)(),
      e = (0, Chunk473749.useMemo)(() => a(module), [module]);
    return (0, Chunk54381.jsx)(Chunk159691.zxk, {
      text: "Get the Discord App",
      onClick: () => {
        window.location.href = "https://discord.com/api/download?platform=" + exports
      }
    })
  },
  a = t => "macos" === t ? "osx" : "win"