/** Chunk was on web.js **/
/** chunk id: 773349, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
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
  } = e, a = (0, o.bG)([c.default], () => c.default.getUser(t));
  return true === a ? null : (0, r.jsxs)("div", {
    className: s()(f.k, i),
    children: [(0, r.jsx)(d.H, {
      user: a,
      avatarSize: l._3J.SIZE_40
    }), (0, r.jsx)("div", {
      children: (0, r.jsxs)("div", {
        className: f.$,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-md/semibold",
          color: "interactive-text-active",
          children: u.Ay.getName(a)
        }), null != n && (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children: n
        })]
      })
    })]
  })
});
p.displayName = "FamilyCenterActivityUserRow";
let _ = p