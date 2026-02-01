/** Chunk was on 30485 **/
/** chunk id: 927766, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  X: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk574381 = require("./574381.js"),
  Chunk732955 = require("./732955.js");
let u = t => {
    let {
      onClick: e
    } = t, i = (0, s.R0)(), u = (0, l.useMemo)(() => a(i), [i]);
    return (0, n.jsx)(r.$nd, {
      text: "Get the Discord App",
      onClick: () => {
        null == e || e(), window.location.href = "https://discord.com/api/download?platform=" + u
      }
    })
  },
  a = t => "macos" === t ? "osx" : "win"