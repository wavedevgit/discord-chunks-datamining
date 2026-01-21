/** Chunk was on 77069 **/
/** chunk id: 969521, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  U: () => r
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk818710 = require("./818710.js"),
  Chunk159691 = require("./159691.js");
let r = t => {
    let {
      onClick: e
    } = t, n = (0, s.Ij)(), r = (0, l.useMemo)(() => a(n), [n]);
    return (0, i.jsx)(u.zxk, {
      text: "Get the Discord App",
      onClick: () => {
        null == e || e(), window.location.href = "https://discord.com/api/download?platform=" + r
      }
    })
  },
  a = t => "macos" === t ? "osx" : "win"