/** Chunk was on 9536 **/
/** chunk id: 113679, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk450377 = require("./450377.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk822809 = require("./822809.js");

function g(e) {
  let {
    guild: t
  } = e, n = (0, l.e7)([o.Z], () => null != t && o.Z.can(c.Plq.MANAGE_GUILD, t), [t]), g = t.features.has(c.GuildFeatures.COMMUNITY), [m, f] = i.useState(t.features.has(c.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), b = i.useCallback(async e => {
    f(e), await (0, s.fp)(t, e)
  }, [t]);
  return g ? null : (0, r.jsx)("div", {
    className: u.container,
    children: (0, r.jsx)(a.rsf, {
      label: d.intl.string(d.t.jDarmy),
      description: d.intl.string(d.t["/ee7yK"]),
      checked: m,
      onChange: b,
      disabled: !n
    })
  })
}