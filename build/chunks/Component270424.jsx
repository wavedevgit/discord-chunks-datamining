/** Chunk was on 19750 **/
/** chunk id: 270424, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk492917 = require("./492917.js"),
  Chunk287809 = require("./287809.js"),
  Chunk307600 = require("./307600.js"),
  Chunk496587 = require("./496587.jsx"),
  Chunk800007 = require("./800007.js"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk710882 = require("./710882.js");

function m(e) {
  let {
    guildId: t
  } = e, n = (0, l.bG)([s.default], () => s.default.getCurrentUser());
  if (null == n) return null;
  let m = (0, d.yC)(n.id, t);
  return (0, r.jsx)(o.A, {
    actions: (0, r.jsx)(a.$nd, {
      variant: "secondary",
      fullWidth: true,
      text: f.intl.string(u.default.f0xbih),
      icon: a.I9m,
      iconPosition: "end",
      onClick: () => (0, c.h)({
        href: m
      })
    }),
    children: (0, r.jsxs)("div", {
      className: b.Q,
      children: [(0, r.jsx)(i.u7P, {
        alt: "",
        width: 117,
        height: 78
      }), (0, r.jsxs)("div", {
        className: b.y,
        children: [(0, r.jsx)(a.DZT, {
          variant: "heading-md/semibold",
          children: f.intl.string(u.default.qE2eqK)
        }), (0, r.jsx)(a.EYj, {
          variant: "text-sm/medium",
          children: f.intl.string(u.default.n4Towj)
        })]
      })]
    })
  })
}