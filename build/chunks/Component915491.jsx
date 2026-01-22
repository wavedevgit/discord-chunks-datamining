/** Chunk was on 88615 **/
/** chunk id: 915491, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  let {
    boost: t
  } = e, {
    timestamp: l,
    username: p,
    roleColor: m,
    roleColorStrings: v
  } = (0, a.U)(t), A = (0, u.gn)(t.guildId, t.userId, null != v ? v : null);
  return (0, r.jsxs)("div", {
    className: f.og,
    children: [(0, r.jsx)(s._Jp, {
      className: f.Kk,
      color: "currentColor",
      size: "sm"
    }), (0, r.jsx)("span", {
      className: f.x$,
      children: (0, r.jsxs)(n.EYj, {
        tag: "span",
        variant: "text-md/medium",
        lineClamp: 1,
        children: [(0, r.jsx)(i.m_, {
          text: p,
          shouldShow: true,
          asContainer: true,
          delay: 1e3,
          children: (0, r.jsx)(s.gyj, {
            className: f.IP,
            variant: "text-md/semibold",
            name: p,
            colorString: null != m ? m : null,
            colorStrings: A
          })
        }), c.intl.string(d.default.plwH8d)]
      })
    }), (0, r.jsx)(o.A, {
      timestamp: l,
      timestampFormat: "L",
      className: f.vE
    })]
  })
}