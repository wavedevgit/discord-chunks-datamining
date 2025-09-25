/** Chunk was on 64523 **/
/** chunk id: 113679, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk450377 = require("./450377.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk140031 = require("./140031.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk49465 = require("./49465.js");

function p(e) {
  let {
    guild: t
  } = e, n = i.useId(), p = (0, l.e7)([c.Z], () => null != t && c.Z.can(u.Plq.MANAGE_GUILD, t), [t]), f = t.features.has(u.oNc.COMMUNITY), [h, x] = i.useState(t.features.has(u.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), b = i.useCallback(async e => {
    x(e), await (0, o.fp)(t, e)
  }, [t]);
  return f ? null : (0, r.jsxs)("div", {
    className: g.bannerContainer,
    children: [(0, r.jsx)(d.Z, {
      width: 64,
      height: 64
    }), (0, r.jsxs)("div", {
      className: g.headingContainer,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: m.intl.string(m.t.jDarm5)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: m.intl.string(m.t["/ee7yM"])
      })]
    }), (0, r.jsx)("div", {
      className: g.buttonContainer,
      children: (0, r.jsx)(s.T2, {
        id: n,
        checked: h,
        onChange: b,
        disabled: !p
      })
    })]
  })
}