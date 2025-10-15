/** Chunk was on 8570 **/
/** chunk id: 651138, original params: e,a,s (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk434404 = require("./434404.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    guild: a,
    onSelect: s
  } = e, [p, b] = t.useState(a.premiumProgressBarEnabled), [h, g] = t.useState(false), k = (0, n.e7)([c.Z], () => c.Z.can(o.Plq.MANAGE_GUILD, a)), m = async () => {
    k && (g(true), await l.Z.saveGuild(a.id, {
      premiumProgressBarEnabled: !p
    }), b(!p), g(false))
  };
  return (0, r.jsx)(i.v2r, {
    navId: "progress-bar-context",
    onClose: d.Zy,
    "aria-label": u.intl.string(u.t["m85s/v"]),
    onSelect: s,
    children: (0, r.jsx)(i.S89, {
      id: "progress-bar-enabled",
      label: u.intl.string(u.t["0CJWPz"]),
      checked: p,
      disabled: h,
      action: m
    })
  })
}