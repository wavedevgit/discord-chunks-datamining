/** Chunk was on 58652 **/
/** chunk id: 374966, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk735438 = require("./735438.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641131 = require("./641131.js"),
  Chunk821596 = require("./821596.js");
let d = e => {
  let t = (0, r.flatMap)(e.history, e => {
    var t;
    let {
      destination: [n],
      multiSelect: l
    } = e, r = [null, null], i = Object.values(null != (t = null == l ? true : l.state) ? t : {});
    return i.length > 0 && (r[0] = i.join(", ")), "" !== n && (r[1] = n), r
  }).filter(e => null != e);
  return 0 === t.length ? null : (0, l.jsxs)("div", {
    className: o.kL,
    children: [(0, l.jsx)(i.Heading, {
      className: o.MR,
      color: "text-default",
      variant: "heading-sm/semibold",
      children: e.isModeratorReport ? a.intl.string(s.default["6mx/DP"]) : a.intl.string(a.t["+3V9Tp"])
    }), t.map((e, t) => (0, l.jsxs)("div", {
      className: o.P,
      children: [(0, l.jsx)("div", {
        className: o.RL
      }), (0, l.jsx)(i.Text, {
        variant: "text-md/normal",
        className: o.b,
        children: e
      })]
    }, "".concat(e, "+").concat(t)))]
  })
}