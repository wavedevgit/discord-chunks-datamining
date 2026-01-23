/** Chunk was on 88615 **/
/** chunk id: 931936, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk630117 = require("./630117.js"),
  Chunk613943 = require("./613943.js"),
  Chunk71478 = require("./71478.js"),
  Chunk636086 = require("./636086.jsx"),
  Chunk180185 = require("./180185.jsx"),
  Chunk629721 = require("./629721.jsx"),
  Chunk269032 = require("./269032.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk181978 = require("./181978.js");

function v(e) {
  let {
    text: t
  } = e;
  return (0, r.jsx)("div", {
    className: f.ac,
    children: (0, r.jsx)(l.EYj, {
      variant: "text-sm/medium",
      children: t
    })
  })
}

function g(e) {
  let {
    guildId: t
  } = e, n = (0, s.A)(t), g = (0, i.A)(t), A = (0, o.A)(t), _ = (0, c.A)(g.shouldShow || A.shouldShow);
  return n.shouldShow || g.shouldShow || A.shouldShow || _.shouldShow ? (0, r.jsxs)("div", {
    className: f.kL,
    children: [(0, r.jsx)(l.EYj, {
      variant: "eyebrow",
      color: "text-subtle",
      children: m.intl.string(p.default["3FRirU"])
    }), n.shouldShow && (0, r.jsx)(v, {
      text: n.text
    }), g.shouldShow && (0, r.jsx)(d.A, {
      guildId: t,
      powerupNames: g.expiringPowerupNames,
      warnings: g.warnings
    }), A.shouldShow && null != A.notificationConfig && (0, r.jsx)(u.A, {
      notificationConfig: A.notificationConfig,
      markAsDismissed: A.markAsDismissed
    }), _.shouldShow && (0, r.jsx)(a.A, {
      markAsDismissed: _.markAsDismissed
    })]
  }) : null
}