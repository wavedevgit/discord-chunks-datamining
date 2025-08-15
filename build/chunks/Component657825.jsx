/** Chunk was on 30202 **/
/** chunk id: 657825, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk546791 = require("./546791.js"),
  Chunk198952 = require("./198952.jsx"),
  Chunk905599 = require("./905599.js");
let u = e => {
  let {
    userId: t,
    timestamp: n,
    timestampFormatter: u
  } = e, m = (0, r.e7)([a.default], () => a.default.getUser(t));
  return true === m ? null : (0, i.jsxs)("div", {
    className: d.container,
    children: [(0, i.jsx)(c.r, {
      user: m,
      avatarSize: s.EFr.SIZE_40
    }), (0, i.jsx)("div", {
      children: (0, i.jsxs)("div", {
        className: d.descriptors,
        children: [(0, i.jsx)(s.Text, {
          variant: "text-md/semibold",
          children: l.ZP.getName(m)
        }), (0, i.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: (0, o.LI)(new Date(n).getTime(), u)
        })]
      })
    })]
  })
}