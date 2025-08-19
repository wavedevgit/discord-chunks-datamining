/** Chunk was on 66181 **/
/** chunk id: 799071, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk173511 = require("./173511.js"),
  Chunk481060 = require("./481060.js");

function l() {
  let [e, t] = Chunk647438.useState("");
  return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    title: "Text components",
    tag: Chunk481060.RB0.H1,
    children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
      placeholder: "Enter custom text...",
      onChange: e => t(e)
    }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
      style: {
        margin: "10px 0"
      }
    }), Chunk173511.O.map(t => "code" === t ? null : (0, i.jsx)(a.Text, {
      variant: t,
      children: "" !== e ? "".concat(e, " (").concat(t, ")") : t
    }, t))]
  })
}