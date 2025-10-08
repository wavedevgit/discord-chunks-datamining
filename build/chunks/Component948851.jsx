/** Chunk was on 7654 **/
/** chunk id: 948851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk533800 = require("./533800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk630388 = require("./630388.js"),
  Chunk971130 = require("./971130.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk633297 = require("./633297.js");
let d = Chunk971130.ZP.getMaxUsesOptions;

function c(e) {
  var t;
  let {
    shouldHideTemporaryInviteToggle: n,
    maxAgeOptions: c,
    maxAge: g,
    maxUses: h,
    temporary: m,
    onGenerateNewLink: p,
    onToggleTemporary: v,
    onSelectMaxAge: I,
    onSelectMaxUses: x,
    isGuestInviteCreationToggleEnabled: f,
    inviteFlags: N,
    onSetInviteFlags: S
  } = e, _ = a.ZP.getMaxAgeOptionByValue(g), j = d.find(e => e.value === h);
  return (0, l.jsx)("div", {
    className: u.settingsContent,
    children: (0, l.jsxs)("form", {
      onSubmit: p,
      className: u.settingsForm,
      children: [(0, l.jsx)(s.VcW, {
        label: o.intl.string(o.t["60qw29"]),
        options: c,
        value: null != (t = null == _ ? true : _.value) ? t : c[0].value,
        onChange: I
      }), (0, l.jsx)(s.VcW, {
        label: o.intl.string(o.t.jDqWHR),
        options: d,
        value: null == j ? true : j.value,
        onChange: x
      }), !n && (0, l.jsx)(s.rsf, {
        checked: m,
        onChange: e => v(e),
        description: o.intl.string(o.t.UN5IRU),
        label: o.intl.string(o.t["wE+9dn"])
      }), f && (0, l.jsx)(s.rsf, {
        checked: (0, r.yE)(N, i.$.IS_GUEST_INVITE),
        onChange: e => S((0, r.mB)(N, i.$.IS_GUEST_INVITE, e)),
        description: o.intl.string(o.t["/FeTKy"]),
        label: o.intl.string(o.t.siexRU)
      })]
    })
  })
}