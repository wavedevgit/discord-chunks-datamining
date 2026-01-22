/** Chunk was on 88615 **/
/** chunk id: 931936, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => A
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
    className: m.ac,
    children: (0, r.jsx)(n.EYj, {
      variant: "text-sm/medium",
      children: t
    })
  })
}

function A(e) {
  let {
    guildId: t
  } = e, l = (0, o.A)(t), A = (0, i.A)(t), g = (0, s.A)(t), x = (0, c.A)(A.shouldShow || g.shouldShow);
  return l.shouldShow || A.shouldShow || g.shouldShow || x.shouldShow ? (0, r.jsxs)("div", {
    className: m.kL,
    children: [(0, r.jsx)(n.EYj, {
      variant: "eyebrow",
      color: "text-subtle",
      children: p.intl.string(f.default["3FRirU"])
    }), l.shouldShow && (0, r.jsx)(v, {
      text: l.text
    }), A.shouldShow && (0, r.jsx)(d.A, {
      guildId: t,
      powerupNames: A.expiringPowerupNames,
      warnings: A.warnings
    }), g.shouldShow && null != g.notificationConfig && (0, r.jsx)(u.A, {
      notificationConfig: g.notificationConfig,
      markAsDismissed: g.markAsDismissed
    }), x.shouldShow && (0, r.jsx)(a.A, {
      markAsDismissed: x.markAsDismissed
    })]
  }) : null
}