/** Chunk was on 75708 **/
/** chunk id: 799071, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk173511 = require("./173511.js"),
  Chunk481060 = require("./481060.js");

function l() {
  let [e, t] = Chunk73800.useState("");
  return (0, Chunk255367.jsxs)(Chunk481060.hjN, {
    title: "Text components",
    tag: Chunk481060.RB0.H1,
    children: [(0, Chunk255367.jsx)(Chunk481060.oil, {
      placeholder: "Enter custom text...",
      onChange: e => t(e)
    }), (0, Chunk255367.jsx)(Chunk481060.$i$, {
      style: {
        margin: "10px 0"
      }
    }), Chunk173511.O.map(t => "code" === t ? null : (0, i.jsx)(a.Text, {
      variant: t,
      children: "" !== e ? "".concat(e, " (").concat(t, ")") : t
    }, t))]
  })
}