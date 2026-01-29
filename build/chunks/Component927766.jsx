/** Chunk was on 4670 **/
/** chunk id: 927766, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  X: () => a
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk574381 = require("./574381.js"),
  Chunk732955 = require("./732955.js");
let a = e => {
    let {
      onClick: t
    } = e, i = (0, s.R0)(), a = (0, l.useMemo)(() => u(i), [i]);
    return (0, n.jsx)(r.$nd, {
      text: "Get the Discord App",
      onClick: () => {
        null == t || t(), window.location.href = "https://discord.com/api/download?platform=" + a
      }
    })
  },
  u = e => "macos" === e ? "osx" : "win"