/** Chunk was on 62934 **/
/** chunk id: 52021, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk970683 = require("./970683.js"),
  Chunk594174 = require("./594174.js"),
  Chunk49012 = require("./49012.js"),
  Chunk775146 = require("./775146.jsx"),
  Chunk619733 = require("./619733.js"),
  Chunk160589 = require("./160589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk667362 = require("./667362.js");

function f(e) {
  let {
    guildId: n
  } = e, t = (0, i.e7)([s.default], () => s.default.getCurrentUser());
  if (null == t) return null;
  let f = (0, d.Z4)(t.id, n);
  return (0, a.jsx)(c.Z, {
    actions: (0, a.jsx)(r.zxk, {
      variant: "secondary",
      fullWidth: true,
      text: m.intl.string(u.default.f0xbih),
      icon: r.Gr1,
      iconPosition: "end",
      onClick: () => (0, o.q)({
        href: f
      })
    }),
    children: (0, a.jsxs)("div", {
      className: g.content,
      children: [(0, a.jsx)(l.c0, {
        alt: "",
        width: 117,
        height: 78
      }), (0, a.jsxs)("div", {
        className: g.contentBody,
        children: [(0, a.jsx)(r.X6q, {
          variant: "heading-md/semibold",
          children: m.intl.string(u.default.qE2eqK)
        }), (0, a.jsx)(r.xvT, {
          variant: "text-sm/medium",
          children: m.intl.string(u.default.n4Towj)
        })]
      })]
    })
  })
}