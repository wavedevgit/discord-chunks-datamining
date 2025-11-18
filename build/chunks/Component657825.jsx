/** Chunk was on web.js **/
/** chunk id: 657825, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk198952 = require("./198952.jsx"),
  Chunk133870 = require("./133870.js");
let _ = Chunk473749.memo(e => {
  let {
    userId: t,
    subText: n,
    className: i
  } = e, a = (0, s.e7)([c.default], () => c.default.getUser(t));
  return true === a ? null : (0, r.jsxs)("div", {
    className: o()(f.container, i),
    children: [(0, r.jsx)(d.r, {
      user: a,
      avatarSize: l.EFr.SIZE_40
    }), (0, r.jsx)("div", {
      children: (0, r.jsxs)("div", {
        className: f.descriptors,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-md/semibold",
          color: "interactive-active",
          children: u.ZP.getName(a)
        }), null != n && (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: n
        })]
      })
    })]
  })
});
_.displayName = "FamilyCenterActivityUserRow";
let p = _