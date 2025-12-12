/** Chunk was on 9536 **/
/** chunk id: 113679, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk450377 = require("./450377.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk140031 = require("./140031.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk822809 = require("./822809.js");

function f(e) {
  let {
    guild: t
  } = e, n = i.useId(), f = (0, l.e7)([o.Z], () => null != t && o.Z.can(d.Plq.MANAGE_GUILD, t), [t]), m = t.features.has(d.GuildFeatures.COMMUNITY), [b, p] = i.useState(t.features.has(d.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), h = i.useCallback(async e => {
    p(e), await (0, s.fp)(t, e)
  }, [t]);
  return m ? null : (0, r.jsxs)("div", {
    className: g.bannerContainer,
    children: [(0, r.jsx)(c.Z, {
      width: 64,
      height: 64
    }), (0, r.jsxs)("div", {
      className: g.headingContainer,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: u.intl.string(u.t.jDarmy)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: u.intl.string(u.t["/ee7yK"])
      })]
    }), (0, r.jsx)("div", {
      className: g.buttonContainer,
      children: (0, r.jsx)(a.rsf, {
        id: n,
        checked: b,
        onChange: h,
        disabled: !f
      })
    })]
  })
}