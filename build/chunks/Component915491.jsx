/** Chunk was on 88615 **/
/** chunk id: 915491, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk449859 = require("./449859.jsx"),
  Chunk777347 = require("./777347.js"),
  Chunk967144 = require("./967144.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk445735 = require("./445735.js");

function m(e) {
  let {
    boost: t
  } = e, {
    timestamp: n,
    username: m,
    roleColor: f,
    roleColorStrings: v
  } = (0, a.U)(t), g = (0, u.gn)(t.guildId, t.userId, null != v ? v : null);
  return (0, r.jsxs)("div", {
    className: p.og,
    children: [(0, r.jsx)(o._Jp, {
      className: p.Kk,
      color: "currentColor",
      size: "sm"
    }), (0, r.jsx)("span", {
      className: p.x$,
      children: (0, r.jsxs)(l.EYj, {
        tag: "span",
        variant: "text-md/medium",
        lineClamp: 1,
        children: [(0, r.jsx)(i.m_, {
          text: m,
          shouldShow: true,
          asContainer: true,
          delay: 1e3,
          children: (0, r.jsx)(o.gyj, {
            className: p.IP,
            variant: "text-md/semibold",
            name: m,
            colorString: null != f ? f : null,
            colorStrings: g
          })
        }), c.intl.string(d.default.plwH8d)]
      })
    }), (0, r.jsx)(s.A, {
      timestamp: n,
      timestampFormat: "L",
      className: p.vE
    })]
  })
}