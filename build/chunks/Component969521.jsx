/** Chunk was on 77069 **/
/** chunk id: 969521, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  U: () => r
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk818710 = require("./818710.js"),
  Chunk159691 = require("./159691.js");
let r = () => {
    let t = (0, s.Ij)(),
      e = (0, l.useMemo)(() => a(t), [t]);
    return (0, i.jsx)(u.zxk, {
      text: "Get the Discord App",
      onClick: () => {
        window.location.href = "https://discord.com/api/download?platform=" + e
      }
    })
  },
  a = t => "macos" === t ? "osx" : "win"