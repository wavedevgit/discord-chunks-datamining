/** Chunk was on 60667 **/
/** chunk id: 773349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js"),
  Chunk283900 = require("./283900.jsx"),
  Chunk975977 = require("./975977.js");
let p = Chunk64700.memo(e => {
  let {
    userId: t,
    subText: n,
    className: i
  } = e, l = (0, a.bG)([c.default], () => c.default.getUser(t));
  return true === l ? null : (0, r.jsxs)("div", {
    className: s()(_.k, i),
    children: [(0, r.jsx)(u.H, {
      user: l,
      avatarSize: o._3J.SIZE_40
    }), (0, r.jsx)("div", {
      children: (0, r.jsxs)("div", {
        className: _.$,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "interactive-text-active",
          children: d.Ay.getName(l)
        }), null != n && (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children: n
        })]
      })
    })]
  })
});
p.displayName = "FamilyCenterActivityUserRow";
let m = p