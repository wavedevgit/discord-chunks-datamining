/** Chunk was on 99014 **/
/** chunk id: 604857, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk639777 = require("./639777.js"),
  Chunk973772 = require("./973772.js"),
  Chunk880419 = require("./880419.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk856945 = require("./856945.js");

function b(e) {
  let {
    className: t,
    guildId: o,
    powerup: r,
    onError: b,
    onClose: f
  } = e, m = (0, i.ZP)(o, r), I = m.type === u.A3.TIER_OVERRIDE_ACTIVATED, _ = (0, s.Z)(o), O = null == m.sourceEntitlement || !_;
  return (0, n.jsxs)("div", {
    className: a()(p.container, {
      [p.disabled]: O
    }, t),
    children: [!I && _ && (0, n.jsx)(l.ZP, {
      guildId: o,
      powerup: r,
      onError: b,
      grow: false,
      compact: !O
    }), (0, n.jsx)(c.zx, {
      color: O ? c.Tt.PRIMARY : c.Tt.BRAND,
      onClick: f,
      children: d.intl.string(d.t.cpT0Cg)
    })]
  })
}