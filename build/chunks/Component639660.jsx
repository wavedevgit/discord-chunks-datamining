/** Chunk was on 44799 **/
/** chunk id: 639660, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk166146 = require("./166146.js"),
  Chunk247048 = require("./247048.js"),
  Chunk975706 = require("./975706.js"),
  Chunk800869 = require("./800869.jsx"),
  Chunk366751 = require("./366751.jsx"),
  Chunk309945 = require("./309945.jsx"),
  Chunk225039 = require("./225039.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk754747 = require("./754747.js");

function v(e) {
  let {
    text: t
  } = e;
  return (0, r.jsx)("div", {
    className: m.staffContainer,
    children: (0, r.jsx)(i.xvT, {
      variant: "text-sm/medium",
      children: t
    })
  })
}

function g(e) {
  let {
    guildId: t
  } = e, n = (0, a.Z)(t), g = (0, o.Z)(t), x = (0, l.Z)(t), b = (0, d.Z)(g.shouldShow || x.shouldShow);
  return n.shouldShow || g.shouldShow || x.shouldShow || b.shouldShow ? (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsx)(i.xvT, {
      variant: "eyebrow",
      color: "text-subtle",
      children: p.intl.string(f.default["3FRirU"])
    }), n.shouldShow && (0, r.jsx)(v, {
      text: n.text
    }), g.shouldShow && (0, r.jsx)(c.Z, {
      guildId: t,
      powerupNames: g.expiringPowerupNames,
      warnings: g.warnings
    }), x.shouldShow && null != x.notificationConfig && (0, r.jsx)(u.Z, {
      notificationConfig: x.notificationConfig,
      markAsDismissed: x.markAsDismissed
    }), b.shouldShow && (0, r.jsx)(s.Z, {
      markAsDismissed: b.markAsDismissed
    })]
  }) : null
}