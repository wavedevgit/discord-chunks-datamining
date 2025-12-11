/** Chunk was on 86872 **/
/** chunk id: 664926, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk929903 = require("./929903.js");

function c(e) {
  let {
    friendMemberIds: l
  } = e, n = (0, i.Wu)([s.default], () => l.slice(0, 3).map(e => s.default.getUser(e)).filter(e => null != e));
  if (0 === n.length) return null;
  let c = n[0],
    o = {
      count: l.length - 1,
      username: c.username,
      username2: 2 === l.length && n.length >= 2 ? n[1].username : ""
    },
    m = u.intl.format(u.t["5NHEPu"], o);
  return (0, t.jsxs)("div", {
    className: d.container,
    children: [(0, t.jsx)("div", {
      className: d.avatarStack,
      children: n.map((e, l) => (0, t.jsx)("div", {
        className: d.avatarWrapper,
        style: {
          zIndex: n.length - l
        },
        children: (0, t.jsx)(r.Z, {
          user: e,
          size: a.EFr.SIZE_16
        })
      }, e.id))
    }), (0, t.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: m
    })]
  })
}