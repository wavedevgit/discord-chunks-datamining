/** Chunk was on 60458 **/
/** chunk id: 113679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk279542 = require("./279542.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk140031 = require("./140031.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk530667 = require("./530667.js");

function g(e) {
  let {
    guild: t
  } = e, n = i.useId(), g = (0, l.e7)([o.Z], () => null != t && o.Z.can(d.Plq.MANAGE_GUILD, t), [t]), p = t.features.has(d.oNc.COMMUNITY), [h, f] = i.useState(t.features.has(d.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), b = i.useCallback(async e => {
    f(e), await (0, s.fp)(t, e)
  }, [t]);
  return p ? null : (0, r.jsxs)("div", {
    className: m.bannerContainer,
    children: [(0, r.jsx)(c.Z, {
      width: 64,
      height: 64
    }), (0, r.jsxs)("div", {
      className: m.headingContainer,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: u.intl.string(u.t.jDarm5)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: u.intl.string(u.t["/ee7yM"])
      })]
    }), (0, r.jsx)("div", {
      className: m.buttonContainer,
      children: (0, r.jsx)(a.rsf, {
        id: n,
        checked: h,
        onChange: b,
        disabled: !g
      })
    })]
  })
}